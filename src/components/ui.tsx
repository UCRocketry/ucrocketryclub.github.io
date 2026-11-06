import Link from "next/link";
import type { ReactNode } from "react";

/* ---------------- Container ---------------- */
export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  const max =
    size === "wide" ? "max-w-[1400px]" : size === "narrow" ? "max-w-3xl" : "max-w-6xl";
  return <div className={`mx-auto w-full ${max} px-5 sm:px-8 ${className}`}>{children}</div>;
}

/* ---------------- Eyebrow ---------------- */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-2.5 ${className}`}>
      <span aria-hidden className="inline-block h-px w-6 bg-uc" />
      {children}
    </p>
  );
}

/* ---------------- Section heading ---------------- */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow &&
        (centered ? (
          <p className="eyebrow mb-4">{eyebrow}</p>
        ) : (
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
        ))}
      <h2 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
    </div>
  );
}

/* ---------------- Button ---------------- */
type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300";

const buttonVariants = {
  primary:
    "bg-uc text-white hover:bg-uc-light shadow-[0_0_0_0_rgba(224,1,34,0.5)] hover:shadow-[0_8px_30px_-6px_rgba(224,1,34,0.7)] hover:-translate-y-0.5",
  secondary:
    "border border-line bg-white/[0.03] text-ink hover:border-dim hover:bg-white/[0.07] hover:-translate-y-0.5",
  ghost: "text-muted hover:text-ink",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: ButtonProps) {
  const cls = `${buttonBase} ${buttonVariants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (external || href.startsWith("http") || href.endsWith(".pdf")) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/* ---------------- Status pill ---------------- */
export function StatusPill({ status }: { status: string }) {
  const tone =
    status === "Flown" || status === "Complete"
      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
      : status === "In development" || status === "Active"
        ? "border-flame/30 bg-flame/10 text-flame"
        : "border-line bg-white/5 text-muted";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${tone}`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

/* ---------------- Hairline divider ---------------- */
export function Rule({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`h-px w-full bg-gradient-to-r from-transparent via-line to-transparent ${className}`}
    />
  );
}
