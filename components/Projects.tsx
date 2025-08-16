'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'ResumeX',
      date: 'Aug 2025',
      description: 'Built with React and Puter.com integration, ResumeX enables users to upload PDFs and receive instant, personalized feedback on structure, tone, and ATS compatibility based on advanced AI models. It features real-time analysis, version history tracking, and a responsive, intuitive UI for seamless resume optimization.',
      tech: ['React.js', 'Tailwind CSS', 'Puter.js', 'JavaScript', 'PDF.js', 'Git', 'GitHub'],
      icon: '📄',
      color: 'neon-blue',
      features: [
        'AI-powered resume analysis',
        'Real-time feedback system',
        'ATS compatibility checking',
        'Version history tracking',
        'Responsive UI design'
      ]
    },
    {
      title: 'CI/CD Pipeline Automation for MERN Applications',
      date: 'May 2025',
      description: 'Built a production-ready CI/CD pipeline for a full-stack MERN application using GitHub Actions. Automated testing, containerization (Docker), and seamless deployments to staging and production environments, ensuring rapid and reliable delivery. Integrated infrastructure as code and deployment workflows for optimized developer productivity and application stability.',
      tech: ['MERN Stack', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Ansible', 'Terraform', 'Prometheus', 'Grafana', 'Loki', 'Alertmanager', 'Helm', 'Apicache', 'MongoDB', 'Express', 'React', 'Node.js', 'Jest', 'ESLint', 'Nginx'],
      icon: '⚙️',
      color: 'neon-purple',
      features: [
        'Automated CI/CD pipeline',
        'Multi-environment deployments',
        'Infrastructure as Code',
        'Monitoring & alerting',
        'Container orchestration'
      ]
    },
    {
      title: 'End-to-End DevOps Kubernetes Pipeline Implementation',
      date: 'Aug 2025',
      description: 'Implemented a fully automated CI/CD pipeline using Jenkins and Terraform to deploy a three-tier web app (React, Node.js, MongoDB) onto AWS EKS. Achieved GitOps-driven deployment with ArgoCD, while integrating production-grade monitoring using Prometheus and Grafana for real-time observability. This end-to-end solution demonstrates infrastructure-as-code, container orchestration, and operational excellence.',
      tech: ['Docker', 'Docker Compose', 'Kubernetes', 'Nginx', 'Prometheus', 'Grafana', 'Terraform', 'Ansible', 'Jenkins', 'AWS DevOps', 'Git', 'Bash Scripting'],
      icon: '🚀',
      color: 'neon-green',
      features: [
        'GitOps deployment strategy',
        'AWS EKS integration',
        'Real-time monitoring',
        'Infrastructure automation',
        'Production-grade setup'
      ]
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
              PROJECTS
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 holographic">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Header */}
                  <div className="lg:col-span-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-center lg:text-left"
                    >
                      <div className="text-6xl mb-4">{project.icon}</div>
                      <h3 className={`text-3xl font-cyber text-${project.color} mb-2`}>
                        {project.title}
                      </h3>
                      <p className="text-neon-blue font-cyber text-sm mb-4">{project.date}</p>
                      
                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.05 }}
                              className="px-3 py-1 bg-cyber-gray rounded-full text-xs font-cyber text-neon-blue border border-neon-blue"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Description</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-neon-green rounded-full" />
                            <span className="text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                      className="flex space-x-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="cyber-button"
                      >
                        View Demo
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="cyber-button"
                      >
                        Source Code
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-purple opacity-0"
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-3xl font-cyber text-neon-pink mb-8 text-center">Project Statistics</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: 'Total Projects', value: '3', icon: '🚀' },
                { label: 'Technologies Used', value: '25+', icon: '⚡' },
                { label: 'Lines of Code', value: '10K+', icon: '💻' },
                { label: 'Deployment Success', value: '100%', icon: '✅' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-cyber text-neon-blue mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
