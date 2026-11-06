import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { Button, Container, SectionHeading, StatusPill } from "@/components/ui";
import { CTABand, StatsRow } from "@/components/sections";
import { ProjectCard } from "@/components/cards";
import { projects } from "@/data/projects";
import { teams } from "@/data/teams";
import { audiences, roadmap } from "@/data/content";
import { site } from "@/data/site";

export default function HomePage() {
  const featured = projects.filter((p) => p.status === "Flown");

  return (
    <>
      <Hero />

      {/* ---------------- Mission ---------------- */}
      <section className="relative py-24 sm:py-32">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">Our mission</p>
              <p className="mt-6 font-display text-3xl font-bold leading-[1.15] tracking-[-0.02em] sm:text-4xl">
                &ldquo;{site.mission}&rdquo;
              </p>
            </Reveal>

            <Reveal delay={140} className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-muted">{site.vision}</p>
              <p className="mt-6 leading-relaxed text-muted">
                In practice that means a hard loop we run every semester: design a vehicle,
                build it in the shop, fly it at a certified range, and take the data apart
                until we understand exactly what happened. Then we do it again, higher.
              </p>
              <div className="mt-8">
                <Button href="/about" variant="secondary">
                  More about the club
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <StatsRow />

      {/* ---------------- Three audiences ---------------- */}
      <section className="py-24 sm:py-32">
        <Container size="wide">
          <SectionHeading
            eyebrow="Get involved"
            title="There are three ways to be part of this."
            description="Fly with us, fund us, or follow along. Every one of them keeps rockets going up."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 110}>
                <Link
                  href={a.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-uc/50 hover:bg-surface-2"
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-uc to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-uc-light">
                    {a.kicker}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold">{a.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{a.body}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                    {a.cta}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- Vehicles ---------------- */}
      <section className="py-24 sm:py-32">
        <Container size="wide">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Flight record"
              title="Vehicles we have actually flown."
              description="Not renders. Not concepts. Hardware that left the pad, broke the sound barrier, and came home."
            />
            <Reveal delay={160}>
              <Button href="/projects" variant="secondary">
                All projects
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- Roadmap ---------------- */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div aria-hidden className="absolute inset-0 grid-lines opacity-40" />
        <Container size="wide" className="relative">
          <SectionHeading
            eyebrow="The long game"
            title="From 10,000 feet to 100 kilometres."
            description="The Kármán line is 328,084 feet up. Here is how a student team gets there — one qualified capability at a time."
            align="center"
          />

          <ol className="mt-16 space-y-4">
            {roadmap.map((r, i) => (
              <Reveal key={r.phase} delay={i * 90}>
                <li className="group grid gap-5 rounded-2xl border border-line bg-surface p-7 transition-all duration-500 hover:border-uc/40 hover:bg-surface-2 sm:grid-cols-12 sm:items-center sm:gap-8">
                  <div className="sm:col-span-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
                      {r.phase}
                    </p>
                    <p className="mt-2 font-display text-2xl font-bold text-uc-light">
                      {r.marker}
                    </p>
                  </div>
                  <div className="sm:col-span-7">
                    <h3 className="text-xl font-bold">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
                  </div>
                  <div className="sm:col-span-2 sm:text-right">
                    <StatusPill status={r.status} />
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* ---------------- Subteams ---------------- */}
      <section className="py-24 sm:py-32">
        <Container size="wide">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="How we are organised"
              title="Eight subteams. Pick where you fit."
              description="You are not assigned a job. You choose the part of the vehicle you want to own, and most members end up touching more than one."
            />
            <Reveal delay={160}>
              <Button href="/teams" variant="secondary">
                Explore subteams
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teams.map((t, i) => (
              <Reveal key={t.slug} delay={i * 60}>
                <Link
                  href={`/teams#${t.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-uc/50 hover:bg-surface-2"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] text-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-bold leading-snug transition-colors group-hover:text-uc-light">
                    {t.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{t.blurb}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
