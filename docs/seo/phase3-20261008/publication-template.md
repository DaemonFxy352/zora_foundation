# Internal publication preparation template

Do not add a placeholder record to the public catalog. Work internally until an
actual report and verified contributors exist. `data/publications.ts` remains empty.

Record:

- Stable slug, report kind, appropriate schema type, title, subtitle, summary.
- Status: draft → review → published only after organizational approval.
- Verified author/contributor IDs from `data/contributors.ts`; no invented identities.
- Review status: `not-recorded` or `editorial-review`. The latter requires verified
  reviewer IDs and an actual review date. It does not mean formal peer review.
- Actual publication date; actual update date where applicable.
- Abstract, executive summary, findings, methods, limitations, substantive HTML
  sections, source references, related education, and related published research.
- Current version and chronological `history` entries:
  `{ version, date, kind: initial | update | correction, summary }`.
- Each correction should explain what changed and its implication. Do not silently
  replace findings or make a new version appear to be the original publication.
- First history entry uses the actual first publication date. Latest entry matches
  current version and update/publication date. Version IDs must be unique.
- If present, PDF path, label, byte size, and matching current version. Verify
  accessible reading order, links, and HTML/PDF agreement before release.

The shared template displays review status and version/correction history.
Existing schema reflects version and modification date. Drafts do not emit report
schema or enter public routes/sitemap. Tests use synthetic records only in memory.

Prepare citation text from verified names and real dates. Do not claim a DOI,
peer review, institutional affiliation, or original finding without evidence.
