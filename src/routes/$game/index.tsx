import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { GuideCard } from "@/components/guide-card";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/header";
import { getGame, getGuidesForGame } from "@/lib/site";

export const Route = createFileRoute("/$game/")({
  loader: ({ params }) => {
    const game = getGame(params.game);
    if (!game) throw notFound();
    return { game, guides: getGuidesForGame(game.id) };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.game.name} Guides — Vexeriz Guides` },
          { name: "description", content: loaderData.game.tagline },
        ]
      : [],
  }),
  component: GamePage,
});

function GamePage() {
  const { game, guides } = Route.useLoaderData();

  return (
    <div className="relative min-h-dvh bg-background">
      <div className="grain" aria-hidden="true" />
      <SiteHeader />
      <main>
        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8 sm:pt-20 sm:pb-12">
            <Link
              to="/"
              className="kicker text-dim transition-colors hover:text-silver"
            >
              ← All guides
            </Link>
            <p className="kicker mt-6">{game.shortName}</p>
            <h1 className="display mt-3 text-5xl text-foreground sm:text-6xl">
              {game.name}
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-pretty text-quiet">
              {game.tagline}
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((guide) => (
                <GuideCard key={guide.slug} gameSlug={game.slug} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
