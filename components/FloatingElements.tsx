'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  duration: number
  delay: number
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = []
      for (let i = 0; i < 15; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          rotation: Math.random() * 360,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
        })
      }
      setElements(newElements)
    }

    generateElements()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute opacity-10"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [element.rotation, element.rotation + 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {element.id % 3 === 0 ? (
            <div className="w-full h-full bg-gradient-to-br from-primary-400 to-purple-500 rounded-full" />
          ) : element.id % 3 === 1 ? (
            <div className="w-full h-full bg-gradient-to-br from-primary-300 to-blue-500 transform rotate-45" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg" />
          )}
        </motion.div>
      ))}
    </div>
  )
}
