import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import caseStudies from '../data/caseStudies'

const E = [0.22, 1, 0.36, 1]
const AUTO_PLAY_INTERVAL = 3800
const ITEM_HEIGHT = 64

/* Map each study to a background colour and Unsplash image */
const studyMeta = {
  nusuk:          { bg: '#0e2e08', image: 'https://images.unsplash.com/photo-1568057373073-9df6bb9ae3b0?w=900&q=80', tag: 'GovTech · Hajj & Umrah' },
  'civil-service':{ bg: '#0b1f3a', image: 'https://images.unsplash.com/photo-1568493348-b857dded4c10?w=900&q=80', tag: 'GovTech · Nigeria' },
  'lean-insight': { bg: '#1a0b2e', image: 'https://images.unsplash.com/photo-1551288049-bbda38a10ad5?w=900&q=80', tag: 'SaaS · Analytics' },
  chisquares:     { bg: '#2e1a08', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80', tag: 'EdTech · Research' },
  purchasa:       { bg: '#081a2e', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=900&q=80', tag: 'Web3 · Fintech' },
}

const FEATURES = caseStudies.map((s) => ({
  ...s,
  ...(studyMeta[s.id] || { bg: '#111', image: '', tag: s.industry }),
}))

/* Wrap index within range */
function wrap(min, max, v) {
  const size = max - min
  return ((((v - min) % size) + size) % size) + min
}

function getCardStatus(index, currentIndex, total) {
  let diff = index - currentIndex
  if (diff > total / 2) diff -= total
  if (diff < -total / 2) diff += total
  if (diff === 0) return 'active'
  if (diff === -1) return 'prev'
  if (diff === 1) return 'next'
  return 'hidden'
}

export default function ProjectCarousel() {
  const [step, setStep] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const total = FEATURES.length
  const currentIndex = ((step % total) + total) % total

  const nextStep = useCallback(() => setStep((p) => p + 1), [])

  const handleChipClick = (index) => {
    const diff = (index - currentIndex + total) % total
    if (diff > 0) setStep((s) => s + diff)
  }

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(nextStep, AUTO_PLAY_INTERVAL)
    return () => clearInterval(id)
  }, [nextStep, isPaused])

  return (
    <section id="work" style={{ padding: '120px 0', backgroundColor: '#fff' }}>
      <div className="wrap">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: E }}
          style={{ marginBottom: '56px' }}
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
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <h2 style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
              fontWeight: 800,
              color: '#0F0F0F',
              margin: 0,
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
            }}>
              Case Studies
            </h2>
            <motion.a
              href="mailto:quadrihorlar@gmail.com"
              whileHover={{ color: '#134901' }}
              transition={{ duration: 0.2 }}
              style={{ fontSize: '0.875rem', fontWeight: 600, color: '#888', textDecoration: 'none' }}
            >
              Have a project? ↗
            </motion.a>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: E }}
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '32px',
            display: 'flex',
            flexDirection: 'row',
            minHeight: '520px',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          {/* Left panel — pill list */}
          <div style={{
            width: '38%',
            flexShrink: 0,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            overflow: 'hidden',
            backgroundColor: FEATURES[currentIndex].bg,
            transition: 'background-color 0.6s ease',
            padding: '0 40px',
          }}>
            {/* Top fade */}
            <div style={{
              position: 'absolute', inset: '0 0 auto 0',
              height: '80px',
              background: `linear-gradient(to bottom, ${FEATURES[currentIndex].bg}, transparent)`,
              zIndex: 4,
              transition: 'background 0.6s ease',
            }} />
            {/* Bottom fade */}
            <div style={{
              position: 'absolute', inset: 'auto 0 0 0',
              height: '80px',
              background: `linear-gradient(to top, ${FEATURES[currentIndex].bg}, transparent)`,
              zIndex: 4,
              transition: 'background 0.6s ease',
            }} />

            <div style={{ position: 'relative', width: '100%', height: `${ITEM_HEIGHT * 5}px`, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', zIndex: 2 }}>
              {FEATURES.map((feature, index) => {
                const isActive = index === currentIndex
                const distance = index - currentIndex
                const wrappedDist = wrap(-(total / 2), total / 2, distance)

                return (
                  <motion.div
                    key={feature.id}
                    style={{ height: ITEM_HEIGHT, width: 'fit-content', position: 'absolute' }}
                    animate={{
                      y: wrappedDist * ITEM_HEIGHT,
                      opacity: 1 - Math.abs(wrappedDist) * 0.28,
                    }}
                    transition={{ type: 'spring', stiffness: 85, damping: 22 }}
                  >
                    <button
                      onClick={() => handleChipClick(index)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 22px',
                        borderRadius: '100px',
                        border: isActive ? '1.5px solid rgba(255,255,255,0.9)' : '1.5px solid rgba(255,255,255,0.15)',
                        background: isActive ? '#fff' : 'transparent',
                        color: isActive ? feature.bg : 'rgba(255,255,255,0.55)',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.35s ease',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        fontFamily: 'inherit',
                      }}
                    >
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: isActive ? feature.bg : 'rgba(255,255,255,0.4)',
                        flexShrink: 0,
                      }} />
                      {feature.title}
                    </button>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right panel — image card stack */}
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F0F0EE',
            padding: '48px 40px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
              aspectRatio: '4/5',
            }}>
              {FEATURES.map((feature, index) => {
                const status = getCardStatus(index, currentIndex, total)
                const isActive = status === 'active'
                const isPrev = status === 'prev'
                const isNext = status === 'next'

                return (
                  <motion.div
                    key={feature.id}
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isPrev ? -80 : isNext ? 80 : 0,
                      scale: isActive ? 1 : (isPrev || isNext) ? 0.88 : 0.76,
                      opacity: isActive ? 1 : (isPrev || isNext) ? 0.35 : 0,
                      rotate: isPrev ? -4 : isNext ? 4 : 0,
                      zIndex: isActive ? 20 : (isPrev || isNext) ? 10 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 240, damping: 26, mass: 0.9 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '24px',
                      overflow: 'hidden',
                      border: '6px solid #fff',
                      backgroundColor: feature.bg,
                      pointerEvents: isActive ? 'auto' : 'none',
                      transformOrigin: 'center center',
                    }}
                  >
                    {/* Project image */}
                    {feature.image && (
                      <img
                        src={feature.image}
                        alt={feature.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: isActive ? 'none' : 'grayscale(1) brightness(0.7)',
                          transition: 'filter 0.5s ease',
                        }}
                      />
                    )}

                    {/* Bottom text overlay */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          style={{
                            position: 'absolute',
                            inset: '0',
                            padding: '28px',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            pointerEvents: 'none',
                          }}
                        >
                          {/* Tag */}
                          <span style={{
                            display: 'inline-block',
                            backgroundColor: 'rgba(255,255,255,0.12)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '100px',
                            padding: '5px 14px',
                            fontSize: '0.65rem',
                            fontWeight: 600,
                            color: 'rgba(255,255,255,0.8)',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            marginBottom: '10px',
                            width: 'fit-content',
                          }}>
                            {feature.tag}
                          </span>

                          <p style={{
                            color: '#fff',
                            fontSize: '1.05rem',
                            fontWeight: 600,
                            lineHeight: 1.4,
                            letterSpacing: '-0.02em',
                            margin: '0 0 14px',
                          }}>
                            {feature.subtitle}
                          </p>

                          {/* Key metric */}
                          <div style={{ display: 'flex', gap: '16px' }}>
                            {(feature.impact?.metrics || feature.metrics || []).slice(0, 2).map((m) => (
                              <div key={m.label}>
                                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#CCFF00', letterSpacing: '-0.03em', lineHeight: 1 }}>
                                  {m.value}
                                </div>
                                <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '3px' }}>
                                  {m.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Link — active card only */}
                    {isActive && (
                      <Link
                        href={`/case-study/${feature.id}`}
                        style={{ position: 'absolute', inset: 0, zIndex: 30 }}
                        aria-label={`View ${feature.title} case study`}
                      />
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Navigation dots */}
            <div style={{
              position: 'absolute',
              bottom: '28px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '8px',
              zIndex: 30,
            }}>
              {FEATURES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleChipClick(i)}
                  style={{
                    width: i === currentIndex ? '24px' : '6px',
                    height: '6px',
                    borderRadius: '100px',
                    backgroundColor: i === currentIndex ? '#134901' : '#ccc',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.35s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
