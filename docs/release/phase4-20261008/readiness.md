# Phase 4.4 current status — substantive corrections

**27 complete public items reviewed and improved. Production remains NO-GO.** Actual content changes are in the guides and organizational pages, not only release documents. The [updated workbook](editorial-review.md) and [per-item results](phase44-editorial-results.json) record findings, implemented corrections, primary references, remaining questions and recommendations. All 27 human approvals remain pending; the decision registry is unchanged.

Corrections include channel-specific bank/message verification; payment-method response and bank-recall sequencing without recovery guarantees; email-forwarding checks after account takeover; precise MFA sourcing; safe evidence boundaries around child sexual images; fake-image threats and CyberTipline self-reporting; Take It Down eligibility and coverage limits; alternate trusted adults and no secret/solo meetings; concrete parental controls; and support options without a second device. Homepage/program/research claims now distinguish public guides from planned work. Unsupported population, delivery, partnership, outcome and timetable implications were removed. Contact and correction pages exclude intimate-image intake and direct urgent cases to appropriate help. Footer privacy/terms mail links are labeled as inquiries.

[Source verification](phase44-source-checks.md) records primary-source retrieval and limitations. CISA access failed; verified FTC guidance supports the MFA comparison. ReportFraud/IdentityTheft returned no extractable application text, so form flows remain a browser-review task. Specialist judgment remains necessary for child/teen wording, existing-device evidence handling, image-removal eligibility and financial response. Owner confirmation is still needed for governance, legal/fundraising status, actual capacity, relationships and inbox processes. Leadership and Support receive a revision recommendation pending those decisions; recommendations are not approvals.

**Local validation passed:** production build, TypeScript, ESLint, content/schema, curricula, built HTML, SEO, HTTP routes, static accessibility, release isolation and 37-item review-manifest checks. Browser suite: **46 passed, two expected PDF skips, zero failures (54.7 seconds)**. Sandbox initially prevented the local server from binding; the authorized run outside that restriction completed successfully with browser sandboxing unchanged. Local HTML report: `playwright-report/index.html`; screenshots and Letter PDF: `test-results/`. These are current local results, not new GitHub CI evidence. The previous CI run 37879843490 covers the older application; fresh CI for these content edits is pending at this commit.

Review hashes now include homepage component copy, the organizational footer/root layout and program pathway data. All 27 result hashes match the current manifest. Human reviewers must record new current hashes when they actually approve; historical pending decision hashes were not converted into fresh approvals.

[Deployment recheck](phase44-deployment-safety.json) confirms main production branch, no deploy hooks or branch-domain overrides, no repository/team webhooks, one linked team project and unchanged production target/alias `dpl_BfVnysyySx24LGgptYcwyqUktrxq`. The sole QA workflow has no deployment/promotion steps. This supports a feature-only push; no production setting or alias mutation is authorized.

**Next human decisions:** safeguarding and fraud specialists review their assigned corrected pages; the owner resolves institutional/fundraising/governance questions and records all required public approvals; authorized reviewers complete visual, assistive-technology and print acceptance for the revised content; security owner resolves the five HIGH development entries recorded in Phase 4.3. No dependency changes or risk acceptance occurred. Separate production authorization and rollback readiness remain required.

---

# Historical Phase 4.3 release decision — 2026-10-09

**NO-GO for production; review preparation complete.** The actionable [27-item editorial workbook](editorial-review.md), [browser evidence and human acceptance worksheet](reviewer-qa.md), [security disposition form](phase41-security.md#phase-43-owner-disposition-worksheet), and [single release checklist](release-checklist.md) are ready for assigned reviewers. The existing 37-item manifest and decision registry remain authoritative; no human decision was changed or approval invented.

All 17 public guides and ten organizational pages still need current-hash approval. The highest-priority questions are child/teen exploitation reporting and safe evidence handling; recovery expectations and payment verification; and present-tense homepage/program/evaluation claims that need owner substantiation or authorized revision. The workbook gives each item its audience, purpose, sources, factual claims, risk boundaries, required roles, preview URL and decision space. Ten internal drafts remain unpublished.

Editorial preflight found conflicting citation-retrieval results: direct checks returned twelve FTC 404s and one FBI 403, while alternate retrieval returned their page content. These are not confirmed broken citations. Reviewers must verify those links in a normal browser. No substantive public advice or source URLs were changed without sufficient verification; recommended corrections remain explicit reviewer questions. Documentation now makes these questions actionable instead of implying editorial readiness.

**Automated evidence:** the last completed browser run remains [37879843490](https://github.com/DaemonFxy352/zora_foundation/actions/runs/37879843490), application commit `0ed94b1dcf3e4669622bd29ac9b8844c0a432a90`, **46 passed, two expected skips, zero failures**. Phase 4.3 changes only release documentation/evidence; application, tests, dependencies and workflows are unchanged. No new browser run is claimed. The QA worksheet indexes all representative captures and the Letter PDF in the retained artifact, distinguishes assertions from missing interaction-state captures, and leaves all human acceptance pending.

Phase 4.3 reruns: content, three internal curricula, 37-record manifest, release isolation, SEO, HTTP routes and static accessibility checks passed. Documentation links, actual artifact paths and Git whitespace checks also passed. Workbook coverage checks matched all 27 public IDs and hashes. `release:editorial` correctly failed with exactly 27 pending public entries. Fresh [full audit](phase43-audit.json) confirms five HIGH development entries; [production-only audit](phase43-audit-production.json) has zero. No dependency changes or organizational risk acceptance were performed.

**Deployment isolation:** [fresh read-only evidence](phase43-deployment-safety.json) confirms production branch main, no deploy hooks, no branch/custom-environment domain overrides, no repository/team webhooks, and only one accessible team project linked to this repository. The sole GitHub workflow has read-only permissions and no deploy/promotion step. Production project target and direct www alias still identify `dpl_BfVnysyySx24LGgptYcwyqUktrxq`. Together with the [observed preview events and separate website-session promotion](phase42-deployment-safety.md), this supports a documentation-only feature push. This does not prevent an authorized user from independently promoting a preview. No deployment settings were changed.

**Exact owner action:** assign the named editorial, safeguarding, fraud, visual/accessibility/print and security reviewers using the release checklist; provide preview access and retain the artifact before 2026-11-08. Resolve flagged claims, record all 27 genuine approvals, complete manual acceptance and explicitly dispose of the security finding. Then request a separate final-candidate production authorization and approve rollback readiness. No merge, production deployment, promotion or rollback is authorized here.

---

# Historical Phase 4.2 status

**NO-GO for production.** The [deployment investigation](phase42-deployment-safety.md) now attributes the separate promotion to a Vercel website session under `zorasafe`. Two Git-triggered previews and direct alias checks establish that normal feature pushes are isolated from production; the Phase 4.1 push hold is lifted for the authorized QA push only. No deployment settings were changed. Human identity behind the session is not conclusively proven.

The outstanding mobile locator correction is validated locally. Phase 4.2 build, lint, TypeScript, content, curricula, build HTML, SEO, routes, static accessibility, release isolation, and review-manifest checks passed. The fresh audits still report five high development entries and zero production findings; see [development audit](phase42-audit.json), [production audit](phase42-audit-production.json), and [classification/remediation](phase41-security.md). No dependency upgrades were made.

The final mobile fix passed [GitHub run 37879482352](https://github.com/DaemonFxy352/zora_foundation/actions/runs/37879482352) at commit `411bafc52b1ca106de5e4e212b59d9f6006810f9`: **46 passed, two expected skips, no failures or retries (39.4 seconds)**. Checkout logs confirm the exact SHA and Node 24.21.0. All workflow steps succeeded. The complete local rerun also passed 46 cases, two expected skips (49.3 seconds).

The screenshot improvement passed the final [GitHub run 37879843490](https://github.com/DaemonFxy352/zora_foundation/actions/runs/37879843490) at **`0ed94b1dcf3e4669622bd29ac9b8844c0a432a90`**: **46 passed, two expected skips, zero failures and zero retries (1.2 minutes)**. Checkout logs confirm that SHA. Every workflow step succeeded, including upload. Mobile navigation, filtering, 640/320px reflow, printing, and draft isolation passed. Both skips remain the existing non-desktop PDF cases. This is the final tested code commit; the following evidence-only documentation commit contains no application, test, workflow, or lockfile changes.

[Final artifact 11594142270](https://github.com/DaemonFxy352/zora_foundation/actions/runs/37879843490/artifacts/11594142270): `foundation-release-browser-evidence`, 45,247,551 bytes, expiry **2026-11-08 03:37:08 UTC**. Verified SHA-256: `5e628b10d3841f4f62779bd36cf02d19e1e4803f667483277dc21bdf86064cec`. It contains an HTML report, **36 PNG screenshots and one Letter PDF**; zero failure traces is expected on a clean run. Downloaded/extracted at `/private/tmp/foundation-ci-37879843490/`, HTML report at `evidence/playwright-report/index.html`, images/PDF under `evidence/test-results/`. [Machine-readable CI summary](phase42-ci-evidence.json) preserves the run/commit/artifact association. Hosted retention is 30 days; temporary local downloads are not durable storage.

Artifact review: logs and archive integrity checked; homepage, research and narrow reflow captures spot-checked across the two green runs. The final homepage screenshot confirms the lazy-loading blur placeholder is resolved. The earlier green run's PDF opened as four 612×792-point Letter pages with selectable text; page one was rendered and visually inspected. No comprehensive visual, tagged-PDF, native zoom, screen-reader or real-device approval is claimed. The existing manual checklist remains open.

**Technical blockers:** none identified in the final automated checks. **Release blockers:** human approvals and security disposition below.

Post-push alias verification confirms production remains on `dpl_BfVnysyySx24LGgptYcwyqUktrxq`; only the feature preview moved to `dpl_6vMSqTjQLSXLAMfhAPdv93epWJR9`. Twelve public draft/internal URLs also returned real 404s, including all seven handouts, internal source/curriculum paths, and draft research URLs.

**Remaining gates:** 27 current public editorial approvals; authorized manual visual, screen-reader, native zoom, mobile and Letter/A4 print acceptance; owner/security disposition of the development advisory. No content was approved. No merge, production promotion, rollback, or deployment-setting mutation occurred. Exact next release action: assign the authorized editorial/specialist reviewers and manual QA reviewers, record their decisions, and resolve/accept the security finding before seeking separate release authorization.

---

## Historical Phase 4.1 release readiness — 2026-10-08 EDT / 2026-10-09 UTC

## Decision: NO-GO; further pushes held

GitHub browser QA executed twice. The latest completed run has **45 passed, 1 failed, 2 expected skips**; it is not a successful workflow. The remaining mobile-menu test locator is corrected locally, pending safe push and GitHub revalidation. Editorial approvals, manual accessibility/visual/print acceptance, and security disposition remain outstanding.

**Deployment incident:** after the first authorized feature push created a preview, a separate Vercel promotion moved that candidate to production. No deploy, promote, merge, rollback, or production-setting mutation was issued by this task. Further pushes stopped when this was detected. The actor/automation responsible has not been established. Do not push again until the owner resolves that risk.

## Branch and remote evidence

- Repository: `https://github.com/DaemonFxy352/zora_foundation` (`origin`, fetch and push).
- Branch: `seo/foundation-phase2-authority-20261007`.
- Starting tree: clean, HEAD `de6214b2970ce40a95e1e9d07d3b440f14857b8f`.
- Initial remote feature: `cd4108085f127a13a36524a8f811686d51375767`.
- Pushed workflow commit: `b0928124b89cfb1703a496c8221b06e819dff9b3`.
- Pushed runner/test correction: `cd2397306134f51c2e054b0920092b82844e4c97` (current local HEAD and remote feature).
- Remote main remains `5ba89820ddcf57351e467223fda43b9a4d4a0c49`; no merge or main push.
- Mobile-menu locator fix and this report/evidence documentation remain local and uncommitted under the push hold.
- `gh` is not installed. GitHub REST API access using the existing Git credential retrieved actual job results, logs, and artifacts; no credentials were printed or saved in evidence.

## GitHub execution and failures

| Run / candidate | Result | Findings |
| --- | --- | --- |
| [37877267377](https://github.com/DaemonFxy352/zora_foundation/actions/runs/37877267377), `b092812` | FAILURE: 15 passed, 32 failed, 1 skipped | Ubuntu 24.04 Chromium sandbox launch failures; Firefox filter locator mismatch and invalid CSS-root-zoom simulation. |
| [37877888545](https://github.com/DaemonFxy352/zora_foundation/actions/runs/37877888545), `cd23973` | FAILURE: 45 passed, 1 failed, 2 skipped | All desktop/Firefox cases pass. Mobile keyboard/menu test fails because the locator still asks for “Menu” after the control changes its name to “Close”. |

The two intended skips are the mobile and Firefox PDF cases; Letter PDF generation is tested once in desktop Chromium. No new skip or relaxed overflow assertion was added.

Fixes:

1. Pin CI to Ubuntu 22.04, supporting the downloaded Chromium sandbox. Keep `chromiumSandbox: true`; no AppArmor/sysctl or browser-sandbox disabling.
2. Use exact accessible combobox names for Audience, Topic, and Format. Failure snapshots confirmed correct accessible names; implicit-label text matching had included select-option text.
3. Replace CSS `zoom` on the root (which does not change responsive media queries) with 640px reflow, equivalent to the CSS viewport at 200% zoom from 1280px, plus 320px reflow. Preserve the no-horizontal-overflow assertion and additionally check menu visibility. Native zoom still requires manual testing.
4. Local-only: locate the mobile toggle under either “Menu” or “Close” and assert both accessible-name transitions as well as expanded state. The failure screenshot confirms that the menu had opened correctly. No application behavior or content was changed.

Local targeted filter/reflow verification passed all six project cases. After the mobile locator correction, the complete local suite passed **46 tests, two expected skips, zero failures, no retries (48.1 seconds)** on macOS with Node 24.12.0 and managed Chromium/Firefox. Local HTML report: `playwright-report/index.html`; screenshots/PDF: `test-results/`. This tests the working tree based on `cd23973` plus the uncommitted locator fix; it does not replace a successful GitHub run.

## Evidence and workflow configuration

[Latest GitHub artifact](https://github.com/DaemonFxy352/zora_foundation/actions/runs/37877888545/artifacts/11592289957): `foundation-release-browser-evidence`, 46,909,024 bytes, expiry **2026-11-08 03:11:34 UTC**. SHA-256: `241503d54209ab3e18a26bb02ffaaff36c1ecb4a49261bd3a38539b79b90fbc2`.

Downloaded evidence: `/private/tmp/foundation-ci-37877888545/` contains `run.json`, `jobs.json`, `artifacts.json`, `logs.zip`, extracted `logs/`, and `evidence/`. The HTML report is `evidence/playwright-report/index.html`; `evidence/test-results/` contains **38 PNGs, one Letter PDF, and two failure traces** (initial attempt and retry). Thirty-six PNGs cover successful route/reflow captures; two show the mobile failure. Full manual screenshot/PDF sign-off has not been completed.

[Initial failed-run artifact](https://github.com/DaemonFxy352/zora_foundation/actions/runs/37877267377/artifacts/11592623960) is also downloaded at `/private/tmp/foundation-ci-37877267377/`. Temporary local files are not durable storage; download the hosted artifacts before expiry.

The workflow installs Node **24.21.0** (major pinned to 24), performs `npm ci`, and installs Chromium/Firefox with `--with-deps`. Playwright starts the production build with `next start --hostname 127.0.0.1 --port 3100`, waits up to 60 seconds for HTTP readiness, and refuses to reuse a server. Tests ran against that local CI server, not the deployed site. The always-run upload step succeeded in both failed workflows and retains reports/screenshots/PDF/failure traces for 30 days. The exact feature branch has a push trigger because GitHub initially had no registered workflow; manual dispatch is retained. Permissions are `contents: read`; no deployment step exists.

## Technical validation and isolation

All of the following passed locally on Node **24.12.0**, and again in both GitHub runs on Node **24.21.0**:

- Production build (Next 16.4.0), ESLint with zero warnings, TypeScript with Next type generation.
- Content/schema/source-reference integrity and three internal curriculum validations.
- Built HTML: 28 public pages; SEO: 26 sitemap entries, canonical/schema/indexing checks.
- Actual production request handler: public routes/assets, missing routes, query canonical, slash redirect, and all seven draft handout URLs returning real 404s.
- Release isolation: seven handouts and three workshop drafts absent from served routes, navigation, sitemap, and scanned public build assets.
- Static accessibility checks and 37-record hashed review-manifest validation.

All three projects' HTTP draft/internal-URL checks passed in the latest browser run. Internal paths `/internal/handouts/data.ts`, `/data/workshop-drafts.json`, `/docs/training/teen-digital-safety.md`, and unpublished research return 404. Isolation is for the website: the repository itself is public.

The earlier Phase 4 preview/noindex build check is historical and was not rerun here. Automated accessibility/reflow checks are not screen-reader, native browser zoom, real iOS Safari, or comprehensive WCAG certification. Source-reference integrity is not expert review of external guidance.

## Editorial and manual approvals

`npm run release:editorial` still returns NO-GO: **27 public entries** (17 guides and ten institutional pages) lack current documented approvals. No approvals or review dates were invented. Authorized Foundation editorial review is required; child-safety/exploitation and financial-fraud/recovery guidance also require the designated specialists. Record decisions against current hashes in `review-decisions.json` and require a passing editorial gate.

The ten internal items remain pending but do not block publication if they remain unserved. Complete the [manual browser acceptance checklist](browser-qa.md), including screenshot review, native zoom, screen readers, real mobile behavior, touch targets, and Letter/A4 print inspection. The generated PDF alone is not print or tagged-PDF accessibility approval.

## Security disposition

Fresh audits: **zero production vulnerabilities; five high development entries**, one underlying braces denial-of-service advisory and four propagated dependency effects. See [package-by-package classification](phase41-security.md), [full audit](phase41-audit.json), and [production-only audit](phase41-audit-production.json). Owner/security acceptance or a validated compatible upstream fix remains required. npm's suggested major downgrade to eslint-config-next 14.2.35 was not applied. No dependencies or lockfile changed.

## Deployment safety evidence and incident

Before pushing, read-only GitHub inspection found no existing workflows or repository webhooks. Read-only Vercel inspection found only `zora-foundation` linked to this repository in the accessible team; its production branch was **main**, deploy hooks were empty, and all three production domains had no feature-branch or custom-environment override. The project uses root `.`, Next.js defaults, and Node 24.x. This supported a feature-only preview push at that time.

Observed deployment sequence:

- Pre-task production: `dpl_HSToV8c9QBfocbwKWMZjugGE1juc`, SHA `cd4108085f127a13a36524a8f811686d51375767`.
- First push generated preview `dpl_DCHUCaNHLXHEq8GMB45nusMH1RhY`, SHA `b092812` (`source: git`, `target: null`).
- A separate deployment at **2026-10-09 03:03:53 UTC / Oct 8 23:03:53 EDT** became production: `dpl_BfVnysyySx24LGgptYcwyqUktrxq`, SHA `b092812`, `source: redeploy`, `readySubstate: PROMOTED`, `meta.action: promote`, referencing that preview as its original deployment.
- Second push generated preview `dpl_HPijWuzdKE5sCkdBHgV3hkBDvzSz`, SHA `cd23973`.

The production promotion was discovered after the second push. This task did not issue it; the API evidence alone does not identify its initiator or prove whether a person or external automation caused it. The owner must inspect Vercel activity and any promotion automation. No rollback is performed without separate authorization because it changes production. The pre-task deployment ID above is evidence for the owner's rollback assessment, not an instruction to roll back automatically.

## Exact next steps

1. **Owner first:** investigate the unexpected promotion and establish that feature pushes cannot update production; decide whether the already-promoted candidate should be rolled back. Keep further pushes held until that is resolved.
2. Once push safety is verified, commit/push the local mobile locator fix and evidence documentation to the same feature branch. Require a successful complete GitHub run: expected 46 passed, two pre-existing PDF skips, zero failures/flakes. Review and retain its artifacts.
3. Complete manual acceptance, 27 editorial approvals, and documented security disposition. Rerun technical/browser/editorial gates after any substantive correction.
4. Only after all gates pass, seek separate authorization for integration and production release. No merge or deployment is authorized by this QA task.
