import { COMING_SOON_GAMES } from "@/lib/site";

export function MoreGamesTile() {
  return (
    <div className="border border-dashed border-line p-6 sm:p-8">
      <p className="kicker">More games coming</p>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-quiet">
        Guides for these are on the way, at a pace that respects a college
        schedule.
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {COMING_SOON_GAMES.map((name) => (
          <li
            key={name}
            className="border border-line px-3 py-1.5 font-mono text-[11px] tracking-wide text-dim"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
