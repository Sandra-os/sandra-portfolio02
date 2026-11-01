import type { Project } from "./projects";

export const selectedWork: Project[] = [
  {
    slug: "petal-relay",
    title: "Petal Relay",
    eyebrow: "Interactive systems",
    status: "Public beta",
    sourcePrivate: true,
    featured: true,
    accent: "teal",
    summary:
      "A chain-reaction puzzle game where deterministic rules, checked hints and save-safe updates make room for experimentation.",
    description:
      "I built a browser puzzle game with sixty authored levels across three gardens, a separate UTC daily challenge, local progress and optional offline installation. A small water drop can trigger a chain of blooms; Undo and Retry let the player explore without losing control.",
    role: "Game rules, level authoring, interface, persistence, offline delivery and verification.",
    challenge:
      "Keep the puzzle outcome consistent through animation, Undo, navigation and reloads.",
    solution:
      "Resolve each move in a pure TypeScript engine before presenting its events through React and Phaser.",
    outcome:
      "A playable public beta with sixty solution-validated boards and browser-local progress.",
    technologies: [
      "TypeScript",
      "React",
      "Phaser",
      "Vite",
      "Vitest",
      "Playwright",
    ],
    liveUrl: "https://petal-relay.vercel.app/",
    highlights: [
      "60 authored, solution-validated boards",
      "Deterministic rules; disposable visual scene",
      "No backend, login, analytics or runtime AI",
    ],
    sections: [
      {
        title: "Problem and constraints",
        paragraphs: [
          "A chain reaction should be understandable to the player and reproducible by the program. The difficult part is preserving that agreement when the player undoes a move, leaves during a relay or reloads midway through an animation.",
          "The game runs as bundled static files. Saves stay in the current browser and origin. There is no account, backend, cross-device sync, analytics or runtime AI. Original vector art and synthesized sound keep the release self-contained.",
        ],
      },
      {
        title: "Architecture: resolve, save, present",
        paragraphs: [
          "The engine accepts immutable session data and a move, then returns the complete next session and an ordered list of relay events. It contains no React, Phaser, storage, timers or wall-clock time. One resolved session is authoritative.",
          "The controller saves the resolved transcript immediately. React provides semantic controls and the HTML board; Phaser animates a projection of the result. Animation and sound can be discarded without changing the puzzle. This keeps visual timing out of the rules and avoids a second canvas input path.",
        ],
      },
      {
        title: "Checked hints with a bounded cost",
        paragraphs: [
          "Hints run a bounded, deduplicated search in a disposable worker so search does not hold up the interface. A proposed continuation is replayed through the rules before a move is shown. Cancellation and a watchdog limit the work; a search that cannot establish a continuation reports unknown.",
          "This trades guaranteed answers for predictable resource limits. An unbounded solver could explore more states, but would make latency and cancellation harder to control. A runtime AI service would add a network dependency without providing the same replayable correctness check.",
        ],
      },
      {
        title: "Updates that preserve the attempt",
        paragraphs: [
          "Versioned saves recover valid progress and preserve the current resolved attempt. The offline cache checks bundled file integrity; its version includes both asset digests and worker code. An update waits for the player, saves the attempt and then reloads.",
          "Review found that a worker-only change could otherwise reuse an active cache name. Cache isolation and a failed-install regression check protect the working version. A separate native click-count filter also discarded legitimate input after a relay; a synchronous busy gate now controls that input path.",
        ],
      },
      {
        title: "Verification and measured outcomes",
        paragraphs: [
          "The October 21, 2026 release record reports 115 passing unit tests and sixty distinct authored boards replayed to a win within budget. Automated browser coverage includes Chromium, WebKit, phone/tablet emulation, keyboard play, storage recovery, cancellation and two-build offline updates. One WebKit hint hit the bounded watchdog under concurrent local load; its isolated rerun passed.",
          "Selecting Phaser’s packaged Arcade variant reduced its reported gzip size from 357.33 KB to 323.72 KB, about 9.4%. The large-chunk advisory remains. This is a bundle-size result, not a public-network speed guarantee. The release’s local loopback timings are not presented as player performance.",
        ],
      },
      {
        title: "Current limitations",
        paragraphs: [
          "The public beta completes the development milestone; it is open for feedback. Physical iPhone/iPad testing, actual VoiceOver/NVDA use, slow-device behavior and human difficulty, sound and feel review remain pending. Browser emulation does not establish those results.",
          "Star targets are authored, not proven optimal. There are no claimed player counts, retention figures or revenue. Offline installation is optional and browser-dependent; clearing site data removes local progress. Source remains private, and the working title is provisional without a legal-clearance claim.",
        ],
      },
    ],
  },
  {
    slug: "kinos",
    title: "KinOS",
    eyebrow: "Full-stack product engineering",
    status: "Private beta · restricted demonstration",
    sourcePrivate: true,
    featured: true,
    accent: "blue",
    summary:
      "A family coordination beta connecting plans, tasks and calendars, with household permissions enforced at the API boundary.",
    description:
      "KinOS explores how household responsibilities, plans and calendar events can share one understandable workflow. This case study covers a deliberately narrow slice of implemented work: the Home and Plan experience, review-before-save creation, and household access boundaries.",
    role: "Implementation across web and mobile interfaces, typed API workflows, shared domain logic and synthetic-data verification.",
    challenge:
      "Keep coordination understandable while preventing one household or role from accessing another’s records.",
    solution:
      "Use a shared domain model with server-side authorization and explicit review before committing new records.",
    outcome:
      "A restricted, synthetic-data beta; no public signup or real-data release is claimed.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React Native / Expo",
      "Node.js",
      "PostgreSQL",
      "Prisma",
    ],
    highlights: [
      "Home, Plan and calendar workflows",
      "Review before transactional creation",
      "Server-side household and role checks",
    ],
    sections: [
      {
        title: "Problem and constraints",
        paragraphs: [
          "A calendar alone does not explain who is responsible for the work around an event. KinOS connects a small set of priorities, responsibilities and plans so a household can see the next useful action.",
          "The release remains a restricted private beta using harmless invented coordination data and supported synthetic fixtures. It is not open for public signup, real family records, real documents or public store distribution. This public case study describes behavior without publishing private endpoints, operational records or source.",
        ],
      },
      {
        title: "Architecture and responsibility",
        paragraphs: [
          "The web interface uses Next.js; the mobile interface uses React Native and Expo. Typed clients call a Node.js API, with PostgreSQL and Prisma providing the persistent data model. Shared TypeScript domain logic keeps the interfaces aligned.",
          "The API is responsible for authentication, household membership and permission checks. A hidden button is not an access boundary. Reads and writes must belong to an authorized household and role, including when navigation arrives through a deep link.",
        ],
      },
      {
        title: "Three implemented workflows",
        paragraphs: [
          "Home brings priorities into a focused view. Plan connects responsibilities and linked work with a calendar that offers Month, Week, Day and Agenda views. These surfaces use database-backed records rather than a disconnected presentation-only dashboard.",
          "Universal Add separates a proposal from a saved record: preview, review, then transactional commit. Idempotent commit behavior protects against duplicate saves. This adds a deliberate review step instead of immediately turning an interpretation into household data.",
          "Household selection and role checks continue through authenticated navigation. Calendar notification handling was corrected so the matching event opens in the correct household, including after sign-in, with usable Back navigation and safe unavailable-target behavior.",
        ],
      },
      {
        title: "Decisions and alternatives",
        paragraphs: [
          "Client filtering can make a screen clearer, but server-side filtering is authoritative. The implementation distinguishes manual sample households, automation fixtures and non-authenticating sample personas. Guarded resets protect owner-created work from ambiguous cleanup.",
          "Offline mode preserves readable cached state while blocking mutations until a connection returns. This is a smaller promise than offline editing: it avoids implying that conflicting writes are safely reconciled when that workflow has not been established.",
          "Notification previews stay generic, with record details behind authenticated navigation. A more descriptive lock-screen message might be convenient, but would expose household content outside the app’s access checks.",
        ],
      },
      {
        title: "Verification and observed results",
        paragraphs: [
          "The merged September 27, 2026 release records server-side permission coverage for Owner, Admin, Caregiver, Member and Viewer roles, cross-household denial, idempotent creation and sample isolation. Chromium/WebKit checks and native verification are recorded separately; guarded skips are not counted as passes.",
          "A notification-routing defect exposed competing native URL handlers. Tests using the installed linking pipeline reproduced it; the repair gives navigation one authenticated, household-aware handler. The release record includes owner acceptance of the corrected iOS candidate and distinct physical observations for the tested reminder journeys. Those are scoped acceptance results, not a claim that every device or workflow is validated.",
        ],
      },
      {
        title: "Current limitations and access",
        paragraphs: [
          "The case study reflects the merged private-beta scope, rather than treating an earlier roadmap or historical audit as the current release. No user counts, commercial adoption, independent review or measured productivity gains are claimed.",
          "The demonstration remains restricted and synthetic-only. Real-data admission, external invitations, legal/privacy review and public launch require separate decisions. Source is private. There is intentionally no public production, signup or private-source link on this page.",
        ],
      },
    ],
  },
];
