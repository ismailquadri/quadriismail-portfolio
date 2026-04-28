import { motion } from 'framer-motion'
import Image from 'next/image'

const E = [0.22, 1, 0.36, 1]

const LOGOS = [
  { src: '/images/logos/ministry-of-hajj.svg', alt: 'Ministry of Hajj & Umrah', width: 140 },
  { src: '/images/logos/FG.svg', alt: 'Federal Government of Nigeria', width: 140 },
  { src: '/images/logos/Lean.svg', alt: 'Lean Business Services', width: 120 },
  { src: '/images/logos/Chisquares.svg', alt: 'Chisquares', width: 130 },
  { src: '/images/logos/AXN.svg', alt: 'AXN', width: 100 },
  { src: '/images/logos/Fablab.svg', alt: 'Fablab', width: 110 },
  { src: '/images/logos/Lenvra.svg', alt: 'Lenvra', width: 110 },
  { src: '/images/logos/Medicarri.svg', alt: 'Medicarri', width: 120 },
  { src: '/images/logos/Odel.svg', alt: 'Odel', width: 100 },
  { src: '/images/logos/ryno.svg', alt: 'Ryno', width: 100 },
]

const TRACK = [...LOGOS, ...LOGOS]

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
        style={{ textAlign: 'center', marginBottom: '48px' }}
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

      {/* Logo marquee */}
      <div>
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '64px',
            whiteSpace: 'nowrap',
            willChange: 'transform',
          }}
        >
          {TRACK.map((logo, i) => (
            <div
              key={`logo-${i}`}
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '48px',
                opacity: 0.5,
                filter: 'brightness(0) invert(1)',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.5' }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={48}
                style={{ objectFit: 'contain', height: '48px', width: 'auto' }}
              />
            </div>
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
