# Editorial review package

**No Foundation approval or professional review is asserted.**

**Phase 4.6 current candidate:** [eight directions implemented/held and exact owner confirmations](phase46-owner-implementation.md). Organizational cards and hashes below reflect the local candidate; Phase 4.4 preview/artifact links are historical and do not show Phase 4.6 changes. All 27 approvals remain pending. Use the current local build for acceptance.

Phase 4.5: use the [eight shared owner decisions](owner-decisions.md) and focused [child/teen](child-teen-review.md) and [fraud/recovery](fraud-recovery-review.md) packets to resolve repeated questions. These do not replace the item records below.

`editorial-manifest.json` inventories 37 review items: 17 public educational guides, ten public organizational pages, seven private handouts and three private curricula. It records audience, source URLs, sensitive-topic flags, required expertise, priority, source location, content hash and changes relative to main commit `5ba89820ddcf57351e467223fda43b9a4d4a0c49`. That Git baseline is verified; the separately investigated production deployment is b092812 (see phase42-deployment-safety.md). “New” means new against that baseline, not newly published.

`review-decisions.json` starts with every decision pending. The release gate requires approvals for the 27 public items; private drafts can remain pending because they are not served. Approval of a draft record does not create a public route or authorize deployment.

## Reviewer workflow

1. The Foundation owner assigns authorized editorial/organizational responsibility and the specialist roles listed on each item. Keyword-derived sensitivity flags are conservative triage, not expert classification; confirm them during review.
2. Run `npm run verify:review`. If source content changed, regenerate the manifest with `npm run review:manifest`, inspect the changes, and obtain a fresh review. This command does not overwrite decisions.
3. Read the complete resource and cited original sources, inspect rendered and printed output using the browser QA procedure, and compare the baseline where applicable. Public resources are data records in `data/resources.ts`, `data/authority-resources.ts` and `data/resource-enhancements.ts`, `data/family-resources.ts`, or `data/fraud-resources.ts` (the composed catalog resolves them).
4. Record a decision in `review-decisions.json`: `approve`, `request-corrections`, or `reject`. Retain `pending` until a human has actually reviewed it. Set `reviewedAt` to the genuine YYYY-MM-DD review date, copy the reviewed `contentSha256`, and identify the real reviewers in `reviewers`, each with `name` and the exact applicable `expertise` role from the manifest. Include scope, corrections, source checks and issue references in `notes`. One verified qualified person may cover multiple roles with separate role entries; do not invent credentials.
5. For requested corrections or rejection, do not release the affected content. Correct and re-review, or prepare a separately tested exclusion patch. Do not silently change statuses or dates to bypass review.
6. Run `npm run release:editorial`. An approval must match the current content hash, valid date and required named reviewer roles. A passing machine check verifies recorded fields only; the owner remains responsible for authorization, qualifications and the truth of decisions.

Source hashes cover composed resource records, handout/curriculum records, and organizational page source plus listed shared content files. They do not replace review of shared templates, linked guidance, site-wide copy, generated screenshots, accessibility, or future source changes. Browser and deployment gates remain separate.

## Phase 4.4 substantive review results

**27 complete public items read; 27 improved. All approvals remain pending.** This workbook now records implemented corrections, not proposed work alone. [Machine-readable findings](phase44-editorial-results.json) associate recommendations with the historical Phase 4.4 hashes. Recommendations are AI-assisted editorial judgments, not authorization or verified specialist review. The ten internal drafts remain unpublished.

The full-text pass covered intros, sections, warning signs, actions, response guidance, examples, sources and related links for all 17 composed guides, plus all ten organizational pages and imported homepage/program copy. Across these items, titles and summaries retain their search intent; fictional examples remain labeled; jargon was reduced; prevention, warning signs and response remain distinct. Source checks support the corrections, while readability, assistive-technology acceptance and specialist judgments remain human gates. No efficacy statistics, new program, new public resource or reviewer identity was added.

**Candidate warning:** earlier Phase 4.3 preview and screenshot links show the previous content. Use the Phase 4.4 candidate/run identified in [readiness.md](readiness.md), or the current local production build, for these cards. The last recorded human decisions remain pending; old hashes in the untouched decision registry must not be reused to approve revised text.

**Source verification:** primary FTC, FBI/IC3, NCMEC, NIST and USAGov pages were retrieved over the network. The specific MFA comparison is now cited to FTC two-factor guidance. CISA pages returned access errors/403, so their contents were not treated as verified or invalid. The older NetSmartz article failed once, then was retrieved; it remains a source-age/suitability question. Earlier direct FTC/FBI HTTP discrepancies are documented; web retrieval now provides content but does not certify every browser or reporting form. [Source evidence and limitations](phase44-source-checks.md).

Homepage manifest hashes now include its imported copy components; organizational page hashes also include the footer and root layout, and programs includes its pathway data. Source hashes still cannot certify rendered accessibility, source currency or human approval.

## 1. General scam and fraud prevention

### Recognize a scam

**ID:** `resource:recognize-a-scam` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/recognize-a-scam` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/recognize-a-scam).

**Audience:** Teenagers, Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Recognize pressure, secrecy and unusual payment requests; pause and verify independently.

**Full-content finding:** Generic separate-contact advice needed a concrete route for each channel.

**Corrections implemented:** Added bank-card callback and independently opened app instructions; readers verify the exact request.

**Remaining factual/safety questions:** Fraud reviewer: confirm examples and payment-response wording remain understandable across the listed audiences.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** [FTC: How to avoid a scam](https://consumer.ftc.gov/articles/how-avoid-scam); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `ef6c8d229c8ea80f00e96132e1a1d10986da9fd133c58e6199d0ff6b5a6e0e5b`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Verify before you trust

**ID:** `resource:verify-before-you-trust` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/verify-before-you-trust` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/verify-before-you-trust).

**Audience:** Teenagers, Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Use a separately obtained contact route to check a request.

**Full-content finding:** Waiting for a callback could be read as delaying immediate safety help; jargon crowded the summary.

**Corrections implemented:** Made waiting apply to payment/disclosure only; explicitly separated emergency help; replaced credentials/out-of-band heading with concrete language.

**Remaining factual/safety questions:** Safeguarding/fraud reviewers: confirm family-phrase and emergency distinctions.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** [NIST: Phishing guidance](https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/phishing); [FBI / IC3: Generative AI and financial fraud](https://www.ic3.gov/PSA/2024/PSA241203); [FTC: Recover a hacked email or social media account](https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account); [FTC: Scammers use fake emergencies to steal your money](https://consumer.ftc.gov/articles/scammers-use-fake-emergencies-steal-your-money); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `645591dc25cb68545894fae6fff86c34c3e70636a4b8d1d2e30af29cce030556`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### What is AI impersonation fraud?

**ID:** `resource:ai-impersonation` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/ai-impersonation` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/ai-impersonation).

**Audience:** Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators. **Type:** educational resource.

**Purpose / summary:** Explain synthetic voices and images without requiring readers to detect technical flaws.

**Full-content finding:** Voice/payment coverage omitted fabricated sexual-image threats. Detection limits were appropriately cautious.

**Corrections implemented:** Added altered-photo exploitation, no-blame help-seeking and direct CyberTipline referral; no downloading/circulation or assumed removal coverage. Added FBI/NCMEC citations and adjusted reading estimate.

**Remaining factual/safety questions:** Specialist: confirm age-appropriate reporting and handling of images already present. Tool eligibility for fully synthetic imagery is not asserted; readers are referred to NCMEC.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** [FBI / IC3: Manipulated images and sextortion](https://www.ic3.gov/PSA/2023/PSA230605); [NCMEC CyberTipline: report suspected child sexual exploitation](https://www.missingkids.org/gethelpnow/cybertipline); [NCMEC: Take It Down eligibility and safe use](https://takeitdown.ncmec.org/faq/); [FBI / IC3: Generative AI and financial fraud](https://www.ic3.gov/PSA/2024/PSA241203); [FTC: Recover a hacked email or social media account](https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account); [NIST: Phishing guidance](https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/phishing); [FTC: Scammers use fake emergencies to steal your money](https://consumer.ftc.gov/articles/scammers-use-fake-emergencies-steal-your-money); [NIST: Technical approaches to synthetic-content transparency](https://www.nist.gov/publications/reducing-risks-posed-synthetic-content-overview-technical-approaches-digital-content); [NCMEC CyberTipline: report suspected child sexual exploitation](https://www.missingkids.org/gethelpnow/cybertipline); [NCMEC: Take It Down eligibility and safe use](https://takeitdown.ncmec.org/faq/); [FBI / IC3: Report internet-enabled fraud](https://www.ic3.gov/)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `2817825b96861af596f8b425f54aeeed1d8ecd9f7cd1496d0508429ab02502cf`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### What to do with a suspicious message

**ID:** `resource:suspicious-message` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/suspicious-message` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/suspicious-message).

**Audience:** Teenagers, Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Stop engagement, verify through a known channel, and respond to account or payment exposure.

**Full-content finding:** Generic save/screenshot guidance lacked a child-image exception.

**Corrections implemented:** Replaced generic evidence copying with sender/time/payment references and an explicit no-download/screenshot/forward exception for sexual images of children. Added NCMEC help links while retaining ordinary FTC reporting.

**Remaining factual/safety questions:** Specialist: reconcile safe reporting with evidence handling on a child’s existing device; no legal retention advice is asserted.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** [FTC: Recognize and avoid phishing scams](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed); [NCMEC CyberTipline: report suspected child sexual exploitation](https://www.missingkids.org/gethelpnow/cybertipline); [NCMEC: Take It Down eligibility and safe use](https://takeitdown.ncmec.org/faq/); [NCMEC CyberTipline: report suspected child sexual exploitation](https://www.missingkids.org/gethelpnow/cybertipline); [NCMEC: Take It Down eligibility and safe use](https://takeitdown.ncmec.org/faq/); [FTC: Report an ordinary scam or phishing attempt](https://reportfraud.ftc.gov/)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `9f382c048ceb78fee248afb9b8fefe92e4b096061babd986a1e94d123f97be3c`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Make your accounts safer

**ID:** `resource:account-safety` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/account-safety` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/account-safety).

**Audience:** Teenagers, Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Improve passwords, multi-factor authentication and account recovery.

**Full-content finding:** MFA comparison lacked a sufficiently specific composed-page source; post-takeover checks omitted email forwarding.

**Corrections implemented:** Cited verified FTC two-factor guidance; added security-settings setup steps, SMS-only fallback and unexpected-prompt caution; added removal of attacker-created forwarding rules.

**Remaining factual/safety questions:** No unsupported MFA comparison remains identified. Reviewer should check terminology and provider-specific recovery limitations. CISA fetch was denied; FTC provides independent primary support.

**Recommendation:** approval — actual approval remains pending.

**Sources:** [FTC: Recover a hacked email or social media account](https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account); [FTC: Recognize and avoid phishing scams](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams); [FTC: Use two-factor authentication to protect your accounts](https://consumer.ftc.gov/articles/use-two-factor-authentication-protect-your-accounts); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `011cb83a925ced8be04a4fdb363f43e104ff21ca5c2c1128d6a709e985a82083`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### What is a human-targeted attack?

**ID:** `resource:human-targeted-attacks` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/human-targeted-attacks` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/human-targeted-attacks).

**Audience:** Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Explain manipulation of people alongside technical compromise.

**Full-content finding:** Meta-commentary about inventing categories distracted from the practical definition; emergency language was overly broad.

**Corrections implemented:** Simplified the umbrella-term explanation, spelled out passwords/codes and distinguished payment checks from emergency help.

**Remaining factual/safety questions:** Confirm the umbrella term is useful for this audience and does not imply a formal diagnosis or measured threat category.

**Recommendation:** approval — actual approval remains pending.

**Sources:** [NIST: Phishing guidance](https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/phishing); [FBI / IC3: Generative AI and financial fraud](https://www.ic3.gov/PSA/2024/PSA241203); [FTC: How to avoid a scam](https://consumer.ftc.gov/articles/how-avoid-scam)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `3b024ad039902c2ada76969ef432dcf70782678ba0712e2d85dcffe097805967`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### What to do after a scam

**ID:** `resource:after-a-scam` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/after-a-scam` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/after-a-scam).

**Audience:** Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Prioritize provider contact, account containment, safe evidence and reporting.

**Full-content finding:** A first-hour framing could sound like a deadline; payment methods were not differentiated; generic original-file retention was unsafe in child-exploitation contexts.

**Corrections implemented:** Removed the hour threshold; added card/bank/app/wire/gift-card/crypto/delivery response routes and factual transaction descriptions; replaced blanket evidence retention with non-image details and specialist handling instructions.

**Remaining factual/safety questions:** Fraud and safeguarding specialists must review payment sequencing, reporting jurisdiction and existing-device evidence handling. Recovery and legal rights vary; no guarantee or eligibility determination is made.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed); [FTC: Recover a hacked email or social media account](https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account); [FTC: Refund and recovery scams](https://consumer.ftc.gov/articles/refund-and-recovery-scams); [NCMEC CyberTipline: report suspected child sexual exploitation](https://www.missingkids.org/gethelpnow/cybertipline); [NCMEC: Take It Down eligibility and safe use](https://takeitdown.ncmec.org/faq/); [NIST: Phishing guidance](https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/phishing); [FBI / IC3: Report internet crime](https://www.ic3.gov/)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `4ad53cf4f24ffce0a262f7c5e087a54771259b6b81e12374ced44a93688d6974`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### QR code and suspicious link safety

**ID:** `resource:qr-link-safety` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/qr-link-safety` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/qr-link-safety).

**Audience:** Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Explain QR/link destinations and independent navigation.

**Full-content finding:** Credentials and MFA were unexplained; readers could feel obliged to interpret an unfamiliar URL.

**Corrections implemented:** Added a known-bookmark/app alternative, expanded MFA, replaced credentials with password/code and clarified account response.

**Remaining factual/safety questions:** Check whether the fictional domain example is understandable; do not ask learners to visit suspicious links.

**Recommendation:** approval — actual approval remains pending.

**Sources:** [FTC: Harmful links hidden in QR codes](https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information); [FTC: Recognize and avoid phishing scams](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams); [FTC: Recover a hacked email or social media account](https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `f229312d5b039e0433019aa298a6f5907afdd355c23147db8ca1f18dd424c02d`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### How to handle a phone impersonation scam

**ID:** `resource:phone-impersonation` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/phone-impersonation` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/phone-impersonation).

**Audience:** Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** End suspicious calls and use an independently known callback route.

**Full-content finding:** Callback steps could be more specific about bank impersonation.

**Corrections implemented:** Require confirmation of the exact transfer/account change and no transfer to a caller-supplied account while checking.

**Remaining factual/safety questions:** Fraud reviewer: confirm callback examples and response to already-shared access.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** [FTC: Phone scams](https://consumer.ftc.gov/articles/phone-scams); [FTC: How to avoid a scam](https://consumer.ftc.gov/articles/how-avoid-scam); [FBI / IC3: Generative AI and financial fraud](https://www.ic3.gov/PSA/2024/PSA241203); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `2c7d7401b017f99706f465cf804d204904ac3dbfd5268def65d6caf457b0f403`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Government impersonation scams: check before you respond

**ID:** `resource:government-impersonation` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/government-impersonation` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/government-impersonation).

**Audience:** Older adults, Caregivers, Libraries, senior centers & community organizations, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Verify a purported U.S. agency through an official directory.

**Full-content finding:** Attempted-impersonation reporting lacked a named destination in the advice.

**Corrections implemented:** Named ReportFraud.ftc.gov and distinguished reporting from resolving an agency case or contacting a payment provider.

**Remaining factual/safety questions:** Fraud reviewer: verify U.S. scope and preservation of genuine notice/deadline obligations; no individual legal interpretation.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** [FTC: Avoid government impersonation scams](https://consumer.ftc.gov/articles/how-avoid-government-impersonation-scam); [USAGov: Official agency directory](https://www.usa.gov/agency-index); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `d0227618dd06ec349f34b202f092fc41bd5e9d3b3b9477e9799bdbac9b31a356`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Payment redirection scams: verify changed payment details

**ID:** `resource:payment-redirection` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/payment-redirection` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/payment-redirection).

**Audience:** Libraries, senior centers & community organizations, Educators & facilitators, Caregivers, Older adults. **Type:** educational resource.

**Purpose / summary:** Verify changed invoice or bank details through an established contact.

**Full-content finding:** Bank contact needed a specific request and clearer sequencing relative to reporting.

**Corrections implemented:** Added immediate stopping/recall request via the sending institution and receiving institution; do not wait for a crime report; expanded IC3 name and qualified investigation/recovery expectations.

**Remaining factual/safety questions:** Fraud reviewer: verify transfer-recall wording and applicability to community organizations.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** [FBI: Business email compromise and payment verification](https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise); [FTC: Recover a hacked email or social media account](https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `ceb85a4d7568828460b21ee9ca2e10fa332cbd281e22d5ff974c04f779db7465`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

## 2. Older-adult digital safety

### Online safety for older adults: a practical guide

**ID:** `resource:online-safety-older-adults` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/online-safety-older-adults` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/online-safety-older-adults).

**Audience:** Older adults, Caregivers, People building digital confidence, Libraries, senior centers & community organizations. **Type:** educational resource.

**Purpose / summary:** Support independent decisions, accessible routines and trusted help.

**Full-content finding:** Recovery assumed access to a second trusted device.

**Corrections implemented:** Added known-number phone or branch support while a compromised device is checked; preserved autonomy and private credentials.

**Remaining factual/safety questions:** Confirm accessible options for readers without branch access or a helper; support availability differs by provider.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** [FTC: Recognize and avoid phishing scams](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams); [FTC: Spot, avoid, and report tech support scams](https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `5efd0a45f6e1408baeeda80072233407294f286b81c1ce6f62ef76c11c63e8d2`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

## 3. Parent and family education

### Family emergency scams: pause and check

**ID:** `resource:family-emergency-scams` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/family-emergency-scams` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/family-emergency-scams).

**Audience:** Older adults, Parents & families, Caregivers, Libraries, senior centers & community organizations, Educators & facilitators, People building digital confidence. **Type:** educational resource.

**Purpose / summary:** Plan a non-blaming family verification routine for urgent requests.

**Full-content finding:** Private phrase advice did not explicitly exclude shared teaching worksheets.

**Corrections implemented:** Added that exclusion while retaining independent verification, changing exposed phrases and emergency-service guidance.

**Remaining factual/safety questions:** Review phrase accessibility and trusted-contact alternatives; a phrase is not proof of identity.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** [FTC: Scammers use fake emergencies to steal your money](https://consumer.ftc.gov/articles/scammers-use-fake-emergencies-steal-your-money); [FBI / IC3: Generative AI and financial fraud](https://www.ic3.gov/PSA/2024/PSA241203); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `0492882d4821d1c75fb60da0d1cc0e89f429f6fdf00fd44492104b93024726b2`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Internet safety for parents: a practical family guide

**ID:** `resource:internet-safety-parents` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/internet-safety-parents` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/internet-safety-parents).

**Audience:** Parents & families, Caregivers, Educators & facilitators. **Type:** educational resource.

**Purpose / summary:** Develop family agreements, privacy habits and trusted-adult support.

**Full-content finding:** Controls guidance needed actionable settings; exploitation referral was indirect.

**Corrections implemented:** Added message permissions, public-location settings and purchase approval; named CyberTipline directly and prohibited copying/downloading child sexual images for help.

**Remaining factual/safety questions:** Safeguarding specialist: assess developmental fit, alternate adults and family communication. Owner/qualified reviewer should confirm any future legal privacy statements.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** [FTC: Kids and video games](https://consumer.ftc.gov/articles/kids-video-games); [FTC: Protecting your child’s privacy online](https://consumer.ftc.gov/articles/protecting-your-childs-privacy-online); [NCMEC: Sextortion warning signs and support](https://www.missingkids.org/netsmartz/topics/sextortion); [NCMEC: Take It Down](https://takeitdown.ncmec.org/); [NCMEC CyberTipline: report suspected child sexual exploitation](https://www.missingkids.org/gethelpnow/cybertipline); [NCMEC: Sextortion warning signs and support](https://www.missingkids.org/netsmartz/topics/sextortion); [NCMEC: Take It Down](https://takeitdown.ncmec.org/)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `2d8e793b1d781d856015efc5b5f1c7e1b32321ea75eeaf7f802b403ab96bcc92`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

## 4. Children and teen education

### Online safety for kids: practice with a trusted adult

**ID:** `resource:online-safety-kids` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/online-safety-kids` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/online-safety-kids).

**Audience:** Children with a trusted adult, Parents & families, Educators & facilitators. **Type:** educational resource.

**Purpose / summary:** Use fictional practice activities with a trusted adult.

**Full-content finding:** Adult involvement could imply a meeting is automatically safe; support route assumed the first adult was safe.

**Corrections implemented:** Replaced meeting language with no secret/solo arrangements; added another-adult option if the first is involved or unhelpful; gave adults explicit reporting and immediate-danger steps.

**Remaining factual/safety questions:** Specialist must assess read-aloud wording, disability/communication access, trusted-adult alternatives and the older NetSmartz source’s applicability.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** [NCMEC: Tips for tweens](https://www.missingkids.org/blog/2019/post-update/your-netsmartz-tween-tips); [NCMEC: Gaming safety](https://www.missingkids.org/netsmartz/topics/gaming); [NCMEC CyberTipline: report suspected child sexual exploitation](https://www.missingkids.org/gethelpnow/cybertipline); [NCMEC: Sextortion warning signs and support](https://www.missingkids.org/netsmartz/topics/sextortion); [NCMEC: Take It Down](https://takeitdown.ncmec.org/)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `c9f2b9aff01b3774ad71a924d36f119af6b75cd109b7c21a3a62efebc4273d74`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Teen online safety: privacy, scams, and getting help

**ID:** `resource:teen-online-safety` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/teen-online-safety` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/teen-online-safety).

**Audience:** Teenagers, Parents & families, Educators & facilitators. **Type:** educational resource.

**Purpose / summary:** Teach privacy, scam recognition and help-seeking around coercion.

**Full-content finding:** Threat guidance omitted fake images and self-reporting; removal-service scope and evidence boundaries needed precision.

**Corrections implemented:** Added fake/altered threats, independent CyberTipline reporting, grooming pressure from known contacts, no-copy evidence boundaries, before-18 eligibility even for adults now, public/unencrypted platform limits and original-device fallback. Added section-level FBI/NCMEC citations.

**Remaining factual/safety questions:** Safeguarding specialist: evaluate trauma-informed wording and what a teen should do with material already present. Do not infer Take It Down eligibility for every AI-generated image.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** [NCMEC CyberTipline: report suspected child sexual exploitation](https://www.missingkids.org/gethelpnow/cybertipline); [NCMEC: Take It Down eligibility and safe use](https://takeitdown.ncmec.org/faq/); [FBI / IC3: Manipulated images and sextortion](https://www.ic3.gov/PSA/2023/PSA230605); [NCMEC: Tips for tweens](https://www.missingkids.org/blog/2019/post-update/your-netsmartz-tween-tips); [FTC: Recognize and avoid phishing scams](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams); [NCMEC: Sextortion warning signs and support](https://www.missingkids.org/netsmartz/topics/sextortion); [NCMEC: Take It Down](https://takeitdown.ncmec.org/); [NCMEC CyberTipline: report suspected child sexual exploitation](https://www.missingkids.org/gethelpnow/cybertipline); [NCMEC: Sextortion warning signs and support](https://www.missingkids.org/netsmartz/topics/sextortion); [NCMEC: Take It Down](https://takeitdown.ncmec.org/)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `9754054865abe71787e08afeaec9936133a87ec84dc138ac2ebaac283be81411`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Gaming scams: a guide for players and parents

**ID:** `resource:gaming-scams` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/gaming-scams` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/gaming-scams).

**Audience:** Teenagers, Parents & families, Educators & facilitators. **Type:** educational resource.

**Purpose / summary:** Recognize fake currency, account theft and unsafe gaming contact.

**Full-content finding:** MFA was unexplained and exploitation help was vague.

**Corrections implemented:** Defined the extra sign-in step; named CyberTipline and trusted-adult involvement; added no-download/forward and immediate-danger guidance.

**Remaining factual/safety questions:** Specialist: check age suitability, contact migration/grooming and the distinction between disputed purchases and exploitative contact.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** [FTC: Kids and video games](https://consumer.ftc.gov/articles/kids-video-games); [NCMEC: Gaming safety](https://www.missingkids.org/netsmartz/topics/gaming); [FTC: Recognize and avoid phishing scams](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams); [FTC: What to do if you were scammed](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed); [NCMEC: Sextortion warning signs and support](https://www.missingkids.org/netsmartz/topics/sextortion); [NCMEC CyberTipline: report suspected child sexual exploitation](https://www.missingkids.org/gethelpnow/cybertipline); [NCMEC: Sextortion warning signs and support](https://www.missingkids.org/netsmartz/topics/sextortion); [NCMEC: Take It Down](https://takeitdown.ncmec.org/)

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `b8fb8641c8083b3f4a698645cdac02c8802ffe585c539711fa0664a29ab1306e`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

## 5. Community training and program descriptions

### Education hub

**ID:** `page:/education` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Help readers discover the 17 public guides by audience, topic and format.

**Full-content finding:** Training CTAs and descriptions implied delivery and existing partners.

**Corrections implemented (Phase 4.6):** Available public guides and developing training pathways retained; shared footer relationship neutralized.

**Remaining factual/safety questions:** Manual resource-discovery acceptance and specialist guide review remain; assign responder for training inquiries.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner Phase 4.6 directions; inspected application/data and README authorization records; phase46-owner-implementation.md. Missing operational/legal facts remain explicitly unresolved.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, financial-fraud

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `e1baa8912a8e6704b907b204ddf247a0a0f78912cfb868f2fe119cae0bf29d73`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Program pathways

**ID:** `page:/programs` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/programs` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/programs).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Describe developing training pathways and host inquiry requirements.

**Full-content finding:** Some present-tense claims conflicted with development status.

**Corrections implemented (Phase 4.6):** Explicit development-only pilot/curriculum/hosting inquiries, direct workshop inquiry CTA, and retirement/nonprofit/institutional audiences within existing pathways.

**Remaining factual/safety questions:** Assign inquiry responsibility; confirm feasibility and safeguarding before any pilot commitment. Owner has authorized development inquiries, not workshop delivery.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner Phase 4.6 directions; inspected application/data and README authorization records; phase46-owner-implementation.md. Missing operational/legal facts remain explicitly unresolved.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `4330f2472ebdd5a834c2b6c1329ed71e9b756dbdcc0fb11e4a6bacc647da3826`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Partnerships

**ID:** `page:/partner` · **State:** PENDING · **Priority:** P1: review before release

**URL:** `/partner` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/partner).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Invite institutions to explore collaboration.

**Full-content finding:** Collaboration categories could be mistaken for existing relationships; inquiry lacked a privacy boundary.

**Corrections implemented (Phase 4.6):** Prospective collaboration wording retained; shared footer named commercial relationship removed. Citations do not imply partnerships.

**Remaining factual/safety questions:** Assign inquiry owner and policy responsibility. Evidence is needed only if an existing named relationship is proposed for publication.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner Phase 4.6 directions; inspected application/data and README authorization records; phase46-owner-implementation.md. Missing operational/legal facts remain explicitly unresolved.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist.

**Candidate content hash (not approval):** `f5683aaa293aaa49a413be596961a2e80d28e4eb2dbcf38a34e34ddf7819768a`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Contact

**ID:** `page:/contact` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/contact` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/contact).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Provide an organizational email and training inquiry route.

**Full-content finding:** Inbox exclusions did not explicitly cover intimate images and offered no immediate alternative routes.

**Corrections implemented (Phase 4.6):** Added school/parent, support and correction subjects; explained that mailto does not submit/save/send; kept urgent external referrals and data-minimization boundaries.

**Remaining factual/safety questions:** Verify mailbox delivery/provider, accountable primary/backup, review frequency and sensitive-message/correction escalation. No MX answer was returned; no delivery claim is made.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner Phase 4.6 directions; inspected application/data and README authorization records; phase46-owner-implementation.md. Missing operational/legal facts remain explicitly unresolved.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `71fe7d6e11bdd11a726723aca504d854d5125003a0cb2a5dcc7b0c646c114582`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

## 6. Research and organization pages

### Homepage

**ID:** `page:/` · **State:** PENDING · **Priority:** P1: review before release

**URL:** `/` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Introduce the Foundation mission, research and educational programs.

**Full-content finding:** Homepage implied delivered programs, active partnerships, evaluated outcomes and an unsupported population claim.

**Corrections implemented (Phase 4.6):** Held unverified photos and adapted text/identity layout; invited pilot/future workshop inquiries; removed named commercial relationship from shared footer.

**Remaining factual/safety questions:** Confirm leadership, operational inbox and policies; unknown photos are no longer served. Retained identity has repository approval evidence; see asset-rights.md.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner Phase 4.6 directions; inspected application/data and README authorization records; phase46-owner-implementation.md. Missing operational/legal facts remain explicitly unresolved.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist.

**Candidate content hash (not approval):** `765e415d67f90a45c79148b1ae2458ea70753d8b8e2b3dce31c8594ff05f8b6c`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Research overview

**ID:** `page:/research` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/research` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/research).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Explain research priorities and intended publication practices.

**Full-content finding:** The title and model could imply demonstrated prevention results despite an empty publication registry.

**Corrections implemented (Phase 4.6):** Limited no-reports claim to this website; require verified authorship, evidence, methods and editorial approval before listing. Published catalog validation now rejects unreviewed work.

**Remaining factual/safety questions:** No report or outcome claim is added. Future work requires actual qualified review and evidence; assign inquiry owner for current research interest messages.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner Phase 4.6 directions; inspected application/data and README authorization records; phase46-owner-implementation.md. Missing operational/legal facts remain explicitly unresolved.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `e8529e86a8e237ac99390b746de89e66a10bc1f7a624a8594c72abc5703b55a4`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### About

**ID:** `page:/about` · **State:** PENDING · **Priority:** P1: review before release

**URL:** `/about` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/about).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Explain public-interest mission and organizational relationships.

**Full-content finding:** Research/evaluation language could imply demonstrated effects.

**Corrections implemented (Phase 4.6):** Removed speculative ZoraSafe Inc. relationship; retained mission and invited future collaboration without naming institutions.

**Remaining factual/safety questions:** Supply Foundation leadership assignments and legal identity for leadership/policy review; no named relationship requires confirmation in this candidate.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner Phase 4.6 directions; inspected application/data and README authorization records; phase46-owner-implementation.md. Missing operational/legal facts remain explicitly unresolved.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist.

**Candidate content hash (not approval):** `ade33206c894041b307c479a7d1ba540864666d417973576aedc50ad39359355`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Leadership

**ID:** `page:/leadership` · **State:** PENDING · **Priority:** P1: review before release

**URL:** `/leadership` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/leadership).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Explain that confirmed leadership information is forthcoming.

**Full-content finding:** “Coming soon” implied an unverified publication timetable; no names were available.

**Corrections implemented (Phase 4.6):** Retained truthful not-yet-published status; no inferred commercial/governance assignments or portraits. Shared footer no longer names ZoraSafe Inc.

**Remaining factual/safety questions:** Owner selected publication: supply exact names, Foundation roles, approved short biographies and appointment/authorization evidence. Do not substitute commercial titles.

**Recommendation:** revision — actual approval remains pending.

**Sources:** Owner Phase 4.6 directions; inspected application/data and README authorization records; phase46-owner-implementation.md. Missing operational/legal facts remain explicitly unresolved.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist.

**Candidate content hash (not approval):** `1c7da0e824f3cbd4ac8afeb9df27352ba7794c5eb27f75078cf4423a29025b90`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Support

**ID:** `page:/support` · **State:** PENDING · **Priority:** P1: review before release

**URL:** `/support` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/support).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Describe intended support and future giving arrangements.

**Full-content finding:** “Being set up” implied an unverified active giving implementation.

**Corrections implemented (Phase 4.6):** Implemented authorized support-inquiry invitation, explicit non-transaction/no-payment language and developing-work scope; retained payment-detail warning.

**Remaining factual/safety questions:** Operational mailbox and policy approval remain required. No tax-deductibility claim or payment workflow needs factual substantiation in this candidate.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner Phase 4.6 directions; inspected application/data and README authorization records; phase46-owner-implementation.md. Missing operational/legal facts remain explicitly unresolved.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, financial-fraud

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `be9a019471bef3e02b9270789da218bdd2f3716edcb0b8a485d876ded3954128`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Editorial standards

**ID:** `page:/editorial-standards` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/editorial-standards` · [Historical Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/editorial-standards).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Describe sources, review expectations and correction practices.

**Full-content finding:** Correction requests needed safer evidence handling and emergency boundaries.

**Corrections implemented (Phase 4.6):** Existing safe correction instructions retained, with matching correction category now on Contact; shared footer relationship neutralized.

**Remaining factual/safety questions:** Appoint authorized editorial responsibility and approve actual mailbox/privacy/escalation process.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner Phase 4.6 directions; inspected application/data and README authorization records; phase46-owner-implementation.md. Missing operational/legal facts remain explicitly unresolved.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `386aab2cb96c19300d9815eb9f0fa001512a2357507e14e1b45c6bed5b56b2d1`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________
