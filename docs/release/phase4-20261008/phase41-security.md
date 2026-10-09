# Phase 4.1 dependency disposition — 2026-10-08

Fresh Node 24 npm audits: [full audit](phase41-audit.json), [production-only audit](phase41-audit-production.json). Production: **zero findings**. Development: **five high entries**, representing one underlying advisory and four dependency-chain effects.

| Installed package | Classification | Exposure |
| --- | --- | --- |
| `braces@3.0.3` | Underlying high-severity advisory | Recursive parsing/compilation of malicious deeply nested brace patterns can terminate the tooling process. |
| `micromatch@4.0.8` | Transitive affected consumer | Uses braces for pattern matching. |
| `fast-glob@3.3.1` | Transitive affected consumer | Uses micromatch. |
| `@next/eslint-plugin-next@16.4.0` | Transitive affected development tool | Uses fast-glob. |
| `eslint-config-next@16.4.0` | Direct development dependency; inherited finding | Introduces the affected ESLint plugin chain. |

[GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm), checked 2026-10-08, lists versions through 3.0.3 as affected and no patched version. The fresh npm audit identifies CWE-674 and high severity. This is an availability issue, not evidence of data theft or code execution.

Repository-specific assessment: this chain is used for lint tooling, not a production request handler. No route accepting user-provided glob patterns was identified. Malicious repository/configuration patterns could still disrupt development or CI. Read-only GitHub workflow permissions and the 20-minute job timeout limit some consequences, but do not fix the defect. Zero production audit findings does not mean the whole application is certified secure.

**Disposition: unresolved; owner/security acceptance required before release**, or adopt and validate a compatible upstream fix when available. Do not lower the recorded severity merely because this is a development dependency. npm proposes `eslint-config-next@14.2.35`, a major downgrade from the Next 16 tooling; it was not applied. No dependency or lockfile change, forced audit fix, or unvalidated override was made.

Draft isolation separately passed `verify:routes` and `verify:release`: seven handouts and three workshop drafts are absent from served routes, navigation, sitemap, and scanned public build assets. This protects website exposure only; the GitHub repository itself is public.

## Phase 4.2 recheck

Fresh [full](phase42-audit.json) and [production-only](phase42-audit-production.json) audits reconfirm five high development entries and zero production entries. Package versions and the proposed incompatible downgrade are unchanged. The vulnerable pattern handling is reachable through lint tooling when supplied malicious patterns; no production-request path into this chain was found. Retain the finding, constrain tooling input to reviewed repository configuration, and prefer a compatible patched upstream release once available, followed by lint/build/browser regression checks. A documented security-owner acceptance is required if releasing before remediation. No acceptance is asserted here.

Installed-code reachability check: `@next/eslint-plugin-next/dist/utils/get-root-dirs.js` passes configured `settings.next.rootDir` strings to `fast-glob.globSync`. This repository does not set that option; the helper defaults to `context.cwd`. Thus this inspected call site has no attacker-supplied glob in the current configuration. The vulnerable packages remain installed for development, so retain the audit finding and review future configuration changes rather than claiming the package is fixed.

## Phase 4.3 owner disposition worksheet

**All five entries remain HIGH and unresolved.** These are five affected packages in one advisory chain, not five independent runtime exploits. Fresh Phase 4.3 [full audit](phase43-audit.json) and [production-only audit](phase43-audit-production.json) reconfirm five high development entries and zero production entries; the installed-code assessment above still applies; no major upgrade, downgrade or acceptance is authorized by this worksheet.

| Affected dependency | Production runtime | CI/build exposure | Potential remediation and compatibility risk | Recommended disposition |
| --- | --- | --- | --- | --- |
| `braces@3.0.3` — HIGH | Not in the audited production dependency tree | Nested untrusted glob patterns can exhaust stack during development tooling | Prefer a patched compatible release when available; no patch was listed in the recorded audit. Override only after validating callers and pattern behavior. | Keep open; security owner may explicitly accept bounded tooling exposure with review date, or require remediation. |
| `micromatch@4.0.8` — HIGH, inherited | Development only | Consumes braces during pattern matching | Compatible micromatch/braces resolution, validated against lint/glob behavior; a version change alone does not prove the advisory is removed. | Same underlying issue; track with braces, retain package entry. |
| `fast-glob@3.3.1` — HIGH, inherited | Development only | Supplies matching in lint root discovery | Compatible upstream chain update; validate directory matching and lint coverage. | Keep open with reviewed configuration mitigation. |
| `@next/eslint-plugin-next@16.4.0` — HIGH, inherited | Development only | Root-directory glob call reachable when `settings.next.rootDir` supplies patterns; current config uses cwd | Compatible Next tooling update; regression-test all lint rules and source coverage. | Retain finding; do not claim the default configuration fixes the installed dependency. |
| `eslint-config-next@16.4.0` — HIGH, inherited | Direct dev dependency, excluded from production-only audit | Installed during CI; lint loads its plugin chain. No public request path identified. | Audit proposes 14.2.35, an incompatible major downgrade for Next 16; do not apply automatically. Prefer compatible maintained fix. | Owner/security decision required before release. |

CI installs development dependencies, so production-only audit exclusion is not an exemption. The identified path concerns lint/configuration inputs; ordinary public page requests and the current production runtime do not invoke this chain. Other consumers and future configuration changes must be reassessed. Read-only CI permissions and a job timeout reduce impact but are not remediation.

Recommended temporary controls if the security owner chooses acceptance: restrict configuration/glob changes to reviewed contributors; do not introduce untrusted patterns; preserve the job timeout and minimal permissions; track the upstream advisory; set an expiry/review date and require renewed disposition when configuration or dependency versions change. Run a fresh full and production-only audit before the actual release because patch availability can change. Validate any later remediation with install, lint, build and relevant browser checks.

**Decision:** pending (remediate / time-bounded acceptance / reject release): __________
**Authorized security owner / date:** __________
**Scope and rationale, including CI exposure:** __________
**Mitigations / tracking issue:** __________
**Acceptance expiry or remediation deadline:** __________
**Verification evidence / approved dependency change:** __________
