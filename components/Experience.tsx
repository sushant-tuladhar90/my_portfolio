'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building } from 'lucide-react'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      company: 'MSP Solutions Pvt. Ltd.',
      position: 'Flutter Developer Intern',
      duration: '11 June, 2025 - Present',
      location: 'Nepal',
      description: [
        'Developed scalable features using Flutter & Firebase with real-time updates and push notifications',
        'Integrated RESTful APIs and implemented dynamic UI components',
        'Participated in Agile team sprints, standups, and collaborative feature planning'
      ]
    },
    {
      company: 'Blue Fox Pvt. Ltd.',
      position: 'Flutter Developer Intern',
      duration: '15 September, 2024 - 20 January, 2025',
      location: 'Nepal',
      description: [
        'Ensure user satisfaction and retention by providing responsive tech support',
        'Build and maintain software documentation sites using various programming languages',
        'Increase productivity by using software to organize, track bug patches and add feature requests',
        'Collaborate with other developers to update the mobile app and create new features'
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-dark-200">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-600 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1/2 border-4 border-dark-200" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="bg-dark-100 p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors duration-300">
                  <div className="flex items-center space-x-2 mb-3">
                    <Building className="w-5 h-5 text-primary-400" />
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-primary-400 mb-2">
                    {exp.position}
                  </h4>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 text-sm flex items-start space-x-2">
                        <span className="text-primary-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 