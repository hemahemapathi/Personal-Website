import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiMail } from 'react-icons/hi'
import { FiSend, FiGithub, FiLinkedin } from 'react-icons/fi'
import { gsap } from 'gsap'

const Contact = ({ onPrev }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')
    const rocket = buttonRef.current.querySelector('.send-icon')
    gsap.to(rocket, { x: 100, y: -60, rotation: 45, scale: 0.5, duration: 1.2, ease: 'power2.out',
      onComplete: () => gsap.set(rocket, { x: 0, y: 0, rotation: 0, scale: 1 })
    })
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '4d780c28-6f93-41d2-97f5-8d889915d52a',
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      })
      const data = await res.json()
      if (data.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(''), 6000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus(''), 6000)
      }
    } catch {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(''), 6000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/hemahemapathi', label: 'GitHub', desc: 'Check my code' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/hemapathi-b-560489381', label: 'LinkedIn', desc: 'Connect with me' },
    { icon: HiMail, href: 'mailto:hemahemapathi2001@gmail.com', label: 'Email', desc: 'hemahemapathi2001@gmail.com' }
  ]

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem',
    border: '1.5px solid var(--border)', borderRadius: '8px',
    background: 'var(--bg-light)', color: 'var(--text)',
    fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s ease',
    fontFamily: 'var(--font-primary)'
  }

  return (
    <div className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} className="text-center mb-4"
        >
          <h2 className="title">Let's Connect</h2>
          <p className="subtitle">Have a project in mind? I'd love to hear about it.</p>
        </motion.div>

        <div style={{ display: isMobile ? 'flex' : 'grid', flexDirection: 'column', gridTemplateColumns: '1fr 1.8fr', gap: '1.5rem', alignItems: 'stretch' }}>

          {/* Left — hide on mobile, show on desktop */}
          {!isMobile && (
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: 'linear-gradient(135deg, var(--accent), #60a5fa)',
              borderRadius: '16px', padding: '2rem',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              minHeight: '360px'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'white', marginBottom: '0.5rem' }}>
                Get in touch
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '2rem' }}>
                Open to freelance projects, full-time roles, and collaborations.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'white' }}
                  whileHover={{ x: 6 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <social.icon size={16} color="white" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>{social.label}</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)' }}>{social.desc}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          )}

          {/* Mobile social strip */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginBottom: '0.5rem' }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.4rem 0.85rem', borderRadius: '999px',
                    border: '1.5px solid var(--border)',
                    color: 'var(--text-light)', textDecoration: 'none',
                    fontSize: '0.8rem', fontWeight: '500'
                  }}
                  whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <social.icon size={13} />
                  {social.label}
                </motion.a>
              ))}
            </motion.div>
          )}

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card"
            style={{ borderTop: '4px solid var(--accent)' }}
          >
            <div className="card-body" style={{ padding: '2rem' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: isMobile ? 'block' : 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-light)', marginBottom: '0.4rem' }}>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      placeholder="Your name" style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div style={{ marginTop: isMobile ? '1rem' : 0 }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-light)', marginBottom: '0.4rem' }}>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      placeholder="your@email.com" style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-light)', marginBottom: '0.4rem' }}>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="5"
                    placeholder="Tell me about your project..."
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <motion.button
                  ref={buttonRef} type="submit" className="btn"
                  style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer', overflow: 'visible' }}
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <span className="send-icon" style={{ display: 'inline-flex', marginRight: '0.5rem' }}>
                    <FiSend size={14} />
                  </span>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    style={{ padding: '0.75rem 1rem', background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: '8px', color: 'var(--accent)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <HiMail size={16} /> Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    style={{ padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', color: '#ef4444', fontSize: '0.9rem' }}
                  >
                    Failed to send. Please try again or email me directly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ marginTop: '1.5rem', paddingBottom: isMobile ? '6rem' : '2rem' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        >
          <motion.button className="btn btn-ghost" onClick={onPrev} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <HiArrowLeft /> Back to Work
          </motion.button>
        </motion.div>

      </div>
    </div>
  )
}

export default Contact
