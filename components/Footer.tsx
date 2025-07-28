'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/sushant-tuladhar90',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/sushant-tuladhar/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      url: 'mailto:susantuladhar90@gmail.com',
      label: 'Email'
    }
  ]

  return (
    <footer className="bg-dark-300 py-12 border-t border-gray-800">
      <div className="container-custom px-4">
        <div className="text-center">
          {/* Logo and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <Code className="w-8 h-8 text-primary-500" />
            <span className="text-2xl font-bold gradient-text">Sushant Tuladhar</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 mb-8 max-w-md mx-auto"
          >
            Passionate Flutter Developer creating innovative mobile experiences
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-200 rounded-full hover:bg-primary-500 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Sushant Tuladhar. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Built with ❤️ using Next.js, TypeScript & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 