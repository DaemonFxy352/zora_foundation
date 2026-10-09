# ZoraSafe Foundation

Public-interest digital safety education, practical training, research, and technology access. The production site is https://www.zorasafefoundation.org, hosted on Vercel from `origin/main` in `DaemonFxy352/zora_foundation`.

Built with Next.js App Router, TypeScript, semantic React components, and responsive CSS. No environment variables or service credentials are needed for the current site.

## Development and checks

Use Node.js 22 or later and npm:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For verification and production:

```sh
npm run typecheck
npm run lint
npm run build
npm run verify:build
npm start
```

Typechecking generates Next.js route and image types before invoking TypeScript. The production build statically renders the homepage, interior pages, and all published resource pages. `verify:build` examines emitted HTML for page metadata, internal links and anchor targets, image alt text, unique IDs, ARIA references, landmarks, and required guide sections. It requires a completed build and does not replace browser testing.

Vercel uses the Next.js preset, repository root, and standard build command. Keep `package-lock.json` committed and use `npm ci` for reproducible installations.

## Routes

| Route                                | Purpose                                                                        |
| ------------------------------------ | ------------------------------------------------------------------------------ |
| `/`                                  | Approved homepage; layout retained, CTAs now link to interior pages            |
| `/education`                         | Resource center: audience/topic browsing, filters, formats, training pathways  |
| `/education/recognize-a-scam`        | Scam warning signs and safe next steps                                         |
| `/education/verify-before-you-trust` | Independent verification checklist                                             |
| `/education/ai-impersonation`        | Responding to possible AI impersonation                                        |
| `/education/suspicious-message`      | Unexpected email, text, and direct-message checklist                           |
| `/education/account-safety`          | Passwords, sign-in protection, and recovery habits                             |
| `/programs`                          | Four approved program areas and trusted-messenger model                        |
| `/research`                          | Study / Translate / Prevent, priorities, future publications                   |
| `/about`                             | Mission, public-interest focus, and relationship statement                     |
| `/leadership`                        | Honest publication status and organizational inquiry pathway                   |
| `/partner`                           | Collaboration opportunities and how to start                                   |
| `/contact`                           | Working email links for general, partnership, training, and research inquiries |
| `/support`                           | Funding priorities and support inquiries; no payment processing                |
| `/accessibility`                     | Accessibility statement and feedback contact                                   |

## Architecture

- `app/page.tsx` and existing homepage components: approved homepage composition.
- `app/layout.tsx`: shared Header/Footer, local Inter, sitewide metadata, and icons.
- `app/globals.css`: existing Foundation design tokens and homepage/shared styles.
- `app/interior.css`: editorial interior layouts, resource controls, responsive rules, and print styles. Existing homepage layout rules are unchanged.
- `components/interior/Page.tsx`: compact hero/breadcrumbs, CTA section, and editorial rows.
- `components/interior/ResourceBrowser.tsx`: lightweight client-side audience, topic, and format controls with labeled selects, result announcements, reset, and empty states. Directory buttons select a collection and move focus to the results heading.
- `components/interior/ResourceList.tsx`: reusable resource links generated from data.
- `data/resources.ts`: typed content, taxonomies, publication information, source links, and related-resource relationships.
- `app/education/[slug]/page.tsx`: one shared resource template; `generateStaticParams` builds published resources. Unknown slugs return 404.
- `lib/metadata.ts`: page-specific title, description, canonical, Open Graph, and Twitter metadata with the approved shared social image.
- `scripts/verify-build.mjs`: production HTML regression checks.

## Education & Resources

The resource center begins with five real HTML guides. It supports six audiences, ten topics, and seven format categories. Guides can belong to multiple audiences and topics. Selecting multiple filters intersects their results. Printable Resources includes every guide marked `printView`; unpublished formats correctly return an empty result with reset guidance.

There is no text search or server-side index. Filters run locally, without an external dependency or analytics, and are not persisted in URLs. All five guides are present in the initial server-rendered resource list; JavaScript enables interactive filtering.

The model supports:

- Stable slug, title, summary, audience IDs, topic IDs, and format ID.
- Reading time, ISO publication date, and updated date.
- Optional `download: { url, label, fileType }`; omit it until a real downloadable file exists.
- `printView` support, related slugs, introduction, warning signs, action steps, actions to avoid, help guidance, a discussion exercise, and public source links.

### Adding a resource

1. Add a `Resource` entry to `data/resources.ts` with a unique URL-safe slug and supported taxonomy IDs.
2. Write original plain-language content. Verify safety guidance against reliable primary sources and include those links. Do not invent statistics, endorsements, publications, or program availability.
3. Set actual publication/update dates, estimated reading minutes, and valid related-resource slugs. Review the existing date convention (YYYY-MM-DD).
4. Use `printView: true` for the standard printable guide. Add a download only when its file exists in `public/` or at a verified public URL; supply the file type in its accessible label.
5. Add the new route to `scripts/verify-build.mjs` and run the commands above. Check the new resource, related links, filters, and print preview in a browser.

No new page component or individual resource card is needed. The data shape can later become a CMS collection: preserve stable slugs, taxonomy IDs, related-resource references, and the publication fields. Replace the data access functions with a CMS adapter, then choose an appropriate publishing/revalidation workflow. No CMS migration is required to add launch content.

### Print support

Every launch guide has a working **Print or save as PDF** button using the browser print dialog. Print CSS removes navigation, footer, filters, related-resource promotion, and buttons. It retains the Foundation logo, resource title, publication information, practical steps, sources, and original page URL. Background decoration is removed, margins use standard paper settings, and headings/list items avoid awkward breaks where possible.

These are printable HTML resources, not pre-generated PDF downloads. Paper sizes, pagination, and browser-added headers/footers depend on print settings. Verify both Letter and A4 previews when changing long content. Dedicated designed PDFs, videos, transcripts, workshop curricula, and facilitator toolkits are future work, not available downloads.

## Training and public claims

The resource center describes five developing training pathways: Community Workshops, Digital Confidence Training, Youth & Family Sessions, Train-the-Trainer, and Custom Community Training. There is no active nationwide-delivery claim or public registration system. Training links lead to the contact page’s training inquiry.

Leadership names and biographies have not been supplied. Research reports are not yet published. Those pages state their status without fabricated people or publications. Support explains intended funding areas and says online giving is being set up; no donation backend, payment button, or tax-deductibility claim is included. Contact uses mailto links, not an unconnected form. Privacy and Terms remain email inquiry links pending approved policies.

## Foundation identity and assets

The final **ZoraSafe Foundation Identity Board, version 1.0 (October 2026)** is authoritative over the older commercial `_ds` bundle. The homepage follows `ZoraSafe Foundation Homepage v5.dc.html`. The commercial fox PNGs in the original design ZIP were excluded. `components/Brand.tsx` uses the Foundation Guide Point geometry, Inter wordmark, and tracked descriptor; the footer uses its approved reversed version.

- `public/brand/guide-point.svg`: Guide Point artwork.
- `public/brand/zorasafe-foundation-social1.png`: approved final 1200×630 social preview. All page-level metadata reuses its absolute production URL. Older unused social assets are retained.
- `public/favicon.svg`, `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, and `site.webmanifest`: approved favicon package served at its root URLs. `metadata.icons`/`metadata.manifest` provide one set of links. Theme color remains `#0F2A44`.
- `public/fonts/`: local Inter variable font and SIL Open Font License.
- `public/images/`: three WebP photos recovered from the supplied design export.

Replace homepage imagery in `public/images/hero.webp`, `community-workshop.webp`, or `research.webp`, then update alt text and object position in `components/HomeImage.tsx`. Next Image handles dimensions, blur placeholders, and responsive optimization. Review the desktop/tablet/mobile crops; the supplied community photo is only 478×640. No new imagery was added for the interior pages.

## Verification and limitations

For this implementation, actual TypeScript, lint, and production build commands passed. Production HTML checks passed for all 15 pages. All 13 new routes returned HTTP 200 locally, and an unknown resource slug returned 404. Resource-data checks confirmed valid taxonomies, dates, and related slugs.

Chromium launch in the implementation environment still fails with SIGABRT/EPERM. Browser screenshots, measured horizontal overflow, interactive keyboard/filter behavior, and rendered print pagination remain unverified; the responsive/print CSS and semantic HTML checks do not substitute for that QA. Next browser review should cover 1440, 1280, 768, 390, and 320 px, filter/reset/empty states, mobile navigation, and Letter/A4 print preview.

The earlier dependency audit found zero production vulnerabilities and five development-only findings in Next’s ESLint dependency chain. No forced major downgrade was applied; rerun `npm audit` when updating dependencies.

## SEO and publication governance

The Phase 1 audit, complete route inventories, source/status observations and
proposed whitepaper architecture are in `docs/seo/phase1-20261007/`.

- `app/sitemap.ts` explicitly lists public content routes and derives resource
  dates from `data/resources.ts`. Add approved new destinations there; do not
  include utilities, drafts, filters or build-time dates.
- `app/robots.ts` advertises the production sitemap. Builds with
  `VERCEL_ENV=preview` emit page `noindex` and omit the robots sitemap line.
  Confirm deployment headers separately; robots directives are not access control.
- `lib/structured-data.ts` holds the public Organization identity, breadcrumb
  builder and source-backed educational resource markup. Publisher attribution
  is not a claim of individual authorship or expert review.
- `components/StructuredData.tsx` safely serializes server-rendered JSON-LD.
- After `npm run build`, run `npm run verify:build` and `npm run verify:seo`.
  To verify preview policy locally: `VERCEL_ENV=preview npm run build`, then
  `npm run verify:seo -- --preview`. Rebuild normally before production testing.
- Do not publish report schemas or contributor credentials before the matching
  work and approved author information exist. The publication specification is
  documentation only; no report template or unpublished research is public.

## Phase 2: authority resources and future publications

The education center now contains ten guides. Five new routes cover human-targeted
attacks, scam recovery, QR/link safety, phone impersonation and family emergency
scams. The existing AI impersonation and verification URLs are expanded in place.
`/editorial-standards` explains sources, dates, attribution and correction requests.

### Resource authoring

- `data/resources.ts` combines the original guides, targeted updates in
  `data/resource-enhancements.ts`, and new guides in `data/authority-resources.ts`.
- `data/resource-taxonomy.ts` owns audience/topic/format vocabulary. Reuse these
  IDs; do not create duplicate collections just to target keywords.
- `data/sources.ts` stores verified primary source labels, URLs and scope notes.
  Optional narrative sections can reference only source URLs included in the
  resource. Shared `ContentSections` renders readable headings and source links.
- `publishedAt` is optional for newly prepared, unreleased material. Set its real
  first-release date when publishing; never derive it from build time. Maintain
  `updatedAt` when substantive content changes. `editorial.reviewedAt` records a
  text/source check, not independent peer review.
- Every resource must have summary, warning signs, actions, avoidance guidance,
  recovery/help guidance, sources, practice example, taxonomy and related slugs.
- `resourceSummaries()` supplies only directory data to the client-side browser;
  full articles and citations remain rendered by server components.

### Contributor and editorial responsibility model

`data/contributors.ts` is intentionally empty. Add only approved public names,
biographies, affiliations, credentials and optional HTTPS profile URLs. Resource
and publication records reference registry IDs for authors, reviewers, editors
and contributors. Unknown IDs fail validation rather than generating fictional
bylines. `EditorialResponsibility` displays supplied roles and biography details;
no people or expertise claims appear while the registry is empty.

### Publication workflow

`data/publications.ts` is intentionally empty. The `/research/[slug]` template is
implemented but no report page is available until an approved record is published.
Draft/review records never enter public static paths, research listings or sitemaps.
Keep confidential draft text outside the web application repository/public assets.

A publication supports title/subtitle, kind/schema type, contributor roles, dates,
abstract, executive summary, findings, methods, limitations, full HTML sections,
references, version, suggested citation, related education/research and optional
PDF metadata. `PublicationArticle` renders the full HTML with the existing
editorial/print system. `lib/publication-schema.ts` supports Report,
ScholarlyArticle (studies only), Article and CreativeWork. These types are not
emitted on empty research listings or educational placeholder pages.

Before changing status to `published`:

1. Obtain editorial approval and verify contributors, evidence, methods,
   limitations, source references, dates and versions.
2. Choose the appropriate schema type; a whitepaper is not automatically a
   scholarly or peer-reviewed paper.
3. Provide complete HTML. If supplied, place a matching PDF under
   `public/research/<slug>/<version>.pdf`; record its actual byte size and version.
   The publication catalog checks file presence, PDF signature and byte size.
4. Check related slugs, source citations, accessible PDF reading order and
   HTML/PDF agreement. Publication data validation is not scientific review.
5. Run the checks below. Verify the canonical HTML page and PDF HTTP response
   on a fresh local server. A PDF canonical response header is deferred until
   there is a real companion file and separately authorized hosting review.

No PDF, real contributor profile or unfinished report was added in Phase 2.
The local TypeScript records can later map to CMS fields without changing URLs.

### Checks

```sh
npm run build
npm run lint
npm run typecheck
npm run verify:build
npm run verify:seo
npm run verify:content
npm run verify:routes
```

The first two verification scripts inspect generated pages, including future
prerendered report pages. The content tests execute actual data/schema/template
code using the existing TypeScript dependency, with synthetic records only in
memory. Tests cover draft exclusion, unknown identities, malformed publication
records, schema variants, missing PDFs, source/related-link integrity and metadata
uniqueness. No synthetic author or paper is included in application data.

Browser QA must still check mobile/desktop keyboard navigation, filtering and
Letter/A4 print previews. Static checks are not a substitute for rendered QA.

`verify:routes` runs the actual Next production request handler in-process with Node HTTP request/response objects, without opening a listening socket. It verifies public routes, draft/unknown 404s, query canonicals and trailing-slash redirects. It does not substitute for browser hydration or visual QA.

### Family and community education expansion

The resource library now includes parent, child-with-adult, teen, gaming, and
older-adult guides in `data/family-resources.ts`. They use the existing dynamic
resource route, metadata, schema, related-content, and print template. No new
content framework or runtime dependency was added.

- Extend `data/resource-taxonomy.ts` only when an existing audience/topic does
  not fit. Keep the stable `youth-families` ID (displayed as Parents & families).
  General adult guides are not automatically labeled for children.
- `sourceCheckedAt` records a source check, not independent expert review or
  editorial approval. Set `publishedAt` only when the resource is first released.
- `helpLinks` replaces generic fraud-reporting links where specialist support is
  more appropriate. Check reporting destinations and child-safety wording during
  review; never ask users to send sensitive evidence to the Foundation.
- `data/program-pathways.ts` holds objectives, possible formats, accessibility
  considerations, and related guides for **program development**. It does not
  represent scheduled offerings, certification, or guaranteed availability.
- `docs/seo/content-expansion-20261008/intent-map.json` maps implemented and
  proposed URLs to distinct intent and phrases. It is planning/QA data, not a
  route source. Proposed entries must not appear in navigation or the sitemap.
- Format filters show only formats with actual resources; the separate format
  overview still explains planned materials. Resource text remains prerendered.

Use the Node version supported by `package.json` (Node 22+). Node 20 can build
but does not reliably complete the in-process static-asset route test. Browser
interaction and Letter/A4 print-preview QA remain required before release.
