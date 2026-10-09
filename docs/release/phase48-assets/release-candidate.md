# Phase 4.8 — isolated production asset-remediation candidate

**Prepared locally; deployment is NOT authorized. Full Foundation release remains NO-GO.**

Branch: `hotfix/foundation-held-assets-20261009`. Its parent is the verified live source commit `bf0d45aea4aced34fa6037697051f58b537076a7`, not the feature tip. The feature branch remains at `d5d9704c19e9108eb62e118d4f0b0b3a0d809141`; none of its four later commits were merged or cherry-picked. Existing educational pages already present in production remain unchanged; this hotfix does not approve them or introduce the subsequent owner-decision/contact/policy changes.

## Verified production baseline

Read-only Vercel checks on 2026-10-09 show the project target, apex alias and www alias all assigned to `dpl_GTQR1z5gXKugwJLAFfX5pKiDFzSq`, URL `zora-foundation-bxumnupgu-zora-safe.vercel.app`. Its Git source is `bf0d45aea4aced34fa6037697051f58b537076a7`; metadata identifies `source: redeploy`, `action: promote`, original preview `dpl_BnztKg1VmJjTTsMUkYr39Ss9oCGX`. The production source branch recorded by the deployment is the feature branch, although the project production branch is `main`. [Settings evidence](production-settings.json). A final read-only recheck at 16:53:50 UTC confirmed the same source and aliases; see `finalProductionRecheck` in [validation](validation.json).

Phase 4.6/4.7 rights and exposure records were inspected on the feature branch before switching: `d5d9704:docs/release/phase4-20261008/asset-rights.md`, `phase47-production-isolation.json` and `phase47-attribution.json`. Those records are evidence sources, not included feature changes. Live desktop/mobile browser inspection confirms current use, rather than equating direct URL accessibility with display.

## Exact five assets and current references

Public origin for every URL below: **https://www.zorasafefoundation.org**. All five direct URLs returned image responses with HTTP 200 before this local change. Source paths are relative to the repository root.

| Source file | Public URL | Actual production reference/display | Rights gap | Removal effect and verified alternative |
| --- | --- | --- | --- | --- |
| `public/images/hero.webp` | `/images/hero.webp` | `components/HomeImage.tsx` static import, rendered by `Hero.tsx` on `/`. Visibly displayed at desktop/mobile sizes through Next Image. | Recovered design-export photo; no creator/license, subject authorization or actual-activity/illustration classification in the record. | Deleting only the file breaks the static import/build. Remove the photo node/import and adapt the existing hero visual around the approved Guide Point; no replacement photo needed. |
| `public/images/community-workshop.webp` | `/images/community-workshop.webp` | `HomeImage.tsx` import, rendered by `Programs.tsx` on `/#programs`. Visibly displayed; not an image on `/programs`. | Same missing photographic provenance/license/subject and context evidence; export inclusion is not permission. | Remove image wrapper/import and collapse its grid column; retain every program title, description and link. No verified replacement photo available. |
| `public/images/research.webp` | `/images/research.webp` | `HomeImage.tsx` import, rendered by `ResearchImpact.tsx` on `/#research`. Visibly displayed; not an image on `/research`. | Same missing photo rights/subject/context evidence. | Remove photo wrapper/import and bound the existing text column. `/research` is unchanged. No verified replacement photo available. |
| `public/brand/zorasafe-foundation-social.png` | `/brand/zorasafe-foundation-social.png` | No runtime reference found in production source; not displayed in the inspected homepage or current sharing metadata. Direct URL remains accessible. | Earlier unused export; no version-specific publication approval recorded. | Delete the unused public file; no layout effect. Existing approved `social1.png` already serves social metadata and remains unchanged. |
| `public/brand/zorasafe-foundation-social.svg` | `/brand/zorasafe-foundation-social.svg` | No runtime reference found; direct URL only in the inspected current site. Not the current social image. | Same missing approval of this older version. | Delete unused file; no layout effect. Retain existing approved `social1.png`; no new SVG or metadata edit needed. |

The live browser loaded all three photographs after scrolling them into view; natural image widths were nonzero. Static imports also expose three hashed source files:

- `/_next/static/immutable/media/hero.09tkl5hh6fz-_.webp`
- `/_next/static/immutable/media/community-workshop.21k8h395l05_8.webp`
- `/_next/static/immutable/media/research.0o8-f18ax377t.webp`

The inspected `srcset` contains 27 optimized URLs: those three source paths at widths 384, 640, 750, 828, 1080, 1200, 1920, 2048 and 3840, quality 75. [Observed paths, headers and viewport evidence](production-observation.json); [original-file hashes and exact test paths](../../../tests/fixtures/held-assets.json). Other historical links/caches cannot be ruled out by inspecting current pages.

The retained Guide Point implementation, approved `social1` preview, favicon package, font and OFL license are unchanged. README's explicit identity approval and recorded prior asset decisions are the available rights evidence, not a newly invented ownership certificate. No unverified replacement artwork is introduced. Deleted files remain recoverable in the production Git history and in the separate feature branch's held-assets directory; they are not copied into this candidate.

## Exact change boundary

Runtime changes only:

- Delete the five public files above and unused `components/HomeImage.tsx`.
- Edit `components/Hero.tsx`, `components/Programs.tsx`, `components/ResearchImpact.tsx` to remove photo imports/nodes and select the narrow layout classes.
- Add four homepage-specific CSS rules in `app/globals.css`: Guide Point sizing and the two former photo-column layouts.

Supporting changes only: a corrected README asset paragraph; the homepage content hash in the existing editorial manifest (decisions unchanged); `scripts/verify-asset-remediation.mjs`; `tests/browser/asset-remediation.spec.ts`; `tests/fixtures/held-assets.json`; and evidence/runbook files in this directory.

All other application, route, data, metadata, dependency, navigation, contact, workflow and configuration files are unchanged from production. The new script rejects unrelated tracked/untracked changes. Homepage text and all anchor labels/destinations are hashed against live production and match at 1440, 768, 390 and 320 CSS pixels. Removal changes visual presentation only. No policies are added or published; internal workshop/handout isolation remains intact. No DNS/email changes or approval decisions occur.

## Validation and screenshot comparison

[Machine-readable results and artifact hashes](validation.json) record actual outcomes. Node 24.21.0 / Next.js 16.4.0 were used with the unchanged production lockfile.

- `npm run build`, `npm run typecheck`, `npm run lint`: PASS.
- `npm run verify:build`: PASS for 28 public pages, metadata, internal links/anchors, image alt text and ARIA references.
- `npm run verify:routes`: PASS for public routes, metadata assets, missing/draft paths, query canonical and slash redirect.
- `npm run verify:release`: PASS; seven handouts, three workshop drafts and unpublished research remain isolated.
- `node scripts/verify-asset-remediation.mjs`: PASS; 773 public/server/static output files scanned for original-file SHA-256 matches, held filenames/references in HTML/RSC/JS/CSS/JSON/SVG/maps, and policy markers. Source hashes are independently checked against the production commit.
- `npm run verify:review`: PASS after refreshing only the homepage hash; this is not editorial approval.
- Existing browser suite plus hotfix checks: 52 applicable tests passed across the full run and corrected targeted rerun; two expected PDF skips. Initial hotfix assertions were corrected because this Next version returns 404 (not 400) for missing optimizer sources, and Firefox can report 304 on repeated navigation. The final viewport test loads once and resizes. No runtime fix was needed for those test assumptions.
- All 35 observed paths return 404 for GET and HEAD in each browser project's request context; none returns an image. The approved social preview remains 200/image PNG. No page errors, failed asset responses, broken images or horizontal overflow observed on the remediated homepage. Privacy/terms draft URLs remain 404.

Before screenshots were captured from production at 1440/390 pixels; after screenshots cover 1440/768/390/320 in Chromium, mobile Chromium and Firefox. Desktop/mobile before/after screenshots were visually inspected: the hero retains the approved mark, program cards use the vacated photo column, and the research text has no empty image column. Text/links remain identical. Screenshots are local QA artifacts under ignored `test-results/phase48-before/` and `test-results/phase48-asset-rerun/`, not public files or additional copies committed to Git. Automated/visual checks do not grant content or full accessibility approval.

## Deployment isolation and limitations

Verified current controls: `main` production branch; Git-provider deployment creation enabled; no ignored-build command; zero Vercel deploy hooks/webhooks; zero GitHub repository hooks; one accessible linked Vercel project for this repository; no domain branch/custom-environment overrides. The sole GitHub workflow has read-only contents permission, runs on the original feature branch/manual trigger and contains no deploy/promote command. It is unchanged and has no automatic trigger for this hotfix branch. Local Git has no configured hooks path and only sample hooks. No remote branch was created or upstream configured.

**Local-only branch creation/commit cannot trigger Vercel's Git integration. This does not make a future push or promotion inherently safe.** Git-provider deployment creation remains enabled; an authorized push could create a preview, and an authorized account can explicitly promote a non-main deployment. The existing promotion proves that production-branch configuration alone is insufficient. Prior session attribution does not establish human authorization. Push, merge, stage, promotion and cache/settings mutations remain held pending explicit scope-specific authorization. No aliases/settings were modified by this phase.

## Cache and older-deployment concerns

Live direct files advertise `public, max-age=0, must-revalidate`; observed hashed and optimized photo URLs advertise `public,max-age=31536000,immutable`. A new build excludes the files, but that does not erase browser caches, downloaded copies, social crawler caches, historical deployment sources or cached transformations. Vercel documents that [redeploying does not invalidate its image cache](https://vercel.com/docs/image-optimization); ordinary [source-image invalidation](https://vercel.com/docs/cli/cache) can serve stale content while revalidating, so it is not sufficient evidence of immediate removal.

[Read-only cache settings](cache-settings.json) show `skewProtectionMaxAge: 43200` (12 hours) and deployment protection `all_except_custom_domains`. The tested immutable deployment asset URL redirects an anonymous request to Vercel authentication (HTTP 302); it was not anonymously served as an image in that check. Authenticated access and custom-domain version pinning are separate. Vercel's [Skew Protection](https://vercel.com/docs/skew-protection) can continue routing older clients to previous versions. An authorized operator may need to set the fixed deployment as the skew-protection threshold and retire/restrict affected older deployments; this is a separate production setting/retention decision, not part of the source patch.

After an authorized promotion, verify both custom domains and project-domain aliases, all fixture URLs, old version-pinned requests and historical deployment access. Use a fresh browser and GET/HEAD without conditional validators; test relevant image Accept formats too. Cache-busting a different URL alone is insufficient. If cached transformations remain, the approved operator should use source-specific cache deletion rather than stale invalidation, then repeat checks. Never declare live exposure resolved based solely on this local 404 result. Already downloaded/browser-cached images cannot be recalled.

## Exact authorized hotfix procedure — NOT EXECUTED

1. Obtain approval for this asset-only candidate, a named operator and a production window. Separately obtain authority for the required cache deletion/skew-threshold/old-deployment remediation. Re-read current alias/deployment IDs and source commit immediately before work. If production no longer equals `bf0d45a`, stop and rebuild/review the isolated patch against the new live commit. Do not substitute the feature branch or merge it into `main`.
2. Check out the committed `hotfix/foundation-held-assets-20261009` locally. Require a clean working tree and verify its recorded production parent and the file boundary above. Use Node 24, `npm ci`, then `npm run build`, `npm run typecheck`, `npm run lint`, `npm run verify:build`, `npm run verify:routes`, `npm run verify:release`, `node scripts/verify-asset-remediation.mjs`, `npm run verify:review` and `npm run verify:browser`. Do not override the separate full-release NO-GO.
3. Link the local checkout to the **existing** project only: `vercel link --project zora-foundation --scope zora-safe`. Confirm `.vercel/project.json` identifies `prj_lSHh3vDrPHNIMgXYqd2JzOkGsBJ6` / `team_XGmFWQnYvyQBJO6AVyLqHI6J`. No new project, source-public option or environment pull is needed. This procedure does not require any Git push or merge.
4. With staging specifically authorized, run `vercel deploy --prod --skip-domain --force --scope zora-safe` from that exact checkout. `--skip-domain` avoids automatic production-domain assignment; `--force` requests a fresh build. Record the returned deployment ID, source/commit evidence and logs. Verify its staged status and independently verify all production aliases still point to the recorded baseline. [Staged-production CLI workflow](https://vercel.com/docs/cli/deploying-from-cli).
5. Verify the staged build with authorized access: homepage/screenshots, unchanged text/links, approved `social1`, all original/hashed/optimized fixture paths, policy/internal-draft 404s and runtime logs. Preview/staged access authorization is not evidence that production aliases moved. Require asset-only acceptance of this exact deployment before promotion; do not select any deployment from the unreleased feature branch.
6. With promotion explicitly authorized, run `vercel promote <VERIFIED_STAGED_DEPLOYMENT_ID> --scope zora-safe` and `vercel promote status --scope zora-safe`. Confirm apex/www/project-domain targets now reference only the staged candidate. Record operator, UTC time, commit and old/new deployment IDs. No `main` change is necessary for this procedure.
7. Execute only separately approved cache/version cleanup. For the three known optimized source copies, the documented source-specific commands are:

   ```sh
   vercel cache dangerously-delete --srcimg /_next/static/immutable/media/hero.09tkl5hh6fz-_.webp --scope zora-safe
   vercel cache dangerously-delete --srcimg /_next/static/immutable/media/community-workshop.21k8h395l05_8.webp --scope zora-safe
   vercel cache dangerously-delete --srcimg /_next/static/immutable/media/research.0o8-f18ax377t.webp --scope zora-safe
   ```

   Include original `/images/...` source keys if they were also transformed. The two unused exports have no observed transformations. Do not use a revalidation delay or treat `invalidate` as deletion. Use Vercel's fixed-deployment skew threshold and reviewed retention/protection controls if needed to close older-version access; if original/static URLs still serve images after promotion, stop closure and resolve routing/cache persistence with the authorized platform owner. No broad cache purge, deployment deletion or settings change is pre-approved here.
8. Repeat production GET/HEAD checks on all 35 exact URLs, with fresh and old-pinned clients, after any cache/settings action. Originals/hashed sources must return real 404/410; optimizer paths must refuse image delivery (platform may return 400/404), with no image content. Check expected domains, no successful image responses, homepage operation, and approved social preview. Save evidence; only then close live exposure. Full Foundation release restrictions remain unchanged.

## Rollback

Before promotion record baseline `dpl_GTQR1z5gXKugwJLAFfX5pKiDFzSq` and the new staged deployment ID. For a presentation issue, prefer a narrow forward fix that keeps the five assets absent. If an emergency rollback is explicitly authorized, `vercel rollback dpl_GTQR1z5gXKugwJLAFfX5pKiDFzSq --scope zora-safe` restores the known old site **and reintroduces the held images**. That exposure tradeoff requires explicit owner acceptance; it is not a safe default. A changed skew threshold or retired deployment can also affect rollback availability, so agree that plan before cleanup. A local Git revert likewise restores the images and must not be deployed casually. No rollback, purge, deployment retirement, push, merge or promotion was performed here.
