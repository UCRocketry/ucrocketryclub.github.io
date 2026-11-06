import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero } from "@/components/sections";
import { ProjectCard } from "@/components/cards";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Flight vehicles built and flown by the UC Rocketry Club, with real apogee, velocity and avionics data from every campaign.",
};

export default function ProjectsPage() {
  const flown = projects.filter((p) => p.status === "Flown");
  const upcoming = projects.filter((p) => p.status !== "Flown");

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="What we have put in the air."
        description="Every vehicle below flew. The numbers are what the flight computers recorded, not what the simulation predicted."
      />

      <section className="py-24 sm:py-28">
        <Container size="wide">
          <SectionHeading eyebrow="Flown" title="Flight record" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {flown.map((p, i) => (
              <Reveal key={p.slug} delay={i * 110}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {upcoming.length > 0 && (
        <section className="pb-24 sm:pb-32">
          <Container size="wide">
            <SectionHeading
              eyebrow="In development"
              title="What comes next"
              description="Longer-horizon programs the club is actively working toward."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {upcoming.map((p, i) => (
                <Reveal key={p.slug} delay={i * 110}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTABand
        title="Want your name on the next one?"
        body="New members work on active vehicles from the week they join."
      />
    </>
  );
}
