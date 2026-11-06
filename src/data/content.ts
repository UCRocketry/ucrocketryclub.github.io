/**
 * Assorted page content: stats, sponsor tiers, FAQ, roadmap.
 * Items marked PLACEHOLDER are written to be edited — they are reasonable
 * defaults for a collegiate rocketry team, not verified UCRC facts.
 */

/* ---------- headline stats (real, from the previous site) ---------- */
export const stats = [
  { value: 23, suffix: "", label: "L1 certifications", sub: "Level 1 high-power certified members" },
  { value: 8, suffix: "", label: "L2 certifications", sub: "Level 2 high-power certified members" },
  { value: 13, suffix: "+", label: "Years of experience", sub: "Combined across the exec board" },
  { value: 10116, suffix: " ft", label: "Altitude record", sub: "Double or Nothing, Spring 2026" },
];

/* ---------- three-audience routing (MIT pattern) ---------- */
export const audiences = [
  {
    kicker: "For students",
    title: "Join the team",
    body: "No experience required. Come to a meeting, pick a subteam, and start building. Members get certified, fly hardware, and graduate with something real on their résumé.",
    href: "/join",
    cta: "How to join",
  },
  {
    kicker: "For companies",
    title: "Sponsor a build",
    body: "Your support pays for motors, composites, avionics and travel. In return you get your logo on the airframe, access to our members, and a team that reports back with real flight data.",
    href: "/sponsors",
    cta: "Sponsorship options",
  },
  {
    kicker: "For everyone else",
    title: "Follow along",
    body: "Alumni, faculty, parents and rocketry people — watch what we launch next. We post build progress, flight footage and results after every campaign.",
    href: "/contact",
    cta: "Get in touch",
  },
];

/* ---------- roadmap to the Kármán line ---------- */
export const roadmap = [
  {
    phase: "Phase 01",
    title: "Reliable two-stage flight",
    status: "Complete",
    body: "Two-stage vehicles to 10,000 ft with redundant avionics, supersonic flight, and both passive and pyrotechnic staging demonstrated.",
    marker: "10,116 ft",
  },
  {
    phase: "Phase 02",
    title: "High altitude & autonomy",
    status: "Active",
    body: "A 30,000 ft class vehicle, in-house propulsion research, live telemetry downlink, and flight computers that make their own staging decisions.",
    marker: "30,000 ft",
  },
  {
    phase: "Phase 03",
    title: "Airframe qualification",
    status: "Planned",
    body: "Composite airframes qualified for sustained high-Mach flight, active stabilisation, and recovery systems that work in thin air.",
    marker: "100,000 ft",
  },
  {
    phase: "Phase 04",
    title: "The Kármán line",
    status: "Goal",
    body: "A student-built vehicle that crosses 100 kilometres. The reason the club exists.",
    marker: "100 km",
  },
];

/* ---------- what members actually do ---------- */
export const memberValue = [
  {
    title: "Get certified",
    body: "Members work toward NAR/Tripoli Level 1 and Level 2 high-power certifications. 23 of us hold L1, 8 hold L2.",
  },
  {
    title: "Own real hardware",
    body: "You will design a part, machine or print it, watch it fly, and find out whether you were right. That loop is the whole point.",
  },
  {
    title: "Learn the tools",
    body: "SolidWorks, OpenRocket, RASAero, KiCad, MATLAB, embedded C — the same stack aerospace employers screen for.",
  },
  {
    title: "Ship on a deadline",
    body: "Launch windows do not move. Working to a hard flight date teaches scheduling and integration in a way coursework cannot.",
  },
];

/* ---------- PLACEHOLDER: sponsorship tiers ---------- */
export const sponsorTiers = [
  {
    name: "Supporter",
    amount: "$250+",
    perks: [
      "Name listed on our website",
      "Thanked in post-launch social posts",
      "End-of-season results report",
    ],
  },
  {
    name: "Bronze",
    amount: "$500+",
    perks: [
      "Everything in Supporter",
      "Small logo on the airframe",
      "Logo on the team banner at events",
    ],
  },
  {
    name: "Silver",
    amount: "$1,500+",
    perks: [
      "Everything in Bronze",
      "Prominent logo placement on the airframe",
      "Résumé book access for recruiting",
      "Invitation to a launch day",
    ],
  },
  {
    name: "Gold",
    amount: "$3,000+",
    perks: [
      "Everything in Silver",
      "Primary logo placement on the vehicle",
      "On-campus tech talk or recruiting session",
      "Featured in all launch media",
    ],
  },
  {
    name: "Title",
    amount: "$7,500+",
    perks: [
      "Everything in Gold",
      "Naming rights on a flight vehicle",
      "Dedicated design review with the team",
      "Custom partnership built around your goals",
    ],
  },
];

/* ---------- PLACEHOLDER: what sponsorship funds ---------- */
export const fundingBreakdown = [
  { label: "Motors & energetics", pct: 35, note: "Commercial high-power motors, igniters, ejection charges" },
  { label: "Airframe materials", pct: 25, note: "Fiberglass, carbon fiber, aluminium, hardware" },
  { label: "Avionics & electronics", pct: 20, note: "PCB fabrication, sensors, batteries, GPS trackers" },
  { label: "Travel & competition", pct: 15, note: "Launch site travel, competition entry, lodging" },
  { label: "Tooling & shop", pct: 5, note: "Consumables, fixtures, test equipment" },
];

/* ---------- PLACEHOLDER: join FAQ ---------- */
export const faq = [
  {
    q: "Do I need experience with rockets?",
    a: "No. Most members join with none. If you can show up consistently and ask questions, we will teach you the rest — that is what the subteam structure is for.",
  },
  {
    q: "Do I have to be an engineering major?",
    a: "No. We need aerospace and mechanical engineers, but also CS and electrical students for avionics, business and marketing students for sponsorship, and anyone who can shoot decent photos on launch day.",
  },
  {
    q: "How much time does it take?",
    a: "Plan on a weekly general meeting plus subteam work. It scales with how involved you want to be — some members put in a couple of hours a week, others basically live in the shop before a launch.",
  },
  {
    q: "Is there a cost to join?",
    a: "Check CampusLink for current dues. Certification attempts have motor costs, but the club covers most build materials through sponsorship and university funding.",
  },
  {
    q: "What is an L1 or L2 certification?",
    a: "They are high-power rocketry certifications issued by the National Association of Rocketry and Tripoli. L1 lets you buy and fly H and I class motors, L2 covers J through L. You earn them by successfully flying and recovering a qualifying rocket.",
  },
  {
    q: "When can I join?",
    a: "Any time. The easiest entry points are the start of fall and spring semesters, but we onboard new members year-round — reach out and we will point you at whatever is being built right now.",
  },
];

/* ---------- how to join, step by step ---------- */
export const joinSteps = [
  {
    n: "01",
    title: "Come to a meeting",
    body: "Show up to a general meeting. Nothing to prepare, nothing to bring. Find the current time and location on CampusLink.",
  },
  {
    n: "02",
    title: "Join on CampusLink",
    body: "Register through UC's CampusLink so you land on the roster and the mailing list.",
  },
  {
    n: "03",
    title: "Pick a subteam",
    body: "Airframe, propulsion, avionics, recovery, simulation, payload, ops or business. Try more than one — most members do.",
  },
  {
    n: "04",
    title: "Start building",
    body: "You will be handed real work on an active vehicle almost immediately. Then you come to launch day and watch it fly.",
  },
];
