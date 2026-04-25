import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const E = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -140])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f3',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Faint dot-grid background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(19,73,1,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        style={{ y, opacity, width: '100%', position: 'relative', zIndex: 1 }}
        className="wrap"
      >
        <div style={{ width: '100%', paddingTop: '68px', paddingBottom: '80px', position: 'relative' }}>
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: E }}
            style={{ marginBottom: '40px' }}
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: '#555',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#CCFF00',
                boxShadow: '0 0 0 3px rgba(204,255,0,0.25)',
                display: 'inline-block',
                flexShrink: 0,
              }} />
              Available for senior roles & consulting
            </span>
          </motion.div>

          {/* Headline — clip reveal */}
          <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
            <motion.h1
              initial={{ y: '102%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: E }}
              style={{
                fontSize: 'clamp(3.2rem, 8.5vw, 8rem)',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                color: '#0F0F0F',
                margin: 0,
              }}
            >
              Senior Product
            </motion.h1>
          </div>

          <div style={{ overflow: 'hidden', marginBottom: '52px' }}>
            <motion.h1
              initial={{ y: '102%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.32, ease: E }}
              style={{
                fontSize: 'clamp(3.2rem, 8.5vw, 8rem)',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                color: '#134901',
                margin: 0,
              }}
            >
              Designer.
            </motion.h1>
          </div>

          {/* Subrow — bio + stats side by side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52, ease: E }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '40px',
            }}
          >
            <p style={{
              fontSize: '1.1rem',
              color: '#5a5a5a',
              lineHeight: 1.75,
              maxWidth: '440px',
              margin: 0,
            }}>
              6+ years shipping transformative digital products across
              Fintech, GovTech, AI & Web3 — serving{' '}
              <strong style={{ color: '#0F0F0F', fontWeight: 700 }}>40M+ users</strong>{' '}
              in 180+ countries.
            </p>

            <div style={{ display: 'flex', gap: '40px', flexShrink: 0 }}>
              {[
                { n: '40M+', l: 'Users served' },
                { n: '6+',   l: 'Years' },
                { n: '180+', l: 'Countries' },
              ].map((s) => (
                <div key={s.n}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: '#0F0F0F',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}>
                    {s.n}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#999', marginTop: '5px', fontWeight: 500 }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68, ease: E }}
            style={{ marginTop: '52px', display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <motion.a
              href="mailto:quadrihorlar@gmail.com"
              whileHover={{ backgroundColor: '#0d3801', scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                color: '#fff',
                backgroundColor: '#134901',
                padding: '13px 30px',
                borderRadius: '100px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Book a consultation
            </motion.a>

            <motion.a
              href="#work"
              whileHover={{ borderColor: '#0F0F0F', color: '#0F0F0F' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#777',
                backgroundColor: 'transparent',
                padding: '13px 30px',
                borderRadius: '100px',
                textDecoration: 'none',
                display: 'inline-block',
                border: '1.5px solid #D4D4D0',
              }}
            >
              View work ↓
            </motion.a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            style={{
              position: 'absolute',
              bottom: '40px',
              right: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '1px',
                height: '40px',
                backgroundColor: '#ccc',
              }}
            />
            <span style={{ fontSize: '0.65rem', color: '#bbb', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>
              Scroll
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
