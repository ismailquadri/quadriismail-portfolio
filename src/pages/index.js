import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import CaseStudies from '../components/CaseStudies'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const E = [0.22, 1, 0.36, 1]

export default function Home() {
  return (
    <>
      <Head>
        <title>Quadri Ismail — Senior Product Designer</title>
        <meta name="description" content="Senior Product Designer with 6+ years shipping SaaS across Fintech, GovTech, and AI. Platforms designed for 40M+ users worldwide. Based in Lagos, Nigeria." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Quadri Ismail — Senior Product Designer" />
        <meta property="og:description" content="Complex SaaS into clarity. 40M+ users served across Fintech, GovTech, AI, and Web3." />
        <meta property="og:url" content="https://quadriismail.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://quadriismail.com" />
      </Head>
      <Navigation />
      <main>
        <Hero />
        <CaseStudies />
        <About />
        <Services />
        <Mentorship />
      </main>
      <Footer />
    </>
  )
}

/* ─── About ─────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" style={{ backgroundColor: '#f5f5f3', padding: '120px 0' }}>
      <div className="wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
          alignItems: 'start',
        }}>
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: E }}
          >
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              color: '#aaa',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              display: 'block',
              marginBottom: '20px',
            }}>
              About
            </span>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#0F0F0F',
              lineHeight: 1.05,
              marginBottom: '32px',
            }}>
              I turn complexity into products people actually use.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.8 }}>
                Six years ago I started designing digital products in Lagos with one conviction:
                great design isn't about making things pretty — it's about making them work
                for the people who need them most.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.8 }}>
                Since then I've shipped platforms that serve 40 million users, helped
                digitise Nigeria's federal civil service, and designed the experience for
                one of the world's largest annual human gatherings — Hajj.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.8 }}>
                I'm open to senior design roles and consulting engagements, remote or hybrid.
                If you're building something complex, let's talk.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '36px' }}>
              {['6+ Years', '40M+ Users', 'Lagos, Nigeria', 'Open to Remote'].map((tag) => (
                <span key={tag} style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: '#444',
                  backgroundColor: '#eaeae6',
                  padding: '6px 14px',
                  borderRadius: '100px',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — photo + philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: E }}
          >
            {/* Photo placeholder — swap with <Image> when photo is ready */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '16px',
              height: '320px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at 40% 60%, rgba(19,73,1,0.4) 0%, transparent 65%)',
              }} />
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                position: 'relative',
              }}>
                Add photo: /public/images/quadri.jpg
              </span>
            </div>

            {/* Three philosophy tags */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              {[
                { top: 'Clarity', bot: 'Over Clout' },
                { top: 'Frameworks', bot: 'Not Fluff' },
                { top: 'Long', bot: 'Game Built' },
              ].map((c) => (
                <div key={c.top} style={{
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  padding: '16px 12px',
                  textAlign: 'center',
                  border: '1px solid #e8e8e4',
                }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F0F0F', letterSpacing: '-0.01em' }}>
                    {c.top}
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 500, color: '#aaa', marginTop: '2px' }}>
                    {c.bot}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Services ───────────────────────────────────────────────────── */
const services = [
  {
    num: '01',
    title: 'Product Design',
    desc: 'End-to-end design for SaaS products — from discovery and strategy through to high-fidelity prototypes and engineering handoff. Built for teams that ship.',
    tags: ['User Research', 'Interaction Design', 'Prototyping', 'Handoff'],
  },
  {
    num: '02',
    title: 'Design Systems',
    desc: 'Scalable component libraries and design tokens that engineering teams actually use. Structured to grow without breaking your product.',
    tags: ['Component Architecture', 'Token System', 'Documentation', 'Alignment'],
  },
  {
    num: '03',
    title: 'Brand Mentorship',
    desc: 'For individual designers building a personal brand. Positioning, content strategy, and monetisation — the practical stuff that actually moves the needle.',
    tags: ['Positioning', 'Content Systems', 'Rates & Pricing', 'Community'],
  },
]

function Services() {
  return (
    <section id="services" style={{ backgroundColor: '#fff', padding: '120px 0' }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: E }}
          style={{ marginBottom: '72px' }}
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
            What I Do
          </span>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 900,
            color: '#0F0F0F',
            margin: 0,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
          }}>
            Services
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: E }}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: '32px',
                alignItems: 'start',
                padding: '40px 0',
                borderBottom: '1px solid #eaeae6',
              }}
            >
              <span style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#ccc',
                letterSpacing: '0.06em',
                paddingTop: '6px',
              }}>
                {s.num}
              </span>

              <div>
                <h3 style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
                  fontWeight: 800,
                  color: '#0F0F0F',
                  letterSpacing: '-0.03em',
                  marginBottom: '12px',
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.7, maxWidth: '520px', marginBottom: '16px' }}>
                  {s.desc}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {s.tags.map((t) => (
                    <span key={t} style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: '#888',
                      backgroundColor: '#f5f5f3',
                      padding: '4px 12px',
                      borderRadius: '100px',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <motion.a
                href="mailto:quadrihorlar@gmail.com"
                whileHover={{ backgroundColor: '#0F0F0F', color: '#fff' }}
                transition={{ duration: 0.2 }}
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#0F0F0F',
                  textDecoration: 'none',
                  padding: '10px 20px',
                  borderRadius: '100px',
                  border: '1.5px solid #d4d4d0',
                  whiteSpace: 'nowrap',
                  alignSelf: 'flex-start',
                  marginTop: '4px',
                }}
              >
                Let's talk ↗
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Mentorship ─────────────────────────────────────────────────── */
function Mentorship() {
  const pillars = [
    {
      n: '01',
      title: 'Clarity',
      desc: 'Define your positioning, your niche, and your offer. Become the obvious choice instead of the best-kept secret.',
    },
    {
      n: '02',
      title: 'Visibility',
      desc: 'Build content systems that work while you sleep. Consistent, strategic presence that attracts the right people.',
    },
    {
      n: '03',
      title: 'Income',
      desc: 'Monetise at your actual worth. Packages, rates, and pipelines for designers done with being underpaid.',
    },
  ]

  return (
    <section id="mentorship" style={{ backgroundColor: '#0F0F0F', padding: '120px 0' }}>
      <div className="wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '80px',
          alignItems: 'start',
        }}>
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: E }}
          >
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              color: '#444',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              display: 'block',
              marginBottom: '20px',
            }}>
              Mentorship
            </span>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#fff',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}>
              Turn your skill<br />into leverage.
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#666', lineHeight: 1.8, marginBottom: '40px', maxWidth: '380px' }}>
              For African and global digital creatives ready to get clear, visible, and paid.
              No fluff. No gatekeeping. Just frameworks that work.
            </p>

            <motion.a
              href="mailto:quadrihorlar@gmail.com"
              whileHover={{ backgroundColor: '#fff', color: '#0F0F0F' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'inline-block',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: '#fff',
                padding: '13px 30px',
                borderRadius: '100px',
                textDecoration: 'none',
                border: '1.5px solid rgba(255,255,255,0.2)',
              }}
            >
              Book a mentorship call
            </motion.a>
          </motion.div>

          {/* Right — pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {pillars.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: E }}
                style={{
                  padding: '32px 0',
                  borderBottom: i < pillars.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr',
                  gap: '20px',
                }}
              >
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: '#CCFF00',
                  letterSpacing: '0.06em',
                  paddingTop: '4px',
                }}>
                  {p.n}
                </span>
                <div>
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '-0.02em',
                    marginBottom: '8px',
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
