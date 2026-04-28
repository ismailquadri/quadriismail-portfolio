import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

const E = [0.22, 1, 0.36, 1]

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 — Quadri Ismail</title>
      </Head>
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#0A0A0A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Ambient orb */}
        <div aria-hidden style={{
          position: 'absolute', top: '30%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(204,255,0,0.06) 0%, transparent 65%)',
          filter: 'blur(80px)', pointerEvents: 'none',
        }} />

        {/* Giant ghost 404 background */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 'clamp(20rem, 50vw, 50rem)', fontWeight: 900,
          color: 'rgba(255,255,255,0.015)', letterSpacing: '-0.05em',
          lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        }}>
          404
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          style={{ textAlign: 'center', maxWidth: '480px', position: 'relative', zIndex: 1 }}
        >
          {/* Outlined 404 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: E } },
            }}
            style={{
              fontSize: 'clamp(6rem, 20vw, 12rem)',
              fontWeight: 900,
              color: 'transparent',
              WebkitTextStroke: '2px rgba(204,255,0,0.6)',
              letterSpacing: '-0.05em',
              lineHeight: 1,
              marginBottom: '20px',
            }}
          >
            404
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: E } },
            }}
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            Page not found
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: E } },
            }}
            style={{
              fontSize: '1.05rem', color: '#555', lineHeight: 1.7,
              marginBottom: '40px',
            }}
          >
            This page doesn't exist. Let's get you back to the work.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: E } },
            }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <motion.span
                whileHover={{ backgroundColor: '#fff', color: '#0A0A0A' }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'inline-block',
                  backgroundColor: 'transparent',
                  color: '#fff',
                  padding: '14px 32px',
                  borderRadius: '100px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  border: '1.5px solid rgba(255,255,255,0.15)',
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
