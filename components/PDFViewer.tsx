'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Eye, Download, X, Maximize2, Minimize2 } from 'lucide-react'

interface PDFViewerProps {
  pdfUrl: string
  title: string
  onClose: () => void
}

export default function PDFViewer({ pdfUrl, title, onClose }: PDFViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // 防下载功能
  useEffect(() => {
    const preventDownload = (e: KeyboardEvent) => {
      // 禁用常见的下载快捷键
      if (
        (e.ctrlKey && e.key === 's') || // Ctrl+S
        (e.ctrlKey && e.key === 'p') || // Ctrl+P
        (e.key === 'F12') || // F12开发者工具
        (e.ctrlKey && e.shiftKey && e.key === 'I') // Ctrl+Shift+I
      ) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    const preventRightClick = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    const preventDrag = (e: DragEvent) => {
      e.preventDefault()
      return false
    }

    const preventSelect = (e: Event) => {
      e.preventDefault()
      return false
    }

    document.addEventListener('keydown', preventDownload)
    document.addEventListener('contextmenu', preventRightClick)
    document.addEventListener('dragstart', preventDrag)
    document.addEventListener('selectstart', preventSelect)

    return () => {
      document.removeEventListener('keydown', preventDownload)
      document.removeEventListener('contextmenu', preventRightClick)
      document.removeEventListener('dragstart', preventDrag)
      document.removeEventListener('selectstart', preventSelect)
    }
  }, [])

  // 全屏功能
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
    } else {
      await document.exitFullscreen()
    }
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl w-full max-w-6xl h-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部工具栏 */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-dark-700">
          <div className="flex items-center space-x-3">
            <Eye className="w-5 h-5 text-primary-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            {isLoading && (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-gray-500">加载中...</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleFullscreen}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors duration-200"
              title={isFullscreen ? '退出全屏' : '全屏查看'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors duration-200"
              title="关闭"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF查看区域 */}
        <div className="flex-1 relative overflow-hidden">
          {/* 水印层 */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute inset-0 opacity-5">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-gray-400 text-sm font-mono select-none"
                  style={{
                    left: `${(i * 15) % 100}%`,
                    top: `${(i * 10) % 100}%`,
                    transform: `rotate(${i * 18}deg)`,
                  }}
                >
                  郑斐个人简历 - 仅供查看
                </div>
              ))}
            </div>
          </div>

          {/* PDF iframe */}
          <iframe
            ref={iframeRef}
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0&view=FitH`}
            className="w-full h-full border-0"
            onLoad={handleIframeLoad}
            title={title}
            sandbox="allow-same-origin allow-scripts"
          />
        </div>

        {/* 底部提示 */}
        <div className="p-4 border-t border-gray-200 dark:border-dark-700 bg-gray-50 dark:bg-dark-900">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-4">
              <span>📄 此文档仅供在线查看</span>
              <span>🔒 已启用防下载保护</span>
              <span>💧 包含水印保护</span>
            </div>
            <div className="flex items-center space-x-2">
              <Download className="w-4 h-4 text-gray-400" />
              <span>下载功能已禁用</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
