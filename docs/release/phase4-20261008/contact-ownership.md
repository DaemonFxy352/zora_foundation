# Inquiry routing and ownership — Phase 4.6

**Phase 4.7 update:** authoritative DNS confirms no MX or apex SPF; DMARC exists, DKIM/provider/delivery remain unverified. The local contact page now displays that delivery and monitoring are unverified. See [operational verification and exact completion test](phase47-operational-verification.md). No test email was sent.

**Implementation:** email links only; no form, submission endpoint, Server Action, database, email SDK or payment backend exists in the inspected application. All seven contact categories use the existing repository address `hello@zorasafefoundation.org` with distinct subjects. This establishes configured routing, **not verified delivery or monitoring**. No test email was sent. Opening a mailto link cannot confirm delivery and has no server-side success/error state. The public page explains this and minimizes requested data.

**Owner confirmation required:** confirm this mailbox receives messages, identify its provider, appoint one accountable inbox role/person and backup, set a review frequency, and identify editorial/safeguarding escalation contacts. One small team may cover multiple roles; none is assigned by this document. Record personal staffing details in an access-controlled operational system, not this repository.

| Category / public anchor | Configured destination / subject | Responsible role (unassigned) | Proposed internal procedure; owner must confirm |
|---|---|---|---|
| General `/contact#general` | Existing address / General Foundation inquiry | Inbox coordinator | Triage organizational questions; route only to an authorized responder. |
| Community `/contact#training` | Existing address / Community training inquiry | Program development lead | Discuss audience and feasibility; no booking or capacity commitment without confirmation. |
| School/parent `/contact#schools-families` | Existing address / School and parent education inquiry | Education lead with safeguarding support | Discuss learning goals without child identities; agree safeguarding responsibilities before any proposed pilot. |
| Partnerships `/contact#partnerships` | Existing address / Foundation partnership inquiry | Authorized organizational representative | Verify scope/authority before naming a relationship publicly. |
| Research `/contact#research` | Existing address / Research collaboration inquiry | Research lead | Route proposals; do not accept personal research data or promise publication. |
| Support `/contact#support` and `/support` | Existing address / Supporting the Foundation | Owner-authorized support representative | Discuss possible support only; do not request payment details or promise tax treatment. |
| Corrections `/contact#corrections` and `/editorial-standards` | Existing address / Editorial correction | Authorized editorial lead | Assess source/page claim; involve child-safety or fraud specialist where relevant, approve correction and maintain revision record. |
| Sensitive safety message (no intake CTA) | Same inbox only if unsolicited | Designated safeguarding/privacy escalation role | Follow an approved safeguarding/privacy procedure; avoid circulating images, credentials or incident evidence. Owner/specialist must define access, preservation/deletion and reporting obligations. No automatic forwarding or unverified confidentiality promise. |

The public contact page already redirects urgent financial problems to the bank/payment provider and after-a-scam guidance, suspected child sexual exploitation to NCMEC CyberTipline, and immediate physical danger to local emergency services. These referrals remain subject to C1–C6/F1–F5 specialist review. Internal handling details are not rendered by the application.

**Delivery evidence needed:** owner-authorized end-to-end test from an independent sender, confirmed arrival (including category subject), reply path, primary/backup access and spam handling. Supply only the result, time and responsible role; no message content or personal contact details need enter this repository. On 2026-10-09 the MX query returned NOERROR with zero answers. This requires operational investigation; implicit address-record delivery has not been tested. Public DNS alone cannot establish that the mailbox exists. Until confirmed, inquiry operational readiness remains a launch blocker.
