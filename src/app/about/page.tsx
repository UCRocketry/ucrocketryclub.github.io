import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionHeading, Rule } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero, StatsRow } from "@/components/sections";
import { PersonCard } from "@/components/cards";
import { leadership } from "@/data/leadership";
import { memberValue } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who the University of Cincinnati Rocketry Club is, how we work, and the people running it.",
};

const cycle = [
  {
    step: "Design",
    body: "Every vehicle starts as a simulation. Stability margins, drag models, motor selection and recovery sizing get argued out in OpenRocket and RASAero before a single part is cut.",
  },
  {
    step: "Build",
    body: "Composite layups, machined couplers, printed fixtures, hand-assembled avionics boards. Members build the parts they designed, which is the fastest way to learn what a bad design feels like.",
  },
  {
    step: "Fly",
    body: "We launch at certified high-power ranges under NAR and Tripoli rules, with a written checklist and a safety officer who can call a scrub.",
  },
  {
    step: "Analyse",
    body: "Flight computers come home with the data. We reconcile predicted versus actual, write it up, and feed it into the next vehicle. That loop is the entire curriculum.",
  },
];

const certs = [
  {
    level: "Level 1",
    motors: "H – I class",
    body: "The entry certification. Fly and recover a rocket on an H or I motor and you can buy and fly your own high-power hardware.",
    count: "23 members certified",
  },
  {
    level: "Level 2",
    motors: "J – L class",
    body: "Requires a written exam on rocketry safety and regulations plus a successful qualifying flight. Opens up the motors our two-stage vehicles actually run on.",
    count: "8 members certified",
  },
  {
    level: "Level 3",
    motors: "M class and up",
    body: "The top tier. Requires a documented, reviewed vehicle design and a flight witnessed by certified advisors. Where the club is heading.",
    count: "In progress",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the club"
        title="A student team that flies real hardware."
        description="The University of Cincinnati Rocketry Club is a registered student organisation building multi-stage high-powered rockets. We are engineers, coders, machinists and organisers — most of whom joined knowing nothing about rocketry."
      />

      {/* Mission / vision */}
      <section className="py-24 sm:py-28">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal className="rounded-2xl border border-line bg-surface p-8 sm:p-10">
              <p className="eyebrow">Mission</p>
              <p className="mt-5 font-display text-2xl font-bold leading-snug sm:text-3xl">
                {site.mission}
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                The Kármán line sits 100 kilometres above sea level — the conventional boundary
                of space. It is an audacious target for a student club, and that is the point.
                It forces every design decision to answer to something bigger than a semester.
              </p>
            </Reveal>

            <Reveal delay={140} className="rounded-2xl border border-line bg-surface p-8 sm:p-10">
              <p className="eyebrow">Vision</p>
              <p className="mt-5 font-display text-2xl font-bold leading-snug sm:text-3xl">
                Leadership and technical skill, learned by building.
              </p>
              <p className="mt-5 leading-relaxed text-muted">{site.vision}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <StatsRow />

      {/* Design-build-fly cycle */}
      <section className="py-24 sm:py-32">
        <Container size="wide">
          <SectionHeading
            eyebrow="How we work"
            title="Design. Build. Fly. Analyse."
            description="Four phases, repeated every semester. Nothing about it is theoretical — the deadline is a launch window and the grade is whether the rocket comes back."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {cycle.map((c, i) => (
              <Reveal key={c.step} delay={i * 100} className="bg-surface p-8">
                <span className="font-mono text-[10px] tracking-[0.2em] text-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-bold text-uc-light">{c.step}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="pb-24 sm:pb-32">
        <Container size="wide">
          <SectionHeading
            eyebrow="Certifications"
            title="Members leave here certified."
            description="High-power rocketry certifications are issued by the National Association of Rocketry and Tripoli Rocketry Association. They are real credentials, and they follow you after graduation."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {certs.map((c, i) => (
              <Reveal
                key={c.level}
                delay={i * 110}
                className="rounded-2xl border border-line bg-surface p-8"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold">{c.level}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-uc-light">
                    {c.motors}
                  </span>
                </div>
                <Rule className="my-5" />
                <p className="text-sm leading-relaxed text-muted">{c.body}</p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
                  {c.count}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Safety */}
      <section className="pb-24 sm:pb-32">
        <Container size="wide">
          <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-full">
                <Image
                  src="/images/gallery/pad-03.jpg"
                  alt="Club members preparing a rocket for flight"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent lg:bg-gradient-to-r" />
              </div>
              <div className="p-8 sm:p-12">
                <p className="eyebrow">Safety</p>
                <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                  We handle energetics. So we take this seriously.
                </h2>
                <p className="mt-5 leading-relaxed text-muted">
                  A dedicated safety officer owns range procedure, energetics handling and
                  go/no-go authority for every flight. We operate under NAR and Tripoli safety
                  codes at certified ranges with the required FAA waivers.
                </p>
                <ul className="mt-7 space-y-3">
                  {[
                    "Written pre-flight checklists with explicit go/no-go criteria",
                    "Certified members only for motor and charge handling",
                    "Ground ejection testing before every recovery flight",
                    "Any member can call a scrub, no questions asked",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted">
                      <span
                        aria-hidden
                        className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-uc"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* What members get */}
      <section className="pb-24 sm:pb-32">
        <Container size="wide">
          <SectionHeading
            eyebrow="Why it is worth your time"
            title="What you actually walk away with."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {memberValue.map((m, i) => (
              <Reveal
                key={m.title}
                delay={i * 90}
                className="rounded-2xl border border-line bg-surface p-7"
              >
                <h3 className="text-lg font-bold">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{m.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="pb-24 sm:pb-32">
        <Container size="wide">
          <SectionHeading
            eyebrow="Executive board"
            title="The people running the club."
            description="Six officers elected by the membership. They set the technical direction, manage the budget, own safety, and keep the lights on."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <PersonCard person={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Come see what we are building."
        body="Meetings are open. Bring nothing but curiosity."
        primary={{ href: "/join", label: "How to join" }}
        secondary={{ href: "/projects", label: "See the vehicles" }}
      />
    </>
  );
}
