import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CaseStudyCard({ caseStudy, index }) {
  const isWide = index === 0 || index === 3;

  return (
    <Link href={`/case-study/${caseStudy.id}`} style={{ textDecoration: 'none', display: 'block' }}>
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        style={{ cursor: 'pointer' }}
      >
        {/* Image area */}
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', marginBottom: '20px', backgroundColor: '#E8E8E4', aspectRatio: isWide ? '16/9' : '4/3' }}>

          {/* Placeholder visual */}
          <motion.div
            variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(135deg, ${caseStudy.color}22 0%, ${caseStudy.color}44 100%)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <span style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 900, color: caseStudy.color,
              letterSpacing: '-0.04em', opacity: 0.6,
              WebkitTextStroke: `1px ${caseStudy.color}`,
            }}>
              {caseStudy.title}
            </span>
          </motion.div>

          {/* Overlay on hover */}
          <motion.div
            variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute', inset: 0,
              backgroundColor: 'rgba(19,73,1,0.06)',
            }}
          />

          {/* Arrow icon */}
          <motion.div
            variants={{ rest: { opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }, hover: { opacity: 1, scale: 1, x: '-50%', y: '-50%' } }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'absolute', top: '50%', left: '50%',
              width: '56px', height: '56px', borderRadius: '50%',
              backgroundColor: '#134901', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem', fontWeight: 700,
            }}
          >
            ↗
          </motion.div>
        </div>

        {/* Text below image — Cuberto style */}
        <div style={{ paddingLeft: '2px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {caseStudy.industry}
            </span>
            <span style={{ fontSize: '0.7rem', color: '#CCC' }}>·</span>
            <span style={{ fontSize: '0.75rem', color: '#999' }}>{caseStudy.year}</span>
          </div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F0F0F', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
            {caseStudy.title}
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#888', margin: 0, lineHeight: 1.5 }}>
            {caseStudy.subtitle}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
