import { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import MagneticButton from '../components/MagneticButton'
import SpotlightCard from '../components/SpotlightCard'

const E = [0.22, 1, 0.36, 1]

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

const timeline = [
  { year: '2018', title: 'Started designing', desc: 'Began designing digital products in Lagos, working with early-stage startups across fintech and e-commerce.' },
  { year: '2019', title: 'First enterprise project', desc: 'Joined Lean Business Services as a product designer, shipping analytics tools for enterprise B2B clients.' },
  { year: '2020', title: 'Design systems lead', desc: 'Led my first design system project — building scalable component libraries for a multi-product SaaS platform.' },
  { year: '2021', title: 'EdTech & Research', desc: 'Designed Chisquares — a research analytics platform making complex statistical analysis accessible to academics worldwide.' },
  { year: '2022', title: 'GovTech at scale', desc: 'Shipped Nigeria\'s first digital civil service management system for 67,000+ federal employees. Zero retraining required.' },
  { year: '2023', title: '40M users — Nusuk', desc: 'Led product design for Nusuk, the pilgrimage platform serving 40M+ users across 180+ countries during Hajj.' },
  { year: '2024', title: 'Mentorship & consulting', desc: 'Launched a mentorship programme for African designers. Consulting on complex SaaS products globally.' },
]

const skills = [
  { cat: 'Design', items: ['Product Design', 'Interaction Design', 'Design Systems', 'Prototyping', 'User Research', 'Information Architecture'] },
  { cat: 'Tools', items: ['Figma', 'FigJam', 'Framer', 'Principle', 'Maze', 'Hotjar', 'Notion', 'Linear'] },
  { cat: 'Domains', items: ['Fintech', 'GovTech', 'EdTech', 'Web3', 'Enterprise SaaS', 'AI Platforms'] },
  { cat: 'Soft Skills', items: ['Cross-functional leadership', 'Stakeholder management', 'Design critiques', 'Workshop facilitation'] },
]

const values = [
  { title: 'Clarity over clout', desc: 'I optimise for understanding, not aesthetic trends. If a user can\'t figure it out in 5 seconds, I haven\'t done my job.' },
  { title: 'Frameworks, not fluff', desc: 'Every design decision is backed by a framework — user research, heuristic analysis, or data. Never vibes.' },
  { title: 'Ship, then polish', desc: 'I believe in getting real product into real hands fast, then iterating with real feedback. Pixel-perfection comes second to impact.' },
  { title: 'Accessibility is default', desc: 'Accessible design isn\'t an add-on. It\'s the baseline. Every product I ship meets or exceeds WCAG AA standards.' },
]

export default function AboutPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <>
      <Head>
        <title>About — Quadri Ismail</title>
        <meta name="description" content="Senior Product Designer with 6+ years shipping SaaS across Fintech, GovTech, and AI. Based in Lagos, Nigeria." />
        <meta property="og:title" content="About — Quadri Ismail" />
        <meta property="og:description" content="Senior Product Designer with 6+ years shipping SaaS across Fintech, GovTech, and AI." />
        <meta property="og:image" content="https://quadriismail.com/images/quadri.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navigation />
      <main id="main-content">
        {/* ══════════════════════════════════════════════════════════
           HERO
           ══════════════════════════════════════════════════════════ */}
        <section
          ref={heroRef}
          style={{
            backgroundColor: '#0F0F0F', paddingTop: '140px', paddingBottom: '100px',
            position: 'relative', overflow: 'hidden', minHeight: '70vh',
            display: 'flex', alignItems: 'center',
          }}
        >
          {/* Ambient orb */}
          <div aria-hidden style={{
            position: 'absolute', top: '10%', right: '-5%',
            width: '50%', paddingTop: '50%', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(19,73,1,0.15) 0%, transparent 65%)',
            filter: 'blur(80px)', pointerEvents: 'none',
          }} />

          <motion.div style={{ y: heroY, opacity: heroOpacity, width: '100%', position: 'relative', zIndex: 1 }} className="wrap">
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 320px',
              gap: '64px', alignItems: 'center',
            }} className="about-hero-grid">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: E }}
                  style={{ marginBottom: '32px' }}
                >
                  <span style={{
                    fontSize: '0.72rem', fontWeight: 600, color: '#555',
                    textTransform: 'uppercase', letterSpacing: '0.12em',
                  }}>
                    About Me
                  </span>
                </motion.div>

                <div style={{ overflow: 'hidden', paddingBottom: '10px', marginBottom: '8px' }}>
                  <motion.h1
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15, ease: E }}
                    style={{
                      fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 800,
                      letterSpacing: '-0.04em', lineHeight: 1.05, color: '#fff',
                    }}
                  >
                    I design products that work for the people who need them most.
                  </motion.h1>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35, ease: E }}
                  style={{
                    fontSize: '1.08rem', color: '#666', lineHeight: 1.8,
                    maxWidth: '560px', marginBottom: '40px',
                  }}
                >
                  Senior Product Designer based in Lagos, Nigeria. 6+ years turning
                  complex SaaS into clarity across Fintech, GovTech, AI, and Web3 —
                  serving 40M+ users in 180+ countries.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45, ease: E }}
                >
                  <MagneticButton href="mailto:me@quadriismail.com" variant="primary">
                    Get in touch
                  </MagneticButton>
                </motion.div>
              </div>

              {/* Profile image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: E }}
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '3 / 4',
                  borderRadius: '20px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/images/quadri.png"
                  alt="Quadri Ismail — Senior Product Designer"
                  fill
                  sizes="320px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════
           VIDEO INTRO
           ══════════════════════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#f5f5f3', padding: '100px 0' }}>
          <div className="wrap" style={{ maxWidth: '800px' }}>
            <FadeUp>
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#0F0F0F',
              }}>
                <video
                  src="/videos/intro.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/quadri.png"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p style={{
                fontSize: '0.85rem', color: '#888', textAlign: 'center',
                marginTop: '16px', fontWeight: 500,
              }}>
                A quick intro to who I am and how I work
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
           MY STORY
           ══════════════════════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#fff', padding: '120px 0' }}>
          <div className="wrap" style={{ maxWidth: '720px' }}>
            <RevealText>
              <span style={{
                fontSize: '0.72rem', fontWeight: 600, color: '#aaa',
                textTransform: 'uppercase', letterSpacing: '0.12em',
                display: 'block', marginBottom: '14px',
              }}>
                My Story
              </span>
            </RevealText>
            <RevealText delay={0.06}>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800,
                color: '#0F0F0F', letterSpacing: '-0.04em', lineHeight: 1.1,
                marginBottom: '48px',
              }}>
                From Lagos to 40 million users
              </h2>
            </RevealText>

            <FadeUp style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '64px' }}>
              <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.85 }}>
                I didn't start in design. I started with a problem — watching people around me
                struggle with digital tools that were clearly designed by someone who'd never met them.
                That frustration became a conviction: the best design happens when you sit with the
                people you're designing for.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.85 }}>
                Six years later, that conviction has taken me from Lagos startups to Saudi Arabia's
                Ministry of Hajj, from Nigeria's federal civil service to global research platforms.
                The through-line is always the same: complex problems, real users, measurable outcomes.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.85 }}>
                I don't believe in design as decoration. I believe in design as infrastructure —
                the invisible systems that make complex things feel simple. That's what I bring
                to every project.
              </p>
            </FadeUp>

            {/* Values */}
            <RevealText>
              <h3 style={{
                fontSize: '1.3rem', fontWeight: 800, color: '#0F0F0F',
                letterSpacing: '-0.02em', marginBottom: '24px',
              }}>
                Design values
              </h3>
            </RevealText>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="values-grid">
              {values.map((v, i) => (
                <SpotlightCard key={v.title} padding="24px" borderRadius="16px" delay={i * 0.06}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F0F0F', letterSpacing: '-0.01em', marginBottom: '8px' }}>
                    {v.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.7, margin: 0 }}>
                    {v.desc}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
           TIMELINE
           ══════════════════════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#f5f5f3', padding: '120px 0' }}>
          <div className="wrap" style={{ maxWidth: '720px' }}>
            <RevealText>
              <span style={{
                fontSize: '0.72rem', fontWeight: 600, color: '#aaa',
                textTransform: 'uppercase', letterSpacing: '0.12em',
                display: 'block', marginBottom: '14px',
              }}>
                Journey
              </span>
            </RevealText>
            <RevealText delay={0.06}>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800,
                color: '#0F0F0F', letterSpacing: '-0.04em', lineHeight: 1.1,
                marginBottom: '48px',
              }}>
                Career timeline
              </h2>
            </RevealText>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {timeline.map((t, i) => (
                <FadeUp key={t.year} delay={i * 0.04}>
                  <div style={{
                    display: 'grid', gridTemplateColumns: '72px 1fr',
                    gap: '24px', padding: '24px 0',
                    borderBottom: i < timeline.length - 1 ? '1px solid #e8e8e4' : 'none',
                  }}>
                    <span
                      style={{
                        fontSize: '0.82rem', fontWeight: 800, color: '#ccc',
                        letterSpacing: '-0.01em', paddingTop: '2px',
                      }}
                    >
                      {t.year}
                    </span>
                    <div>
                      <h3 style={{
                        fontSize: '1.02rem', fontWeight: 700, color: '#0F0F0F',
                        letterSpacing: '-0.01em', marginBottom: '6px',
                      }}>
                        {t.title}
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.7, margin: 0 }}>
                        {t.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
           SKILLS & TOOLS
           ══════════════════════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#fff', padding: '120px 0' }}>
          <div className="wrap">
            <RevealText>
              <span style={{
                fontSize: '0.72rem', fontWeight: 600, color: '#aaa',
                textTransform: 'uppercase', letterSpacing: '0.12em',
                display: 'block', marginBottom: '14px',
              }}>
                Capabilities
              </span>
            </RevealText>
            <RevealText delay={0.06}>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800,
                color: '#0F0F0F', letterSpacing: '-0.04em', lineHeight: 1.1,
                marginBottom: '48px',
              }}>
                Skills & tools
              </h2>
            </RevealText>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
            }}>
              {skills.map((s, i) => (
                <SpotlightCard key={s.cat} padding="28px" borderRadius="16px" delay={i * 0.06}>
                  <h3 style={{
                    fontSize: '0.68rem', fontWeight: 700, color: '#134901',
                    textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px',
                  }}>
                    {s.cat}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {s.items.map((item) => (
                      <span
                        key={item}
                        style={{
                          fontSize: '0.78rem', fontWeight: 600, color: '#555',
                          backgroundColor: '#f5f5f3', padding: '5px 12px',
                          borderRadius: '100px',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
           CTA
           ══════════════════════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#0F0F0F', padding: '120px 0', position: 'relative' }}>
          <div aria-hidden style={{
            position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
            width: '60%', paddingTop: '60%', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(204,255,0,0.04) 0%, transparent 65%)',
            filter: 'blur(80px)', pointerEvents: 'none',
          }} />

          <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '640px' }}>
            <RevealText>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800,
                letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.1,
                marginBottom: '20px',
              }}>
                Let's work together
              </h2>
            </RevealText>
            <FadeUp delay={0.1}>
              <p style={{
                fontSize: '1.05rem', color: '#555', lineHeight: 1.8,
                marginBottom: '40px',
              }}>
                I'm open to senior design roles and consulting engagements,
                remote or hybrid. If you're building something complex, let's talk.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <MagneticButton href="mailto:me@quadriismail.com" variant="primary" size="lg">
                Get in touch →
              </MagneticButton>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
