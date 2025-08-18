'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, FileImage, Shield, Lock } from 'lucide-react'
import PDFViewer from './PDFViewer'

interface ResumeFile {
  name: string
  url: string
  format: string
  icon: any
  description: string
  isProtected?: boolean
}

const resumeFiles: ResumeFile[] = [
  {
    name: '郑斐个人简历.pdf',
    url: '/resume.pdf',
    format: 'PDF文档',
    icon: FileImage,
    description: '在线查看，带水印保护',
    isProtected: true
  }
]

export default function ResumeDownload() {
  const [showPDFViewer, setShowPDFViewer] = useState(false)

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">简历查看</h4>
      <div className="grid grid-cols-1 gap-4">
        {resumeFiles.map((file, index) => (
          <motion.button
            key={file.name}
            onClick={() => setShowPDFViewer(true)}
            className="flex items-center p-4 border border-gray-200 dark:border-dark-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors duration-200 group w-full text-left"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors duration-200">
              <file.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                {file.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {file.format} • {file.description}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {file.isProtected && (
                <div className="flex items-center space-x-1 text-xs text-green-600 dark:text-green-400">
                  <Shield className="w-3 h-3" />
                  <span>保护</span>
                </div>
              )}
              <Eye className="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
            </div>
          </motion.button>
        ))}
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-blue-800 dark:text-blue-200">
            <p className="font-medium mb-1">隐私保护说明</p>
            <ul className="space-y-1 text-xs">
              <li>• 简历仅供在线查看，无法下载</li>
              <li>• 已启用防下载和防复制保护</li>
              <li>• 包含水印，防止恶意使用</li>
              <li>• 如需完整版本，请联系本人</li>
            </ul>
          </div>
        </div>
      </div>

      {showPDFViewer && (
        <PDFViewer
          pdfUrl="/resume.pdf"
          title="郑斐个人简历"
          onClose={() => setShowPDFViewer(false)}
        />
      )}
    </div>
  )
}
