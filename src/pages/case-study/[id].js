import { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import caseStudies from '../../data/caseStudies'

const E = [0.22, 1, 0.36, 1]

export async function getStaticPaths() {
  return {
    paths: caseStudies.map((s) => ({ params: { id: s.id } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const study = caseStudies.find((s) => s.id === params.id)
  const idx = caseStudies.findIndex((s) => s.id === params.id)
  const next = caseStudies[(idx + 1) % caseStudies.length]
  return { props: { study, next } }
}

const bgMap = {
  nusuk:            '#0e2e08',
  'civil-service':  '#0b1f3a',
  'lean-insight':   '#1a0b2e',
  chisquares:       '#2e1a08',
  purchasa:         '#08212e',
}

/* Animated metric counter */
function MetricCounter({ value, label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!isInView) return
    const num = parseInt(value.replace(/[^0-9]/g, ''), 10)
    if (isNaN(num)) { setDisplay(value); return }
    const suffix = value.replace(/[0-9,]/g, '')
    const prefix = value.match(/^[^0-9]*/)?.[0] || ''
    const startTime = performance.now()

    function tick(now) {
      const progress = Math.min((now - startTime) / 1800, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setDisplay(prefix + Math.round(num * eased).toLocaleString() + suffix.replace(prefix, ''))
      if (progress < 1) requestAnimationFrame(tick)
      else setDisplay(value)
    }
    requestAnimationFrame(tick)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      style={{
        backgroundColor: '#fff', borderRadius: '16px',
        padding: '24px', border: '1px solid #e8e8e4',
        textAlign: 'center',
      }}
    >
      <div style={{
        fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.03em',
        lineHeight: 1, marginBottom: '8px', color: '#0F0F0F',
      }}>
        {display}
      </div>
      <div style={{
        fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase',
        letterSpacing: '0.08em', color: '#aaa',
      }}>
        {label}
      </div>
    </motion.div>
  )
}

/* Section block with reveal animation */
function Block({ title, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: E }}
      style={{ marginBottom: '64px' }}
    >
      <h2 style={{
        fontSize: '1.4rem', fontWeight: 800, color: '#0F0F0F',
        letterSpacing: '-0.02em', marginBottom: '24px',
        paddingBottom: '16px', borderBottom: '1px solid #e8e8e4',
      }}>
        {title}
      </h2>
      {children}
    </motion.div>
  )
}

export default function CaseStudyPage({ study, next }) {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0])
  const heroY = useTransform(heroProgress, [0, 1], [0, -80])
  const bg = bgMap[study.id] || '#111'

  return (
    <>
      <Head>
        <title>{study.title} — Quadri Ismail</title>
        <meta name="description" content={study.subtitle} />
      </Head>

      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: 'fixed', top: 0, left: 0, right: 0,
          height: '2px', backgroundColor: '#CCFF00',
          transformOrigin: '0%', zIndex: 200,
        }}
      />

      <Navigation />

      <main>
        {/* ── Cinematic Hero ── */}
        <section
          ref={heroRef}
          style={{
            backgroundColor: bg,
            paddingTop: '130px', paddingBottom: '100px',
            position: 'relative', overflow: 'hidden', minHeight: '70vh',
            display: 'flex', alignItems: 'flex-end',
          }}
        >
          {/* Giant watermark */}
          <motion.div
            style={{ opacity: heroOpacity }}
            aria-hidden
          >
            <div style={{
              position: 'absolute', bottom: '-5%', left: 0, right: 0,
              fontSize: 'clamp(6rem, 22vw, 20rem)', fontWeight: 900,
              color: 'rgba(255,255,255,0.03)', letterSpacing: '-0.05em',
              lineHeight: 1, userSelect: 'none', padding: '0 40px',
              overflow: 'hidden', whiteSpace: 'nowrap',
            }}>
              {study.title.toUpperCase()}
            </div>
          </motion.div>

          {/* Gradient overlay — gives depth */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: `linear-gradient(to top, ${bg} 0%, transparent 40%, transparent 70%, ${bg}cc 100%)`,
          }} />

          <motion.div
            style={{ y: heroY, opacity: heroOpacity, width: '100%', position: 'relative', zIndex: 1 }}
            className="wrap"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: E }}
            >
              {/* Back link */}
              <Link href="/#work" style={{ textDecoration: 'none' }}>
                <motion.span
                  whileHover={{ x: -3 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '0.82rem', fontWeight: 600,
                    color: 'rgba(255,255,255,0.4)', marginBottom: '48px',
                    cursor: 'pointer', letterSpacing: '0.02em',
                  }}
                >
                  ← All work
                </motion.span>
              </Link>

              {/* Industry + year */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}
              >
                <span style={{
                  fontSize: '0.72rem', fontWeight: 600,
                  color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  {study.industry}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem' }}>·</span>
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{study.year}</span>
              </motion.div>

              {/* Title — clip reveal */}
              <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
                <motion.h1
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15, ease: E }}
                  style={{
                    fontSize: 'clamp(2.5rem, 6.5vw, 6rem)', fontWeight: 800,
                    letterSpacing: '-0.04em', lineHeight: 0.95, color: '#fff',
                  }}
                >
                  {study.title}
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: E }}
                style={{
                  fontSize: '1.15rem', color: 'rgba(255,255,255,0.55)',
                  marginBottom: '56px', maxWidth: '600px', lineHeight: 1.65,
                }}
              >
                {study.subtitle}
              </motion.p>

              {/* Metadata row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: E }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '24px', maxWidth: '640px',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  paddingTop: '32px',
                }}
              >
                {[
                  { label: 'Client', val: study.client },
                  { label: 'Role', val: study.role },
                  { label: 'Year', val: study.year },
                  { label: 'Scale', val: study.scale },
                ].map((m) => (
                  <div key={m.label}>
                    <div style={{
                      fontSize: '0.68rem', fontWeight: 600, color: 'rgba(255,255,255,0.3)',
                      textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px',
                    }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>
                      {m.val}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Thin accent line */}
        <div style={{ height: '3px', background: `linear-gradient(90deg, ${study.color || '#134901'}, transparent 60%)` }} />

        {/* ── Body ── */}
        <section style={{ backgroundColor: '#f5f5f3', padding: '100px 0 140px' }}>
          <div className="wrap">
            <div
              className="case-study-body"
              style={{
                display: 'grid', gridTemplateColumns: '1fr 320px',
                gap: '72px', alignItems: 'start',
              }}
            >
              {/* Main */}
              <div>
                <Block title="The Problem">
                  <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.85 }}>{study.problem}</p>
                </Block>

                <Block title="The Solution" delay={0.05}>
                  <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.85 }}>{study.solution}</p>
                </Block>

                <Block title="Approach" delay={0.1}>
                  <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {study.approach.map((step, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.06, ease: E }}
                        style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}
                      >
                        <span style={{
                          minWidth: '28px', height: '28px', borderRadius: '50%',
                          backgroundColor: '#0F0F0F', color: '#fff',
                          fontSize: '0.72rem', fontWeight: 700,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0, marginTop: '2px',
                        }}>
                          {i + 1}
                        </span>
                        <p style={{ fontSize: '1.0rem', color: '#555', lineHeight: 1.8, margin: 0 }}>{step}</p>
                      </motion.li>
                    ))}
                  </ol>
                </Block>

                <Block title="Results" delay={0.15}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
                    {study.results.map((r, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05, ease: E }}
                        style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '1.0rem', color: '#555', lineHeight: 1.75 }}
                      >
                        <span style={{ color: '#134901', fontWeight: 800, flexShrink: 0, marginTop: '1px' }}>✓</span>
                        {r}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Metric counters */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '12px',
                  }}>
                    {study.metrics.map((m) => (
                      <MetricCounter key={m.label} value={m.value} label={m.label} />
                    ))}
                  </div>
                </Block>
              </div>

              {/* Sticky sidebar */}
              <div style={{ position: 'sticky', top: '88px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: E }}
                  style={{
                    backgroundColor: '#fff', borderRadius: '16px',
                    padding: '28px', border: '1px solid #e8e8e4',
                  }}
                >
                  <p style={{ fontSize: '0.68rem', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Scale</p>
                  <p style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F0F0F', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '6px' }}>{study.scale}</p>
                  <p style={{ fontSize: '0.82rem', color: '#aaa' }}>{study.industry}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: E }}
                  style={{
                    backgroundColor: '#fff', borderRadius: '16px',
                    padding: '28px', border: '1px solid #e8e8e4',
                  }}
                >
                  <p style={{ fontSize: '0.68rem', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Tools</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {study.tools.map((t) => (
                      <span key={t} style={{
                        fontSize: '0.78rem', fontWeight: 600, color: '#555',
                        backgroundColor: '#f5f5f3', padding: '5px 12px', borderRadius: '100px',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.a
                  href="mailto:quadrihorlar@gmail.com"
                  whileHover={{ backgroundColor: '#0d3801' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{
                    display: 'block', backgroundColor: '#134901',
                    color: '#fff', padding: '14px 24px', borderRadius: '12px',
                    fontWeight: 700, fontSize: '0.9rem',
                    textDecoration: 'none', textAlign: 'center',
                  }}
                >
                  Work with Quadri →
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Next case study ── */}
        <section style={{ backgroundColor: '#0A0A0A', padding: '80px 0' }}>
          <div className="wrap">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: E }}
              style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px',
              }}
            >
              <div>
                <p style={{
                  fontSize: '0.68rem', fontWeight: 600, color: '#444',
                  textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px',
                }}>
                  Next Case Study
                </p>
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)', fontWeight: 800,
                  color: '#fff', letterSpacing: '-0.03em', margin: 0,
                }}>
                  {next.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '8px' }}>{next.subtitle}</p>
              </div>

              <Link href={`/case-study/${next.id}`} style={{ textDecoration: 'none' }}>
                <motion.span
                  whileHover={{ backgroundColor: '#fff', color: '#0A0A0A' }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'inline-block', backgroundColor: 'transparent',
                    color: '#fff', padding: '14px 32px', borderRadius: '100px',
                    fontWeight: 700, fontSize: '0.875rem',
                    border: '1.5px solid rgba(255,255,255,0.15)',
                  }}
                >
                  View Case Study →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
