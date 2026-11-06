import type { ReactNode } from "react";
import { Container, Eyebrow, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { stats } from "@/data/content";
import { site } from "@/data/site";

/* ---------------- Sub-page hero ---------------- */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line-soft pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-60" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(70%_100%_at_50%_0%,rgba(224,1,34,0.16),transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void to-transparent"
      />

      <Container className="relative">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
          )}
          {children && <div className="mt-9">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------- Stats strip ---------------- */
export function StatsRow() {
  return (
    <section className="border-y border-line-soft bg-surface/30">
      <Container size="wide">
        <dl className="grid grid-cols-2 divide-line-soft lg:grid-cols-4 lg:divide-x">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className="border-b border-line-soft px-2 py-9 lg:border-b-0 lg:px-8"
            >
              <dd className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-3 text-sm font-semibold text-ink">{s.label}</dt>
              <p className="mt-1 text-xs leading-relaxed text-dim">{s.sub}</p>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/* ---------------- Closing CTA band ---------------- */
export function CTABand({
  title = "Build something that leaves the ground.",
  body = "Whether you want to fly hardware, fund it, or just watch it go up — there is a way in.",
  primary = { href: "/join", label: "Join the team" },
  secondary = { href: "/sponsors", label: "Sponsor us" },
}: {
  title?: string;
  body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden">
      <Container size="wide">
        <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
          <div aria-hidden className="absolute inset-0 grid-lines opacity-50" />
          <div
            aria-hidden
            className="absolute inset-x-0 -bottom-24 h-64 bg-[radial-gradient(50%_100%_at_50%_100%,rgba(224,1,34,0.28),transparent_70%)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow">{site.abbr}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{body}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href={primary.href}>{primary.label}</Button>
              <Button href={secondary.href} variant="secondary">
                {secondary.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
