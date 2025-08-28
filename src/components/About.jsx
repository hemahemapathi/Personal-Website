import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import useWindowSize from '../hooks/useWindowSize'

const About = ({ onNext, onPrev }) => {
  const { width } = useWindowSize()
  const isMobile = width <= 768

  const stats = [
    { number: '4+', label: 'Projects' },
    { number: '5K', label: 'Users' },
    { number: '+40%', label: 'Performance' },
    { number: '99.9%', label: 'Uptime' }
  ]

  return (
    <div className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="title">About Me</h2>
          <p className="subtitle">Passionate developer with a love for clean code</p>
        </motion.div>

        <div className="grid grid-2" style={{ marginBottom: isMobile ? '1.5rem' : '4rem' }}>
          {/* Bio Card */}
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-header">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>My Story</h3>
              <div className="mono">Full Stack Developer</div>
            </div>
            <div className="card-body">
              <p style={{ marginBottom: isMobile ? '0.75rem' : '1.5rem', color: 'var(--text-light)' }}>
                MERN Stack Developer skilled in MongoDB, Express.js, React, and Node.js,
                with a focus on building scalable applications, optimized APIs, and seamless user experiences.
              </p>
              <p style={{ color: 'var(--text-light)' }}>
                Continuously exploring new technologies to deliver innovative,
                real-world solutions and transform ideas into impactful digital products.
              </p>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            className="card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card-header">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>By the Numbers</h3>
              <div className="mono">Achievement Stats</div>
            </div>
            <div className="card-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: isMobile ? '0.75rem' : '1.5rem' }}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    style={{ textAlign: 'center' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div style={{ 
                      fontSize: '2rem', 
                      fontWeight: '700',
                      color: 'var(--accent)',
                      marginBottom: '0.5rem'
                    }}>
                      {stat.number}
                    </div>
                    <div className="mono" style={{ fontSize: '0.8rem' }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>



        {/* Navigation */}
        <motion.div
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            paddingBottom: isMobile ? '6rem' : '2rem'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="btn btn-ghost"
            onClick={onPrev}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiArrowLeft /> Back
          </motion.button>
          
          <motion.button
            className="btn"
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skills <HiArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default About