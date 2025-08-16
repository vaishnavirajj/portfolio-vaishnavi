'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const texts = [
    'Full-Stack Developer',
    'DevOps Engineer',
    'AI/ML Enthusiast',
    'Cloud Computing Expert',
    'Open Source Contributor'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Avatar/Profile */}
                      <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-6 sm:mb-8"
            >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-pulse-slow" />
            <div className="absolute inset-2 rounded-full bg-cyber-black flex items-center justify-center">
              <div className="text-6xl">👩‍💻</div>
            </div>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 animate-spin" style={{ animationDuration: '10s' }} />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-cyber font-bold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
              VAISHNAVI RAJ
            </span>
          </motion.h1>

          {/* Animated Role */}
                      <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="h-12 sm:h-16 flex items-center justify-center"
            >
              <motion.h2
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-cyber text-neon-green"
              >
              {texts[currentText]}
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Crafting digital experiences with cutting-edge technologies. 
            Specializing in full-stack development, DevOps automation, and AI/ML solutions.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 text-base sm:text-lg max-w-4xl mx-auto"
          >
            <div className="flex items-center space-x-2 text-neon-blue whitespace-nowrap">
              <span>📧</span>
              <span className="hidden sm:inline">chaudharyshellu@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </div>
            <div className="flex items-center space-x-2 text-neon-purple whitespace-nowrap">
              <span>📱</span>
              <span className="hidden sm:inline">+91-7355157915</span>
              <span className="sm:hidden">Phone</span>
            </div>
            <div className="flex items-center space-x-2 text-neon-pink whitespace-nowrap">
              <span>📍</span>
              <span className="hidden sm:inline">Jalandhar, Punjab</span>
              <span className="sm:hidden">Location</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 mt-6 relative"
          >
            <motion.a
              href="https://linkedin.com/in/vaishnavirajj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] text-center"
            >
              LinkedIn
            </motion.a>
            
            {/* Mouse Cursor Between Buttons */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center items-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-neon-blue rounded-full"
              />
            </motion.div>
            
            <motion.a
              href="https://github.com/vaishnavirajj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] text-center"
            >
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-20 w-4 h-4 bg-neon-blue rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-40 right-20 w-3 h-3 bg-neon-purple rounded-full opacity-60"
        />
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-40 left-20 w-2 h-2 bg-neon-pink rounded-full opacity-60"
        />
      </div>


    </section>
  )
}
