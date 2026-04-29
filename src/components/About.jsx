import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { FiUser, FiMapPin, FiHeart, FiTarget, FiCode, FiZap } from 'react-icons/fi'
import useWindowSize from '../hooks/useWindowSize'

const About = ({ onNext, onPrev }) => {
  const { width } = useWindowSize()
  const isMobile = width <= 768
  const [step, setStep] = useState(0)

  // Drive the reveal steps
  useEffect(() => {
    const timings = [300, 700, 1100, 1600, 2000, 2400]
    const timers = timings.map((t, i) => setTimeout(() => setStep(i + 1), t))
    return () => timers.forEach(clearTimeout)
  }, [])

  const facts = [
    { icon: <FiMapPin size={13} color="var(--accent)" />, label: 'Based in', value: 'Tamil Nadu , India' },
    { icon: <FiUser size={13} color="var(--accent)" />, label: 'Education', value: 'B.E. Computer Science, Kathir College og Engineering' },
    { icon: <FiTarget size={13} color="var(--accent)" />, label: 'Currently', value: 'Open to Full-Time Opportunities' },
    { icon: <FiHeart size={13} color="var(--accent)" />, label: 'Interests', value: 'AI-powered apps, Open Source, Problem Solving' },
  ]

  const stats = [
    { number: '7+', label: 'Projects', icon: <FiCode size={14} /> },
    { number: '10K+', label: 'Users', icon: <FiUser size={14} /> },
    { number: '+40%', label: 'Performance', icon: <FiZap size={14} /> },
    { number: '99.9%', label: 'Uptime', icon: <FiTarget size={14} /> },
  ]

  const slideUp = (delay) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
  })

  const slideLeft = (delay) => ({
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }
  })

  const slideRight = (delay) => ({
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }
  })

  return (
    <div className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">

        {/* Title — curtain wipe reveal */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="title">About Me</h2>
          </motion.div>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            The person behind the code
          </motion.p>
          {/* Accent underline sweep */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
            style={{ height: 2, background: 'var(--accent)', width: 60, margin: '0 auto', transformOrigin: 'left' }}
          />
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '0.75rem' }}>

          {/* Bio Card — slides from left with a door-open feel */}
          <motion.div
            className="card"
            {...slideLeft(0.3)}
            style={{ borderTop: '4px solid var(--accent)', position: 'relative', overflow: 'hidden' }}
          >
            {/* Shimmer sweep on load */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: 0, left: 0, width: '50%', height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.06), transparent)',
                pointerEvents: 'none', zIndex: 1
              }}
            />
            <div style={{ padding: '0.85rem 1.25rem 0.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiUser size={16} color="var(--accent)" /> Who I Am
              </h3>
              <div className="mono" style={{ fontSize: '0.72rem' }}>Hemapathi B — Full Stack Developer</div>
            </div>
            <div style={{ padding: '0.5rem 1.25rem 1rem' }}>
              {[
                "I'm a self-driven Full Stack Developer from Tamil Nadu who fell in love with building things on the internet. I graduated with a B.E. in Computer Science in 2023 and have since been obsessed with turning ideas into real products people actually use.",
                "I thrive at the intersection of creativity and logic — crafting smooth UIs or architecting backends that handle thousands of users. I take full ownership from first commit to production.",
                "Outside coding, I explore new AI tools, read about system design, and push myself to build something more ambitious each time."
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                  style={{ marginBottom: '0.5rem', color: 'var(--text-light)', lineHeight: 1.6, fontSize: '0.83rem' }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Quick Facts Card — slides from right, facts appear one by one */}
          <motion.div
            className="card"
            {...slideRight(0.4)}
            style={{ borderTop: '4px solid var(--accent)', position: 'relative', overflow: 'hidden' }}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: '-200%' }}
              transition={{ duration: 0.8, delay: 0.7, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: 0, left: 0, width: '50%', height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.06), transparent)',
                pointerEvents: 'none', zIndex: 1
              }}
            />
            <div style={{ padding: '0.85rem 1.25rem 0.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiTarget size={16} color="var(--accent)" /> Quick Facts
              </h3>
              <div className="mono" style={{ fontSize: '0.72rem' }}>At a glance</div>
            </div>
            <div style={{ padding: '0.5rem 1.25rem 1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {facts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                      paddingBottom: '0.5rem',
                      borderBottom: index < facts.length - 1 ? '1px solid var(--border)' : 'none'
                    }}
                  >
                    <div style={{ marginTop: '2px', flexShrink: 0 }}>{fact.icon}</div>
                    <div>
                      <div style={{ fontSize: '0.65rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.1rem' }}>{fact.label}</div>
                      <div style={{ fontSize: '0.83rem', color: 'var(--text)', fontWeight: 500 }}>{fact.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats — each pops up with a bounce */}
        <motion.div
          {...slideUp(0.9)}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '0.75rem', marginTop: '1.25rem' }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 + i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
              style={{
                textAlign: 'center', padding: '0.6rem', borderRadius: '12px',
                background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)',
                cursor: 'default'
              }}
            >
              <div style={{ color: 'var(--accent)', marginBottom: '0.2rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent)', lineHeight: 1 }}>{stat.number}</div>
              <div className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-light)', marginTop: '0.2rem' }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: isMobile ? '6rem' : '1rem', marginTop: '1.25rem' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        >
          <motion.button className="btn btn-ghost" onClick={onPrev} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <HiArrowLeft /> Back
          </motion.button>
          <motion.button className="btn" onClick={onNext} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Skills <HiArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default About
