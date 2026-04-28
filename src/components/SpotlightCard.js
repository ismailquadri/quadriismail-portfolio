import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/*
  SpotlightCard — premium card with:
  • Cursor-follow radial spotlight on border & surface
  • 3D tilt (perspective + rotateX/Y)
  • Lift & shadow on hover
  • Spring physics for smooth return
  • Works on both light and dark backgrounds
*/

const E = [0.22, 1, 0.36, 1]

export default function SpotlightCard({
  children,
  padding = '32px',
  borderRadius = '20px',
  bg = '#fff',
  borderColor = 'rgba(0,0,0,0.06)',
  hoverBorderColor = 'rgba(19,73,1,0.3)',
  spotlightColor = 'rgba(19,73,1,0.06)',
  dark = false,
  tilt = true,
  className = '',
  style = {},
  delay = 0,
  onClick,
  href,
}) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  const spotX = useMotionValue(0)
  const spotY = useMotionValue(0)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const px = e.clientX - left
    const py = e.clientY - top
    spotX.set(px)
    spotY.set(py)

    if (tilt) {
      const cx = px / width - 0.5
      const cy = py / height - 0.5
      rotateX.set(-cy * 8)
      rotateY.set(cx * 8)
    }
  }

  const handleMouseLeave = () => {
    setHovered(false)
    rotateX.set(0)
    rotateY.set(0)
  }

  const resolvedSpot = dark
    ? spotlightColor || 'rgba(204,255,0,0.06)'
    : spotlightColor
  const resolvedBorderHover = dark
    ? hoverBorderColor || 'rgba(204,255,0,0.2)'
    : hoverBorderColor

  const Comp = href ? motion.a : motion.div

  return (
    <Comp
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: E }}
      className={className}
      style={{
        display: 'block',
        position: 'relative',
        backgroundColor: bg,
        borderRadius,
        padding,
        border: `1px solid ${borderColor}`,
        overflow: 'hidden',
        cursor: onClick || href ? 'pointer' : 'default',
        textDecoration: 'none',
        color: 'inherit',
        perspective: '800px',
        transformStyle: 'preserve-3d',
        rotateX: tilt ? springRotateX : 0,
        rotateY: tilt ? springRotateY : 0,
        ...style,
      }}
      animate={{
        borderColor: hovered ? resolvedBorderHover : borderColor,
        boxShadow: hovered
          ? dark
            ? '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(204,255,0,0.1)'
            : '0 20px 60px rgba(0,0,0,0.08), 0 0 0 1px rgba(19,73,1,0.08)'
          : '0 0 0 rgba(0,0,0,0)',
        y: hovered ? -4 : 0,
      }}
    >
      {/* Spotlight gradient — follows cursor */}
      <motion.div
        aria-hidden
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `radial-gradient(280px circle at ${spotX.get()}px ${spotY.get()}px, ${resolvedSpot}, transparent 65%)`,
          zIndex: 0,
        }}
      />

      {/* Border glow — follows cursor */}
      <motion.div
        aria-hidden
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          inset: -1,
          pointerEvents: 'none',
          borderRadius,
          background: `radial-gradient(200px circle at ${spotX.get()}px ${spotY.get()}px, ${resolvedBorderHover}, transparent 60%)`,
          zIndex: 0,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </Comp>
  )
}
