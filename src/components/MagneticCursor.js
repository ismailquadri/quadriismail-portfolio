/**
 * MagneticCursor
 *
 * A custom cursor that follows the mouse with a spring lag,
 * and magnetically snaps to interactive elements (links, buttons).
 *
 * Usage: render once at app level (in _app.js) and it works globally.
 */

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const SPRING = { stiffness: 500, damping: 40, mass: 0.4 }
const SLOW   = { stiffness: 180, damping: 26, mass: 0.6 }

export default function MagneticCursor() {
  /* Raw mouse pos */
  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  /* Spring-smoothed positions — inner dot follows fast, outer ring follows slow */
  const dotX  = useSpring(rawX, SPRING)
  const dotY  = useSpring(rawY, SPRING)
  const ringX = useSpring(rawX, SLOW)
  const ringY = useSpring(rawY, SLOW)

  /* State refs (avoid re-renders) */
  const scaleRef   = useRef(1)
  const textRef    = useRef('')
  const dotRef     = useRef(null)
  const ringRef    = useRef(null)
  const labelRef   = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    /* Hide on mobile */
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
    }

    const onEnter = (e) => {
      const el = e.target.closest('a, button, [data-magnetic]')
      if (!el) return

      /* Expand ring + show label */
      if (ringRef.current)  ringRef.current.style.transform  = 'scale(2.8)'
      if (dotRef.current)   dotRef.current.style.opacity     = '0'
      if (labelRef.current) {
        const label = el.dataset.cursorLabel || ''
        labelRef.current.textContent = label
        labelRef.current.style.opacity = label ? '1' : '0'
      }
    }

    const onLeave = () => {
      if (ringRef.current)  ringRef.current.style.transform  = 'scale(1)'
      if (dotRef.current)   dotRef.current.style.opacity     = '1'
      if (labelRef.current) {
        labelRef.current.textContent = ''
        labelRef.current.style.opacity = '0'
      }
    }

    const onDown = () => {
      if (ringRef.current)  ringRef.current.style.transform  = 'scale(0.7)'
    }
    const onUp = () => {
      if (ringRef.current)  ringRef.current.style.transform  = 'scale(1)'
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover',  onEnter)
    document.addEventListener('mouseout',   onLeave)
    document.addEventListener('mousedown',  onDown)
    document.addEventListener('mouseup',    onUp)

    /* Hide native cursor site-wide */
    document.documentElement.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover',  onEnter)
      document.removeEventListener('mouseout',   onLeave)
      document.removeEventListener('mousedown',  onDown)
      document.removeEventListener('mouseup',    onUp)
      document.documentElement.style.cursor = ''
    }
  }, [rawX, rawY])

  return (
    <>
      {/* Outer ring — slow spring */}
      <motion.div
        ref={ringRef}
        style={{
          x: ringX,
          y: ringY,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          marginLeft: '-18px',
          marginTop: '-18px',
          borderRadius: '50%',
          border: '1.5px solid rgba(19,73,1,0.5)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mixBlendMode: 'multiply',
        }}
      >
        {/* Label inside ring */}
        <span
          ref={labelRef}
          style={{
            fontSize: '0.55rem',
            fontWeight: 700,
            color: '#134901',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            opacity: 0,
            transition: 'opacity 0.2s ease',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}
        />
      </motion.div>

      {/* Inner dot — fast spring */}
      <motion.div
        ref={dotRef}
        style={{
          x: dotX,
          y: dotY,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          marginLeft: '-3px',
          marginTop: '-3px',
          borderRadius: '50%',
          backgroundColor: '#134901',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'opacity 0.2s ease',
        }}
      />
    </>
  )
}
