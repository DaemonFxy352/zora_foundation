import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { createRequire } from "node:module";
import vm from "node:vm";
import ts from "typescript";
// Transpile the real TS/TSX modules in memory, without a new runtime dependency
// or emitted files in the repository. Resolve the app's existing @ alias.
const require = createRequire(import.meta.url);
const cache = new Map();
export function load(filename) {
  const file = resolve(filename);
  if (cache.has(file)) return cache.get(file).exports;
  const loadedModule = { exports: {} };
  cache.set(file, loadedModule);
  const code = ts.transpileModule(readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
    fileName: file,
  }).outputText;
  const localRequire = (id) => {
    if (!id.startsWith(".") && !id.startsWith("@/")) return require(id);
    const base = id.startsWith("@/")
      ? resolve(id.slice(2))
      : resolve(dirname(file), id);
    const target = [base, `${base}.ts`, `${base}.tsx`].find((p) =>
      existsSync(p),
    );
    assert.ok(target, `Unresolved test import ${id}`);
    return load(target);
  };
  vm.runInThisContext(`(function(require,module,exports){${code}\n})`, {
    filename: file,
  })(localRequire, loadedModule, loadedModule.exports);
  return loadedModule.exports;
}
