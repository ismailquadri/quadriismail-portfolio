import Head from 'next/head'
import Link from 'next/link'
import { motion, useScroll } from 'framer-motion'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import caseStudies from '../../data/caseStudies'
import { ease } from '../../components/motion/motionConfig'

export async function getStaticPaths() {
  return {
    paths: caseStudies.map((s) => ({ params: { id: s.id } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const study = caseStudies.find((s) => s.id === params.id)
  const currentIndex = caseStudies.findIndex((s) => s.id === params.id)
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length]
  return { props: { study, nextStudy } }
}

export default function CaseStudyPage({ study, nextStudy }) {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <Head>
        <title>{study.title} — Quadri Ismail</title>
        <meta name="description" content={study.subtitle} />
        <meta property="og:title" content={`${study.title} — Quadri Ismail`} />
        <meta property="og:description" content={study.subtitle} />
      </Head>

      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          backgroundColor: '#CCFF00',
          transformOrigin: '0%',
          zIndex: 100,
        }}
      />

      <Navigation />

      <main style={{ paddingTop: '72px' }}>
        {/* Hero header */}
        <section style={{
          backgroundColor: '#134901',
          padding: '64px 0 56px',
        }}>
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <Link href="/#work" style={{ textDecoration: 'none' }}>
                <motion.span
                  whileHover={{ x: -3 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'rgba(204,255,0,0.7)',
                    marginBottom: '32px',
                    cursor: 'pointer',
                  }}
                >
                  ← Back to Work
                </motion.span>
              </Link>

              {/* Accent bar */}
              <div style={{
                width: '48px',
                height: '3px',
                backgroundColor: study.color,
                borderRadius: '2px',
                marginBottom: '20px',
              }} />

              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#F8F8F6',
                marginBottom: '12px',
              }}>
                {study.title}
              </h1>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(248,248,246,0.65)',
                marginBottom: '40px',
                maxWidth: '600px',
                lineHeight: 1.5,
              }}>
                {study.subtitle}
              </p>

              {/* 4-col metadata */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '24px',
                borderTop: '1px solid rgba(204,255,0,0.15)',
                paddingTop: '32px',
                maxWidth: '700px',
              }}>
                {[
                  { label: 'Client', value: study.client },
                  { label: 'Role', value: study.role },
                  { label: 'Year', value: study.year },
                  { label: 'Industry', value: study.industry },
                ].map((meta) => (
                  <div key={meta.label}>
                    <div style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'rgba(204,255,0,0.55)',
                      marginBottom: '6px',
                    }}>
                      {meta.label}
                    </div>
                    <div style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#F8F8F6',
                    }}>
                      {meta.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Full-width gradient band */}
        <div style={{
          height: '6px',
          background: `linear-gradient(90deg, ${study.color}, transparent)`,
        }} />

        {/* Main content */}
        <section style={{ backgroundColor: '#F8F8F6', padding: '64px 0 80px' }}>
          <div className="container-main">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
              gap: '64px',
              alignItems: 'start',
            }}
            className="case-study-grid"
            >
              {/* Main column */}
              <div>
                <ContentSection title="The Problem" delay={0}>
                  <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.8 }}>{study.problem}</p>
                </ContentSection>

                <ContentSection title="The Solution" delay={0.1}>
                  <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.8 }}>{study.solution}</p>
                </ContentSection>

                <ContentSection title="Approach" delay={0.2}>
                  <ol style={{ paddingLeft: '0', margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {study.approach.map((step, i) => (
                      <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <span style={{
                          minWidth: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          backgroundColor: study.color,
                          color: '#fff',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}>
                          {i + 1}
                        </span>
                        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.8, margin: 0 }}>{step}</p>
                      </li>
                    ))}
                  </ol>
                </ContentSection>

                <ContentSection title="Results" delay={0.3}>
                  <ul style={{ paddingLeft: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {study.results.map((r, i) => (
                      <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '1.05rem', color: '#444', lineHeight: 1.7 }}>
                        <span style={{ color: study.color, fontWeight: 800, flexShrink: 0 }}>✓</span>
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Metric cards */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '16px',
                    marginTop: '32px',
                  }}>
                    {study.metrics.map((metric) => (
                      <motion.div
                        key={metric.label}
                        whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                        style={{
                          backgroundColor: '#fff',
                          borderRadius: '12px',
                          padding: '20px',
                          border: '1px solid #E0E0DC',
                          textAlign: 'center',
                        }}
                      >
                        <div style={{
                          fontSize: '2rem',
                          fontWeight: 900,
                          color: 'transparent',
                          WebkitTextStroke: `2px ${study.color}`,
                          letterSpacing: '-0.02em',
                          lineHeight: 1,
                          marginBottom: '8px',
                        }}>
                          {metric.value}
                        </div>
                        <div style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: '#888',
                        }}>
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ContentSection>
              </div>

              {/* Sidebar */}
              <div style={{ position: 'sticky', top: '96px' }}>
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease }}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    padding: '32px',
                    border: '1px solid #E0E0DC',
                    marginBottom: '20px',
                  }}
                >
                  <h3 style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#888',
                    marginBottom: '20px',
                  }}>
                    Scale
                  </h3>
                  <p style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: study.color,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}>
                    {study.scale}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#888' }}>{study.industry}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease }}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    padding: '32px',
                    border: '1px solid #E0E0DC',
                    marginBottom: '20px',
                  }}
                >
                  <h3 style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#888',
                    marginBottom: '20px',
                  }}>
                    Tools Used
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {study.tools.map((tool) => (
                      <span key={tool} style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#134901',
                        backgroundColor: 'rgba(19,73,1,0.08)',
                        padding: '5px 12px',
                        borderRadius: '100px',
                        border: '1px solid rgba(19,73,1,0.12)',
                      }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.a
                  href="mailto:quadrihorlar@gmail.com"
                  whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(204,255,0,0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{
                    display: 'block',
                    backgroundColor: '#CCFF00',
                    color: '#134901',
                    padding: '14px 24px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                  }}
                >
                  Work With Quadri →
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* Next case study teaser */}
        <section style={{ backgroundColor: '#134901', padding: '56px 0' }}>
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}
            >
              <div>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(204,255,0,0.6)',
                  display: 'block',
                  marginBottom: '8px',
                }}>
                  Next Case Study
                </span>
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: 900,
                  color: '#F8F8F6',
                  letterSpacing: '-0.02em',
                }}>
                  {nextStudy.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'rgba(248,248,246,0.6)', marginTop: '6px' }}>
                  {nextStudy.subtitle}
                </p>
              </div>
              <Link href={`/case-study/${nextStudy.id}`} style={{ textDecoration: 'none' }}>
                <motion.span
                  whileHover={{ x: 4, boxShadow: '0 8px 24px rgba(204,255,0,0.25)' }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#CCFF00',
                    color: '#134901',
                    padding: '12px 28px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
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

      {/* Responsive sidebar stack */}
      <style>{`
        @media (max-width: 768px) {
          .case-study-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}

function ContentSection({ title, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease }}
      style={{ marginBottom: '52px' }}
    >
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 800,
        color: '#134901',
        letterSpacing: '-0.02em',
        marginBottom: '20px',
        paddingBottom: '12px',
        borderBottom: '1px solid #E0E0DC',
      }}>
        {title}
      </h2>
      {children}
    </motion.div>
  )
}
