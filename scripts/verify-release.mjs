import assert from "node:assert/strict";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { builtRoutes } from "./build-pages.mjs";
import { load } from "./lib/load-ts.mjs";
const { handouts } = load("internal/handouts/data.ts");
const workshops = JSON.parse(readFileSync("data/workshop-drafts.json", "utf8"));
const { publications } = load("data/publications.ts");
function files(dir) {
  return existsSync(dir)
    ? readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
        e.isDirectory() ? files(join(dir, e.name)) : [join(dir, e.name)],
      )
    : [];
}
assert.ok(
  !builtRoutes.some((r) =>
    /^\/(internal|docs|workshops)\b|\/handouts\//.test(r),
  ),
);
for (const p of publications.filter((p) => p.status !== "published"))
  assert.ok(!builtRoutes.includes(`/research/${p.slug}`));
const markers = [
  ...handouts.map((h) => h.title),
  ...workshops.map((w) => w.reviewStatus),
  ...publications.filter((p) => p.status !== "published").map((p) => p.title),
];
const assets = [
  ...files(".next/static"),
  ...files("public"),
  ...files(".next/server/app").filter((f) => /\.(html|rsc|body)$/.test(f)),
];
for (const file of assets) {
  if (!/\.(?:js|json|html|rsc|txt|map|body|md)$/.test(file)) continue;
  const text = readFileSync(file, "utf8");
  for (const marker of markers)
    assert.ok(
      !text.includes(marker),
      `${file}: private draft content exposed: ${marker}`,
    );
  assert.ok(
    !text.includes('href="/education/handouts/'),
    `${file}: draft navigation`,
  );
}
for (const file of files("app"))
  if (/\.(ts|tsx)$/.test(file))
    assert.ok(
      !/from ["'][^"']*(?:internal\/|workshop-drafts)/.test(
        readFileSync(file, "utf8"),
      ),
      `${file}: internal draft import`,
    );
const sitemap = readFileSync(".next/server/app/sitemap.xml.body", "utf8");
assert.ok(!/handouts|workshops|internal|test-report/.test(sitemap));
console.log(
  `PASS release isolation: ${handouts.length} handouts and ${workshops.length} workshop drafts absent from routes, navigation, public assets and sitemap.`,
);
