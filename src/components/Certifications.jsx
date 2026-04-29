import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowLeft, HiArrowRight, HiExternalLink } from 'react-icons/hi'
import { FiAward, FiShield, FiHash, FiCalendar, FiX } from 'react-icons/fi'

const Certifications = ({ onNext, onPrev }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const certificates = [
    { title: 'Full Stack\nMERN', full: 'Full Stack Development (MERN)', issuer: 'GUVI', id: 'Hd2S7lr303O4R7441m', url: 'https://www.guvi.in/verify-certificate?id=Hd2S7lr303O4R7441m', date: 'Dec 2024', color: '#ef4444', desc: 'Complete MERN stack bootcamp covering React, Node.js, Express and MongoDB with real-world projects.' },
    { title: 'JavaScript', full: 'JavaScript', issuer: 'GUVI', id: 'q7o03Aux4204h4E371', url: 'https://www.guvi.in/verify-certificate?id=q7o03Aux4204h4E371', date: 'Nov 2024', color: '#d4a017', desc: 'Mastered ES6+ features, async programming, DOM manipulation and modern JS patterns.' },
    { title: 'React.js', full: 'React.js', issuer: 'GUVI', id: 'ZPG443370u9716B24t', url: 'https://www.guvi.in/verify-certificate?id=ZPG443370u9716B24t', date: 'Nov 2024', color: '#06b6d4', desc: 'Built dynamic UIs with React hooks, context API, component lifecycle and state management.' },
    { title: 'HTML', full: 'HTML', issuer: 'GUVI', id: '7u903341S2J4p4Y75t', url: 'https://www.guvi.in/verify-certificate?id=7u903341S2J4p4Y75t', date: 'Oct 2024', color: '#e34c26', desc: 'Semantic HTML5, accessibility best practices, forms and modern markup structure.' },
    { title: 'CSS', full: 'CSS', issuer: 'GUVI', id: 'A76s401440p3e7x32Z', url: 'https://www.guvi.in/verify-certificate?id=A76s401440p3e7x32Z', date: 'Oct 2024', color: '#1572b6', desc: 'Flexbox, Grid, animations, responsive design and CSS custom properties.' },
    { title: 'Bootstrap', full: 'Bootstrap', issuer: 'GUVI', id: '1a3B7p04Z24DieT374', url: 'https://www.guvi.in/verify-certificate?id=1a3B7p04Z24DieT374', date: 'Oct 2024', color: '#7952b3', desc: 'Responsive layouts using Bootstrap grid, components, utilities and theming.' },
    { title: 'Node.js', full: 'Node.js', issuer: 'GUVI', id: 'b837f74041qP34H12v', url: 'https://www.guvi.in/verify-certificate?id=b837f74041qP34H12v', date: 'Oct 2024', color: '#339933', desc: 'Server-side apps with Node.js, Express, REST APIs and middleware patterns.' },
    { title: 'MongoDB', full: 'MongoDB', issuer: 'GUVI', id: '743714g420F3c1K687', url: 'https://www.guvi.in/verify-certificate?id=743714g420F3c1K687', date: 'Oct 2024', color: '#47a248', desc: 'NoSQL database design, CRUD operations, aggregation pipelines and Mongoose ODM.' },
    { title: 'MySQL', full: 'MySQL', issuer: 'GUVI', id: '44LK5iE402731u473n', url: 'https://www.guvi.in/verify-certificate?id=44LK5iE402731u473n', date: 'Oct 2024', color: '#4479a1', desc: 'Relational database design, SQL queries, joins, indexing and stored procedures.' },
  ]

  return (
    <>
      <style>{`
        .badge-item:hover .badge-ring { transform: scale(1.08); }
        .badge-ring { transition: transform 0.2s ease; }
        .badge-pulse {
          position: absolute; inset: -4px; border-radius: 50%;
          border: 2px solid currentColor;
          animation: badgePulse 2s ease-out infinite;
          opacity: 0;
        }
        @keyframes badgePulse {
          0%   { transform: scale(0.95); opacity: 0.6; }
          100% { transform: scale(1.25); opacity: 0; }
        }
      `}</style>

      <div className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="container">

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-center" style={{ marginBottom: '1.5rem' }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              marginBottom: '0.75rem', padding: '0.5rem 1rem',
              background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
              borderRadius: '25px', color: 'white', fontSize: '0.85rem', fontWeight: 600,
              boxShadow: '0 4px 12px rgba(245,158,11,0.3)'
            }}>
              <FiShield size={16} /> {certificates.length} Verified Certificates
            </div>
            <h2 className="title" style={{ marginBottom: '0.5rem' }}>Certifications</h2>
            <p className="subtitle">Click a badge to view details</p>
            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 600, marginTop: '0.25rem' }}
            >
              👆 Click any badge below
            </motion.p>
          </motion.div>

          {/* Badge Wall */}
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            justifyContent: 'center',
            gap: isMobile ? '1rem' : '1.5rem',
            marginBottom: '1.5rem',
            padding: '0.5rem'
          }}>
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                className="badge-item"
                initial={{ opacity: 0, scale: 0, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                onClick={() => setSelected(selected === i ? null : i)}
                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
              >
                {/* Outer ring */}
                <div className="badge-ring" style={{
                  width: isMobile ? 72 : 88,
                  height: isMobile ? 72 : 88,
                  borderRadius: '50%',
                  background: selected === i
                    ? `radial-gradient(circle, ${cert.color}30, ${cert.color}10)`
                    : `radial-gradient(circle, ${cert.color}15, transparent)`,
                  border: `3px solid ${selected === i ? cert.color : cert.color + '60'}`,
                  boxShadow: selected === i ? `0 0 20px ${cert.color}50` : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', transition: 'all 0.2s ease'
                }}>
                  {/* Pulse ring */}
                  {selected !== i && (
                    <div className="badge-pulse" style={{ color: cert.color }} />
                  )}
                  {/* Inner circle */}
                  <div style={{
                    width: isMobile ? 52 : 64,
                    height: isMobile ? 52 : 64,
                    borderRadius: '50%',
                    background: `${cert.color}20`,
                    border: `2px solid ${cert.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'column', gap: 2
                  }}>
                    <FiAward size={isMobile ? 18 : 22} color={cert.color} />
                  </div>

                  {/* Verified tick */}
                  <div style={{
                    position: 'absolute', bottom: 2, right: 2,
                    width: 18, height: 18, borderRadius: '50%',
                    background: cert.color, border: '2px solid var(--bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <span style={{ color: 'white', fontSize: '0.55rem', fontWeight: 900 }}>✓</span>
                  </div>
                </div>

                {/* Label */}
                <span style={{
                  fontSize: isMobile ? '0.62rem' : '0.7rem',
                  fontWeight: 700, color: selected === i ? cert.color : 'var(--text)',
                  textAlign: 'center', maxWidth: isMobile ? 72 : 88,
                  lineHeight: 1.2, whiteSpace: 'pre-line',
                  transition: 'color 0.2s'
                }}>
                  {cert.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Detail Panel */}
          <AnimatePresence mode="wait">
            {selected !== null && (
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                style={{
                  maxWidth: 560, margin: '0 auto 1.5rem',
                  background: 'var(--card)',
                  border: `1px solid ${certificates[selected].color}`,
                  borderTop: `4px solid ${certificates[selected].color}`,
                  borderRadius: 14, padding: '1rem 1.25rem',
                  position: 'relative'
                }}
              >
                <button onClick={() => setSelected(null)} style={{
                  position: 'absolute', top: 10, right: 10,
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--text-light)', display: 'flex'
                }}><FiX size={16} /></button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: `${certificates[selected].color}18`,
                    border: `2px solid ${certificates[selected].color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <FiAward size={18} color={certificates[selected].color} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
                      {certificates[selected].full}
                    </h3>
                    <span style={{ fontSize: '0.72rem', color: certificates[selected].color, fontWeight: 600 }}>
                      {certificates[selected].issuer}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', lineHeight: 1.6, margin: '0 0 0.75rem' }}>
                  {certificates[selected].desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <FiCalendar size={11} color="var(--text-light)" />
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-light)' }}>{certificates[selected].date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <FiHash size={11} color="var(--text-light)" />
                      <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: certificates[selected].color }}>
                        {certificates[selected].id.slice(0, 12)}...
                      </span>
                    </div>
                  </div>
                  <a href={certificates[selected].url} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                      padding: '0.35rem 0.85rem',
                      background: certificates[selected].color, color: 'white',
                      borderRadius: '6px', textDecoration: 'none',
                      fontSize: '0.72rem', fontWeight: 700
                    }}
                  >
                    <HiExternalLink size={12} /> Verify Certificate
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: isMobile ? '6rem' : '2rem' }}
          >
            <motion.button className="btn btn-ghost" onClick={onPrev} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <HiArrowLeft /> Skills
            </motion.button>
            <motion.button className="btn" onClick={onNext} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              View Projects <HiArrowRight />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </>
  )
}

export default Certifications
