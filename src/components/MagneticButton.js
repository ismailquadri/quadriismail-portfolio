import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/*
  MagneticButton — premium interactive button with:
  • Magnetic pull toward cursor on hover
  • Glow / spotlight that follows cursor
  • Spring-physics scale on press
  • Underline reveal or border-glow depending on variant

  Variants: "primary" | "secondary" | "ghost" | "outline"
*/

const SPRING = { stiffness: 150, damping: 15, mass: 0.1 }

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  style = {},
  ...rest
}) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, SPRING)
  const springY = useSpring(y, SPRING)

  /* Spotlight position (relative to button) */
  const spotX = useMotionValue(0)
  const spotY = useMotionValue(0)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const cx = e.clientX - left - width / 2
    const cy = e.clientY - top - height / 2
    /* Magnetic pull — move button toward cursor */
    x.set(cx * 0.15)
    y.set(cy * 0.15)
    /* Spotlight — follows cursor exactly */
    spotX.set(e.clientX - left)
    spotY.set(e.clientY - top)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  const sizes = {
    sm: { fontSize: '0.78rem', padding: '10px 20px' },
    md: { fontSize: '0.875rem', padding: '14px 32px' },
    lg: { fontSize: '0.95rem', padding: '17px 40px' },
  }

  const variants = {
    primary: {
      backgroundColor: '#134901',
      color: '#fff',
      border: 'none',
      hoverBg: '#0d3801',
      glowColor: 'rgba(204, 255, 0, 0.15)',
    },
    secondary: {
      backgroundColor: '#0F0F0F',
      color: '#fff',
      border: 'none',
      hoverBg: '#1a1a1a',
      glowColor: 'rgba(255, 255, 255, 0.08)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#0F0F0F',
      border: '1.5px solid #d8d8d4',
      hoverBg: 'transparent',
      glowColor: 'rgba(19, 73, 1, 0.08)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#888',
      border: '1.5px solid rgba(255,255,255,0.15)',
      hoverBg: 'transparent',
      glowColor: 'rgba(255, 255, 255, 0.06)',
    },
    'outline-light': {
      backgroundColor: 'transparent',
      color: '#fff',
      border: '1.5px solid rgba(255,255,255,0.15)',
      hoverBg: 'transparent',
      glowColor: 'rgba(255, 255, 255, 0.08)',
    },
  }

  const v = variants[variant] || variants.primary
  const s = sizes[size] || sizes.md

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: s.fontSize,
    fontWeight: 700,
    fontFamily: 'inherit',
    letterSpacing: '-0.01em',
    padding: s.padding,
    borderRadius: '100px',
    textDecoration: 'none',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: v.backgroundColor,
    color: v.color,
    border: v.border,
    outline: 'none',
    whiteSpace: 'nowrap',
    ...style,
  }

  const Tag = href ? motion.a : motion.button

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ ...baseStyle, x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      animate={{
        backgroundColor: hovered ? v.hoverBg || v.backgroundColor : v.backgroundColor,
        color: hovered && variant === 'outline' ? '#134901' : v.color,
        borderColor: hovered && variant === 'outline' ? '#134901' : undefined,
      }}
      transition={{ duration: 0.2 }}
      className={className}
      {...rest}
    >
      {/* Spotlight glow that follows cursor */}
      <motion.span
        aria-hidden
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          background: `radial-gradient(120px circle at ${spotX.get()}px ${spotY.get()}px, ${v.glowColor}, transparent 60%)`,
        }}
      />

      {/* Shimmer on hover */}
      <motion.span
        aria-hidden
        initial={{ x: '-100%' }}
        animate={{ x: hovered ? '200%' : '-100%' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: variant === 'primary'
            ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        {children}
        {icon && <span style={{ display: 'inline-flex', fontSize: '1.1em' }}>{icon}</span>}
      </span>
    </Tag>
  )
}
