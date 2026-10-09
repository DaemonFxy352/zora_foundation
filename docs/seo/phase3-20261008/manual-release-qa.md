# Phase 3 manual release QA — not yet completed

Browser attempt: Playwright launched local Google Chrome, which terminated with
SIGABRT; cleanup reported `Error: kill EPERM` and `Target page, context or browser
has been closed`. No usable browser session was established. Available tool
inventory did not expose a browser automation alternative. No screenshots, print
previews, keyboard interaction, mobile overflow, screen-reader announcements, or
Core Web Vitals measurements are claimed.

Use Node 22+ (the verified environment used Node 24.5.0), then `npm run build`
and `npm run start`. Complete these checks against the same built commit.
Record browser/version, viewport, result, tester, and any defect for each item.
Do not mark this checklist complete from static tests alone.

## Representative pages

- `/`, `/education`, `/programs`
- `/education/government-impersonation`
- `/education/payment-redirection`
- `/education/teen-online-safety`
- `/education/handouts/teen-safety`
- `/education/handouts/older-adult-scam-prevention`
- `/education/handouts/suspicious-message-worksheet`

## Navigation and responsive layout

- [ ] Desktop 1440×900 and laptop 1280×800: Header menus open/close, links work,
  menu items have visible focus, Escape closes menus, no obscured controls.
- [ ] Tablet 768×1024 and mobile 390×844 / 320px wide: menu toggle reports correct
  expanded state; content and buttons wrap; no horizontal scrolling.
- [ ] At 200% browser zoom, navigation, headings, filters, result links, and draft
  labels remain readable without clipping. Also test the narrow viewport at zoom.
- [ ] Tab/Shift+Tab reach skip link, navigation, search, selects, reset, resource
  links, print controls, and footer in logical order; no trap or lost focus.
- [ ] All interactive targets can be activated by keyboard; focus indicators
  remain visible on each actual background. Check touch targets by measurement.
- [ ] Program pathway contact links reach the training inquiry and guide links
  reach the intended resource. Nothing suggests booking or a delivered session.

## Resource discovery

- [ ] With JavaScript disabled, initial resource titles and links remain readable.
- [ ] Search `family verification`, `TEENAGERS`, and `payment`; verify expected
  results and live count. Search `zzzz-no-result`; check helpful empty state.
- [ ] Combine audience, topic, and format. Clear only search, then reset all.
  Reset must restore all 17 guides and clear the visible search value/selects.
- [ ] Select Draft handouts: exactly seven parent guides with clearly labeled
  handout links. Select Children: no general adult guide is mislabeled for kids.
- [ ] Audience/topic browse buttons clear previous search/filter choices and move
  focus to the results heading. Typing itself must not move keyboard focus.
- [ ] VoiceOver or NVDA announces the search label/instructions, select labels,
  updated count and draft status. Check that announcements are not disruptive.
- [ ] No search/filter query URLs or history entries are created.

## Letter printing and PDF saving

- [ ] Open all seven handouts and inspect US Letter previews at 100% scale with
  browser headers/footers disabled. Record page counts; there is no one-page promise.
- [ ] Titles, steps, help instructions, sources, and draft/review-pending status
  remain visible. Navigation, buttons, and unrelated website footer disappear.
- [ ] Body text is readable (12pt target); sources remain readable; long URLs wrap.
  Check that steps do not split awkwardly and no text or worksheet space is clipped.
- [ ] References begin on a separate sheet intentionally; no unintended blank pages.
- [ ] Save as PDF and open the result. Confirm text selection, links, reading order,
  and usable document structure in the chosen browser. Do not claim PDF/UA or
  tagged-PDF compliance without checking the actual output.
- [ ] Compare parent guide and handout reporting guidance; no contradiction or
  missing urgency. Ensure no form collects personal incident details.
- [ ] Also test an ordinary guide's existing print view to catch regressions.

## Editorial and organizational release gates

- [ ] Named organizational editor approves wording/status and assigns review ownership.
- [ ] Qualified child-safety review covers teen/parent material, age adaptations,
  reporting, safe handling of images, help-seeking, and host safeguarding limits.
- [ ] Fraud subject-matter review checks payment/government guidance and all sources.
- [ ] Review dates are recorded only after actual review; source checks/preparation
  dates must not become fabricated human approval.
- [ ] Workshop curricula remain internal until approved, facilitator preparation
  and host responsibilities are confirmed, and accessibility adaptations are ready.
- [ ] No research publication is released without real authors, approved evidence,
  version history, source references, and a matching companion PDF if supplied.
- [ ] Confirm exact release scope. `noindex` is not authentication: draft handout
  URLs are publicly reachable if this branch is deployed.
- [ ] No deployment or push until separately authorized by the user.
