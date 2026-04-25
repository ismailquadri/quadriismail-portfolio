import Link from 'next/link'
import { motion } from 'framer-motion'

const E = [0.22, 1, 0.36, 1]

// Each study gets a unique, rich placeholder treatment
const placeholders = {
  nusuk:        { bg: '#0e2e08', accent: '#1a5c0f', label: 'NUSUK' },
  'civil-service': { bg: '#0b1f3a', accent: '#15396b', label: 'CIVIL' },
  'lean-insight':  { bg: '#1a0b2e', accent: '#33176b', label: 'LEAN' },
  chisquares:   { bg: '#2e1a08', accent: '#6b3c12', label: 'CHI²' },
  purchasa:     { bg: '#08212e', accent: '#124a6b', label: 'PURCH' },
}

export default function CaseStudyCard({ study, featured = false }) {
  const ph = placeholders[study.id] || { bg: '#111', accent: '#333', label: study.title }

  return (
    <Link href={`/case-study/${study.id}`} style={{ textDecoration: 'none', display: 'block' }}>
      <motion.article
        initial="rest"
        whileHover="hover"
        animate="rest"
        style={{ cursor: 'pointer' }}
      >
        {/* Image tile — full bleed, no borders */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '12px',
          marginBottom: '18px',
          backgroundColor: ph.bg,
          aspectRatio: featured ? '16 / 7' : '4 / 3',
        }}>
          {/* Background gradient */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse at 30% 50%, ${ph.accent}55 0%, transparent 70%)`,
          }} />

          {/* Large project name typography — design element */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'flex-end',
            padding: featured ? '32px 40px' : '24px 28px',
            pointerEvents: 'none',
          }}>
            <span style={{
              fontSize: featured ? 'clamp(4rem, 10vw, 9rem)' : 'clamp(2.5rem, 5vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '-0.05em',
              lineHeight: 1,
              color: 'rgba(255,255,255,0.06)',
              userSelect: 'none',
            }}>
              {ph.label}
            </span>
          </div>

          {/* Key metric — floats top-right */}
          <motion.div
            variants={{
              rest: { opacity: 1, y: 0 },
              hover: { opacity: 0, y: -8 },
            }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'absolute',
              top: featured ? '28px' : '20px',
              right: featured ? '32px' : '20px',
              textAlign: 'right',
            }}
          >
            <div style={{
              fontSize: featured ? '2.2rem' : '1.6rem',
              fontWeight: 900,
              color: '#CCFF00',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}>
              {study.metrics[0].value}
            </div>
            <div style={{
              fontSize: '0.68rem',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginTop: '4px',
            }}>
              {study.metrics[0].label}
            </div>
          </motion.div>

          {/* Hover overlay — subtle green tint */}
          <motion.div
            variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(19,73,1,0.08)',
            }}
          />

          {/* Hover arrow */}
          <motion.div
            variants={{
              rest:  { opacity: 0, scale: 0.7 },
              hover: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.28, ease: E }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#0F0F0F',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
          >
            ↗
          </motion.div>

          {/* Image zoom on hover */}
          <motion.div
            variants={{ rest: { scale: 1 }, hover: { scale: 1.03 } }}
            transition={{ duration: 0.6, ease: E }}
            style={{ position: 'absolute', inset: 0 }}
          />
        </div>

        {/* Card footer — Cuberto style: metadata + title below image */}
        <div style={{ paddingLeft: '2px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '6px',
          }}>
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              color: '#999',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>
              {study.industry}
            </span>
            <span style={{ fontSize: '0.7rem', color: '#ccc' }}>·</span>
            <span style={{ fontSize: '0.72rem', color: '#bbb', fontWeight: 500 }}>{study.year}</span>
          </div>

          <motion.h3
            variants={{
              rest:  { color: '#1a1a1a' },
              hover: { color: '#134901' },
            }}
            transition={{ duration: 0.2 }}
            style={{
              fontSize: featured ? '1.35rem' : '1.15rem',
              fontWeight: 800,
              margin: '0 0 5px',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            {study.title}
          </motion.h3>

          <p style={{
            fontSize: '0.88rem',
            color: '#888',
            margin: 0,
            lineHeight: 1.55,
          }}>
            {study.subtitle}
          </p>
        </div>
      </motion.article>
    </Link>
  )
}
