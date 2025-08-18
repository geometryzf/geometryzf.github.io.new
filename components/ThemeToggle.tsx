'use client'

import { Sun, Moon } from 'lucide-react'

interface ThemeToggleProps {
  isDark: boolean
  setIsDark: (isDark: boolean) => void
}

export default function ThemeToggle({ isDark, setIsDark }: ThemeToggleProps) {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-dark-800 shadow-lg border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-all duration-200"
      aria-label="切换主题"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  )
}
