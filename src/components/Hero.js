import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} style={{ minHeight: '100vh', padding: '0 48px', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle grain texture */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        pointerEvents: 'none',
      }} />

      <motion.div style={{ y, opacity, position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', width: '100%', paddingTop: '72px' }}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: '32px' }}
        >
          <span style={{
            fontSize: '0.8rem', fontWeight: 600, color: '#134901',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#CCFF00', display: 'inline-block', boxShadow: '0 0 8px #CCFF00' }} />
            Available for senior roles & consulting
          </span>
        </motion.div>

        <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(3.5rem, 9vw, 8.5rem)',
              fontWeight: 900, lineHeight: 0.95,
              letterSpacing: '-0.04em', color: '#0F0F0F', margin: 0,
            }}
          >
            Senior Product
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '48px' }}>
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(3.5rem, 9vw, 8.5rem)',
              fontWeight: 900, lineHeight: 0.95,
              letterSpacing: '-0.04em', color: '#134901', margin: 0,
            }}
          >
            Designer.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '48px' }}
        >
          <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: 1.7, maxWidth: '480px', margin: 0 }}>
            6+ years shipping transformative digital products across
            Fintech, GovTech, and AI — serving 40M+ users worldwide.
          </p>

          <div style={{ display: 'flex', gap: '48px' }}>
            {[
              { value: '40M+', label: 'Users served' },
              { value: '6+', label: 'Years' },
              { value: '5', label: 'Industries' },
            ].map((s) => (
              <div key={s.value}>
                <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#0F0F0F', lineHeight: 1, letterSpacing: '-0.03em' }}>{s.value}</div>
                <div style={{ fontSize: '0.8rem', color: '#999', marginTop: '4px', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={{ marginTop: '64px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}
        >
          <motion.a
            href="mailto:quadrihorlar@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontSize: '0.9rem', fontWeight: 700, color: '#fff',
              backgroundColor: '#134901', padding: '14px 32px',
              borderRadius: '100px', textDecoration: 'none',
            }}
          >
            Book a consultation
          </motion.a>
          <motion.a
            href="#work"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontSize: '0.9rem', fontWeight: 700, color: '#0F0F0F',
              backgroundColor: 'transparent', padding: '14px 32px',
              borderRadius: '100px', textDecoration: 'none',
              border: '1.5px solid #D0D0CC',
            }}
          >
            View work ↓
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
}
