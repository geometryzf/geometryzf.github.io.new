'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-dark-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold gradient-text mb-4">{siteConfig.name}</h3>
            <p className="text-gray-400 mb-4">{siteConfig.description}</p>
            <div className="flex space-x-4">
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-400 hover:text-white transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">首页</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">关于我</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">技能专长</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">项目展示</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">联系我</a></li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
            <h4 className="text-lg font-semibold mb-4">联系信息</h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 {siteConfig.contact.location}</p>
              {siteConfig.contact.locationDetail && (
                <p className="text-sm">📍 {siteConfig.contact.locationDetail}</p>
              )}
              <p>📧 {siteConfig.contact.email}</p>
              <p>📱 {siteConfig.contact.phone}</p>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }} className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} {siteConfig.name}. 用 <Heart className="inline w-4 h-4 text-red-500" /> 和 Next.js 构建
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
