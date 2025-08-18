'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-dark-800 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">{siteConfig.name?.[0] ?? '我'}</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">你好，我是 {siteConfig.name}</span>
            <br />
            <span className="text-gray-900 dark:text-gray-100">{siteConfig.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a href="#contact" className="btn-primary flex items-center gap-2">
              <Mail className="w-5 h-5" />
              联系我
            </a>
            <a href="/resume.pdf" className="btn-secondary flex items-center gap-2">
              <Download className="w-5 h-5" />
              下载简历
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
