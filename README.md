# Quadri Ismail — Senior Portfolio
**quadriismail.com** | Next.js · Tailwind CSS · Framer Motion

---

## 🤖 AI Agent Handoff Brief

This README is written for the **next AI agent** continuing this build.
Read this fully before touching any code. Then read `DESIGN.md`.

---

## 👤 Who Is This For?

**Quadri Ismail** — Senior Product Designer, Brand Mentor, Lagos Nigeria.
- 6+ years shipping SaaS across Fintech, GovTech, AI
- Platforms he has designed serve 40M+ users worldwide
- He also mentors African digital creatives on personal brand + income
- His brand positioning: *"Clarity over clout. Frameworks, not fluff."*
- He is NOT a developer. All code decisions must be made by the AI agent.

**Voice of the site:** Senior. Structured. Results-driven. Not flashy — but impossible to ignore.

---

## 🏗️ What Has Been Built

### Infrastructure
- [x] Next.js 14 project scaffolded
- [x] Tailwind CSS configured with brand colors (60-30-10 rule)
- [x] Framer Motion installed (v11.1.7)
- [x] GitHub repo: `https://github.com/ismailquadri/quadriismail-portfolio`
- [x] Vercel deployed and connected to `quadriismail.com`
- [x] DNS configured — all domains show Valid Configuration on Vercel

### Pages Built
- [x] `/` — Homepage: Navigation + Hero + CaseStudies grid + Footer
- [x] `/case-study/[id]` — 5 dynamic case study pages, statically generated
- [x] `/404` — Custom error page

### Components Built
```
src/components/
├── motion/
│   └── motionConfig.js       # Framer Motion presets (stagger, fadeInUp, etc.)
├── Navigation.js              # Fixed nav, blur backdrop, animated CTA
├── Hero.js                    # Full-screen hero, staggered entrance
├── CaseStudies.js             # Grid section, scroll-triggered animation
├── CaseStudyCard.js           # Project cards, hover lift + shadow
└── Footer.js                  # Dark green footer, link groups
```

### Data Layer
```
src/data/caseStudies.js        # All 5 case studies as structured JS objects
```

---

## 📋 Case Studies (5 Total)

| ID | Title | Client | Scale | Hero Metric |
|----|-------|--------|-------|-------------|
| 1 | Nusuk | Ministry of Hajj & Umrah | 40M+ users | -35% wait time |
| 2 | Civil Service Reform | Fed. Ministry of Education, Nigeria | 67,000+ servants | +80% workflow speed |
| 3 | Lean Insight + AXN | Lean Business Services | Enterprise B2B | -15% handoff time |
| 4 | Chisquares | Chisquares | Global academics | +30% engagement |
| 5 | Purchasa | Purchasa | Crypto merchants | -70% user errors |

Each case study object contains: `id`, `title`, `subtitle`, `client`, `year`, `role`,
`scale`, `industry`, `color`, `metrics[]`, `problem`, `solution`, `approach[]`,
`results[]`, `tools[]`

---

## 🚧 Next Steps — Priority Order

### PRIORITY 1 — Visual Richness (Most Urgent)

The site is structurally complete but visually minimal. These additions make it
feel senior and world-class.

**1a. Hero Background**
Add an animated abstract background to the hero section. Options (pick one):
- Subtle animated grid (CSS grid lines, very faint, slight parallax movement)
- Grain/noise texture overlay (SVG filter, adds depth without distraction)
- Floating geometric shapes (very slow drift, low opacity, forest green tones)
Use Framer Motion for movement. Keep it minimal — content must stay readable.

**1b. Marquee Strip**
Add a horizontal scrolling ticker between Hero and Case Studies:
```
Fintech · GovTech · AI · Web3 · Healthcare · Research Analytics · 40M+ Users · 6+ Years · Saudi Vision 2030 ·
```
Style: dark green background, lime text, infinite scroll left, pause on hover.
Use Framer Motion `animate={{ x: [0, -50%] }}` with `repeat: Infinity`.

**1c. Case Study Card Images**
Each card should show a mockup/placeholder image above the content.
For now use a styled placeholder div with the card's accent color and the project
name in large type. When Quadri adds real images, they slot into `/public/images/`.

**1d. Case Study Hero Visual**
Each case study page needs a full-width visual band below the header metadata.
For now: gradient band using the case study's accent color at low opacity.
Later: real product screenshots.

### PRIORITY 2 — Missing Sections (Homepage)

**2a. About Section** (`id="about"`)
Currently linked in nav but does not exist. Build it:
- Quadri's story in 2-3 short paragraphs (see voice guide in DESIGN.md)
- Key stats: 6+ years · 40M+ users · Lagos, Nigeria · Open to remote
- Photo slot: `<img src="/images/quadri.jpg">` — ask user to upload photo
- Philosophy cards: "Clarity > Clout", "Frameworks not fluff", "Built for the long game"

**2b. Mentorship Section**
Separate from his consulting work. This is for designers/creatives he mentors.
- Headline: "Turn Your Skill Into Leverage"
- Sub: For African and global digital creatives ready to get clear, visible, and paid
- 3 pillars: Clarity (positioning), Visibility (content systems), Income (monetization)
- CTA: "Join the Community" or "Book a Mentorship Call"

**2c. Testimonials Strip**
Ask Quadri for 2-3 quotes from clients or mentees. Build a horizontal scroll or
simple 3-column grid. Each card: quote, name, role/company.

**2d. Services Block**
Three clear offerings:
1. Product Design — for companies building SaaS
2. Design Systems — for engineering teams needing scalable components
3. Brand Mentorship — for individual creatives building personal brand

### PRIORITY 3 — Motion Upgrades

See DESIGN.md for full motion spec. Key items:
- Parallax on hero headline text (y movement tied to scroll position)
- Page transitions using `AnimatePresence` in `_app.js`
- Magnetic CTA buttons (cursor attraction effect)
- Scroll progress bar on case study pages (thin lime line at top)
- Staggered number counter animation on stats (0 → 40M+, 0 → 6+)

### PRIORITY 4 — Mobile & Nav
- Mobile hamburger menu (Navigation.js is currently desktop-only)
- Test all sections at 375px viewport
- Touch-friendly tap targets on cards

### PRIORITY 5 — SEO & Performance
- Add `/public/og-image.png` (1200x630, dark green bg, lime headline)
- Add `next-sitemap` for sitemap.xml + robots.txt
- Add JSON-LD Person schema in `_document.js`
- Replace all `href="#"` placeholders with real destinations

---

## 🔧 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2.3 | React framework, SSG, routing |
| React | 18.3.1 | UI library |
| Framer Motion | 11.1.7 | All animations and transitions |
| Tailwind CSS | 3.4.3 | Utility-first styling |
| Inter | Google Fonts | Primary typeface |

---

## 📁 Full File Structure

```
quadri-portfolio/
├── public/
│   └── images/              ← ADD PROJECT IMAGES HERE
│       ├── nusuk.png
│       ├── civil-service.png
│       ├── lean-insight.png
│       ├── chisquares.png
│       ├── purchasa.png
│       └── quadri.jpg       ← Quadri's headshot
├── src/
│   ├── components/
│   │   ├── motion/
│   │   │   └── motionConfig.js
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── CaseStudies.js
│   │   ├── CaseStudyCard.js
│   │   └── Footer.js
│   ├── data/
│   │   └── caseStudies.js
│   ├── pages/
│   │   ├── _app.js
│   │   ├── _document.js
│   │   ├── index.js
│   │   ├── 404.js
│   │   └── case-study/
│   │       └── [id].js
│   └── styles/
│       └── globals.css
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── README.md                ← YOU ARE HERE
└── DESIGN.md                ← READ THIS NEXT
```

---

## 🌐 Deployment

- **Platform**: Vercel (auto-deploy on every push to `main`)
- **Repo**: `https://github.com/ismailquadri/quadriismail-portfolio`
- **Live**: `https://quadriismail.com`
- Push to `main` → live within ~60 seconds

---

## 📬 Contact Info (Used Throughout the Site)

- **Email**: quadrihorlar@gmail.com
- **LinkedIn**: linkedin.com/in/quadriismail
- **Behance**: behance.net/quadriismail
- **Domain**: quadriismail.com

---

## ⚠️ Hard Rules for This Project

1. Always read `DESIGN.md` before writing any component or animation
2. Do NOT change the color system — it was deliberately chosen by Quadri
3. Do NOT use Bootstrap, MUI, Chakra, or Ant Design — Tailwind + custom only
4. ALL animations must use Framer Motion — no CSS keyframes for interactions
5. Preserve and extend `motionConfig.js` — never replace it wholesale
6. Mobile-first — every component must work at 375px
7. No unnecessary dependencies — keep the bundle lean
8. When content is unclear, reference `src/data/caseStudies.js` and Quadri's CV
9. Every section must serve a conversion goal (view work → book call → join community)
10. Ask before adding new top-level pages
