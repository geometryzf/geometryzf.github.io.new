'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Copy, Check, AlertCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'

interface EmailSenderProps {
  name: string
  email: string
  subject: string
  message: string
}

export default function EmailSender({ name, email, subject, message }: EmailSenderProps) {
  const [copied, setCopied] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // 构建邮件内容
  const emailBody = `
您好，郑斐：

我是 ${name}，通过您的个人主页联系您。

我的邮箱：${email}

消息内容：
${message}

---
此邮件来自您的个人主页联系表单
发送时间：${new Date().toLocaleString('zh-CN')}
  `.trim()

  const emailSubject = `${subject} - 来自 ${name}`

  // 复制邮件信息到剪贴板
  const copyEmailInfo = async () => {
    const emailInfo = `收件人：${siteConfig.contact.email}
主题：${emailSubject}
内容：
${emailBody}`
    
    try {
      await navigator.clipboard.writeText(emailInfo)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  // 打开默认邮件客户端
  const openMailClient = () => {
    const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailto
  }

  // 打开 Gmail
  const openGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.contact.email)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    window.open(gmailUrl, '_blank')
  }

  // 打开 Outlook
  const openOutlook = () => {
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(siteConfig.contact.email)}&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    window.open(outlookUrl, '_blank')
  }

  return (
    <div className="space-y-4">
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Check className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-green-800 dark:text-green-200">
            <p className="font-medium mb-1">邮件信息已准备就绪</p>
            <p>请选择您偏好的邮件发送方式：</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <motion.button
          onClick={openMailClient}
          className="flex items-center justify-center gap-2 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Mail className="w-4 h-4" />
          默认邮件客户端
        </motion.button>

        <motion.button
          onClick={openGmail}
          className="flex items-center justify-center gap-2 p-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Mail className="w-4 h-4" />
          Gmail
        </motion.button>

        <motion.button
          onClick={openOutlook}
          className="flex items-center justify-center gap-2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Mail className="w-4 h-4" />
          Outlook
        </motion.button>

        <motion.button
          onClick={copyEmailInfo}
          className="flex items-center justify-center gap-2 p-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? '已复制' : '复制邮件信息'}
        </motion.button>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">邮件预览</h4>
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-medium text-gray-700 dark:text-gray-300">收件人：</span>
            <span className="text-gray-900 dark:text-gray-100">{siteConfig.contact.email}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700 dark:text-gray-300">主题：</span>
            <span className="text-gray-900 dark:text-gray-100">{emailSubject}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700 dark:text-gray-300">内容：</span>
            <div className="mt-1 p-3 bg-white dark:bg-gray-700 rounded border text-gray-800 dark:text-gray-200 whitespace-pre-line">
              {emailBody}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-yellow-800 dark:text-yellow-200">
            <p className="font-medium mb-1">温馨提示</p>
            <ul className="space-y-1 text-xs">
              <li>• 如果邮件客户端没有自动打开，请手动复制邮件信息</li>
              <li>• 建议在邮件中说明您的具体需求和联系方式</li>
              <li>• 我会尽快回复您的邮件</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
