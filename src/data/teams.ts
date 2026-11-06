/**
 * Subteams.
 *
 * PLACEHOLDER CONTENT — these are the standard divisions of a collegiate
 * high-powered rocketry team, written to match how UCRC actually operates
 * (two-stage airframes, custom ESP32 avionics, dual-deploy recovery).
 * Edit names, descriptions and tool lists to match your real org chart.
 */

export type Team = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  work: string[];
  tools: string[];
};

export const teams: Team[] = [
  {
    slug: "airframe",
    name: "Airframe & Structures",
    blurb: "The body of the rocket — tubes, fins, couplers and everything holding it together at Mach 1.",
    description:
      "Airframe designs and manufactures the load-bearing structure of every vehicle. That means fin geometry and flutter margins, coupler joints that survive staging, composite layups, and machining the parts nobody sees until something goes wrong.",
    work: [
      "Fin design, flutter analysis and reinforcement",
      "Composite layups and fiberglass/carbon tube fabrication",
      "Coupler, bulkhead and shear-pin joint design",
      "Machining, 3D printing and shop fabrication",
    ],
    tools: ["SolidWorks", "Fusion 360", "Composite layup", "CNC & lathe work", "FDM printing"],
  },
  {
    slug: "propulsion",
    name: "Propulsion",
    blurb: "Motor selection, staging energetics, and the research pushing us past commercial hardware.",
    description:
      "Propulsion owns everything that makes thrust. Today that means selecting and characterising commercial high-power motors and designing reliable staging ignition trains. Longer term, it means research toward student-researched-and-developed motors.",
    work: [
      "Motor selection and thrust curve matching",
      "Staging ignition train design and testing",
      "Energetics handling procedures and safety",
      "SRAD propulsion research",
    ],
    tools: ["RASAero", "OpenRocket", "Thrust stand testing", "Propellant chemistry"],
  },
  {
    slug: "avionics",
    name: "Avionics",
    blurb: "Custom flight computers, sensor stacks, telemetry and the firmware that flies them.",
    description:
      "Avionics builds the electronics that make flight decisions. The team designs and flies a custom ESP32-S3 flight computer alongside commercial units, handles PCB layout and assembly, and writes the embedded firmware for event detection and data logging.",
    work: [
      "PCB schematic capture and board layout",
      "Embedded firmware for apogee and staging detection",
      "Barometric and IMU sensor fusion",
      "Ground station and live telemetry downlink",
    ],
    tools: ["KiCad", "ESP32-S3", "C/C++", "Python", "Soldering & bring-up"],
  },
  {
    slug: "recovery",
    name: "Recovery",
    blurb: "Getting the vehicle back in one piece — dual deploy, parachutes and separation charges.",
    description:
      "Recovery designs the systems that turn a falling airframe into a soft landing. Dual-deploy sequencing, black powder charge sizing, parachute selection and packing, shock cord and harness design, and the ground testing that proves it all works before flight day.",
    work: [
      "Dual-deploy sequencing and charge sizing",
      "Parachute selection, packing and descent rate analysis",
      "Shock cord, harness and hardware sizing",
      "Ground ejection testing",
    ],
    tools: ["Descent rate modelling", "Black powder sizing", "Ground test rigs"],
  },
  {
    slug: "simulation",
    name: "Simulation & Aerodynamics",
    blurb: "Predicting the flight before it happens — stability, drag, trajectory and dispersion.",
    description:
      "Simulation builds the models that tell us whether a design will fly and where it will land. Stability margins, drag estimation, transonic behaviour, wind-weathercocking, and Monte Carlo dispersion analysis to size the recovery area.",
    work: [
      "Six-degree-of-freedom trajectory simulation",
      "Stability margin and CP/CG analysis",
      "Drag and transonic aerodynamic modelling",
      "Monte Carlo landing dispersion studies",
    ],
    tools: ["OpenRocket", "RASAero II", "MATLAB", "Python", "CFD"],
  },
  {
    slug: "operations",
    name: "Operations & Safety",
    blurb: "Range procedures, launch logistics, certifications and NAR/Tripoli compliance.",
    description:
      "Operations makes launch day work. The team writes and enforces checklists, manages range coordination and waivers, tracks member certifications, and owns the safety culture that lets a student team handle energetics responsibly.",
    work: [
      "Pre-flight checklists and go/no-go criteria",
      "Range coordination, waivers and launch logistics",
      "L1/L2/L3 certification pathways for members",
      "Hazard analysis and safety documentation",
    ],
    tools: ["NAR & Tripoli standards", "FAA waiver process", "Checklist discipline"],
  },
  {
    slug: "payload",
    name: "Payload",
    blurb: "Everything the rocket carries that isn't required to fly it.",
    description:
      "Payload develops the experiments and secondary systems that ride along. Scientific instrumentation, deployable systems, onboard imaging, and integration work to make sure a payload never compromises the vehicle's flight or recovery.",
    work: [
      "Experiment definition and instrumentation",
      "Deployable and separable payload mechanisms",
      "Onboard imaging and data capture",
      "Structural and electrical integration",
    ],
    tools: ["Embedded sensors", "CAD integration", "Data analysis"],
  },
  {
    slug: "business",
    name: "Business & Outreach",
    blurb: "Funding, sponsors, recruitment and telling people what we build.",
    description:
      "Business & Outreach keeps the club funded and growing. The team builds sponsor relationships, produces the sponsorship packet, runs recruitment and campus events, manages the club's media, and handles the budget alongside the treasurer.",
    work: [
      "Sponsor prospecting, packets and relationship management",
      "Budget planning and grant applications",
      "Recruitment events and new-member onboarding",
      "Photography, video and social media",
    ],
    tools: ["Design tools", "Copywriting", "Event planning", "Photography"],
  },
];

export function getTeam(slug: string) {
  return teams.find((t) => t.slug === slug);
}
