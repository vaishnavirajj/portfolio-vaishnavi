'use client'

import { motion } from 'framer-motion'

export default function About() {
  const achievements = [
    {
      title: 'Top 10 at State Level',
      description: 'Code-A-Haunt Hackathon - LPU',
      date: 'Feb 2025',
      icon: '🏆'
    },
    {
      title: '2nd Rank',
      description: 'Prompt Builder Hackathon - LPU & AWS',
      date: 'Jan 2025',
      icon: '🥈'
    },
    {
      title: 'Hacktoberfest 2024',
      description: 'Successfully completed 4 PRs',
      date: 'Nov 2024',
      icon: '🎃'
    },
    {
      title: 'GSSoc 2024',
      description: 'Completed 10 PRs in open source',
      date: 'Oct 2024',
      icon: '👩‍💻'
    }
  ]

  const certificates = [
    'Microsoft Certified: Azure Administrator Associate (AZ-104)',
    'Introduction of Internet of Things – NPTEL',
    'Complete GitHub Foundation – GitHub',
    'AWS Cloud Computing Training – GokBoru',
    'Programming in Java – NPTEL',
    'GenAI for Everyone – Fractal',
    'Mastering Data Structures & Algorithms – NeoColab'
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
              ABOUT ME
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 holographic">
              <h3 className="text-3xl font-cyber text-neon-blue mb-6">Background</h3>
              <div className="space-y-4 text-lg">
                <p className="text-gray-300 leading-relaxed">
                  I am a passionate Computer Science and Engineering student at Lovely Professional University, 
                  specializing in full-stack development, DevOps, and AI/ML technologies. With a strong foundation 
                  in both frontend and backend technologies, I create innovative solutions that bridge the gap 
                  between development and operations.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My expertise spans from modern web technologies like React and Node.js to advanced DevOps 
                  practices including Kubernetes, Docker, and CI/CD pipelines. I'm particularly interested in 
                  AI/ML applications and cloud computing, constantly exploring new technologies to stay ahead 
                  of the curve.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-3xl font-cyber text-neon-green mb-6">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-neon-blue pl-6">
                  <h4 className="text-xl font-semibold text-white">Bachelor of Technology</h4>
                  <p className="text-neon-blue font-cyber">Computer Science and Engineering</p>
                  <p className="text-gray-400">Lovely Professional University, Jalandhar, Punjab</p>
                </div>
                <div className="border-l-4 border-neon-purple pl-6">
                  <h4 className="text-xl font-semibold text-white">Intermediate</h4>
                  <p className="text-gray-400">Avadh International School, Ayodhya, UP</p>
                </div>
                <div className="border-l-4 border-neon-pink pl-6">
                  <h4 className="text-xl font-semibold text-white">Matriculation</h4>
                  <p className="text-gray-400">Ayodhya Academy, Ayodhya, UP</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Achievements & Certificates */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Achievements */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-3xl font-cyber text-neon-pink mb-6">Achievements</h3>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-cyber-gray hover:bg-hologram transition-all duration-300"
                  >
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{achievement.title}</h4>
                      <p className="text-gray-400">{achievement.description}</p>
                    </div>
                    <div className="text-sm text-neon-blue font-cyber">{achievement.date}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-3xl font-cyber text-neon-green mb-6">Certifications</h3>
              <div className="space-y-3">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-hologram transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-neon-blue rounded-full" />
                    <span className="text-gray-300">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-3xl font-cyber text-neon-purple mb-6 text-center">Soft Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Strategic Collaboration',
                'Innovation',
                'Problem-Solving',
                'Mentorship',
                'Quick Learning',
                'Adaptability',
                'Leadership',
                'Communication'
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-cyber-gray hover:bg-hologram transition-all duration-300"
                >
                  <div className="text-2xl mb-2">✨</div>
                  <p className="font-cyber text-neon-blue">{skill}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
