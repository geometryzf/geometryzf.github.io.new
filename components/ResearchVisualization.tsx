'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const visualizations = [
  {
    id: 'tech-roadmap',
    title: '技术路线图',
    description: '展示从基础算法到前沿技术的发展路径',
    image: '/images/tech-roadmap.svg',
    alt: '技术路线图'
  },
  {
    id: 'research-areas',
    title: '研究领域与专长',
    description: '核心研究领域和技术栈的可视化展示',
    image: '/images/research-areas.svg',
    alt: '研究领域图'
  },
  {
    id: 'algorithm-flow',
    title: '算法研究流程',
    description: '从问题分析到部署应用的完整研究流程',
    image: '/images/algorithm-flow.svg',
    alt: '算法流程图'
  },
  {
    id: 'task-manager-tech',
    title: '任务管理技术路线',
    description: '现代化任务管理应用的技术架构和发展路径',
    image: '/images/task-manager-tech.svg',
    alt: '任务管理技术路线图'
  },
  {
    id: 'task-manager-architecture',
    title: '任务管理架构图',
    description: '任务管理应用的系统架构和技术栈展示',
    image: '/images/task-manager-architecture.svg',
    alt: '任务管理架构图'
  },
  {
    id: 'task-manager-flow',
    title: '任务管理工作流',
    description: '任务管理应用的完整工作流程和功能展示',
    image: '/images/task-manager-flow.svg',
    alt: '任务管理工作流程图'
  }
]

export default function ResearchVisualization() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % visualizations.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + visualizations.length) % visualizations.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">研究可视化</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            通过直观的图表展示我的技术路线、研究领域和算法研究流程
          </p>
        </motion.div>

        <div className="relative">
          {/* 主展示区域 */}
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-dark-700 shadow-xl">
            <div className="relative h-96 sm:h-[500px] lg:h-[600px]">
              {visualizations.map((viz, index) => (
                <motion.div
                  key={viz.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    x: index === currentIndex ? 0 : 100
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 ${index === currentIndex ? 'block' : 'hidden'}`}
                >
                  <div className="h-full flex flex-col">
                    {/* 图片区域 */}
                    <div className="flex-1 flex items-center justify-center p-6">
                      <img
                        src={viz.image}
                        alt={viz.alt}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* 信息区域 */}
                    <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {viz.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {viz.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 导航按钮 */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-dark-600 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
              aria-label="上一张"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-dark-600 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
              aria-label="下一张"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* 缩略图导航 */}
          <div className="flex justify-center mt-6 space-x-3">
            {visualizations.map((viz, index) => (
              <button
                key={viz.id}
                onClick={() => goToSlide(index)}
                className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex
                    ? 'border-primary-500 shadow-lg'
                    : 'border-gray-200 dark:border-dark-600 hover:border-primary-300'
                }`}
              >
                <img
                  src={viz.image}
                  alt={viz.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/* 指示器 */}
          <div className="flex justify-center mt-4 space-x-2">
            {visualizations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-500'
                    : 'bg-gray-300 dark:bg-dark-600 hover:bg-primary-300'
                }`}
                aria-label={`跳转到第 ${index + 1} 张图片`}
              />
            ))}
          </div>
        </div>

        {/* 项目链接 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            相关项目
          </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <a
               href="https://github.com/geometryzf/path-planning"
               target="_blank"
               rel="noopener noreferrer"
               className="group card p-6 hover:shadow-xl transition-shadow duration-300"
             >
               <div className="flex items-center justify-between mb-4">
                 <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                   智能路径规划算法
                 </h4>
                 <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
               </div>
               <p className="text-gray-600 dark:text-gray-400 text-sm">
                 基于动态规划和强化学习的智能路径规划系统
               </p>
             </a>

             <a
               href="https://github.com/geometryzf/mpc-system"
               target="_blank"
               rel="noopener noreferrer"
               className="group card p-6 hover:shadow-xl transition-shadow duration-300"
             >
               <div className="flex items-center justify-between mb-4">
                 <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                   模型预测控制系统
                 </h4>
                 <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
               </div>
               <p className="text-gray-600 dark:text-gray-400 text-sm">
                 基于MPC算法的智能控制系统，用于工业过程优化
               </p>
             </a>

             <a
               href="https://github.com/geometryzf/pso-library"
               target="_blank"
               rel="noopener noreferrer"
               className="group card p-6 hover:shadow-xl transition-shadow duration-300"
             >
               <div className="flex items-center justify-between mb-4">
                 <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                   粒子群优化算法库
                 </h4>
                 <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
               </div>
               <p className="text-gray-600 dark:text-gray-400 text-sm">
                 高性能的PSO算法实现，支持多目标优化和并行计算
               </p>
             </a>

             <a
               href="https://github.com/geometryzf/task-manager"
               target="_blank"
               rel="noopener noreferrer"
               className="group card p-6 hover:shadow-xl transition-shadow duration-300"
             >
               <div className="flex items-center justify-between mb-4">
                 <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                   任务管理应用
                 </h4>
                 <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
               </div>
               <p className="text-gray-600 dark:text-gray-400 text-sm">
                 现代化的任务管理工具，支持拖拽排序、实时协作
               </p>
             </a>
           </div>
        </motion.div>
      </div>
    </section>
  )
}
