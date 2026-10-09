# Phase 4.2 deployment safety investigation

## Finding and decision

The unexpected event was a **separate production promotion initiated with a Vercel website-session credential**, after a normal Git-triggered preview deployment. It was not the Git integration treating the feature branch as the production branch. Current configuration, activity records, and the subsequent feature push support proceeding with a feature-only push for QA. No Vercel setting was changed.

The activity principal is `zorasafe`, UID `mGrEJ8NnVE1R0qgMbHJZPgqM`. Looking up the event's credential metadata returned `Website, Login with Google (Chrome on macOS)`, origin `google`, type `token`. This is evidence consistent with a manual dashboard promotion, distinct from the Git service event. It attributes the action to an account/session, not conclusively to the human operating it; the records returned no browser interaction recording or human identity proof. It does not establish that the current feature branch automatically caused a promotion.

## Project, commit, and timeline

- Team: `zora-safe`, ID `team_XGmFWQnYvyQBJO6AVyLqHI6J`.
- Project: `zora-foundation`, ID `prj_lSHh3vDrPHNIMgXYqd2JzOkGsBJ6`.
- Linked repository: `DaemonFxy352/zora_foundation`, GitHub repository ID `1409351937`.
- GitHub's commit endpoint and local history both verify `b0928124b89cfb1703a496c8221b06e819dff9b3` belongs to that repository.
- The team project list returned seven projects, no further pagination; only this project is linked to the Foundation repository. This is scoped to the accessible team, not a claim about inaccessible accounts.

The [sanitized activity evidence](phase42-vercel-events.json) came from Vercel `GET /v3/events`, filtered to this project and 2026-10-09 02:55–03:15 UTC with payloads enabled. Credential identifiers and emails are omitted.

| UTC time | Event | Interpretation |
| --- | --- | --- |
| 03:00:31 | `uev_krj3i6LfSKLVGc1thsW5RmbH`, deployment `dpl_DCHUCaNHLXHEq8GMB45nusMH1RhY`, `b092812`, target null | Git push created a preview. |
| 03:00:43 | `uev_P4macvwSDNPhdQQFwWm0QZIX`, one alias assigned | Preview branch alias assignment. |
| 03:03:53 | `uev_6hi2IIIcugI6O1LjK2h26Rqd`, deployment `dpl_BfVnysyySx24LGgptYcwyqUktrxq`, target production | Separate website-session request; deployment metadata records `source: redeploy`, `action: promote`, and the preview as `originalDeploymentId`. |
| 03:04:08 | `uev_0qfUtgkv8QSP2Y8Y9XNeCDyQ`, five aliases assigned | Promotion completed with production aliases reassigned. |
| 03:08:25 | `uev_LjlxKWhO2pHrpZ4TtcuiWYrA`, deployment `dpl_HPijWuzdKE5sCkdBHgV3hkBDvzSz`, `cd23973`, target null | Next feature push again created a preview, not production. |
| 03:08:40 | `uev_aJ9TvMR0SeI2QsLkJb9Ag5dW`, one alias assigned | Only the preview alias moved on this subsequent push. |

Production previously pointed to `dpl_HSToV8c9QBfocbwKWMZjugGE1juc` (`cd41080`). After the promotion it points to `dpl_BfVnysyySx24LGgptYcwyqUktrxq` (`b092812`). The event was therefore more than a build or an incidental preview alias change: a production deployment/promotion and production alias movement occurred.

## Current separation and automation review

- Vercel's Git link has production branch `main`; deploy hooks are empty.
- Production domains `zorasafefoundation.org`, `www.zorasafefoundation.org`, and `zora-foundation.vercel.app` have no feature-branch or custom-environment override.
- Direct alias lookup confirms `www.zorasafefoundation.org` targets production `dpl_BfVnysyySx24LGgptYcwyqUktrxq`, while the feature branch alias targets preview `dpl_HPijWuzdKE5sCkdBHgV3hkBDvzSz`. The preview metadata retained in a historical production record is not the authoritative current alias mapping.
- GitHub lists one active workflow: Foundation release QA. It checks out code, installs dependencies/browsers, builds, validates, tests, and uploads artifacts. It has `contents: read`, no Vercel credentials referenced, and no promotion/deployment step.
- Repository deployment-script search found no Vercel API, CLI promotion, deploy hook, or automated promotion script. Package lifecycle scripts contain no deployment operation.
- GitHub repository hooks: empty. Vercel team webhook subscriptions: empty. GitHub App integration is distinct from repository webhooks; the Vercel Git integration remains active and creates previews.
- No merge into main, production deployment, alias mutation, or promotion is authorized by this task. Preview URL isolation is deployment-target isolation, not a claim that preview content is access-protected.

**Safety conclusion:** ordinary pushes to this feature branch are routed to previews, supported by configuration **and two observed Git deployment events plus current alias separation**. The separate website-session promotion explains the prior uncertainty sufficiently for the authorized QA push. This does not stop an authorized account/session from separately promoting any preview. If attribution to a specific person is required, the owner must correlate Vercel request `46zgk-1791515031743-9633cc7ff9a9` and event `uev_6hi2IIIcugI6O1LjK2h26Rqd` with session/audit records; request source/IP/user-agent detail from the team audit export or Vercel support if not available in Activity. No additional permission was needed to read the activity and credential metadata used here.

References: [Vercel Activity Log](https://vercel.com/docs/activity-log), [List User Events API](https://docs.vercel.com/docs/rest-api/reference/endpoints/user). These explain event/account attribution; project-specific conclusions above come from authenticated API evidence.
