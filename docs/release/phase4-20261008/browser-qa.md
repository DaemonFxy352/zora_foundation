# Browser release QA

Status: **BLOCKED in this session; no browser pass or screenshots claimed.**

## Observed failures (2026-10-08)

- Host is macOS arm64. System Chrome 154.0.8037.98 is a universal arm64/x86_64 executable. It exists and is architecture-compatible.
- Playwright 1.62.1 with system Chrome, headless and `chromiumSandbox: true`, terminated with `SIGABRT`; cleanup returned `kill EPERM` and `Target page, context or browser has been closed`. These errors do not prove a missing browser dependency. OS policy versus headless/executable compatibility cannot be conclusively isolated here.
- Managed Chromium headless-shell installation into `/private/tmp/zora-phase4-browsers` failed with `getaddrinfo ENOTFOUND cdn.playwright.dev` (downloader retries were automatic). No managed binary was installed.
- The repository suite failed before browser tests: Next could not listen on `127.0.0.1:3100`, reporting `listen EPERM: operation not permitted`.
- `npm run verify:browser -- --list` successfully collected 48 tests across desktop Chromium, mobile Chromium, and desktop Firefox. Collection is not execution. Two non-desktop PDF tests intentionally skip.
- No OS protection was disabled. Static HTML checks and in-process Next request-handler checks are separately reported and do not prove hydration, visual quality, native zoom, or assistive-technology behavior.

## Reproduce on an unrestricted development host

Use Node 24 (supported by the project), from this branch, with a clean dependency installation. Do not run the suite against production.

```sh
node --version
npm ci
npx playwright install chromium firefox
npm run build
npm run verify:browser
npx playwright show-report
```

On Linux, use `npx playwright install --with-deps chromium firefox` if system dependencies are missing. Keep the browser sandbox enabled. Ensure port 3100 is free; the suite starts its own production server and refuses to reuse another server. No deployment credentials are needed.

The suite covers representative routes, desktop/mobile overflow, one H1, footer navigation, search, audience/topic combinations, empty/reset states, keyboard menu behavior, focus, inquiry links, draft 404s, CSS 200% zoom approximation, and print CSS. It captures full-page PNGs for ten routes per browser project, a zoom screenshot, a Chromium Letter PDF, and failure traces. Output is ignored by Git under `test-results/` and `playwright-report/`.

These tests have not yet run successfully; correct any test assumptions or implementation failures based on actual browser evidence before marking PASS. CSS zoom does not replace native browser zoom. Chromium device emulation is not real iOS Safari testing.

## Optional GitHub Actions

`.github/workflows/release-qa.yml` defines a manual `workflow_dispatch` job: Node 24, managed Chromium/Firefox, production build, static/content/route checks and browser tests, with seven-day artifacts. It has read-only repository permissions and no deployment step. It has **not run**. The owner must authorize pushing/introducing the workflow and check GitHub's workflow availability before dispatching it; this task does not authorize a push. Do not merge just to run QA—use the host procedure first if necessary.

References: [Playwright browser installation](https://playwright.dev/docs/browsers), [Playwright CI guidance](https://playwright.dev/docs/ci-intro).

## Manual acceptance checklist

Record tester, date, OS/browser/version, route, result, and screenshot or issue reference. Unchecked means unverified.

- [ ] Inspect `/`, `/education`, parent/teen/older-adult guides, `/programs`, `/partner`, `/contact`, and `/research` at 1440, 1280, 768 and 390 CSS pixels; verify typography, clipping, navigation and footer.
- [ ] Use native 200% browser zoom and a 320 CSS-pixel equivalent viewport: no horizontal scrolling or obscured controls/content.
- [ ] Navigate with Tab/Shift+Tab/Enter/Escape only; verify skip link, menu opening/closing, visible focus and logical order.
- [ ] Search “family verification”; combine audience/topic/format; inspect empty state; reset; use audience-directory buttons and verify focus moves to results heading.
- [ ] With VoiceOver/Safari or NVDA/Firefox, verify landmarks, H1, select/input labels, result announcements, link names and menu expanded state. Automated roles are not a screen-reader test.
- [ ] Measure touch targets and spacing on mobile; check controls at least 24×24 CSS px or WCAG spacing exceptions, preferably 44×44. Check text contrast including hover/focus/disabled states; static checks cover only selected tokens.
- [ ] Follow program development pathways and contact links. Confirm mail client handoff without sending email; no booking/payment availability is implied.
- [ ] Print/save parent, teen, verification and after-a-scam guides on Letter and A4. Check every page for clipped text, orphan headings, readable sources, brand/title retention and hidden menus/decorations. Open the generated PDF and visually inspect it; PDF generation alone does not establish tagged-PDF accessibility.
- [ ] Confirm all seven draft handout paths and internal document paths return 404; there is no draft format option or public handout link. Internal handout print QA is deferred until an explicitly approved review/publication mechanism exists.
- [ ] Inspect all screenshots/traces and console/network failures; verify missing-route behavior and no broken images.

Do not mark release browser QA PASS until successful automated execution and manual results are attached to the candidate commit.
