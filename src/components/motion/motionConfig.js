// Framer Motion presets — extend, never replace wholesale

export const ease = [0.22, 1, 0.36, 1]

export const spring = { type: 'spring', stiffness: 400, damping: 28 }

// Stagger parent container
export const staggerContainer = {
  hidden: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Stagger child item
export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
}

// Fade up (non-stagger)
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
}

// Scroll-triggered entrance (use with whileInView)
export const scrollReveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease },
}

// Text line reveal (clip mask style)
export const lineReveal = {
  initial: { y: '100%' },
  animate: {
    y: 0,
    transition: { duration: 0.6, ease },
  },
}

// Page transition (used in _app.js)
export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.3, ease },
  },
}

// Card hover
export const cardHover = {
  rest: { y: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
  hover: {
    y: -8,
    boxShadow: '0 24px 48px rgba(0,0,0,0.1)',
    transition: spring,
  },
}

// Button hover
export const buttonHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    boxShadow: '0 8px 24px rgba(204,255,0,0.3)',
    transition: spring,
  },
  tap: { scale: 0.96 },
}
