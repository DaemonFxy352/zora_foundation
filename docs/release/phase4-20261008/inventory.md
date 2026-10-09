# Release inventory

Candidate base: `e71efedb428cb257237c3f8e8627dc926145eccb` on `seo/foundation-phase2-authority-20261007`. Comparison baseline: remote main `5ba89820ddcf57351e467223fda43b9a4d4a0c49`. Actual deployed SHA requires owner confirmation.

## Public route changes relative to main

15 prior HTML routes become 28 candidate HTML routes. Twelve education guides and `/editorial-standards` are new. Existing homepage design, icons, social image, payment behavior and domain are retained. The sitemap contains 26 canonical entries; accessibility and editorial policy utility pages are omitted.

| Education URL | Change |
| --- | --- |
| `/education/recognize-a-scam` | modified |
| `/education/verify-before-you-trust` | modified |
| `/education/ai-impersonation` | modified |
| `/education/suspicious-message` | modified |
| `/education/account-safety` | modified |
| `/education/human-targeted-attacks` | new |
| `/education/after-a-scam` | new |
| `/education/qr-link-safety` | new |
| `/education/phone-impersonation` | new |
| `/education/family-emergency-scams` | new |
| `/education/internet-safety-parents` | new |
| `/education/online-safety-kids` | new |
| `/education/teen-online-safety` | new |
| `/education/gaming-scams` | new |
| `/education/online-safety-older-adults` | new |
| `/education/government-impersonation` | new |
| `/education/payment-redirection` | new |

## Existing route and infrastructure changes

- `/education`: 17 guides, expanded audiences, local text search, combined filters and honest format availability. All guide text and links prerender; no faceted query URLs generated.
- `/programs`: development pathways for older adults, families, young people, educators and community partners; inquiry links, no booking claims.
- `/research`: links to educational explainers, publication infrastructure, honest absence of published reports. Empty registry generates no report routes.
- `/about`, `/leadership`, `/partner`, `/contact`, `/support`: institutional navigation/metadata consistency; no invented identities, payment backend or completed programs.
- Shared metadata, organization/site/breadcrumb/resource schema, canonicals, sitemap and preview noindex protections from Phase 1 remain intact.
- Resource authorship supports verified identities only; no profile records or research findings are fabricated.
- `internal/handouts/`: seven retained drafts and review component, no app route, no client imports, no public navigation or download. Three internal curricula remain in repository data/docs only.
- Phase 4 adds browser/CI testing, private-content regression checks, hashed editorial review manifest and explicit release gates. Playwright is development-only.

## Intentional compatibility change

The seven `/education/handouts/[slug]` URLs from the prior local candidate now return real 404s. Those draft URLs must not be redirected to publicly exposed previews. One representative live URL also returns 404. Existing resource pages retain print support. No published resource URL has been renamed or removed.

## Exact file inventory

`changed-files.txt` lists tracked differences against main and new untracked files at preparation time. It is a review snapshot, not a manifest of deployed files. The Phase 4 commit itself is the final authoritative changeset.
