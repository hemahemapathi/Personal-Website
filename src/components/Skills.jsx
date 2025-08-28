import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import useWindowSize from '../hooks/useWindowSize'

const Skills = ({ onNext, onPrev }) => {
  const { width } = useWindowSize()
  const isMobile = width <= 768
  
  const skillCategories = [
    {
      title: 'Frontend',
      color: '#3b82f6',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 82 },
        { name: 'JavaScript', level: 95 },
        { name: 'Reactjs', level: 85 },
        { name: 'Bootstrap', level: 85 }

      ]
    },
    {
      title: 'Backend',
      color: '#10b981',
      skills: [
        { name: 'Express.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'MongoDB & Mongoose', level: 80 },
        { name: 'RESTful APIs & JWT', level: 70 }
      ]
    },
    {
      title: 'Tools & Others',
      color: '#f59e0b',
      skills: [
        { name: 'Git & GitHub', level: 75 },
        { name: 'npm', level: 90 },
        { name: 'Postman', level: 70 },
        { name: 'Netlify', level: 65 },
        { name: 'Render', level: 80 }
      ]
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
          <h2 className="title">Skills & Technologies</h2>
          <p className="subtitle">Technologies I use to bring ideas to life</p>
        </motion.div>

        <div className="grid grid-3" style={{ marginBottom: isMobile ? '1rem' : '2rem', gap: isMobile ? '1rem' : '1.5rem' }}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="card"
              style={{
                border: `2px solid ${category.color}20`,
                borderTop: `4px solid ${category.color}`
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{ 
                y: -5,
                boxShadow: `0 20px 25px -5px ${category.color}20`
              }}
            >
              <div className="card-header">
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  color: category.color,
                  textAlign: 'center',
                  marginBottom: '0.5rem'
                }}>
                  {category.title}
                </h3>
                <div className="mono" style={{ textAlign: 'center', color: 'var(--text-light)' }}>
                  Technical Skills
                </div>
              </div>

              <div className="card-body">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginBottom: '0.5rem',
                        gap: '1rem'
                      }}>
                        <span style={{ 
                          fontWeight: '500',
                          color: 'var(--text)',
                          flex: '1',
                          minWidth: '0'
                        }}>
                          {skill.name}
                        </span>
                        <span className="mono" style={{ 
                          color: category.color,
                          fontSize: '0.8rem',
                          flexShrink: '0',
                          minWidth: '35px'
                        }}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div style={{ 
                        height: '8px',
                        background: 'var(--border)',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}>
                        <motion.div
                          style={{
                            height: '100%',
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                            borderRadius: '4px'
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <motion.div
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: '1rem',
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
            <HiArrowLeft /> About
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

export default Skills