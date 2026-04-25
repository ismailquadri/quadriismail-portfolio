import { motion } from 'framer-motion'
import CaseStudyCard from './CaseStudyCard'
import caseStudies from '../data/caseStudies'

const E = [0.22, 1, 0.36, 1]

export default function CaseStudies() {
  const [featured, ...rest] = caseStudies

  return (
    <section id="work" style={{ backgroundColor: '#fff', padding: '120px 0' }}>
      <div className="wrap">
        {/* Header row */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '72px',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: E }}
          >
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              color: '#aaa',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              display: 'block',
              marginBottom: '14px',
            }}>
              Selected Work
            </span>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 900,
              color: '#0F0F0F',
              margin: 0,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
            }}>
              Case Studies
            </h2>
          </motion.div>

          <motion.a
            href="mailto:quadrihorlar@gmail.com"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ color: '#134901' }}
            style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#555',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'color 0.2s',
            }}
          >
            Have a project? ↗
          </motion.a>
        </div>

        {/* Featured card — full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: E }}
          style={{ marginBottom: '32px' }}
        >
          <CaseStudyCard study={featured} featured />
        </motion.div>

        {/* 2-column grid for rest */}
        <div
          className="cs-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
          }}
        >
          {rest.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: E }}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
