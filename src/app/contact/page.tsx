import type { Metadata } from "next";
import { Container, Rule } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/sections";
import { ContactForm } from "@/components/ContactForm";
import { site, socials } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the University of Cincinnati Rocketry Club about sponsorship, joining, media or collaboration.",
};

const routes = [
  {
    title: "Sponsorship",
    body: "Partnership packages, packets, invoicing and anything to do with funding a build.",
    href: "/sponsors",
    cta: "Sponsorship options",
  },
  {
    title: "Joining",
    body: "Meeting times, subteams, certifications and how to get on the roster.",
    href: "/join",
    cta: "How to join",
  },
  {
    title: "Media & press",
    body: "Photos, flight footage, interviews or coverage of a launch campaign.",
    href: `mailto:${site.email}`,
    cta: "Email the club",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        description="Sponsorship, joining, collaboration, press — or you just want to know what we are flying next. An officer reads everything that comes in."
      />

      <section className="py-24 sm:py-28">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Form */}
            <Reveal className="lg:col-span-7">
              <h2 className="text-2xl font-bold sm:text-3xl">Send us a message</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Fill this in and it will compose an email to the club with everything filled
                out. Or skip it and write to us directly.
              </p>
              <div className="mt-9">
                <ContactForm />
              </div>
            </Reveal>

            {/* Sidebar */}
            <Reveal delay={140} className="lg:col-span-4 lg:col-start-9">
              <div className="rounded-2xl border border-line bg-surface p-7">
                <p className="eyebrow">Direct</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 block break-all font-display text-lg font-bold text-ink transition-colors hover:text-uc-light"
                >
                  {site.email}
                </a>

                <Rule className="my-6" />

                <p className="eyebrow">Where we are</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {site.university}
                  <br />
                  {site.location}
                </p>

                <Rule className="my-6" />

                <p className="eyebrow">Follow along</p>
                <ul className="mt-4 space-y-3">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-baseline justify-between gap-4"
                      >
                        <span className="text-sm font-semibold text-ink transition-colors group-hover:text-uc-light">
                          {s.label}
                        </span>
                        <span className="font-mono text-[10px] text-dim">{s.handle}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Routing cards */}
      <section className="pb-28">
        <Container size="wide">
          <div className="grid gap-5 md:grid-cols-3">
            {routes.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 100}
                className="rounded-2xl border border-line bg-surface p-7"
              >
                <h3 className="text-lg font-bold">{r.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{r.body}</p>
                <a
                  href={r.href}
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-uc-light"
                >
                  {r.cta}
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
