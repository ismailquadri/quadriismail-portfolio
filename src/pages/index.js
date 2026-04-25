import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import TrustedMarquee from '../components/TrustedMarquee'
import ProjectCarousel from '../components/ProjectCarousel'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const E = [0.22, 1, 0.36, 1]

export default function Home() {
  return (
    <>
      <Head>
        <title>Quadri Ismail — Senior Product Designer</title>
        <meta
          name="description"
          content="Senior Product Designer with 6+ years shipping SaaS across Fintech, GovTech, and AI. Platforms designed for 40M+ users worldwide. Based in Lagos, Nigeria."
        />
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
        <TrustedMarquee />
        <ProjectCarousel />
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
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: '#0F0F0F',
              lineHeight: 1.05,
              marginBottom: '32px',
            }}>
              I turn complexity into products people actually use.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <p style={{ fontSize: '1.02rem', color: '#555', lineHeight: 1.8, fontWeight: 400 }}>
                Six years ago I started designing digital products in Lagos with one conviction:
                great design isn't about making things pretty — it's about making them work
                for the people who need them most.
              </p>
              <p style={{ fontSize: '1.02rem', color: '#555', lineHeight: 1.8, fontWeight: 400 }}>
                Since then I've shipped platforms that serve 40 million users, helped
                digitise Nigeria's federal civil service, and designed the experience for
                one of the world's largest annual human gatherings — Hajj.
              </p>
              <p style={{ fontSize: '1.02rem', color: '#555', lineHeight: 1.8, fontWeight: 400 }}>
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
                  backgroundColor: '#e8e8e4',
                  padding: '7px 16px',
                  borderRadius: '100px',
                  letterSpacing: '-0.01em',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — photo + philosophy tiles */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: E }}
          >
            {/* Photo placeholder */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '20px',
              height: '340px',
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
                fontSize: '0.72rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.25)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                position: 'relative',
              }}>
                Add photo: /public/images/quadri.jpg
              </span>
            </div>

            {/* Philosophy grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              {[
                { top: 'Clarity', bot: 'Over Clout' },
                { top: 'Frameworks', bot: 'Not Fluff' },
                { top: 'Long Game', bot: 'Always' },
              ].map((c) => (
                <div key={c.top} style={{
                  backgroundColor: '#fff',
                  borderRadius: '14px',
                  padding: '18px 14px',
                  textAlign: 'center',
                  border: '1px solid #e8e8e4',
                }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F0F0F', letterSpacing: '-0.02em' }}>
                    {c.top}
                  </div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 500, color: '#aaa', marginTop: '4px' }}>
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
    desc: 'End-to-end design for SaaS products — from discovery and strategy through to high-fidelity prototypes and engineering handoff.',
    tags: ['User Research', 'Interaction Design', 'Prototyping', 'Handoff'],
  },
  {
    num: '02',
    title: 'Design Systems',
    desc: 'Scalable component libraries and design tokens that engineering teams actually use. Built to grow without breaking your product.',
    tags: ['Component Architecture', 'Token System', 'Documentation', 'Alignment'],
  },
  {
    num: '03',
    title: 'Brand Mentorship',
    desc: 'For designers building a personal brand. Positioning, content strategy, and monetisation — the practical stuff that moves the needle.',
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
            fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
            fontWeight: 800,
            color: '#0F0F0F',
            margin: 0,
            letterSpacing: '-0.04em',
            lineHeight: 0.92,
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
                gridTemplateColumns: '72px 1fr auto',
                gap: '32px',
                alignItems: 'start',
                padding: '40px 0',
                borderBottom: '1px solid #eaeae6',
              }}
            >
              <span style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                color: '#ccc',
                letterSpacing: '0.08em',
                paddingTop: '6px',
                textTransform: 'uppercase',
              }}>
                {s.num}
              </span>

              <div>
                <h3 style={{
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  fontWeight: 700,
                  color: '#0F0F0F',
                  letterSpacing: '-0.03em',
                  marginBottom: '10px',
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.75, maxWidth: '520px', marginBottom: '16px', fontWeight: 400 }}>
                  {s.desc}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {s.tags.map((t) => (
                    <span key={t} style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: '#888',
                      backgroundColor: '#f5f5f3',
                      padding: '5px 14px',
                      borderRadius: '100px',
                      letterSpacing: '-0.01em',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <motion.a
                href="mailto:quadrihorlar@gmail.com"
                whileHover={{ backgroundColor: '#0F0F0F', color: '#fff', borderColor: '#0F0F0F' }}
                transition={{ duration: 0.2 }}
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#444',
                  textDecoration: 'none',
                  padding: '10px 22px',
                  borderRadius: '100px',
                  border: '1.5px solid #d8d8d4',
                  whiteSpace: 'nowrap',
                  alignSelf: 'flex-start',
                  marginTop: '4px',
                  display: 'inline-block',
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

function Mentorship() {
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
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: '#fff',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}>
              Turn your skill<br />into leverage.
            </h2>

            <p style={{ fontSize: '1.02rem', color: '#555', lineHeight: 1.8, marginBottom: '40px', maxWidth: '380px', fontWeight: 400 }}>
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
                fontWeight: 600,
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: '#CCFF00',
                  letterSpacing: '0.08em',
                  paddingTop: '4px',
                  textTransform: 'uppercase',
                }}>
                  {p.n}
                </span>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#fff',
                    letterSpacing: '-0.02em',
                    marginBottom: '8px',
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.75, margin: 0, fontWeight: 400 }}>
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
