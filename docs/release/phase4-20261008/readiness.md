# Phase 4.2 current status

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
