import { motion } from 'framer-motion'

const E = [0.22, 1, 0.36, 1]

const ROW_1 = [
  'Ministry of Hajj & Umrah',
  'Purchasa',
  'Lean Business Services',
  'Chisquares',
  'Nusuk',
  'Federal Govt of Nigeria',
]
const ROW_2 = [
  'Fintech',
  'GovTech',
  'AI Platforms',
  'Web3',
  '40M+ Users',
  '180+ Countries',
  'SaaS',
  'EdTech',
]

const TRACK_1 = [...ROW_1, ...ROW_1]
const TRACK_2 = [...ROW_2, ...ROW_2]

function Dot() {
  return (
    <span style={{
      display: 'inline-block',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: '#CCFF00',
      opacity: 0.5,
      margin: '0 0.6em',
      flexShrink: 0,
      verticalAlign: 'middle',
    }} />
  )
}

export default function TrustedMarquee() {
  return (
    <section
      style={{
        backgroundColor: '#0A0A0A',
        padding: '72px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: E }}
        style={{ textAlign: 'center', marginBottom: '40px' }}
      >
        <span style={{
          fontSize: '0.68rem',
          fontWeight: 700,
          color: '#3a3a3a',
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
        }}>
          Trusted by teams across industries
        </span>
      </motion.div>

      {/* Row 1 — scrolls left */}
      <div style={{ marginBottom: '12px' }}>
        <div
          className="marquee-track"
          style={{ display: 'flex', whiteSpace: 'nowrap', willChange: 'transform' }}
        >
          {TRACK_1.map((item, i) => (
            <span key={`r1-${i}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{
                fontSize: 'clamp(1.8rem, 4.5vw, 4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'rgba(255,255,255,0.85)',
                userSelect: 'none',
              }}>
                {item}
              </span>
              <Dot />
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right (reverse) */}
      <div>
        <div
          className="marquee-track-reverse"
          style={{ display: 'flex', whiteSpace: 'nowrap', willChange: 'transform' }}
        >
          {TRACK_2.map((item, i) => (
            <span key={`r2-${i}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{
                fontSize: 'clamp(1.8rem, 4.5vw, 4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'rgba(255,255,255,0.35)',
                userSelect: 'none',
              }}>
                {item}
              </span>
              <Dot />
            </span>
          ))}
        </div>
      </div>

      {/* Edge fades */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(90deg, #0A0A0A 0%, transparent 10%, transparent 90%, #0A0A0A 100%)',
      }} />
    </section>
  )
}
