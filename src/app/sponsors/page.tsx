import type { Metadata } from "next";
import { Button, Container, Rule, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero, StatsRow } from "@/components/sections";
import { fundingBreakdown, sponsorTiers } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Partner with the University of Cincinnati Rocketry Club. Sponsorship funds motors, composites and avionics — and puts your brand on hardware that flies.",
};

const why = [
  {
    title: "Reach engineers before they graduate",
    body: "Our members are aerospace, mechanical, electrical and computer science students who already know how to work a shop and hit a deadline. Sponsors get résumé access and recruiting time.",
  },
  {
    title: "Your logo flies",
    body: "Sponsor marks go on the airframe, the team banner, and every piece of launch media we produce. Rocket photos travel further than a logo on a website.",
  },
  {
    title: "You get reported back to",
    body: "After every campaign we send sponsors the flight data, the photos, and an honest write-up of what worked and what did not. You will know exactly what your money did.",
  },
  {
    title: "Support a UC student org directly",
    body: "We are a registered student organisation at the University of Cincinnati. Contributions go straight into hardware, travel and the students building it.",
  },
];

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsorship"
        title="Put your name on something that leaves the ground."
        description="Motors, composites, avionics and travel are expensive, and student org budgets do not cover them. Sponsors are the reason our rockets fly — and they get a genuine return for it."
      >
        <div className="flex flex-wrap gap-3">
          <Button href={site.sponsorshipPacket} external>
            Download the packet
          </Button>
          <Button href="/contact" variant="secondary">
            Talk to us
          </Button>
        </div>
      </PageHero>

      <StatsRow />

      {/* Why sponsor */}
      <section className="py-24 sm:py-32">
        <Container size="wide">
          <SectionHeading
            eyebrow="Why sponsor us"
            title="What you get back."
            description="This is not a donation with a thank-you note. It is a partnership with a team that produces measurable results four times a year."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {why.map((w, i) => (
              <Reveal
                key={w.title}
                delay={i * 100}
                className="rounded-2xl border border-line bg-surface p-8"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-bold">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{w.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Where the money goes */}
      <section className="pb-24 sm:pb-32">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Where it goes"
                title="Every dollar has a job."
                description="A rough breakdown of how a season's sponsorship budget gets spent. Nothing goes to overhead — there isn't any."
              />
            </Reveal>

            <Reveal delay={140} className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-6">
                {fundingBreakdown.map((f) => (
                  <div key={f.label}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm font-semibold text-ink">{f.label}</span>
                      <span className="font-mono text-sm text-uc-light">{f.pct}%</span>
                    </div>
                    <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-line-soft">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-uc to-flame"
                        style={{ width: `${f.pct}%` }}
                      />
                    </div>
                    <p className="mt-2 text-xs text-dim">{f.note}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Tiers */}
      <section className="pb-24 sm:pb-32">
        <Container size="wide">
          <SectionHeading
            eyebrow="Tiers"
            title="Partnership levels."
            description="Every tier includes everything below it. If none of these fit, tell us what you need — we would rather build something that works for you."
            align="center"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {sponsorTiers.map((t, i) => {
              const featured = t.name === "Gold";
              return (
                <Reveal
                  key={t.name}
                  delay={i * 80}
                  className={`relative flex h-full flex-col rounded-2xl border p-7 transition-colors ${
                    featured
                      ? "border-uc/50 bg-gradient-to-b from-uc/[0.09] to-surface"
                      : "border-line bg-surface"
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-2.5 left-7 rounded-full bg-uc px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white">
                      Most common
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold">{t.name}</h3>
                  <p className="mt-1.5 font-mono text-sm text-uc-light">{t.amount}</p>
                  <Rule className="my-5" />
                  <ul className="flex-1 space-y-3">
                    {t.perks.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span
                          aria-hidden
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-uc"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={140} className="mt-8 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
              Placeholder tiers — confirm amounts and benefits against your sponsorship packet
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Current sponsors */}
      <section className="pb-24 sm:pb-32">
        <Container size="wide">
          <SectionHeading
            eyebrow="Our partners"
            title="Sponsors who make this possible."
            align="center"
          />
          <Reveal delay={100}>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-28 items-center justify-center bg-surface font-mono text-[10px] uppercase tracking-[0.16em] text-dim"
                >
                  Your logo here
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={160} className="mt-8 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
              Drop sponsor logos into /public/images/sponsors and swap this grid
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABand
        title="Let's talk about a partnership."
        body="Tell us what you want out of it and we will build the package around that."
        primary={{ href: "/contact", label: "Contact us" }}
        secondary={{ href: site.sponsorshipPacket, label: "Download the packet" }}
      />
    </>
  );
}
