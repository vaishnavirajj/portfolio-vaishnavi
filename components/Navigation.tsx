'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface NavigationProps {
  currentSection: string
  onSectionChange: (section: string) => void
}

const navItems = [
  { id: 'hero', label: 'HOME', icon: '🏠' },
  { id: 'about', label: 'ABOUT', icon: '👤' },
  { id: 'skills', label: 'SKILLS', icon: '⚡' },
  { id: 'projects', label: 'PROJECTS', icon: '🚀' },
  { id: 'experience', label: 'EXPERIENCE', icon: '📈' },
  { id: 'contact', label: 'CONTACT', icon: '📧' },
]

export default function Navigation({ currentSection, onSectionChange }: NavigationProps) {
  const [isHovered, setIsHovered] = useState<string | null>(null)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl p-4 backdrop-blur-xl">
          <div className="flex items-center justify-center">
            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setIsHovered(item.id)}
                  onHoverEnd={() => setIsHovered(null)}
                  onClick={() => onSectionChange(item.id)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentSection === item.id
                      ? 'text-neon-blue bg-hologram'
                      : 'text-gray-300 hover:text-neon-blue'
                  }`}
                >
                  <span className="text-sm mr-2">{item.icon}</span>
                  <span className="font-cyber text-sm">{item.label}</span>
                  
                  {/* Hover Effect */}
                  {isHovered === item.id && (
                    <motion.div
                      layoutId="hover"
                      className="absolute inset-0 bg-neon-blue bg-opacity-20 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                  
                  {/* Active Indicator */}
                  {currentSection === item.id && (
                    <motion.div
                      layoutId="active"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-blue"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-neon-blue"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
