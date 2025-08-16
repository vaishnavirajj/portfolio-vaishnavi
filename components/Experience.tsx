'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: 'Full-Stack Developer & DevOps Engineer',
      period: '2024 - Present',
      description: 'Specializing in modern web technologies, cloud computing, and DevOps practices. Building scalable applications with cutting-edge technologies.',
      achievements: [
        'Developed AI-powered applications using OpenAI API and LangChain',
        'Implemented CI/CD pipelines with GitHub Actions and Jenkins',
        'Containerized applications using Docker and Kubernetes',
        'Built responsive web applications with React and Node.js'
      ],
      icon: '👩‍💻',
      color: 'neon-blue'
    },
    {
      title: 'AI/ML Enthusiast',
      period: '2024 - Present',
      description: 'Exploring and implementing AI/ML solutions, working with vector databases, transformers, and agentic AI systems.',
      achievements: [
        'Integrated OpenAI API for intelligent applications',
        'Worked with Pinecone vector databases',
        'Implemented LangChain for AI agent development',
        'Built AI-powered resume analysis system'
      ],
      icon: '🤖',
      color: 'neon-purple'
    },
    {
      title: 'Open Source Contributor',
      period: '2024 - Present',
      description: 'Active contributor to open source projects, participating in hackathons and developer communities.',
      achievements: [
        'Completed Hacktoberfest 2024 with 4 successful PRs',
        'Contributed to GirlScript Summer of Code 2024',
        'Participated in multiple hackathons',
        'Maintained open source projects'
      ],
      icon: '🌟',
      color: 'neon-green'
    }
  ]

  const hackathons = [
    {
      title: 'Code-A-Haunt Hackathon',
      result: 'Top 10 at State Level',
      date: 'Feb 2025',
      organizer: 'LPU',
      description: 'Participated and secured 10th rank in the state-level hackathon'
    },
    {
      title: 'Prompt Builder 2025',
      result: '2nd Rank',
      date: 'Jan 2025',
      organizer: 'LPU Vibrant & AWS',
      description: 'Secured 2nd rank in the Prompt Builder Hackathon'
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
              EXPERIENCE & ACHIEVEMENTS
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 holographic">
                <div className="grid lg:grid-cols-4 gap-8">
                  {/* Icon and Title */}
                  <div className="lg:col-span-1 text-center lg:text-left">
                    <div className="text-6xl mb-4">{exp.icon}</div>
                    <h3 className={`text-2xl font-cyber text-${exp.color} mb-2`}>
                      {exp.title}
                    </h3>
                    <p className="text-neon-blue font-cyber text-sm">{exp.period}</p>
                  </div>

                  {/* Description and Achievements */}
                  <div className="lg:col-span-3 space-y-6">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + achievementIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathons Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-cyber text-neon-pink mb-8 text-center">Hackathon Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="glass rounded-2xl p-6 holographic"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-white">{hackathon.title}</h4>
                  <span className="text-neon-green font-cyber text-sm">{hackathon.result}</span>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-400 text-sm">{hackathon.organizer}</p>
                  <p className="text-neon-blue font-cyber text-sm">{hackathon.date}</p>
                </div>
                <p className="text-gray-300">{hackathon.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-3xl font-cyber text-neon-green mb-8 text-center">Technical Expertise Summary</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Development',
                skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'TypeScript'],
                icon: '💻',
                color: 'neon-blue'
              },
              {
                category: 'DevOps & Cloud',
                skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'GitHub Actions'],
                icon: '☁️',
                color: 'neon-purple'
              },
              {
                category: 'AI/ML',
                skills: ['OpenAI API', 'LangChain', 'Pinecone', 'Transformers', 'N8N', 'AI Agents'],
                icon: '🤖',
                color: 'neon-pink'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h4 className={`text-xl font-cyber text-${category.color} mb-4`}>
                  {category.category}
                </h4>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1.4 + skillIndex * 0.05 }}
                      className="text-gray-300 text-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
