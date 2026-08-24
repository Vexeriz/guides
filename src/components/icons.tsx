import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  alt = "",
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="https://vexeriz-one.vercel.app/logo.png?v=3"
      alt={alt}
      className={cn("block h-auto w-auto object-contain", className)}
      {...props}
    />
  );
}

export function IconYouTube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("block", className)} aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.8 15.6V8.4L15.8 12l-6 3.6Z"
      />
    </svg>
  );
}
