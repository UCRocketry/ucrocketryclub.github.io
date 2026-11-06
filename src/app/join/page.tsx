import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button, Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero } from "@/components/sections";
import { faq, joinSteps, memberValue } from "@/data/content";
import { teams } from "@/data/teams";
import { site, socials } from "@/data/site";

export const metadata: Metadata = {
  title: "Join",
  description:
    "How to join the University of Cincinnati Rocketry Club. No experience required — come to a meeting, pick a subteam, start building.",
};

const campusLink = socials.find((s) => s.label === "CampusLink")!.href;

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Join the team"
        title="You do not need to know anything about rockets."
        description="Most of our members joined with zero experience. What matters is showing up. The certifications, the CAD, the soldering iron — all of that is learnable, and we teach it."
      >
        <div className="flex flex-wrap gap-3">
          <Button href={campusLink} external>
            Register on CampusLink
          </Button>
          <Button href="/contact" variant="secondary">
            Ask a question
          </Button>
        </div>
      </PageHero>

      {/* Steps */}
      <section className="py-24 sm:py-28">
        <Container size="wide">
          <SectionHeading
            eyebrow="Getting started"
            title="Four steps, and none of them are hard."
          />

          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {joinSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100} className="relative bg-surface p-8">
                <span className="font-display text-4xl font-bold text-uc/30">{s.n}</span>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Value */}
      <section className="pb-24 sm:pb-28">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="What you get"
                title="Coursework teaches theory. This teaches consequence."
                description="A simulation that is wrong costs you a grade. A fin that is wrong costs you a rocket. That difference is why employers care that you did this."
              />
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              {memberValue.map((m, i) => (
                <Reveal
                  key={m.title}
                  delay={i * 90}
                  className="rounded-2xl border border-line bg-surface p-6"
                >
                  <h3 className="text-base font-bold">{m.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{m.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Non-engineers */}
      <section className="pb-24 sm:pb-28">
        <Container size="wide">
          <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <p className="eyebrow">Not an engineering major?</p>
                <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                  Good. We need you too.
                </h2>
                <p className="mt-5 leading-relaxed text-muted">
                  A rocket team is not only rocket scientists. Someone has to write the sponsor
                  packet, run the socials, shoot launch day, keep the books, and code the
                  flight software. If you are a CS, business, design or comms student, there is
                  a real job here with your name on it.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {teams.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/teams#${t.slug}`}
                      className="rounded-full border border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:border-uc hover:text-ink"
                    >
                      {t.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-full">
                <Image
                  src="/images/gallery/pad-04.jpg"
                  alt="Club members at a launch"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent lg:bg-gradient-to-l" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Questions we get a lot." align="center" />

          <div className="mt-14 divide-y divide-line-soft border-y border-line-soft">
            {faq.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                    <span className="text-base font-semibold text-ink transition-colors group-hover:text-uc-light sm:text-lg">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className="shrink-0 font-mono text-xl leading-none text-muted transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-10 text-center">
            <p className="text-sm text-muted">
              Still have a question?{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-uc-light underline-offset-4 hover:underline"
              >
                Email us
              </a>{" "}
              and an officer will get back to you.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABand
        title="The next launch does not build itself."
        body="Register on CampusLink and come to the next meeting."
        primary={{ href: campusLink, label: "Register on CampusLink" }}
        secondary={{ href: "/teams", label: "Browse subteams" }}
      />
    </>
  );
}
