import { motion } from 'framer-motion'

const E = [0.22, 1, 0.36, 1]

/* Companies / organisations Quadri has worked with or for */
const CLIENTS = [
  'Ministry of Hajj & Umrah',
  'Federal Govt of Nigeria',
  'Lean Business Services',
  'Purchasa',
  'Chisquares',
  'Nusuk',
  '40M+ Users',
  '180+ Countries',
  'Fintech',
  'GovTech',
  'AI Platforms',
  'Web3',
]

/* We duplicate the list so the CSS scroll loop is seamless */
const TRACK = [...CLIENTS, ...CLIENTS]

export default function TrustedMarquee() {
  return (
    <section
      style={{
        backgroundColor: '#0A0A0A',
        padding: '88px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: E }}
        style={{
          textAlign: 'center',
          marginBottom: '52px',
        }}
      >
        <span style={{
          fontSize: '0.68rem',
          fontWeight: 700,
          color: '#3a3a3a',
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
        }}>
          Industries & organisations
        </span>
      </motion.div>

      {/* 3D perspective wrapper */}
      <div
        style={{
          perspective: '1200px',
          perspectiveOrigin: 'center 60%',
        }}
      >
        <div
          style={{
            transform: 'rotateX(8deg) rotateY(-18deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Marquee track */}
          <div
            className="marquee-track"
            style={{
              display: 'flex',
              whiteSpace: 'nowrap',
              willChange: 'transform',
            }}
          >
            {TRACK.map((item, i) => {
              /* Simulate depth-based blur: items towards edges get slightly blurred */
              const norm = Math.abs((i % CLIENTS.length) / (CLIENTS.length - 1) - 0.5) * 2
              const blur = norm * 3
              const opacity = 1 - norm * 0.35

              return (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    fontSize: 'clamp(2.2rem, 5vw, 4.8rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: '#fafafa',
                    paddingRight: '1.2em',
                    filter: `blur(${blur}px)`,
                    opacity,
                    userSelect: 'none',
                  }}
                >
                  {item}
                </span>
              )
            })}
          </div>
        </div>
      </div>

      {/* Left + right edge fades */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'linear-gradient(90deg, #0A0A0A 0%, transparent 16%, transparent 84%, #0A0A0A 100%)',
        }}
      />
      {/* Top + bottom fades */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'linear-gradient(180deg, #0A0A0A 0%, transparent 22%, transparent 78%, #0A0A0A 100%)',
        }}
      />
    </section>
  )
}
