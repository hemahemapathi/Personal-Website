import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiArrowRight, HiExternalLink, HiCheckCircle } from 'react-icons/hi'
import { FiAward, FiCalendar, FiShield, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
const Certifications = ({ onNext, onPrev }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  const certificates = [
    {
      title: 'Full Stack Development (MERN)',
      issuer: 'GUVI',
      id: 'Hd2S7lr303O4R7441m',
      url: 'https://www.guvi.in/verify-certificate?id=Hd2S7lr303O4R7441m',
      date: 'December 2024',
      color: '#ef4444', // red
      bgColor: '#fee2e2'
    },
    {
      title: 'HTML',
      issuer: 'GUVI',
      id: '7u903341S2J4p4Y75t',
      url: 'https://www.guvi.in/verify-certificate?id=7u903341S2J4p4Y75t',
      date: 'October 2024',
      color: '#e34c26', // html orange
      bgColor: '#fef2f2'
    },
    {
      title: 'CSS',
      issuer: 'GUVI',
      id: 'A76s401440p3e7x32Z',
      url: 'https://www.guvi.in/verify-certificate?id=A76s401440p3e7x32Z',
      date: 'October 2024',
      color: '#1572b6', // css blue
      bgColor: '#eff6ff'
    },
     {
      title: 'Bootstrap',
      issuer: 'GUVI',
      id: '1a3B7p04Z24DieT374',
      url: 'https://www.guvi.in/verify-certificate?id=1a3B7p04Z24DieT374',
      date: 'October 2024',
      color: '#7952b3', // bootstrap purple
      bgColor: '#faf5ff'
    },
     {
      title: 'JavaScript',
      issuer: 'GUVI',
      id: 'q7o03Aux4204h4E371',
      url: 'https://www.guvi.in/verify-certificate?id=q7o03Aux4204h4E371',
      date: 'November 2024',
      color: '#f7df1e', // javascript yellow
      bgColor: '#fefce8'
    },
     {
      title: 'React.js',
      issuer: 'GUVI',
      id: 'ZPG443370u9716B24t',
      url: 'https://www.guvi.in/verify-certificate?id=ZPG443370u9716B24t',
      date: 'November 2024',
      color: '#61dafb', // react cyan
      bgColor: '#ecfeff'
    },
     {
      title: 'Node.js',
      issuer: 'GUVI',
      id: 'b837f74041qP34H12v',
      url: 'https://www.guvi.in/verify-certificate?id=b837f74041qP34H12v',
      date: 'October 2024',
      color: '#339933', // nodejs green
      bgColor: '#f0fdf4'
    },
    {
      title: 'MongoDB',
      issuer: 'GUVI',
      id: '743714g420F3c1K687',
      url: 'https://www.guvi.in/verify-certificate?id=743714g420F3c1K687',
      date: 'October 2024',
      color: '#47a248', // mongodb green
      bgColor: '#f0fdf4'
    },
    {
      title: 'MySQL',
      issuer: 'GUVI',
      id: '44LK5iE402731u473n',
      url: 'https://www.guvi.in/verify-certificate?id=44LK5iE402731u473n',
      date: 'October 2024',
      color: '#4479a1', // mysql blue
      bgColor: '#eff6ff'
    }
     
  ]

  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const container = scrollRef.current
    const scrollAmount = 300
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount)
    
    container.scrollTo({ left: newPosition, behavior: 'smooth' })
    setScrollPosition(newPosition)
  }

  return (
    <div className="section" style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      padding: '2rem 0'
    }}>
      <div className="container" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center cert-header"
          style={{ marginBottom: '2rem', marginTop: '1rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem',
            padding: '0.5rem 1rem',
            background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
            borderRadius: '25px',
            color: 'white',
            fontSize: '0.85rem',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)'
          }}>
            <FiShield size={16} />
            {certificates.length} Verified Certificates
          </div>
          <h2 className="title" style={{ marginBottom: '0.5rem' }}>Certifications</h2>
          <p className="subtitle">Professional development achievements</p>
        </motion.div>

        {/* Certificates Carousel */}
        <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center' }}>
          {/* Mobile Grid Layout */}
          {isMobile ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
              width: '100%',
              padding: '1rem 0'
            }}>
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  style={{
                    padding: '1rem',
                    background: 'var(--card-bg)',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: cert.color
                  }} />
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '35px',
                      height: '35px',
                      borderRadius: '8px',
                      background: cert.bgColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `2px solid ${cert.color}`,
                      flexShrink: 0
                    }}>
                      <FiAward size={16} color={cert.color} />
                    </div>
                    
                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        fontSize: '0.9rem', 
                        fontWeight: '600', 
                        marginBottom: '0.3rem',
                        color: 'var(--text)'
                      }}>
                        {cert.title}
                      </h3>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', color: 'var(--text-light)' }}>
                        <span>{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    
                    <motion.a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.4rem 0.8rem',
                        background: cert.color,
                        color: 'white',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontSize: '0.7rem',
                        fontWeight: '600',
                        flexShrink: 0
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Verify
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
          <>
          {/* Left Arrow */}
          <motion.button
            className="cert-arrows"
            onClick={() => scroll('left')}
            style={{
              position: 'absolute',
              left: '-20px',
              zIndex: 10,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              display: isMobile ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronLeft size={20} color="var(--text)" />
          </motion.button>

          {/* Certificates Container */}
          <div 
            ref={scrollRef}
            className="cert-carousel"
            style={{
              display: 'flex',
              gap: '1rem',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              padding: '1rem 0',
              flex: 1,
              width: isMobile ? '100%' : 'calc(4 * 240px + 3 * 1rem)',
              maxWidth: '100%'
            }}
            onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="cert-card"
                style={{
                  minWidth: isMobile ? '280px' : '240px',
                  width: isMobile ? '280px' : '240px',
                  flexShrink: 0,
                  padding: '1.25rem',
                  background: 'var(--card-bg)',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  transition: { duration: 0.2 }
                }}
              >
                {/* Gradient Accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: cert.color
                }} />
                
                {/* Certificate Icon */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: cert.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.75rem',
                  border: `2px solid ${cert.color}`
                }}>
                  <FiAward size={20} color={cert.color} />
                </div>
                
                {/* Title */}
                <h3 style={{ 
                  fontSize: '1rem', 
                  fontWeight: '600', 
                  marginBottom: '0.6rem',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  height: '2.4rem',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {cert.title}
                </h3>
                
                {/* Meta Info */}
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.4rem',
                    marginBottom: '0.4rem'
                  }}>
                    <HiCheckCircle size={12} color="var(--success)" />
                    <span style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>
                      {cert.issuer}
                    </span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.4rem'
                  }}>
                    <FiCalendar size={10} color="var(--text-light)" />
                    <span style={{ color: 'var(--text-light)', fontSize: '0.75rem' }}>
                      {cert.date}
                    </span>
                  </div>
                </div>
                
                {/* Certificate ID */}
                <div style={{
                  padding: '0.6rem',
                  background: 'var(--bg-light)',
                  borderRadius: '6px',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{ 
                    fontSize: '0.65rem', 
                    color: 'var(--text-light)', 
                    marginBottom: '0.2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    ID
                  </div>
                  <div className="mono" style={{ 
                    fontSize: '0.7rem', 
                    fontWeight: '600',
                    color: cert.color,
                    wordBreak: 'break-all'
                  }}>
                    {cert.id}
                  </div>
                </div>
                
                {/* Verify Button */}
                <motion.a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    padding: '0.5rem 0.8rem',
                    background: cert.color,
                    color: 'white',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease',
                    boxShadow: `0 3px 8px ${cert.color}30`
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: `0 6px 20px ${cert.color}40`
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <HiExternalLink size={12} />
                  Verify
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <motion.button
            className="cert-arrows"
            onClick={() => scroll('right')}
            style={{
              position: 'absolute',
              right: '-20px',
              zIndex: 10,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              display: isMobile ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronRight size={20} color="var(--text)" />
          </motion.button>
          </>
          )}
        </div>

        {/* Scroll Indicator - Desktop Only */}
        {!isMobile && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '2rem'
          }}>
            {Array.from({ length: Math.ceil(certificates.length / 3) }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: i === Math.floor(scrollPosition / 300) ? 'var(--primary)' : 'var(--border)',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        )}

        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '2rem',
            paddingBottom: isMobile ? '6rem' : '2rem'
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
            <HiArrowLeft /> Skills
          </motion.button>

          <motion.button
            className="btn"
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects <HiArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Certifications