# Editorial review package

**No Foundation approval or professional review is asserted.**

`editorial-manifest.json` inventories 37 review items: 17 public educational guides, ten public organizational pages, seven private handouts and three private curricula. It records audience, source URLs, sensitive-topic flags, required expertise, priority, source location, content hash and changes relative to main commit `5ba89820ddcf57351e467223fda43b9a4d4a0c49`. That Git baseline is verified; the separately investigated production deployment is b092812 (see phase42-deployment-safety.md). “New” means new against that baseline, not newly published.

`review-decisions.json` starts with every decision pending. The release gate requires approvals for the 27 public items; private drafts can remain pending because they are not served. Approval of a draft record does not create a public route or authorize deployment.

## Reviewer workflow

1. The Foundation owner assigns authorized editorial/organizational responsibility and the specialist roles listed on each item. Keyword-derived sensitivity flags are conservative triage, not expert classification; confirm them during review.
2. Run `npm run verify:review`. If source content changed, regenerate the manifest with `npm run review:manifest`, inspect the changes, and obtain a fresh review. This command does not overwrite decisions.
3. Read the complete resource and cited original sources, inspect rendered and printed output using the browser QA procedure, and compare the baseline where applicable. Public resources are data records in `data/resources.ts`, `data/authority-resources.ts` and `data/resource-enhancements.ts`, `data/family-resources.ts`, or `data/fraud-resources.ts` (the composed catalog resolves them).
4. Record a decision in `review-decisions.json`: `approve`, `request-corrections`, or `reject`. Retain `pending` until a human has actually reviewed it. Set `reviewedAt` to the genuine YYYY-MM-DD review date, copy the reviewed `contentSha256`, and identify the real reviewers in `reviewers`, each with `name` and the exact applicable `expertise` role from the manifest. Include scope, corrections, source checks and issue references in `notes`. One verified qualified person may cover multiple roles with separate role entries; do not invent credentials.
5. For requested corrections or rejection, do not release the affected content. Correct and re-review, or prepare a separately tested exclusion patch. Do not silently change statuses or dates to bypass review.
6. Run `npm run release:editorial`. An approval must match the current content hash, valid date and required named reviewer roles. A passing machine check verifies recorded fields only; the owner remains responsible for authorization, qualifications and the truth of decisions.

Source hashes cover composed resource records, handout/curriculum records, and organizational page source. They do not replace review of shared templates, linked guidance, site-wide copy, generated screenshots, accessibility, or future source changes. Browser and deployment gates remain separate.

## Phase 4.3 review desk

This is the consolidated reading workbook for **27 pending public items**. It renders the existing manifest; it is not a second approval registry. `review-decisions.json` remains authoritative. The ten internal drafts remain unpublished and outside this public approval batch. All public items are release blockers regardless of review order.

Candidate preview: [tested application, commit 0ed94b1](https://zora-foundation-2noyw3200-zora-safe.vercel.app). HEAD 8751daa only added release documentation. Vercel sign-in may be required; request access from the owner if needed. Do not use current production as the candidate. Each card links directly to its preview route.

**Start here:** owner resolves institutional claims on the homepage/programs/research pages; safeguarding reviewers take the children/teen/family cards and evidence-handling questions; fraud reviewers take recovery, payment and impersonation cards. Then complete all remaining cards. Manifest roles remain mandatory, even when keyword triage assigns more roles than this suggested reading order.

[Browser evidence and human QA worksheet](reviewer-qa.md) · [Single release checklist](release-checklist.md) · [Security disposition](phase41-security.md#phase-43-owner-disposition-worksheet)

### Editorial preflight findings and limits

| Check | Result / required action |
| --- | --- |
| Terminology and reading level | MFA, hostname, credentials and out-of-band need audience review; no readability score substitutes for comprehension. Cards identify affected guides. |
| Citation reachability | 25 unique cited/named destinations checked. Direct HTTP checks returned 12 FTC 404 responses and one FBI 403; alternate web retrieval returned their content. These are unresolved transport discrepancies, **not confirmed broken citations**. Open all flagged links in a normal browser before sign-off. |
| Source support | FTC/FBI/NCMEC primary guidance supports the broad prevention/reporting approach. Specific MFA comparisons, synthetic-media limitations and the older NetSmartz blog need targeted verification. Reachability is not factual approval. |
| Reporting currency | Current FTC guidance still directs payment-provider contact and FTC/identity-theft reporting; FBI BEC guidance supports bank contact and IC3. Verify the final linked flows in-browser. No recovery promise is supported. |
| Protection promises | No new protection guarantee added. Review implied effectiveness in homepage research/program claims and control/settings language. |
| Program availability | Program detail pages identify development status; current-tense homepage/shared component claims need owner substantiation or approved revision. |
| Immediate response | “First hour” wording needs review for a false deadline implication; emergency response must not be delayed by verification routines. |
| Child safety | Specialist review required for coercion, trusted-adult alternatives, immediate danger and evidence preservation without downloading/forwarding intimate images. |
| Internal cross-references | Existing content validation checks catalog links; human reviewers must check that destination advice fits the originating audience. Public draft isolation remains a separate technical gate. |
| Organizational disclosures | Verify governance, relationship, fundraising, inbox scope and footer policy-inquiry wording. Organizational assertions have no external citations in the manifest. |

No public advice was changed in this documentation phase: the unresolved questions require specialist or owner judgment. Suggested changes below are proposals, not approved corrections. No source was invented or replaced solely because an automated HTTP request failed.

Source evidence: [direct HTTP results](phase43-citation-checks.json). Alternate retrieval verified the same URLs for the FTC and FBI discrepancies. Relevant primary guidance: [FTC recovery](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed), [FBI payment redirection](https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise), [NCMEC sextortion](https://www.missingkids.org/netsmartz/topics/sextortion), and [Take It Down scope and precautions](https://takeitdown.ncmec.org/). These checks are source review assistance, not professional approval.

### Recording decisions

Read each complete page and original sources; the summaries below are not replacement content. Write decisions/notes in the blanks, then have the authorized reviewer enter the actual decision, date, reviewed hash and named required roles in `review-decisions.json`. Do not convert an unchecked worksheet to approval. Run `npm run verify:review` before using this snapshot: content changes invalidate the associated card/hash and require refreshed review. Shared components are not fully covered by organizational page hashes and must be included in human acceptance.

## 1. General scam and fraud prevention

### Recognize a scam

**ID:** `resource:recognize-a-scam` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/recognize-a-scam` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/recognize-a-scam)

**Audience:** Teenagers, Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Recognize pressure, secrecy and unusual payment requests; pause and verify independently.

**Claims to verify:** Common warning signs and the priority of contacting the payment provider after loss.

**High-risk statements / boundaries:** Avoid implying that a checklist detects every scam or guarantees recovery.

**Editorial judgment / unresolved question / proposed correction:** Confirm the examples work for readers with limited digital experience; distinguish suspicion from proof.

**Sources:** [FTC: How to avoid a scam](https://consumer.ftc.gov/articles/how-avoid-scam); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `743b1b5200ec1339d97d4c9c057d0ca8e21560ade2d4eada5412a3f10035d2e3`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Verify before you trust

**ID:** `resource:verify-before-you-trust` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/verify-before-you-trust` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/verify-before-you-trust)

**Audience:** Teenagers, Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Use a separately obtained contact route to check a request.

**Claims to verify:** A familiar voice, account or family phrase alone does not authenticate a payment request.

**High-risk statements / boundaries:** Waiting for verification must not delay emergency help.

**Editorial judgment / unresolved question / proposed correction:** Check that “out-of-band” is understandable and that the family phrase is described as only one layer.

**Sources:** [NIST: Phishing guidance](https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/phishing); [FBI / IC3: Generative AI and financial fraud](https://www.ic3.gov/PSA/2024/PSA241203); [FTC: Recover a hacked email or social media account](https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account); [FTC: Scammers use fake emergencies to steal your money](https://consumer.ftc.gov/articles/scammers-use-fake-emergencies-steal-your-money); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `19a358d9896dc2dc3ee94b3586f61b409f5423b62be206f172f26ffb896b7b8f`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### What is AI impersonation fraud?

**ID:** `resource:ai-impersonation` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/ai-impersonation` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/ai-impersonation)

**Audience:** Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators. **Type:** educational resource.

**Purpose / summary:** Explain synthetic voices and images without requiring readers to detect technical flaws.

**Claims to verify:** AI can imitate voices and media; account compromise can also explain apparently familiar messages.

**High-risk statements / boundaries:** No visual glitch, detector or familiar voice should be presented as conclusive evidence.

**Editorial judgment / unresolved question / proposed correction:** Check that the technical NIST source supports the specific claims, not a promise of reliable detection.

**Sources:** [FBI / IC3: Generative AI and financial fraud](https://www.ic3.gov/PSA/2024/PSA241203); [FTC: Recover a hacked email or social media account](https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account); [NIST: Phishing guidance](https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/phishing); [FTC: Scammers use fake emergencies to steal your money](https://consumer.ftc.gov/articles/scammers-use-fake-emergencies-steal-your-money); [NIST: Technical approaches to synthetic-content transparency](https://www.nist.gov/publications/reducing-risks-posed-synthetic-content-overview-technical-approaches-digital-content)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `a31fe88607880392fc8c148ad7ed9530ab0ea6c910cb6347885db7476f4193c7`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### What to do with a suspicious message

**ID:** `resource:suspicious-message` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/suspicious-message` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/suspicious-message)

**Audience:** Teenagers, Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Stop engagement, verify through a known channel, and respond to account or payment exposure.

**Claims to verify:** Phishing/smishing definitions; reporting and evidence preservation before removal.

**High-risk statements / boundaries:** Generic screenshot or forwarding advice must not be applied to sexual images of children.

**Editorial judgment / unresolved question / proposed correction:** Resolve the boundary between deleting a suspicious message and preserving safe evidence after loss; expand unfamiliar terms.

**Sources:** [FTC: Recognize and avoid phishing scams](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `cd9ace634e83d5644b40bf98c16a98de4b7bb9348dcae659ade47cddbb35f4de`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Make your accounts safer

**ID:** `resource:account-safety` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/account-safety` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/account-safety)

**Audience:** Teenagers, Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Improve passwords, multi-factor authentication and account recovery.

**Claims to verify:** Unique passwords, recovery access and the relative protection offered by authenticator apps/security keys versus SMS.

**High-risk statements / boundaries:** Account protection reduces risk; it cannot guarantee protection or recovery.

**Editorial judgment / unresolved question / proposed correction:** Verify the stronger-than-SMS comparison against an appropriately specific primary source; current broad FTC links may not support every detail.

**Sources:** [FTC: Recover a hacked email or social media account](https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account); [FTC: Recognize and avoid phishing scams](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `498671874440c094ddddb5d7299ef93f961275b92c6d6c582ed796af9c8ee97c`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### What is a human-targeted attack?

**ID:** `resource:human-targeted-attacks` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/human-targeted-attacks` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/human-targeted-attacks)

**Audience:** Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Explain manipulation of people alongside technical compromise.

**Claims to verify:** The term is used as a practical umbrella, not a newly established Foundation scientific classification.

**High-risk statements / boundaries:** Human vigilance must not be presented as a replacement for organizational security controls.

**Editorial judgment / unresolved question / proposed correction:** Keep the distinction among phishing, fraud and account compromise clear; check workplace incident escalation language.

**Sources:** [NIST: Phishing guidance](https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/phishing); [FBI / IC3: Generative AI and financial fraud](https://www.ic3.gov/PSA/2024/PSA241203); [FTC: How to avoid a scam](https://consumer.ftc.gov/articles/how-avoid-scam)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `28785b1613ec1f8b82a27c0bb131b68da8c5be3f726a5c6e0feb7d581f605858`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### What to do after a scam

**ID:** `resource:after-a-scam` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/after-a-scam` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/after-a-scam)

**Audience:** Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Prioritize provider contact, account containment, safe evidence and reporting.

**Claims to verify:** Payment-provider contact first; U.S. FTC, IdentityTheft.gov and IC3 reporting roles.

**High-risk statements / boundaries:** “In the first hour” must not imply a recovery guarantee or that help is unavailable later. Generic evidence advice needs a child-image exception.

**Editorial judgment / unresolved question / proposed correction:** Fraud specialist: confirm ordering across payment types and whether a clearer “act as soon as possible, even if time has passed” clarification is needed.

**Sources:** [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed); [FTC: Recover a hacked email or social media account](https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account); [FTC: Refund and recovery scams](https://consumer.ftc.gov/articles/refund-and-recovery-scams); [NIST: Phishing guidance](https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/phishing); [FBI / IC3: Report internet crime](https://www.ic3.gov/)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `9855818ce86bf8ae4f1b732543f84bec7df46d1cb8501c3ac1e76cb61664203f`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### QR code and suspicious link safety

**ID:** `resource:qr-link-safety` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/qr-link-safety` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/qr-link-safety)

**Audience:** Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Explain QR/link destinations and independent navigation.

**Claims to verify:** HTTPS is not proof of trust; bank.example.attacker.test belongs under attacker.test.

**High-risk statements / boundaries:** Do not encourage opening a suspicious destination to inspect it.

**Editorial judgment / unresolved question / proposed correction:** Expand MFA and explain hostname/credentials in everyday language; test whether the example teaches the intended distinction.

**Sources:** [FTC: Harmful links hidden in QR codes](https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information); [FTC: Recognize and avoid phishing scams](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams); [FTC: Recover a hacked email or social media account](https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `065365537b38e0e640b0f920db8169a7c744d867fae37bc01e50671072cc974d`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### How to handle a phone impersonation scam

**ID:** `resource:phone-impersonation` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/phone-impersonation` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/phone-impersonation)

**Audience:** Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** End suspicious calls and use an independently known callback route.

**Claims to verify:** Caller ID can be spoofed; unsolicited remote-access and code requests are warning signs.

**High-risk statements / boundaries:** Do not suggest that a displayed number or successful callback through a supplied number proves identity.

**Editorial judgment / unresolved question / proposed correction:** Check robocall-button advice and immediate account/payment response steps against FTC phone guidance.

**Sources:** [FTC: Phone scams](https://consumer.ftc.gov/articles/phone-scams); [FTC: How to avoid a scam](https://consumer.ftc.gov/articles/how-avoid-scam); [FBI / IC3: Generative AI and financial fraud](https://www.ic3.gov/PSA/2024/PSA241203); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `35df0af7a79643fb9c4a2fcd45ce735b8126fee500f1a100d683ff92d8d46350`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Government impersonation scams: check before you respond

**ID:** `resource:government-impersonation` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/government-impersonation` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/government-impersonation)

**Audience:** Older adults, Caregivers, Libraries, senior centers & community organizations, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Verify a purported U.S. agency through an official directory.

**Claims to verify:** Threats and unusual payment requests are warning signs; genuine obligations still need independent verification.

**High-risk statements / boundaries:** Avoid blanket claims that government never calls or advice to ignore real deadlines.

**Editorial judgment / unresolved question / proposed correction:** Confirm U.S. jurisdiction is explicit and reporting routes fit the type of loss; determine whether IdentityTheft.gov needs a direct contextual link.

**Sources:** [FTC: Avoid government impersonation scams](https://consumer.ftc.gov/articles/how-avoid-government-impersonation-scam); [USAGov: Official agency directory](https://www.usa.gov/agency-index); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; fraud prevention and reporting specialist.

**Reviewed content hash:** `37a7afc9b4ae6192220240a0663a7c4541fb7f4fac7ac3aa774650cfac91d29f`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Payment redirection scams: verify changed payment details

**ID:** `resource:payment-redirection` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/payment-redirection` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/payment-redirection)

**Audience:** Libraries, senior centers & community organizations, Educators & facilitators, Caregivers, Older adults. **Type:** educational resource.

**Purpose / summary:** Verify changed invoice or bank details through an established contact.

**Claims to verify:** Business email compromise can redirect payments; bank contact and IC3 reporting are appropriate after loss.

**High-risk statements / boundaries:** A small test transfer is not proof of legitimacy; rapid reporting does not guarantee recovery.

**Editorial judgment / unresolved question / proposed correction:** Fraud specialist: check established-contact verification and receiving-bank recall wording against FBI guidance.

**Sources:** [FBI: Business email compromise and payment verification](https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise); [FTC: Recover a hacked email or social media account](https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `6e82ee6eb568f48988103d9fbb8286ced79c2ad4020673f0d01435611f15a04d`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

## 2. Older-adult digital safety

### Online safety for older adults: a practical guide

**ID:** `resource:online-safety-older-adults` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/online-safety-older-adults` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/online-safety-older-adults)

**Audience:** Older adults, Caregivers, People building digital confidence, Libraries, senior centers & community organizations. **Type:** educational resource.

**Purpose / summary:** Support independent decisions, accessible routines and trusted help.

**Claims to verify:** Unsolicited remote support is risky; recovery may require a different trusted device.

**High-risk statements / boundaries:** Helpers must not take passwords or control away from the reader.

**Editorial judgment / unresolved question / proposed correction:** Review for stereotypes, readable pacing and practical alternatives for people without another device or available helper.

**Sources:** [FTC: Recognize and avoid phishing scams](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams); [FTC: Spot, avoid, and report tech support scams](https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; fraud prevention and reporting specialist.

**Reviewed content hash:** `2b14f44c32747d7c45b22bf2f91b9573a007576705cad175f6f69fe36c8af2de`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

## 3. Parent and family education

### Family emergency scams: pause and check

**ID:** `resource:family-emergency-scams` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/family-emergency-scams` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/family-emergency-scams)

**Audience:** Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Plan a non-blaming family verification routine for urgent requests.

**Claims to verify:** Voice similarity and a private phrase are insufficient alone; independently contact family.

**High-risk statements / boundaries:** Verification routines must not delay emergency services when someone is in immediate danger.

**Editorial judgment / unresolved question / proposed correction:** Confirm that phrases are not placed on publicly shared worksheets; check caregiver and family accessibility.

**Sources:** [FTC: Scammers use fake emergencies to steal your money](https://consumer.ftc.gov/articles/scammers-use-fake-emergencies-steal-your-money); [FBI / IC3: Generative AI and financial fraud](https://www.ic3.gov/PSA/2024/PSA241203); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `8c9330e8dd0ee1e63312e8dac835399bf3e9c85854b7c7ba0c095ed3fb22c0a0`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Internet safety for parents: a practical family guide

**ID:** `resource:internet-safety-parents` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/internet-safety-parents` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/internet-safety-parents)

**Audience:** Parents & families, Caregivers, Educators & facilitators. **Type:** educational resource.

**Purpose / summary:** Develop family agreements, privacy habits and trusted-adult support.

**Claims to verify:** Readiness varies; settings and parental controls are useful but cannot ensure safety.

**High-risk statements / boundaries:** Suspected exploitation needs appropriate specialist reporting, not forwarding explicit images or relying on the Foundation inbox.

**Editorial judgment / unresolved question / proposed correction:** Safeguarding specialist: review alternative trusted adults, no-blame language, age appropriateness and immediate-danger guidance; distinguish general privacy education from legal advice.

**Sources:** [FTC: Kids and video games](https://consumer.ftc.gov/articles/kids-video-games); [FTC: Protecting your child’s privacy online](https://consumer.ftc.gov/articles/protecting-your-childs-privacy-online); [NCMEC: Sextortion warning signs and support](https://www.missingkids.org/netsmartz/topics/sextortion); [NCMEC: Take It Down](https://takeitdown.ncmec.org/); [NCMEC CyberTipline: report suspected child sexual exploitation](https://www.missingkids.org/gethelpnow/cybertipline); [NCMEC: Sextortion warning signs and support](https://www.missingkids.org/netsmartz/topics/sextortion); [NCMEC: Take It Down](https://takeitdown.ncmec.org/)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `5b670a3eace19438f45ee5910fc76014d601ba16b8d0056e8228cf0f87981fb7`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

## 4. Children and teen education

### Online safety for kids: practice with a trusted adult

**ID:** `resource:online-safety-kids` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/online-safety-kids` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/online-safety-kids)

**Audience:** Children with a trusted adult, Parents & families, Educators & facilitators. **Type:** educational resource.

**Purpose / summary:** Use fictional practice activities with a trusted adult.

**Claims to verify:** Activities reflect different readiness levels rather than universal age cutoffs.

**High-risk statements / boundaries:** Never use real personal details, submit practice reports or teach that adult involvement automatically makes meeting an online contact safe.

**Editorial judgment / unresolved question / proposed correction:** Safeguarding specialist: check trusted-adult alternatives and escalation for immediate danger. The 2019 NetSmartz blog needs a currency and relevance check.

**Sources:** [NCMEC: Tips for tweens](https://www.missingkids.org/blog/2019/post-update/your-netsmartz-tween-tips); [NCMEC: Gaming safety](https://www.missingkids.org/netsmartz/topics/gaming); [NCMEC CyberTipline: report suspected child sexual exploitation](https://www.missingkids.org/gethelpnow/cybertipline); [NCMEC: Sextortion warning signs and support](https://www.missingkids.org/netsmartz/topics/sextortion); [NCMEC: Take It Down](https://takeitdown.ncmec.org/)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `0fcbb482e004ce1007ad23718abaa0c728f91b8fd922c696ee0997fb92ce8610`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Teen online safety: privacy, scams, and getting help

**ID:** `resource:teen-online-safety` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/teen-online-safety` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/teen-online-safety)

**Audience:** Teenagers, Parents & families, Educators & facilitators. **Type:** educational resource.

**Purpose / summary:** Teach privacy, scam recognition and help-seeking around coercion.

**Claims to verify:** Take It Down applies to images taken before age 18, uses images already on the device, and has platform/coverage limits.

**High-risk statements / boundaries:** Do not pay, send more material, download or forward intimate images. Preserve safe identifying information without creating copies of explicit material.

**Editorial judgment / unresolved question / proposed correction:** Safeguarding specialist: verify exact reporting/evidence wording, trusted-adult alternatives and non-blaming language. Check that the relevant section directly connects to Take It Down guidance.

**Sources:** [NCMEC: Tips for tweens](https://www.missingkids.org/blog/2019/post-update/your-netsmartz-tween-tips); [FTC: Recognize and avoid phishing scams](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams); [NCMEC: Sextortion warning signs and support](https://www.missingkids.org/netsmartz/topics/sextortion); [NCMEC: Take It Down](https://takeitdown.ncmec.org/); [NCMEC CyberTipline: report suspected child sexual exploitation](https://www.missingkids.org/gethelpnow/cybertipline); [NCMEC: Sextortion warning signs and support](https://www.missingkids.org/netsmartz/topics/sextortion); [NCMEC: Take It Down](https://takeitdown.ncmec.org/)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `b6af1c3221e192f86b2c1fe77bf96cf79ef53239e76fb124cf0c8dc627b0ef1b`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Gaming scams: a guide for players and parents

**ID:** `resource:gaming-scams` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/gaming-scams` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education/gaming-scams)

**Audience:** Teenagers, Parents & families, Educators & facilitators. **Type:** educational resource.

**Purpose / summary:** Recognize fake currency, account theft and unsafe gaming contact.

**Claims to verify:** Age ratings and controls do not cover every interaction or guarantee safety.

**High-risk statements / boundaries:** Sexual pressure and coercion require trusted support and specialist reporting; never forward explicit evidence.

**Editorial judgment / unresolved question / proposed correction:** Safeguarding specialist: check contact/purchase settings, age-appropriate examples, receipt privacy and official recovery routes.

**Sources:** [FTC: Kids and video games](https://consumer.ftc.gov/articles/kids-video-games); [NCMEC: Gaming safety](https://www.missingkids.org/netsmartz/topics/gaming); [FTC: Recognize and avoid phishing scams](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed); [NCMEC: Sextortion warning signs and support](https://www.missingkids.org/netsmartz/topics/sextortion); [NCMEC CyberTipline: report suspected child sexual exploitation](https://www.missingkids.org/gethelpnow/cybertipline); [NCMEC: Sextortion warning signs and support](https://www.missingkids.org/netsmartz/topics/sextortion); [NCMEC: Take It Down](https://takeitdown.ncmec.org/)

**Source quality concerns:** Check applicability, currency and claim-level support. FTC/FBI retrieval discrepancies require browser verification.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `7c43dae0bdb9d6e2e0b6d688a5b5b25f545bcb6a3c2e3ef6271871c54535b637`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

## 5. Community training and program descriptions

### Education hub

**ID:** `page:/education` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/education)

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Help readers discover the 17 public guides by audience, topic and format.

**Claims to verify:** Resource count, search/filter behavior and which formats are currently public.

**High-risk statements / boundaries:** Training and partnership wording must not imply confirmed delivery or downloadable draft handouts.

**Editorial judgment / unresolved question / proposed correction:** Owner: substantiate “developing with community partners”; confirm cards and format labels do not imply unpublished materials are available.

**Sources:** None in the manifest; owner must substantiate organizational claims.

**Source quality concerns:** No cited evidence of organizational capacity, relationships or completed work; obtain owner confirmation rather than inventing external support.

**Sensitive-topic flags:** child-safety, financial-fraud

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `d138dd410d853da571c0103bdb330a4957041186163518e555e4691960ed3457`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Program pathways

**ID:** `page:/programs` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/programs` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/programs)

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Describe developing training pathways and host inquiry requirements.

**Claims to verify:** Availability, delivery capacity and host safeguarding responsibilities.

**High-risk statements / boundaries:** Present-tense “We equip librarians…” may imply an operating program beyond available guides.

**Editorial judgment / unresolved question / proposed correction:** Owner: verify actual capacity and partnerships; if not yet operating, approve future-tense wording. No booking, certification or delivery promise without evidence.

**Sources:** None in the manifest; owner must substantiate organizational claims.

**Source quality concerns:** No cited evidence of organizational capacity, relationships or completed work; obtain owner confirmation rather than inventing external support.

**Sensitive-topic flags:** child-safety, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Reviewed content hash:** `b433748f0beeed91864b6bad3efff4da0628a6f7db60e14a75e195dba83eafc5`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Partnerships

**ID:** `page:/partner` · **State:** PENDING · **Priority:** P1: review before release

**URL:** `/partner` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/partner)

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Invite institutions to explore collaboration.

**Claims to verify:** An inquiry does not establish a partnership or delivery commitment.

**High-risk statements / boundaries:** Institutional relationships and implied endorsement require authorization.

**Editorial judgment / unresolved question / proposed correction:** Owner: confirm inquiry handling, capacity and that planning/resource conditions are clear.

**Sources:** None in the manifest; owner must substantiate organizational claims.

**Source quality concerns:** No cited evidence of organizational capacity, relationships or completed work; obtain owner confirmation rather than inventing external support.

**Sensitive-topic flags:** None automatically flagged; review context manually.

**Required expertise:** Foundation editorial/organizational authority.

**Reviewed content hash:** `c18e774c9671931bb7827eba89c8a2f22bb4b8b25ac57250281ec33c5bbffa60`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Contact

**ID:** `page:/contact` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/contact` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/contact)

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Provide an organizational email and training inquiry route.

**Claims to verify:** Inbox scope, monitoring and absence of emergency/account-recovery services.

**High-risk statements / boundaries:** Do not invite passwords, account numbers, identity documents or intimate images.

**Editorial judgment / unresolved question / proposed correction:** Owner and safeguarding reviewer: decide whether to explicitly exclude intimate images as well as existing sensitive-data exclusions; confirm routing and response expectations.

**Sources:** None in the manifest; owner must substantiate organizational claims.

**Source quality concerns:** No cited evidence of organizational capacity, relationships or completed work; obtain owner confirmation rather than inventing external support.

**Sensitive-topic flags:** recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; fraud prevention and reporting specialist.

**Reviewed content hash:** `113e4878112aa937b02040e2e9bf3c29e251720eb6a484e590dcf0ed611c70e5`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

## 6. Research and organization pages

### Homepage

**ID:** `page:/` · **State:** PENDING · **Priority:** P1: review before release

**URL:** `/` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/)

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Introduce the Foundation mission, research and educational programs.

**Claims to verify:** “Research shows what works”, “programs put it into practice” and “We evaluate programs” describe current activity.

**High-risk statements / boundaries:** These claims may overstate completed evaluation or operational programs compared with the research/program pages.

**Editorial judgment / unresolved question / proposed correction:** P0 owner decision: supply evidence for current operations/evaluation, or authorize wording such as “We aim to translate research into practical prevention” and “We plan to evaluate programs.” Review shared homepage components, not only page.tsx.

**Sources:** None in the manifest; owner must substantiate organizational claims.

**Source quality concerns:** No cited evidence of organizational capacity, relationships or completed work; obtain owner confirmation rather than inventing external support.

**Sensitive-topic flags:** None automatically flagged; review context manually.

**Required expertise:** Foundation editorial/organizational authority.

**Reviewed content hash:** `e00730ee207459a1b965da6d27fb17853620c7f4cda9d13069ead0dc5324314f`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Research overview

**ID:** `page:/research` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/research` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/research)

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Explain research priorities and intended publication practices.

**Claims to verify:** Which work is planned, underway or published, and whether findings actually exist.

**High-risk statements / boundaries:** Do not imply completed studies, results or evaluated effectiveness without published evidence.

**Editorial judgment / unresolved question / proposed correction:** Owner: verify status against homepage language; distinguish priorities and publication plans from completed research.

**Sources:** None in the manifest; owner must substantiate organizational claims.

**Source quality concerns:** No cited evidence of organizational capacity, relationships or completed work; obtain owner confirmation rather than inventing external support.

**Sensitive-topic flags:** recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; fraud prevention and reporting specialist.

**Reviewed content hash:** `0d39ddfee51db1e9eb7ead89d231e565cfd840503044392232d6942b5e6ca0bd`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### About

**ID:** `page:/about` · **State:** PENDING · **Priority:** P1: review before release

**URL:** `/about` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/about)

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Explain public-interest mission and organizational relationships.

**Claims to verify:** Foundation identity, mission and relationship to ZoraSafe Inc.

**High-risk statements / boundaries:** A described relationship must not imply unsupported endorsement, independence or existing partnership.

**Editorial judgment / unresolved question / proposed correction:** Owner: verify organizational facts and broad claims about education access; no invented credentials or statistics.

**Sources:** None in the manifest; owner must substantiate organizational claims.

**Source quality concerns:** No cited evidence of organizational capacity, relationships or completed work; obtain owner confirmation rather than inventing external support.

**Sensitive-topic flags:** None automatically flagged; review context manually.

**Required expertise:** Foundation editorial/organizational authority.

**Reviewed content hash:** `4fa95babe0466bed55eb88291dc3aabaa7eeaa73cf924db557ffa01fcafc67c9`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Leadership

**ID:** `page:/leadership` · **State:** PENDING · **Priority:** P1: review before release

**URL:** `/leadership` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/leadership)

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Explain that confirmed leadership information is forthcoming.

**Claims to verify:** Whether the placeholder accurately reflects current governance disclosure plans.

**High-risk statements / boundaries:** No implied credentials or named appointments without authorization.

**Editorial judgment / unresolved question / proposed correction:** Owner: decide whether current disclosure is adequate for launch and who will maintain confirmed biographies.

**Sources:** None in the manifest; owner must substantiate organizational claims.

**Source quality concerns:** No cited evidence of organizational capacity, relationships or completed work; obtain owner confirmation rather than inventing external support.

**Sensitive-topic flags:** None automatically flagged; review context manually.

**Required expertise:** Foundation editorial/organizational authority.

**Reviewed content hash:** `fc4514f822bcb5add28b02aab668843f381471015b961a295da794004d6c7b41`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Support

**ID:** `page:/support` · **State:** PENDING · **Priority:** P1: review before release

**URL:** `/support` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/support)

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Describe intended support and future giving arrangements.

**Claims to verify:** Online giving is being set up; current fundraising capability and contact route.

**High-risk statements / boundaries:** Do not imply tax deductibility, charity status, payment processing or use-of-funds commitments without verification.

**Editorial judgment / unresolved question / proposed correction:** Owner: verify fundraising statements and obtain qualified review before adding legal/tax claims; no donation workflow is authorized here.

**Sources:** None in the manifest; owner must substantiate organizational claims.

**Source quality concerns:** No cited evidence of organizational capacity, relationships or completed work; obtain owner confirmation rather than inventing external support.

**Sensitive-topic flags:** None automatically flagged; review context manually.

**Required expertise:** Foundation editorial/organizational authority.

**Reviewed content hash:** `d72627ad069c4f5e04941f5c4087a7bbd3b33d1f1ea81baf09677b0824ef54bc`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Editorial standards

**ID:** `page:/editorial-standards` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/editorial-standards` · [Open candidate preview](https://zora-foundation-2noyw3200-zora-safe.vercel.app/editorial-standards)

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Describe sources, review expectations and correction practices.

**Claims to verify:** Whether the organization can operate the stated review/correction process and monitor its inbox.

**High-risk statements / boundaries:** Source-check dates cannot imply completed expert approval. Shared footer mailto links are inquiries, not published privacy/terms policies.

**Editorial judgment / unresolved question / proposed correction:** Owner: confirm operational responsibility and decide whether privacy/terms disclosure is sufficient before release; approve no unperformed review claims.

**Sources:** None in the manifest; owner must substantiate organizational claims.

**Source quality concerns:** No cited evidence of organizational capacity, relationships or completed work; obtain owner confirmation rather than inventing external support.

**Sensitive-topic flags:** financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; fraud prevention and reporting specialist.

**Reviewed content hash:** `7539ef7ef3e17c47ac56d9ed2eb7512a62d075a0e6a11a77e33aeae7724c8615`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________
