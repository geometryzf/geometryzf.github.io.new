'use client'

import { motion } from 'framer-motion'

export default function AnimatedGradient() {
  return (
    <div className="fixed inset-0 -z-10">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"
        animate={{
          background: [
            'linear-gradient(45deg, #eff6ff, #e0e7ff, #f3e8ff)',
            'linear-gradient(45deg, #f3e8ff, #eff6ff, #e0e7ff)',
            'linear-gradient(45deg, #e0e7ff, #f3e8ff, #eff6ff)',
            'linear-gradient(45deg, #eff6ff, #e0e7ff, #f3e8ff)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* 动态光晕效果 */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-400/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </div>
  )
}
