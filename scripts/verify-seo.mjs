import { builtRoutes } from "./build-pages.mjs";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const origin = "https://www.zorasafefoundation.org";
const root = ".next/server/app";
const read = (path) => readFileSync(join(root, path), "utf8");
const preview = process.argv.includes("--preview");
const pages = builtRoutes.map((r) => (r === "/" ? "index" : r.slice(1)));
const decode = (text) =>
  text
    .replaceAll("&amp;", "&")
    .replaceAll("&#x27;", "'")
    .replaceAll("&quot;", '"');
const sitemap = read("sitemap.xml.body");
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (m) => m[1],
);
assert.equal(new Set(locations).size, locations.length);
assert.equal(locations.length, pages.length - 2);
const intents = JSON.parse(
  readFileSync("docs/seo/content-expansion-20261008/intent-map.json", "utf8"),
);
for (const item of intents) {
  const page = item.path === "/" ? "index" : item.path.slice(1);
  assert.equal(
    pages.includes(page),
    item.status === "implemented",
    `${item.path}: intent/release status mismatch`,
  );
  if (item.status === "proposed")
    assert.ok(!locations.includes(`${origin}${item.path}`));
}
const titles = new Set();
const descriptions = new Set();
for (const page of pages) {
  const path = page === "index" ? "/" : `/${page}`;
  const html = read(`${page}.html`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(
    /<meta name="description" content="([^"]+)"/,
  )?.[1];
  assert.ok(title && !titles.has(title), `${path}: missing/duplicate title`);
  assert.ok(
    description && !descriptions.has(description),
    `${path}: missing/duplicate description`,
  );
  titles.add(title);
  descriptions.add(description);
  const visible = decode(
    html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, ""),
  );
  const json = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    ),
  ].map((m) => JSON.parse(m[1]));
  const ids = json.map((item) => item["@id"]).filter(Boolean);
  assert.equal(
    new Set(ids).size,
    ids.length,
    `${path}: duplicate entity definitions`,
  );
  const orgs = json.filter((item) => item["@type"] === "Organization");
  assert.equal(orgs.length, 1);
  const sites = json.filter((item) => item["@type"] === "WebSite");
  assert.equal(sites.length, 1);
  assert.equal(sites[0].url, `${origin}/`);
  assert.equal(sites[0].publisher["@id"], orgs[0]["@id"]);
  assert.equal(
    sites[0].potentialAction,
    undefined,
    "Do not invent public search",
  );
  assert.equal(orgs[0].name, "ZoraSafe Foundation");
  assert.equal(orgs[0].url, `${origin}/`);
  assert.equal(orgs[0].logo, `${origin}/icon-512.png`);
  for (const unsupported of [
    "taxID",
    "nonprofitStatus",
    "parentOrganization",
    "sameAs",
    "employee",
  ])
    assert.equal(orgs[0][unsupported], undefined);
  assert.ok(
    html.includes(
      `name="robots" content="${preview ? "noindex" : "index"}, follow"`,
    ),
  );
  const canonical = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)];
  assert.equal(canonical.length, 1);
  assert.equal(
    new URL(canonical[0][0].match(/href="([^"]+)"/)[1]).href,
    new URL(`${origin}${path}`).href,
  );
  assert.equal(
    locations.includes(`${origin}${path}`),
    !["accessibility", "editorial-standards"].includes(page),
  );
  if (page !== "index" && page !== "accessibility") {
    const crumbs = json.filter((item) => item["@type"] === "BreadcrumbList");
    assert.equal(crumbs.length, 1);
    const items = crumbs[0].itemListElement;
    assert.equal(items.at(-1).item, `${origin}${path}`);
    items.forEach((item, i) => {
      assert.equal(item.position, i + 1);
      assert.ok(visible.includes(item.name));
    });
  }
  if (page.startsWith("education/")) {
    const guides = json.filter((item) => item["@type"] === "LearningResource");
    assert.equal(guides.length, 1);
    const guide = guides[0];
    assert.equal(guide.url, `${origin}${path}`);
    assert.equal(guide.publisher["@id"], orgs[0]["@id"]);
    assert.equal(guide.author, undefined, "Do not invent author attribution");
    assert.ok(html.includes("Published by"));
    if (guide.datePublished)
      assert.ok(html.includes(`dateTime="${guide.datePublished}"`));
    if (guide.dateModified !== guide.datePublished)
      assert.ok(html.includes(`dateTime="${guide.dateModified}"`));
    const entry = sitemap.match(
      new RegExp(`<url>\\s*<loc>${origin}${path}</loc>([\\s\\S]*?)</url>`),
    );
    assert.ok(entry[1].includes(`<lastmod>${guide.dateModified}</lastmod>`));
    assert.ok(visible.includes(guide.name));
    assert.ok(visible.includes(guide.description));
    guide.audience.forEach((a) => assert.ok(visible.includes(a.audienceType)));
    guide.citation.forEach((c) => assert.ok(html.includes(`href="${c.url}"`)));
  }
  if (!page.startsWith("research/"))
    assert.ok(
      !json.some((item) =>
        ["ScholarlyArticle", "Report", "Dataset", "Person", "FAQPage"].includes(
          item["@type"],
        ),
      ),
      `${path}: unsupported research/person/FAQ schema`,
    );
}
assert.equal(
  (sitemap.match(/<lastmod>/g) || []).length,
  pages.filter((p) => p.startsWith("education/") || p.startsWith("research/"))
    .length,
  "Only resources and published reports have maintained dates",
);
const robots = read("robots.txt.body");
assert.ok(robots.includes("User-Agent: *\nAllow: /"));
assert.equal(robots.includes(`Sitemap: ${origin}/sitemap.xml`), !preview);
const missing = read("_not-found.html");
assert.ok(missing.includes('name="robots" content="noindex"'));
console.log(
  `PASS SEO: ${pages.length} pages; canonical uniqueness; Organization, breadcrumbs and LearningResource validation; visible publisher, audience, dates and citations; ${locations.length} sitemap entries; truthful lastmod; ${preview ? "preview noindex" : "production indexing"}; 404 noindex.`,
);
