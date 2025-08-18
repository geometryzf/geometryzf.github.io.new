'use client'

import { motion } from 'framer-motion'
import { Download, FileText, FileImage } from 'lucide-react'

interface ResumeFile {
  name: string
  url: string
  format: string
  icon: any
  description: string
}

const resumeFiles: ResumeFile[] = [
  {
    name: '郑斐个人简历.docx',
    url: '/resume.docx',
    format: 'Word文档',
    icon: FileText,
    description: '可编辑的Word格式简历'
  },
  // 如果你有PDF版本，可以取消注释下面的代码
  // {
  //   name: '郑斐个人简历.pdf',
  //   url: '/resume.pdf',
  //   format: 'PDF文档',
  //   icon: FileImage,
  //   description: '标准PDF格式简历'
  // }
]

export default function ResumeDownload() {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">简历下载</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {resumeFiles.map((file, index) => (
          <motion.a
            key={file.name}
            href={file.url}
            download={file.name}
            className="flex items-center p-4 border border-gray-200 dark:border-dark-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors duration-200 group"
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
            <Download className="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
          </motion.a>
        ))}
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        点击下载按钮即可保存简历文件到本地
      </p>
    </div>
  )
}
