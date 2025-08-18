'use client'

import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { siteConfig } from '@/config/site'
import ResumeDownload from './ResumeDownload'
import EmailSender from './EmailSender'

const socialLinks = [
  { name: 'GitHub', url: siteConfig.social.github, icon: '🐙' },
  { name: 'LinkedIn', url: siteConfig.social.linkedin, icon: '💼' },
  { name: 'Twitter', url: siteConfig.social.twitter, icon: '🐦' },
  { name: '博客', url: siteConfig.social.blog, icon: '📝' },
]

export default function Contact() {
  const [showEmailSender, setShowEmailSender] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget as any
    const name = form.name.value?.trim() || '访客'
    const email = form.email.value?.trim() || ''
    const subject = form.subject.value?.trim() || '来自个人主页的消息'
    const message = form.message.value?.trim() || ''

    // 保存表单数据并显示邮件发送器
    setFormData({ name, email, subject, message })
    setShowEmailSender(true)
  }, [])

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">联系我</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            如果您对我的工作感兴趣，或者想要合作项目，欢迎随时联系我
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">联系方式</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">邮箱</h4>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">位置</h4>
                  <p className="text-gray-600 dark:text-gray-400">{siteConfig.contact.location}</p>
                  {siteConfig.contact.locationDetail && (
                    <p className="text-sm text-gray-500 dark:text-gray-500">{siteConfig.contact.locationDetail}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">电话</h4>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">社交媒体</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-dark-700 flex items-center justify-center text-2xl hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:scale-110 transition-all duration-200"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <ResumeDownload />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">发送消息</h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800 dark:text-blue-200">
                  <p className="font-medium mb-1">邮件发送说明</p>
                  <p>填写表单后，系统将自动打开您的邮件客户端，预填充收件人、主题和内容。您只需点击发送即可。</p>
                </div>
              </div>
            </div>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">姓名</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100" placeholder="请输入您的姓名" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">邮箱</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100" placeholder="请输入您的邮箱" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">主题</label>
                <input type="text" id="subject" name="subject" className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100" placeholder="请输入消息主题" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">消息内容</label>
                <textarea id="message" name="message" rows={6} className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 resize-none" placeholder="请输入您的消息内容..." />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                准备发送邮件
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* 邮件发送器弹窗 */}
      {showEmailSender && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowEmailSender(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  发送邮件给 {siteConfig.name}
                </h3>
                <button
                  onClick={() => setShowEmailSender(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
              
              <EmailSender
                name={formData.name}
                email={formData.email}
                subject={formData.subject}
                message={formData.message}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
