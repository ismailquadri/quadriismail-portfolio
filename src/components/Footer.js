import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0A0A', color: '#fff', padding: '100px 48px 48px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Big CTA — Cuberto style */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '80px', marginBottom: '64px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '24px' }}>
            Let's work together
          </p>
          <motion.a
            href="mailto:quadrihorlar@gmail.com"
            whileHover={{ color: '#CCFF00' }}
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 6rem)',
              fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1,
              color: '#fff', textDecoration: 'none', display: 'block',
              transition: 'color 0.3s ease',
            }}
          >
            Have a project? →
          </motion.a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#134901', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              QI.
            </div>
            <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.7, maxWidth: '280px' }}>
              Senior Product Designer based in Lagos. Turning complex SaaS into clarity.
            </p>
          </div>
          {[
            { title: 'Connect', links: [{ l: 'Email', h: 'mailto:quadrihorlar@gmail.com' }, { l: 'LinkedIn', h: 'https://linkedin.com/in/quadriismail' }, { l: 'Behance', h: 'https://behance.net/quadriismail' }] },
            { title: 'Work', links: [{ l: 'Case Studies', h: '#work' }, { l: 'Portfolio', h: 'https://behance.net/quadriismail' }] },
            { title: 'Services', links: [{ l: 'Product Design', h: 'mailto:quadrihorlar@gmail.com' }, { l: 'Design Systems', h: 'mailto:quadrihorlar@gmail.com' }, { l: 'Mentorship', h: 'mailto:quadrihorlar@gmail.com' }] },
          ].map((g) => (
            <div key={g.title}>
              <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#444', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>{g.title}</p>
              {g.links.map((lk) => (
                <a key={lk.l} href={lk.h}
                  target={lk.h.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{ display: 'block', fontSize: '0.875rem', color: '#555', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#555'}
                >
                  {lk.l}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '64px', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '0.8rem', color: '#333' }}>© {new Date().getFullYear()} Quadri Ismail. All rights reserved.</p>
          <p style={{ fontSize: '0.8rem', color: '#333' }}>Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
