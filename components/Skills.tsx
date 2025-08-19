'use client'

import { motion } from 'framer-motion'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiFigma,
  SiPytorch,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiCplusplus,
} from 'react-icons/si'
import { siteConfig } from '@/config/site'

const IconMap: Record<string, any> = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  Python: SiPython,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  Git: SiGit,
  Figma: SiFigma,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  'C++': SiCplusplus,
}

export default function Skills() {
  const skillCategories = [
    {
      title: '算法专长',
      skills: siteConfig.skills.algorithms.map((s) => ({
        name: s.name,
        icon: IconMap[s.name] || null,
        level: s.level,
        color: s.color,
      })),
    },
    {
      title: '前端技术',
      skills: siteConfig.skills.frontend.map((s) => ({
        name: s.name,
        icon: IconMap[s.name],
        level: s.level,
        color: s.color,
      })),
    },
    {
      title: '后端技术',
      skills: siteConfig.skills.backend.map((s) => ({
        name: s.name,
        icon: IconMap[s.name],
        level: s.level,
        color: s.color,
      })),
    },
    {
      title: '开发工具',
      skills: siteConfig.skills.tools.map((s) => ({
        name: s.name,
        icon: IconMap[s.name],
        level: s.level,
        color: s.color,
      })),
    },
  ]

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">技能专长</span>
          </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              以下是我在算法研究和开发过程中掌握的主要技术栈和工具
            </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                        style={{ backgroundColor: `${skill.color}20` }}
                      >
                        {skill.icon ? (
                          <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
                        ) : (
                          <span className="w-6 h-6 flex items-center justify-center font-bold" style={{ color: skill.color }}>
                            {skill.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">{skill.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{skill.level}% 熟练度</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              持续学习
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              算法技术发展日新月异，我始终保持学习的热情。
              目前正在深入研究大语言模型、联邦学习和量子计算等前沿技术。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
