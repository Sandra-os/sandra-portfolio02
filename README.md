# Sandra Ogbudinkpa — engineering portfolio

[Live portfolio](https://sandra-ogbudinkpa.vercel.app) · [Contact](https://sandra-ogbudinkpa.vercel.app/contact)

The existing Next.js / TypeScript / Tailwind portfolio, with two selected case studies:

- [Petal Relay](https://sandra-ogbudinkpa.vercel.app/projects/petal-relay): a deterministic browser puzzle, validated levels, bounded hints and save-safe offline updates. [Play the public beta](https://petal-relay.vercel.app/).
- [KinOS](https://sandra-ogbudinkpa.vercel.app/projects/kinos): a sanitized account of household coordination, review-before-save workflows and server-side access boundaries. Restricted synthetic-data private beta; source and demonstration access remain private.

Earlier frontend work and academic engineering projects retain their original `/projects/[slug]` URLs. About, Experience, Skills, Resume, Writing (`/blog`) and Contact remain available. Operations Data Workbench is planned work, not a shipped product.

## Run and verify

Use the pinned Node version with npm; the lockfile is committed.

```sh
nvm use
npm ci
npm run dev
```

```sh
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

Browser tests expect a current build and start their own local production server. Install the matching Playwright Chromium/WebKit runtimes if unavailable (`npx playwright install chromium webkit`). These checks are browser emulation, not physical-device or complete accessibility validation.

Content lives in `data/`; routes in `app/`; shared presentation in `components/`. Static assets and the unchanged owner resume live in `public/`. Contact is an email link with a webmail fallback, without a submission service or stored messages. Metadata, a sitemap, robots and a factual Person schema describe the visible portfolio.

## Publication and recovery

Reuse the existing portfolio Vercel project and Git integration. Feature pushes create its normal previews; merging reviewed, exact-head-verified PRs publishes `main`. Check current plan/shared usage before a deployment-triggering push. No new project, paid feature, pipeline or account is required by this update. Keep billing/account evidence and private source material out of public Git.

Rollback: revert the portfolio merge through a reviewed PR, or use the existing project's deployment history to promote the previously verified production deployment. Confirm the canonical live URL and key routes afterward; no DNS or project recreation is needed.

## Content and provenance

Selected-work copy is based on Petal Relay's October 21, 2026 public-beta release documentation and KinOS's September 27 merged private-beta scope. Historical audits are not treated as current release state. Detailed private evidence stays outside this repository. No user counts or commercial results are inferred.

The Petal Relay image is an authentic capture of its public beta (November 1, 2026), showing original vector art. The KinOS flow is a labeled conceptual architecture, not an invented product screen. Existing blog imagery and its linked DEV Community article are retained; no new third-party art or generated assets are introduced. Existing biography/employment/resume facts are preserved without new verification claims.
