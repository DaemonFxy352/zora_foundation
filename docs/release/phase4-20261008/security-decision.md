# S1 — One security disposition for five HIGH development entries

**Pending.** The owner appoints an authorized security decision maker. Five package findings are one advisory chain; record one disposition that explicitly covers all five, not five independent acceptances. Fresh Phase 4.5 [full audit](phase45-audit.json) reports five HIGH entries; [production-only audit](phase45-audit-production.json) reports zero. No dependency change was made.

| Dependency | Actual exposure | Remediation reported / recommended action | Consequence of deferral |
| --- | --- | --- | --- |
| `braces@3.0.3` | Underlying nested-pattern stack-exhaustion DoS; development dependency, not in audited production runtime | Compatible patched resolution when available; current audit does not offer a compatible fix. Track upstream and validate any proposed resolution. | Vulnerable parser remains installed in development/CI. |
| `micromatch@4.0.8` | Inherited HIGH; consumes braces during pattern matching | Update the compatible matching/parser chain together; verify lint/glob behavior. | Retains path to the same parser failure. |
| `fast-glob@3.3.1` | Inherited HIGH; used by lint root discovery | Compatible upstream chain update with directory-matching validation. | Tooling consuming malicious patterns can fail. |
| `@next/eslint-plugin-next@16.4.0` | Inherited HIGH; configured `settings.next.rootDir` patterns can reach glob matching. Current repository omits this option and defaults to cwd. | Compatible Next tooling fix; preserve lint coverage and test behavior. | Current inspected call site has no untrusted pattern, but installed vulnerability remains and later configuration can expose it. |
| `eslint-config-next@16.4.0` | Direct dev dependency introduces the chain; installed/loaded by CI lint, no public-request path identified | npm proposes `14.2.35`, an incompatible major downgrade for Next 16. **Do not apply automatically.** Prefer a compatible validated fix. | CI/developer availability risk remains unresolved; release gate remains open without explicit disposition. |

The current issue is CI/developer tooling availability, not an identified public-page exploit. CI installs development packages even though production-only audit excludes them. Read-only workflow permissions and the timeout limit impact but do not fix the parser. See [installed-code analysis and advisory](phase41-security.md); no claim of complete security certification is made.

**Choose one:**

- **A — remediation-first:** Keep production NO-GO until a compatible fix is identified and validated. Do not approve the major downgrade as a shortcut.
- **B — explicit temporary acceptance:** Accept this development/CI availability exposure for a stated period, with reviewed configuration/glob inputs, existing minimal CI permissions/timeouts, upstream tracking and a named owner. Specify an expiry date and issue; reassess on dependency/config changes. This accepts risk, not remediation.

**Recommendation:** Keep S1 pending until the security owner chooses. Prefer A when a compatible validated fix is available. If releasing before that, only an authorized, time-bounded B can close this disposition; no acceptance is inferred from zero runtime audit findings.

**Required response:** A/B: __________; authorized name/date: __________; rationale and all-five scope: __________; tracking issue and controls: __________; expiry/remediation deadline: __________.

If deferred without a decision, production remains NO-GO. Refresh audits before the actual release because available fixes can change. Any dependency change needs install, lint/build and relevant browser validation. S1 does not waive editorial or human QA gates.
