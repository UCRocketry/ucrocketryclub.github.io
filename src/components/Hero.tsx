import Image from "next/image";
import { Button, Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const telemetry = [
  { k: "Altitude record", v: "10,116 ft" },
  { k: "Max velocity", v: "Mach 1.05" },
  { k: "Stages flown", v: "2" },
  { k: "Target", v: "100 km" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-10 pt-32">
      {/* Backdrop */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover object-[50%_42%] opacity-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/90 via-void/45 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/95 via-void/60 to-void/5" />
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(60%_100%_at_20%_0%,rgba(224,1,34,0.2),transparent_65%)]" />
      </div>

      <Container size="wide" className="relative">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden className="inline-block h-px w-8 bg-uc" />
            University of Cincinnati · High-powered rocketry
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-7 max-w-5xl text-[2.75rem] font-bold leading-[0.98] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Every launch is a step
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient">toward the</span>{" "}
            <span className="relative whitespace-nowrap text-uc-light">
              Kármán line
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-uc via-flame to-transparent"
              />
            </span>
            .
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            We are a student-run team at the University of Cincinnati designing, building and
            flying multi-stage high-powered rockets — and documenting every foot of altitude on
            the way to 100 kilometres.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/join">Join the team</Button>
            <Button href="/projects" variant="secondary">
              See our vehicles
            </Button>
          </div>
        </Reveal>

        {/* Telemetry strip */}
        <Reveal delay={440}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line-soft bg-line-soft sm:grid-cols-4">
            {telemetry.map((t) => (
              <div key={t.k} className="bg-void/70 px-5 py-4 backdrop-blur-sm">
                <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-dim">{t.k}</dt>
                <dd className="mt-1.5 font-display text-lg font-bold text-ink sm:text-xl">
                  {t.v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>

      {/* Scroll cue — sits in the right gutter so it never collides with content */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-dim [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="relative block h-16 w-px overflow-hidden bg-line">
          <span
            className="absolute left-0 top-0 block h-5 w-px bg-uc"
            style={{ animation: "ucrc-scan 2.4s cubic-bezier(0.4,0,0.2,1) infinite" }}
          />
        </span>
      </div>
    </section>
  );
}
