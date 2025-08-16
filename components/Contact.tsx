'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'chaudharyshellu@gmail.com',
      link: 'mailto:chaudharyshellu@gmail.com',
      color: 'neon-blue'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91-7355157915',
      link: 'tel:+917355157915',
      color: 'neon-purple'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Jalandhar, Punjab',
      link: '#',
      color: 'neon-pink'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vaishnavirajj',
      icon: '💼',
      color: 'neon-blue'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/vaishnavirajj',
      icon: '🐙',
      color: 'neon-purple'
    }
  ]

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-cyber font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              GET IN TOUCH
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 holographic">
              <h3 className="text-3xl font-cyber text-neon-blue mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-cyber-gray hover:bg-hologram transition-all duration-300 group"
                  >
                    <div className="text-3xl">{info.icon}</div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className={`text-${info.color} font-cyber group-hover:text-white transition-colors duration-300`}>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-3xl font-cyber text-neon-purple mb-8">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="cyber-button text-center"
                  >
                    <div className="text-2xl mb-2">{social.icon}</div>
                    <span className="font-cyber">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-cyber text-neon-green mb-4">Current Status</h3>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-gray-300">Available for new opportunities</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Open to full-time positions, freelance projects, and collaborations
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-2xl p-8 holographic"
          >
            <h3 className="text-3xl font-cyber text-neon-pink mb-8">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label className="block text-gray-300 mb-2 font-cyber">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple transition-colors duration-300"
                    placeholder="Your name"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label className="block text-gray-300 mb-2 font-cyber">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple transition-colors duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label className="block text-gray-300 mb-2 font-cyber">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple transition-colors duration-300"
                  placeholder="What's this about?"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <label className="block text-gray-300 mb-2 font-cyber">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </motion.div>
              
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-button w-full"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-cyber text-neon-green mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to work on new projects and collaborate with talented individuals. 
              Whether you have a project in mind or just want to connect, feel free to reach out!
            </p>
            <div className="flex justify-center space-x-6">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="text-4xl"
              >
                🚀
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="text-4xl"
              >
                💻
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="text-4xl"
              >
                🤖
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
