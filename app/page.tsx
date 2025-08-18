'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'
import GithubStats from '@/components/GithubStats'

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    setIsDark(theme === 'dark')
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
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
