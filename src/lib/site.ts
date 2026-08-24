export const SITE = {
  name: "Vexeriz Guides",
  domain: "guides.vexeriz.com",
  tagline: "Written guides, one game at a time.",
  description:
    "In-depth written guides for Divinity: Original Sin 2 and beyond, with video where it helps.",
  parentDomain: "https://vexeriz-one.vercel.app",
} as const;

/**
 * The registry of games with guide content. Adding a new game (e.g. Cities:
 * Skylines) is just adding one entry here — the landing page, per-game route,
 * and nav all derive from this list automatically. No new routing or section
 * code needed.
 */
export const GAMES = [
  {
    id: "dos2",
    slug: "dos2",
    name: "Divinity: Original Sin 2",
    shortName: "DOS2",
    tagline: "The pillar that built this channel — mechanics, builds, and the stuff the wiki skips.",
  },
] as const;

export type GameId = (typeof GAMES)[number]["id"];

/**
 * Games queued for future guides but with no content yet. Rendered as a
 * single "more coming" tile on the landing page, distinct from real GAMES
 * entries. When a game here gets its first real guide, move its name out of
 * this list and add a proper entry to GAMES above.
 */
export const COMING_SOON_GAMES = [
  "Cities: Skylines",
  "Resident Evil",
  "Baldur's Gate 3",
] as const;

export type GuideTag = "Build" | "Mechanic" | "Deep dive";

export type GuideStatus = "published" | "coming-soon";

export interface Guide {
  slug: string;
  gameId: GameId;
  title: string;
  tag: GuideTag;
  summary: string;
  /** Optional YouTube video ID to embed as supplementary content. */
  youtubeId?: string;
  status: GuideStatus;
  /**
   * Body content for published guides. Written as an array of simple content
   * blocks so the guide detail template can render consistent typography
   * without every guide hand-rolling its own heading/paragraph markup.
   */
  body?: GuideBlock[];
}

export type GuideBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export const GUIDES: Guide[] = [
  {
    slug: "teleporter-pyramids",
    gameId: "dos2",
    title: "An Expert's Guide to the Teleporter Pyramids",
    tag: "Mechanic",
    summary:
      "How the teleporter pyramid puzzles actually work, and the fastest way through each one.",
    youtubeId: "tUAoC1qMLnI",
    status: "published",
    body: [
      { type: "heading", text: "Coming soon" },
      {
        type: "paragraph",
        text: "The full written breakdown is still being written. In the meantime, the video above covers the complete walkthrough.",
      },
    ],
  },
  {
    slug: "stealth-guide",
    gameId: "dos2",
    title: "An Expert's Guide to Stealth in Divinity: Original Sin 2",
    tag: "Mechanic",
    summary: "The mechanics behind sneaking, sight cones, and staying hidden mid-fight.",
    youtubeId: "aQfsw_kvz-A",
    status: "published",
    body: [
      { type: "heading", text: "Coming soon" },
      {
        type: "paragraph",
        text: "The full written breakdown is still being written. In the meantime, the video above covers the complete walkthrough.",
      },
    ],
  },
  {
    slug: "combat-tips",
    gameId: "dos2",
    title: "7 Secret Combat Tips for Divinity Original Sin 2",
    tag: "Deep dive",
    summary: "Small mechanical edges that add up to a much easier run.",
    youtubeId: "iRK2aI4ELJY",
    status: "published",
    body: [
      { type: "heading", text: "Coming soon" },
      {
        type: "paragraph",
        text: "The full written breakdown is still being written. In the meantime, the video above covers the complete walkthrough.",
      },
    ],
  },
  {
    slug: "lone-wolf-build",
    gameId: "dos2",
    title: "Lone Wolf Build Guide",
    tag: "Build",
    summary: "A complete two-person Lone Wolf setup for a Tactician-difficulty run.",
    status: "coming-soon",
  },
] as const;

export function gamesWithGuides() {
  return GAMES.map((game) => ({
    game,
    guides: GUIDES.filter((g) => g.gameId === game.id),
  })).filter((entry) => entry.guides.length > 0);
}

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug);
}

export function getGuidesForGame(gameId: GameId) {
  return GUIDES.filter((g) => g.gameId === gameId);
}

export function getGuide(gameSlug: string, guideSlug: string) {
  const game = getGame(gameSlug);
  if (!game) return undefined;
  const guide = GUIDES.find((g) => g.gameId === game.id && g.slug === guideSlug);
  if (!guide) return undefined;
  return { game, guide };
}
