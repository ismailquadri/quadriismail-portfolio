import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        padding: '0 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '72px',
        backgroundColor: 'rgba(248,248,246,0.92)',
        backdropFilter: 'blur(16px)',
      }}
    >
      <Link href="/" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#134901', textDecoration: 'none', letterSpacing: '-0.03em' }}>
        QI.
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <Link href="#work" style={{ fontSize: '0.9rem', fontWeight: 500, color: '#888', textDecoration: 'none' }}>Work</Link>
        <Link href="#about" style={{ fontSize: '0.9rem', fontWeight: 500, color: '#888', textDecoration: 'none' }}>About</Link>
        <motion.a
          href="mailto:quadrihorlar@gmail.com"
          whileHover={{ backgroundColor: '#0f3a01' }}
          style={{
            fontSize: '0.875rem', fontWeight: 700, color: '#fff',
            backgroundColor: '#134901', padding: '10px 24px',
            borderRadius: '100px', textDecoration: 'none',
            transition: 'background 0.2s',
          }}
        >
          Let's talk
        </motion.a>
      </div>
    </motion.nav>
  );
}
