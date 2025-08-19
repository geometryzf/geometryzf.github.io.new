import { siteConfig } from '@/config/site'

function getGithubUsername(url: string): string | null {
  try {
    const u = new URL(url)
    const parts = u.pathname.split('/').filter(Boolean)
    return parts[0] || null
  } catch {
    return null
  }
}

// 语言颜色映射
const languageColors: { [key: string]: string } = {
  'Python': '#3776AB',
  'JavaScript': '#F7DF1E',
  'TypeScript': '#3178C6',
  'React': '#61DAFB',
  'Next.js': '#000000',
  'Node.js': '#339933',
  'C++': '#00599C',
  'MATLAB': '#0076A8',
  'Pascal': '#1976D2',
  'Fortran': '#734F96',
  'Git': '#F05032',
  'Docker': '#2496ED',
  'PyTorch': '#EE4C2C',
  'TensorFlow': '#FF6F00',
  'NumPy': '#4DABCF',
  'Pandas': '#130654',
  'LaTeX': '#008080',
  'Tailwind CSS': '#06B6D4',
}

// 根据技能熟练度计算语言使用比例
function calculateLanguageUsage() {
  const allSkills = [
    ...siteConfig.skills.algorithms,
    ...siteConfig.skills.frontend,
    ...siteConfig.skills.backend,
    ...siteConfig.skills.tools,
  ]
  
  // 按熟练度排序并取前8个
  const topLanguages = allSkills
    .sort((a, b) => b.level - a.level)
    .slice(0, 8)
  
  // 计算总熟练度
  const totalLevel = topLanguages.reduce((sum, skill) => sum + skill.level, 0)
  
  // 计算每个语言的百分比
  return topLanguages.map(skill => ({
    name: skill.name,
    percentage: Math.round((skill.level / totalLevel) * 100),
    color: skill.color,
    level: skill.level,
  }))
}

export default function GithubStats() {
  const username = getGithubUsername(siteConfig.social.github) || 'yourusername'
  const languageUsage = calculateLanguageUsage()
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          <span className="gradient-text">GitHub 活动</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card p-4 overflow-auto">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true`}
              alt="GitHub Stats"
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="card p-4 overflow-auto">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true`}
              alt="GitHub Streak"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
        
        {/* 自定义 Most Used Languages */}
        <div className="card p-6 mt-6">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
            Most Used Languages
          </h3>
          <div className="space-y-4">
            {languageUsage.map((lang, index) => (
              <div key={lang.name} className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 min-w-0 flex-1">
                  <div 
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    {lang.name}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ 
                        width: `${lang.percentage}%`,
                        backgroundColor: lang.color,
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 min-w-12 text-right">
                    {lang.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              基于技能熟练度的语言使用比例
            </p>
          </div>
        </div>
        
        {/* 原始 GitHub Top Languages */}
        <div className="card p-4 overflow-auto mt-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
            GitHub 实际使用语言
          </h3>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true`}
            alt="Top Languages"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
