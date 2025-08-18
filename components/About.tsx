'use client'

import { motion } from 'framer-motion'
import { Code, Users, Lightbulb, Target } from 'lucide-react'
import { siteConfig } from '@/config/site'

const iconList = [Code, Users, Lightbulb, Target]

export default function About() {
  const features = siteConfig.about.features.map((f, idx) => ({
    icon: iconList[idx % iconList.length],
    title: f.title,
    description: f.description,
  }))

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">关于我</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {siteConfig.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-dark-700 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              我的故事
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
              {siteConfig.about.story}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
