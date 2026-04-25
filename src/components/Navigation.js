import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: scrolled ? 'rgba(245,245,243,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
          transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease',
        }}
      >
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Wordmark */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <motion.span
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.2 }}
              style={{
                fontWeight: 900,
                fontSize: '1.1rem',
                color: '#134901',
                letterSpacing: '-0.03em',
                cursor: 'pointer',
              }}
            >
              QI.
            </motion.span>
          </Link>

          {/* Desktop links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }} aria-label="Main navigation">
            {[
              { label: 'Work', href: '/#work' },
              { label: 'About', href: '/#about' },
              { label: 'Services', href: '/#services' },
            ].map((link) => (
              <Link key={link.label} href={link.href} style={{ textDecoration: 'none' }}
                className="hidden md:block"
              >
                <motion.span
                  whileHover={{ color: '#0F0F0F' }}
                  transition={{ duration: 0.15 }}
                  style={{ fontSize: '0.875rem', fontWeight: 500, color: '#777', cursor: 'pointer' }}
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}

            {/* CTA — desktop */}
            <motion.a
              href="mailto:quadrihorlar@gmail.com"
              whileHover={{ backgroundColor: '#0d3801', scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              className="hidden md:inline-flex"
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#fff',
                backgroundColor: '#134901',
                padding: '9px 22px',
                borderRadius: '100px',
                textDecoration: 'none',
                alignItems: 'center',
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
              }}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                style={{ display: 'block', width: '20px', height: '1.5px', backgroundColor: '#0F0F0F', transformOrigin: 'center' }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.18 }}
                style={{ display: 'block', width: '20px', height: '1.5px', backgroundColor: '#0F0F0F' }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                style={{ display: 'block', width: '20px', height: '1.5px', backgroundColor: '#0F0F0F', transformOrigin: 'center' }}
              />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 90,
              backgroundColor: '#f5f5f3',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 32px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Work', href: '/#work' },
                { label: 'About', href: '/#about' },
                { label: 'Services', href: '/#services' },
                { label: "Let's talk", href: 'mailto:quadrihorlar@gmail.com' },
              ].map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'block',
                      fontSize: 'clamp(2rem, 10vw, 3.5rem)',
                      fontWeight: 900,
                      color: '#0F0F0F',
                      textDecoration: 'none',
                      letterSpacing: '-0.03em',
                      lineHeight: 1.15,
                      padding: '8px 0',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div style={{ position: 'absolute', bottom: '48px', left: '32px' }}>
              <p style={{ fontSize: '0.8rem', color: '#999', fontWeight: 500 }}>quadriismail.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
