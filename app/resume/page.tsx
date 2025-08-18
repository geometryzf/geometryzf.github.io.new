import ResumeDownload from '@/components/ResumeDownload'
import { siteConfig } from '@/config/site'

export default function ResumePage() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-white dark:bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">个人简历</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {siteConfig.name} - {siteConfig.title}
          </p>
        </div>

        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">基本信息</h2>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">姓名：</span>
                  <span className="text-gray-900 dark:text-gray-100">{siteConfig.name}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">职位：</span>
                  <span className="text-gray-900 dark:text-gray-100">{siteConfig.title}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">邮箱：</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">电话：</span>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">地址：</span>
                  <span className="text-gray-900 dark:text-gray-100">{siteConfig.contact.location}</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">技能专长</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">前端技术</h3>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.skills.frontend.map((skill) => (
                      <span key={skill.name} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">后端技术</h3>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.skills.backend.map((skill) => (
                      <span key={skill.name} className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm rounded-full">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">开发工具</h3>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.skills.tools.map((skill) => (
                      <span key={skill.name} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">项目经验</h2>
          <div className="space-y-6">
            {siteConfig.projects.filter(p => p.featured).map((project, index) => (
              <div key={project.title} className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">
                    查看源码
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">
                    在线演示
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8">
          <ResumeDownload />
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mt-8">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                隐私保护说明
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                为了保护个人信息安全，简历采用在线查看模式，具有以下保护措施：
              </p>
              <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>禁用下载功能，防止文件被保存到本地</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>禁用右键菜单和快捷键，防止截图和复制</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>添加水印保护，防止恶意使用</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>如需完整版本或合作机会，请通过联系方式与我联系</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
