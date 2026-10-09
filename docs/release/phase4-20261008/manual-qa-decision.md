# M1 — Accept the revised candidate or return concrete defects

**Human acceptance pending.** Assign named testers for visual/print and accessibility work; a screen-reader task must be performed by someone able to assess that assistive technology. No screenshot is pre-approved.

Use the [pinned Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app), application `bf0d45aea4aced34fa6037697051f58b537076a7`. If access is restricted, the owner grants preview access. [GitHub run](https://github.com/DaemonFxy352/zora_foundation/actions/runs/37889846863) passed 46 tests with two expected PDF skips. [Download the artifact](https://github.com/DaemonFxy352/zora_foundation/actions/runs/37889846863/artifacts/11598315624) before **2026-11-08 05:44:47 UTC**. The [existing artifact index](reviewer-qa.md#find-representative-captures) identifies exact PNG/PDF paths; do not duplicate its report here.

| Check | Minimum owner/tester action | Decision / issue |
| --- | --- | --- |
| Desktop appearance | Inspect homepage, programs, contact and one long guide in desktop Chromium and Firefox captures/live preview; text/images must be complete and readable. | pending |
| Mobile appearance | Use a real phone for the same pages; no clipped text, obstructed controls or accidental horizontal scroll. Emulated screenshots alone are insufficient. | pending |
| Education browsing | From `/education`, find a parent, teen and older-adult guide; labels and next steps must make sense. | pending |
| Search/filter | Search “family verification”; combine teenager/privacy then gaming; test no results and reset to 17. Draft handouts must not appear. | pending |
| Contact/partnership | Follow `/partner` and program inquiry links to the correct contact section. Verify mailto recipient/subject without sending a test message. Confirm development-only expectations. | pending |
| Print/PDF | Read every page of `teen-guide-letter.pdf`; print representative parent/older-adult/payment guides to Letter (and required A4). Check page breaks, readable sources and no missing/clipped text. | pending |
| Keyboard | Tab/Shift+Tab, skip link, navigation, filters and mobile menu: visible focus, sensible return, Enter/Space operation and Escape closure; no trap. | pending |
| Zoom/reflow | Use actual 200% browser zoom and a 320 CSS-pixel viewport; operate menus/filters and read a long guide. Viewport screenshots are not native zoom acceptance. | pending |
| Screen reader | Record AT/browser versions. Check headings/landmarks, menu state, filter labels/results announcements, source/help links and reading order. | pending |

Return **accept / corrections / blocked** for each row, actual tester name/date and device/browser/AT or printer, plus route and reproduction steps for defects. Record detailed evidence in the existing [acceptance record](reviewer-qa.md#acceptance-record--all-pending) rather than a second competing registry. “Not tested” remains pending; owner sign-off cannot stand in for unperformed assistive-technology testing.

Overall M1 decision: pending. Visual/print reviewer: __________. Accessibility reviewer: __________. Evidence/issues: __________. Passing these nine checks closes only the human QA scope, not the 27 editorial approvals, S1 or production authorization.
