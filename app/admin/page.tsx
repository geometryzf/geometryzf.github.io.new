'use client'

import { useState, useEffect, useRef } from 'react'
import { Lock, Edit, Save, Eye, Sliders, MousePointer, Type } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/config/site'

// 技能进度条编辑组件
function SkillProgressEditor({ 
  skill, 
  onUpdate, 
  isEditing 
}: { 
  skill: { name: string; level: number; color: string }
  onUpdate: (name: string, level: number) => void
  isEditing: boolean 
}) {
  const [isDragging, setIsDragging] = useState(false)
  const [dragLevel, setDragLevel] = useState(skill.level)
  const progressRef = useRef<HTMLDivElement>(null)
  const [inputValue, setInputValue] = useState(skill.level.toString())

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isEditing) return
    setIsDragging(true)
    updateLevelFromMouse(e)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !isEditing) return
    updateLevelFromMouse(e)
  }

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false)
      onUpdate(skill.name, dragLevel)
    }
  }

  const updateLevelFromMouse = (e: React.MouseEvent) => {
    if (!progressRef.current) return
    const rect = progressRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    const newLevel = Math.round(percentage)
    setDragLevel(newLevel)
    setInputValue(newLevel.toString())
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    const numValue = parseInt(value) || 0
    const clampedValue = Math.max(0, Math.min(100, numValue))
    setDragLevel(clampedValue)
  }

  const handleInputBlur = () => {
    const numValue = parseInt(inputValue) || 0
    const clampedValue = Math.max(0, Math.min(100, numValue))
    setDragLevel(clampedValue)
    setInputValue(clampedValue.toString())
    onUpdate(skill.name, clampedValue)
  }

  const currentLevel = isDragging ? dragLevel : skill.level

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove as any)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove as any)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging])

  useEffect(() => {
    setDragLevel(skill.level)
    setInputValue(skill.level.toString())
  }, [skill.level])

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {skill.name}
        </span>
        {isEditing && (
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min="0"
              max="100"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className="w-16 px-2 py-1 text-sm border border-gray-300 dark:border-dark-600 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100"
            />
            <span className="text-sm text-gray-500 dark:text-gray-400">%</span>
          </div>
        )}
        {!isEditing && (
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {skill.level}%
          </span>
        )}
      </div>
      <div
        ref={progressRef}
        className={`relative w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${
          isEditing ? 'cursor-pointer' : ''
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          className="h-full rounded-full transition-all duration-200 ease-out"
          style={{
            width: `${currentLevel}%`,
            backgroundColor: skill.color,
          }}
        />
        {isEditing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-xs text-white font-medium drop-shadow-lg">
              {currentLevel}%
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState<'basic' | 'skills'>('basic')
  
  // 基本信息
  const [name, setName] = useState(siteConfig.name)
  const [title, setTitle] = useState(siteConfig.title)
  const [description, setDescription] = useState(siteConfig.description)
  const [email, setEmail] = useState(siteConfig.contact.email)
  const [phone, setPhone] = useState(siteConfig.contact.phone)
  const [location, setLocation] = useState(siteConfig.contact.location)
  const [github, setGithub] = useState(siteConfig.social.github)
  const [linkedin, setLinkedin] = useState(siteConfig.social.linkedin)
  const [story, setStory] = useState(siteConfig.about.story)

  // 技能数据
  const [skills, setSkills] = useState({
    algorithms: [...siteConfig.skills.algorithms],
    frontend: [...siteConfig.skills.frontend],
    backend: [...siteConfig.skills.backend],
    tools: [...siteConfig.skills.tools],
  })

  const ADMIN_PASSWORD = 'geometryzf2024'

  useEffect(() => {
    // 检查是否已经登录
    const auth = localStorage.getItem('admin_auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
    
    // 加载保存的数据
    const savedData = localStorage.getItem('admin_data')
    if (savedData) {
      try {
        const data = JSON.parse(savedData)
        setName(data.name || siteConfig.name)
        setTitle(data.title || siteConfig.title)
        setDescription(data.description || siteConfig.description)
        setEmail(data.email || siteConfig.contact.email)
        setPhone(data.phone || siteConfig.contact.phone)
        setLocation(data.location || siteConfig.contact.location)
        setGithub(data.github || siteConfig.social.github)
        setLinkedin(data.linkedin || siteConfig.social.linkedin)
        setStory(data.story || siteConfig.about.story)
        
        if (data.skills) {
          setSkills(data.skills)
        }
      } catch (error) {
        console.error('加载保存数据失败:', error)
      }
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem('admin_auth', 'true')
    } else {
      alert('密码错误！')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('admin_auth')
  }

  const handleSave = () => {
    localStorage.setItem('admin_data', JSON.stringify({ 
      name, title, description, email, phone, location, github, linkedin, story, skills
    }))
    setIsEditing(false)
    alert('保存成功！注意：这是临时保存，需要重新部署才能生效。')
  }

  const handleCancel = () => {
    // 恢复到原始数据
    setName(siteConfig.name)
    setTitle(siteConfig.title)
    setDescription(siteConfig.description)
    setEmail(siteConfig.contact.email)
    setPhone(siteConfig.contact.phone)
    setLocation(siteConfig.contact.location)
    setGithub(siteConfig.social.github)
    setLinkedin(siteConfig.social.linkedin)
    setStory(siteConfig.about.story)
    setSkills({
      algorithms: [...siteConfig.skills.algorithms],
      frontend: [...siteConfig.skills.frontend],
      backend: [...siteConfig.skills.backend],
      tools: [...siteConfig.skills.tools],
    })
    setIsEditing(false)
  }

  const handleSyncToConfig = async () => {
    try {
      const response = await fetch('/api/admin/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name, title, description, email, phone, location, github, linkedin, story, skills
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        alert('配置已同步到文件！需要重新部署才能生效。')
      } else {
        alert('同步失败：' + result.message)
      }
    } catch (error) {
      alert('同步失败，请重试')
      console.error('同步错误:', error)
    }
  }

  const updateSkillLevel = (category: keyof typeof skills, skillName: string, newLevel: number) => {
    setSkills(prev => ({
      ...prev,
      [category]: prev[category].map(skill => 
        skill.name === skillName ? { ...skill, level: newLevel } : skill
      )
    }))
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              管理员登录
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              请输入管理员密码以访问后台
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                管理员密码
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100"
                placeholder="请输入密码"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <Lock className="w-5 h-5" />
              登录
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              返回主页
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32">
        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              网站内容管理
            </h1>
            <div className="flex items-center space-x-3">
              {isEditing ? (
                <>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-300 dark:border-dark-600 rounded-lg"
                  >
                    取消
                  </button>
                  <button
                    onClick={handleSave}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    保存
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Edit className="w-4 h-4" />
                    编辑
                  </button>
                  <button
                    onClick={handleSyncToConfig}
                    className="px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 border border-blue-300 dark:border-blue-600 rounded-lg"
                  >
                    同步到配置
                  </button>
                </>
              )}
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 border border-red-300 dark:border-red-600 rounded-lg"
              >
                退出
              </button>
            </div>
          </div>

          {/* 标签页导航 */}
          <div className="flex space-x-1 mb-8 bg-gray-100 dark:bg-dark-700 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('basic')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'basic'
                  ? 'bg-white dark:bg-dark-600 text-gray-900 dark:text-gray-100 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              基本信息
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'skills'
                  ? 'bg-white dark:bg-dark-600 text-gray-900 dark:text-gray-100 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              技能进度条
            </button>
          </div>

          {activeTab === 'basic' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    职位标题
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    个人描述
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={!isEditing}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 resize-none disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    邮箱
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    电话
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    位置
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    GitHub
                  </label>
                  <input
                    type="url"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    个人故事
                  </label>
                  <textarea
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    disabled={!isEditing}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 resize-none disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                    操作说明
                  </h3>
                  <div className="space-y-3 text-sm text-blue-800 dark:text-blue-200">
                    <p>• 点击"编辑"进入编辑模式</p>
                    <p>• 修改完成后点击"保存"</p>
                    <p>• 可以随时点击"取消"恢复原内容</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800">
                    <a
                      href="/"
                      target="_blank"
                      className="btn-secondary w-full flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      查看主页
                    </a>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-4">
                    注意事项
                  </h3>
                  <div className="space-y-3 text-sm text-yellow-800 dark:text-yellow-200">
                    <p>⚠️ 当前为临时保存，需要重新部署才能生效</p>
                    <p>⚠️ 请妥善保管管理员密码</p>
                    <p>⚠️ 建议定期备份重要内容</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-8">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
                  <Sliders className="w-5 h-5" />
                  技能进度条编辑说明
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-800 dark:text-green-200">
                  <div className="flex items-center gap-2">
                    <MousePointer className="w-4 h-4" />
                    <span>鼠标拖动：点击进度条并拖动调整数值</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Type className="w-4 h-4" />
                    <span>直接输入：点击数值框直接输入百分比</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 算法专长 */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                    算法专长
                  </h3>
                  <div className="space-y-4">
                    {skills.algorithms.map((skill) => (
                      <SkillProgressEditor
                        key={skill.name}
                        skill={skill}
                        onUpdate={(name, level) => updateSkillLevel('algorithms', name, level)}
                        isEditing={isEditing}
                      />
                    ))}
                  </div>
                </div>

                {/* 前端技术 */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                    前端技术
                  </h3>
                  <div className="space-y-4">
                    {skills.frontend.map((skill) => (
                      <SkillProgressEditor
                        key={skill.name}
                        skill={skill}
                        onUpdate={(name, level) => updateSkillLevel('frontend', name, level)}
                        isEditing={isEditing}
                      />
                    ))}
                  </div>
                </div>

                {/* 后端技术 */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                    后端技术
                  </h3>
                  <div className="space-y-4">
                    {skills.backend.map((skill) => (
                      <SkillProgressEditor
                        key={skill.name}
                        skill={skill}
                        onUpdate={(name, level) => updateSkillLevel('backend', name, level)}
                        isEditing={isEditing}
                      />
                    ))}
                  </div>
                </div>

                {/* 开发工具 */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                    开发工具
                  </h3>
                  <div className="space-y-4">
                    {skills.tools.map((skill) => (
                      <SkillProgressEditor
                        key={skill.name}
                        skill={skill}
                        onUpdate={(name, level) => updateSkillLevel('tools', name, level)}
                        isEditing={isEditing}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
