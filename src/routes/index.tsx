import { createFileRoute, Link } from "@tanstack/react-router";
import { GuideCard } from "@/components/guide-card";
import { MoreGamesTile } from "@/components/more-games-tile";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/header";
import { gamesWithGuides, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const groups = gamesWithGuides();

  return (
    <div className="relative min-h-dvh bg-background">
      <div className="grain" aria-hidden="true" />
      <SiteHeader />
      <main>
        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-5 pt-20 pb-14 sm:px-8 sm:pt-28 sm:pb-16">
            <p className="kicker reveal">{SITE.name}</p>
            <h1 className="display reveal reveal-d1 mt-4 text-hero text-metal">
              Guides
            </h1>
            <p className="reveal reveal-d2 mt-6 max-w-md text-[0.95rem] leading-relaxed text-pretty text-quiet sm:text-base">
              {SITE.tagline}
            </p>
          </div>
        </section>

        {groups.map(({ game, guides }) => (
          <section key={game.id} className="border-b border-line">
            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="kicker">{game.shortName}</p>
                  <h2 className="display mt-3 text-4xl text-foreground sm:text-5xl">
                    {game.name}
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-pretty text-quiet">
                    {game.tagline}
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {guides.map((guide) => (
                  <GuideCard key={guide.slug} gameSlug={game.slug} guide={guide} />
                ))}
              </div>
            </div>
          </section>
        ))}

        <section>
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
            <MoreGamesTile />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
