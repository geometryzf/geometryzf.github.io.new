'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface AvatarProps {
  name: string
  imageUrl?: string
}

export default function Avatar({ name, imageUrl }: AvatarProps) {
  return (
    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1 relative">
      <motion.div
        className="w-full h-full rounded-full bg-white dark:bg-dark-800 flex items-center justify-center relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            width={128}
            height={128}
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <span className="text-4xl font-bold gradient-text relative z-10">
            {name?.[0] ?? '我'}
          </span>
        )}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-purple-500/20"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>
    </div>
  )
}
