> **Phase 4.4:** Content has changed. The run/artifact below is historical Phase 4.2 evidence and must not be used to approve the revised wording or pagination. Current local results: 46 passed, two expected skips; use `playwright-report/index.html` and `test-results/`. See [readiness.md](readiness.md) for the latest CI/candidate. All human acceptance stays pending.

# Browser evidence and human acceptance worksheet

**Automated: passed. Human acceptance: pending.** Review the candidate, not current production. Record actual device/browser/assistive technology versions and reviewer/date below. Screenshots are evidence to inspect, not proof of human approval.

## Open the evidence

1. Open [successful GitHub run 37879843490](https://github.com/DaemonFxy352/zora_foundation/actions/runs/37879843490). It checked out `0ed94b1dcf3e4669622bd29ac9b8844c0a432a90`: **46 passed, two expected PDF skips, zero failures/retries**. Node 24, desktop Chromium, mobile-emulated Chromium and desktop Firefox ran successfully.
2. Download [foundation-release-browser-evidence](https://github.com/DaemonFxy352/zora_foundation/actions/runs/37879843490/artifacts/11594142270) before **2026-11-08 03:37:08 UTC** and retain it in the Foundation's approved evidence storage. Owner archive location: __________. The local `/private/tmp/foundation-ci-37879843490/evidence/` extraction is temporary.
3. Extract the archive. Open `playwright-report/index.html` (or run `npx playwright show-report <extraction>/playwright-report`). Open PNGs and PDF under `test-results/`. Archive SHA-256: `5e628b10d3841f4f62779bd36cf02d19e1e4803f667483277dc21bdf86064cec`.
4. For interaction, use the [same application's pinned preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app). If protected, request owner-granted preview access. It is not a production release.

## Find representative captures

All paths below are relative to `test-results/`. Replace `{project}` with `desktop`, `mobile` or `firefox`; all three exist. Desktop is 1440×900; mobile emulates iPhone 13 at 390 CSS pixels (not a real-device test).

| Review area | Screenshot/PDF path | What still needs a person |
| --- | --- | --- |
| Homepage, header/footer | `release-readable-and-navigable--{project}/-.png` | Hierarchy, image quality, institutional claims, focus and navigation states |
| Education discovery | `release-readable-and-navigable-education-{project}/-education.png` | Labels, readable cards and finding a suitable resource |
| Parent guide | `release-readable-and-navig-19e0c-ion-internet-safety-parents-{project}/-education-internet-safety-parents.png` | Long-form readability and family/safeguarding language |
| Teen guide | `release-readable-and-navigable-education-teen-online-safety-{project}/-education-teen-online-safety.png` | Sensitive help/reporting instructions and source presentation |
| Older-adult guide | `release-readable-and-navig-5a732--online-safety-older-adults-{project}/-education-online-safety-older-adults.png` | Legibility, pacing and respectful language |
| Payment redirection | `release-readable-and-navigable-education-payment-redirection-{project}/-education-payment-redirection.png` | Practical ordering and warnings |
| Programs | `release-readable-and-navigable-programs-{project}/-programs.png` | Availability language and inquiry path |
| Partner/contact/research | `release-readable-and-navigable-{route}-{project}/-{route}.png` | Use `partner`, `contact`, `research`; check organizational claims and inquiry scope |
| Responsive reflow | `release-reflow-at-200-perc-d0063-uivalent-and-320-CSS-pixels-{project}/education-reflow-{width}.png` | Use width `640` and `320`; inspect text and controls. These are viewport equivalents, not native 200% browser zoom. |
| US Letter printing | `release-print-styles-and-Letter-PDF-artifact-desktop/teen-guide-letter.pdf` | Inspect every page and a physical print; this is one guide, not all printable content |

There are **36 PNGs and one PDF**. Navigation, filters/search, inquiry links and isolation have test assertions in the HTML report, but no dedicated successful interaction-state screenshots. There are no traces because traces are retained on failure and this run had none. Use the live preview for these interactions. The two expected skips are mobile/Firefox PDF generation; desktop Chromium generates the PDF once.

## Human acceptance checklist

Use at least homepage, education hub, programs, contact, teen guide, parent guide and older-adult guide. Expand to all 27 pages during editorial review. Do not use real incidents, account data or child images in test inputs.

- [ ] **Keyboard:** Tab/Shift+Tab from the address bar; skip link reaches main; visible focus never disappears; Enter/Space activate controls; Escape closes menus; focus returns sensibly; no trap. Test desktop navigation and mobile-menu keyboard operation.
- [ ] **Screen reader:** record NVDA/Firefox or VoiceOver/Safari (and a mobile combination where available); check title, landmarks, heading order, link/button names, menu expanded state, filter labels and changed results/no-results announcement. Verify reading order and actionable source/help links. Record limitations, not assumed compatibility.
- [ ] **Mobile interaction:** on a real phone, open/close navigation, follow links, search/filter/reset, use orientation changes and touch targets. Verify no overlay blocks content and no unexpected horizontal scroll.
- [ ] **Education discovery:** find family verification by search, try a no-result query, reset to 17 resources, combine teenager/privacy and gaming filters, then older-adult filters. Draft handouts must not appear. Check results make sense to the audience.
- [ ] **Native zoom:** use actual browser zoom at 200%; read and operate the hub and long guides. Inspect 320 CSS-pixel width separately. Check menus, cards, source URLs and buttons for clipping/overlap; text must remain usable without two-direction scrolling.
- [ ] **Contrast and typography:** measure text, muted text, link and focus-state contrast with an appropriate tool; check line length, sizing, image alternatives and readability in light/dark system settings if relevant. Do not infer contrast compliance from screenshots alone.
- [ ] **Print:** inspect all pages of the supplied teen Letter PDF; print representative public guides (parents, older adults, payment redirection) to US Letter and check A4 where required by the release scope. Check margins, page breaks, readable type, sources, missing/clipped text, blank pages and absence of navigation/footer chrome. Confirm source/help information remains usable on paper.
- [ ] **Private handouts:** seven draft handouts are not part of the public release. If reviewed internally, inspect their locally generated copies for print readability; this does not authorize publication or create a download route.
- [ ] **Visual:** compare desktop/mobile/Firefox captures; inspect loaded imagery, spacing, long titles and all source sections. File issues with route, environment and reproducible steps.

## Remaining automated accessibility gaps

The suite checks selected keyboard/focus behavior, main headings, overflow, print visibility and static accessibility patterns, including selected configured palette contrast ratios. It is not a comprehensive WCAG audit, computed contrast check across all control states, screen-reader test or real-device test. It does not establish accessible PDF tagging/reading order, all announcement behavior, native browser zoom, every content route's visual layout, or every guide's pagination. The screenshot image-load check establishes loaded images, not good alternative text. These gaps require human testing; automated success cannot close them.

## Acceptance record — all pending

| Area | Reviewer / date | Device, browser, AT or printer | Decision (pass / corrections / blocked) | Issue/evidence link |
| --- | --- | --- | --- | --- |
| Visual | __________ | __________ | pending | __________ |
| Keyboard/navigation | __________ | __________ | pending | __________ |
| Screen reader | __________ | __________ | pending | __________ |
| Real mobile | __________ | __________ | pending | __________ |
| Native zoom / contrast / readability | __________ | __________ | pending | __________ |
| Letter and required A4 print | __________ | __________ | pending | __________ |

Candidate SHA reviewed: __________. Final approver and scope: __________. Any content/layout correction requires affected tests and fresh acceptance; substantive content changes also require current-hash editorial approval.
