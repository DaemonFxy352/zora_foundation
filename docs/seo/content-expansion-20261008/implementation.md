# Education and community content expansion — 2026-10-08

## Repository and baseline

Active repository: `/Users/catkarow/Development/zora_foundation`, origin
`https://github.com/DaemonFxy352/zora_foundation`. The Windows path in the request
is not present in this environment. Clean starting HEAD:
`cd4108085f127a13a36524a8f811686d51375767` on
`seo/foundation-phase2-authority-20261007`.

Creating `feat/foundation-family-education-20261008` failed with
`fatal: cannot lock ref 'refs/heads/feat/foundation-family-education-20261008': unable to create directory for .git/refs/heads/feat/foundation-family-education-20261008`.
Work continued on the existing feature branch. No permission changes, resets,
merges, pushes, infrastructure changes, or deployments were performed.

## Findings and implementation

The baseline already had 21 prerendered pages, ten substantial guides, canonical
and social metadata, sitemap/robots, publication release gates, source citations,
print styles, and SEO regression tests. Rebuilding these would add duplication.
No keyword-research files were found; this pass's intent map is qualitative, not
search-volume or difficulty research.

The important content gap was child/teen/parent-specific guidance. Five new
resources use the existing data/template system:

| Route under /education/ | Distinct purpose |
| --- | --- |
| internet-safety-parents | Family routines, settings, conversations, and calm response |
| online-safety-kids | Adult-supported, adaptable practice activities |
| teen-online-safety | Privacy, account pressure, boundaries, and support |
| gaming-scams | Reward/account scams, purchases, contact, and reporting |
| online-safety-older-adults | Everyday confidence, device help, banking, and autonomy |

Existing account-safety and suspicious-message resources now include recovery
planning, text-message context, family practice, verified sources, and links to
relevant new resources. Existing AI/voice/deepfake, family emergency, verification,
phone/bank impersonation, and after-scam resources retain their canonical URLs.
No overlapping replacement pages were created.

The education hub adds crawlable starting links for families and older adults,
plus institutional and research pathways. Existing native-select filtering gains
children/teen audiences and excludes unavailable formats. The stable family
category ID is retained. Libraries/senior centers remain within the existing
community category rather than becoming overlapping taxonomies.

The programs page expands five development pathways: older-adult workshops,
parent sessions, school/youth education, library/community learning, and
train-the-trainer. Each identifies audience, intended learning objective,
possible format, accessibility, an existing guide, and a working contact link.
There are no dates, registration, delivery claims, certifications, or invented
outcomes. Four official program areas remain unchanged.

## Technical and entity changes

- Added one WebSite entity referencing the existing Organization. No fake
  SearchAction, Event, NGO legal status, author, or research claim.
- Root metadata now reuses the canonical origin/social asset utility.
- New resources inherit LearningResource, breadcrumbs, distinct page metadata,
  canonical URLs, social image, automatic sitemap membership, and print support.
- Source-check dates are separate from named review/approval. New guides have
  update dates but no invented first-publication date before release.
- Resource-specific help links replace automatic adult fraud reporting on family
  guides. Child exploitation reporting directs to NCMEC, not Foundation email.
- No additional runtime dependencies, images, fonts, or client content payloads.
  The browser still receives summary records, not full guide bodies.
- Existing homepage design, Header/Footer, icons, social asset, robots, and
  redirects were preserved. No evidence justified redirect or legal-status changes.

## Source verification

Primary source pages read on 2026-10-08:

- FTC: [Kids and video games](https://consumer.ftc.gov/articles/kids-video-games)
- FTC: [Children's privacy](https://consumer.ftc.gov/articles/protecting-your-childs-privacy-online)
- FTC: [Phishing](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams)
- FTC: [Account recovery](https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account)
- FTC: [After a scam](https://consumer.ftc.gov/articles/what-do-if-you-were-scammed)
- FTC: [Tech support scams](https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams)
- NCMEC: [Tween tips](https://www.missingkids.org/blog/2019/post-update/your-netsmartz-tween-tips)
- NCMEC: [Gaming](https://www.missingkids.org/netsmartz/topics/gaming)
- NCMEC: [Sextortion](https://www.missingkids.org/netsmartz/topics/sextortion)
- NCMEC: [Take It Down](https://takeitdown.ncmec.org/)
- NCMEC: [CyberTipline](https://www.missingkids.org/gethelpnow/cybertipline)

Use the current FTC `kids-video-games` URL rather than its redirecting alias.
Two guessed FTC article paths returned 404 and were not used. No statistics or
endorsements were inferred. Activities are Foundation educational examples, not
research-derived effectiveness claims. Citation presence does not establish
expert review.

## Editorial follow-up

A named Foundation editor and child-safety specialist should review age suitability,
reporting language, and facilitation before release. None is invented or implied
by a source-check date. Sensitive guidance is non-graphic, avoids blame, and never
instructs downloading/forwarding intimate images. Take It Down's scope and limits
are stated. A dedicated sextortion guide is proposed, not implemented; specialist
review should shape it. Also proposed: romance/investment fraud and an educator
lesson guide. No proposed route is in public navigation or the sitemap.

Set first-publication dates at actual release. Review existing program status with
the organization before offering any bookings. Current contact links express
interest, not registration or availability.

## Validation

- Production build, ESLint, TypeScript, content/schema tests: passed.
- Generated HTML: 26 pages, one H1/landmark, heading hierarchy, alt text,
  ARIA references, canonicals/social tags, local links/anchors/assets: passed.
- SEO: unique titles/descriptions/canonicals, WebSite/Organization/LearningResource,
  breadcrumbs, source/date visibility, 24 sitemap entries: passed.
- Real Next production request handler: all 26 pages, sitemap/robots/social image,
  unknown/draft 404s, query canonical and trailing-slash redirect: passed on Node 24.
- Initial route run under shell-default Node 20 exited 13 at the static image.
  Existing package engines require Node 22+. Retesting with available Node 24.5
  completed without changing or weakening the test.
- Browser launch attempted: Chrome terminated with SIGABRT / kill EPERM. No
  interactive, visual, overflow, axe, print-preview, or Core Web Vitals result is
  claimed. Existing responsive/print CSS is reused; manual QA remains necessary.
- Intent mapping verifies implemented pages exist and proposed pages stay absent.
- No external source HTTP monitoring service was added; source checks above were
  live reads, while automated tests validate URL and related-link integrity.

## Next work

1. Complete named editorial and child-safety review and browser/print QA.
2. Publish the first approved real research paper through the existing HTML/PDF system.
3. Create reviewed classroom/facilitator lessons and accessible printable handouts.
4. Develop dedicated sextortion-response guidance with appropriate specialist review.
5. Add romance/investment fraud guidance without duplicating general scam pages.
6. Confirm workshop capacity and safeguarding responsibilities before scheduling.
7. Add verified contributor profiles and establish periodic source review ownership.
