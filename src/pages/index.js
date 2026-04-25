import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import CaseStudies from '../components/CaseStudies'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { ease } from '../components/motion/motionConfig'

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
        <meta
          property="og:description"
          content="Complex SaaS into clarity. 40M+ users served across Fintech, GovTech, AI, and Web3."
        />
        <meta property="og:url" content="https://quadriismail.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://quadriismail.com" />
      </Head>

      <Navigation />
      <main>
        <Hero />
        <CaseStudies />
        <AboutSection />
        <ServicesSection />
        <MentorshipSection />
      </main>
      <Footer />
    </>
  )
}

function AboutSection() {
  return (
    <section id="about" style={{ backgroundColor: '#fff', padding: '80px 0' }}>
      <div className="container-main">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'center',
        }}>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
          >
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#888',
              display: 'block',
              marginBottom: '12px',
            }}>
              About
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: '#134901',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}>
              I turn complexity into products people actually use.
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.8, marginBottom: '16px' }}>
              Six years ago I started designing digital products in Lagos with one conviction: that great design
              isn't about making things pretty — it's about making them work for the people who need them most.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.8, marginBottom: '16px' }}>
              Since then I've worked on platforms that now serve 40 million users, helped digitise Nigeria's
              federal civil service, and designed experiences for one of the world's largest annual human
              gatherings. Every project starts with the same question: what do people actually need to do,
              and what's stopping them?
            </p>
            <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.8, marginBottom: '32px' }}>
              I'm open to senior design roles and consulting engagements — remote or hybrid.
              If you're building something complex, let's talk.
            </p>

            {/* Stat pills */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['6+ Years', '40M+ Users', 'Lagos, Nigeria', 'Open to Remote'].map((tag) => (
                <span key={tag} style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#134901',
                  backgroundColor: 'rgba(19,73,1,0.08)',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  border: '1px solid rgba(19,73,1,0.15)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Photo + philosophy cards */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
          >
            {/* Photo placeholder */}
            <div style={{
              backgroundColor: '#134901',
              borderRadius: '16px',
              height: '280px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Replace with <Image src="/images/quadri.jpg" ... /> when photo is added */}
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'rgba(204,255,0,0.6)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>
                Photo coming soon
              </span>
            </div>

            {/* Philosophy cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
              {[
                { headline: 'Clarity', sub: 'Over Clout' },
                { headline: 'Frameworks', sub: 'Not Fluff' },
                { headline: 'Long', sub: 'Game Built' },
              ].map((card) => (
                <div key={card.headline} style={{
                  backgroundColor: '#F8F8F6',
                  borderRadius: '12px',
                  padding: '16px',
                  border: '1px solid #E0E0DC',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#134901', marginBottom: '2px' }}>
                    {card.headline}
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 500, color: '#888' }}>
                    {card.sub}
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

function ServicesSection() {
  const services = [
    {
      title: 'Product Design',
      desc: 'End-to-end design for SaaS products — from discovery and strategy through to high-fidelity prototypes and handoff. Built for teams that ship.',
      bullets: ['User Research & Strategy', 'Interaction Design', 'Prototype & Validation', 'Handoff to Engineering'],
      color: '#134901',
    },
    {
      title: 'Design Systems',
      desc: 'Scalable component libraries and design tokens that engineering teams actually use. Built to grow without breaking.',
      bullets: ['Component Architecture', 'Token System', 'Documentation', 'Cross-team Alignment'],
      color: '#0a3d6b',
    },
    {
      title: 'Brand Mentorship',
      desc: 'For individual designers and creatives building a personal brand. Positioning, content strategy, and monetisation — the practical stuff.',
      bullets: ['Personal Brand Strategy', 'Content Systems', 'Rate & Positioning', 'Community Building'],
      color: '#6b1a6b',
    },
  ]

  return (
    <section id="services" style={{ backgroundColor: '#F8F8F6', padding: '80px 0' }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          style={{ marginBottom: '56px' }}
        >
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#888',
            display: 'block',
            marginBottom: '12px',
          }}>
            What I Do
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: '#134901',
            lineHeight: 1.05,
          }}>
            Services
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                padding: '36px',
                border: '1px solid #E0E0DC',
                borderTop: `3px solid ${service.color}`,
              }}
            >
              <h3 style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                color: '#134901',
                letterSpacing: '-0.02em',
                marginBottom: '12px',
              }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '24px' }}>
                {service.desc}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {service.bullets.map((b) => (
                  <li key={b} style={{ fontSize: '0.85rem', fontWeight: 600, color: '#444', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: service.color, fontWeight: 800 }}>—</span> {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MentorshipSection() {
  const pillars = [
    {
      icon: '01',
      title: 'Clarity',
      desc: 'Position yourself as the obvious choice in your niche. Define your offer, your audience, and your unique point of view.',
    },
    {
      icon: '02',
      title: 'Visibility',
      desc: 'Build content systems that work while you sleep. Consistent, strategic presence that attracts the right people.',
    },
    {
      icon: '03',
      title: 'Income',
      desc: 'Monetise your skills at your actual worth. Rates, packages, and pipelines for designers who\'re done being underpaid.',
    },
  ]

  return (
    <section id="mentorship" style={{ backgroundColor: '#134901', padding: '80px 0' }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          style={{ marginBottom: '56px', maxWidth: '640px' }}
        >
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'rgba(204,255,0,0.6)',
            display: 'block',
            marginBottom: '12px',
          }}>
            Mentorship
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: '#F8F8F6',
            lineHeight: 1.05,
            marginBottom: '16px',
          }}>
            Turn Your Skill<br />
            <span style={{ color: '#CCFF00' }}>Into Leverage</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(248,248,246,0.7)', lineHeight: 1.7 }}>
            For African and global digital creatives ready to get clear, visible, and paid.
            No fluff. No gatekeeping. Just frameworks that work.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '16px',
                padding: '36px',
                border: '1px solid rgba(204,255,0,0.15)',
              }}
            >
              <div style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#CCFF00',
                marginBottom: '16px',
              }}>
                {pillar.icon}
              </div>
              <h3 style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                color: '#F8F8F6',
                letterSpacing: '-0.02em',
                marginBottom: '12px',
              }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(248,248,246,0.65)', lineHeight: 1.7 }}>
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
        >
          <motion.a
            href="mailto:quadrihorlar@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(204,255,0,0.3)' }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            style={{
              backgroundColor: '#CCFF00',
              color: '#134901',
              padding: '14px 32px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Book a Mentorship Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
