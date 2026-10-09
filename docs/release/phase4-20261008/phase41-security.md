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
