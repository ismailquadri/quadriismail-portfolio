import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const E = [0.22, 1, 0.36, 1]

/* Split text into individual characters for staggered animation */
function SplitText({ text, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <span ref={ref} style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '120%', opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.02, ease: E }}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

/* Lagos timezone clock */
function LagosClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
      })
      setTime(now)
    }
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <span style={{ fontVariantNumeric: 'tabular-nums' }}>
      {time} WAT
    </span>
  )
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0A0A', color: '#fff' }}>
      {/* Giant CTA with split-text animation */}
      <div className="wrap" style={{ paddingTop: '120px', paddingBottom: '100px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p style={{
            fontSize: '0.72rem', fontWeight: 600, color: '#555',
            textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '32px',
          }}>
            Let's work together
          </p>

          {/* Giant animated text */}
          <div style={{ overflow: 'hidden' }}>
            <motion.a
              href="mailto:quadrihorlar@gmail.com"
              whileHover={{ color: '#CCFF00' }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'block',
                fontSize: 'clamp(2.8rem, 7.5vw, 7rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              <SplitText text="Have a project? →" />
            </motion.a>
          </div>

          {/* Contact row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ marginTop: '48px', display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <motion.a
              href="mailto:quadrihorlar@gmail.com"
              whileHover={{ backgroundColor: '#fff', color: '#0A0A0A' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{
                fontSize: '0.85rem', fontWeight: 700, color: '#fff',
                backgroundColor: 'transparent',
                padding: '12px 28px', borderRadius: '100px',
                textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.15)',
                display: 'inline-block',
              }}
            >
              quadrihorlar@gmail.com
            </motion.a>
            {['LinkedIn', 'Behance'].map((label) => (
              <motion.a
                key={label}
                href={label === 'LinkedIn' ? 'https://linkedin.com/in/quadriismail' : 'https://behance.net/quadriismail'}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: '#CCFF00' }}
                transition={{ duration: 0.15 }}
                style={{
                  fontSize: '0.85rem', fontWeight: 600, color: '#555',
                  textDecoration: 'none', display: 'inline-flex',
                  alignItems: 'center', padding: '12px 0',
                }}
              >
                {label} ↗
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom grid — staggered columns */}
      <div className="wrap" style={{ paddingTop: '56px', paddingBottom: '48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <span style={{
              fontWeight: 900, fontSize: '1.2rem', color: '#134901',
              letterSpacing: '-0.04em', display: 'block', marginBottom: '12px',
            }}>
              QI.
            </span>
            <p style={{ fontSize: '0.82rem', color: '#444', lineHeight: 1.7, maxWidth: '200px' }}>
              Senior Product Designer. Clarity over clout. Frameworks, not fluff.
            </p>
          </motion.div>

          <FooterLinks title="Work" delay={0.06} links={[
            { l: 'Nusuk', h: '/case-study/nusuk' },
            { l: 'Civil Service Reform', h: '/case-study/civil-service' },
            { l: 'Lean Insight + AXN', h: '/case-study/lean-insight' },
            { l: 'Chisquares', h: '/case-study/chisquares' },
            { l: 'Purchasa', h: '/case-study/purchasa' },
          ]} />

          <FooterLinks title="Services" delay={0.12} links={[
            { l: 'Product Design', h: '/#services' },
            { l: 'Design Systems', h: '/#services' },
            { l: 'Brand Mentorship', h: '/#services' },
          ]} />

          <FooterLinks title="Connect" delay={0.18} external links={[
            { l: 'Email', h: 'mailto:quadrihorlar@gmail.com' },
            { l: 'LinkedIn', h: 'https://linkedin.com/in/quadriismail' },
            { l: 'Behance', h: 'https://behance.net/quadriismail' },
          ]} />
        </div>

        {/* Bottom bar with clock */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '0.78rem', color: '#333' }}>
            © {new Date().getFullYear()} Quadri Ismail. All rights reserved.
          </p>
          <p style={{ fontSize: '0.78rem', color: '#333' }}>
            Lagos, Nigeria · <LagosClock />
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLinks({ title, links, external = false, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <p style={{
        fontSize: '0.68rem', fontWeight: 700, color: '#3a3a3a',
        textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px',
      }}>
        {title}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
        {links.map((lk) => (
          <li key={lk.l}>
            {external ? (
              <motion.a
                href={lk.h}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: '#fff', x: 3 }}
                transition={{ duration: 0.15 }}
                style={{ fontSize: '0.85rem', color: '#555', textDecoration: 'none', display: 'inline-block' }}
              >
                {lk.l}
              </motion.a>
            ) : (
              <Link href={lk.h} style={{ textDecoration: 'none' }}>
                <motion.span
                  whileHover={{ color: '#fff', x: 3 }}
                  transition={{ duration: 0.15 }}
                  style={{ fontSize: '0.85rem', color: '#555', display: 'inline-block', cursor: 'pointer' }}
                >
                  {lk.l}
                </motion.span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
