import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiDownload, HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FiGlobe, FiLinkedin } from 'react-icons/fi'
import useWindowSize from '../hooks/useWindowSize'

const Resume = ({ onPrev, onNext }) => {
  const { width } = useWindowSize()
  const isMobile = width <= 768

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Hemapathi.pdf'
    link.download = 'Hemapathi.pdf'
    link.click()
  }

  const Section = ({ title, children }) => (
    <section style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', paddingBottom: '0.4rem', borderBottom: '2px solid var(--accent)' }}>
        <h3 style={{ margin: 0, fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text)' }}>{title}</h3>
      </div>
      {children}
    </section>
  )

  const projects = [
    {
      title: 'Bus Booking System', period: 'Apr 2026 – May 2026',
      points: [
        'Created a bus booking website for 500+ users that lets them search routes and pick seats easily.',
        'Used MongoDB to make sure seat bookings are accurate and prevent two people from booking the same seat.',
        'Made a simple admin dashboard for the bus company to update their schedules and bus info instantly.',
        'Connected Stripe for safe payments and added automated emails so users get their tickets right after booking.'
      ]
    },
    {
      title: 'AI-Expense Tracker', period: 'Mar 2026 – Apr 2026',
      points: [
        'Fashioned a finance dashboard for 300+ users to monitor expenses with clear visual charts.',
        'Interfaced with AI services to categorize spending automatically, saving users time on manual entry.',
        'Standardized data storage for recurring transactions, helping users track their monthly budget accurately.',
        'Facilitated secure account access with JWT, ensuring user financial records remain private.'
      ]
    },
    {
      title: 'Fitness AI-Tracking', period: 'Feb 2026 – Mar 2026',
      points: [
        'Architected a fitness platform that logs daily activity and monitors health metrics for personalized user insights.',
        'Interfaced with AI-driven models to generate customized workout routines based on individual fitness goals.',
        'Streamlined user experience by creating an intuitive dashboard that visualizes performance trends and recovery data.',
        'Configured secure data storage to maintain user privacy, ensuring health records are protected and easily accessible.'
      ]
    },
    {
      title: 'Healthcare Platform', period: 'Oct 2025 – Dec 2025',
      points: [
        'Built a healthcare platform to manage patient records, appointments, and prescriptions for 1,000+ users.',
        'Enabled real-time doctor-patient video consultations using WebRTC and processed payments via Stripe.',
        'Reduced missed medications by 15% through automated SMS and email reminder workflows.',
        'Secured all API endpoints with JWT and RBAC using Express.js and MongoDB.'
      ]
    },
    {
      title: 'Grocery E-commerce Website', period: 'Sept 2025 – Oct 2025',
      points: [
        'Designed a scalable grocery e-commerce platform with secure JWT authentication for 500+ users.',
        'Processed 100+ test transactions end-to-end by integrating Stripe for cart and checkout flows.',
        'Enhanced product discovery by implementing dynamic search and filtering via API-driven rendering.',
        'Constructed a centralized admin console to manage inventory, monitor order status, and update product listings.'
      ]
    }
  ]

  return (
    <div className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-4">
          <h2 className="title">Resume</h2>
          <p className="subtitle">My professional journey and qualifications</p>
        </motion.div>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <motion.button onClick={handleDownload} className="btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', position: 'relative' }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          >
            <HiDownload /> Download Resume
            <motion.span
              style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'var(--accent)', color: 'white', fontSize: '0.6rem', padding: '2px 6px', borderRadius: '10px', fontWeight: '600' }}
              animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}
            >PDF</motion.span>
          </motion.button>
        </div>

        <motion.div className="card" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: '800px', margin: '0 auto', borderTop: '4px solid var(--accent)' }}
        >
          <div style={{ padding: isMobile ? '1.25rem' : '2.5rem' }}>

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
              <h1 style={{ fontSize: isMobile ? '1.8rem' : '2.4rem', margin: '0 0 0.15rem', fontWeight: '900', letterSpacing: '0.05em', color: 'var(--text)' }}>HEMAPATHI</h1>
              <p style={{ margin: '0 0 0.75rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>MERN Stack Developer | Full Stack Web Developer</p>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: isMobile ? '0.5rem' : '1.5rem' }}>
                {[
                  { icon: <HiLocationMarker size={13} />, text: 'Sivakasi, TamilNadu' },
                  { icon: <HiPhone size={13} />, text: '+91-8610237049' },
                  { icon: <HiMail size={13} />, text: 'hemahemapthi2001@gmail.com' },
                  { icon: <FiGlobe size={13} />, text: 'Portfolio' },
                  { icon: <FiLinkedin size={13} />, text: 'LinkedIn' },
                ].map((item, i) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'var(--text-light)' }}>
                    <span style={{ color: 'var(--accent)' }}>{item.icon}</span>{item.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Summary */}
            <Section title="Professional Summary">
              <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-light)', margin: 0 }}>
                Full Stack Developer specializing in the MERN stack with experience building and deploying 4+ web applications for 5,000+ users. Delivered measurable results including 40% system performance improvement, 25% increase in user retention, and 15% reduction in missed medications. Proficient in building secure REST APIs, integrating third-party payment systems, and implementing real-time communication features.
              </p>
            </Section>

            {/* Education */}
            <Section title="Education">
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.25rem' }}>
                <div>
                  <p style={{ margin: '0 0 0.1rem', fontSize: '0.88rem', fontWeight: '600', color: 'var(--text)' }}>Bachelor of Engineering (B.E.) in Computer Science and Engineering (CSE)</p>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-light)' }}>Kathir College of Engineering</p>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '600', whiteSpace: 'nowrap' }}>July 2019 – July 2023</span>
              </div>
            </Section>

            {/* Certifications */}
            <Section title="Certificates">
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.25rem' }}>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text)' }}>Zen Full Stack Developer Program — GUVI Geeks Pvt. Ltd.</p>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '600', whiteSpace: 'nowrap' }}>Apr 2024 – Oct 2024</span>
              </div>
            </Section>

            {/* Skills */}
            <Section title="Skills">
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '0.4rem 1rem' }}>
                {[
                  { label: 'Front-end Development', value: 'HTML, CSS, Bootstrap, JavaScript(ES6+), React.js, Tailwind CSS' },
                  { label: 'Back-end Development', value: 'Node.js, Express.js, RESTful APIs, JWT, OAuth2' },
                  { label: 'Database Management', value: 'MongoDB (NoSQL), MySQL' },
                  { label: 'Tools & Technologies', value: 'Git, GitHub, Netlify, Render' },
                ].map((s) => (
                  <div key={s.label} style={{ fontSize: '0.82rem' }}>
                    <span style={{ fontWeight: '700', color: 'var(--text)' }}>• {s.label}: </span>
                    <span style={{ color: 'var(--text-light)' }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Projects */}
            <Section title="Projects">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {projects.map((p) => (
                  <div key={p.title}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.3rem' }}>
                      <span style={{ fontWeight: '700', fontSize: '0.88rem', color: 'var(--text)' }}>{p.title}</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--accent)', fontWeight: '600' }}>{p.period}</span>
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                      {p.points.map((pt, i) => (
                        <li key={i} style={{ fontSize: '0.82rem', color: 'var(--text-light)', lineHeight: 1.6 }}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            {/* Languages */}
            <Section title="Languages">
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {['Tamil (Native)', 'English (Professional)'].map((l) => (
                  <span key={l} style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>• {l}</span>
                ))}
              </div>
            </Section>

          </div>
        </motion.div>

        <motion.div
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: isMobile ? '1rem' : '2rem', paddingBottom: isMobile ? '6rem' : '2rem' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        >
          <motion.button className="btn btn-ghost" onClick={onPrev} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <HiArrowLeft /> Back to Home
          </motion.button>
          <motion.button className="btn" onClick={onNext} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume
