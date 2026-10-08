# Phase 2 implementation and handoff

Base: `eb95a504d85e70f0e828d527da7acf47773a6133` (completed Phase 1).
Working branch: `seo/foundation-phase2-authority-20261007`.
No branch creation/switching, merge or deployment was performed in this implementation pass.

## Implemented

- Reusable `/research/[slug]` publication page with substantive HTML, authors/reviewers/editors/contributors, abstract, executive summary, findings, methodology, limitations, body, references, PDF companion metadata, generated suggested citation and related material.
- Empty publication registry with explicit draft/review/published state. Only validated published records enter routes, research listings and sitemaps. Invalid contributor IDs, missing required material, unresolved citations/relations and missing/mismatched PDF files fail validation.
- Empty verified-contributor registry; optional visible bylines, biographies, affiliations and credentials. No people or credentials invented.
- Conservative reusable Person and publication schema helpers. A named review is attached to the HTML WebPage, using reviewedBy/lastReviewed; there is no fabricated peer-review status.
- Short `/editorial-standards` page and correction email, linked from resource/publication attribution and Education.
- Five new resources; two existing URLs substantially improved. Ten guides total, no duplicate AI/verification routes.
- Source notes, section-level citations for extended explanations, review dates, contextual links and existing print support.
- Resource-summary-only client props, keeping complete article text out of the resource browser's client module.

## New authority/resource pages

All URLs below use `https://www.zorasafefoundation.org`; they are implemented locally, not deployed. Each uses LearningResource plus BreadcrumbList and the shared Organization. The editorial policy uses Organization/breadcrumbs, not research schema.

| Path | Purpose / primary intent | Primary sources | Related resources |
| --- | --- | --- | --- |
| `/education/human-targeted-attacks` | Define manipulation targeting decisions; explain relationship to technical attacks | NIST phishing, FBI/IC3 AI fraud, FTC scam signs | Verification, AI impersonation, scam recognition, recovery |
| `/education/after-a-scam` | Prioritize response after payment, credential or device exposure | FTC scam response, recovery scams, hacked accounts; NIST; IC3 reporting | Account safety, verification, phone impersonation |
| `/education/qr-link-safety` | Check a QR/link destination and respond to exposure | FTC QR guidance, phishing, hacked accounts, scam response | Suspicious messages, account safety, recovery |
| `/education/phone-impersonation` | Stop a pressured call and independently verify identity | FTC phone scams/scam signs/response; FBI/IC3 | Verification, family emergency, AI impersonation, recovery |
| `/education/family-emergency-scams` | Verify a relative-in-trouble story without blame | FTC fake emergencies and response; FBI/IC3 | Verification, phone impersonation, AI impersonation, recovery |
| `/editorial-standards` | Explain sources, attribution, dates and correction requests | Foundation editorial policy, no external endorsement claimed | Education, Research |

Enhanced `/education/ai-impersonation`: direct definition; synthetic audio/video/text; account takeover distinction; family, executive and authority contexts; limits of media clues; independent confirmation. Sources include FBI/IC3, FTC, NIST phishing and NIST synthetic-content transparency.

Enhanced `/education/verify-before-you-trust`: independent identity and request checks; known-number callback; out-of-band explanation; compromised accounts; family phrases as one layer; delaying action and second-person checks. Sources: NIST, FBI/IC3, FTC accounts/family/recovery.

## Human-targeted attack definition and limits

Definition: “A human-targeted attack uses deception to influence a person into giving money, information, or access. The immediate target is a decision, not necessarily a software weakness.”

The page explicitly calls this a practical umbrella term, not a Foundation invention, new empirical classification or measured finding. It connects trust, claimed authority, urgency, fear and relationships to social engineering, impersonation, phishing, fraud and AI-enabled deception. Technical safeguards are described as complementary, not obsolete.

## Sources and review

The primary source text was opened and checked through the web tool during this implementation. No new source was included solely because an unverified link sounded plausible. The inaccessible CISA phishing URL and attempted IC3 business-email URL were not used as new references.

Verified sources are recorded in `sources.md`. No statistics or quantified outcomes were introduced. Practice scenarios are illustrative educational examples, not case reports or research findings. Resource-level source notes identify the guidance being drawn on; extended sections link supporting sources directly.

New resource `publishedAt` values are intentionally absent because the pages have not been released. The content-check and modification date is October 7, 2026. Existing original publication dates remain. A content-check date does not assert independent expert review, and no “Reviewed by” name is shown. Set actual new publication dates at first release.

## Research, schemas and links

Research visibly separates currently published work (none), publication preparation, and intended research priorities. Educational explainers are clearly labeled as source-based guidance, not original findings. It links to human-targeted attacks, AI impersonation and verification. Programs links printable family/phone practice guides without calling them a finished facilitator curriculum. Education lists all ten guides in initial HTML. The existing taxonomy is retained, with no faceted URL expansion.

Organization identity remains unchanged. LearningResource markup matches resource text, dates, audiences and sources. No Article/Report/ScholarlyArticle/Person record is emitted on a current resource or the empty report listing. Publication schema is tested with synthetic in-memory records only. The canonical publication is HTML; an optional PDF is an encoding of the same work, not a competing publication identity.

## Print/accessibility and limitations

The existing print layout applies to guides and future reports: navigation/unnecessary controls hidden, branding/title/actions/references retained, backgrounds reduced. Section citation URLs are exposed in print. No PDFs were generated. Existing focus, colors, readable lists, native filter controls and semantic landmarks are retained.

Chrome launch still fails with SIGABRT/EPERM. A fresh production server cannot bind `127.0.0.1:3100` (listen EPERM). The existing long-running dev server serves old resource slug parameters: five new slugs return 404 there despite their presence in the fresh production build; an editor route and existing resource routes return 200. The fresh Next production request handler was subsequently tested in-process with real IncomingMessage/ServerResponse objects and no listening socket. All 21 HTML routes return 200 there, and nonexistent/unpublished routes return 404. This resolves production route behavior independently of the stale dev server; live-socket/browser verification remains unavailable. Do not change production routing to work around stale development state. Restart a local server with appropriate execution permissions and repeat HTTP/browser checks before release.

## Recommended Phase 3

1. Complete and approve a real whitepaper, with named authors, methods, limitations and references.
2. Populate verified contributor records and assign editorial/review responsibility.
3. Publish the first substantive HTML report plus an accessible, matching PDF and suggested citation.
4. Review educational content with community educators and intended audiences; document substantive revisions.
5. Create library/senior-center facilitator plans and printable practice materials.
6. Define real train-the-trainer delivery, accessibility accommodations and learning objectives.
7. Add research-specific diagrams/data only when supported by approved evidence.
8. Build a sourced glossary where it adds value beyond existing definitions.
9. Measure search discovery and accessibility after a separately authorized release.

No donation/payment logic, commercial repository, production infrastructure, Vercel settings or homepage design was changed.

## Validation results

| Check | Result |
| --- | --- |
| `npm run build` | PASS: 21 public HTML pages prerendered; future publication route has no records |
| `npm run lint` | PASS after correcting test-loader naming and an unused import |
| `npm run typecheck` | PASS |
| `npm run verify:build` | PASS: 21 pages, one H1/main, heading hierarchy, IDs, ARIA targets, image alt text, metadata and internal paths/fragments |
| `npm run verify:seo` | PASS: unique titles/descriptions/canonicals, JSON-LD identity/parity, 19 sitemap entries, maintained dates, no fabricated public research/person markup |
| `npm run verify:content` | PASS: ten resources, taxonomy, sources, related links, release gates, schema variants, contribution roles and publication template |
| `npm run verify:routes` | PASS: real production Next handler, all 21 public routes 200, metadata endpoints 200, unpublished/unknown URLs 404, query canonical and slash redirect |
| Browser accessibility / print preview | BLOCKED: Chrome SIGABRT/EPERM; no browser/overflow/print-pagination claim |
| Fresh listening production server | BLOCKED: bind EPERM; in-process production request handling passed independently |
| `git diff --check` | PASS |

Automated schema tests verify structure and visible-content agreement, not an external rich-results certification. Source attribution is not a claim of peer review. Existing focus/contrast/print styles are retained; no full WCAG compliance claim is made.

Suggested single logical commit: `feat(content): add Foundation publication infrastructure and authority resources`.
The work may alternatively be split into infrastructure, content/editorial integration and regression-test commits if a reviewer prefers. Do not split the interdependent data/rendering changes into commits that fail to build.
