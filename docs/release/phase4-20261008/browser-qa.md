# Browser release QA

Status: Phase 4 local failures below are historical. Phase 4.1 executes this suite in GitHub Actions; see [current release readiness](readiness.md) for run results and evidence. Manual acceptance remains outstanding.

## Historical Phase 4 local failures (2026-10-08)

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

The suite covers representative routes, desktop/mobile overflow, one H1, footer navigation, search, audience/topic combinations, empty/reset states, keyboard menu behavior, focus, inquiry links, draft 404s, 640px zoom-equivalent and 320px reflow, and print CSS. It captures full-page PNGs for ten routes per browser project, two reflow screenshots, a Chromium Letter PDF, and failure traces. Output is ignored by Git under `test-results/` and `playwright-report/`.

The Phase 4.1 run results are recorded in readiness.md. Narrow-viewport reflow checks do not replace native browser zoom. Chromium device emulation is not real iOS Safari testing.

## GitHub Actions

`.github/workflows/release-qa.yml` runs on pushes to the exact feature branch `seo/foundation-phase2-authority-20261007` and retains manual dispatch. It uses Ubuntu 22.04, Node 24, `npm ci`, and `playwright install --with-deps chromium firefox`. Playwright starts `next start` on `127.0.0.1:3100`, waits up to 60 seconds for HTTP readiness, and refuses to reuse an existing server. Chromium sandboxing stays enabled. Ubuntu 24.04 rejected the downloaded Chromium sandbox in the first CI run; no OS security setting was disabled.

The job runs build and all technical validations before browser tests. Its always-run artifact step retains `playwright-report/` and `test-results/` for 30 days, including full-page screenshots, a Letter PDF, and failure traces/screenshots. Successful tests do not retain traces. Two non-desktop PDF cases intentionally skip; the complete suite collects 48 cases.

The second run exposed a mobile-toggle locator that still requested “Menu” after the name changed to “Close”. The local correction accepts either name and asserts the transition and expanded state. The corrected local suite passed 46 cases with two expected PDF skips; GitHub run 37879482352 subsequently confirmed the same result at commit 411bafc. Screenshot loading was then strengthened to avoid capturing lazy-image placeholders. Final GitHub run 37879843490 passed 46 cases with two expected PDF skips and zero retries at commit 0ed94b1; see readiness.md for the final artifact.

The first run exposed a selector mismatch: the exact implicit-label text included option text, while the accessible combobox names were correct. Tests now use exact semantic combobox names. The old CSS-root-zoom simulation enlarged content without changing responsive media queries. It was replaced with the CSS viewport equivalent of 200% browser zoom (640px from 1280px), plus 320px reflow. The no-horizontal-overflow assertion remains and menu visibility is also checked. Native browser zoom remains manual.

**Phase 4.2 safety review:** the earlier push hold is lifted for feature-only QA after activity/credential records identified a separate website-session promotion and subsequent Git/alias evidence confirmed preview isolation. See [deployment investigation](phase42-deployment-safety.md). No production action is authorized.

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
