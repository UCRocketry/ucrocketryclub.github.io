import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero } from "@/components/sections";
import { TeamCard } from "@/components/cards";
import { teams } from "@/data/teams";

export const metadata: Metadata = {
  title: "Subteams",
  description:
    "The eight subteams that build UC Rocketry Club vehicles — airframe, propulsion, avionics, recovery, simulation, operations, payload and business.",
};

export default function TeamsPage() {
  return (
    <>
      <PageHero
        eyebrow="Subteams"
        title="Eight ways into the rocket."
        description="A launch vehicle is too big for one person to hold in their head. We split it into subteams so a first-year can own something real in week two, and so specialists can go deep."
      >
        <nav aria-label="Jump to subteam" className="flex flex-wrap gap-2">
          {teams.map((t) => (
            <Link
              key={t.slug}
              href={`#${t.slug}`}
              className="rounded-full border border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:border-uc hover:text-ink"
            >
              {t.name}
            </Link>
          ))}
        </nav>
      </PageHero>

      <section className="py-24 sm:py-28">
        <Container size="wide">
          <div className="grid gap-5 lg:grid-cols-2">
            {teams.map((t, i) => (
              <Reveal key={t.slug} delay={(i % 2) * 100}>
                <TeamCard team={t} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container size="wide">
          <Reveal className="rounded-3xl border border-line bg-surface p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <SectionHeading
                  eyebrow="Not sure which one?"
                  title="Try more than one."
                  description="Most members float between subteams for their first semester before settling. Nobody is going to hold you to a choice you made in week one — the point is to find the part of the vehicle you cannot stop thinking about."
                />
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <Link
                  href="/join"
                  className="group inline-flex items-center gap-2 rounded-full bg-uc px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-uc-light hover:shadow-[0_8px_30px_-6px_rgba(224,1,34,0.7)]"
                >
                  Start here
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABand
        title="Pick a subteam. Build a rocket."
        body="No experience required on any of them."
      />
    </>
  );
}
