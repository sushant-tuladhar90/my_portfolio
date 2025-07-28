'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Calendar, GraduationCap, Code } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const personalInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Biratnagar-5, Morang, Nepal'
    },
    {
      icon: Calendar,
      label: 'Experience',
      value: '2+ Years'
    },
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'Bachelor of Computer Application'
    },
    {
      icon: Code,
      label: 'Specialization',
      value: 'Flutter & Mobile Development'
    }
  ]

  return (
    <section id="about" className="section-padding bg-dark-100">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                <Code className="w-32 h-32 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ST</span>
              </div>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-dark-200 p-4 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <info.icon className="w-5 h-5 text-primary-400" />
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Passionate <span className="gradient-text">Flutter Developer</span>
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              I am a dedicated Flutter Developer with a strong passion for creating innovative 
              mobile applications. With over 2 years of experience, I specialize in building 
              cross-platform applications that deliver exceptional user experiences.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              My expertise includes Firebase integration, state management with Provider, 
              REST API development, and responsive UI design. I have successfully developed 
              and deployed multiple real-world applications including chat apps, food delivery 
              systems, and smart parking solutions.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with 
              the latest technologies and best practices in mobile development. My goal is 
              to create applications that not only meet user needs but exceed their expectations.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span className="text-gray-300">Cross-platform Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span className="text-gray-300">Firebase Integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span className="text-gray-300">State Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span className="text-gray-300">REST API Development</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 