# DESIGN.md — Design System & Motion Specification
**Quadri Ismail Portfolio** · Read before writing any UI code.

---

## 1. Brand Identity

### Who Quadri Is (Design Must Reflect This)
Quadri is a Senior Product Designer who mentors African creatives.
His brand sits at the intersection of:
- **Structure** (he teaches frameworks, systems, process)
- **Energy** (he's building a movement for underpriced, underexposed talent)
- **Credibility** (40M+ users, Saudi Vision 2030, Nigeria's first digital civil service system)

The site must feel like a **senior designer's work** — not a portfolio template.
Think: Linear.app meets a high-end African creative studio.
Bold but restrained. Confident but not loud.

---

## 2. Color System — 60:30:10 Rule

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| 60% | Deep Forest Green | `#134901` | Backgrounds (dark sections), text, nav logo, headings |
| 30% | Bright Lime | `#CCFF00` | CTA buttons, accent text, hover states, highlights |
| 10% | Off-White | `#F8F8F6` | Page background, card backgrounds, breathing room |
| — | Dark Text | `#0F0F0F` | Body text on light backgrounds |
| — | Muted | `#888888` | Subtext, labels, secondary copy |
| — | Border | `#E0E0DC` | Card borders, dividers, subtle lines |
| — | White | `#FFFFFF` | Section backgrounds (alternating) |

### Color Rules
- **Never** use lime on a light background without sufficient contrast check
- **Never** put lime text directly on white — always use on `#134901` or dark bg
- The `-webkit-text-stroke` technique (lime fill + green stroke) is approved for display headings
- Lime is for **action and emphasis** — don't overuse it
- When in doubt: green background, lime accent, off-white text

### Tailwind Config Reference
```javascript
colors: {
  primary: { 900: '#134901', 700: '#1a6b01' },
  secondary: '#CCFF00',
  bg: '#F8F8F6',
  dark: '#0F0F0F',
  neutral: '#888888',
  border: '#E0E0DC',
}
```

---

## 3. Typography

### Font Family
**Inter** — loaded via Google Fonts (400, 500, 600, 700, 800, 900 weights)

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
```

### Type Scale
| Element | Size | Weight | Tracking | Notes |
|---------|------|--------|----------|-------|
| Display H1 | clamp(3rem, 8vw, 6.5rem) | 900 | -0.03em | Hero headlines only |
| H1 | clamp(2.5rem, 6vw, 5rem) | 900 | -0.03em | Page titles |
| H2 | clamp(2rem, 4vw, 3.5rem) | 900 | -0.03em | Section titles |
| H3 | 1.5rem–1.75rem | 800 | -0.02em | Card titles, subsections |
| Lead | clamp(1.1rem, 2vw, 1.35rem) | 400 | 0 | Hero subheadline |
| Body | 1.05rem | 400 | 0 | Line-height: 1.7–1.8 |
| Label | 0.7rem–0.85rem | 700 | 0.08em | ALL CAPS labels |
| Caption | 0.75rem–0.85rem | 400–600 | 0 | Meta info, timestamps |

### Typography Rules
- Headlines: tight leading (1.05–1.1), negative tracking (-0.02 to -0.03em)
- Body: generous leading (1.7–1.8) for readability
- Labels: always uppercase + wide tracking (0.08–0.1em)
- Never use font-weight below 400 on the web
- Display headlines may use the `-webkit-text-stroke` technique for outlined style
- Numbers in stats/metrics: weight 800–900, color `#134901` or `#CCFF00`

---

## 4. Spacing & Layout

### Container
- Max width: `1280px` centered with `margin: 0 auto`
- Horizontal padding: `24px` mobile, `48px` tablet, auto on desktop
- Never full-bleed text content — always in a container

### Section Spacing
- Section vertical padding: `80px` top/bottom (desktop), `48px` (mobile)
- Hero: `120px` top padding (accounts for fixed nav)
- Between sections: alternating `#fff` and `#F8F8F6` backgrounds for visual rhythm

### Grid System
- Case study cards: `repeat(auto-fill, minmax(320px, 1fr))`, gap `24px`
- Content columns: `2fr 1fr` (main + sidebar) on desktop, single column on mobile
- Meta grids: `repeat(auto-fit, minmax(140px, 1fr))` for project metadata

### Border Radius
- Cards: `16px`
- Buttons: `8px`
- Tags/pills: `100px` (fully rounded)
- Small accent elements: `4px` or `2px`

---

## 5. Component Patterns

### Buttons
```css
/* Primary CTA — use for main conversion actions */
.btn-secondary {
  background: #CCFF00;
  color: #134901;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
}

/* Ghost — secondary actions */
.btn-ghost {
  background: transparent;
  color: #134901;
  border: 2px solid #134901;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 700;
}
```

Button hover: `scale(1.05)` + `boxShadow: '0 8px 24px rgba(204,255,0,0.3)'`
Button tap: `scale(0.96)`

### Cards
```javascript
// Standard card style
{
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '32px',
  border: '1px solid #E0E0DC',
  position: 'relative',
  overflow: 'hidden',
}
// Top accent bar (3px, card's accent color)
// Hover: y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.1)'
```

### Labels (Uppercase Tags)
```javascript
{
  fontSize: '0.75–0.8rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08–0.1em',
  color: '#888', // or '#CCFF00' on dark bg
}
```

### Metric Display
```javascript
// Big stat number
{ fontSize: '2–2.5rem', fontWeight: 900, color: '#134901' }
// Or outlined style (on dark bg)
{ color: '#CCFF00', WebkitTextStroke: '1px #134901' }
```

---

## 6. Motion System — Framer Motion

### Philosophy (21.dev Inspired)
Motion should feel **physical, not mechanical**. Use spring physics and custom
easing curves. Animations should feel like objects with weight.

**Core easing curve** (used everywhere):
```javascript
ease: [0.22, 1, 0.36, 1]  // Fast out, slight overshoot feel
```

**Spring config** (for interactive elements):
```javascript
{ type: 'spring', stiffness: 400, damping: 28 }
```

### Current Motion Presets (motionConfig.js)

```javascript
// Stagger parent container
staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

// Stagger child item
staggerItem = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

// Fade up (for non-stagger use)
fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}
```

### Animations To Add (Not Yet Built)

**Scroll-triggered entrance** (use `whileInView` on all sections below the fold):
```javascript
<motion.div
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>
```

**Page transitions** (add to `_app.js` with `AnimatePresence`):
```javascript
<AnimatePresence mode="wait">
  <motion.div
    key={router.pathname}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
  >
    <Component {...pageProps} />
  </motion.div>
</AnimatePresence>
```

**Parallax on hero headline** (tie to scroll with `useScroll` + `useTransform`):
```javascript
const { scrollY } = useScroll()
const y = useTransform(scrollY, [0, 500], [0, -120])
const opacity = useTransform(scrollY, [0, 300], [1, 0])

<motion.h1 style={{ y, opacity }}>Complex SaaS</motion.h1>
```

**Magnetic button effect** (cursor attraction on hover):
```javascript
const handleMouseMove = (e) => {
  const rect = ref.current.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  animate(ref.current, { x: x * 0.3, y: y * 0.3 }, { type: 'spring', stiffness: 300 })
}
const handleMouseLeave = () => {
  animate(ref.current, { x: 0, y: 0 }, { type: 'spring', stiffness: 300 })
}
```

**Number counter animation** (for stats: 0 → 40M+):
```javascript
// Use framer-motion useMotionValue + useTransform + animate
// Trigger on whileInView
```

**Marquee/ticker**:
```javascript
<motion.div
  animate={{ x: ['0%', '-50%'] }}
  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
>
  {/* Duplicate content twice for seamless loop */}
</motion.div>
```

**Scroll progress bar** (on case study pages):
```javascript
const { scrollYProgress } = useScroll()
<motion.div
  style={{
    scaleX: scrollYProgress,
    position: 'fixed', top: 0, left: 0, right: 0,
    height: '3px', backgroundColor: '#CCFF00',
    transformOrigin: '0%', zIndex: 100
  }}
/>
```

### Motion Rules
- **Never** animate `width` or `height` — use `scaleX`/`scaleY` instead (GPU)
- **Always** use `will-change: transform` on animated elements
- Entrance animations: `once: true` — never repeat on scroll back
- Duration range: 0.3s (micro) → 0.8s (macro) — never over 1s
- Stagger delay between children: 0.08–0.12s
- Hover response must feel instant — max 0.2s
- Mobile: reduce motion if `prefers-reduced-motion` is set

---

## 7. Parallax & Scroll Effects

### Hero Parallax (Priority Implementation)
The hero headline should move upward slower than the scroll speed, creating depth:
- Headline `y`: 0 → -120px over first 500px of scroll
- Subheadline `y`: 0 → -80px (slightly less)
- Stats row `y`: 0 → -40px (least movement)
- Background element `y`: 0 → +60px (moves opposite direction for depth)

### Card Hover Parallax
Each case study card: on hover, the inner content shifts slightly upward (-4px)
while the card itself lifts (-8px). This creates a layered depth feeling.

### Section Background Parallax
Alternating sections (white / off-white) can have a very subtle background-position
shift on scroll (using CSS `background-attachment: fixed` or JS transform).

### Implementation Pattern
Always use Framer Motion `useScroll` + `useTransform` — never raw scroll listeners.
Wrap parallax logic in a custom hook `useParallax(value, distance)`.

---

## 8. 21st.dev Interaction Patterns

These are specific interaction patterns from 21.dev to reference and implement:

### Hover State Philosophy
Every interactive element must have a **clear physical response**:
- Cards: lift + shadow deepen + subtle scale
- Buttons: scale up slightly + glow shadow
- Links: color transition + optional underline grow from left
- Images: slight zoom (scale 1.03) within fixed container

### Micro-interactions
- Arrow icons (`→`): should animate `x: [0, 4, 0]` in a loop on hover
- Chevrons: rotate 90deg on expand
- Loading states: pulsing skeleton with lime accent
- Success states: checkmark draw animation (SVG path)

### Cursor Effects (Desktop Only)
Custom cursor: small circle (8px) that follows with a spring lag.
On hover over interactive elements: cursor scales up (32px) and changes color to lime.
Implementation: `useMousePosition` hook + `motion.div` with spring animation.

### Reveal Animations (21.dev Style)
Text lines reveal upward from a clipping mask:
```javascript
// Parent clips overflow
<div style={{ overflow: 'hidden' }}>
  // Child slides up from below
  <motion.p
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    Text content
  </motion.p>
</div>
```
Use this for the hero headline, section titles, and key statements.

---

## 9. Case Study Presentation Style

Each case study page follows this exact narrative arc (PAIPS model):

1. **Pain** — The Problem section: what was broken, why it mattered
2. **Anecdote** — Scale/context: who was affected and how many
3. **Insight** — The approach: what Quadri uniquely understood
4. **Principle** — The solution: the design decisions made
5. **Step** — Results: measurable outcomes with bold metrics

### Visual Hierarchy on Case Study Pages
```
[Back link]
[Accent color bar — 3px, 48px wide]
[Giant project title — display size]
[Subtitle — muted, 1.25rem]
[4-column metadata grid: Client / Role / Year / Industry]
[Full-width visual band — gradient or project image]
[2-column layout: Main content | Sticky sidebar]
  Main: Problem → Solution → Approach → Results + metrics grid
  Sidebar: Scale highlight | Tools | CTA button
[Next Case Study teaser]
```

### Metric Card Style
Each metric in the results section gets its own card:
- White background, rounded corners
- Label: ALL CAPS, small, muted
- Value: giant, 900 weight, lime with green stroke (outlined style)
- Hover: subtle lift

---

## 10. Content Voice & Tone

### Quadri's Brand Voice
- **Tone**: Confident mentor, not a salesperson. Big brother energy.
- **Register**: Professional but accessible. No jargon for jargon's sake.
- **Structure**: Lead with the outcome, then explain the process.
- **Length**: Short sentences. Paragraph max 3-4 lines.

### Writing Principles
- **Lead with results**: "Cut wait times 35%" not "Improved the onboarding flow"
- **Specificity wins**: "67,000 federal employees" not "thousands of users"
- **Active voice always**: "I designed" not "was designed"
- **No fluff phrases**: Avoid "leveraging synergies", "holistic approach", "best practices"
- **Numbers in headlines**: Metrics make headlines credible

### Section Headline Patterns
- Hero: Transformation statement — "Complex SaaS into clarity."
- Work: Simple direct label — "Case Studies"
- About: POV statement — "I turn complexity into products people actually use."
- Mentorship: Audience-direct — "Turn Your Skill Into Leverage"
- CTA prompts: Action-first — "Book a Consultation", "Let's Work Together"

### Label Conventions
- Section eyebrows (small caps above section title): "Selected Work" / "About" / "Services"
- Always uppercase, always tracked wide, always muted color
- Never use emoji in UI labels (exception: mentor content can use sparingly)

---

## 11. Accessibility & UX Standards

### Accessibility
- All interactive elements must have `:focus-visible` styles
- Color contrast: body text on backgrounds must meet WCAG AA (4.5:1)
- Lime `#CCFF00` on white does NOT pass contrast — always use on dark bg
- All images need `alt` text
- Respect `prefers-reduced-motion` — wrap animations in media query check

### UX Principles Applied
1. **Progressive disclosure** — show summary on cards, detail on click
2. **Visual hierarchy** — one dominant element per section
3. **Consistent affordances** — all cards behave the same way
4. **Conversion funnel** — every section has a next step
5. **Cognitive load** — never more than one primary CTA per section
6. **Whitespace is not emptiness** — it creates focus and breathing room

### Performance Rules
- Images: always use `next/image` with defined `width` and `height`
- Fonts: preconnect to Google Fonts domain, use `display=swap`
- Animations: GPU-only properties (transform, opacity) — never animate layout props
- Code split: each page should only load its own components

---

## 12. What Good Looks Like

When this site is done, it should:

1. Feel like it was built by Quadri himself — structured, confident, purposeful
2. Load in under 2 seconds on average African mobile connection
3. Convert visitors into consulting inquiries within the first scroll
4. Show up on Google for "product designer Nigeria" and "UX designer Lagos"
5. Make a hiring manager or potential client think: "This person is exactly what we need"
6. Make a young designer in Lagos think: "This is possible. I want to learn from him."

The site is both a **portfolio** and a **personal brand platform**.
Every pixel is either building credibility or building community.
If it does neither — it doesn't belong on the page.
