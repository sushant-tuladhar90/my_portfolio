'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Smartphone, Globe, Database } from 'lucide-react'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Smart Parking System',
      description: 'Developed a smart parking mobile app using Flutter with Firebase Authentication and Firestore for real-time slot tracking. Implemented QR code generation for secure user check-in and check-out.',
      technologies: ['Flutter', 'Firebase', 'Firestore', 'QR Code', 'Real-time'],
      type: 'Flutter App',
      duration: '01 February, 2025 - 12 March, 2025',
      github: 'https://github.com/sushant-tuladhar90/smart_parking',
      live: null,
      icon: Smartphone
    },
    {
      title: 'ShofyDrop Vendor',
      description: 'Worked on the vendor-side interface of a production-ready e-commerce app using Flutter, integrating APIs built with Java backend. Implemented responsive UI components for vendor features.',
      technologies: ['Flutter', 'Java Backend', 'REST APIs', 'E-commerce', 'Vendor Panel'],
      type: 'Flutter App',
      duration: '15 June, 2025 - 25 July, 2025',
      github: 'https://github.com/sushant-tuladhar90',
      live: null,
      icon: Smartphone
    },
    {
      title: 'Food Delivery App',
      description: 'Worked on a mobile application that helps users order their foods. Modernized the app using the Flutter framework and implemented Firebase to store and retrieve users and their messages.',
      technologies: ['Flutter', 'Firebase', 'Food Delivery', 'Real-time', 'User Management'],
      type: 'Flutter App',
      duration: '15 September, 2024 - 20 January, 2025',
      github: 'https://github.com/sushant-tuladhar90/food_delivery_app',
      live: null,
      icon: Smartphone
    },
    {
      title: 'Chat App',
      description: 'Created Chat App to easily send or receive messages. Collaborated with the UX team to identify and eliminate bugs in the UI. Designed an intuitive user interface using Flutter.',
      technologies: ['Flutter', 'Real-time Chat', 'Firebase', 'UI/UX', 'Provider'],
      type: 'Flutter App',
      duration: '15 September, 2024 - 20 January, 2025',
      github: 'https://github.com/sushant-tuladhar90/MyChatApp',
      live: null,
      icon: Smartphone
    },
    {
      title: 'Library Management System',
      description: 'Built a library management website to manage the library of the college. Integrated an admin panel to manage books safely with comprehensive book tracking and user management.',
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'Admin Panel'],
      type: 'Website',
      duration: '16 September, 2023 - 17 November, 2025',
      github: 'https://github.com/sushant-tuladhar90/LibraryManagementSystem',
      live: null,
      icon: Globe
    },
    {
      title: 'Note App Backend',
      description: 'Developed the backend system for a note-taking application using JavaScript. Implemented RESTful APIs and database management for note storage and retrieval.',
      technologies: ['JavaScript', 'REST APIs', 'Database', 'Backend', 'Node.js'],
      type: 'Backend',
      duration: '15 September, 2024 - 20 January, 2025',
      github: 'https://github.com/sushant-tuladhar90/NoteAppBackend',
      live: null,
      icon: Database
    }
  ]

  return (
    <section id="projects" className="section-padding bg-dark-200">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-dark-100 rounded-lg border border-gray-700 hover:border-primary-500 transition-all duration-300 overflow-hidden group"
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <project.icon className="w-6 h-6 text-primary-400" />
                  <span className="text-sm text-primary-400 font-medium">{project.type}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-500/10 text-primary-400 text-xs rounded-full border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Duration */}
                <p className="text-gray-400 text-xs mb-4">
                  {project.duration}
                </p>

                {/* Links */}
                <div className="flex space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-dark-200 text-gray-300 rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  
                  {project.live && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-dark-200 text-gray-300 rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/sushant-tuladhar90"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 