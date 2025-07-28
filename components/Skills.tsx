'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      category: 'Languages & Frameworks',
      skills: [
        { name: 'Dart', level: 90 },
        { name: 'Flutter', level: 95 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'PHP', level: 75 },
        { name: 'Java', level: 70 },
      ]
    },
    {
      category: 'Databases & Backend',
      skills: [
        { name: 'Firebase', level: 90 },
        { name: 'Firestore', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'REST APIs', level: 85 },
      ]
    },
    {
      category: 'State Management',
      skills: [
        { name: 'Provider', level: 90 },
        { name: 'Bloc', level: 80 },
        { name: 'GetX', level: 75 },
      ]
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Postman', level: 80 },
        { name: 'Figma', level: 75 },
        { name: 'Firebase Console', level: 90 },
      ]
    }
  ]

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Team Coordination',
    'Time Management',
    'Critical Thinking',
    'Willingness to Learn',
    'Clean Coding Practices',
    'Creativity'
  ]

  return (
    <section id="skills" className="section-padding bg-dark-100">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
            
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.category} className="mb-8">
                <h4 className="text-lg font-semibold text-primary-400 mb-4">
                  {category.category}
                </h4>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.3 + (categoryIndex * 0.1) + (skillIndex * 0.05) 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-primary-400 font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-dark-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: 0.5 + (categoryIndex * 0.1) + (skillIndex * 0.05),
                            ease: "easeOut"
                          }}
                          className="h-2 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Soft Skills</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-dark-200 p-4 rounded-lg border border-gray-700 hover:border-primary-500 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 p-6 bg-gradient-to-r from-primary-500/10 to-purple-600/10 rounded-lg border border-primary-500/20"
            >
              <h4 className="text-lg font-semibold text-primary-400 mb-3">
                What I Bring to the Table
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                I combine technical expertise with strong problem-solving abilities and 
                effective communication skills. My experience in Agile environments has 
                taught me the importance of collaboration, adaptability, and continuous 
                learning in delivering high-quality mobile applications.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 