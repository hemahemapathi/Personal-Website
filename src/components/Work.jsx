import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowLeft, HiArrowRight, HiExternalLink } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'

/* ── Skeleton block ── */
const Sk = ({ w = '100%', h = 16, r = 6, mb = 0 }) => (
  <div style={{
    width: w, height: h, borderRadius: r,
    background: 'var(--border)',
    marginBottom: mb,
    overflow: 'hidden',
    position: 'relative'
  }}>
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)',
      backgroundSize: '200% 100%',
      animation: 'skeletonShimmer 1.4s infinite'
    }} />
  </div>
)

/* ── Full page skeleton matching the real layout ── */
const WorkSkeleton = ({ isMobile }) => (
  <div style={{ display: isMobile ? 'block' : 'flex', alignItems: 'start', gap: '2rem' }}>
    {/* Left list skeleton — 3 cards */}
    <div style={{ width: isMobile ? '100%' : '40%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {[0,1,2].map(i => (
          <div key={i} style={{
            height: 110, borderRadius: 12,
            background: 'var(--card)', border: '1px solid var(--border)',
            borderLeft: '4px solid var(--border)',
            padding: '0.9rem 1rem', overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Sk w={10} h={10} r={50} />
              <div style={{ flex: 1 }}>
                <Sk w="60%" h={14} r={6} mb={8} />
                <div style={{ display: 'flex', gap: 6 }}>
                  <Sk w={50} h={18} r={6} />
                  <Sk w={50} h={18} r={6} />
                  <Sk w={50} h={18} r={6} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right detail skeleton */}
    <div style={{ width: isMobile ? '100%' : '60%', marginTop: isMobile ? '1.5rem' : 0 }}>
      <div style={{
        height: isMobile ? 'auto' : 354,
        background: 'var(--card)', borderRadius: 12,
        border: '1px solid var(--border)',
        borderTop: '4px solid var(--border)',
        padding: isMobile ? '1rem' : '1.25rem 2rem',
        overflow: 'hidden'
      }}>
        <Sk w="45%" h={22} r={6} mb={10} />
        <Sk w={40} h={3} r={2} mb={20} />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem' }}>
          {/* Image skeleton */}
          <Sk w="100%" h={160} r={6} />
          {/* Text lines skeleton */}
          <div>
            <Sk w="100%" h={12} r={4} mb={8} />
            <Sk w="95%" h={12} r={4} mb={8} />
            <Sk w="90%" h={12} r={4} mb={8} />
            <Sk w="85%" h={12} r={4} mb={8} />
            <Sk w="70%" h={12} r={4} mb={8} />
          </div>
        </div>
        {/* Buttons skeleton */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 20 }}>
          <Sk w={90} h={34} r={4} />
          <Sk w={90} h={34} r={4} />
        </div>
      </div>
    </div>
  </div>
)

const Work = ({ onNext, onPrev }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [selectedProject, setSelectedProject] = useState(0)
  const [showTechModal, setShowTechModal] = useState(false)
  const [modalProject, setModalProject] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const projects = [
    {
      id: 1, title: 'Bus Booking System',
      description: 'A modern MERN-based bus booking platform inspired by real-world travel apps. Features smart route search, intuitive seat selection, secure Stripe payments, PDF ticket generation, email confirmations, and an AI chatbot powered by Groq for user assistance.',
      techStack: {
        frontend: ['React.js,Tailwind CSS','Vite','Stripe React','React Hot Toast'],
        backend: ['Node.js, Express.js','MongoDB','Mongoose','Nodemailer','JWT','bcryptjs'],
        tools: ['Stripe','Groq API','PDFKit','MongoDB, Netlify, GitHub','Render']
      },
      tech: ['MERN Stack', 'REST API','Groq API','PDFKit','Stripe', 'JWT Auth', 'AI Chatbot','Tailwind CSS'],
      image: '/images/bus booking.jpg',
      github: 'https://github.com/hemahemapathi/bus-booking-system',
      live: 'https://busbooking-system-hemapathi.netlify.app',
      color: '#edc605'
    },
    {
      id: 2, title: 'AI Expense Tracker',
      description: 'An AI-powered expense tracker that lets you chat with your finances using natural language. Built with Groq LLaMA AI to generate smart spending insights, categorize expenses automatically, and visualize financial data through interactive charts — all secured with JWT authentication.',
      techStack: {
        frontend: ['CSS3','React.js','Vite','Recharts'],
        backend: ['Node.js', 'Express.js','MongoDB', 'JWT'],
        tools: ['Groq API','pnpm','Netlify','Render']
      },
      tech: ['React.js','CSS3','Node.js + Express', 'Groq API','LLaMA(LLM)', 'MongoDB', 'JWT'],
      image: '/images/exp.png',
      github: 'https://github.com/hemahemapathi/AI-Expense-Tracker',
      live: 'https://aiexpensetrackerhemapathi.netlify.app',
      color: '#b36bf2'
    },
    {
      id: 3, title: 'Fitness-AI Tracking',
      description: 'FitTracker AI is a full-stack fitness web app that combines workout tracking, nutrition logging, and goal setting with an AI-powered coaching assistant. Built with Groq AI to deliver personalized fitness insights and progress analytics in real time.',
      techStack: {
        frontend: ['CSS3','React.js', 'Chart.js','Bootstrap'],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
        tools: ['Groq API','LLaMA(LLM)', 'dotenv', 'Github', 'Postman', 'Netlify','Render']
      },
      tech: ['React.js', 'Redux', 'Chart.js','Groq API','LLaMA(LLM)', 'Node.js + Express', 'MongoDB', 'JWT'],
      image: '/images/Fitness.jpg',
      github: 'https://github.com/hemahemapathi/fitness-ai-tracking-website',
      live: 'https://fitaitracker.netlify.app',
      color: '#f5700b'
    },
    {
      id: 4, title: 'HealthCare Website',
      description: 'A complete medical platform with separate portals for patients, doctors, and admins. Features appointment booking, e-prescriptions, real-time doctor-patient messaging, and secure payment processing — all in one full-stack healthcare solution.',
      techStack: {
        frontend: ['CSS3','React.js','Vite','Bootstrap'],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'JWT','bcryptjs', 'Socket.io','Mongoose','WebRTC'],
        tools: ['Stripe', 'Github', 'Render', 'Netlify','Cloudinary','Multer','Nodemailer']
      },
      tech: ['React.js', 'Node.js + Express', 'bcryptjs', 'Socket.io','WebRTC', 'Stripe', 'JWT'],
      image: '/images/Health.png',
      github: 'https://github.com/hemahemapathi/healthcare-website',
      live: 'https://healthwebsitehemapathi.netlify.app',
      color: '#156de8'
    },
    {
      id: 5, title: 'Exam-Readiness-Analyzer',
      description: 'A smart exam preparation platform that analyzes student readiness through practice tests and performance tracking. Generates personalized study plans, visualizes progress with interactive charts, and predicts exam readiness scores.',
      techStack: {
        frontend: ['React.js', 'Vite', 'Bootstrap','Recharts','Lucide React'],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'JWT','bcryptjs'],
        tools: ['Multer', 'Github', 'Postman', 'Netlify','Render']
      },
      tech: ['React.js', 'Lucide React','Node.js + Express', 'MongoDB', 'JWT','bcryptjs'],
      image: '/images/exam.jpg',
      github: 'https://github.com/hemahemapathi/Exam-Readiness-Analyzer',
      live: 'https://examreadinesspredictor.netlify.app',
      color: '#ef4444'
    },
    {
      id: 6, title: 'E-Commerce Platform',
      description: 'A full-stack grocery e-commerce platform with separate user and admin interfaces. Supports product browsing, cart management, secure checkout with Stripe, order tracking, and email notifications.',
      techStack: {
        frontend: ['CSS3','React.js', 'Bootstrap', 'Axios', 'React Router', 'Toastify'],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs'],
        tools: ['Stripe', 'SendGrid', 'Cloudinary', 'Git', 'Postman']
      },
      tech: ['CSS3', 'React.js', 'Bootstrap', 'Node.js + Express', 'MongoDB', 'JWT', 'Stripe', 'SendGrid'],
      image: '/images/grocery.png',
      github: 'https://github.com/hemahemapathi/Grocery-Shop-App',
      live: 'https://groovo-shopping-app.netlify.app',
      color: '#17b02b'
    },
    {
      id: 7, title: 'Project Management Tool',
      description: 'A fast, feature-rich project management platform with drag-and-drop task tracking, team collaboration, and smart workflows. Includes role-based access control, progress analytics, form validation, and email notifications.',
      techStack: {
        frontend: ['React.js','Vite', 'Bootstrap', 'Material UI', 'Ant Design','Chart.js','Recharts','Formik','Yup','React Toastify'],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs', 'CORS', 'Multer','Nodemailer','SendGrid'],
        tools: ['Helmet','express-rate-limit', 'dotenv', 'Github', 'Netlify','Render']
      },
      tech: ['React.js', 'Context API', 'Bootstrap', 'Node.js + Express', 'MongoDB', 'JWT', 'Multer', 'Ant Design'],
      image: '/images/project.png',
      github: 'https://github.com/hemahemapathi/Project-management-tool',
      live: 'https://trek-project-management-tool.netlify.app',
      color: '#7427b8'
    }
  ]

  /* Preload all images, then flip ready=true */
  useEffect(() => {
    let loaded = 0
    projects.forEach(proj => {
      const img = new Image()
      img.src = proj.image
      img.onload = img.onerror = () => {
        loaded++
        if (loaded === projects.length) setReady(true)
      }
    })
  }, [])

  const p = projects[selectedProject]

  const up = (delay) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4, delay }
  })

  return (
    <>
      {/* Shimmer keyframe injected once */}
      <style>{`
        @keyframes skeletonShimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
      `}</style>

      <div className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">

          <motion.div {...up(0)} className="text-center mb-4">
            <h2 className="title">My Work</h2>
            <p className="subtitle">Projects that showcase my skills and passion</p>
          </motion.div>

          {/* ── Skeleton OR real content ── */}
          <AnimatePresence mode="wait">
            {!ready ? (
              <motion.div key="skeleton"
                initial={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <WorkSkeleton isMobile={isMobile} />
              </motion.div>
            ) : (
              <motion.div key="content"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <div style={{ display: isMobile ? 'block' : 'flex', alignItems: 'start', gap: '2rem' }}>

                  {/* Project List */}
                  <motion.div {...up(0.12)} style={{ width: isMobile ? '100%' : '40%' }}>
                    <div
                      className={isMobile ? 'mobile-project-scroll' : 'desktop-project-scroll'}
                      style={{ height: isMobile ? '360px' : '354px', overflowY: 'scroll', paddingRight: '6px' }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {projects.map((project, index) => (
                          <div key={project.id} onClick={() => setSelectedProject(index)}
                            style={{
                              cursor: 'pointer', background: 'var(--card)', borderRadius: '12px',
                              border: selectedProject === index ? `2px solid ${project.color}` : '1px solid var(--border)',
                              borderLeft: `4px solid ${project.color}`,
                              height: '110px', minHeight: '110px', overflow: 'hidden',
                              transition: 'border 0.15s ease, box-shadow 0.15s ease',
                              boxShadow: selectedProject === index ? `0 2px 12px ${project.color}25` : 'none'
                            }}
                          >
                            <div style={{ padding: '0.9rem 1rem' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: 10, height: 10, borderRadius: '50%', background: project.color, flexShrink: 0 }} />
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                                    <h3 style={{ fontSize: '0.95rem', margin: 0, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                      {project.title}
                                    </h3>
                                    <button onClick={(e) => { e.stopPropagation(); setModalProject(project); setShowTechModal(true) }}
                                      style={{
                                        background: `${project.color}20`, border: `1px solid ${project.color}`,
                                        borderRadius: '10px', padding: '1px 6px', fontSize: '7px',
                                        color: project.color, cursor: 'pointer', fontWeight: 700, flexShrink: 0
                                      }}>TECH</button>
                                  </div>
                                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                                    {project.tech.slice(0, 4).map((tech, i) => (
                                      <span key={i} style={{
                                        fontSize: '0.58rem', padding: '0.1rem 0.35rem',
                                        background: `${project.color}15`, color: project.color,
                                        borderRadius: '6px', fontWeight: 500, border: `1px solid ${project.color}25`
                                      }}>{tech}</span>
                                    ))}
                                    {project.tech.length > 4 && (
                                      <span style={{
                                        fontSize: '0.58rem', padding: '0.1rem 0.35rem',
                                        color: project.color, border: `1px solid ${project.color}`,
                                        borderRadius: '6px', fontWeight: 600
                                      }}>+{project.tech.length - 4}</span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Detail Panel */}
                  <motion.div {...up(0.25)} style={{ width: isMobile ? '100%' : '60%', marginTop: isMobile ? '1.5rem' : 0 }}>
                    <AnimatePresence mode="wait">
                      <motion.div key={selectedProject}
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.22, ease: 'easeOut' }}
                        style={{
                          width: '100%', height: isMobile ? 'auto' : '354px',
                          background: 'var(--card)', borderRadius: '12px',
                          border: '1px solid var(--border)', borderTop: `4px solid ${p.color}`,
                          overflow: 'hidden', position: 'relative', willChange: 'transform, opacity'
                        }}
                      >
                        <div style={{ width: '100%', height: '4px', background: `linear-gradient(90deg, ${p.color}, ${p.color}60)` }} />
                        <div style={{ position: 'absolute', top: '0.5rem', right: '1.5rem', fontSize: '3rem', fontWeight: 900, color: `${p.color}20`, lineHeight: 1, fontFamily: 'var(--font-display)' }}>
                          0{selectedProject + 1}
                        </div>
                        <div style={{ padding: isMobile ? '0.75rem 1rem' : '0.75rem 2rem' }}>
                          <h3 style={{ fontSize: '1.3rem', fontWeight: 300, margin: '0 0 0.4rem', fontFamily: 'var(--font-display)' }}>{p.title}</h3>
                          <div style={{ width: 40, height: 2, background: p.color }} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', padding: isMobile ? '0 1rem' : '0 2rem' }}>
                          <div style={{ width: '100%', height: '160px', overflow: 'hidden', borderRadius: '6px', flexShrink: 0 }}>
                            <img src={p.image} alt={p.title}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%) contrast(1.1)', display: 'block' }}
                            />
                          </div>
                          <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'var(--text)', margin: 0 }}>{p.description}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', padding: isMobile ? '1rem' : '0', position: isMobile ? 'static' : 'absolute', bottom: isMobile ? undefined : '1.25rem', left: isMobile ? undefined : '50%', transform: isMobile ? undefined : 'translateX(-50%)', marginTop: isMobile ? '0.5rem' : 0 }}>
                          <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                            display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.45rem 0.9rem',
                            border: `2px solid ${p.color}`, background: 'transparent', color: p.color,
                            textDecoration: 'none', fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px'
                          }}><FiGithub size={13} /> Source</a>
                          <a href={p.live} target="_blank" rel="noopener noreferrer" style={{
                            display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.45rem 0.9rem',
                            background: p.color, color: 'white', textDecoration: 'none',
                            fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px'
                          }}><HiExternalLink size={13} /> View Live</a>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <motion.div {...up(0.35)}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingBottom: isMobile ? '6rem' : '2rem' }}
          >
            <motion.button className="btn btn-ghost" onClick={onPrev} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <HiArrowLeft /> Certifications
            </motion.button>
            <motion.button className="btn" onClick={onNext} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Get in Touch <HiArrowRight />
            </motion.button>
          </motion.div>

          {/* Tech Stack Modal */}
          <AnimatePresence>
            {showTechModal && modalProject && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}
                onClick={() => setShowTechModal(false)}
              >
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{ background: 'var(--card)', borderRadius: '12px', padding: '2rem', maxWidth: '400px', width: '90%', maxHeight: '80vh', overflow: 'hidden' }}
                  onClick={e => e.stopPropagation()}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text)', margin: 0 }}>{modalProject.title}</h3>
                    <button onClick={() => setShowTechModal(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-light)' }}>×</button>
                  </div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', color: modalProject.color }}>Technology Stack</h4>
                  <div style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                    {[['Frontend', modalProject.techStack.frontend], ['Backend', modalProject.techStack.backend], ['Tools & Services', modalProject.techStack.tools]].map(([label, items]) => (
                      <div key={label} style={{ marginBottom: '1rem' }}>
                        <h5 style={{ fontSize: '0.8rem', fontWeight: 600, color: modalProject.color, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</h5>
                        {items.map((tech, i) => (
                          <span key={i} style={{
                            display: 'inline-block', margin: '0.2rem', padding: '0.25rem 0.55rem',
                            background: `${modalProject.color}15`, borderRadius: '6px',
                            border: `1px solid ${modalProject.color}30`, fontSize: '0.78rem', color: 'var(--text)'
                          }}>{tech}</span>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default Work
