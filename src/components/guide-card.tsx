import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { Guide } from "@/lib/site";

const TAG_STYLES: Record<Guide["tag"], string> = {
  Build: "text-mist",
  Mechanic: "text-silver",
  "Deep dive": "text-quiet",
};

export function GuideCard({ gameSlug, guide }: { gameSlug: string; guide: Guide }) {
  const isComingSoon = guide.status === "coming-soon";

  const content = (
    <article
      className={cn(
        "flex h-full flex-col justify-between border border-line bg-surface p-5 transition-colors duration-200 sm:p-6",
        !isComingSoon && "group-hover:border-quiet",
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <span
            className={cn(
              "font-mono text-[10px] tracking-[0.18em] uppercase",
              TAG_STYLES[guide.tag],
            )}
          >
            {guide.tag}
          </span>
          {isComingSoon ? (
            <span className="font-mono text-[10px] tracking-[0.18em] text-dim uppercase">
              Coming soon
            </span>
          ) : null}
        </div>
        <h3 className="mt-3 text-[1.05rem] leading-snug font-medium text-pretty text-foreground">
          {guide.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-pretty text-quiet">{guide.summary}</p>
      </div>
    </article>
  );

  if (isComingSoon) {
    return <div className="opacity-60">{content}</div>;
  }

  return (
    <Link
      to="/$game/$guide"
      params={{ game: gameSlug, guide: guide.slug }}
      className="group block h-full"
    >
      {content}
    </Link>
  );
}
