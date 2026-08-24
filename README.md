# Vexeriz Guides

Written game guides — companion site to [vexeriz.com](https://vexeriz.com).
Deployed separately at `guides.vexeriz.com`.

## Stack

TanStack Start (React) + Tailwind, deployed on Vercel. Same visual system as
the main Vexeriz site (Barlow Condensed / IBM Plex Sans, dark + silver
palette) — see `src/styles.css`.

## Adding content

Everything lives in `src/lib/site.ts`.

**Add a guide to an existing game:** add an entry to the `GUIDES` array.

**Add a brand-new game:** add an entry to `GAMES`, then add guides for it to
`GUIDES` with the matching `gameId`. The landing page, the game's own page,
and routing all pick this up automatically — no other files need to change.

**Queue a game before it has content:** add its name as a string to
`COMING_SOON_GAMES`. It'll show up in the "More games coming" tile on the
landing page. Once it has a real guide, move the name out of this list and
into a proper `GAMES` entry instead.

**Guide body content:** each guide's `body` is an array of simple blocks
(`heading` / `paragraph` / `list`) rather than raw JSX, so every guide gets
consistent typography for free. See any existing guide in `site.ts` for the
shape.

## Local dev

```
npm install
npm run dev
```

## Deploy

Connected to Vercel via GitHub — push to `main` and it deploys automatically,
same as the main site.
