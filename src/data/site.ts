/**
 * Global site configuration.
 * Update contact details, socials and the sponsorship packet link here.
 */

export const site = {
  name: "University of Cincinnati Rocketry Club",
  shortName: "UC Rocketry Club",
  abbr: "UCRC",
  url: "https://www.ucrocketryclub.com",
  tagline: "Design. Build. Fly. Repeat.",
  description:
    "A student-run high-powered rocketry team at the University of Cincinnati, building two-stage vehicles on the road to the Kármán line.",
  mission: "Develop and launch a rocket capable of reaching the Kármán line.",
  vision:
    "As members of the University of Cincinnati Rocketry Club, we strive to foster leadership, technical, and team collaboration skills through the development of high-powered rockets.",
  email: "ucrocketryclub@gmail.com",
  university: "University of Cincinnati",
  location: "Cincinnati, Ohio",
  /** Replace with the hosted PDF once it has a permanent home. */
  sponsorshipPacket: "/sponsorship-packet.pdf",
} as const;

export const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ucrocketryclub/",
    handle: "@ucrocketryclub",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/university-of-cincinnati-rocketry-club",
    handle: "UC Rocketry Club",
  },
  {
    label: "X",
    href: "https://x.com/UCSpaceportCup",
    handle: "@UCSpaceportCup",
  },
  {
    label: "CampusLink",
    href: "https://campuslink.uc.edu/organization/uc-rocketry-club",
    handle: "UC Rocketry Club",
  },
] as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Teams", href: "/teams" },
  { label: "Projects", href: "/projects" },
  { label: "Join", href: "/join" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
] as const;
