'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react'
import { siteConfig } from '@/config/site'
import Avatar from './Avatar'

export default function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = ['前端开发工程师', 'React 开发者', 'TypeScript 专家', '全栈工程师']
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150
    const deleteSpeed = 50
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < texts.length) {
        if (currentText === texts[currentIndex]) {
          setTimeout(() => setIsDeleting(true), 2000)
          return
        }
        setCurrentText(texts[currentIndex].slice(0, currentText.length + 1))
      } else if (isDeleting) {
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
          return
        }
        setCurrentText(texts[currentIndex].slice(0, currentText.length - 1))
      }
    }, isDeleting ? deleteSpeed : typeSpeed)
    
    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Avatar 
              name={siteConfig.name} 
              imageUrl="/avatar.jpg" // 请将你的照片放在 public/avatar.jpg
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">你好，我是 {siteConfig.name}</span>
            <br />
            <span className="text-gray-900 dark:text-gray-100 flex items-center justify-center gap-2">
              <Sparkles className="w-8 h-8 text-primary-500" />
              {currentText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-primary-500"
              >
                |
              </motion.span>
            </span>
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
            <motion.a
              href="#contact"
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              联系我
            </motion.a>
            <motion.a
              href="/resume"
              className="btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-5 h-5" />
              查看简历
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {[
              { href: siteConfig.social.github, icon: Github, label: 'GitHub' },
              { href: siteConfig.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${siteConfig.contact.email}`, icon: Mail, label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 group"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6 group-hover:drop-shadow-lg" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
