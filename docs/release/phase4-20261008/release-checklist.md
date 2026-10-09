# Single production release checklist — Phase 4.3

**Production NO-GO. Phase 4.4 content supersedes the previous application evidence.** This checklist prepares a decision; it does not authorize a merge, deployment, promotion or rollback. Owner assigns real names and dates. The existing decision registry governs editorial approval.

| Gate | Current state | Responsible role | Evidence / exact exit requirement |
| --- | --- | --- | --- |
| Automated technical validation | PASS locally for Phase 4.4; see current readiness | Engineering | [Readiness](readiness.md): build, lint, TypeScript, content, curricula, build/SEO/routes/static accessibility/release/review checks passed. Re-run affected checks after corrections. |
| Browser CI | PASS locally and in Phase 4.4 GitHub CI | Engineering | [37889846863](https://github.com/DaemonFxy352/zora_foundation/actions/runs/37889846863): 46 pass, two documented PDF skips. Retain artifact before expiry. This run tests content commit bf0d45a. |
| Publication isolation | PASS in recorded checks | Engineering | Draft handouts, internal curricula and draft research have no public routes/assets/sitemap entries. Recheck final candidate; public Git repository contents are not private storage. |
| Editorial approval — 27 public items | PENDING, release blocker | Foundation editorial authority plus manifest specialists | Complete every card in [editorial-review.md](editorial-review.md), enter current-hash decisions and real reviewer roles in `review-decisions.json`; `npm run release:editorial` must pass. Ten internal drafts stay unpublished. |
| Child-safety subject-matter review | PENDING, release blocker | Qualified safeguarding specialist | Resolve teen/kids/gaming/parent reporting and safe evidence handling, alternative trusted adults and immediate danger; satisfy all manifest child-safety roles. |
| Organizational claims | PENDING, release blocker | Foundation owner | Substantiate or authorize corrections to present-tense research/program claims; confirm governance, partnerships, fundraising and inbox/disclosure scope. |
| Visual acceptance | PENDING, release blocker | Authorized visual reviewer | Inspect representative captures and all changed layouts; sign [QA worksheet](reviewer-qa.md). |
| Accessibility acceptance | PENDING, release blocker | Accessibility reviewer / AT user | Keyboard, screen reader, real mobile, native 200% zoom, contrast and focus tested; issues resolved and worksheet signed. |
| Print acceptance | PENDING, release blocker | Editorial/print reviewer | Every page of supplied Letter PDF plus representative guide prints accepted, including required A4 checks; no clipped/missing text. Internal draft acceptance does not publish drafts. |
| Security disposition | PENDING, release blocker | Authorized security owner | [Five HIGH development entries](phase41-security.md#phase-43-owner-disposition-worksheet): approved compatible remediation or explicit time-bounded disposition; fresh audit before release. |
| Deployment isolation | Phase 4.5 push hold: separate recurring promotion needs attribution | Engineering/owner | [Investigation](phase42-deployment-safety.md): main production branch plus hooks/workflows/aliases/project evidence. Separate website-session promotion is not attributed to feature Git automation. Recheck settings/aliases; no production mutations in this task. |
| Final candidate / authorization | NOT AUTHORIZED | Foundation release owner | Record final SHA, completed approvals, security decision, deployment target and explicit production authorization. A green workflow alone is insufficient. |
| Rollback readiness | PENDING before authorization | Deployment owner | Record current production deployment/aliases, identify an owner-approved known-good target, verify access and rollback procedure. Previous target `dpl_HSToV8c9QBfocbwKWMZjugGE1juc` is historical evidence, not an approved rollback choice. Do not execute now. |
| Post-deployment smoke test | NOT RUN; contingent on later authorization | Release engineer + owner | After authorized deployment, verify intended SHA/domains, homepage/hub/guides/navigation/filter/search/contact, sitemap/robots/canonical, draft 404s, print and error monitoring. Define rollback trigger and decision maker beforehand. |

Use the [Phase 4.5 consolidated decisions](owner-decisions.md) for owner answers and focused specialist packets; existing approval gates below remain mandatory. See [current readiness](readiness.md) for the new promotion evidence.

## Owner handoff and sequence

1. Assign editorial, safeguarding, fraud, accessibility/visual/print and security reviewers. Provide preview access and retain the CI archive. Names/assignment date: __________.
2. Resolve the P0 institutional claims and sensitive-topic questions; complete all 27 cards. Record corrections as issues, implement approved changes, rerun affected checks and refresh hashes before final decisions.
3. Complete the human QA worksheet and security disposition. Record source-link browser verification for FTC/FBI discrepancies. None of these gates may be inferred from CI.
4. Engineering presents the final candidate SHA and fresh validation evidence. Owner verifies every unresolved row is closed, then separately authorizes production and the rollback plan. Until then: **NO-GO**.

Final candidate SHA: __________
Editorial gate evidence: __________
Manual acceptance evidence: __________
Security decision: __________
Approved rollback target, triggers and operator: __________
Production authorization (person/date/scope): **not granted**
Post-deployment smoke evidence: **not applicable until authorized deployment**
