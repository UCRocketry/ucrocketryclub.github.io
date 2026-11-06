import Image from "next/image";
import Link from "next/link";
import { Container, Rule } from "@/components/ui";
import { nav, site, socials } from "@/data/site";
import { teams } from "@/data/teams";
import { projects } from "@/data/projects";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-line-soft bg-surface/40">
      <Container size="wide" className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/brand/logo.png"
                alt=""
                width={48}
                height={48}
                className="h-11 w-11 object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-sm font-bold uppercase tracking-[0.14em]">
                  UC Rocketry Club
                </span>
                <span className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.24em] text-dim">
                  {site.location}
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">{site.mission}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:border-uc hover:text-ink"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-2">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">Site</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-muted transition-colors hover:text-ink">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">Subteams</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-1">
              {teams.slice(0, 6).map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/teams#${t.slug}`}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">Vehicles</h3>
            <ul className="mt-4 space-y-2.5">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
              Contact
            </h3>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block break-all text-sm text-muted transition-colors hover:text-ink"
            >
              {site.email}
            </a>
          </div>
        </div>

        <Rule className="my-10" />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-dim">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-dim">
            Website Designed and Developed by {" "}
            <a
              href="https://techconnectusa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:underline"
            >
              TechConnectUSA
            </a>
          </p>
          <p className="font-mono text-[11px] text-dim">
            A registered student organization at the {site.university}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
