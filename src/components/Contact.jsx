import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import { gsap } from 'gsap'

const Contact = ({ onPrev }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    // Paper rocket flying animation
    const rocket = buttonRef.current.querySelector('.send-icon')
    gsap.to(rocket, {
      x: 100,
      y: -60,
      rotation: 45,
      scale: 0.5,
      duration: 1.2,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set(rocket, { x: 0, y: 0, rotation: 0, scale: 1 })
      }
    })

    try {
      const result = await emailjs.send(
        'service_hhydi9a',
        'template_d32cusr',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'hemahemapathi2001@gmail.com'
        },
        'n9HYR9xUGpzvgxTvY'
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus(''), 6000)
    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(''), 6000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'hemahemapathi2001@gmail.com',
      href: 'mailto:hemahemapathi2001@gmail.com',
      color: '#3b82f6'
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: '#10b981'
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Your City, Country',
      href: '#',
      color: '#f59e0b'
    }
  ]

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/hemahemapathi', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/hemapathi-b-17b505257', label: 'LinkedIn' },
    { icon: HiMail, href: 'mailto:hemahemapathi2001@gmail.com', label: 'Email' }
  ]

  return (
    <div className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="title">Let's Connect</h2>
          <p className="subtitle">Ready to bring your ideas to life? Let's talk!</p>
        </motion.div>

        <div style={{ 
          display: isMobile ? 'block' : 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr',
          gap: '2rem', 
          alignItems: 'start' 
        }}>
          {/* Social Links */}
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
              <div className="card-header" style={{ padding: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Follow Me</h3>
                <div className="mono">Stay connected</div>
              </div>
              <div className="card-body" style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        border: '2px solid var(--border)',
                        borderRadius: '50%',
                        color: 'var(--text-light)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                      }}
                      whileHover={{
                        borderColor: 'var(--accent)',
                        color: 'var(--accent)',
                        scale: 1.1
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <social.icon size={16} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

          {/* Contact Form */}
          <motion.div
            style={{ marginTop: isMobile ? '2rem' : '0' }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card">
              <div className="card-header" style={{ padding: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Send Message</h3>
                <div className="mono">I'll get back to you soon</div>
              </div>
              <div className="card-body" style={{ padding: '1rem' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-light)'
                    }}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid var(--border)',
                        borderRadius: '8px',
                        background: 'var(--card)',
                        color: 'var(--text)',
                        fontSize: '1rem',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-light)'
                    }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid var(--border)',
                        borderRadius: '8px',
                        background: 'var(--card)',
                        color: 'var(--text)',
                        fontSize: '1rem',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-light)'
                    }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="3"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid var(--border)',
                        borderRadius: '8px',
                        background: 'var(--card)',
                        color: 'var(--text)',
                        fontSize: '1rem',
                        resize: 'vertical',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  <motion.button
                    ref={buttonRef}
                    type="submit"
                    className="btn"
                    style={{ 
                      width: '100%',
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      overflow: 'visible'
                    }}
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <span className="send-icon" style={{ display: 'inline-flex', marginRight: '0.5rem' }}>
                      ✈️
                    </span>
                    {isSubmitting ? 'Flying...' : 'Send Message'}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        padding: '0.75rem',
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        borderRadius: '8px',
                        color: '#10b981',
                        textAlign: 'center',
                        fontSize: '0.9rem'
                      }}
                    >
                      ✅ Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        padding: '0.75rem',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        borderRadius: '8px',
                        color: '#ef4444',
                        textAlign: 'center',
                        fontSize: '0.9rem'
                      }}
                    >
                      ❌ Failed to send message. Please try again or email me directly.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div
          style={{ 
            display: 'flex', 
            justifyContent: isMobile ? 'center' : 'flex-start',
            marginTop: '0.7rem',
            paddingBottom: isMobile ? '6rem' : '2rem'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="btn btn-ghost"
            onClick={onPrev}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiArrowLeft /> Back to Work
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact