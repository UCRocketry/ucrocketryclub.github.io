import Image from "next/image";
import Link from "next/link";
import { StatusPill } from "@/components/ui";
import type { Project } from "@/data/projects";
import type { Officer } from "@/data/leadership";
import type { Team } from "@/data/teams";

/* ---------------- Project card ---------------- */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-uc/50 hover:shadow-[0_24px_60px_-24px_rgba(224,1,34,0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
        <div className="absolute left-5 top-5">
          <StatusPill status={project.status} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
          {project.term} · {project.subtitle}
        </p>
        <h3 className="mt-2.5 text-2xl font-bold transition-colors group-hover:text-uc-light">
          {project.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>

        <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-line-soft pt-5">
          {project.headline.map((h) => (
            <div key={h.label}>
              <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-dim">
                {h.label}
              </dt>
              <dd className="mt-1.5 font-display text-lg font-bold text-ink">
                {h.value}
                {h.note && <span className="ml-0.5 text-xs font-medium text-muted">{h.note}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Link>
  );
}

/* ---------------- Person card ---------------- */
export function PersonCard({ person }: { person: Officer }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-uc/40">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={person.photo}
          alt={person.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover grayscale transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90" />
      </div>

      <div className="relative p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-uc-light">
          {person.role}
        </p>
        <h3 className="mt-2 text-lg font-bold leading-tight">{person.name}</h3>
        {person.major && <p className="mt-1 text-xs text-dim">{person.major}</p>}
        {person.bio && (
          <p className="mt-3 text-sm leading-relaxed text-muted">{person.bio}</p>
        )}
      </div>
    </div>
  );
}

/* ---------------- Team card ---------------- */
export function TeamCard({ team, index }: { team: Team; index: number }) {
  return (
    <div
      id={team.slug}
      className="group relative scroll-mt-28 overflow-hidden rounded-2xl border border-line bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:border-uc/40 hover:bg-surface-2"
    >
      <div
        aria-hidden
        className="absolute -right-6 -top-4 font-display text-[110px] font-bold leading-none text-white/[0.03] transition-colors duration-500 group-hover:text-uc/[0.07]"
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative">
        <h3 className="text-xl font-bold">{team.name}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">{team.description}</p>

        <div className="mt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
            What you&rsquo;ll work on
          </p>
          <ul className="mt-3 space-y-2">
            {team.work.map((w) => (
              <li key={w} className="flex gap-2.5 text-sm text-muted">
                <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-uc" />
                {w}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {team.tools.map((t) => (
            <span
              key={t}
              className="rounded-md border border-line-soft bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
