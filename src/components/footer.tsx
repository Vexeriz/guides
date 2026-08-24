import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-wide text-dim">
            © {new Date().getFullYear()} Vexeriz. All rights reserved.
          </p>
          <p className="font-mono text-[11px] tracking-[0.16em] text-dim uppercase">
            {SITE.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
