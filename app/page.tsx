'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import MatrixBackground from '@/components/MatrixBackground'
import ParticleSystem from '@/components/ParticleSystem'
import Navigation from '@/components/Navigation'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState('hero')

  useEffect(() => {
    // Simulate loading time for dramatic effect
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleSectionChange = (section: string) => {
    setCurrentSection(section)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cyber-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="glitch text-6xl font-cyber text-neon-blue mb-4" data-text="SYSTEM INITIALIZING">
            SYSTEM INITIALIZING
          </div>
          <div className="text-neon-purple text-xl font-cyber">
            Loading Portfolio v2.0.4.0...
          </div>
          <div className="mt-8">
            <div className="w-64 h-2 bg-cyber-gray rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cyber-black relative overflow-hidden">
      {/* Background Effects */}
      <MatrixBackground />
      <ParticleSystem />
      
      {/* Navigation */}
      <Navigation currentSection={currentSection} onSectionChange={handleSectionChange} />
      
      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {currentSection === 'hero' && <Hero />}
          {currentSection === 'about' && <About />}
          {currentSection === 'skills' && <Skills />}
          {currentSection === 'projects' && <Projects />}
          {currentSection === 'experience' && <Experience />}
          {currentSection === 'contact' && <Contact />}
        </motion.div>
      </AnimatePresence>

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-2 h-2 bg-neon-blue rounded-full animate-pulse-slow" />
      <div className="fixed top-40 right-20 w-3 h-3 bg-neon-purple rounded-full animate-float" />
      <div className="fixed bottom-40 left-20 w-2 h-2 bg-neon-pink rounded-full animate-pulse-slow" />
      <div className="fixed bottom-20 right-10 w-3 h-3 bg-neon-green rounded-full animate-float" />
    </div>
  )
}
