"use client";

import { useState } from "react";
import { site } from "@/data/site";

const topics = [
  "Sponsorship enquiry",
  "Joining the club",
  "Media or press",
  "Collaboration",
  "Something else",
];

const field =
  "w-full rounded-xl border border-line bg-white/[0.02] px-4 py-3 text-sm text-ink placeholder:text-dim transition-colors focus:border-uc focus:bg-white/[0.04] focus:outline-none";

const label = "block font-mono text-[10px] uppercase tracking-[0.16em] text-dim";

/**
 * Composes a pre-filled email and hands it to the visitor's mail client.
 * No backend required, nothing to keep running.
 *
 * If you'd rather collect submissions in a dashboard, swap `handleSubmit`
 * for a POST to Formspree / Getform / a Next route handler — the markup
 * below already carries the right `name` attributes.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const subject = `[${data.get("topic")}] ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Organisation: ${data.get("org") || "—"}`,
      `Topic: ${data.get("topic")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className={`${field} mt-2.5`}
          />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={`${field} mt-2.5`}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="org">
            Company or organisation
          </label>
          <input
            id="org"
            name="org"
            autoComplete="organization"
            placeholder="Optional"
            className={`${field} mt-2.5`}
          />
        </div>
        <div>
          <label className={label} htmlFor="topic">
            What is this about? *
          </label>
          <select id="topic" name="topic" required className={`${field} mt-2.5`}>
            {topics.map((t) => (
              <option key={t} value={t} className="bg-surface">
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={label} htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us what you have in mind."
          className={`${field} mt-2.5 resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-full bg-uc px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-uc-light hover:shadow-[0_8px_30px_-6px_rgba(224,1,34,0.7)]"
        >
          Send message
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>

        <p aria-live="polite" className="text-xs text-dim">
          {sent
            ? "Your email client should have opened. If it didn't, write to us directly."
            : "Opens in your email client."}
        </p>
      </div>
    </form>
  );
}
