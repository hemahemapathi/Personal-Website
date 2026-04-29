import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { FiLayout, FiServer, FiTool } from 'react-icons/fi'
import useWindowSize from '../hooks/useWindowSize'

const Skills = ({ onNext, onPrev }) => {
  const { width } = useWindowSize()
  const isMobile = width <= 768
  const [activeTab, setActiveTab] = useState(0)

  const skillCategories = [
    {
      title: 'Frontend', icon: FiLayout, color: '#3b82f6',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'HTML', level: 90 },
        { name: 'Bootstrap', level: 90 },
        { name: 'React.js', level: 85 },
        { name: 'CSS', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
      ]
    },
    {
      title: 'Backend', icon: FiServer, color: '#10b981',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'MySQL', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'REST APIs', level: 70 },
        { name: 'JWT', level: 70 },
      ]
    },
    {
      title: 'Tools', icon: FiTool, color: '#f59e0b',
      skills: [
        { name: 'npm & pnpm', level: 90 },
        { name: 'Render', level: 80 },
        { name: 'Git & GitHub', level: 75 },
        { name: 'Postman', level: 70 },
        { name: 'Netlify', level: 65 },
      ]
    }
  ]

  const getLevelLabel = (level) => {
    if (level >= 90) return 'Expert'
    if (level >= 80) return 'Advanced'
    if (level >= 70) return 'Proficient'
    return 'Familiar'
  }

  const cat = skillCategories[activeTab]

  return (
    <div className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="title">Skills & Technologies</h2>
          <p className="subtitle">Technologies I use to bring ideas to life</p>
        </motion.div>

        <div style={{
          maxWidth: 680, margin: '0 auto',
          marginBottom: '1.5rem'
        }}>

          {/* Tabs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{
              display: 'flex', gap: '0', marginBottom: '0',
              background: 'var(--card)', borderRadius: '12px 12px 0 0',
              border: '1px solid var(--border)', borderBottom: 'none',
              overflow: 'hidden'
            }}
          >
            {skillCategories.map((c, i) => (
              <button key={c.title} onClick={() => setActiveTab(i)}
                style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: '0.4rem', padding: '0.75rem',
                  background: activeTab === i ? `${c.color}12` : 'transparent',
                  borderBottom: activeTab === i ? `3px solid ${c.color}` : '3px solid transparent',
                  color: activeTab === i ? c.color : 'var(--text-light)',
                  fontWeight: 700, fontSize: '0.82rem',
                  cursor: 'pointer', border: 'none',
                  transition: 'all 0.2s'
                }}
              >
                <c.icon size={14} /> {c.title}
              </button>
            ))}
          </motion.div>

          {/* Content panel */}
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '0 0 12px 12px',
            padding: isMobile ? '1rem' : '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {/* Top summary row */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  marginBottom: '1.25rem', paddingBottom: '0.75rem',
                  borderBottom: `1px solid ${cat.color}20`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8,
                      background: `${cat.color}18`, border: `1.5px solid ${cat.color}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <cat.icon size={15} color={cat.color} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: cat.color }}>{cat.title}</div>
                      <div style={{ fontSize: '0.65rem', color: 'var(--text-light)' }}>{cat.skills.length} technologies</div>
                    </div>
                  </div>
                  {/* Avg ring */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: cat.color, lineHeight: 1 }}>
                      {Math.round(cat.skills.reduce((a, s) => a + s.level, 0) / cat.skills.length)}%
                    </div>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>avg</div>
                  </div>
                </div>

                {/* Skill rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {cat.skills.map((skill, i) => (
                    <motion.div key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.35 }}
                    >
                      {/* Name row */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          {/* Rank number */}
                          <span style={{
                            width: 18, height: 18, borderRadius: '50%',
                            background: `${cat.color}18`, border: `1px solid ${cat.color}40`,
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '0.58rem', fontWeight: 800, color: cat.color, flexShrink: 0
                          }}>{i + 1}</span>
                          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>{skill.name}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{
                            fontSize: '0.62rem', fontWeight: 700,
                            color: cat.color, padding: '0.1rem 0.45rem',
                            background: `${cat.color}12`, borderRadius: 20,
                            border: `1px solid ${cat.color}30`
                          }}>
                            {getLevelLabel(skill.level)}
                          </span>
                          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: cat.color, minWidth: 36, textAlign: 'right' }}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div style={{ height: 6, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.9, delay: i * 0.07, ease: 'easeOut' }}
                          style={{
                            height: '100%', borderRadius: 3,
                            background: `linear-gradient(90deg, ${cat.color}, ${cat.color}70)`,
                            position: 'relative', overflow: 'hidden'
                          }}
                        >
                          {/* Shimmer */}
                          <motion.div
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 1.5, delay: i * 0.07 + 0.9, ease: 'easeInOut' }}
                            style={{
                              position: 'absolute', inset: 0, width: '40%',
                              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: isMobile ? '6rem' : '2rem' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        >
          <motion.button className="btn btn-ghost" onClick={onPrev} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <HiArrowLeft /> About
          </motion.button>
          <motion.button className="btn" onClick={onNext} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            View Certifications <HiArrowRight />
          </motion.button>
        </motion.div>

      </div>
    </div>
  )
}

export default Skills
