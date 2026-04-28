import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { useRouter } from 'next/router'
import { GeistSans } from 'geist/font/sans'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import '../styles/globals.css'

const E = [0.76, 0, 0.24, 1]
const E2 = [0.22, 1, 0.36, 1]

/* ── Page transition variants ─────────────────────────────────── */
const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: E2, when: 'beforeChildren', staggerChildren: 0.06 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.35, ease: E },
  },
}

/* ── Wipe overlay (the dark curtain that slides across on route change) ── */
const wipeVariants = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: [0, 1, 1, 0],
    transition: {
      duration: 1.2,
      times: [0, 0.4, 0.6, 1],
      ease: E,
    },
  },
}

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const lenisRef = useRef(null)

  /* ── Lenis smooth scroll (disabled for reduced-motion users) ── */
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  /* Scroll to top on route change */
  useEffect(() => {
    const handleStart = () => setIsTransitioning(true)
    const handleComplete = () => {
      setIsTransitioning(false)
      if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true })
      window.scrollTo(0, 0)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return (
    <MotionConfig reducedMotion="user">
    <div className={`${GeistSans.variable} grain`}>

      {/* Wipe transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="wipe"
            variants={wipeVariants}
            initial="initial"
            animate="animate"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9990,
              backgroundColor: '#0F0F0F',
              transformOrigin: 'bottom',
              pointerEvents: 'none',
            }}
          >
            {/* Logo watermark in the wipe */}
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
                transition={{ duration: 1.2, times: [0, 0.35, 0.65, 1], ease: E }}
                style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#CCFF00',
                  letterSpacing: '-0.03em',
                }}
              >
                QI.
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
    </MotionConfig>
  )
}
