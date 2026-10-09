# Phase 5.1 release evidence — 2026-10-09

**Local technical validation PASS; production release remains NO-GO.** No new educational pages or approval workbook. The remaining implementation defect found was the missing production Google verification file in the feature tree; it is now preserved with regression coverage. Exact-candidate hosted QA and the existing human release gates remain outstanding. No push, merge, deployment, promotion, alias, DNS, protection, skew or cache change occurred.

## Candidate and production

Repository: `DaemonFxy352/zora_foundation`; feature branch `seo/foundation-phase2-authority-20261007`, starting from clean `9f63ddb0d6904f56e149d725ac60e80ced5c1431`. The Phase 5.1 commit containing this report adds only the verification file, its tests and release evidence. Remote feature remains `32d3d6e3f0c85c71c179df5bcc63aa4247de9c3a`. Local `main` is stale; it is not the production baseline.

[Read-only deployment evidence](deployment-state.json) and [branch settings](branch-settings.json) confirm production is READY at **`7010fc6379067b11e267f52ea8eb5701ae81095a`**, deployment **`dpl_7zndovSzTWZ7u8PVCrTW2CyZozeQ`**, with both Foundation domain aliases. Remote `main` matches. The separate hotfix branch remains `496174c27024ceae1c195e800d5f7dbb3efc77bb`, unchanged and unmerged into this feature branch. Its removal is already in production; the feature tree independently holds the images outside public output.

Vercel's production branch is `main`; feature Git builds are previews, with authentication except custom domains. No branch-domain overrides, custom environments, deploy hooks, Vercel/GitHub webhooks or deployment command in the read-only QA workflow were found. One accessible linked Vercel project was found. This does not prevent an authorized user from manually promoting a preview; `main` is not protected. Recheck settings before any future authorized push. [Deployment inventory](hosted-preview-state.json) contains no deployment of `9f63ddb`; the newest feature preview is the older `32d3d6e`. **No hosted candidate runtime validation is claimed.**

## Completed SEO work and audit reconciliation

Phase 5 already shortened search metadata, clarified planned program pathways, added guide jump links and practical accessibility guidance, removed unsupported review dates, and introduced the concise optional `llms.txt` directory. No canonical or crawler-permission change was made. [Implementation details and measured before/after](../phase5-20261009/implementation-report.md) remain the primary change record.

The actual October 9 CSV was available: **34 rows, 102 columns, 15 warning instances**. [Every affected URL and local comparison](semrush-reconciliation.json) records the original file hash. **All Semrush resolution statuses remain unconfirmed pending a fresh crawl after an authorized release.**

| Original finding | Local disposition / remaining limitation |
| --- | --- |
| Two long titles: government impersonation; payment redirection | 78 → 52 and 79 → 47 characters. Genuine readability improvement; snippets can still be rewritten. |
| Low word count: accessibility | 123 → 220 main-text words through useful guidance, not filler. |
| Low word count: leadership | 104 → 104. Requires evidenced leadership facts and approved biographies. |
| Nine ratio warnings: `/`, `/about`, `/accessibility`, `/contact`, `/editorial-standards`, `/leadership`, `/partner`, `/research`, `/support` | All have initial HTML content. Shared markup and framework serialization dominate; accessibility proxy ratio improves 6.96% → 8.94%, others unchanged. Do not remove semantics or invent content to cross a vendor threshold. |
| Programs content optimization | Five clearer pathways, available-versus-planned distinction and descriptive navigation; HTML 53,220 → 47,965 bytes. Vendor assessment still unknown. |
| Missing `/llms.txt` | Local 200 with 12 canonical public links; live 404. Optional navigation convention, not an established ranking signal. |

The local metadata inventory has 28 unique titles/descriptions, zero titles over the project's 65-character budget and zero descriptions over 165. These budgets are not search-engine limits. Programs' 9.9% HTML reduction is a local before/after indicator, not a measured production speed or Core Web Vitals gain. No field performance dataset is available.

## Search Console readiness and retrieval

The original downloaded `google36b500dfad230655.html` was copied unchanged into `public/`, independently matched to the production Git object and original Downloads file: **50 bytes**, SHA-256 `28d66e818535e1f7825b02953456f33d956eea2aea7058cf35ad25f8a45263b5`. Route and browser checks now protect it. Live apex verification and homepage URLs both return **308 → www → 200** without authentication; the verification response exactly matches the original. This establishes delivery, not completed ownership verification.

[Live and candidate measurement](publication-measurement.json) records 26 canonical sitemap URLs, an XML response stable across two reads, matching public canonicals, index/follow on the 28 live HTML pages, and no sampled X-Robots-Tag restriction. Trailing-slash normalization and query-string canonicals are preserved. `/accessibility` and `/editorial-standards` are public/indexable but intentionally outside the existing 26-URL sitemap allowlist; sitemap membership is not an approval signal. Indexability does not prove indexing.

**Property mismatch to resolve:** the earlier `https://zorasafefoundation.org/` URL-prefix property does not include canonical `https://www.zorasafefoundation.org/` URLs. Use the **www URL-prefix property** or an already verified Domain property covering both. Google documents the [different property scopes](https://support.google.com/webmasters/answer/34592?hl=en). Preserve the apex redirect and canonical host; do not change URLs to fit the wrong property.

No authorized Search Console connector or report is available. Impressions, clicks, queries, positions and indexed-page counts are **unknown**, not zero. Owner steps:

1. Select/verify the matching www property (or existing Domain property) in Search Console. Follow that property's verification instructions; if Google issues a different HTML file, provide the actual download. Do not assume this file proves a new property's verification. Keep existing verification files permanently. No DNS change is authorized here.
2. In Sitemaps, submit `https://www.zorasafefoundation.org/sitemap.xml` and record its status/last read. [Google's sitemap workflow](https://support.google.com/webmasters/answer/7451001).
3. Export Performance → Search results, Web, the latest **complete 28 days**, recording exact dates, property, filters and last update. Save chart totals and Queries, Pages, Dates, Countries and Devices tabs; if the site has fewer days, label the shorter window. Provide exports privately. [Performance report](https://support.google.com/webmasters/answer/7576553).
4. Export Indexing → Pages reasons/counts and sitemap status. Inspect the homepage, education hub, each changed title URL and representative audience guides; record Google/user canonicals, last crawl and indexed status. Keep indexed-version findings distinct from a live test. The [URL Inspection API](https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect) reports the indexed version.
5. After authorized publication and recrawl, repeat comparable windows with the actual release timestamp and content revision. If API access is supplied, use read-only scope, final data and separate date/page/query queries; paginate with `rowLimit: 25000` and `startRow`. [Search Analytics](https://developers.google.com/webmaster-tools/v1/searchanalytics/query) returns top rows rather than exhaustive query data; privacy filtering can make query sums differ from totals. Never commit sensitive query exports or credentials.

## Publication-aware measurement and AI baseline

[Per-page inventory](publication-measurement.json) separates exposure, candidate presentation and approval. All **28 HTML routes already exist live**; **25** differ in normalized main text or metadata in this candidate. There are no candidate-only HTML routes; `llms.txt` is a candidate-only public file. Current metrics belong to production `7010fc6`, not to the unreleased improvements. Record the actual publication/crawl dates before attributing later measurements.

There are **12 internal draft records**: seven handouts, three workshop curricula and two policies. Research publication registry remains empty. Sampled live draft/policy/material URLs and all five held original image paths return real 404s. Local build scanning and browser route checks also pass. Existing public URLs can still lack candidate editorial approval: **27 entries remain pending**. Release approvals are human gates, not a runtime filter that retroactively hides those live pages.

[Eight-question evaluation protocol](ai-evaluation.json) covers voice cloning, bank impersonation, older adults, parents, teens, scam response and community/school education. It preserves the six earlier prompts and adds teen and library/senior-center questions. It records exact prompts, target URLs, required evidence, session controls and separate definitions for indexed presence, ranking, brand mention, linked citation and referral traffic.

Independent AI-product answers remain **not measured**: no authorized sessions or original answer reports are available. The earlier six generic web-search samples contained no Foundation URL; that is neither zero AI citations nor proof of non-indexing. Run the protocol in supported search-enabled products using fresh sessions and retained original answer evidence, then repeat weekly under the same conditions. Missing observations remain null, not fabricated scores. No traffic, ranking or AI-visibility improvement is claimed.

## Technical validation and release decision

[Validation record](validation.json): production build, TypeScript, ESLint, content/schema, SEO, build/link, route, static accessibility, publication isolation and review-manifest checks **PASS**. Browser QA: **61 passed, two expected non-desktop PDF skips**, Chromium desktop/mobile and Firefox. This includes exact verification-file bytes, navigation/filter/contact behavior, no-JavaScript content, robots/llms, draft 404s and reflow. Desktop/mobile Programs screenshots were inspected: coherent columns/stacking, no observed clipping. Automated checks do not replace manual assistive-technology, native zoom or physical-print acceptance.

A separate **local** `VERCEL_ENV=preview` build passed SEO checks, with all 28 HTML pages noindex and no sitemap advertised in robots. The final build was restored to production mode. This tests preview indexing configuration, not hosted authentication, headers or deployment behavior. The exact candidate still needs an authorized authenticated hosted preview review.

Structured data retains accurate Organization, WebSite, BreadcrumbList and LearningResource markup; no invented NGO/legal/leadership/review facts. Robots remains `User-Agent: * / Allow: /`; no explicit distinction among search, user-retrieval and training bots was introduced. [Existing crawler-category findings](../phase5-20261009/crawlers-and-topics.md) remain applicable. Permissions do not guarantee access, indexing or citations. No training-bot permission or security control was changed.

**Required decisions remain:** 27 current editorial approvals; child/teen C1–C6 and fraud F1–F5 specialist review; owner acceptance of accessibility/directory changes; manual visual/accessibility/print acceptance; S1 development-dependency security disposition; Foundation legal entity/jurisdiction, leadership and approved biographies; verified monitored inquiry delivery/ownership; actual privacy/retention practices and legal approval. [Existing operational record and exact owner facts](../../release/phase4-20261008/phase47-operational-verification.md) remain unresolved, rather than newly audited here. Its historical live-image-exposure finding is superseded by today's five production 404s; historical deployment URLs and caches have not been remediated or proven inaccessible. No fresh vulnerability audit or organizational approval is implied.

**Controlled recommendation:** retain this local release candidate. Resolve the existing gates in their current decision records. With separate authorization, recheck Git/Vercel isolation and push for an exact-commit authenticated preview; validate that hosted candidate. Prepare the production comparison against the then-current production commit, preserving the original Google file and held-asset removal without blindly merging the hotfix branch. Obtain explicit production authorization only after review and validation. After an authorized release, repeat Semrush and the measurement protocol. Recovery should be a reviewed forward fix retaining verification and asset removal. No production action is authorized by this report.
