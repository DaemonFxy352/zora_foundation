# Phase 3 implementation — 2026-10-08

## Scope and baseline

Repository: `/Users/catkarow/Development/zora_foundation`.
Branch: `seo/foundation-phase2-authority-20261007`.
Clean starting commit: `7dc0fc4914d514e0e490836d722342173f6a530e`.
The preceding report and intent map were reviewed. All five prior family/youth
pages, five program pathways, SEO helpers and tests remain intact. No branch
switch, homepage redesign, push, merge, deployment, or infrastructure change.

## Completed materials and routes

Seven reusable HTML print companions at `/education/handouts/`:

| Slug | Material |
| --- | --- |
| family-verification | Family scam verification checklist |
| voice-cloning-response | AI voice cloning scam response guide |
| parent-conversation | Parent internet safety conversation guide |
| teen-safety | Teen online safety checklist |
| older-adult-scam-prevention | Older adult scam prevention checklist |
| suspicious-message-worksheet | Suspicious message verification worksheet |
| after-scam-immediate-actions | After a scam: immediate action guide |

`data/handouts.ts` is the source; `app/education/handouts/[slug]/page.tsx` renders
semantic, source-linked sheets with steps, practice, response guidance, and limits.
They reuse source references from parent guides and link back to full guidance.
Prepared dates and pending-review status remain on printed copies. No human
review date is fabricated. All seven are draft preview pages, noindex/follow,
absent from the sitemap, and do not emit Article/LearningResource claims.
They have unique self-canonicals, social metadata, and breadcrumbs.

Print CSS targets US Letter with readable body text and a separate references
sheet. Users can print or save as PDF from the browser. There are no binary PDF
files, fake download links, one-page promises, or claims of tagged-PDF compliance.
Pagination and exported-PDF accessibility still require actual browser review.

Three **internal** curricula, generated from `data/workshop-drafts.json`:

- `docs/training/older-adult-scam-prevention.md` — proposed 60 minutes.
- `docs/training/parent-family-digital-safety.md` — proposed 60 minutes.
- `docs/training/teen-digital-safety.md` — proposed 45 minutes plus optional 15.

Each has objectives, timed outline, preparation, prompts, exercises, takeaways,
resource/handout links, access adaptations and release gates. Teen material uses
non-graphic explanations and benign fictional examples, never exploitation
role-play or generated deepfakes. Drafts are not delivered programs or bookings.
`materials:write` regenerates review copies; `verify:materials` checks consistency
and duration. The application does not import or expose these internal curricula.

## Content and discovery

New substantive resources:

- `/education/government-impersonation`: independent agency checking, pressure,
  payment demands, and response without giving legal advice about individual cases.
- `/education/payment-redirection`: invoice/payment changes, compromised threads,
  established callbacks, approval processes, and immediate bank contact.

Existing after-a-scam guidance now makes first-hour priorities explicit without
promising a recovery window or implying it is too late afterward. Recognition and
suspicious-message guides link to the new topics. Existing AI/deepfake, phone/bank,
family emergency, account takeover, and recovery coverage retains its URLs.
The keyword intent map adds two distinct intents instead of overlapping pages.

`lib/resource-search.ts` provides local all-word search over titles, summaries,
topic labels and audience labels. It combines with the existing filters; includes
case/diacritic normalization and family/families matching. No remote service,
analytics, full-body client payload, or query URLs were added. Reset clears all
controls; audience/topic shortcuts clear prior searches. Draft-handout filtering
returns seven parent guides with explicit handout links. All 17 guide links remain
in prerendered HTML before filtering.

## Publication infrastructure

Existing report rendering and release gates were extended, not replaced.
`Publication` now records explicit review status and chronological version history
with initial/update/correction entries. Published records require consistent dates,
unique versions, verified review attribution where claimed, and PDF/HTML version
agreement. The shared template renders review status and correction explanations;
existing structured data reflects the current version/date. Empty publication and
contributor registries remain empty. Test papers and people exist in memory only.
Internal preparation instructions: `publication-template.md` in this directory.

## Sources and editorial status

New fraud guidance was checked against these primary sources during this pass:

- [FTC government impersonation guidance](https://consumer.ftc.gov/articles/how-avoid-government-impersonation-scam)
- [USAGov agency directory](https://www.usa.gov/agency-index)
- [FBI business email compromise guidance](https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise)
- [FTC response after a scam](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)
- [FTC recovery scams](https://consumer.ftc.gov/articles/refund-and-recovery-scams)
- [FBI/IC3 generative AI fraud guidance](https://www.ic3.gov/PSA/2024/PSA241203)

Handouts condense existing source-based guidance and retain parent references.
Prior family/child primary-source checks are documented in the preceding report.
Preparation/source checks do not constitute professional or organizational review.
No statistics, institutional endorsements, credentials, findings, or outcomes added.

## Validation

Commands completed successfully using supported Node 24.5.0:

- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm run verify:content`
- `npm run verify:materials`
- `npm run verify:build`
- `npm run verify:seo`
- `npm run verify:accessibility`
- `npm run verify:routes`

Results: 35 public HTML routes; 26 sitemap entries. Tests cover title/description
and canonical uniqueness, JSON-LD, source/related/handout links, real HTTP-handler
responses, missing/draft 404s, query canonicals, slash redirects, heading order,
landmarks, alt text and ARIA references. Handouts are explicitly noindex and
excluded from sitemap/article assertions. Search tests exercise real summary data,
combined filters, reset state, empty results, case and whitespace behavior.
Publication tests cover missing/conflicting review status, history, correction
rendering and date consistency. Curriculum tests check references and timing.

An initial search test exposed family/families matching; normalization was corrected
and the test passed. No errors were ignored or assertions removed to hide failures.

Static text-palette contrast: navy/body/deep teal on white, mint and paper all
exceed 4.5:1 (minimum 5.28:1). The additional accessibility script checks source
focus/print declarations and built search markup, not computed interactive layout.

Real browser attempt failed: local Chrome exited SIGABRT and cleanup reported
`kill EPERM`. No browser automation tool alternative was exposed. Therefore
responsive visual/overflow, keyboard interaction, 200% zoom, screen-reader behavior,
actual touch dimensions, print previews and PDF accessibility are **not verified**.
See `manual-release-qa.md` for exact representative-page checks and expected results.

## Release blockers and next phase

1. Complete browser, keyboard, assistive-technology and Letter/PDF QA on this commit.
2. Obtain named organizational and fraud subject-matter review of new guides/handouts.
3. Obtain child-safety and safeguarding review of parent/teen materials and workshop
   delivery plans. Record genuine review dates only after review.
4. Approve workshop content, host responsibilities and facilitator preparation before
   any delivery claim or registration flow. Draft curricula stay internal.
5. Decide whether draft handout previews belong in the authorized release scope:
   noindex is not access control, and these URLs would be public upon deployment.
6. Publish only real, approved research using the extended version/corrections model.

Recommended next implementation: incorporate reviewer changes, produce accessible
reviewed PDF companions if needed, pilot a facilitator session with explicit
organizational approval, and publish the first approved HTML research report.
Nothing in this pass authorizes deployment or implies human editorial approval.
