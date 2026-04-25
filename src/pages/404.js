import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, ease } from '../components/motion/motionConfig'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 — Quadri Ismail</title>
      </Head>
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#134901',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="animate"
          style={{ textAlign: 'center', maxWidth: '480px' }}
        >
          <motion.div
            variants={staggerItem}
            style={{
              fontSize: 'clamp(6rem, 20vw, 12rem)',
              fontWeight: 900,
              color: 'transparent',
              WebkitTextStroke: '2px #CCFF00',
              letterSpacing: '-0.05em',
              lineHeight: 1,
              marginBottom: '16px',
            }}
          >
            404
          </motion.div>

          <motion.h1
            variants={staggerItem}
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 900,
              color: '#F8F8F6',
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            Page not found
          </motion.h1>

          <motion.p
            variants={staggerItem}
            style={{ fontSize: '1.05rem', color: 'rgba(248,248,246,0.65)', lineHeight: 1.7, marginBottom: '36px' }}
          >
            Looks like this page took a wrong turn. Let's get you back to the work.
          </motion.p>

          <motion.div variants={staggerItem}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <motion.span
                whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(204,255,0,0.3)' }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#CCFF00',
                  color: '#134901',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                }}
              >
                ← Back to Home
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
