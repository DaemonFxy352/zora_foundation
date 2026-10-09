import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";

import { load } from "./lib/load-ts.mjs";
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
    assert.equal(r.editorial?.reviewedAt, undefined, "No review date without recorded human review");
    assert.ok(r.sections.length);
  }
  if (r.editorial?.reviewedAt) assert.ok(r.editorial.reviewers?.length, "A review needs a named, approved reviewer");
  assert.equal(schema.mainEntityOfPage.lastReviewed,
    r.editorial?.reviewers?.length ? r.editorial.reviewedAt : undefined);
}
// Exercise the exact search helper used by the client, with real summary data.
const { resourceSummaries } = load("data/resources.ts");
const { filterResources, emptyResourceFilters } = load(
  "lib/resource-search.ts",
);
const { handouts } = load("internal/handouts/data.ts");
const summaries = resourceSummaries();
const search = (query, filters = {}) =>
  filterResources(summaries, { ...emptyResourceFilters, query, ...filters });
assert.equal(search(" ").length, resources.length);
assert.ok(
  search("  FAMILY   VERIFICATION ").some(
    (r) => r.slug === "verify-before-you-trust",
  ),
);
assert.ok(search("TEENAGERS").some((r) => r.slug === "teen-online-safety"));
assert.ok(
  search("financial fraud").some((r) => r.slug === "payment-redirection"),
);
assert.equal(search("zzzz-no-result").length, 0);
assert.ok(
  search("", { audience: "children" }).every((r) =>
    r.audience.includes("children"),
  ),
);
assert.ok(
  search("", { topic: "privacy", audience: "teenagers" }).every(
    (r) => r.topics.includes("privacy") && r.audience.includes("teenagers"),
  ),
);
assert.equal(search("", { format: "handout" }).length, 0);
assert.equal(search("", { format: "video" }).length, 0);
assert.equal(
  filterResources(summaries, emptyResourceFilters).length,
  resources.length,
);
assert.equal(new Set(handouts.map((h) => h.slug)).size, 7);
assert.equal(new Set(handouts.map((h) => h.resource)).size, 7);
for (const h of handouts) {
  assert.equal(h.status, "draft");
  assert.ok(resources.some((r) => r.slug === h.resource));
  assert.ok(h.steps.length >= 4 && h.help && h.response && h.practice);
  assert.equal(h.reviewedAt, undefined, "Do not invent review dates");
  assert.ok(!summaries.some((r) => r.handoutSlug === h.slug));
}
const workshopDrafts = JSON.parse(
  readFileSync("data/workshop-drafts.json", "utf8"),
);
assert.equal(workshopDrafts.length, 3);
for (const w of workshopDrafts) {
  assert.equal(w.status, "draft");
  assert.ok(w.reviewStatus.includes("pending"));
  w.resources.forEach((slug) =>
    assert.ok(resources.some((r) => r.slug === slug)),
  );
  w.handouts.forEach((slug) =>
    assert.ok(handouts.some((h) => h.slug === slug)),
  );
  assert.equal(
    w.outline.reduce((sum, part) => sum + part.minutes, 0),
    w.durationMinutes,
  );
  assert.ok(!existsSync(`app/workshops/${w.slug}/page.tsx`));
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
  reviewStatus: "editorial-review",
  history: [
    {
      version: "1",
      date: "2026-10-07",
      kind: "initial",
      summary: "Synthetic initial release.",
    },
  ],
  relatedResearch: [],
  relatedResources: ["recognize-a-scam"],
};
validatePublication(sample);
assert.throws(
  () => validatePublication({ ...sample, history: [] }),
  /version history/,
);
assert.throws(
  () => publishedPublications([{ ...sample, reviewStatus: "not-recorded", editorial: { authors: sample.editorial.authors } }]),
  /requires recorded editorial review/,
);
assert.throws(
  () => validatePublication({ ...sample, reviewStatus: "not-recorded" }),
  /conflicts/,
);
assert.throws(
  () =>
    validatePublication({
      ...sample,
      history: [{ ...sample.history[0], kind: "correction" }],
    }),
  /chronology/,
);
const corrected = {
  ...sample,
  version: "2",
  updatedAt: "2026-10-08",
  history: [
    ...sample.history,
    {
      version: "2",
      date: "2026-10-08",
      kind: "correction",
      summary: "Synthetic correction explanation.",
    },
  ],
};
validatePublication(corrected);
assert.equal(publicationSchema(corrected).dateModified, "2026-10-08");
assert.ok(
  renderToStaticMarkup(
    createElement(PublicationArticle, { publication: corrected }),
  ).includes("Synthetic correction explanation."),
);
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
