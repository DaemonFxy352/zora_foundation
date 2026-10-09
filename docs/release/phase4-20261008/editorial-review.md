# Editorial review package

**No Foundation approval or professional review is asserted.**

`editorial-manifest.json` inventories 37 review items: 17 public educational guides, ten public organizational pages, seven private handouts and three private curricula. It records audience, source URLs, sensitive-topic flags, required expertise, priority, source location, content hash and changes relative to main commit `5ba89820ddcf57351e467223fda43b9a4d4a0c49`. That Git baseline is verified; the actual deployed production SHA must be confirmed by the owner. “New” means new against that baseline, not newly published.

`review-decisions.json` starts with every decision pending. The release gate requires approvals for the 27 public items; private drafts can remain pending because they are not served. Approval of a draft record does not create a public route or authorize deployment.

## Reviewer workflow

1. The Foundation owner assigns authorized editorial/organizational responsibility and the specialist roles listed on each item. Keyword-derived sensitivity flags are conservative triage, not expert classification; confirm them during review.
2. Run `npm run verify:review`. If source content changed, regenerate the manifest with `npm run review:manifest`, inspect the changes, and obtain a fresh review. This command does not overwrite decisions.
3. Read the complete resource and cited original sources, inspect rendered and printed output using the browser QA procedure, and compare the baseline where applicable. Public resources are data records in `data/resources.ts`, `data/authority-resources.ts` and `data/resource-enhancements.ts`, `data/family-resources.ts`, or `data/fraud-resources.ts` (the composed catalog resolves them).
4. Record a decision in `review-decisions.json`: `approve`, `request-corrections`, or `reject`. Retain `pending` until a human has actually reviewed it. Set `reviewedAt` to the genuine YYYY-MM-DD review date, copy the reviewed `contentSha256`, and identify the real reviewers in `reviewers`, each with `name` and the exact applicable `expertise` role from the manifest. Include scope, corrections, source checks and issue references in `notes`. One verified qualified person may cover multiple roles with separate role entries; do not invent credentials.
5. For requested corrections or rejection, do not release the affected content. Correct and re-review, or prepare a separately tested exclusion patch. Do not silently change statuses or dates to bypass review.
6. Run `npm run release:editorial`. An approval must match the current content hash, valid date and required named reviewer roles. A passing machine check verifies recorded fields only; the owner remains responsible for authorization, qualifications and the truth of decisions.

Source hashes cover composed resource records, handout/curriculum records, and organizational page source. They do not replace review of shared templates, linked guidance, site-wide copy, generated screenshots, accessibility, or future source changes. Browser and deployment gates remain separate.

## Checklist for each item

- [ ] Correct title, intended audience, unique purpose, complete practical steps and understandable terms.
- [ ] Advice matches cited primary sources; URLs open and apply to the jurisdiction/audience. Check dates and source changes. No fabricated findings, credentials, endorsements or recovery guarantees.
- [ ] Distinguish source-check date, preparation date, publication date and actual review date. A source check is not professional approval.
- [ ] Sensitive child/teen content reviewed by a safeguarding specialist: trauma-informed language, trusted-adult and specialist support, age-appropriate steps, privacy, no blame, no unsafe role-play or request to forward explicit material.
- [ ] Financial recovery/reporting reviewed by a fraud specialist: accurate provider/contact priorities, U.S. reporting channels identified appropriately, no guaranteed reimbursement, no replacement for emergency or professional advice.
- [ ] Foundation inbox is not positioned as emergency response, law enforcement, therapy or account recovery. Never request passwords, financial records or explicit evidence.
- [ ] Programs remain in development; no unsupported availability, delivery statistics, certification, partnership or research findings.
- [ ] Contextual links, source labels, mobile presentation and print output remain useful and accessible.
- [ ] Decision, responsible reviewers, date, content hash and correction notes recorded.

## Release gate

All public records currently **REQUIRE HUMAN REVIEW**. Private handouts and curricula remain **draft, not public**. No named contributors or research publications have been invented. This package is an actionable approval process, not an assertion that the Foundation already operates a formal peer-review program.
