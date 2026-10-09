# Phase 5.2 — verification and release decisions

**Local technical checks pass. Hosted candidate QA remains blocked; production release is not authorized.** No application defect was found requiring a code change. This phase makes search intent and measurable observations explicit for each existing AI evaluation question and records fresh verification evidence. No new pages, account/configuration changes, push, merge or deployment.

## Current state

Read-only observations on 2026-10-09 are preserved in [verification.json](verification.json).

- Production: `7010fc6379067b11e267f52ea8eb5701ae81095a`, READY deployment `dpl_7zndovSzTWZ7u8PVCrTW2CyZozeQ`, serving both Foundation domains. Remote `main` matches.
- Candidate at start: `41ae38b2b92735240251b295deacf960f87fd74d`, clean feature branch. Remote feature is `32d3d6e`; five unpushed commits: `c7bb588`, `7e6bd70`, `d5d9704`, `9f63ddb`, `41ae38b`. The documentation commit containing this report adds one more; no application source changes in this phase.
- Local/remote isolated hotfix remains `496174c27024ceae1c195e800d5f7dbb3efc77bb`. No hotfix merge or edit. All five original held image URLs currently return 404 on production; historical deployments/cache exposure is a separate unresolved scope.
- Git integration deploys `main` to production and feature branches to previews. No custom-environment/domain branch overrides, deploy hooks or Vercel/GitHub webhooks found; QA workflow has no deployment command. Authentication remains enabled except custom domains. Manual promotion is still possible and `main` is unprotected: branch configuration alone is not an authorization barrier.

## Search Console and indexability

`public/google36b500dfad230655.html` still exactly matches Google's original download: 50 bytes, SHA-256 `28d66e818535e1f7825b02953456f33d956eea2aea7058cf35ad25f8a45263b5`. Content is `google-site-verification: google36b500dfad230655.html` with no trailing newline. The local production server and live www URL return the unchanged file with HTTP 200. The apex URL returns 308 to the **same verification path on www**, then 200. No authentication or X-Robots-Tag restriction was observed; robots permits the route. The file-delivery requirement is satisfied, but Google account ownership verification cannot be observed here.

Canonical host is **`https://www.zorasafefoundation.org`**. The previously requested apex URL-prefix property is known from task history; actual verified properties in the Google account are **unknown**. An apex URL-prefix does not cover www. Owner: select/verify `https://www.zorasafefoundation.org/`, or select an existing verified Domain property covering both, then confirm its ownership status. Use Google's property-specific verification instructions; provide a new original download only if Google requires a different file. No DNS or account change was performed. [Google property scopes](https://support.google.com/webmasters/answer/34592?hl=en).

`https://www.zorasafefoundation.org/sitemap.xml` returns 200, valid sitemap XML, stable bytes across two reads and 26 unique www URLs. All 26 return 200 with matching normalized canonicals and index/follow; `/accessibility` and `/editorial-standards` intentionally remain public utility pages outside the sitemap allowlist. All 28 candidate HTML pages are reachable from the homepage through initial-HTML links. No orphan was found; editorial approval is not inferred from exposure. Drafts, internal materials and unpublished research remain excluded, with real 404/noindex behavior in local checks and sampled production 404s. `llms.txt` remains local-only (live 404). Production robots advertises the correct sitemap. Preview-mode noindex is checked locally, not claimed from protected hosted responses.

No authorized Search Console integration/export is available; no sitemap was submitted and no indexing/traffic metrics are claimed. Once the matching property is verified, the owner can submit the existing canonical sitemap and provide the performance/indexing exports specified in the [existing retrieval procedure](../phase51-20261009/release-summary.md#search-console-readiness-and-retrieval).

## Hosted preview: exact blockage and shortest procedure

Latest feature preview: **`dpl_24tTyA2yMHxX1ryLdfDMFF1JzDPD`**, commit **`32d3d6e3f0c85c71c179df5bcc63aa4247de9c3a`**, `https://zora-foundation-l4jizuq26-zora-safe.vercel.app`. No deployment matches the current candidate. Homepage, education, programs, research, contact, support, verification file, sitemap, robots and llms requests **all return 302 to Vercel Authentication**. These are not successful page, file or isolation tests. Hosted desktop/mobile, navigation, metadata and search validation remain unperformed.

The existing CLI credential successfully reads deployment/project APIs, but no automation bypass exists in the project response or supplied process environment. No authenticated browser/session or preview-inspection connector is available. Installed `vercel curl` calls a project-settings PATCH to create a bypass when absent; it was not invoked. No secret or cookie was printed or committed.

Owner procedure:

1. Separately authorize pushing the reviewed feature candidate **for Preview only**, after rechecking isolation. Pushing/deploying is explicitly prohibited in this phase, so an exact-candidate preview cannot be created here.
2. Once that deployment is READY, check its commit and open it in a browser logged into the authorized Vercel team. For external human review, open that **Preview deployment → Share → Anyone with the link**, and deliver the deployment-specific link privately to the reviewer; return it to Only people with access after review. Do not share a production deployment or disable project protection. [Vercel's supported share-link procedure](https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protection/sharable-links).
3. For agent browser QA, provide an authorized authenticated testing session. If choosing automation bypass instead, separately authorize/provide that secret through protected environment injection, scoped in the test harness to the exact preview origin. Vercel automation tokens cover **all project deployments**, so they are not deployment-scoped; creating one is an additional owner decision, not something this task silently permits. [Automation bypass scope](https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation).
4. Repeat the ten endpoint checks plus desktop/mobile navigation, resource search, metadata and isolation tests on that exact commit. Keep protection enabled. Only then can hosted technical acceptance be completed.

## Decisions that remain

Use the existing decision records; do not create another 27-page checklist.

| Gate | Specific decision or evidence needed |
| --- | --- |
| Editorial | Authorized reviewers record current approvals or requested corrections for the existing 27 entries; hashes are current, approvals remain absent. |
| Child/teen | Qualified reviewer resolves existing C1–C6 decisions, including safeguarding/escalation language. |
| Fraud/recovery | Qualified reviewer resolves existing F1–F5 decisions and recovery/reporting sequencing. |
| Manual acceptance | Named tester completes existing assistive-technology, native zoom, visual and physical-print acceptance; browser automation does not sign this off. |
| Security S1 | Fresh audit still reports five HIGH development entries (`braces`, `micromatch`, `fast-glob`, Next ESLint plugin/config); production-only audit reports zero. npm suggests an incompatible Next ESLint 14 downgrade, not a compatible fix. Security owner chooses remediation-first or explicit time-limited acceptance covering all five, with owner, controls, issue and expiry in [S1](../../release/phase4-20261008/security-decision.md). No downgrade or risk acceptance was applied. |
| Identity/leadership | Supply Foundation-specific legal entity/type/jurisdiction, public contact address, appointment evidence and approved biographies; do not substitute ZoraSafe Inc. governance. |
| Email | Confirm provider, monitored mailbox owner/backup and triage; authorize any configuration needed and an owner-controlled receipt/reply test. Delivery remains unestablished; no test email or DNS change here. |
| Privacy/terms | Confirm actual processor/logging/mailbox retention and sensitive-message practices; responsible owner/counsel approves policies separately. Drafts stay unpublished. |
| Held assets | Current production original paths are remediated (404); no feature/hotfix mixing. Any historical deployment/cache removal requires separate authorization. |
| Production | Explicit approval of the final reviewed commit and release procedure after hosted QA and all applicable gates. No production authorization exists. |

The [existing owner record](../../release/phase4-20261008/owner-decisions.md), [specialist/manual records](../../release/phase4-20261008/release-checklist.md) and [operational evidence](../../release/phase4-20261008/phase47-operational-verification.md) remain authoritative for unresolved decisions. Operational facts were not reverified through mail/DNS/provider changes in this phase.

## AI baseline and validation

The [existing eight-question protocol](../phase51-20261009/ai-evaluation.json) now specifies search intent, measurable mention-versus-citation observation and publication status for every question. All eight target pages and relevant anchors exist; all target paths are in the live sitemap. Exact questions and repeat procedure are unchanged. Independent answer-engine citations, ranks and referrals remain unmeasured, not zero.

Build, TypeScript, ESLint, SEO, build/link, route, accessibility, content/schema, publication isolation and review-manifest checks pass. The initial route command accidentally ran under default Node 20 and exited 13; rerunning with the required Node 24 passed completely. This was an execution issue, not a hidden application failure. Detailed local results are in [validation.json](validation.json). The editorial gate correctly exits 1: 27 pending public approvals.

**Ready for owner review of the local candidate; not ready for final production approval.** The shortest path is Preview-only authorization plus authenticated access, parallel completion of existing human decisions, exact-commit hosted QA, and then a separate production decision. Search Console ownership and measurement can be completed against the existing production site without deploying the feature release.
