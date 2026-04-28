import { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import TrustedMarquee from '../components/TrustedMarquee'
import ProjectCarousel from '../components/ProjectCarousel'
import Footer from '../components/Footer'
import MagneticButton from '../components/MagneticButton'
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
        <meta property="og:image" content="https://quadriismail.com/images/quadri.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://quadriismail.com/images/quadri.png" />
        <link rel="canonical" href="https://quadriismail.com" />
      </Head>
      <Navigation />
      <main id="main-content">
        <Hero />
        <TrustedMarquee />
        <ProjectCarousel />
        <About />
        <Services />
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
   ABOUT — compact homepage teaser (drives to /about)
   ═══════════════════════════════════════════════════════════════════ */
function About() {
  return (
    <section id="about" style={{ backgroundColor: '#f5f5f3', padding: '140px 0' }}>
      <div className="wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px', alignItems: 'start',
        }}
          className="about-grid"
        >
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
                Six years designing digital products with one conviction:
                great design makes complex things work for the people who need them most.
                I've shipped platforms serving 40M+ users across Fintech, GovTech, AI, and Web3.
              </p>
            </FadeUp>

            {/* Tag pills */}
            <FadeUp delay={0.25} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '36px' }}>
              {['6+ Years', '40M+ Users', 'Lagos, Nigeria', 'Open to Remote'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '0.78rem', fontWeight: 600, color: '#444',
                    backgroundColor: '#e8e8e4', padding: '7px 16px',
                    borderRadius: '100px', letterSpacing: '-0.01em',
                  }}
                >
                  {tag}
                </span>
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

          {/* Right — design values (no photo placeholder) */}
          <div>
            <FadeUp delay={0.15}>
              <p style={{
                fontSize: '0.72rem', fontWeight: 600, color: '#aaa',
                textTransform: 'uppercase', letterSpacing: '0.12em',
                marginBottom: '20px',
              }}>
                Design Values
              </p>
            </FadeUp>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { title: 'Clarity over clout', desc: 'Optimise for understanding, not aesthetic trends.' },
                { title: 'Frameworks, not fluff', desc: 'Every decision backed by research, heuristics, or data.' },
                { title: 'Ship, then polish', desc: 'Real product into real hands fast. Iterate with real feedback.' },
                { title: 'Accessibility is default', desc: 'Not an add-on. Every product meets WCAG AA minimum.' },
              ].map((v, i) => (
                <FadeUp key={v.title} delay={0.2 + i * 0.06}>
                  <div style={{
                    padding: '20px 24px',
                    backgroundColor: '#fff',
                    borderRadius: '14px',
                    border: '1px solid rgba(0,0,0,0.06)',
                  }}>
                    <h4 style={{
                      fontSize: '0.92rem', fontWeight: 700, color: '#0F0F0F',
                      letterSpacing: '-0.01em', marginBottom: '4px',
                    }}>
                      {v.title}
                    </h4>
                    <p style={{
                      fontSize: '0.85rem', color: '#666', lineHeight: 1.65, margin: 0,
                    }}>
                      {v.desc}
                    </p>
                  </div>
                </FadeUp>
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
      className="services-row"
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

        {/* Expandable description */}
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
                <span
                  key={t}
                  style={{
                    fontSize: '0.72rem', fontWeight: 600, color: '#888',
                    backgroundColor: '#f5f5f3', padding: '5px 14px',
                    borderRadius: '100px', letterSpacing: '-0.01em',
                  }}
                >
                  {t}
                </span>
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
        href="mailto:me@quadriismail.com"
        variant={hovered ? 'secondary' : 'outline'}
        size="sm"
        style={{ alignSelf: 'flex-start', marginTop: '4px' }}
      >
        Let's talk →
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
