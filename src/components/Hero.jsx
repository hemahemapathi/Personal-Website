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
    // Typewriter effect
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index)) 
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)

    // Animated code terminal window
    gsap.timeline({ repeat: -1 })
      .to(bulbRef.current, {
        y: -10,
        rotation: 2,
        duration: 2,
        ease: "power2.inOut"
      })
      .to(bulbRef.current, {
        y: 5,
        rotation: -1,
        duration: 1.5,
        ease: "power2.inOut"
      })
      .to(bulbRef.current, {
        y: 0,
        rotation: 0,
        duration: 1,
        ease: "power2.inOut"
      })

    // Advanced laptop animation with morphing path
    gsap.timeline({ repeat: -1 })
      .to(laptopRef.current, {
        x: 15,
        rotation: -10,
        scale: 1.1,
        duration: 2,
        ease: "elastic.out(1, 0.3)"
      })
      .to(laptopRef.current, {
        x: -5,
        rotation: 5,
        scale: 0.9,
        duration: 1.5,
        ease: "bounce.out"
      })
      .to(laptopRef.current, {
        x: 0,
        rotation: 0,
        scale: 1,
        duration: 1,
        ease: "power2.inOut"
      })


  }, [])

  return (
    <div className="section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>

      

      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center', gap: isMobile ? '2rem' : '4rem' }}>
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textAlign: isMobile ? 'center' : 'left' }}
          >
            <motion.div 
              className="mono mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Hello, I'm
            </motion.div>
            
            <motion.h1 
              className="title draw-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <span className="animated-name">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                  style={{ color: 'var(--accent)' }}
                >
                  |
                </motion.span>
              </span>
            </motion.h1>
            
            <motion.p 
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              style={isMobile ? {
                fontSize: '0.85rem',
                fontWeight: '600',
                color: 'white',
                background: 'linear-gradient(135deg, rgba(59,130,246,0.8), rgba(147,51,234,0.8))',
                backdropFilter: 'blur(10px)',
                padding: '0.8rem 1rem',
                maxWidth: '260px',
                margin: '0 auto',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                transform: 'perspective(1000px) rotateX(5deg)',
                animation: 'float 3s ease-in-out infinite'
              } : {}}
            >
              Full Stack Developer crafting digital experiences with clean code and modern design
            </motion.p>

            <motion.div 
              className="hero-buttons"
              style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', justifyContent: isMobile ? 'center' : 'flex-start' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <motion.button
                className="btn"
                onClick={() => onNext && onNext()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work <HiArrowRight />
              </motion.button>
              
              <motion.button
                onClick={onResume}
                className="btn btn-ghost"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiEye /> Resume
              </motion.button>
            </motion.div>

            <motion.div 
              className="hero-socials"
              style={{ display: 'flex', gap: '1.5rem', justifyContent: isMobile ? 'center' : 'flex-start' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              {[
                { icon: FiGithub, href: 'https://github.com/hemahemapathi' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/hemapathi-b-17b505257' },
                { icon: FiMail, href: 'mailto:hemahemapathi2001@gmail.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    border: '2px solid var(--border)',
                    borderRadius: '50%',
                    color: 'var(--text-light)',
                    transition: 'all 0.2s ease'
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    borderColor: 'var(--accent)',
                    color: 'var(--accent)'
                  }}
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

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="card hero-card" style={{ 
              width: '300px', 
              height: '400px',
              position: 'relative',
              overflow: 'visible'
            }}>
              <div className="card-body" style={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}>
                {/* Floating Elements with GSAP */}
                <div
                  ref={bulbRef}
                  style={{
                    position: 'absolute',
                    top: '-25px',
                    right: '-25px',
                    width: '80px',
                    height: '50px',
                    background: 'var(--card)',
                    border: '2px solid var(--accent)',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '4px',
                    boxShadow: '0 4px 20px rgba(37, 99, 235, 0.2)'
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '8px',
                    background: 'var(--accent)',
                    borderRadius: '4px 4px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '4px',
                    gap: '2px'
                  }}>
                    <div style={{ width: '3px', height: '3px', background: '#ef4444', borderRadius: '50%' }}></div>
                    <div style={{ width: '3px', height: '3px', background: '#f59e0b', borderRadius: '50%' }}></div>
                    <div style={{ width: '3px', height: '3px', background: '#10b981', borderRadius: '50%' }}></div>
                  </div>
                  <div style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    color: 'var(--accent)',
                    fontFamily: 'monospace'
                  }}>
                    {'<code/>'}
                  </div>
                </div>

                <div
                  ref={laptopRef}
                  style={{
                    position: 'absolute',
                    bottom: '-15px',
                    left: '-15px',
                    width: '40px',
                    height: '40px',
                    background: 'var(--card)',
                    border: '2px solid var(--accent)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1001
                  }}
                >
                  💻
                </div>

                {/* Main Content */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    background: 'linear-gradient(135deg, var(--accent), #60a5fa)',
                    borderRadius: '50%',
                    margin: '0 auto 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem'
                  }}>
                    👨‍💻
                  </div>
                  
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
                    Full Stack Developer  [MERN]
                  </h3>
                  
                  <div className="mono" style={{ fontSize: '0.65rem' }}>
                    React • Express.js • Node.js • MongoDB
                  </div>
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