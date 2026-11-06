# UC Rocketry Club — Website

A complete rebuild of [ucrocketryclub.com](https://www.ucrocketryclub.com/) as a multi-page
Next.js site. Dark aerospace aesthetic, UC red accents, content driven by editable data files.

---

## Running it

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install      # once
npm run dev      # http://localhost:3000
```

Other commands:

```bash
npm run build    # production build — run this before deploying
npm run start    # serve the production build locally
npm run lint     # eslint
```

---

## How the site is organised

```
src/
├─ app/                     one folder per route
│  ├─ page.tsx              /            home
│  ├─ about/                /about
│  ├─ teams/                /teams
│  ├─ projects/             /projects
│  │  └─ [slug]/            /projects/<rocket>   auto-generated per project
│  ├─ join/                 /join
│  ├─ sponsors/             /sponsors
│  ├─ contact/              /contact
│  ├─ not-found.tsx         404
│  ├─ layout.tsx            nav + footer + fonts + SEO metadata
│  └─ globals.css           colours, fonts, animations
│
├─ components/              reusable pieces (Nav, Footer, Hero, cards, …)
└─ data/                    ← EDIT THESE. All site content lives here.
   ├─ site.ts               name, email, socials, nav links, packet URL
   ├─ leadership.ts         exec board roster
   ├─ projects.ts           rockets + all flight data
   ├─ teams.ts              the eight subteams
   └─ content.ts            stats, roadmap, sponsor tiers, FAQ, join steps
```

**The point of `src/data/`:** next year's officers should never have to open a
component file. Changing the roster, adding a rocket, or updating a stat is a one-line
edit in a data file, and every page that uses it updates automatically.

---

## Common edits

### Update the exec board

Open `src/data/leadership.ts`. Each officer is an object with `name`, `role`, `photo`,
`major` and `bio`.

Photos live in `public/images/team/`. Use square images around 900×900 px and name
them `first-last.jpg`.

> ⚠️ The headshots currently in the repo were pulled from the old site and mapped to
> people by the order they appeared in the page source. **Please verify each one is
> attached to the right person** — if any are swapped, just change the `photo` path.

### Add a new rocket

Copy any block in `src/data/projects.ts`, give it a new `slug`, and fill in the numbers.
It automatically appears on `/projects` and gets its own page at `/projects/<slug>`.

### Change stats, roadmap, sponsor tiers or the FAQ

All in `src/data/content.ts`.

### Add sponsor logos

Drop logo files into `public/images/sponsors/`, then replace the placeholder grid near
the bottom of `src/app/sponsors/page.tsx` with real `<Image>` tags.

### Swap the hero photo

Replace `public/images/hero.jpg` with a wide shot (~2400×1350). A launch photo with sky
in it works best. Adjust framing via the `object-[50%_42%]` class in
`src/components/Hero.tsx` if the subject sits awkwardly.

---

## Placeholder content to replace

Written to be plausible and editable, **not** verified fact. Search for `PLACEHOLDER`
in `src/data/`:

| What | Where |
|---|---|
| Subteam names and descriptions | `src/data/teams.ts` |
| Sponsorship tiers and dollar amounts | `src/data/content.ts` → `sponsorTiers` |
| Budget breakdown percentages | `src/data/content.ts` → `fundingBreakdown` |
| Join FAQ answers | `src/data/content.ts` → `faq` |
| Officer bios and majors | `src/data/leadership.ts` |
| Club email address | `src/data/site.ts` |
| Sponsorship packet PDF | drop the file at `public/sponsorship-packet.pdf` |

---

## Design system

Colours and fonts are defined once in the `@theme` block at the top of
`src/app/globals.css`. Change them there and the whole site follows.

| Token | Value | Use |
|---|---|---|
| `void` | `#07080A` | page background |
| `surface` | `#0E1014` | cards, panels |
| `line` | `#232830` | borders |
| `ink` | `#EDEFF2` | primary text |
| `muted` | `#8B929E` | body text |
| `uc` | `#E00122` | UC red — primary accent |
| `flame` | `#F79103` | logo orange — secondary accent |

Fonts: **Space Grotesk** (headings), **Inter** (body), **JetBrains Mono** (data readouts).

Use them in classes as `bg-void`, `text-muted`, `border-line`, `text-uc-light`, etc.

---

## Notes

- **Contact form** composes an email in the visitor's mail client — no backend to run or
  pay for. To collect submissions in a dashboard instead, swap `handleSubmit` in
  `src/components/ContactForm.tsx` for a POST to Formspree, Getform, or a Next route
  handler. The form fields already carry the right `name` attributes.
- **Scroll animations** use a small IntersectionObserver in `src/components/Reveal.tsx`
  — no animation library. Content is never hidden when JavaScript is off.
- **Accessibility:** skip-to-content link, focus rings, `prefers-reduced-motion` honoured,
  semantic landmarks throughout.
- Every page is statically pre-rendered, so this can be hosted anywhere that serves
  static files or Node.

---

## Deploying

The build is static, so most hosts work with zero config:

- **Vercel / Netlify** — connect the repo, it detects Next.js automatically.
- **GitHub Pages / any static host** — add `output: "export"` and
  `images: { unoptimized: true }` to `next.config.ts`, run `npm run build`, and serve
  the generated `out/` directory.
