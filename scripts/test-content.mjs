import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { createRequire } from "node:module";
import vm from "node:vm";
import ts from "typescript";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";

// Transpile the real TS/TSX modules in memory, without a new runtime dependency
// or emitted files in the repository. Resolve the app's existing @ alias.
const require = createRequire(import.meta.url);
const cache = new Map();
function load(filename) {
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
const { resources, audiences, topics, formats } = load("data/resources.ts");
const { contributors, resolveContributors } = load("data/contributors.ts");
const {
  publications,
  validatePublication,
  publishedPublications,
  getPublication,
} = load("data/publications.ts");
const { publicationSchema, suggestedCitation } = load(
  "lib/publication-schema.ts",
);
const { resourceSchema } = load("lib/structured-data.ts");
const { PublicationArticle } = load(
  "components/research/PublicationArticle.tsx",
);
const { EditorialResponsibility } = load(
  "components/content/EditorialResponsibility.tsx",
);
const familySlugs = [
  "internet-safety-parents",
  "online-safety-kids",
  "teen-online-safety",
  "gaming-scams",
  "online-safety-older-adults",
];
for (const slug of familySlugs) {
  const resource = resources.find((r) => r.slug === slug);
  assert.ok(resource, `Missing family resource: ${slug}`);
  assert.equal(
    resource.publishedAt,
    undefined,
    "Assign first publication dates at release",
  );
  assert.ok(resource.sourceCheckedAt);
  assert.equal(resource.editorial?.reviewers, undefined);
  assert.ok(resource.sections.length && resource.actions.length >= 3);
  assert.ok(resource.sources.length >= 2);
}
const { programPathways } = load("data/program-pathways.ts");
for (const pathway of programPathways) {
  assert.ok(resources.some((r) => r.slug === pathway.resource));
  assert.ok(pathway.objective && pathway.access && pathway.format);
}
const intents = JSON.parse(
  readFileSync("docs/seo/content-expansion-20261008/intent-map.json", "utf8"),
);
assert.equal(new Set(intents.map((i) => i.path)).size, intents.length);
assert.equal(new Set(intents.map((i) => i.primaryIntent)).size, intents.length);
for (const r of resources) {
  assert.ok(
    intents.some(
      (i) => i.path === `/education/${r.slug}` && i.status === "implemented",
    ),
  );
  assert.ok(r.summary.trim() && r.intro.trim() && r.sources.length);
  assert.ok(r.readingMinutes > 0);
  for (const link of r.helpLinks ?? []) {
    assert.ok(link.label.trim());
    assert.equal(new URL(link.url).protocol, "https:");
  }
  if (r.sourceCheckedAt)
    assert.ok(/^\d{4}-\d{2}-\d{2}$/.test(r.sourceCheckedAt));
}
const childResource = resources.find((r) => r.slug === "online-safety-kids");
assert.ok(childResource.audience.includes("children"));
assert.ok(childResource.helpLinks.some((s) => s.url.includes("cybertipline")));
assert.ok(
  !resources
    .find((r) => r.slug === "recognize-a-scam")
    .audience.includes("children"),
);
assert.equal(new Set(resources.map((r) => r.slug)).size, resources.length);
assert.equal(new Set(resources.map((r) => r.title)).size, resources.length);
assert.equal(contributors.length, 0, "No identities supplied for this release");
assert.equal(publications.length, 0, "No report is approved for this release");
assert.deepEqual(publishedPublications(), []);
assert.equal(getPublication("unpublished-example"), undefined);
assert.throws(() => resolveContributors(["unknown"]), /Unknown contributor/);
const newSlugs = [
  "human-targeted-attacks",
  "after-a-scam",
  "qr-link-safety",
  "phone-impersonation",
  "family-emergency-scams",
];
for (const r of resources) {
  r.audience.forEach((a) => assert.ok(audiences.some((v) => v.id === a)));
  r.topics.forEach((a) => assert.ok(topics.some((v) => v.id === a)));
  assert.ok(formats.some((v) => v.id === r.format));
  r.related.forEach((slug) =>
    assert.ok(
      slug !== r.slug && resources.some((item) => item.slug === slug),
      `Broken related link: ${r.slug} -> ${slug}`,
    ),
  );
  assert.equal(new Set(r.related).size, r.related.length);
  for (const s of r.sources) {
    assert.ok(s.label.trim());
    assert.equal(new URL(s.url).protocol, "https:");
  }
  for (const s of r.sections ?? [])
    for (const url of s.sourceUrls ?? [])
      assert.ok(r.sources.some((item) => item.url === url));
  const schema = resourceSchema(r);
  assert.equal(schema.dateModified, r.updatedAt);
  if (newSlugs.includes(r.slug)) {
    assert.equal(
      r.publishedAt,
      undefined,
      "Do not backdate an unreleased page",
    );
    assert.equal(schema.datePublished, undefined);
    assert.ok(r.editorial.reviewedAt);
    assert.ok(r.sections.length);
  }
  if (r.editorial)
    assert.equal(schema.mainEntityOfPage.lastReviewed, r.editorial.reviewedAt);
}
// Synthetic records exist only in this test process, never in app data/public/.
const person = {
  id: "test-author",
  name: "Test Author",
  bio: "Synthetic test biography.",
  credentials: ["Synthetic test credential"],
};
contributors.push(person);
const sample = {
  slug: "test-report",
  status: "published",
  kind: "report",
  schemaType: "Report",
  title: "Synthetic test report",
  subtitle: "Test only",
  summary: "Synthetic test summary.",
  editorial: {
    authors: [person.id],
    reviewers: [person.id],
    editors: [person.id],
    contributors: [person.id],
    reviewedAt: "2026-10-07",
  },
  publishedAt: "2026-10-07",
  updatedAt: "2026-10-07",
  abstract: "Test abstract.",
  executiveSummary: "Test executive summary.",
  keyFindings: ["Test finding, not a real research claim."],
  methodology: "Test methodology.",
  limitations: "Test limitations.",
  body: [
    {
      id: "test-body",
      title: "Test body",
      paragraphs: [
        "Synthetic body content.",
        "Synthetic test biography.",
        "Synthetic test credential",
      ],
      sourceUrls: ["https://example.org/reference"],
    },
  ],
  references: [
    { label: "Synthetic reference", url: "https://example.org/reference" },
  ],
  version: "1",
  relatedResearch: [],
  relatedResources: ["recognize-a-scam"],
};
validatePublication(sample);
for (const type of ["Report", "ScholarlyArticle", "Article", "CreativeWork"]) {
  const p = {
    ...sample,
    schemaType: type,
    kind: type === "ScholarlyArticle" ? "study" : "report",
  };
  const json = JSON.parse(JSON.stringify(publicationSchema(p)));
  assert.equal(json["@type"], type);
  assert.equal(json.author[0].name, person.name);
  assert.equal(json.mainEntityOfPage.reviewedBy[0].name, person.name);
  assert.equal(
    json.publisher["@id"],
    "https://www.zorasafefoundation.org/#organization",
  );
}
const withPdf = {
  ...sample,
  pdf: {
    url: "/research/test-report/v1.pdf",
    label: "Download test report",
    bytes: 2048,
    version: "1",
  },
};
assert.equal(
  publicationSchema(withPdf).encoding.encodingFormat,
  "application/pdf",
);
assert.ok(
  suggestedCitation(sample).includes(
    "Test Author. (2026). Synthetic test report.",
  ),
);
assert.equal(publicationSchema({ ...sample, status: "draft" }), null);
assert.deepEqual(
  publishedPublications([
    { ...sample, status: "draft" },
    { ...sample, status: "review" },
  ]),
  [],
);
assert.throws(() => suggestedCitation({ ...sample, status: "draft" }));
assert.throws(() =>
  PublicationArticle({ publication: { ...sample, status: "draft" } }),
);
for (const bad of [
  { ...sample, editorial: { authors: ["unknown"] } },
  { ...sample, editorial: {} },
  { ...sample, publishedAt: "2026-02-30" },
  { ...sample, updatedAt: "2025-10-07" },
  { ...sample, body: [] },
  { ...sample, references: [] },
  { ...sample, limitations: "" },
  { ...sample, schemaType: "ScholarlyArticle" },
  { ...sample, body: [{ ...sample.body[0], id: "abstract" }] },
  {
    ...sample,
    body: [{ ...sample.body[0], sourceUrls: ["https://example.org/missing"] }],
  },
  { ...withPdf, pdf: { ...withPdf.pdf, url: "/../secret.pdf" } },
])
  assert.throws(() => validatePublication(bad));
assert.throws(() => publishedPublications([sample, sample]), /Duplicate/);
assert.throws(
  () => publishedPublications([{ ...sample, relatedResearch: ["missing"] }]),
  /Related/,
);
assert.throws(() => publishedPublications([withPdf]), /ENOENT/);
assert.throws(
  () => publishedPublications([{ ...sample, relatedResources: ["missing"] }]),
  /Missing related education/,
);
const html = renderToStaticMarkup(
  createElement(PublicationArticle, { publication: withPdf }),
);
for (const phrase of [
  "Abstract",
  "Executive summary",
  "Key findings",
  "Methodology",
  "Limitations",
  "References",
  "Suggested citation",
  "Written by",
  "Reviewed by",
  "Edited by",
  "Contributions from",
  "PDF, 2 KB",
  "Synthetic body content.",
  "Synthetic test biography.",
  "Synthetic test credential",
])
  assert.ok(html.includes(phrase), phrase);
assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
const bare = renderToStaticMarkup(createElement(EditorialResponsibility, {}));
assert.ok(!bare.includes("Written by") && !bare.includes("Reviewed by"));
contributors.pop();
assert.equal(contributors.length, 0);
console.log(
  "PASS content: resource expansion, taxonomies, sources, related links, dates, empty contributor/report registries, publication schema variants, draft exclusion, release validation, citation/PDF and template rendering.",
);
