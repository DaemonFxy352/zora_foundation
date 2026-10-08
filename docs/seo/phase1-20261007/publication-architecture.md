# Publication architecture — proposed, not published

This is a repository design document, not a public research page. No finished Foundation report, whitepaper, dataset, author biography, or downloadable report was found in this repository on October 7, 2026.

## Stable HTML and PDF pair

Use `/research/<stable-slug>` as the self-canonical HTML page. Link it from `/research#reports`, relevant educational guides and applicable programs. A versioned PDF can live at `/public/research/<slug>/<version>.pdf`. Every report must remain intelligible as HTML; do not ship a download-only landing page. Keep draft files out of `public/`, route generation and sitemaps.

The PDF should have a title, authors, institutional affiliation, publication/version date, searchable selectable text, tagged headings, accessible reading order, descriptive chart text and the canonical HTML URL. Link from HTML with a meaningful label, file type, size and version. Future PDF responses should use an HTTP `Link: <canonical-html-url>; rel="canonical"` header when the PDF represents the same work. Verify header behavior in the chosen hosting system when there is an actual PDF; no infrastructure change is made now. A PDF supplement containing distinct data may warrant its own identity instead.

## Repeatable page outline

1. Breadcrumb: Home → Research → publication title.
2. Title and subtitle; real named authors linked to approved profiles; their documented affiliations. Distinguish author, editor, reviewer and funder.
3. Publication date, substantive revision date where applicable, version and publication type. Do not use build dates.
4. A short plain-language summary followed by the actual abstract/executive summary.
5. Research question and scope: population, jurisdiction, period, definitions and exclusions.
6. Key findings, each traceable to evidence; tables/charts must include units, sample, source and explanatory captions.
7. Methodology: design, collection, recruitment/sampling, analysis, ethics/privacy considerations, conflicts and funding disclosures where applicable.
8. Limitations: generalizability, uncertainty, selection bias and what the evidence does not establish.
9. Implications for prevention and education, explicitly separated from demonstrated results.
10. Full report in HTML with anchors, references and accessible figures. Where exceptionally long, link crawlable chapters with a clear parent hierarchy.
11. Download the matching accessible PDF; identify supplementary material separately.
12. Suggested citation: real authors, year, exact title, Foundation, version and stable URL. Include a DOI only when actually registered. Offer plain text before adding citation file formats.
13. Related research and public education with descriptive contextual links.
14. Public research contact: existing `hello@zorasafefoundation.org`, not an invented press team.
15. Revision/correction history and an appropriate reuse/license statement approved by the Foundation.

## Proposed data contract

A future `Publication` record should support: `slug`, `status` (draft/review/published), `kind`, `title`, `subtitle`, `summary`, `abstract`, `authors` (verified profile IDs and affiliations), `publishedAt`, optional `updatedAt`, `version`, `researchQuestion`, `methods`, `findings`, `limitations`, `implications`, `body`, `references` (stable IDs, authors, dates, titles, URLs/DOIs), `pdf` (URL/version/bytes/accessibility status), `citation`, `relatedResourceSlugs`, `relatedPublicationSlugs`, `funding`, `conflicts`, `contact`, `corrections`, `license`.

Only `published` records should produce public routes, sitemap entries, visible cards, feeds or structured data. Required fields must be validated before release. Optional fields must be omitted rather than populated with placeholders. Resource dates already exist in `data/resources.ts`; publication dates need equivalent editorial ownership. Migrate these explicit fields to a CMS later without changing stable public URLs.

## Schema selection

| Actual work | Treatment |
| --- | --- |
| Current research overview | Web page with Organization context and BreadcrumbList; no completed research schema |
| Published institutional report / whitepaper | `Report` with truthful name/headline, abstract, author, publisher, dates, reportNumber only if assigned, references/citation, mainEntityOfPage and accessible PDF encoding |
| Actual scholarly study | `ScholarlyArticle` only when the work is scholarly; never imply peer review without evidence |
| Editorial explanation / research brief | `Article`, or `Report` if genuinely a report; choose one main identity appropriate to the work |
| Reusable downloadable material | `CreativeWork` / `LearningResource` according to actual purpose |
| Real documented released data | `Dataset` with provenance, variables, license and distribution; not a label for a report table |
| Verified contributor profile | `Person` with accurate name, role, affiliation and approved biography; no inferred qualifications |
| PDF representation of same work | `encoding: MediaObject` with `contentUrl` and `encodingFormat: application/pdf`; connect to the main work, do not create competing report entities |

`Report` is an [Article subtype in Schema.org](https://schema.org/Report). Schema vocabulary support does not promise a Google rich result. Keep the full visible publication aligned with its markup. Validate parseability, unique IDs, author/date/source parity, PDF HTTP status, canonical URL and related links in tests.

## Publication release gate

A responsible editor must confirm authorship, permission to publish, evidence and references, methodology/limitations, versions and dates, accessible HTML/PDF equivalence, funding/conflicts, reproducible charts where possible and correction contact. This is proposed future editorial governance, not a claim that the current launch guides have undergone expert review.

HTML publication template implemented: **NO** (specification only). PDF strategy defined: **YES**, no current report PDF. Suggested citation support: **specified, not implemented**. No unfinished research has been published in Phase 1.
