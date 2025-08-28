import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowLeft, HiArrowRight, HiExternalLink } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'
const Work = ({ onNext, onPrev }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const [selectedProject, setSelectedProject] = useState(0)
  const [showTechModal, setShowTechModal] = useState(false)
  const [modalProject, setModalProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React and Node.js. Features include user authentication, payment processing, and an admin dashboard.',
      techStack: {
        frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Axios', 'React Router', 'Toastify'],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs'],
        tools: ['Stripe', 'SendGrid', 'Cloudinary', 'Git', 'Postman']
      },
      tech: ['HTML5','CSS3','JavaScript','React(Axios,React Router,Toastify)','Bootstrap', 'Node.js + Express', 'MongoDB + Mongoose','JWT', 'Stripe' ,'SendGrid','Cloudinary'],
      image: '/images/Grocery.jpg',
      github: 'https://github.com/hemahemapathi/Grocery-Shop-App',
      live: 'https://groovo-shopping-app.netlify.app',
      color: '#3b82f6'
    },
    {
      id: 2,
      title: 'Project Management Tool',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      techStack: {
        frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Context API', 'Hooks'],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs', 'CORS', 'Multer'],
        tools: ['Mailtrap', 'dotenv', 'Git', 'Postman']
      },
      tech: ['HTML5','CSS3','JavaScript','React.js(Context API, Axios,Hooks)','Bootstrap','Node.js + Express 4','MongoDB with Mongoose','JWT','bcryptjs','CORS','dotenv','Multer','Mailtrap(SMTP)'],
      image: '/images/Project.jpg',
      github: 'https://github.com/hemahemapathi/Project-management-tool',
      live: 'https://trek-project-management-tool.netlify.app',
      color: '#10b981'
    } 
 
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
          <h2 className="title">My Work</h2>
          <p className="subtitle">Projects that showcase my skills and passion</p>
        </motion.div>

        <div className="work-container" style={{ 
          display: isMobile ? 'block' : 'flex', 
          alignItems: 'start', 
          gap: '2rem' 
        }}>
          {/* Project List */}
          <motion.div
            className="work-sidebar"
            style={{ width: isMobile ? '100%' : '40%' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div 
              className={isMobile ? 'mobile-project-scroll' : ''}
              style={{ 
                height: isMobile ? '280px' : '400px',
                overflowY: 'scroll',
                paddingRight: '8px',
                scrollbarWidth: 'thin'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="card"
                  style={{
                    cursor: 'pointer',
                    border: selectedProject === index ? `2px solid ${project.color}` : '1px solid var(--border)',
                    transform: selectedProject === index ? 'scale(1.02)' : 'scale(1)',
                     height: '120px',
                    minHeight: '120px',
                    maxHeight: '120px'
                  }}
                  onClick={() => setSelectedProject(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="card-body project-card" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          background: project.color,
                          flexShrink: 0
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', margin: 0 }}>
                            {project.title}
                          </h3>
                          <motion.button
                            style={{
                              background: `${project.color}20`,
                              border: `1px solid ${project.color}`,
                              borderRadius: '12px',
                              padding: '2px 6px',
                              fontSize: '8px',
                              color: project.color,
                              cursor: 'pointer',
                              fontWeight: '600'
                            }}
                            whileHover={{ 
                              scale: 1.05,
                              background: project.color,
                              color: 'white'
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation()
                              setModalProject(project)
                              setShowTechModal(true)
                            }}
                          >
                            TECH
                          </motion.button>
                        </div>
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.3rem',
                          marginTop: '0.5rem'
                        }}>
                          {project.tech.slice(0, 5).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              style={{
                                fontSize: '0.6rem',
                                padding: '0.1rem 0.4rem',
                                background: `${project.color}15`,
                                color: project.color,
                                borderRadius: '8px',
                                fontWeight: '500',
                                border: `1px solid ${project.color}30`
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 5 && (
                            <motion.button
                              onClick={(e) => {
                                e.stopPropagation()
                                setModalProject(project)
                                setShowTechModal(true)
                              }}
                              style={{
                                fontSize: '0.6rem',
                                padding: '0.1rem 0.4rem',
                                background: 'transparent',
                                color: project.color,
                                border: `1px solid ${project.color}`,
                                borderRadius: '8px',
                                fontWeight: '600',
                                cursor: 'pointer'
                              }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              +{project.tech.length - 5} more
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              </div>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            className="work-main"
            style={{ 
              width: isMobile ? '100%' : '60%',
              marginTop: isMobile ? '2rem' : '0'
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{
                  width: '100%',
                  height: '380px',
                  background: 'var(--card)',
                  borderRadius: '0',
                  border: 'none',
                  boxShadow: 'none',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {/* Top Accent Line */}
                <div style={{
                  width: '100%',
                  height: '4px',
                  background: `linear-gradient(90deg, ${projects[selectedProject].color}, ${projects[selectedProject].color}80)`,
                  marginBottom: '1.5rem'
                }} />

                {/* Project Number */}
                <div style={{
                  position: 'absolute',
                  top: '0.5rem',
                  right: '1.5rem',
                  fontSize: '3rem',
                  fontWeight: '900',
                  color: `${projects[selectedProject].color}25`,
                  lineHeight: '1',
                  fontFamily: 'var(--font-display)',
                  textShadow: `0 0 20px ${projects[selectedProject].color}10`,
                  zIndex: 1
                }}>
                  0{selectedProject + 1}
                </div>

                {/* Title */}
                <div style={{ padding: '0 2rem', marginBottom: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '300',
                    lineHeight: '1.1',
                    margin: '0 0 0.5rem 0',
                    color: 'var(--text)',
                    fontFamily: 'var(--font-display)',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {projects[selectedProject].title}
                  </h3>
                  <div style={{
                    width: '40px',
                    height: '2px',
                    background: projects[selectedProject].color
                  }} />
                </div>

                {/* Image and Description Side by Side */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem',
                  padding: '0 2rem',
                  alignItems: 'start'
                }}>
                  {/* Image */}
                  <div style={{
                    width: '100%',
                    height: '160px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0'
                  }}>
                    <img
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        filter: 'grayscale(20%) contrast(1.1)'
                      }}
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <p style={{
                      fontSize: '0.85rem',
                      lineHeight: '1.6',
                      color: 'var(--text)',
                      margin: 0,
                      fontWeight: '400'
                    }}>
                      {projects[selectedProject].description}
                    </p>
                  </div>
                </div>

                {/* Centered Action Buttons */}
                <div style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '1rem'
                }}>
                  <motion.a
                    href={projects[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.5rem 1rem',
                      border: `2px solid ${projects[selectedProject].color}`,
                      borderRadius: '0',
                      background: 'transparent',
                      color: projects[selectedProject].color,
                      textDecoration: 'none',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{
                      background: projects[selectedProject].color,
                      color: 'white'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiGithub size={14} />
                    Source
                  </motion.a>
                  
                  <motion.a
                    href={projects[selectedProject].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.5rem 1rem',
                      background: projects[selectedProject].color,
                      borderRadius: '0',
                      color: 'white',
                      textDecoration: 'none',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      boxShadow: `0 4px 20px ${projects[selectedProject].color}40`,
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{
                      boxShadow: `0 8px 30px ${projects[selectedProject].color}60`,
                      y: -2
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <HiExternalLink size={14} />
                    View Live
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Navigation */}
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
            <HiArrowLeft /> Certifications
          </motion.button>
          
          <motion.button
            className="btn"
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch <HiArrowRight />
          </motion.button>
        </motion.div>

        {/* Tech Stack Modal */}
        <AnimatePresence>
          {showTechModal && modalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000
              }}
              onClick={() => setShowTechModal(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                style={{
                  background: 'var(--card)',
                  borderRadius: '12px',
                  padding: '2rem',
                  maxWidth: '400px',
                  width: '90%',
                  maxHeight: '80vh',
                  overflow: 'hidden'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    color: 'var(--text)',
                    margin: 0
                  }}>
                    {modalProject.title}
                  </h3>
                  <button
                    onClick={() => setShowTechModal(false)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      color: 'var(--text-light)'
                    }}
                  >
                    ×
                  </button>
                </div>
                
                <h4 style={{
                  fontSize: '1rem',
                  marginBottom: '1rem',
                  color: modalProject.color
                }}>
                  Technology Stack
                </h4>
                
                <div style={{
                  maxHeight: '300px',
                  overflowY: 'auto',
                  paddingRight: '0.5rem'
                }}>
                  {/* Frontend Section */}
                  <div style={{ marginBottom: '1rem' }}>
                    <h5 style={{
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: modalProject.color,
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Frontend
                    </h5>
                    {modalProject.techStack.frontend.map((tech, index) => (
                      <motion.div
                        key={`frontend-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        style={{
                          display: 'inline-block',
                          margin: '0.2rem',
                          padding: '0.3rem 0.6rem',
                          background: `${modalProject.color}15`,
                          borderRadius: '6px',
                          border: `1px solid ${modalProject.color}30`,
                          fontSize: '0.8rem',
                          color: 'var(--text)'
                        }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>

                  {/* Backend Section */}
                  <div style={{ marginBottom: '1rem' }}>
                    <h5 style={{
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: modalProject.color,
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Backend
                    </h5>
                    {modalProject.techStack.backend.map((tech, index) => (
                      <motion.div
                        key={`backend-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (modalProject.techStack.frontend.length + index) * 0.05 }}
                        style={{
                          display: 'inline-block',
                          margin: '0.2rem',
                          padding: '0.3rem 0.6rem',
                          background: `${modalProject.color}15`,
                          borderRadius: '6px',
                          border: `1px solid ${modalProject.color}30`,
                          fontSize: '0.8rem',
                          color: 'var(--text)'
                        }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>

                  {/* Tools Section */}
                  <div>
                    <h5 style={{
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: modalProject.color,
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Tools & Services
                    </h5>
                    {modalProject.techStack.tools.map((tech, index) => (
                      <motion.div
                        key={`tools-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (modalProject.techStack.frontend.length + modalProject.techStack.backend.length + index) * 0.05 }}
                        style={{
                          display: 'inline-block',
                          margin: '0.2rem',
                          padding: '0.3rem 0.6rem',
                          background: `${modalProject.color}15`,
                          borderRadius: '6px',
                          border: `1px solid ${modalProject.color}30`,
                          fontSize: '0.8rem',
                          color: 'var(--text)'
                        }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Work