import { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import TrustedMarquee from '../components/TrustedMarquee'
import ProjectCarousel from '../components/ProjectCarousel'
import Footer from '../components/Footer'
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion'

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
    const start = 0
    const end = num
    const startTime = performance.now()
    const dur = duration * 1000

    function tick(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / dur, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      const current = Math.round(start + (end - start) * eased)
      setDisplay(current.toLocaleString())
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, value, duration])

  return <span ref={ref}>{display}{suffix}</span>
}

/* ─── Text reveal line-by-line ────────────────────────────────── */
function RevealText({ children, delay = 0 }) {
  return (
    <div style={{ overflow: 'hidden' }}>
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

/* ─── About ─────────────────────────────────────────────────────── */
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
          gap: '80px',
          alignItems: 'start',
        }}>
          {/* Left — text with line reveals */}
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
                lineHeight: 1.05, marginBottom: '32px',
              }}>
                I turn complexity into products people actually use.
              </h2>
            </RevealText>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15, ease: E }}
              style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '36px' }}
            >
              {['6+ Years', '40M+ Users', 'Lagos, Nigeria', 'Open to Remote'].map((tag) => (
                <span key={tag} style={{
                  fontSize: '0.78rem', fontWeight: 600, color: '#444',
                  backgroundColor: '#e8e8e4', padding: '7px 16px',
                  borderRadius: '100px', letterSpacing: '-0.01em',
                }}>
                  {tag}
                </span>
              ))}
            </motion.div>
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
                backgroundColor: '#1a1a1a',
                borderRadius: '20px',
                height: '360px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(ellipse at 40% 60%, rgba(19,73,1,0.4) 0%, transparent 65%)',
                }} />
                {/* Grain overlay on image placeholder */}
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

            {/* Philosophy grid — staggered reveal */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              {[
                { top: 'Clarity', bot: 'Over Clout' },
                { top: 'Frameworks', bot: 'Not Fluff' },
                { top: 'Long Game', bot: 'Always' },
              ].map((c, i) => (
                <motion.div
                  key={c.top}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: E }}
                  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.06)' }}
                  style={{
                    backgroundColor: '#fff', borderRadius: '14px',
                    padding: '20px 14px', textAlign: 'center',
                    border: '1px solid #e8e8e4', cursor: 'default',
                    transition: 'box-shadow 0.3s ease',
                  }}
                >
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F0F0F', letterSpacing: '-0.02em' }}>
                    {c.top}
                  </div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 500, color: '#aaa', marginTop: '4px' }}>
                    {c.bot}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Services ───────────────────────────────────────────────────── */
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
        display: 'grid',
        gridTemplateColumns: '72px 1fr auto',
        gap: '32px',
        alignItems: 'start',
        padding: '40px 0',
        borderBottom: '1px solid #eaeae6',
        cursor: 'default',
      }}
    >
      <motion.span
        animate={{ color: hovered ? '#134901' : '#ccc' }}
        transition={{ duration: 0.3 }}
        style={{
          fontSize: '0.68rem', fontWeight: 700,
          letterSpacing: '0.08em', paddingTop: '6px',
          textTransform: 'uppercase',
        }}
      >
        {s.num}
      </motion.span>

      <div>
        <motion.h3
          animate={{ x: hovered ? 8 : 0 }}
          transition={{ duration: 0.3, ease: E }}
          style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700,
            color: '#0F0F0F', letterSpacing: '-0.03em', marginBottom: '10px',
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
          <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.75, maxWidth: '520px', marginBottom: '16px', fontWeight: 400 }}>
            {s.desc}
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
            {s.tags.map((t) => (
              <span key={t} style={{
                fontSize: '0.72rem', fontWeight: 600, color: '#888',
                backgroundColor: '#f5f5f3', padding: '5px 14px',
                borderRadius: '100px', letterSpacing: '-0.01em',
              }}>
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Title-only preview when not hovered */}
        {!hovered && (
          <p style={{ fontSize: '0.88rem', color: '#aaa', margin: 0, fontWeight: 400 }}>
            {s.tags.join(' · ')}
          </p>
        )}
      </div>

      <motion.a
        href="mailto:quadrihorlar@gmail.com"
        animate={{
          backgroundColor: hovered ? '#0F0F0F' : 'transparent',
          color: hovered ? '#fff' : '#444',
          borderColor: hovered ? '#0F0F0F' : '#d8d8d4',
        }}
        transition={{ duration: 0.3 }}
        style={{
          fontSize: '0.82rem', fontWeight: 600,
          textDecoration: 'none', padding: '10px 22px',
          borderRadius: '100px', border: '1.5px solid #d8d8d4',
          whiteSpace: 'nowrap', alignSelf: 'flex-start',
          marginTop: '4px', display: 'inline-block',
        }}
      >
        Let's talk ↗
      </motion.a>
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
            letterSpacing: '-0.04em', lineHeight: 0.92,
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

/* ─── Mentorship ─────────────────────────────────────────────────── */
const pillars = [
  { n: '01', title: 'Clarity', desc: 'Define your positioning, your niche, and your offer. Become the obvious choice instead of the best-kept secret.' },
  { n: '02', title: 'Visibility', desc: 'Build content systems that work while you sleep. Consistent, strategic presence that attracts the right people.' },
  { n: '03', title: 'Income', desc: 'Monetise at your actual worth. Packages, rates, and pipelines for designers done with being underpaid.' },
]

/* Tilt card for glassmorphic mentorship cards */
function TiltCard({ children, delay = 0 }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale(1)'
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: E }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '36px 28px',
        backdropFilter: 'blur(12px)',
        transition: 'transform 0.15s ease-out',
        cursor: 'default',
      }}
    >
      {children}
    </motion.div>
  )
}

function Mentorship() {
  return (
    <section id="mentorship" style={{ backgroundColor: '#0F0F0F', padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient orb */}
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
          gap: '80px',
          alignItems: 'start',
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
                letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.05,
                marginBottom: '24px',
              }}>
                Turn your skill<br />into leverage.
              </h2>
            </RevealText>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: E }}
              style={{ fontSize: '1.02rem', color: '#555', lineHeight: 1.8, marginBottom: '40px', maxWidth: '380px', fontWeight: 400 }}
            >
              For African and global digital creatives ready to get clear, visible, and paid.
              No fluff. No gatekeeping. Just frameworks that work.
            </motion.p>

            <motion.a
              href="mailto:quadrihorlar@gmail.com"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ backgroundColor: '#fff', color: '#0F0F0F' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-block',
                fontSize: '0.875rem', fontWeight: 600, color: '#fff',
                padding: '13px 30px', borderRadius: '100px',
                textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.2)',
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
            >
              Book a mentorship call
            </motion.a>
          </div>

          {/* Right — glassmorphic tilt cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {pillars.map((p, i) => (
              <TiltCard key={p.n} delay={i * 0.1}>
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
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
