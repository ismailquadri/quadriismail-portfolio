import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import caseStudies from '../data/caseStudies'

const E = [0.22, 1, 0.36, 1]

/* Colour + accent for each project */
const studyMeta = {
  nusuk:           { bg: '#0e2e08', accent: '#4ade80', tag: 'GovTech' },
  'civil-service': { bg: '#0b1f3a', accent: '#60a5fa', tag: 'GovTech' },
  'lean-insight':  { bg: '#1a0b2e', accent: '#c084fc', tag: 'Enterprise SaaS' },
  chisquares:      { bg: '#2e1a08', accent: '#fb923c', tag: 'EdTech' },
  purchasa:        { bg: '#081a2e', accent: '#22d3ee', tag: 'Web3 / Fintech' },
}

const PROJECTS = caseStudies.map((s) => ({
  ...s,
  ...(studyMeta[s.id] || { bg: '#111', accent: '#CCFF00', tag: s.industry }),
}))

function ProjectCard({ project, index }) {
  const topMetrics = (project.impact?.metrics || []).slice(0, 2)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: E }}
    >
      <Link href={`/case-study/${project.id}`} style={{ textDecoration: 'none', display: 'block' }}>
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3, ease: E }}
          style={{
            backgroundColor: project.bg,
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          {/* Thumbnail image (when available) */}
          {project.thumbnail && (
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 10',
              overflow: 'hidden',
              backgroundColor: 'rgba(255,255,255,0.03)',
            }}>
              <Image
                src={project.thumbnail}
                alt={project.headline}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}

          {/* Top — visual area with typography */}
          <div style={{
            padding: project.thumbnail ? '28px 32px 24px' : '48px 32px 40px',
            position: 'relative',
            minHeight: project.thumbnail ? 'auto' : '240px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
            {/* Ghost watermark (only when no thumbnail) */}
            {!project.thumbnail && (
              <div aria-hidden style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                fontSize: 'clamp(5rem, 12vw, 9rem)',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.03)',
                letterSpacing: '-0.05em',
                lineHeight: 1,
                userSelect: 'none',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              }}>
                {project.year}
              </div>
            )}

            {/* Tag + year */}
            <div style={{
              display: 'flex', gap: '8px', alignItems: 'center',
              marginBottom: '16px',
            }}>
              <span style={{
                fontSize: '0.68rem', fontWeight: 600,
                color: project.accent,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                padding: '4px 10px',
                borderRadius: '100px',
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: `1px solid ${project.accent}33`,
              }}>
                {project.tag}
              </span>
              <span style={{
                fontSize: '0.68rem', fontWeight: 500,
                color: 'rgba(255,255,255,0.35)',
              }}>
                {project.year}
              </span>
            </div>

            {/* Headline */}
            <h3 style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '8px',
            }}>
              {project.headline}
            </h3>

            {/* Tagline */}
            <p style={{
              fontSize: '0.88rem',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
              maxWidth: '380px',
            }}>
              {project.tagline}
            </p>
          </div>

          {/* Bottom — metrics bar */}
          {topMetrics.length > 0 && (
            <div style={{
              padding: '20px 32px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              gap: '32px',
            }}>
              {topMetrics.map((m) => (
                <div key={m.label}>
                  <div style={{
                    fontSize: '1.1rem', fontWeight: 800, color: '#CCFF00',
                    letterSpacing: '-0.02em', lineHeight: 1,
                  }}>
                    {m.prefix}{m.value}
                  </div>
                  <div style={{
                    fontSize: '0.62rem', color: 'rgba(255,255,255,0.4)',
                    fontWeight: 500, textTransform: 'uppercase',
                    letterSpacing: '0.06em', marginTop: '4px',
                  }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Hover indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            style={{
              position: 'absolute', top: '24px', right: '24px',
              fontSize: '0.72rem', fontWeight: 600,
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            View case study →
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function ProjectGrid() {
  return (
    <section id="work" style={{ padding: '120px 0', backgroundColor: '#fff' }}>
      <div className="wrap">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: E }}
          style={{ marginBottom: '56px' }}
        >
          <span style={{
            fontSize: '0.72rem', fontWeight: 600, color: '#aaa',
            textTransform: 'uppercase', letterSpacing: '0.12em',
            display: 'block', marginBottom: '14px',
          }}>
            Selected Work
          </span>
          <div style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px',
          }}>
            <h2 style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
              fontWeight: 800, color: '#0F0F0F', margin: 0,
              letterSpacing: '-0.04em', lineHeight: 0.95,
            }}>
              Case Studies
            </h2>
            <motion.a
              href="mailto:me@quadriismail.com"
              whileHover={{ color: '#134901' }}
              transition={{ duration: 0.2 }}
              style={{ fontSize: '0.875rem', fontWeight: 600, color: '#888', textDecoration: 'none' }}
            >
              Have a project? →
            </motion.a>
          </div>
        </motion.div>

        {/* Project grid — 2 columns on desktop, 1 on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}
          className="project-grid"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
