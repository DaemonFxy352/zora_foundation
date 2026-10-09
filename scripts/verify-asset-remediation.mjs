import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const fixture = JSON.parse(readFileSync("tests/fixtures/held-assets.json", "utf8"));
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");
const walk = (dir) => existsSync(dir) ? readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
  entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)],
) : [];
assert.ok(existsSync(".next/BUILD_ID"), "Run a production build first");
const blockedHashes = new Set(fixture.files.map((asset) => asset.sha256));
for (const asset of fixture.files) {
  assert.equal(sha256(execFileSync("git", ["show", `${fixture.productionCommit}:${asset.source}`])), asset.sha256);
  assert.ok(!existsSync(asset.source), `${asset.source}: held source still public`);
}
const emitted = [...walk("public"), ...walk(".next/static"), ...walk(".next/server")];
const references = /(?:hero|community-workshop|research)(?:\.[\w-]+)?\.webp|zorasafe-foundation-social\.(?:png|svg)|PHASE46_UNAPPROVED_POLICY/;
for (const file of emitted) {
  const bytes = readFileSync(file);
  assert.ok(!blockedHashes.has(sha256(bytes)), `${file}: held bytes emitted (possibly renamed)`);
  assert.ok(!references.test(file), `${file}: held filename emitted`);
  if (/\.(?:html|rsc|body|js|css|json|map|svg|txt)$/.test(file))
    assert.ok(!references.test(bytes.toString("utf8")), `${file}: held reference/draft in output`);
}

// The candidate may change homepage image presentation, but not other runtime
// files, content, routes, dependencies, navigation, metadata or infrastructure.
const runtimeChanges = new Set([
  "app/globals.css", "components/Hero.tsx", "components/Programs.tsx",
  "components/ResearchImpact.tsx", "components/HomeImage.tsx",
  ...fixture.files.map((asset) => asset.source),
]);
const changed = [
  ...execFileSync("git", ["diff", "--name-only", fixture.productionCommit, "--"], { encoding: "utf8" }).trim().split("\n"),
  ...execFileSync("git", ["ls-files", "--others", "--exclude-standard"], { encoding: "utf8" }).trim().split("\n"),
].filter(Boolean);
for (const file of changed) {
  assert.ok(runtimeChanges.has(file) || file.startsWith("docs/release/phase48-assets/") || [
    "README.md", "scripts/verify-asset-remediation.mjs",
    "tests/browser/asset-remediation.spec.ts", "tests/fixtures/held-assets.json",
    "docs/release/phase4-20261008/editorial-manifest.json",
  ].includes(file), `${file}: outside asset hotfix scope`);
}
console.log(`PASS asset remediation: five original hashes verified; ${emitted.length} output files checked; no held files/references or unrelated tracked changes.`);
