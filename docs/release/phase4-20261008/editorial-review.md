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

Source hashes cover composed resource records, handout/curriculum records, and organizational page source plus listed shared content files. They do not replace review of shared templates, linked guidance, site-wide copy, generated screenshots, accessibility, or future source changes. Browser and deployment gates remain separate.

## Phase 4.4 substantive review results

**27 complete public items read; 27 improved. All approvals remain pending.** This workbook now records implemented corrections, not proposed work alone. [Machine-readable findings](phase44-editorial-results.json) associate recommendations with the current manifest hashes. Recommendations are AI-assisted editorial judgments, not authorization or verified specialist review. The ten internal drafts remain unpublished.

The full-text pass covered intros, sections, warning signs, actions, response guidance, examples, sources and related links for all 17 composed guides, plus all ten organizational pages and imported homepage/program copy. Across these items, titles and summaries retain their search intent; fictional examples remain labeled; jargon was reduced; prevention, warning signs and response remain distinct. Source checks support the corrections, while readability, assistive-technology acceptance and specialist judgments remain human gates. No efficacy statistics, new program, new public resource or reviewer identity was added.

**Candidate warning:** earlier Phase 4.3 preview and screenshot links show the previous content. Use the Phase 4.4 candidate/run identified in [readiness.md](readiness.md), or the current local production build, for these cards. The last recorded human decisions remain pending; old hashes in the untouched decision registry must not be reused to approve revised text.

**Source verification:** primary FTC, FBI/IC3, NCMEC, NIST and USAGov pages were retrieved over the network. The specific MFA comparison is now cited to FTC two-factor guidance. CISA pages returned access errors/403, so their contents were not treated as verified or invalid. The older NetSmartz article failed once, then was retrieved; it remains a source-age/suitability question. Earlier direct FTC/FBI HTTP discrepancies are documented; web retrieval now provides content but does not certify every browser or reporting form. [Source evidence and limitations](phase44-source-checks.md).

Homepage manifest hashes now include its imported copy components; organizational page hashes also include the footer and root layout, and programs includes its pathway data. Source hashes still cannot certify rendered accessibility, source currency or human approval.

## 1. General scam and fraud prevention

### Recognize a scam

**ID:** `resource:recognize-a-scam` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/education/recognize-a-scam` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/recognize-a-scam).

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

**URL:** `/education/verify-before-you-trust` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/verify-before-you-trust).

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

**URL:** `/education/ai-impersonation` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/ai-impersonation).

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

**URL:** `/education/suspicious-message` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/suspicious-message).

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

**URL:** `/education/account-safety` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/account-safety).

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

**URL:** `/education/human-targeted-attacks` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/human-targeted-attacks).

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

**URL:** `/education/after-a-scam` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/after-a-scam).

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

**URL:** `/education/qr-link-safety` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/qr-link-safety).

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

**URL:** `/education/phone-impersonation` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/phone-impersonation).

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

**URL:** `/education/government-impersonation` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/government-impersonation).

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

**URL:** `/education/payment-redirection` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/payment-redirection).

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

**URL:** `/education/online-safety-older-adults` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/online-safety-older-adults).

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

**URL:** `/education/family-emergency-scams` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/family-emergency-scams).

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

**URL:** `/education/internet-safety-parents` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/internet-safety-parents).

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

**URL:** `/education/online-safety-kids` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/online-safety-kids).

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

**URL:** `/education/teen-online-safety` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/teen-online-safety).

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

**URL:** `/education/gaming-scams` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education/gaming-scams).

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

**URL:** `/education` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/education).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Help readers discover the 17 public guides by audience, topic and format.

**Full-content finding:** Training CTAs and descriptions implied delivery and existing partners.

**Corrections implemented:** Changed CTA to discussion and described prospective hosts/planned sessions; retained 17 discoverable guides and honest format availability.

**Remaining factual/safety questions:** Owner: confirm planning capacity and inquiry handling. Human reviewers must accept filter/search usability and reading level.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner-held organizational records required; no public evidence supplied for institutional claims.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, financial-fraud

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `66d10a799bd45261916e46110e195b576c39211622d5e10e283f7c066c096aa0`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Program pathways

**ID:** `page:/programs` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/programs` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/programs).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Describe developing training pathways and host inquiry requirements.

**Full-content finding:** Some present-tense claims conflicted with development status.

**Corrections implemented:** Changed “offered”/partner delivery language to planned work; clarified no public schedule and that public guides do not establish a staffed training program.

**Remaining factual/safety questions:** Owner: confirm available staffing, host responsibilities and actual planning status before making commitments.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner-held organizational records required; no public evidence supplied for institutional claims.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `2287871735463b0335bee22ec100b08602fc86f50ab9c0e1ce84f948fd0f9306`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Partnerships

**ID:** `page:/partner` · **State:** PENDING · **Priority:** P1: review before release

**URL:** `/partner` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/partner).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Invite institutions to explore collaboration.

**Full-content finding:** Collaboration categories could be mistaken for existing relationships; inquiry lacked a privacy boundary.

**Corrections implemented:** Explicitly described future collaboration invitations and excluded participant records/personal incident evidence.

**Remaining factual/safety questions:** Owner: confirm capacity, prospective-partner handling and any institutional relationships before naming them.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner-held organizational records required; no public evidence supplied for institutional claims.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist.

**Candidate content hash (not approval):** `f2830398aef41f3fe964122273362d0dc9cb5efd64bd847c15ff4213f7d0c38a`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Contact

**ID:** `page:/contact` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/contact` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/contact).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Provide an organizational email and training inquiry route.

**Full-content finding:** Inbox exclusions did not explicitly cover intimate images and offered no immediate alternative routes.

**Corrections implemented:** Excluded intimate images and exploitation reporting; added bank/payment response, after-scam guide, CyberTipline and emergency directions without waiting for email; training CTA now requests discussion.

**Remaining factual/safety questions:** Owner/safeguarding reviewer: confirm monitoring, escalation and privacy practices. This is not an emergency or exploitation-report intake service.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner-held organizational records required; no public evidence supplied for institutional claims.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `8569600f7e1d0f74dbeec53b4ff0d548132d61b69db9c05169e9f6c62297dd4c`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

## 6. Research and organization pages

### Homepage

**ID:** `page:/` · **State:** PENDING · **Priority:** P1: review before release

**URL:** `/` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Introduce the Foundation mission, research and educational programs.

**Full-content finding:** Homepage implied delivered programs, active partnerships, evaluated outcomes and an unsupported population claim.

**Corrections implemented:** Reframed hero, work, program, research and partnership copy as available guides plus development plans; removed “most people” claim; aligned search/social description and footer; labeled privacy/terms links as inquiries.

**Remaining factual/safety questions:** Owner must confirm actual organizational identity, current capacity, relationship disclosures and image provenance/permissions. Copy no longer claims delivered programs or measured outcomes.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner-held organizational records required; no public evidence supplied for institutional claims.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist.

**Candidate content hash (not approval):** `5670d8c07afd3031717106f2fb45c7f3ae4b45f1fb7b0efe1f838c911cee7038`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Research overview

**ID:** `page:/research` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/research` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/research).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Explain research priorities and intended publication practices.

**Full-content finding:** The title and model could imply demonstrated prevention results despite an empty publication registry.

**Corrections implemented:** Changed the title to a research direction and explicitly described future work, not completed studies or measured outcomes.

**Remaining factual/safety questions:** Owner/research lead: confirm planned methods, capacity and publication status; no findings may be invented.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner-held organizational records required; no public evidence supplied for institutional claims.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `cf7a8d9a77d4d95a01bbcc726d4bf51c0ac8392321f1c161069a8516eda2cb9b`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### About

**ID:** `page:/about` · **State:** PENDING · **Priority:** P1: review before release

**URL:** `/about` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/about).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Explain public-interest mission and organizational relationships.

**Full-content finding:** Research/evaluation language could imply demonstrated effects.

**Corrections implemented:** Separated available guides from planned research/program/access work and labeled evaluation as an aim.

**Remaining factual/safety questions:** Owner: confirm Foundation identity, governance, public-interest description and any relationship with ZoraSafe Inc.; no tax or legal status added.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner-held organizational records required; no public evidence supplied for institutional claims.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist.

**Candidate content hash (not approval):** `a10604e3e5a41f7e816d31a911879f16d72f9ec0e6c6a1bec4b954fc3f650c8e`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Leadership

**ID:** `page:/leadership` · **State:** PENDING · **Priority:** P1: review before release

**URL:** `/leadership` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/leadership).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Explain that confirmed leadership information is forthcoming.

**Full-content finding:** “Coming soon” implied an unverified publication timetable; no names were available.

**Corrections implemented:** Replaced timing promise with explicit not-yet-published status and authorization requirement.

**Remaining factual/safety questions:** Owner must decide whether launch without public leadership names is acceptable and provide verified roles/biographies if required. This credibility gap cannot be resolved by invented names.

**Recommendation:** revision — actual approval remains pending.

**Sources:** Owner-held organizational records required; no public evidence supplied for institutional claims.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist.

**Candidate content hash (not approval):** `42b78d3b4d193af410c1647bcf7f2e308e807f833696c131b706983f3d2e7498`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Support

**ID:** `page:/support` · **State:** PENDING · **Priority:** P1: review before release

**URL:** `/support` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/support).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Describe intended support and future giving arrangements.

**Full-content finding:** “Being set up” implied an unverified active giving implementation.

**Corrections implemented:** Stated the observable absence of online giving and directed prospective support to confirmation; prohibited emailing payment details.

**Remaining factual/safety questions:** Owner must confirm legal/fundraising status, permitted support arrangements and required disclosures before soliciting or receiving funds. No tax-deductibility claim is made.

**Recommendation:** revision — actual approval remains pending.

**Sources:** Owner-held organizational records required; no public evidence supplied for institutional claims.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, financial-fraud

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `8502126297deec10e1b654134dcf237e734b127833e3fc1905977d3324383ddc`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________

### Editorial standards

**ID:** `page:/editorial-standards` · **State:** PENDING · **Priority:** P0: review before release

**URL:** `/editorial-standards` · [Current Phase 4.4 preview](https://zora-foundation-poeofm04v-zora-safe.vercel.app/editorial-standards).

**Audience:** General public / institutional partners. **Type:** organizational page.

**Purpose / summary:** Describe sources, review expectations and correction practices.

**Full-content finding:** Correction requests needed safer evidence handling and emergency boundaries.

**Corrections implemented:** Excluded intimate images; request wording/public sources instead; emergency help must not wait for an editorial reply.

**Remaining factual/safety questions:** Owner: appoint actual responsibility for corrections and verify inbox process; source checks and agent recommendations do not constitute expert approval.

**Recommendation:** conditional approval — actual approval remains pending.

**Sources:** Owner-held organizational records required; no public evidence supplied for institutional claims.

**Source quality concerns:** See item-specific questions above and phase44-source-checks.md; retrieval is not expert approval.

**Sensitive-topic flags:** child-safety, exploitation-and-safe-reporting, financial-fraud, recovery-and-reporting

**Required expertise:** Foundation editorial/organizational authority; child-safety and safeguarding specialist; fraud prevention and reporting specialist.

**Candidate content hash (not approval):** `9cc01d940a37929659bb20d7c8ce6cabd2d8d7f2e6911838b82e0b9a10a41420`

**Human decision:** __________  **Reviewer(s), expertise and date:** __________

**Notes / correction issue / source verification:** __________
