import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const origin = "https://www.zorasafefoundation.org";
const root = ".next/server/app";
const read = (path) => readFileSync(join(root, path), "utf8");
const preview = process.argv.includes("--preview");
const pages = [
  "index",
  "education",
  "programs",
  "research",
  "about",
  "leadership",
  "partner",
  "contact",
  "support",
  "accessibility",
  ...readdirSync(join(root, "education"))
    .filter((f) => f.endsWith(".html"))
    .map((f) => `education/${f.slice(0, -5)}`),
];
const decode = (text) =>
  text
    .replaceAll("&amp;", "&")
    .replaceAll("&#x27;", "'")
    .replaceAll("&quot;", '"');
const sitemap = read("sitemap.xml.body");
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (m) => m[1],
);
assert.equal(new Set(locations).size, 14);
assert.equal(locations.length, 14);
for (const page of pages) {
  const path = page === "index" ? "/" : `/${page}`;
  const html = read(`${page}.html`);
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
    page !== "accessibility",
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
  5,
  "Only resources have maintained publication dates",
);
const robots = read("robots.txt.body");
assert.ok(robots.includes("User-Agent: *\nAllow: /"));
assert.equal(robots.includes(`Sitemap: ${origin}/sitemap.xml`), !preview);
const missing = read("_not-found.html");
assert.ok(missing.includes('name="robots" content="noindex"'));
console.log(
  `PASS SEO: ${pages.length} pages; canonical uniqueness; Organization, breadcrumbs and LearningResource validation; visible publisher, audience, dates and citations; 14 sitemap entries; truthful lastmod; ${preview ? "preview noindex" : "production indexing"}; 404 noindex.`,
);
