import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from 'framer-motion'
import MagneticButton from './MagneticButton'

const E = [0.22, 1, 0.36, 1]

/* ── Scrolling grid SVG ─────────────────────────────────────────── */
function GridPattern({ offsetX, offsetY, id }) {
  return (
    <svg style={{ width: '100%', height: '100%' }}>
      <defs>
        <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <motion.rect width="100%" height="100%" fill={`url(#${id})`} x={offsetX} y={offsetY} />
    </svg>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)

  /* Parallax on scroll */
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  /* Mouse position for radial mask */
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  /* Animate the grid offset so it scrolls continuously */
  const gridOffsetX = useMotionValue(0)
  const gridOffsetY = useMotionValue(0)
  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.4) % 40)
    gridOffsetY.set((gridOffsetY.get() + 0.4) % 40)
  })

  /* Template for mask-image */
  const maskImage = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, black, transparent)`

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f3',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Base dim grid */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.04, color: '#0F0F0F', pointerEvents: 'none', zIndex: 0 }}>
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} id="grid-base" />
      </div>

      {/* Mouse-reveal layer */}
      <motion.div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, opacity: 0.35, color: '#134901',
          maskImage, WebkitMaskImage: maskImage, pointerEvents: 'none', zIndex: 0,
        }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} id="grid-reveal" />
      </motion.div>

      {/* Ambient blurred orbs */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{
          position: 'absolute', right: '-10%', top: '-15%', width: '45%', paddingTop: '45%',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(19,73,1,0.12) 0%, transparent 70%)', filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', left: '-12%', bottom: '-15%', width: '40%', paddingTop: '40%',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(204,255,0,0.06) 0%, transparent 70%)', filter: 'blur(80px)',
        }} />
      </div>

      {/* Content — parallaxes out on scroll */}
      <motion.div style={{ y, opacity, width: '100%', position: 'relative', zIndex: 1 }} className="wrap">
        <div style={{ width: '100%', paddingTop: '120px', paddingBottom: '100px', position: 'relative' }}>

          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: E }}
            style={{ marginBottom: '48px' }}
          >
            <motion.span
              whileHover={{ borderColor: 'rgba(19,73,1,0.3)', backgroundColor: 'rgba(255,255,255,0.85)' }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                fontSize: '0.72rem', fontWeight: 600, color: '#666',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '8px 16px', borderRadius: '100px',
                border: '1px solid rgba(0,0,0,0.08)',
                backgroundColor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)',
                cursor: 'default',
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  backgroundColor: '#22c55e', boxShadow: '0 0 0 3px rgba(34,197,94,0.2)', flexShrink: 0,
                }}
              />
              Available for senior roles & consulting
            </motion.span>
          </motion.div>

          {/* Headline — two-line clip reveal with padding buffer for descenders */}
          <div style={{ overflow: 'hidden', paddingBottom: '8px', marginBottom: '0' }}>
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, delay: 0.2, ease: E }}
              style={{
                fontSize: 'clamp(3rem, 9vw, 9rem)', fontWeight: 800,
                lineHeight: 0.95, letterSpacing: '-0.04em', color: '#0F0F0F', margin: 0,
              }}
            >
              Senior Product
            </motion.h1>
          </div>

          <div style={{ overflow: 'hidden', paddingBottom: '12px', marginBottom: '48px' }}>
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, delay: 0.35, ease: E }}
              style={{
                fontSize: 'clamp(3rem, 9vw, 9rem)', fontWeight: 800,
                lineHeight: 0.95, letterSpacing: '-0.04em', color: '#134901',
                margin: 0, display: 'flex', alignItems: 'center', gap: '0.18em',
              }}
            >
              Designer
              <motion.span
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  display: 'inline-block',
                  width: 'clamp(28px, 4vw, 56px)', height: 'clamp(28px, 4vw, 56px)',
                  borderRadius: '50%', backgroundColor: '#CCFF00',
                  verticalAlign: 'middle', marginBottom: '0.1em', flexShrink: 0,
                }}
              />
            </motion.h1>
          </div>

          {/* Bio + stats row */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: E }}
            style={{
              display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '40px',
            }}
          >
            <p style={{
              fontSize: '1.05rem', color: '#5a5a5a', lineHeight: 1.8,
              maxWidth: '400px', margin: 0, fontWeight: 400,
            }}>
              6+ years shipping transformative digital products across
              Fintech, GovTech, AI & Web3 — serving{' '}
              <strong style={{ color: '#0F0F0F', fontWeight: 700 }}>40M+ users</strong>{' '}
              in 180+ countries.
            </p>

            <div style={{ display: 'flex', gap: '48px', flexShrink: 0 }}>
              {[
                { n: '40M+', l: 'Users served' },
                { n: '6+', l: 'Years exp.' },
                { n: '180+', l: 'Countries' },
              ].map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.65 + i * 0.08, ease: E }}
                  whileHover={{ y: -2 }}
                >
                  <div style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800,
                    color: '#0F0F0F', lineHeight: 1, letterSpacing: '-0.04em',
                  }}>
                    {s.n}
                  </div>
                  <div style={{
                    fontSize: '0.72rem', color: '#aaa', marginTop: '6px', fontWeight: 500,
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTAs — premium MagneticButton */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: E }}
            style={{ marginTop: '52px', display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <MagneticButton href="mailto:quadrihorlar@gmail.com" variant="primary">
              Book a consultation
            </MagneticButton>
            <MagneticButton href="#work" variant="outline">
              View work ↓
            </MagneticButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            style={{
              position: 'absolute', bottom: 0, right: 0,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
            }}
          >
            <motion.div
              animate={{ scaleY: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '1px', height: '48px', backgroundColor: '#ccc', transformOrigin: 'top' }}
            />
            <span style={{
              fontSize: '0.6rem', color: '#bbb', fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase', writingMode: 'vertical-rl',
            }}>
              Scroll
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
