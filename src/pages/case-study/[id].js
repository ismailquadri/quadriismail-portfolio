import Head from 'next/head'
import Link from 'next/link'
import { motion, useScroll } from 'framer-motion'
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
  nusuk:         '#0e2e08',
  'civil-service': '#0b1f3a',
  'lean-insight':  '#1a0b2e',
  chisquares:    '#2e1a08',
  purchasa:      '#08212e',
}

export default function CaseStudyPage({ study, next }) {
  const { scrollYProgress } = useScroll()
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
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: '2px',
          backgroundColor: '#CCFF00',
          transformOrigin: '0%',
          zIndex: 200,
        }}
      />

      <Navigation />

      <main>
        {/* ── Hero band ── */}
        <section style={{
          backgroundColor: bg,
          paddingTop: '120px',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Subtle large label in bg */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            fontSize: 'clamp(6rem, 20vw, 18rem)',
            fontWeight: 900,
            color: 'rgba(255,255,255,0.03)',
            letterSpacing: '-0.05em',
            lineHeight: 1,
            userSelect: 'none',
            padding: '0 40px',
            overflow: 'hidden',
          }}>
            {study.title.toUpperCase()}
          </div>

          <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: E }}
            >
              {/* Back */}
              <Link href="/#work" style={{ textDecoration: 'none' }}>
                <motion.span
                  whileHover={{ x: -3 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.4)',
                    marginBottom: '40px',
                    cursor: 'pointer',
                    letterSpacing: '0.02em',
                  }}
                >
                  ← All work
                </motion.span>
              </Link>

              {/* Industry + year */}
              <div style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                marginBottom: '20px',
              }}>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  {study.industry}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem' }}>·</span>
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{study.year}</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
                color: '#fff',
                marginBottom: '16px',
              }}>
                {study.title}
              </h1>

              <p style={{
                fontSize: '1.15rem',
                color: 'rgba(255,255,255,0.55)',
                marginBottom: '48px',
                maxWidth: '580px',
                lineHeight: 1.6,
              }}>
                {study.subtitle}
              </p>

              {/* Metadata grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '24px',
                maxWidth: '640px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                paddingTop: '32px',
              }}>
                {[
                  { label: 'Client',   val: study.client },
                  { label: 'Role',     val: study.role },
                  { label: 'Year',     val: study.year },
                  { label: 'Scale',    val: study.scale },
                ].map((m) => (
                  <div key={m.label}>
                    <div style={{
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '6px',
                    }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>
                      {m.val}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Thin accent line */}
        <div style={{ height: '3px', background: `linear-gradient(90deg, ${study.color || '#134901'}, transparent 60%)` }} />

        {/* ── Body ── */}
        <section style={{ backgroundColor: '#f5f5f3', padding: '80px 0 120px' }}>
          <div className="wrap">
            <div
              className="case-study-body"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 320px',
                gap: '64px',
                alignItems: 'start',
              }}
            >
              {/* Main content */}
              <div>
                <Block title="The Problem" delay={0}>
                  <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.85 }}>{study.problem}</p>
                </Block>

                <Block title="The Solution" delay={0.05}>
                  <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.85 }}>{study.solution}</p>
                </Block>

                <Block title="Approach" delay={0.1}>
                  <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {study.approach.map((step, i) => (
                      <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <span style={{
                          minWidth: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          backgroundColor: '#0F0F0F',
                          color: '#fff',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}>
                          {i + 1}
                        </span>
                        <p style={{ fontSize: '1.0rem', color: '#555', lineHeight: 1.8, margin: 0 }}>{step}</p>
                      </li>
                    ))}
                  </ol>
                </Block>

                <Block title="Results" delay={0.15}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
                    {study.results.map((r, i) => (
                      <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '1.0rem', color: '#555', lineHeight: 1.75 }}>
                        <span style={{ color: '#134901', fontWeight: 800, flexShrink: 0, marginTop: '1px' }}>✓</span>
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Metric cards */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '12px',
                  }}>
                    {study.metrics.map((m) => (
                      <motion.div
                        key={m.label}
                        whileHover={{ y: -4 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                        style={{
                          backgroundColor: '#fff',
                          borderRadius: '12px',
                          padding: '20px',
                          border: '1px solid #e8e8e4',
                          textAlign: 'center',
                        }}
                      >
                        <div style={{
                          fontSize: '2rem',
                          fontWeight: 900,
                          letterSpacing: '-0.03em',
                          lineHeight: 1,
                          marginBottom: '8px',
                          color: '#0F0F0F',
                        }}>
                          {m.value}
                        </div>
                        <div style={{
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: '#aaa',
                        }}>
                          {m.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Block>
              </div>

              {/* Sticky sidebar */}
              <div style={{ position: 'sticky', top: '88px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Scale */}
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: E }}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '14px',
                    padding: '28px',
                    border: '1px solid #e8e8e4',
                  }}
                >
                  <p style={{ fontSize: '0.68rem', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Scale</p>
                  <p style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0F0F0F', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '6px' }}>{study.scale}</p>
                  <p style={{ fontSize: '0.82rem', color: '#aaa' }}>{study.industry}</p>
                </motion.div>

                {/* Tools */}
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: E }}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '14px',
                    padding: '28px',
                    border: '1px solid #e8e8e4',
                  }}
                >
                  <p style={{ fontSize: '0.68rem', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Tools</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {study.tools.map((t) => (
                      <span key={t} style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: '#555',
                        backgroundColor: '#f5f5f3',
                        padding: '5px 12px',
                        borderRadius: '100px',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.a
                  href="mailto:quadrihorlar@gmail.com"
                  whileHover={{ backgroundColor: '#0d3801' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{
                    display: 'block',
                    backgroundColor: '#134901',
                    color: '#fff',
                    padding: '14px 24px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                  }}
                >
                  Work with Quadri →
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Next case study ── */}
        <section style={{ backgroundColor: '#0A0A0A', padding: '64px 0' }}>
          <div className="wrap">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: E }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '24px',
              }}
            >
              <div>
                <p style={{
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  color: '#444',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '10px',
                }}>
                  Next Case Study
                </p>
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)',
                  fontWeight: 900,
                  color: '#fff',
                  letterSpacing: '-0.03em',
                  margin: 0,
                }}>
                  {next.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '6px' }}>{next.subtitle}</p>
              </div>

              <Link href={`/case-study/${next.id}`} style={{ textDecoration: 'none' }}>
                <motion.span
                  whileHover={{ backgroundColor: '#fff', color: '#0A0A0A' }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'transparent',
                    color: '#fff',
                    padding: '12px 28px',
                    borderRadius: '100px',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    border: '1.5px solid rgba(255,255,255,0.2)',
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

function Block({ title, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: E }}
      style={{ marginBottom: '56px' }}
    >
      <h2 style={{
        fontSize: '1.4rem',
        fontWeight: 800,
        color: '#0F0F0F',
        letterSpacing: '-0.02em',
        marginBottom: '20px',
        paddingBottom: '14px',
        borderBottom: '1px solid #e8e8e4',
      }}>
        {title}
      </h2>
      {children}
    </motion.div>
  )
}
