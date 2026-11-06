"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile panel on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-line-soft bg-void/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-5 sm:px-8">
          {/* Wordmark */}
          <Link href="/" className="group flex items-center gap-3" aria-label={site.name}>
            <Image
              src="/images/brand/logo.png"
              alt=""
              width={40}
              height={40}
              priority
              className="h-9 w-9 object-contain transition-transform duration-500 group-hover:scale-110"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-ink">
                UC Rocketry
              </span>
              <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.26em] text-dim">
                Cincinnati
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href) ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span
                    aria-hidden
                    className="absolute inset-x-4 -bottom-0.5 h-px bg-uc"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/join"
              className="hidden rounded-full bg-uc px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-uc-light hover:shadow-[0_8px_24px_-8px_rgba(224,1,34,0.8)] sm:inline-flex"
            >
              Join the team
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-dim lg:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile panel */}
      <div
        className={`fixed inset-0 z-40 bg-void/97 backdrop-blur-xl transition-all duration-400 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="flex h-full flex-col justify-center gap-1 px-8 pt-16"
          aria-label="Mobile"
        >
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-baseline gap-4 border-b border-line-soft py-4 font-display text-3xl font-bold text-ink transition-colors hover:text-uc-light"
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
                transform: open ? "none" : "translateY(12px)",
                opacity: open ? 1 : 0,
                transitionProperty: "opacity, transform, color",
                transitionDuration: "500ms",
              }}
            >
              <span className="font-mono text-[10px] text-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-uc px-6 py-4 text-base font-semibold text-white"
          >
            Join the team
          </Link>
        </nav>
      </div>
    </>
  );
}
