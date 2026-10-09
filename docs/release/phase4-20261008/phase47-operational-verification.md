# Phase 4.7 — operational verification and remaining release blockers

Checked 2026-10-09 against local baseline `7e6bd709ac2877fa0e1b27b519a5beb99b965fe1`, branch `seo/foundation-phase2-authority-20261007`. This report concerns technical operation and missing organizational facts; it grants no editorial, legal or release approval. No push, merge, deployment, DNS/provider change or email was performed.

## Contact delivery: not established

There is **no contact form**. `app/contact/page.tsx` contains seven `mailto:` categories, all addressed to `hello@zorasafefoundation.org`; subjects distinguish general, partnership, community training, school/family education, support, corrections and research inquiries. Privacy, terms, accessibility, support and footer email links use the same address. Subject lines do not implement routing to staff. No category has a verified monitored destination.

| Component | Verified result |
| --- | --- |
| Sending address/provider | None configured by the application. A visitor's mail client/account supplies the sender and sending service. Foundation outbound/reply provider is unknown. |
| Receiving address/provider | Address is configured in source; mailbox existence, receiving provider, forwarding and staff access are unverified. DNS hosting is not evidence of a mailbox provider. |
| MX | Both authoritative servers, `ns05.domaincontrol.com` and `ns06.domaincontrol.com`, return authoritative NOERROR with zero MX answers. |
| SPF | Both return zero apex TXT answers: no SPF policy at `zorasafefoundation.org`. Other sending subdomains cannot be assessed without knowing the provider/envelope sender. |
| DMARC | Both return `v=DMARC1; p=quarantine; adkim=r; aspf=r; rua=mailto:dmarc_rua@onsecureserver.net;`. This is a reporting/policy record, not delivery or mailbox evidence; report receipt is unverified. |
| DKIM | `default`, `google`, `selector1`, `selector2`, `s1`, `s2`, `k1` selectors return NXDOMAIN on both servers. This is not an exhaustive DKIM audit: [DKIM selectors](https://www.rfc-editor.org/rfc/rfc6376#section-3.1) cannot be inferred reliably. Need provider-issued selector and a signed reply to verify signing/alignment. |
| Implicit MX fallback | Apex A is `216.150.1.1`, no AAAA answer. No-MX SMTP fallback is specified by [RFC 5321 §5.1](https://www.rfc-editor.org/rfc/rfc5321#section-5.1); an A record does not establish an SMTP receiver. No SMTP acceptance or delivery is claimed, and no SMTP recipient probe was sent. |
| Environment | No mail credentials or variables referenced. Vercel project environment inventory returned zero entries, without decrypting values. `VERCEL_ENV` is used only for preview indexing in layout/robots; no application service secret is required. `CI` affects tests. |
| Backend/persistence | No Route Handler, Server Action, database, queue, email SDK or submission fetch. Email composition and delivery occur outside the website. No application message retention or deletion job exists. |
| Errors/retries | No application submit, success, bounce, retry or delivery-status state. Mail-client setup, SMTP retries and bounces are outside website control. An unconfigured mail client may fail to open; the address can be copied. |
| Abuse controls | No exposed submission endpoint to rate-limit or CAPTCHA. Public address remains harvestable. No application spam filter, attachment scan, quarantine or mailbox access policy is established. DMARC does not prove inbox anti-spam protection. |

[Timestamped authoritative DNS evidence](phase47-dns.json); [hosting/environment evidence](phase47-infrastructure.json). No authorized sender account or verified test mailbox access was available. A safe end-to-end test therefore could not be completed. Do not substitute a guessed destination or an SMTP acceptance response for confirmed receipt.

**Implemented:** the contact page now visibly states “Email delivery and inbox monitoring have not yet been verified. Please do not rely on this address for time-sensitive requests.” Existing text accurately says links neither send nor save a message. No false success state exists. The notice is local only; production is an older commit.

**Concrete completion test after mail setup is authorized:** use an owner-controlled sending account and the confirmed Foundation mailbox; send a non-sensitive message with a unique test identifier and each of the seven category subjects. Confirm actual arrival (including junk/quarantine), subject preservation, primary/backup access and reply delivery to that same controlled account. Inspect SPF/DKIM/DMARC results on the reply. Record only UTC times, category, success/failure and responsible role; keep message headers and personal staffing details in restricted organizational records. Provider configuration and DNS changes require separate authorization.

## Organizational identity

Repository evidence is limited to the public operating name **ZoraSafe Foundation**, its domain, mission and configured email. `lib/structured-data.ts` deliberately emits generic Organization schema, without legalName, address, nonprofitStatus or leadership. `data/contributors.ts` is empty; `/leadership` truthfully says details are unpublished. README documents identity-asset approval, not legal formation. Earlier source audits explicitly record the missing legal facts. No formation certificate, charter/bylaws, registration extract, tax determination, Foundation appointment record or approved biography was located in tracked repository material.

| Fact | Status / evidence needed |
| --- | --- |
| Legal organization name | Unknown; exact responsible publishing entity and authoritative formation/registration record needed. |
| Operating name | ZoraSafe Foundation is evidenced by README, pages, metadata and identity records. Legal authority to use that name is not independently established. |
| Organization type / jurisdiction | Unknown; obtain legal form and formation/registration jurisdiction. “Foundation” does not establish nonprofit incorporation. |
| Tax-exempt status | No evidence. Do not claim exemption or deductibility. A determination/registration record is needed only if such a claim is proposed. |
| Leadership and governance | No verified Foundation names or assignments. Obtain Foundation-specific appointment/authorization evidence and exact public titles. |
| Contact address | Domain and configured email only; email operation unverified. No verified physical/postal address. Obtain appropriate public organizational/privacy contact address. |
| Public biographies | None supplied or approved. Obtain exact approved text and publication authorization; portraits are optional. |

No commercial ZoraSafe Inc. leadership, address, governance, tax status or biography is attributed to the Foundation.

## Privacy and terms: still unpublished and not ready for approval

[Privacy draft](../../../internal/legal/privacy-draft.md) and [terms draft](../../../internal/legal/terms-draft.md) now describe actual browser-memory search, Vercel hosting, browser print/save-as-PDF behavior, lack of public file downloads and unverified email operation. The privacy draft distinguishes application storage from browser-native form restoration observed in Firefox. Technical review notes are explicitly separate from proposed public notice text. No effective date or approval is asserted.

| Data flow | Implementation and policy consequence |
| --- | --- |
| Contact | Site collects no form fields. A sent email may contain sender identity, message and attachments handled by the sender/receiver providers. Mailbox use, access, retention, forwarding, deletion/backups and accidental sensitive/child-message handling remain unknown. |
| Search/filter | React state; no query URL, remote search request, cookie, localStorage or sessionStorage use. A browser may independently restore inputs. Avoid a guarantee that all browser data disappears on reload. |
| Analytics/tracking | No analytics SDK or tracking script in source. Vercel project has Web Analytics and Speed Insights IDs; `hasData: false` is present for Speed Insights only. IDs alone prove neither active collection nor disabled services. A fresh production contact-page browser load observed same-origin GETs, Next.js assets/prefetches, zero cookies/storage and no analytics requests. This is a bounded observation, not a historical or infrastructure-wide guarantee. |
| Hosting/processors | Vercel confirmed by project API and production headers. Project integration inventory is empty after correcting required `view=project`; legacy log-drain API also returns zero. This does not inventory every account-level service, newer drain type, contractual subprocessor or internal security/log system. Email provider and actual processor agreements/locations remain unknown. |
| Cookies/storage | None set in the observed fresh production visit or local search flow. No app cookie/storage APIs. Infrastructure security features, other sessions and future settings remain outside that observation. |
| Retention | No app database or deletion job. Vercel request/log retention, access controls, mailbox deletion/backups and onward disclosures are not established by project metadata. Do not insert a guessed duration or “no data collected” statement. |
| Integrations | Ordinary external links and mailto; local fonts and identity assets. No accounts, payment service, embedded widget, CRM or research-upload flow. External sites/mail clients apply their own practices. |
| Sensitive data | Current copy discourages passwords, codes, account numbers, IDs, intimate images, child identities and private incident evidence. No technical filtering for unsolicited email is available. An approved escalation/access/preservation/deletion process is still needed. |
| Resources | Public HTML guides print via browser; no server-generated/downloadable PDFs, public workshop materials or reports. Internal print artifacts are QA files. Printing functionality does not grant reuse rights. |

Evidence: source inspection, [production network observation](phase47-production-observation.json), local browser tests and [project metadata](phase47-infrastructure.json). Vercel's [Analytics integration guidance](https://vercel.com/docs/analytics/privacy-policy) distinguishes enabling/configuring the service from integrating its script. Its [logs documentation](https://vercel.com/docs/logs) distinguishes runtime/activity/audit logs and external drains; absence of application instrumentation does not establish infrastructure retention.

Owner supplies actual practices and intended services; counsel/privacy reviewer determines applicable disclosures, rights and legal language. Legal entity, public contact, reuse permissions, response/deletion process, applicable terms, effective date and final notice approval remain unresolved. No new jurisdiction, liability waiver, exemption, consent or legal-compliance assertion was added.

## Asset rights and publication isolation

**Local candidate: PASS.** Five held assets remain under `internal/held-assets`; both policies remain under `internal/legal`. Build scanning rejects draft markers and held filenames and now also rejects byte-identical held images under renamed public paths. Route/browser checks verify real 404 responses for old image paths, old social exports, internal policy paths and `/privacy`/`/terms`. Handouts, curricula and unpublished research remain isolated. No held assets were restored.

Retained Guide Point, Brand component, approved `social1` preview, icon/favicon package, Inter font and OFL notice are byte-identical to baseline. The [rights inventory](asset-rights.md), README approval record and social/favicon history remain the available authorization evidence. Inter attribution/license remains bundled. No new ownership certificate, attribution exemption or wider reuse license is inferred. Original identity-board/contract evidence is not in the repository. Files held in Git are not confidential or erased from history.

**Current production: FAIL for held asset isolation.** All three old photo URLs and both old social-export URLs returned HTTP 200 with image content types on 2026-10-09. Draft policy routes returned 404. [Exact production HEAD results](phase47-production-isolation.json). Production remains on the older promoted `bf0d45a` commit, before asset isolation. Local checks do not remove already deployed assets. A separately authorized production remediation is required; no production change was made here.

## Production promotion: stronger session attribution, human authorization unresolved

Read-only API checks confirm production target and www alias still point to `dpl_GTQR1z5gXKugwJLAFfX5pKiDFzSq`, with `source: redeploy`, `meta.action: promote`, original preview `dpl_BnztKg1VmJjTTsMUkYr39Ss9oCGX` and commit `bf0d45aea4aced34fa6037697051f58b537076a7`. Production creation was 2026-10-09 05:51:59.043 UTC; alias assignment followed at 05:52:13.507 UTC. The `main` production-branch setting does not prevent explicit promotion of a feature-branch deployment.

The event `uev_DrNitpQsYop0rb7dU4wqwD94` contains a token reference and request reference in addition to the `zorasafe` account. A correctly scoped token-metadata GET succeeded: the associated token is named **“Website, Login with Google (Chrome on macOS)”**, with origin `google`. The principal matches the account user. This supports attribution to a credential associated with that website login session; it does **not** prove a particular person clicked the UI, rule out reuse of that credential, or establish authorization. Token values, IDs, prefixes/suffixes and personal account details were not saved or printed. The request reference remains retrievable by event ID for a private owner/support investigation. [Sanitized attribution evidence](phase47-attribution.json).

Initial metadata requests with the wrong team scope / missing integration view returned HTTP 400; corrected queries returned 200. Those errors are not evidence of denied access. Current team plan is Pro. Vercel documents detailed [Audit Logs](https://vercel.com/docs/audit-log) as Enterprise/owner-only; accessible activity/session metadata here does not close human/action attribution. No audit export or support message was requested or sent.

Current project has zero deploy hooks, zero Vercel webhooks and no domain branch/custom-environment overrides. The local GitHub workflow has read-only contents permission, a feature-branch push/manual trigger and no deployment/promotion command. Earlier GitHub hook/linked-project inventories are historical, not newly revalidated in this phase. No conclusion that all automation is impossible follows from these checks. Feature pushes remain held until explicitly authorized.

## Exact owner actions

1. **Restore a verifiable inquiry operation:** identify intended receiving/reply provider and mailbox administrator, supply provider-issued MX/SPF/DKIM requirements and authorized controlled test sender/destination access, then authorize any necessary configuration changes. Assign a primary/backup, review cadence, seven-category triage, editorial and safeguarding/privacy escalation. Complete the receipt/reply test above; no passwords or private headers in this repository.
2. **Supply the Foundation identity record:** exact legal entity, type/jurisdiction, appropriate public contact address, release-authorized role, Foundation-specific leadership appointments and approved biographies. Supply tax-status evidence only if asking to publish a tax-status claim. Do not substitute ZoraSafe Inc. records without an evidenced legal relationship.
3. **Complete policy facts and approval:** mailbox access/retention/deletion/backups/sharing; actual Vercel logging/security/analytics settings and retention; responsible privacy role and sensitive/child-message procedure; content reuse permissions. Have the appropriate legal/privacy reviewer approve the two corrected drafts and effective date in a separate publication change.
4. **Resolve the production event and live exposure:** have the account owner reconcile the recorded Google-login session and event time with authorized activity, using the event/request reference with Vercel support privately if needed. Decide and separately authorize removal of the five still-public held assets or another reviewed production remedy. This task authorizes neither that change nor a feature push.

Remaining release blockers: unverified mailbox/delivery/ownership; unevidenced legal identity/leadership; unapproved policies/practices; live held-asset exposure; unresolved human authorization for promotion; existing 27 editorial approvals, C1–C6/F1–F5 specialist decisions, S1 security disposition and outstanding manual assistive-technology/native-zoom/print acceptance. Existing security findings are inherited, not a new dependency audit. No general editorial package or new educational content was created; only the contact record's hash was refreshed, leaving decisions unchanged.

See [validation results](phase47-validation.json) for actual commands, failures and targeted reruns. Technical checks cannot grant organizational or production approval.
