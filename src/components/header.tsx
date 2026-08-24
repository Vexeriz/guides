import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/icons";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "https://vexeriz-one.vercel.app", label: "Home" },
  { href: "https://vexeriz-one.vercel.app/#watch", label: "Watch" },
  { href: "https://vexeriz-one.vercel.app/about", label: "About" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <Link to="/" className="flex items-center gap-2.5 text-silver">
          <Logo className="h-9" />
          <span className="display text-[1.05rem] tracking-[0.3em] text-foreground">
            Guides
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="kicker text-dim transition-colors duration-150 hover:text-silver"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={SITE.parentDomain}
          className="inline-flex h-10 items-center border border-line px-4 font-mono text-[11px] tracking-[0.18em] text-silver uppercase transition-colors duration-150 hover:border-quiet hover:text-foreground"
        >
          vexeriz.com
        </a>
      </div>
    </header>
  );
}
