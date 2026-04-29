import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiEye } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { gsap } from 'gsap'
import useWindowSize from '../hooks/useWindowSize'

const Hero = ({ onNext, onResume }) => {
  const { width } = useWindowSize()
  const isMobile = width <= 768
  const bulbRef = useRef(null)
  const laptopRef = useRef(null)
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Hemapathi'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)

    gsap.timeline({ repeat: -1 })
      .to(bulbRef.current, { y: -10, rotation: 2, duration: 2, ease: 'power2.inOut' })
      .to(bulbRef.current, { y: 5, rotation: -1, duration: 1.5, ease: 'power2.inOut' })
      .to(bulbRef.current, { y: 0, rotation: 0, duration: 1, ease: 'power2.inOut' })

    gsap.timeline({ repeat: -1 })
      .to(laptopRef.current, { x: 15, rotation: -10, scale: 1.1, duration: 2, ease: 'elastic.out(1, 0.3)' })
      .to(laptopRef.current, { x: -5, rotation: 5, scale: 0.9, duration: 1.5, ease: 'bounce.out' })
      .to(laptopRef.current, { x: 0, rotation: 0, scale: 1, duration: 1, ease: 'power2.inOut' })

    return () => clearInterval(timer)
  }, [])

  const socials = [
    { icon: FiGithub, href: 'https://github.com/hemahemapathi' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/hemapathi-b-560489381' },
    { icon: FiMail, href: 'mailto:hemahemapathi2001@gmail.com' }
  ]

  return (
    <div className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '2rem', paddingBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center', gap: isMobile ? '2rem' : '4rem', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textAlign: isMobile ? 'center' : 'left' }}
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.35rem 1rem', borderRadius: '999px',
                background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)',
                color: 'var(--accent)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1rem'
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              Available for work
            </motion.div>

            {/* Hello */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--accent)', marginBottom: '0.25rem', letterSpacing: '0.02em', fontFamily: 'var(--font-primary)' }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              className="title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              style={{ marginBottom: '0.75rem' }}
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                style={{ color: 'var(--accent)' }}
              >|</motion.span>
            </motion.h1>

            {/* Role pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.3rem 0.85rem', borderRadius: '8px', marginBottom: '1rem',
                background: 'var(--card)', border: '1px solid var(--border)',
                color: 'var(--text-light)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: '600'
              }}
            >
              <span style={{ color: '#10b981' }}>▶</span> Full Stack Developer · MERN
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              Crafting digital experiences with clean code and modern design
            </motion.p>

            {/* Buttons */}
            <motion.div
              style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', justifyContent: isMobile ? 'center' : 'flex-start' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <motion.button className="btn" onClick={() => onNext && onNext()} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                View My Work <HiArrowRight />
              </motion.button>
              <motion.button onClick={onResume} className="btn btn-ghost" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <HiEye /> Resume
              </motion.button>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', justifyContent: isMobile ? 'center' : 'flex-start' }}
            >
              <div style={{ height: '1px', width: '40px', background: 'var(--border)' }} />
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)' }}>find me on</span>
              <div style={{ height: '1px', width: '40px', background: 'var(--border)' }} />
            </motion.div>

            {/* Socials */}
            <motion.div
              style={{ display: 'flex', gap: '1rem', justifyContent: isMobile ? 'center' : 'flex-start' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '44px', height: '44px', borderRadius: '50%',
                    border: '2px solid var(--border)', color: 'var(--text-light)', transition: 'all 0.2s ease'
                  }}
                  whileHover={{ scale: 1.15, borderColor: 'var(--accent)', color: 'var(--accent)' }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="card" style={{ 
              width: '300px', height: '420px', position: 'relative', overflow: 'visible',
              border: '1.5px solid rgba(37,99,235,0.25)',
              boxShadow: '0 8px 40px rgba(37,99,235,0.12), 0 2px 8px rgba(0,0,0,0.08)'
            }}>
              {/* Glow */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '16px', zIndex: -1,
                background: 'linear-gradient(135deg, var(--accent), #60a5fa)',
                opacity: 0.15, filter: 'blur(20px)'
              }} />

              <div className="card-body" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                {/* Floating code badge */}
                <div
                  ref={bulbRef}
                  style={{
                    position: 'absolute', top: '-24px', right: '-24px',
                    width: '80px', height: '50px', background: 'var(--card)',
                    border: '2px solid var(--accent)', borderRadius: '8px',
                    display: 'flex', flexDirection: 'column', overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(37,99,235,0.25)'
                  }}
                >
                  <div style={{ height: '10px', background: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '3px', paddingLeft: '5px' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#f87171' }} />
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#fbbf24' }} />
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80' }} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: 'var(--accent)', fontFamily: 'monospace' }}>
                    {'<code/>'}
                  </div>
                </div>

                {/* Floating laptop */}
                <div
                  ref={laptopRef}
                  style={{
                    position: 'absolute', bottom: '-16px', left: '-16px',
                    width: '40px', height: '40px', background: 'var(--card)',
                    border: '2px solid var(--accent)', borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10
                  }}
                >
                  💻
                </div>

                {/* Avatar */}
                <div style={{
                  width: '110px', height: '110px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent), #60a5fa)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '3.5rem', marginBottom: '1.5rem',
                  boxShadow: '0 8px 32px rgba(37,99,235,0.3)',
                  overflow: 'hidden', flexShrink: 0
                }}>
                  <span style={{ lineHeight: 1, marginTop: '10px' }}>👨‍💻</span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.25rem', textAlign: 'center', color: 'var(--text)' }}>
                  Full Stack Developer
                </h3>
                <span style={{ display: 'block', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontWeight: '600', marginBottom: '1rem' }}>
                  [MERN]
                </span>

                {/* Tech pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center' }}>
                  {['React', 'Node.js', 'MongoDB', 'Express'].map(tech => (
                    <span key={tech} style={{
                      padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: '600',
                      background: 'rgba(37,99,235,0.1)', color: 'var(--accent)', border: '1px solid rgba(37,99,235,0.2)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Hero
