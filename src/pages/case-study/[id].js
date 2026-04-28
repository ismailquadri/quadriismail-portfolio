import { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import MagneticButton from '../../components/MagneticButton'
import SpotlightCard from '../../components/SpotlightCard'
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
  nusuk:           '#0e2e08',
  'civil-service': '#0b1f3a',
  'lean-insight':  '#1a0b2e',
  chisquares:      '#2e1a08',
  purchasa:        '#08212e',
}

/* -- Animated metric counter -- */
function MetricCounter({ value, label, prefix = '', context }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!isInView) return
    const num = parseInt(value.replace(/[^0-9]/g, ''), 10)
    if (isNaN(num)) { setDisplay(value); return }
    const startTime = performance.now()

    function tick(now) {
      const progress = Math.min((now - startTime) / 1800, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setDisplay(Math.round(num * eased).toLocaleString())
      if (progress < 1) requestAnimationFrame(tick)
      else setDisplay(value)
    }
    requestAnimationFrame(tick)
  }, [isInView, value])

  return (
    <SpotlightCard padding="28px" borderRadius="16px">
      <div ref={ref} style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em',
          lineHeight: 1, marginBottom: '8px', color: '#0F0F0F',
        }}>
          {prefix}{display}
        </div>
        <div style={{
          fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '0.08em', color: '#aaa', marginBottom: context ? '8px' : 0,
        }}>
          {label}
        </div>
        {context && (
          <div style={{
            fontSize: '0.75rem', color: '#999', lineHeight: 1.5, fontStyle: 'italic',
          }}>
            {context}
          </div>
        )}
      </div>
    </SpotlightCard>
  )
}

/* -- Chapter heading -- */
function ChapterHead({ number, title, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: E }}
      style={{
        display: 'flex', alignItems: 'center', gap: '16px',
        marginBottom: '32px', paddingBottom: '20px',
        borderBottom: '1px solid #e8e8e4',
      }}
    >
      <span style={{
        fontSize: '0.65rem', fontWeight: 700, color: '#134901',
        letterSpacing: '0.1em', textTransform: 'uppercase',
        backgroundColor: 'rgba(19,73,1,0.06)', padding: '5px 12px',
        borderRadius: '100px',
      }}>
        {number}
      </span>
      <h2 style={{
        fontSize: '1.5rem', fontWeight: 800, color: '#0F0F0F',
        letterSpacing: '-0.02em', margin: 0,
      }}>
        {title}
      </h2>
    </motion.div>
  )
}

/* -- Fade-up block -- */
function FadeUp({ children, delay = 0, style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay, ease: E }}
      style={style}
    >
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
        <title>{study.headline} — Quadri Ismail</title>
        <meta name="description" content={study.tagline} />
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

      <main id="main-content">
        {/* ══════════════════════════════════════════════════════════
           CINEMATIC HERO
           ══════════════════════════════════════════════════════════ */}
        <section
          ref={heroRef}
          style={{
            backgroundColor: bg,
            paddingTop: '130px', paddingBottom: '100px',
            position: 'relative', overflow: 'hidden', minHeight: '75vh',
            display: 'flex', alignItems: 'flex-end',
          }}
        >
          {/* Ghost watermark */}
          <motion.div style={{ opacity: heroOpacity }} aria-hidden>
            <div style={{
              position: 'absolute', bottom: '-5%', left: 0, right: 0,
              fontSize: 'clamp(6rem, 22vw, 20rem)', fontWeight: 900,
              color: 'rgba(255,255,255,0.03)', letterSpacing: '-0.05em',
              lineHeight: 1, userSelect: 'none', padding: '0 40px',
              overflow: 'hidden', whiteSpace: 'nowrap',
            }}>
              {study.headline.toUpperCase()}
            </div>
          </motion.div>

          {/* Gradient overlays */}
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
                  whileHover={{ x: -3, color: 'rgba(255,255,255,0.7)' }}
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
                  color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em',
                }}>
                  {study.industry}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem' }}>·</span>
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{study.year}</span>
              </motion.div>

              {/* Headline */}
              <div style={{ overflow: 'hidden', paddingBottom: '10px', marginBottom: '12px' }}>
                <motion.h1
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15, ease: E }}
                  style={{
                    fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)', fontWeight: 800,
                    letterSpacing: '-0.04em', lineHeight: 1, color: '#fff',
                  }}
                >
                  {study.headline}
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: E }}
                style={{
                  fontSize: '1.15rem', color: 'rgba(255,255,255,0.55)',
                  marginBottom: '56px', maxWidth: '620px', lineHeight: 1.65,
                }}
              >
                {study.tagline}
              </motion.p>

              {/* Metadata grid */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: E }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: '24px', maxWidth: '720px',
                  borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '32px',
                }}
              >
                {[
                  { label: 'Client', val: study.client },
                  { label: 'Role', val: study.role },
                  { label: 'Duration', val: study.duration },
                  { label: 'Team', val: study.team },
                  { label: 'Scale', val: study.scale },
                ].map((m) => (
                  <div key={m.label}>
                    <div style={{
                      fontSize: '0.68rem', fontWeight: 600, color: 'rgba(255,255,255,0.3)',
                      textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px',
                    }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff' }}>{m.val}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Accent line */}
        <div style={{ height: '3px', background: `linear-gradient(90deg, ${study.color || '#134901'}, transparent 60%)` }} />

        {/* ══════════════════════════════════════════════════════════
           STORYTELLING BODY
           ══════════════════════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#f5f5f3', padding: '100px 0 0' }}>
          <div className="wrap">
            <div className="case-study-body" style={{
              display: 'grid', gridTemplateColumns: '1fr 320px',
              gap: '72px', alignItems: 'start',
            }}>
              {/* -- Main content -- */}
              <div>

                {/* My Role — NEW */}
                {study.myRole && (
                  <div style={{ marginBottom: '80px' }}>
                    <ChapterHead number="00" title="My Role" />
                    <FadeUp>
                      <p style={{
                        fontSize: '1.05rem', color: '#444', lineHeight: 1.85,
                        padding: '24px 28px',
                        backgroundColor: '#fff',
                        borderRadius: '14px',
                        border: '1px solid rgba(0,0,0,0.06)',
                      }}>
                        {study.myRole}
                      </p>
                    </FadeUp>
                  </div>
                )}

                {/* Chapter 1: Context */}
                <div style={{ marginBottom: '80px' }}>
                  <ChapterHead number="01" title="Context" />
                  <FadeUp>
                    <p style={{ fontSize: '1.08rem', color: '#444', lineHeight: 1.85, marginBottom: '32px' }}>
                      {study.context.text}
                    </p>
                  </FadeUp>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
                    {study.context.stats.map((s, i) => (
                      <SpotlightCard key={s.label} padding="20px" borderRadius="14px" delay={i * 0.06}>
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F0F0F', letterSpacing: '-0.03em', lineHeight: 1 }}>
                            {s.value}
                          </div>
                          <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '6px' }}>
                            {s.label}
                          </div>
                        </div>
                      </SpotlightCard>
                    ))}
                  </div>
                </div>

                {/* Chapter 2: The Challenge */}
                <div style={{ marginBottom: '80px' }}>
                  <ChapterHead number="02" title="The Challenge" />
                  <FadeUp>
                    <p style={{
                      fontSize: '1.2rem', color: '#0F0F0F', lineHeight: 1.7,
                      fontWeight: 600, fontStyle: 'italic', marginBottom: '32px',
                      paddingLeft: '24px', borderLeft: '3px solid #134901',
                    }}>
                      {study.challenge.text}
                    </p>
                  </FadeUp>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {study.challenge.painPoints.map((p, i) => (
                      <FadeUp key={i} delay={i * 0.05}>
                        <div style={{
                          display: 'flex', gap: '14px', alignItems: 'flex-start',
                          padding: '16px 20px', backgroundColor: '#fff',
                          borderRadius: '12px', border: '1px solid #eaeae6',
                        }}>
                          <span style={{
                            width: '6px', height: '6px', borderRadius: '50%',
                            backgroundColor: '#dc2626', flexShrink: 0, marginTop: '8px',
                          }} />
                          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>{p}</p>
                        </div>
                      </FadeUp>
                    ))}
                  </div>
                </div>

                {/* Chapter 3: The Process */}
                <div style={{ marginBottom: '80px' }}>
                  <ChapterHead number="03" title="The Process" />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {study.process.map((step, i) => (
                      <ProcessStep key={i} step={step} index={i} />
                    ))}
                  </div>
                </div>

                {/* Chapter 4: The Solution */}
                <div style={{ marginBottom: '80px' }}>
                  <ChapterHead number="04" title="The Solution" />
                  <FadeUp>
                    <p style={{ fontSize: '1.08rem', color: '#444', lineHeight: 1.85, marginBottom: '32px' }}>
                      {study.solution.text}
                    </p>
                  </FadeUp>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="values-grid">
                    {study.solution.keyFeatures.map((f, i) => (
                      <SpotlightCard key={i} padding="20px" borderRadius="14px" delay={i * 0.06}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <span style={{ color: '#134901', fontWeight: 800, fontSize: '1rem', flexShrink: 0, marginTop: '1px' }}>✓</span>
                          <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.7, margin: 0 }}>{f}</p>
                        </div>
                      </SpotlightCard>
                    ))}
                  </div>
                </div>

                {/* Chapter 5: Impact */}
                <div style={{ marginBottom: '80px' }}>
                  <ChapterHead number="05" title="Impact" />
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '12px', marginBottom: '32px',
                  }}>
                    {study.impact.metrics.map((m) => (
                      <MetricCounter key={m.label} value={m.value} label={m.label} prefix={m.prefix} context={m.context} />
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {study.impact.qualitative.map((q, i) => (
                      <FadeUp key={i} delay={i * 0.05}>
                        <div style={{
                          display: 'flex', gap: '12px', alignItems: 'flex-start',
                          fontSize: '1.0rem', color: '#555', lineHeight: 1.75,
                        }}>
                          <span style={{ color: '#134901', fontWeight: 800, flexShrink: 0, marginTop: '2px' }}>✓</span>
                          {q}
                        </div>
                      </FadeUp>
                    ))}
                  </div>
                </div>

                {/* Chapter 6: Reflection */}
                <div style={{ marginBottom: '80px' }}>
                  <ChapterHead number="06" title="Reflection" />
                  <FadeUp>
                    <SpotlightCard
                      padding="32px"
                      borderRadius="16px"
                      bg="#fff"
                      borderColor="rgba(19,73,1,0.08)"
                      hoverBorderColor="rgba(19,73,1,0.2)"
                    >
                      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                        <span style={{
                          fontSize: '3rem', lineHeight: 1, color: '#134901',
                          fontWeight: 900, fontStyle: 'italic', flexShrink: 0, opacity: 0.3,
                        }}>
                          "
                        </span>
                        <p style={{
                          fontSize: '1.05rem', color: '#444', lineHeight: 1.85,
                          fontStyle: 'italic', margin: 0,
                        }}>
                          {study.reflection}
                        </p>
                      </div>
                    </SpotlightCard>
                  </FadeUp>
                </div>
              </div>

              {/* -- Sticky sidebar -- */}
              <div style={{ position: 'sticky', top: '88px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <SpotlightCard padding="28px" borderRadius="16px">
                  <p style={{ fontSize: '0.68rem', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Scale</p>
                  <p style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F0F0F', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '6px' }}>{study.scale}</p>
                  <p style={{ fontSize: '0.82rem', color: '#aaa' }}>{study.industry}</p>
                </SpotlightCard>

                <SpotlightCard padding="28px" borderRadius="16px">
                  <p style={{ fontSize: '0.68rem', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Tools</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {study.tools.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.78rem', fontWeight: 600, color: '#555',
                          backgroundColor: '#f5f5f3', padding: '5px 12px', borderRadius: '100px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>

                <MagneticButton href="mailto:me@quadriismail.com" variant="primary">
                  Work with Quadri →
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
           NEXT CASE STUDY
           ══════════════════════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#0A0A0A', padding: '80px 0' }}>
          <div className="wrap">
            <FadeUp style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px',
            }}>
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
                  {next.headline}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '8px' }}>{next.tagline}</p>
              </div>

              <Link href={`/case-study/${next.id}`} style={{ textDecoration: 'none' }}>
                <MagneticButton variant="outline-light">
                  View Case Study →
                </MagneticButton>
              </Link>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

/* -- Process step — expandable card -- */
function ProcessStep({ step, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <SpotlightCard
      padding="0"
      borderRadius="16px"
      delay={index * 0.06}
      onClick={() => setExpanded(!expanded)}
      style={{ cursor: 'pointer' }}
    >
      <div style={{ padding: '24px 28px' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <span style={{
            minWidth: '32px', height: '32px', borderRadius: '50%',
            backgroundColor: '#0F0F0F', color: '#fff',
            fontSize: '0.72rem', fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            {index + 1}
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{
                fontSize: '1.05rem', fontWeight: 700, color: '#0F0F0F',
                letterSpacing: '-0.02em', margin: 0,
              }}>
                {step.title}
              </h3>
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ fontSize: '0.8rem', color: '#aaa', flexShrink: 0 }}
              >
                ▾
              </motion.span>
            </div>
            <p style={{ fontSize: '0.92rem', color: '#666', lineHeight: 1.7, margin: '8px 0 0' }}>
              {step.description}
            </p>
          </div>
        </div>

        {/* Expandable detail */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.35, ease: E }}
          style={{ overflow: 'hidden' }}
        >
          <div style={{ paddingTop: '16px', paddingLeft: '48px', paddingBottom: '4px' }}>
            <p style={{
              fontSize: '0.88rem', color: '#888', lineHeight: 1.75,
              fontStyle: 'italic', margin: 0,
              paddingLeft: '16px', borderLeft: '2px solid #e8e8e4',
            }}>
              {step.detail}
            </p>
          </div>
        </motion.div>
      </div>
    </SpotlightCard>
  )
}
