import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'

const E = [0.22, 1, 0.36, 1]

const NAV_LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
]

const MOBILE_LINKS = [
  ...NAV_LINKS,
  { label: "Let's talk", href: 'mailto:quadrihorlar@gmail.com' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const lastY = useRef(0)

  /* Show/hide nav on scroll direction */
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const diff = latest - lastY.current
    lastY.current = latest
    if (latest < 80) { setHidden(false); setScrolled(false); return }
    setScrolled(true)
    if (diff > 8) setHidden(true)
    if (diff < -4) setHidden(false)
  })

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden && !menuOpen ? -100 : 0 }}
        transition={{ duration: 0.45, ease: E }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: scrolled ? 'rgba(245,245,243,0.82)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(1.2)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(1.2)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.04)' : '1px solid transparent',
          transition: 'background-color 0.5s ease, backdrop-filter 0.5s ease, border-bottom 0.5s ease',
        }}
      >
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo — magnetic */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <motion.span
              whileHover={{ scale: 1.08, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{
                fontWeight: 900,
                fontSize: '1.2rem',
                color: '#134901',
                letterSpacing: '-0.04em',
                cursor: 'pointer',
                display: 'inline-block',
              }}
            >
              QI.
            </motion.span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }} aria-label="Main navigation">
            {NAV_LINKS.map((link, i) => (
              <Link key={link.label} href={link.href} style={{ textDecoration: 'none' }} className="hidden md:block">
                <motion.span
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.06, ease: E }}
                  whileHover={{ color: '#0F0F0F', y: -1 }}
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: '#888',
                    cursor: 'pointer',
                    display: 'inline-block',
                    position: 'relative',
                  }}
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}

            {/* CTA */}
            <motion.a
              href="mailto:quadrihorlar@gmail.com"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35, ease: E }}
              whileHover={{ backgroundColor: '#0d3801', scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="hidden md:inline-flex"
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#fff',
                backgroundColor: '#134901',
                padding: '10px 24px',
                borderRadius: '100px',
                textDecoration: 'none',
                alignItems: 'center',
                letterSpacing: '-0.01em',
              }}
            >
              Let's talk
            </motion.a>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                zIndex: 110,
              }}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: menuOpen ? '#fff' : '#0F0F0F', transformOrigin: 'center', transition: 'background-color 0.3s' }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.18 }}
                style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: menuOpen ? '#fff' : '#0F0F0F' }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: menuOpen ? '#fff' : '#0F0F0F', transformOrigin: 'center', transition: 'background-color 0.3s' }}
              />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu — cinematic */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 36px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 36px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 36px)' }}
            transition={{ duration: 0.65, ease: E }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              backgroundColor: '#0A0A0A',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 32px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {MOBILE_LINKS.map((link, i) => (
                <div key={link.label} style={{ overflow: 'hidden' }}>
                  <motion.div
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '110%' }}
                    transition={{ duration: 0.55, delay: 0.15 + i * 0.06, ease: E }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: 'block',
                        fontSize: 'clamp(2.2rem, 10vw, 4rem)',
                        fontWeight: 800,
                        color: '#fff',
                        textDecoration: 'none',
                        letterSpacing: '-0.04em',
                        lineHeight: 1.2,
                        padding: '8px 0',
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              style={{ position: 'absolute', bottom: '48px', left: '32px', right: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}
            >
              <div>
                <p style={{ fontSize: '0.72rem', color: '#444', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Get in touch</p>
                <a href="mailto:quadrihorlar@gmail.com" style={{ fontSize: '0.85rem', color: '#888', textDecoration: 'none' }}>quadrihorlar@gmail.com</a>
              </div>
              <p style={{ fontSize: '0.72rem', color: '#333', fontWeight: 500 }}>Lagos, Nigeria</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
