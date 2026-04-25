import { motion } from 'framer-motion';
import CaseStudyCard from './CaseStudyCard';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
  return (
    <section id="work" style={{ backgroundColor: '#fff', padding: '120px 48px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '80px', flexWrap: 'wrap', gap: '24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
              Selected Work
            </span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, color: '#0F0F0F', margin: 0, letterSpacing: '-0.04em', lineHeight: 1 }}>
              Case Studies
            </h2>
          </motion.div>
          <motion.a
            href="mailto:quadrihorlar@gmail.com"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            style={{
              fontSize: '0.875rem', fontWeight: 700, color: '#134901',
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px',
            }}
          >
            Get in touch ↗
          </motion.a>
        </div>

        {/* Grid — 2 col, first item wide */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px 32px' }}>
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ gridColumn: i === 0 ? 'span 2' : 'span 1' }}
            >
              <CaseStudyCard caseStudy={cs} index={i} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
