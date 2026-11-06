/**
 * Executive board.
 *
 * NOTE: photo filenames were mapped from the previous site by DOM order.
 * If any headshot is attached to the wrong person, just swap the `photo` path.
 * Drop new images in /public/images/team/ (square, ~900x900).
 *
 * `bio` and `major` are placeholders — replace with each officer's real copy.
 */

export type Officer = {
  name: string;
  role: string;
  photo: string;
  major?: string;
  year?: string;
  bio?: string;
  linkedin?: string;
};

export const leadership: Officer[] = [
  {
    name: "Sam Theil",
    role: "President",
    photo: "/images/team/sam-theil.jpg",
    major: "Aerospace Engineering",
    bio: "Sets the technical roadmap, runs exec meetings, and owns the club's long-term push toward the Kármán line.",
  },
  {
    name: "Evan Langenderfer",
    role: "Vice President",
    photo: "/images/team/evan-langenderfer.jpg",
    major: "Aerospace Engineering",
    bio: "Coordinates the subteams week to week and keeps build schedules aligned with launch windows.",
  },
  {
    name: "Caleb Leach",
    role: "Secretary",
    photo: "/images/team/caleb-leach.jpg",
    major: "Mechanical Engineering",
    bio: "Keeps design documentation, meeting records, and the club's institutional memory in order.",
  },
  {
    name: "Ethan Kingsley",
    role: "Treasurer",
    photo: "/images/team/ethan-kingsley.jpg",
    major: "Mechanical Engineering",
    bio: "Manages the budget, purchasing, and reimbursements across every active build.",
  },
  {
    name: "Hayden Kiesewetter",
    role: "Safety Officer",
    photo: "/images/team/hayden-kiesewetter.jpg",
    major: "Aerospace Engineering",
    bio: "Owns range safety, energetics handling procedures, and NAR/Tripoli compliance for every flight.",
  },
  {
    name: "Kush Patel",
    role: "Outreach Officer",
    photo: "/images/team/kush-patel.jpg",
    major: "Computer Science",
    bio: "Runs recruitment, sponsor relations, and the club's public presence on and off campus.",
  },
];
