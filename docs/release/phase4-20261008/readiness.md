# Phase 4 release readiness — 2026-10-08

## Decision: NO-GO for production

Technical checks pass and private-draft exposure is corrected. Release remains blocked on successful browser/manual QA, authorized editorial decisions, and owner verification of deployment settings. No merge, push or deployment was performed. No content has been approved on the Foundation's behalf.

## Repository and commits

Repository: `/Users/catkarow/Development/zora_foundation`.
Branch: `seo/foundation-phase2-authority-20261007`.
Starting HEAD: `e71efedb428cb257237c3f8e8627dc926145eccb`; starting working tree clean.

Remote refs verified read-only with `git ls-remote`:

- main: `5ba89820ddcf57351e467223fda43b9a4d4a0c49`
- feature: `cd4108085f127a13a36524a8f811686d51375767`

Existing feature commits relative to main, oldest first:

1. `eb95a504d85e70f0e828d527da7acf47773a6133` — SEO/GEO foundations.
2. `cd4108085f127a13a36524a8f811686d51375767` — publication infrastructure and authority resources.
3. `7dc0fc4914d514e0e490836d722342173f6a530e` — family resources and community learning pathways.
4. `e71efedb428cb257237c3f8e8627dc926145eccb` — training materials and release validation.

The latter two were local-only at inspection. Phase 4 is a further local hardening commit; use `git log -1` after commit for its exact SHA (avoids a self-referential hash). See [release inventory](inventory.md) and [editorial manifest](editorial-manifest.json).

## Features and safeguards

- **PASS:** 28 public HTML routes, 17 educational guides, 26 canonical sitemap entries. Resource search, family/older-adult pathways, metadata and publications infrastructure remain intact. No new educational page or homepage redesign in Phase 4.
- **PASS:** Seven unapproved handouts removed from routing/navigation/client summaries and moved to `internal/handouts/`. Three curricula remain internal; generated documentation now references internal IDs, not dead public previews. Real 404s and build-output scans verify absence from publicly served assets. Repository access itself is not made private by this change; keep unpublished research out of public repositories if confidentiality is required.
- **PASS:** Publication and contributor registries empty; no fabricated author, report, PDF or study. Draft report protections retained and tested. No public draft research route/schema.
- **REQUIRES HUMAN REVIEW:** All 17 public guides and ten institutional pages in the manifest. Specialists required for child safety/exploitation and financial recovery/reporting. Internal handouts/curricula remain pending without blocking this release, provided they stay unserved.
- **PASS:** Program pathways explicitly in development, not scheduled/bookable offerings.
- **NOT APPLICABLE:** Payment integration, actual research publication release, PDF downloads and production infrastructure changes.

## Browser QA

**BLOCKED.** System Chrome terminated with SIGABRT/kill EPERM; managed browser download failed DNS; repository suite could not bind localhost (EPERM). All 48 tests collect, but no browser test, screenshot review, native zoom, screen-reader or print-preview pass is claimed. The [reproducible host/CI workflow and manual checklist](browser-qa.md) are ready. CSS zoom automation is only an approximation. No security controls were bypassed.

## Technical validation

Executed with Node **24.5.0**; package requires Node >=22. Default shell Node 20 was not used for final validation.

| Requirement | Result | Scope |
| --- | --- | --- |
| Production build | PASS | Next 16.4.0, prerendered public routes |
| ESLint | PASS | Whole project, zero warnings |
| TypeScript | PASS | Next type generation plus tsc |
| Content/schema validation | PASS | Actual resource data, publication schema, draft gates, source/related references |
| Workshop validation | PASS | Three curricula, timing and generated-file agreement |
| Built HTML/link validation | PASS | 28 routes, headings, metadata, image descriptions and internal anchors |
| Preview build and SEO | PASS | Separate VERCEL_ENV=preview build plus verify:seo -- --preview; production build restored afterward |
| SEO/sitemap | PASS | Unique titles/descriptions/canonicals, parsed JSON-LD, 26 entries, draft exclusion |
| Route request handling | PASS | Next production handler in-process; no listening server or browser needed; 28 pages, assets, draft/unknown 404s, query canonical and trailing-slash redirect |
| Static accessibility | PASS | Search markup, selected palette contrast, focus/print declarations; not comprehensive WCAG certification |
| Release isolation | PASS | Seven handouts, three workshops absent from public route/content artifacts |
| Review manifest | PASS | 37 current hashed records |
| Editorial release gate | REQUIRES HUMAN REVIEW | Expected nonzero exit for 27 pending public approvals |
| Browser execution | BLOCKED | Local listener EPERM; browser/download failures above |
| Git whitespace | PASS | `git diff --check` and staged check |

Source-reference integrity tests validate fields/URLs/related slugs; they do not constitute a fresh expert review of external guidance. Existing source-check dates are retained; Phase 4 did not manufacture new review dates. Sensitive-source accuracy and live destination checks are explicit reviewer duties.

## Dependency risk

`npm audit --omit=dev --json` found **zero production vulnerabilities**. Full audit found **five high-severity development-tool entries** through ESLint's fast-glob → micromatch → braces dependency chain ([GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)). npm's suggested fix downgrades eslint-config-next across major versions to 14.2.35, so it was not applied. **REQUIRES HUMAN REVIEW:** owner/security disposition or a compatible upstream fix before release. Do not use `npm audit fix --force`. No new runtime dependency was added; Playwright is dev-only.

## Deployment evidence and unknowns

- **PASS (observed):** Live HTTPS www homepage returns 200 with Vercel and Next prerender headers. HTTP apex redirects 308 to HTTPS apex, then 308 to HTTPS www. This existing two-hop chain was not changed. A live draft handout URL returns 404.
- **PASS (repository evidence):** README identifies Vercel and main deployment intent. Standard Next scripts, no custom next.config/vercel.json/redirect configuration, no checked-in project linkage or deployment workflow. No secret values read or recorded.
- **REQUIRES HUMAN REVIEW:** Dashboard-linked repository/project, actual production branch, deployed SHA, build Node version, root directory, build command, environment configuration, preview access protection and automatic Git deployment behavior. README is not proof of current dashboard state.
- **PASS (implementation):** `VERCEL_ENV=preview` emits noindex and removes sitemap advertisement from robots. Canonicals retain production origin. This controls indexing, not access. A non-Vercel staging host needs its own verified environment/protection; never assume private previews.
- Optional manual GitHub Actions workflow runs QA only. It has not run and cannot serve as a successful CI result. A future authorized push may trigger provider behavior outside this repository; owner must inspect that before pushing.

## Potentially breaking changes

Only the seven previously local draft handout URLs intentionally disappear. Their data/template remain preserved internally. No existing approved guide, home section, favicon/social URL or public navigation destination is removed. Build scripts and new Playwright dependency require supported Node. Browser-specific regressions remain unknown until real execution. Technical checks do not establish that every new guide is editorially fit for release.

## Recommended release sequence

1. **Owner next action:** Run the Node 24 host browser procedure in `browser-qa.md` against this local candidate; inspect screenshots/PDF and complete manual keyboard, native zoom, mobile, screen-reader and print checks. Record failures and fix them before integration.
2. Assign authorized editorial and specialist reviewers. Complete `review-decisions.json` against current hashes; re-review corrections. Run `npm run release:editorial` and require PASS.
3. Resolve or explicitly accept the dev-tool advisory risk with a documented owner decision; do not blindly downgrade dependencies.
4. Confirm Vercel/project/deployment facts above and record the current known-good deployment ID and Git SHA. Obtain explicit authorization before any push, preview deployment, merge or production deployment.
5. Rerun all technical checks and browser suite on the final reviewed commit. Review exact diff and lockfile. If authorized, push feature branch normally and review in a pull request; a preview is optional only after confirming trigger/access behavior.
6. Following separate merge/deployment authorization, verify production routes, search, metadata, assets, draft 404s and reporting links. Do not announce release until smoke checks pass.

## Rollback

Before release, record the actual production deployment ID/SHA; the remote main SHA is only a repository baseline. If an authorized deployment fails, use the owner's verified Vercel rollback/redeploy procedure for that known-good deployment, or a normal reviewed revert commit followed by the authorized deployment pipeline. No force-push or destructive reset. Recheck cache-served HTML, assets, sitemap, social metadata and public/private routes after rollback. There are no database migrations or payment changes in this candidate.
