'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface MousePosition {
  x: number
  y: number
}

export default function MouseTrail() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [trail, setTrail] = useState<MousePosition[]>([])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const newPosition = { x: event.clientX, y: event.clientY }
      setMousePosition(newPosition)
      
      setTrail(prev => {
        const newTrail = [...prev, newPosition]
        if (newTrail.length > 10) {
          return newTrail.slice(-10)
        }
        return newTrail
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* 主光点 */}
      <motion.div
        className="absolute w-4 h-4 bg-gradient-to-r from-primary-400 to-purple-500 rounded-full blur-sm"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* 轨迹光点 */}
      {trail.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-primary-300 rounded-full"
          style={{
            left: pos.x - 4,
            top: pos.y - 4,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}
