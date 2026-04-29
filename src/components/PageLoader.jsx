import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

// 0: Hero - Expanding concentric rings
const HeroLoader = () => (
  <div style={{ position: 'relative', width: 90, height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {[0, 1, 2].map(i => (
      <motion.div key={i}
        style={{ position: 'absolute', borderRadius: '50%', border: '2px solid #2563eb' }}
        initial={{ width: 18, height: 18, opacity: 0.9 }}
        animate={{ width: 90, height: 90, opacity: 0 }}
        transition={{ duration: 1.6, delay: i * 0.5, repeat: Infinity, ease: 'easeOut' }}
      />
    ))}
    <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#2563eb' }} />
  </div>
)

// 1: About - Heartbeat / pulse line (personal/human feel)
const AboutLoader = () => (
  <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.polyline
      points="0,30 20,30 30,10 40,50 50,20 60,40 70,30 90,30 100,30 120,30"
      stroke="#2563eb" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.4 }}
    />
  </svg>
)

// 2: Skills - Equalizer bars
const SkillsLoader = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 56 }}>
    {[0, 0.12, 0.24, 0.12, 0].map((delay, i) => (
      <motion.div key={i}
        style={{ width: 12, background: '#2563eb', borderRadius: '3px 3px 0 0' }}
        animate={{ height: ['10px', '56px', '10px'] }}
        transition={{ duration: 0.9, delay, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}
  </div>
)

// 3: Certifications - Medal with ribbon
const CertLoader = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <svg width="80" height="90" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ribbon left */}
      <motion.path d="M28 38 L16 70 L30 62 L36 74 L40 38"
        stroke="#2563eb" strokeWidth="2.5" fill="none" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.8 }}
      />
      {/* Ribbon right */}
      <motion.path d="M52 38 L64 70 L50 62 L44 74 L40 38"
        stroke="#2563eb" strokeWidth="2.5" fill="none" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.8 }}
      />
      {/* Circle badge */}
      <motion.circle cx="40" cy="24" r="20"
        stroke="#2563eb" strokeWidth="2.5" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.8 }}
      />
      {/* Star inside */}
      <motion.path d="M40 10 L42.9 18.6 L52 18.6 L44.6 23.8 L47.4 32.4 L40 27.2 L32.6 32.4 L35.4 23.8 L28 18.6 L37.1 18.6 Z"
        stroke="#2563eb" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.8 }}
      />
    </svg>
  </div>
)

// 4: Work - Three bouncing dots
const WorkLoader = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    {[0, 0.2, 0.4].map((delay, i) => (
      <motion.div key={i}
        style={{ width: 16, height: 16, borderRadius: '50%', background: '#2563eb' }}
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 0.7, delay, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}
  </div>
)

// 5: Contact - SVG envelope drawing itself
const ContactLoader = () => (
  <svg width="70" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.rect x="2" y="2" width="66" height="46" rx="5"
      stroke="#2563eb" strokeWidth="2.5" fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 0.5, ease: 'easeInOut' }}
    />
    <motion.polyline points="2,2 35,30 68,2"
      stroke="#2563eb" strokeWidth="2.5" fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.5, repeat: Infinity, repeatDelay: 0.5, ease: 'easeInOut' }}
    />
  </svg>
)

const loaders = [HeroLoader, AboutLoader, SkillsLoader, CertLoader, WorkLoader, ContactLoader]
const labels = ['Loading...', 'About Me', 'Skills', 'Certifications', 'My Work', 'Contact']

const PageLoader = ({ sectionIndex, onDone }) => {
  const Loader = loaders[sectionIndex % loaders.length]
  const label = labels[sectionIndex % labels.length]
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark'

  useEffect(() => {
    const t = setTimeout(onDone, 1800)
    return () => clearTimeout(t)
  }, [])

  const bg = isDark
    ? 'linear-gradient(to bottom, #000000, #1a1a2e)'
    : 'linear-gradient(to bottom, #a1c4fd, #c2e9fb)'

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9000,
      background: bg,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 24
    }}>
      <Loader />
      <p style={{
        fontSize: '0.78rem', color: '#2563eb',
        fontWeight: 700, letterSpacing: '0.1em',
        textTransform: 'uppercase', margin: 0
      }}>
        {label}
      </p>
    </div>
  )
}

export default PageLoader
