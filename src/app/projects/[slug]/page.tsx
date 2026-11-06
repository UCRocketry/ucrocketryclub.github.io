import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Rule, StatusPill } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/sections";
import { getProject, projects } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: `${project.name} — UC Rocketry Club`,
      description: project.summary,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
        <div aria-hidden className="absolute inset-0">
          <Image
            src={project.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/85 via-void/70 to-void" />
          <div className="absolute inset-0 grid-lines opacity-40" />
        </div>

        <Container size="wide" className="relative">
          <Reveal>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
            >
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:-translate-x-1"
              >
                ←
              </span>
              All projects
            </Link>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <StatusPill status={project.status} />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
                {project.term}
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              {project.name}
            </h1>
            <p className="mt-4 font-mono text-sm uppercase tracking-[0.14em] text-uc-light">
              {project.subtitle}
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>
          </Reveal>

          <Reveal delay={180}>
            <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line-soft bg-line-soft sm:grid-cols-3">
              {project.headline.map((h) => (
                <div key={h.label} className="bg-void/80 px-7 py-7 backdrop-blur-sm">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
                    {h.label}
                  </dt>
                  <dd className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                    {h.value}
                    {h.note && (
                      <span className="ml-1 text-lg font-medium text-muted">{h.note}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Specs + avionics ---------------- */}
      <section className="py-20 sm:py-28">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow">Vehicle data</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Specifications</h2>

              <dl className="mt-9">
                {project.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col gap-1 border-b border-line-soft py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
                      {s.label}
                    </dt>
                    <dd className="font-display text-base font-semibold text-ink sm:text-right">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={140} className="lg:col-span-4 lg:col-start-9">
              <div className="rounded-2xl border border-line bg-surface p-7">
                <p className="eyebrow">Avionics stack</p>
                <ul className="mt-6 space-y-4">
                  {project.avionics.map((a, i) => (
                    <li key={a} className="flex gap-4">
                      <span className="font-mono text-[10px] text-dim">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed text-ink">{a}</span>
                    </li>
                  ))}
                </ul>
                <Rule className="my-6" />
                <p className="text-xs leading-relaxed text-dim">
                  Redundant flight computers let us cross-validate apogee detection and event
                  timing rather than trusting a single sensor.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------- Highlights ---------------- */}
      <section className="pb-20 sm:pb-28">
        <Container size="wide">
          <Reveal>
            <p className="eyebrow">Results</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Key outcomes</h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {project.highlights.map((h, i) => (
              <Reveal
                key={h}
                delay={i * 90}
                className="flex gap-5 rounded-2xl border border-line bg-surface p-7"
              >
                <span className="font-display text-2xl font-bold text-uc/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-muted">{h}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- Gallery ---------------- */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="pb-20 sm:pb-28">
          <Container size="wide">
            <Reveal>
              <p className="eyebrow">Gallery</p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((src, i) => (
                <Reveal
                  key={src + i}
                  delay={i * 90}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line"
                >
                  <Image
                    src={src}
                    alt={`${project.name} — image ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ---------------- Next project ---------------- */}
      <section className="pb-24">
        <Container size="wide">
          <Reveal>
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-line bg-surface px-8 py-10 transition-all duration-500 hover:border-uc/50 hover:bg-surface-2"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
                  Next project
                </p>
                <p className="mt-3 font-display text-2xl font-bold transition-colors group-hover:text-uc-light sm:text-3xl">
                  {next.name}
                </p>
              </div>
              <span
                aria-hidden
                className="text-3xl text-muted transition-transform duration-300 group-hover:translate-x-2 group-hover:text-uc-light"
              >
                →
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
