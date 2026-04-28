import { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import TrustedMarquee from '../components/TrustedMarquee'
import ProjectCarousel from '../components/ProjectCarousel'
import Footer from '../components/Footer'
import MagneticButton from '../components/MagneticButton'
import SpotlightCard from '../components/SpotlightCard'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const E = [0.22, 1, 0.36, 1]

export default function Home() {
  return (
    <>
      <Head>
        <title>Quadri Ismail — Senior Product Designer</title>
        <meta name="description" content="Senior Product Designer with 6+ years shipping SaaS across Fintech, GovTech, and AI. Platforms designed for 40M+ users worldwide. Based in Lagos, Nigeria." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Quadri Ismail — Senior Product Designer" />
        <meta property="og:description" content="Complex SaaS into clarity. 40M+ users served across Fintech, GovTech, AI, and Web3." />
        <meta property="og:url" content="https://quadriismail.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://quadriismail.com" />
      </Head>
      <Navigation />
      <main>
        <Hero />
        <TrustedMarquee />
        <ProjectCarousel />
        <About />
        <Services />
        <Mentorship />
      </main>
      <Footer />
    </>
  )
}

/* ─── Animated number counter ─────────────────────────────────── */
function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return
    const num = parseInt(value.replace(/[^0-9]/g, ''), 10)
    if (isNaN(num)) { setDisplay(value); return }
    const startTime = performance.now()
    const dur = duration * 1000

    function tick(now) {
      const progress = Math.min((now - startTime) / dur, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setDisplay(Math.round(num * eased).toLocaleString())
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, value, duration])

  return <span ref={ref}>{display}{suffix}</span>
}

/* ─── Text reveal — with padding buffer to prevent clipping ──── */
function RevealText({ children, delay = 0 }) {
  return (
    <div style={{ overflow: 'hidden', paddingBottom: '6px' }}>
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay, ease: E }}
      >
        {children}
      </motion.div>
    </div>
  )
}

/* ─── Fade up ─────────────────────────────────────────────────── */
function FadeUp({ children, delay = 0, style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: E }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   ABOUT
   ═══════════════════════════════════════════════════════════════════ */
function About() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="about" ref={sectionRef} style={{ backgroundColor: '#f5f5f3', padding: '140px 0' }}>
      <div className="wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px', alignItems: 'start',
        }}>
          {/* Left — text */}
          <div>
            <RevealText>
              <span style={{
                fontSize: '0.72rem', fontWeight: 600, color: '#aaa',
                textTransform: 'uppercase', letterSpacing: '0.12em',
                display: 'block', marginBottom: '20px',
              }}>
                About
              </span>
            </RevealText>

            <RevealText delay={0.08}>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800,
                letterSpacing: '-0.04em', color: '#0F0F0F',
                lineHeight: 1.1, marginBottom: '32px',
              }}>
                I turn complexity into products people actually use.
              </h2>
            </RevealText>

            <FadeUp delay={0.15} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <p style={{ fontSize: '1.02rem', color: '#555', lineHeight: 1.8, fontWeight: 400 }}>
                Six years ago I started designing digital products in Lagos with one conviction:
                great design isn't about making things pretty — it's about making them work
                for the people who need them most.
              </p>
              <p style={{ fontSize: '1.02rem', color: '#555', lineHeight: 1.8, fontWeight: 400 }}>
                Since then I've shipped platforms that serve 40 million users, helped
                digitise Nigeria's federal civil service, and designed the experience for
                one of the world's largest annual human gatherings — Hajj.
              </p>
              <p style={{ fontSize: '1.02rem', color: '#555', lineHeight: 1.8, fontWeight: 400 }}>
                I'm open to senior design roles and consulting engagements, remote or hybrid.
                If you're building something complex, let's talk.
              </p>
            </FadeUp>

            {/* Tag pills */}
            <FadeUp delay={0.25} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '36px' }}>
              {['6+ Years', '40M+ Users', 'Lagos, Nigeria', 'Open to Remote'].map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ y: -2, backgroundColor: '#ddddd8' }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontSize: '0.78rem', fontWeight: 600, color: '#444',
                    backgroundColor: '#e8e8e4', padding: '7px 16px',
                    borderRadius: '100px', letterSpacing: '-0.01em',
                    cursor: 'default',
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </FadeUp>

            {/* CTA to About page */}
            <FadeUp delay={0.3} style={{ marginTop: '32px' }}>
              <Link href="/about" style={{ textDecoration: 'none' }}>
                <MagneticButton variant="outline" size="sm">
                  More about me →
                </MagneticButton>
              </Link>
            </FadeUp>
          </div>

          {/* Right — parallax photo + philosophy */}
          <div>
            <motion.div
              style={{ y: imgY }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: E }}
            >
              <div style={{
                backgroundColor: '#1a1a1a', borderRadius: '20px',
                height: '360px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', marginBottom: '20px',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(ellipse at 40% 60%, rgba(19,73,1,0.4) 0%, transparent 65%)',
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  backgroundRepeat: 'repeat', backgroundSize: '120px',
                  opacity: 0.08, mixBlendMode: 'overlay',
                }} />
                <span style={{
                  fontSize: '0.72rem', fontWeight: 600,
                  color: 'rgba(255,255,255,0.25)',
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  position: 'relative',
                }}>
                  Add photo: /public/images/quadri.jpg
                </span>
              </div>
            </motion.div>

            {/* Philosophy cards — SpotlightCard */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              {[
                { top: 'Clarity', bot: 'Over Clout' },
                { top: 'Frameworks', bot: 'Not Fluff' },
                { top: 'Long Game', bot: 'Always' },
              ].map((c, i) => (
                <SpotlightCard
                  key={c.top}
                  padding="20px 14px"
                  borderRadius="14px"
                  delay={0.1 + i * 0.08}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F0F0F', letterSpacing: '-0.02em' }}>
                    {c.top}
                  </div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 500, color: '#aaa', marginTop: '4px' }}>
                    {c.bot}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════════════════════════════ */
const services = [
  {
    num: '01',
    title: 'Product Design',
    desc: 'End-to-end design for SaaS products — from discovery and strategy through to high-fidelity prototypes and engineering handoff.',
    tags: ['User Research', 'Interaction Design', 'Prototyping', 'Handoff'],
  },
  {
    num: '02',
    title: 'Design Systems',
    desc: 'Scalable component libraries and design tokens that engineering teams actually use. Built to grow without breaking your product.',
    tags: ['Component Architecture', 'Token System', 'Documentation', 'Alignment'],
  },
  {
    num: '03',
    title: 'Brand Mentorship',
    desc: 'For designers building a personal brand. Positioning, content strategy, and monetisation — the practical stuff that moves the needle.',
    tags: ['Positioning', 'Content Systems', 'Rates & Pricing', 'Community'],
  },
]

function ServiceRow({ s, i }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: E }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid', gridTemplateColumns: '72px 1fr auto',
        gap: '32px', alignItems: 'start', padding: '40px 0',
        borderBottom: '1px solid #eaeae6', cursor: 'default',
      }}
    >
      <motion.span
        animate={{ color: hovered ? '#134901' : '#ccc' }}
        transition={{ duration: 0.3 }}
        style={{
          fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em',
          paddingTop: '6px', textTransform: 'uppercase',
        }}
      >
        {s.num}
      </motion.span>

      <div>
        <motion.h3
          animate={{ x: hovered ? 8 : 0, color: hovered ? '#134901' : '#0F0F0F' }}
          transition={{ duration: 0.3, ease: E }}
          style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700,
            letterSpacing: '-0.03em', marginBottom: '10px',
          }}
        >
          {s.title}
        </motion.h3>

        {/* Expandable description — fixed clipping with paddingBottom buffer */}
        <motion.div
          initial={false}
          animate={{ height: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: E }}
          style={{ overflow: 'hidden' }}
        >
          <div style={{ paddingBottom: '8px' }}>
            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.75, maxWidth: '520px', marginBottom: '16px', fontWeight: 400 }}>
              {s.desc}
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {s.tags.map((t) => (
                <motion.span
                  key={t}
                  whileHover={{ backgroundColor: '#eaeae6' }}
                  transition={{ duration: 0.15 }}
                  style={{
                    fontSize: '0.72rem', fontWeight: 600, color: '#888',
                    backgroundColor: '#f5f5f3', padding: '5px 14px',
                    borderRadius: '100px', letterSpacing: '-0.01em',
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {!hovered && (
          <p style={{ fontSize: '0.88rem', color: '#aaa', margin: 0, fontWeight: 400 }}>
            {s.tags.join(' · ')}
          </p>
        )}
      </div>

      <MagneticButton
        href="mailto:quadrihorlar@gmail.com"
        variant={hovered ? 'secondary' : 'outline'}
        size="sm"
        style={{ alignSelf: 'flex-start', marginTop: '4px' }}
      >
        Let's talk ↗
      </MagneticButton>
    </motion.div>
  )
}

function Services() {
  return (
    <section id="services" style={{ backgroundColor: '#fff', padding: '140px 0' }}>
      <div className="wrap">
        <RevealText>
          <span style={{
            fontSize: '0.72rem', fontWeight: 600, color: '#aaa',
            textTransform: 'uppercase', letterSpacing: '0.12em',
            display: 'block', marginBottom: '14px',
          }}>
            What I Do
          </span>
        </RevealText>
        <RevealText delay={0.06}>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800,
            color: '#0F0F0F', margin: 0,
            letterSpacing: '-0.04em', lineHeight: 1,
            marginBottom: '72px',
          }}>
            Services
          </h2>
        </RevealText>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {services.map((s, i) => (
            <ServiceRow key={s.num} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MENTORSHIP
   ═══════════════════════════════════════════════════════════════════ */
const pillars = [
  { n: '01', title: 'Clarity', desc: 'Define your positioning, your niche, and your offer. Become the obvious choice instead of the best-kept secret.' },
  { n: '02', title: 'Visibility', desc: 'Build content systems that work while you sleep. Consistent, strategic presence that attracts the right people.' },
  { n: '03', title: 'Income', desc: 'Monetise at your actual worth. Packages, rates, and pipelines for designers done with being underpaid.' },
]

function Mentorship() {
  return (
    <section id="mentorship" style={{ backgroundColor: '#0F0F0F', padding: '140px 0', position: 'relative' }}>
      {/* Ambient orb — NOT clipped by section overflow */}
      <div aria-hidden style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: '50%', paddingTop: '50%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(204,255,0,0.06) 0%, transparent 65%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '80px', alignItems: 'start',
        }}>
          {/* Left — headline */}
          <div>
            <RevealText>
              <span style={{
                fontSize: '0.72rem', fontWeight: 600, color: '#444',
                textTransform: 'uppercase', letterSpacing: '0.12em',
                display: 'block', marginBottom: '20px',
              }}>
                Mentorship
              </span>
            </RevealText>

            <RevealText delay={0.08}>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800,
                letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.1,
                marginBottom: '24px',
              }}>
                Turn your skill<br />into leverage.
              </h2>
            </RevealText>

            <FadeUp delay={0.2}>
              <p style={{ fontSize: '1.02rem', color: '#555', lineHeight: 1.8, marginBottom: '40px', maxWidth: '380px', fontWeight: 400 }}>
                For African and global digital creatives ready to get clear, visible, and paid.
                No fluff. No gatekeeping. Just frameworks that work.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <MagneticButton href="mailto:quadrihorlar@gmail.com" variant="outline-light">
                Book a mentorship call
              </MagneticButton>
            </FadeUp>
          </div>

          {/* Right — spotlight cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {pillars.map((p, i) => (
              <SpotlightCard
                key={p.n}
                delay={i * 0.1}
                bg="rgba(255,255,255,0.03)"
                borderColor="rgba(255,255,255,0.06)"
                hoverBorderColor="rgba(204,255,0,0.2)"
                spotlightColor="rgba(204,255,0,0.04)"
                dark
                padding="32px 28px"
              >
                <div style={{ display: 'flex', gap: '20px' }}>
                  <span style={{
                    fontSize: '0.68rem', fontWeight: 700, color: '#CCFF00',
                    letterSpacing: '0.08em', paddingTop: '4px', textTransform: 'uppercase',
                    minWidth: '32px',
                  }}>
                    {p.n}
                  </span>
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem', fontWeight: 700, color: '#fff',
                      letterSpacing: '-0.02em', marginBottom: '8px',
                    }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.75, margin: 0, fontWeight: 400 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
