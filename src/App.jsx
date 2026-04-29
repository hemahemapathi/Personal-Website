import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon, HiHome, HiUser, HiBriefcase, HiMail, HiCode, HiAcademicCap } from 'react-icons/hi'
import LoadingScreen from './components/LoadingScreen'
import PageLoader from './components/PageLoader'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Resume from './components/Resume'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  const [theme, setTheme] = useState('light')
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [pageLoading, setPageLoading] = useState(false)
  const [loaderSection, setLoaderSection] = useState(0)

  const sections = [
    { name: 'hero', label: 'Home', icon: HiHome },
    { name: 'about', label: 'About', icon: HiUser },
    { name: 'skills', label: 'Skills', icon: HiCode },
    { name: 'certifications', label: 'Certificates', icon: HiAcademicCap },
    { name: 'work', label: 'Work', icon: HiBriefcase },
    { name: 'contact', label: 'Contact', icon: HiMail }
  ]

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const navigateTo = (index) => {
    setLoaderSection(index)
    setPageLoading(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nextSection = () => navigateTo((currentSection + 1) % sections.length)
  const prevSection = () => navigateTo((currentSection - 1 + sections.length) % sections.length)
  const goToSection = (index) => navigateTo(index)
  const goToResume = () => navigateTo(6)
  const goToWork = () => navigateTo(4)

  const renderCurrentSection = (section = currentSection) => {
    switch (section) {
      case 0:
        return <Hero onNext={goToWork} onResume={goToResume} />
      case 1:
        return <About onNext={nextSection} onPrev={prevSection} />
      case 2:
        return <Skills onNext={nextSection} onPrev={prevSection} />
      case 3:
        return <Certifications onNext={nextSection} onPrev={prevSection} />
      case 4:
        return <Work onNext={nextSection} onPrev={prevSection} />
      case 5:
        return <Contact onPrev={prevSection} />
      case 6:
        return <Resume onNext={() => setCurrentSection(4)} onPrev={() => setCurrentSection(0)} />
      default:
        return <Hero onNext={nextSection} onResume={goToResume} />
    }
  }

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />
  }

  return (
    <div className="app" style={{ minHeight: '100vh', position: 'relative' }}>


      {/* Sun and Moon - Home Page Only */}
      {currentSection === 0 && theme === 'light' && (
        <div className="simple-sun" style={{
          position: 'fixed',
          top: '8%',
          right: '12%',
          width: '80px',
          height: '80px',
          zIndex: -1
        }}>
          <div style={{
            width: '45px',
            height: '45px',
            background: 'radial-gradient(circle, #fff700, #ffeb3b, #ffd700)',
            borderRadius: '50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'sunGlow 2s ease-in-out infinite'
          }} />
        </div>
      )}
      
      {currentSection === 0 && theme === 'dark' && (
        <div style={{
          position: 'fixed',
          top: '8%',
          right: '12%',
          width: '65px',
          height: '65px',
          zIndex: -1
        }}>
          <div className="lunar-system" style={{
            width: '80px',
            height: '80px',
            position: 'relative'
          }}>
            <div className="moon-phases" style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(45deg, #e8eaf6, #c5cae9, #9fa8da)',
              borderRadius: '50%',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="moon-shadow" style={{
                position: 'absolute',
                width: '40px',
                height: '60px',
                background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.6))',
                right: '0',
                borderRadius: '0 50px 50px 0'
              }} />
              <div className="moon-glow" style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.8), transparent)',
                borderRadius: '50%',
                top: '15px',
                left: '10px'
              }} />
            </div>
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="moon-orbit" style={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                background: 'rgba(200, 200, 255, 0.6)',
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transformOrigin: `0 ${25 + i * 3}px`
              }} />
            ))}
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes sunGlow {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 0 20px rgba(255, 247, 0, 0.8), 0 0 40px rgba(255, 235, 59, 0.6), 0 0 60px rgba(255, 215, 0, 0.4);
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.15);
            box-shadow: 0 0 30px rgba(255, 247, 0, 1), 0 0 60px rgba(255, 235, 59, 0.8), 0 0 90px rgba(255, 215, 0, 0.6);
          }
        }
      `}</style>
      
      {theme === 'dark' && (
        <div className="space-stars">
          {Array.from({ length: 100 }, (_, i) => (
            <div
              key={i}
              className="star"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 2 + 1}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Theme Toggle */}
      <motion.button
        className="theme-toggle"
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          zIndex: 1000,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '2px solid var(--border)',
          background: 'var(--card)',
          color: 'var(--text)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: 'var(--shadow)',
          transition: 'all 0.2s ease'
        }}
        whileHover={{ 
          scale: 1.1,
          borderColor: 'var(--accent)',
          color: 'var(--accent)'
        }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === 'light' ? <HiMoon size={18} /> : <HiSun size={18} />}
      </motion.button>

      {/* Desktop Navigation Dots */}
      <div style={{
        position: 'fixed',
        right: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        background: 'var(--card)',
        padding: '1rem 0.5rem',
        borderRadius: '25px',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow)'
      }}
      className="desktop-nav">
        {sections.map((section, index) => {
          const IconComponent = section.icon
          return (
            <motion.button
              key={index}
              onClick={() => goToSection(index)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '2px solid var(--accent)',
                background: currentSection === index ? 'var(--accent)' : 'transparent',
                color: currentSection === index ? 'white' : 'var(--accent)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={section.label}
            >
              <IconComponent size={16} />
            </motion.button>
          )
        })}
      </div>

      {/* Mobile Navigation Bar - Dynamic Island Style */}
      <div style={{
        position: 'fixed',
        top: '0.75rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        gap: '0.15rem',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(20px)',
        padding: '0.5rem 1rem',
        borderRadius: '50px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      }}
      className="mobile-nav">
        {sections.map((section, index) => {
          const IconComponent = section.icon
          return (
            <motion.button
              key={index}
              onClick={() => goToSection(index)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                background: currentSection === index ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                color: currentSection === index ? 'white' : 'rgba(255, 255, 255, 0.6)',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'rgba(255, 255, 255, 0.15)'
              }}
              whileTap={{ scale: 0.9 }}
            >
              <IconComponent size={16} />
            </motion.button>
          )
        })}
        <motion.button
          onClick={toggleTheme}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            background: 'transparent',
            color: 'rgba(255, 255, 255, 0.6)',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {theme === 'light' ? <HiMoon size={16} /> : <HiSun size={16} />}
        </motion.button>
      </div>

      {/* Desktop Section Indicator */}
      <div style={{
        position: 'fixed',
        top: '1rem',
        left: '1rem',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        background: 'var(--card)',
        padding: '0.75rem 1.5rem',
        borderRadius: '25px',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow)'
      }}
      className="desktop-indicator">
        <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
          {currentSection === 6 ? 'Resume' : sections[currentSection].label}
        </span>
        <div style={{
          width: '80px',
          height: '3px',
          background: 'var(--border)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <motion.div
            style={{
              height: '100%',
              background: 'var(--accent)',
              borderRadius: '2px'
            }}
            initial={{ width: '0%' }}
            animate={{ width: `${currentSection === 6 ? 100 : ((currentSection + 1) / sections.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Page Loader */}
      {pageLoading && (
        <PageLoader
          sectionIndex={loaderSection}
          onDone={() => {
            setCurrentSection(loaderSection)
            setPageLoading(false)
          }}
        />
      )}

      {/* Main Content */}
      <div style={{ minHeight: '100vh' }}>
        {renderCurrentSection()}
      </div>
    </div>
  )
}

export default App
