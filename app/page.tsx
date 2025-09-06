'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'
import GithubStats from '@/components/GithubStats'
import ResearchVisualization from '@/components/ResearchVisualization'
import ParticleBackground from '@/components/ParticleBackground'
import FloatingElements from '@/components/FloatingElements'
import MouseTrail from '@/components/MouseTrail'
import AnimatedGradient from '@/components/AnimatedGradient'

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [showEffects, setShowEffects] = useState(true)
  const [isStaticExport, setIsStaticExport] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    setIsDark(theme === 'dark')
    
    // 检测是否为静态导出环境
    setIsStaticExport(process.env.STATIC_EXPORT === 'true')
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden">
      {/* 动态背景效果 */}
      <AnimatedGradient />
      {showEffects && <ParticleBackground />}
      {showEffects && <FloatingElements />}
      {showEffects && <MouseTrail />}
      
      {/* 效果开关按钮 */}
      <button
        onClick={() => setShowEffects(!showEffects)}
        className="fixed top-20 right-4 z-50 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-dark-800 transition-all duration-200 shadow-lg"
      >
        {showEffects ? '关闭特效' : '开启特效'}
      </button>
      
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ResearchVisualization />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
