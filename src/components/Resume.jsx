import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiDownload, HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

const Resume = ({ onPrev, onNext }) => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Hemapathi-Resume.pdf'
    link.download = 'Hemapathi-Resume.pdf'
    link.click()
   }

  return (
    <div className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="title">Resume</h2>
          <p className="subtitle">My professional journey and qualifications</p>
        </motion.div>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <motion.button
            onClick={handleDownload}
            className="btn"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              margin: '0 auto 0.75rem',
              position: 'relative'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiDownload /> Download Resume
            <motion.span
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: 'var(--accent)',
                color: 'white',
                fontSize: '0.6rem',
                padding: '2px 6px',
                borderRadius: '10px',
                fontWeight: '600'
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ATS
            </motion.span>
          </motion.button>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', margin: 0 }}>
            💡 <em>Download gets you the ATS-friendly version • This page shows the visual format</em>
          </p>
        </div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <div className="card-body" style={{ padding: window.innerWidth <= 768 ? '1rem' : '2rem' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: window.innerWidth <= 768 ? '1rem' : '2rem', borderBottom: '2px solid var(--accent)', paddingBottom: '0.75rem' }}>
              <h1 style={{ fontSize: window.innerWidth <= 768 ? '1.5rem' : '2rem', margin: '0 0 0.5rem 0', color: 'var(--text)' }}>Hemapathi B</h1>
              <p style={{ fontSize: window.innerWidth <= 768 ? '1rem' : '1.1rem', color: 'var(--accent)', margin: '0 0 0.75rem 0' }}>Full Stack Developer</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: window.innerWidth <= 768 ? '1rem' : '2rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: window.innerWidth <= 768 ? '0.8rem' : '0.9rem' }}>
                  <HiMail /> hemahemapathi2001@gmail.com
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: window.innerWidth <= 768 ? '0.8rem' : '0.9rem' }}>
                  <HiPhone /> +91 8610237049
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: window.innerWidth <= 768 ? '0.8rem' : '0.9rem' }}>
                  <HiLocationMarker /> Sivakasi-626123 | Tamil Nadu
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <section style={{ marginBottom: window.innerWidth <= 768 ? '1rem' : '2rem' }}>
              <h3 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Professional Summary</h3>
              <p style={{ lineHeight: '1.6', margin: window.innerWidth <= 768 ? '0.75rem 0' : '1rem 0' }}>
                Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) with proven experience delivering high-performance, 
                scalable web applications. Improved user experience and performance by 95% for 10,000+ users through secure, responsive designs optimized for mobile and desktop platforms.
                 Skilled in RESTful API development and role-based access control, with a commitment to continuous learning and improving software quality.
              </p>
            </section>

            {/* Technical Skills */}
            <section style={{ marginBottom: window.innerWidth <= 768 ? '1rem' : '2rem' }}>
              <h3 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Technical Skills</h3>
              <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))', gap: window.innerWidth <= 768 ? '0.75rem' : '1rem', margin: window.innerWidth <= 768 ? '0.75rem 0' : '1rem 0' }}>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>Frontend</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>HTML5, CSS3, Javascript,Bootstrap, React.js </p>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>Backend</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>MySQL, Node.js, Express.js, MongoDB, Mongoose, RESTful APIs, JWT</p>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>Tools and Technologies</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>Git, GitHub,Postman, Cloudinary, Netlify, Render</p>
                </div>
              </div>
            </section>
      
          {/* Education */}
            <section style={{ marginBottom: window.innerWidth <= 768 ? '1rem' : '2rem' }}>
              <h3 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Education</h3>
              <div style={{ margin: window.innerWidth <= 768 ? '0.75rem 0' : '1rem 0' }}>
                <h4 style={{ margin: '0 0 0.25rem 0' }}>Bachelor's Degree in Computer Science</h4>
                <p style={{ margin: '0', color: 'var(--text-light)', fontSize: '0.9rem' }}>Kathir College of Engineering , Coimbatore • 2019 - 2023</p>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Key Projects</h3>
              <div style={{ margin: window.innerWidth <= 768 ? '0.75rem 0' : '1rem 0' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>E-Commerce Platform</h4>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
                    Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.
                  </p>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-light)' }}>
                    Technologies: React, Node.js, Express.js, MongoDB, Stripe, JWT
                  </p>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>Project Management Tool</h4>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
                    Collaborative task management application with real-time updates and team collaboration features.
                  </p>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-light)' }}>
                    Technologies: React, Node.js, MongoDB, Express.js, Mailtrap
                  </p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: window.innerWidth <= 768 ? '1rem' : '2rem',
            paddingBottom: window.innerWidth <= 768 ? '6rem' : '2rem'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="btn btn-ghost"
            onClick={onPrev}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiArrowLeft /> Back to Home
          </motion.button>
          
          <motion.button
            className="btn"
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume