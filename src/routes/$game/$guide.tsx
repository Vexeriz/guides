import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getGuide } from "@/lib/site";
import type { GuideBlock } from "@/lib/site";

export const Route = createFileRoute("/$game/$guide")({
  loader: ({ params }) => {
    const result = getGuide(params.game, params.guide);
    if (!result) throw notFound();
    return result;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.guide.title} — Vexeriz Guides` },
          { name: "description", content: loaderData.guide.summary },
        ]
      : [],
  }),
  component: GuidePage,
});

function renderBlock(block: GuideBlock, i: number) {
  switch (block.type) {
    case "heading":
      return <h2 key={i}>{block.text}</h2>;
    case "paragraph":
      return <p key={i}>{block.text}</p>;
    case "list":
      return (
        <ul key={i}>
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
  }
}

function GuidePage() {
  const { game, guide } = Route.useLoaderData();

  return (
    <div className="relative min-h-dvh bg-background">
      <div className="grain" aria-hidden="true" />
      <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-3xl items-center px-5 sm:px-8">
          <Link
            to="/$game"
            params={{ game: game.slug }}
            className="kicker text-dim transition-colors hover:text-silver"
          >
            ← {game.shortName}
          </Link>
        </div>
      </header>

      <main>
        <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
          <span className="font-mono text-[10px] tracking-[0.18em] text-silver uppercase">
            {guide.tag}
          </span>
          <h1 className="display mt-4 text-4xl text-foreground sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-pretty text-quiet">
            {guide.summary}
          </p>

          {guide.youtubeId ? (
            <div className="mt-10 aspect-video overflow-hidden border border-line bg-surface">
              <iframe
                className="size-full"
                src={`https://www.youtube.com/embed/${guide.youtubeId}`}
                title={guide.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : null}

          <div className="guide-prose mt-4">
            {guide.body?.map((block, i) => renderBlock(block, i))}
          </div>
        </article>
      </main>
    </div>
  );
}
