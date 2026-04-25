import Link from 'next/link'
import { motion } from 'framer-motion'

const E = [0.22, 1, 0.36, 1]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0A0A', color: '#fff' }}>
      {/* Giant CTA — Cuberto signature move */}
      <div className="wrap" style={{ paddingTop: '100px', paddingBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: E }}
        >
          <p style={{
            fontSize: '0.72rem',
            fontWeight: 600,
            color: '#555',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '28px',
          }}>
            Let's work together
          </p>

          <motion.a
            href="mailto:quadrihorlar@gmail.com"
            whileHover={{ color: '#CCFF00' }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'block',
              fontSize: 'clamp(2.5rem, 7vw, 6.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Have a project? →
          </motion.a>

          <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <motion.a
              href="mailto:quadrihorlar@gmail.com"
              whileHover={{ backgroundColor: '#fff', color: '#0A0A0A' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                color: '#fff',
                backgroundColor: 'transparent',
                padding: '12px 28px',
                borderRadius: '100px',
                textDecoration: 'none',
                border: '1.5px solid rgba(255,255,255,0.2)',
                display: 'inline-block',
              }}
            >
              quadrihorlar@gmail.com
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/quadriismail"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: '#CCFF00' }}
              transition={{ duration: 0.15 }}
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#555',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 0',
              }}
            >
              LinkedIn ↗
            </motion.a>
            <motion.a
              href="https://behance.net/quadriismail"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: '#CCFF00' }}
              transition={{ duration: 0.15 }}
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#555',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 0',
              }}
            >
              Behance ↗
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom links grid */}
      <div className="wrap" style={{ paddingTop: '56px', paddingBottom: '48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <span style={{
              fontWeight: 900,
              fontSize: '1.1rem',
              color: '#134901',
              letterSpacing: '-0.03em',
              display: 'block',
              marginBottom: '12px',
            }}>
              QI.
            </span>
            <p style={{ fontSize: '0.82rem', color: '#444', lineHeight: 1.7, maxWidth: '200px' }}>
              Senior Product Designer. Clarity over clout. Frameworks, not fluff.
            </p>
          </div>

          <FooterLinks title="Work" links={[
            { l: 'Nusuk', h: '/case-study/nusuk' },
            { l: 'Civil Service Reform', h: '/case-study/civil-service' },
            { l: 'Lean Insight + AXN', h: '/case-study/lean-insight' },
            { l: 'Chisquares', h: '/case-study/chisquares' },
            { l: 'Purchasa', h: '/case-study/purchasa' },
          ]} />

          <FooterLinks title="Services" links={[
            { l: 'Product Design', h: '/#services' },
            { l: 'Design Systems', h: '/#services' },
            { l: 'Brand Mentorship', h: '/#services' },
          ]} />

          <FooterLinks title="Connect" external links={[
            { l: 'Email', h: 'mailto:quadrihorlar@gmail.com' },
            { l: 'LinkedIn', h: 'https://linkedin.com/in/quadriismail' },
            { l: 'Behance', h: 'https://behance.net/quadriismail' },
          ]} />
        </div>

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
          <p style={{ fontSize: '0.78rem', color: '#333' }}>Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  )
}

function FooterLinks({ title, links, external = false }) {
  return (
    <div>
      <p style={{
        fontSize: '0.68rem',
        fontWeight: 700,
        color: '#3a3a3a',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: '16px',
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
                whileHover={{ color: '#fff', x: 2 }}
                transition={{ duration: 0.15 }}
                style={{ fontSize: '0.85rem', color: '#555', textDecoration: 'none', display: 'inline-block' }}
              >
                {lk.l}
              </motion.a>
            ) : (
              <Link href={lk.h} style={{ textDecoration: 'none' }}>
                <motion.span
                  whileHover={{ color: '#fff', x: 2 }}
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
    </div>
  )
}
