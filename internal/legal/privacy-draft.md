# Foundation website privacy notice — unpublished review draft

PHASE46_UNAPPROVED_POLICY. Not approved, legally reviewed, routed, or included in the sitemap. This repository is not confidential storage. Bracketed fields must be resolved before any publication; this document is not a statement of current unverified practices.

## Proposed notice text

This notice concerns the ZoraSafe Foundation website at www.zorasafefoundation.org. It does not describe the commercial ZoraSafe app.

**Responsible organization:** [Confirm legal entity name, jurisdiction, appropriate public contact and privacy responsibility.]

**Using the website:** The website provides educational pages and local resource search/filtering. Its application code does not create user accounts, process payments, submit contact forms, persist search terms, or include analytics scripts. Search terms and filter selections are processed temporarily in browser memory; they are not added to the URL or sent to a search service. Fonts and images are served with the website. Vercel hosts the website and processes requests to deliver pages. [Confirm actual hosting/security logs, request/device information, cookies, authorized access, retention, processing locations and contractual service relationships. Do not turn this into a blanket “no data collected” claim.]

**Contacting us:** Contact links open your email application; they do not send a message automatically. If you send an email, your email service and the receiving mailbox handle your address, message and attachments. [Confirm mailbox provider, authorized recipients, purpose of use, retention/deletion, backups, sharing and privacy contact.] Please include only information needed for your inquiry. Do not send passwords, one-time codes, full financial details, identity documents, intimate images or private incident evidence. The Foundation inbox is not an emergency, account-recovery or exploitation-reporting service.

**External links:** Educational sources and reporting services operate their own websites. Review their notices when you use those services. [Confirm any other integration or data transfer before publication.]

**Printing resources:** Public guides are HTML pages. The print control opens your browser's print dialog, which can print or save a PDF using your device's facilities. This website does not upload a generated PDF or offer a separate public download service. [Confirm any permissions for distributing printed or saved copies in the terms.]

Your browser may independently remember or restore control values or keep saved files according to its settings. The website does not control that browser behavior.

**Requests and concerns:** [Confirm an operational contact and process for privacy questions and applicable rights, identity verification proportionate to the request, and handling accidentally received sensitive information or messages from children. Do not promise rights, deadlines or deletion practices that have not been established.]

**Changes:** [Insert approved effective date and owner-approved process for material notice changes.]

## Approval needed

Owner supplies operational facts; qualified legal/privacy reviewer determines required disclosures and approves final language for the Foundation website. No retention period, consent basis, tax/legal status, collection exemption or compliance conclusion is inferred here. Public inquiry collection must not be accepted for release until adequate disclosures and a responsible process are approved.

## Technical review notes — not proposed public notice text

Phase 4.7, 2026-10-09: Vercel project metadata contains Web Analytics and Speed Insights identifiers; Speed Insights reports `hasData: false`. No analytics SDK or instrumentation exists in this candidate's application source. A read-only production `/contact` response contained only Next.js script sources and no `Set-Cookie`; a fresh Chromium load also observed only same-origin GETs, no tracking requests, zero cookies and empty local/session storage. These observations do not establish historical or infrastructure-wide tracking behavior. Resolve the intended analytics settings and actual log handling before publication; do not describe the Vercel services as disabled solely from source inspection. Project environment-variable inventory is empty; the corrected integration query and legacy log-drain inventory returned no entries. Those API inventories do not establish all downstream processing or retention.

The public mailbox is configured in links but delivery and monitoring are unverified. Both authoritative DNS servers returned no MX and no apex SPF TXT record; DMARC exists. No receiving provider, authorized sender or mailbox access is available for an end-to-end test. No test message was sent. Do not publish an operational privacy-request channel or response/deletion promise until receipt, access and procedures are verified. See the [operational verification](../../docs/release/phase4-20261008/phase47-operational-verification.md) for evidence and owner actions.
