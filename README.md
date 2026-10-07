# ZoraSafe Foundation

The Foundation’s public-interest website: closing the digital safety knowledge gap. Built with Next.js App Router, TypeScript, semantic React components, and plain responsive CSS. Deployment target: Vercel.

## Local development

Use Node.js 22 or later and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. No environment variables or third-party service credentials are required. The generated `package-lock.json` pins dependencies; use `npm ci` for reproducible installs.

## Quality checks and production

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

`npm run typecheck` generates Next.js route/image types before invoking TypeScript, so it also works on a fresh checkout. `npm run build` generates the production Next.js application. `npm start` serves that build locally. Vercel should import `DaemonFxy352/zora_foundation`, use the Next.js preset, repository root, and the standard build command. No custom output directory is needed. Hosting has not been configured or deployed by this implementation.

## Structure

- `app/page.tsx`: homepage section composition.
- `app/layout.tsx`: shared navigation, footer, local Inter font, and metadata.
- `app/globals.css`: Foundation color tokens, component styles, responsive layouts, focus states, and reduced-motion behavior.
- `app/accessibility/page.tsx`: accessibility statement and feedback contact.
- `components/`: Header, Hero, WhyItMatters, WhatWeDo, Programs, ResearchImpact, Partnerships, SupportCTA, Footer, and shared brand/image primitives.
- `public/brand/guide-point.svg`: Foundation Guide Point geometry.
- `app/icon.svg`: Foundation favicon.
- `public/images/`: the three locally hosted WebP images recovered from the supplied export.
- `public/fonts/`: locally hosted Inter variable font and its SIL Open Font License.

## Design authority and asset provenance

The final **ZoraSafe Foundation Identity Board, version 1.0 (October 2026)** takes precedence over the commercial `_ds` bundle. Layout follows `ZoraSafe Foundation Homepage v5.dc.html`, with the supplied research screenshot as supporting reference.

Both PNG logos in the ZIP (`assets/logo-horizontal.png` and `assets/logo-mark-flat.png`) contain the commercial fox. They are intentionally excluded. `components/Brand.tsx` reproduces the Foundation Guide Point SVG geometry from the v5 export and the identity board’s horizontal lockup: Inter wordmark, FOUNDATION tracked to wordmark width, and mark height matching the text block. The footer uses the approved white/mint reversed version. The Foundation is navy-led, with teal/mint support and orange confined to the mark’s small point.

The original design ZIP, screenshots, export runtime, and commercial design system are not needed at runtime and are not copied into the application.

## Replacing imagery

Replace `public/images/hero.webp`, `community-workshop.webp`, or `research.webp`, then update the corresponding alt text and object position in `components/HomeImage.tsx`. Static imports supply intrinsic dimensions and blur placeholders; Next Image supplies responsive optimization. Images fill their containers with `object-fit: cover`.

The Programs image is intentionally tall alongside the 2×2 editorial grid on desktop, changes to a wide image above the grid on tablet, and returns to a taller crop on narrow mobile. Review faces and teaching materials at 1440, 1280, 768, 390, and 320 px when replacing assets. Prefer higher-resolution originals: the supplied community image is only 478×640. Supplied photographs are illustrative design assets; publication rights and representation should be confirmed before public launch.

## Navigation and unfinished destinations

Navigation uses disclosure buttons, normal links, Escape-to-close with focus return, outside-click dismissal, and a compact mobile menu. Homepage sections supply destinations until dedicated pages exist. Leadership currently goes to the mission section, as permitted for this first implementation; it does not assert unprovided leadership information.

Support, partnership, and research inquiry CTAs open `hello@zorasafefoundation.org` with relevant subjects. No payment system is connected, and no tax-deductibility claims are made. Privacy and Terms links currently open policy inquiries by email; they are not published policies. Replace these with approved pages before launch. Social links were omitted because no real profiles were supplied.

## Verification status (October 7, 2026)

The follow-up verification pass installed dependencies successfully and generated `package-lock.json` (Next.js 16.4.0). No redesign or feature expansion was made.

- **Passed:** actual `npm run typecheck`, `npm run lint` (zero errors/warnings), and `npm run build` after fixes.
- **Passed:** the local development server returned HTTP 200. Production-generated homepage HTML contains all four required official sentences and all four exact program names, with correct spaces and curly quotes.
- **Passed:** production HTML checks for one H1, one main landmark, ordered headings, descriptive alt text on all three photos, unique IDs, and valid anchor/ARIA targets. Source styles retain visible focus indicators, reduced-motion support, and responsive breakpoints.
- **Previously checked:** text contrast ratios: navy on white 14.63:1, body text on soft mint 8.02:1, Teal Deep on soft mint 5.50:1, footer text at least 7.12:1.
- **Audit:** `npm audit --omit=dev` reports zero vulnerabilities. Full audit reports five high-severity findings in the development-only ESLint → fast-glob → micromatch → braces chain. The suggested force fix downgrades Next’s ESLint configuration across major versions and was not applied.
- **Blocked:** Chromium still exits during launch with SIGABRT / EPERM. Desktop, laptop, tablet, mobile screenshots, keyboard interaction, measured overflow/touch targets, and browser-console QA remain unverified. Source/HTML inspection is not a substitute for browser QA.
- **Blocked:** `git init -b main` still reports `.git: Operation not permitted`; the session permission profile marks `.git` read-only. No repository metadata, origin, branch, commit, or push was created. Remote inspection still reports `Could not resolve host: github.com`, despite the successful npm install.

Defects fixed: internal cross-route links now use Next Link; the typecheck command generates Next’s types before running TypeScript; the mission eyebrow includes its required period. No errors were suppressed.

Once browser and Git access are available, compare against the final v5 export at 1440/1280/768/390/320 px, verify interaction and console behavior, inspect the remote’s default branch/history, initialize or reconcile Git safely, review the final diff, and commit/push without force. Required origin: `https://github.com/DaemonFxy352/zora_foundation`. Use `main` if there is no existing remote history. Commit message: `Build initial ZoraSafe Foundation website`.

Current visual adaptations from v5 remain the requested grouped navigation, restrained hero Guide Point, responsive photo crops, and adjusted program spacing. No new visual changes were made in this pass; screenshot comparison remains outstanding.

## Social sharing

Production metadata in `app/layout.tsx` sets the canonical homepage, Open Graph, Twitter large-image card, robots, viewport, and navy theme color. The existing `app/icon.svg` remains the site icon. The accessibility page has its own canonical URL.

The shared social image is `public/brand/zorasafe-foundation-social.png` (1200×630 PNG), referenced by both card formats at `https://www.zorasafefoundation.org/brand/zorasafe-foundation-social.png`. The adjacent SVG is its editable source, using the approved Guide Point and Inter. When replacing the image, preserve the dimensions and URL or update the metadata together. The PNG is a static public asset and requires no image-generation service or authentication.
