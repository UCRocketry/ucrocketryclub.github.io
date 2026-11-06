/**
 * Flight vehicles.
 *
 * All numbers below are carried over verbatim from the previous site.
 * To add a new rocket: copy a block, change the `slug`, and it automatically
 * appears on /projects and gets its own page at /projects/<slug>.
 */

export type Spec = { label: string; value: string; note?: string };

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  status: "Flown" | "In development" | "Planned";
  term: string;
  image: string;
  summary: string;
  /** Headline numbers shown on the card and in the detail hero. */
  headline: Spec[];
  /** Full spec table on the detail page. */
  specs: Spec[];
  avionics: string[];
  highlights: string[];
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: "double-or-nothing",
    name: "Double or Nothing",
    subtitle: "Two-stage high-powered rocket",
    status: "Flown",
    term: "Spring 2026",
    image: "/images/gallery/pad-01.jpg",
    summary:
      "Our highest-flying vehicle to date and the first to light a second stage in the air. Three independent flight computers logged the ascent, and a Pyrodex pellet handled sustainer ignition.",
    headline: [
      { label: "Apogee", value: "10,116.75", note: "ft" },
      { label: "Max velocity", value: "Mach 0.93" },
      { label: "Stages", value: "2" },
    ],
    specs: [
      { label: "Configuration", value: "Two-stage, in-line" },
      { label: "Apogee", value: "10,116.75 ft AGL" },
      { label: "Maximum velocity", value: "Mach 0.93" },
      { label: "Staging method", value: "Pyrodex pellet sustainer ignition" },
      { label: "Avionics redundancy", value: "Triple redundant" },
      { label: "Flight date", value: "Spring 2026" },
      { label: "Outcome", value: "Successful — nominal staging and recovery" },
    ],
    avionics: [
      "Featherweight Blue Raven",
      "PerfectFlite EasyMini",
      "Custom ESP32-S3 flight computer",
    ],
    highlights: [
      "First successful second-stage motor ignition in club history, using a Pyrodex pellet igniter train.",
      "Three fully independent flight computers flown simultaneously to cross-validate altitude and event timing.",
      "Set the club altitude record at 10,116.75 feet.",
      "In-house ESP32-S3 avionics board flown alongside commercial units for direct data comparison.",
    ],
    gallery: [
      "/images/gallery/pad-01.jpg",
      "/images/gallery/pad-02.jpg",
      "/images/gallery/pad-04.jpg",
    ],
  },
  {
    slug: "hardy-darty",
    name: "Hardy Darty",
    subtitle: "Two-stage boosted dart",
    status: "Flown",
    term: "Fall 2025",
    image: "/images/gallery/pad-02.jpg",
    summary:
      "A boosted dart that separated on drag alone — no pyrotechnic staging event. It broke the sound barrier and came back on a dual-parachute recovery system.",
    headline: [
      { label: "Apogee", value: "9,284", note: "ft" },
      { label: "Max velocity", value: "Mach 1.05" },
      { label: "Stages", value: "2" },
    ],
    specs: [
      { label: "Configuration", value: "Two-stage boosted dart" },
      { label: "Apogee", value: "9,284 ft AGL" },
      { label: "Maximum velocity", value: "Mach 1.05" },
      { label: "Staging method", value: "Passive drag separation" },
      { label: "Recovery", value: "Dual-parachute (drogue + main)" },
      { label: "Flight date", value: "Fall 2025" },
      { label: "Outcome", value: "Successful — supersonic, clean separation" },
    ],
    avionics: ["Featherweight Blue Raven", "Custom ESP32-S3 flight computer"],
    highlights: [
      "First supersonic flight for the club, peaking at Mach 1.05.",
      "Clean drag separation with no pyrotechnic staging hardware.",
      "Dual-parachute recovery brought the airframe back flight-ready.",
      "Proved out the custom ESP32-S3 avionics stack under transonic loads.",
    ],
    gallery: ["/images/gallery/pad-02.jpg", "/images/gallery/pad-03.jpg"],
  },
  {
    slug: "karman-program",
    name: "Kármán Program",
    subtitle: "Long-horizon 100 km vehicle development",
    status: "In development",
    term: "Ongoing",
    image: "/images/gallery/pad-04.jpg",
    summary:
      "The club's founding mission: a vehicle capable of crossing the Kármán line at 100 km. Every flight we run is a deliberate step up that ladder — altitude, staging, avionics autonomy, and propulsion.",
    headline: [
      { label: "Target", value: "100", note: "km" },
      { label: "Current best", value: "3.08 km" },
      { label: "Status", value: "Phase 2" },
    ],
    specs: [
      { label: "Objective", value: "Cross the Kármán line (100 km / 328,084 ft)" },
      { label: "Current altitude record", value: "10,116.75 ft (3.08 km)" },
      { label: "Approach", value: "Incremental multi-stage vehicle development" },
      { label: "Active workstreams", value: "Propulsion, avionics autonomy, recovery at altitude" },
      { label: "Status", value: "In development" },
    ],
    avionics: [
      "Custom flight computer roadmap (ESP32-S3 lineage)",
      "GPS telemetry and live downlink",
      "Redundant energetics control",
    ],
    highlights: [
      "Phase 1 — Complete: reliable two-stage flight to 10,000 ft with redundant avionics.",
      "Phase 2 — Active: 30,000 ft class vehicle, in-house propulsion research, live telemetry downlink.",
      "Phase 3 — Planned: high-altitude airframe qualification and active stabilisation.",
      "Phase 4 — Goal: 100 km. The Kármán line.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
