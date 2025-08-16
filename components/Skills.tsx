'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Skills() {
  const [animateSkills, setAnimateSkills] = useState(false)

  useEffect(() => {
    setAnimateSkills(true)
  }, [])

  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'neon-blue',
      icon: '🎨',
      skills: [
        { name: 'HTML & CSS', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'React Hooks', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'JavaScript', level: 92 }
      ]
    },
    {
      title: 'Backend & Cloud',
      color: 'neon-purple',
      icon: '☁️',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'AWS', level: 80 },
        { name: 'Cloud Computing', level: 85 },
        { name: 'Microservices', level: 78 },
        { name: 'API Development', level: 90 },
        { name: 'C++/CPP', level: 85 }
      ]
    },
    {
      title: 'DevOps & Tools',
      color: 'neon-green',
      icon: '⚙️',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 80 },
        { name: 'Terraform', level: 75 },
        { name: 'GitHub Actions', level: 82 },
        { name: 'Argo CD', level: 70 },
        { name: 'CI/CD', level: 85 },
        { name: 'Docker Compose', level: 80 },
        { name: 'Route 53', level: 75 }
      ]
    },
    {
      title: 'AI/ML Tools',
      color: 'neon-pink',
      icon: '🤖',
      skills: [
        { name: 'OpenAI API', level: 85 },
        { name: 'LangChain', level: 80 },
        { name: 'Vector DBs (Pinecone)', level: 75 },
        { name: 'Transformers', level: 70 },
        { name: 'Agentic AI', level: 75 },
        { name: 'N8N', level: 80 },
        { name: 'AI Agents', level: 75 }
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
              SKILLS & EXPERTISE
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass rounded-2xl p-8 holographic"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{category.icon}</div>
                <h3 className={`text-2xl font-cyber text-${category.color}`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className={`text-${category.color} font-cyber text-sm`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className={`skill-progress bg-gradient-to-r from-${category.color} to-${category.color} opacity-80`}
                        initial={{ width: 0 }}
                        animate={{ width: animateSkills ? `${skill.level}%` : 0 }}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-3xl font-cyber text-neon-blue mb-8 text-center">Additional Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'Git', 'Bash Scripting', 'Jenkins', 'Ansible', 'Prometheus', 'Grafana',
                'Loki', 'Alertmanager', 'Helm', 'Apicache', 'Nginx', 'Jest',
                'ESLint', 'DSA', 'Algorithms', 'Java', 'Python', 'TypeScript'
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                  className="text-center p-4 rounded-lg bg-cyber-gray hover:bg-hologram transition-all duration-300 group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {index % 4 === 0 ? '⚡' : index % 4 === 1 ? '🔧' : index % 4 === 2 ? '🚀' : '💻'}
                  </div>
                  <p className="font-cyber text-sm text-neon-blue group-hover:text-white transition-colors duration-300">
                    {tech}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skill Level Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-2xl p-6 inline-block">
            <h4 className="text-xl font-cyber text-neon-green mb-4">Skill Level Legend</h4>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-2 bg-neon-blue rounded"></div>
                <span className="text-gray-300">90-100%: Expert</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-2 bg-neon-purple rounded"></div>
                <span className="text-gray-300">80-89%: Advanced</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-2 bg-neon-pink rounded"></div>
                <span className="text-gray-300">70-79%: Intermediate</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
