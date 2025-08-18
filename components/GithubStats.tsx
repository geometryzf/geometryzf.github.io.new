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

export default function GithubStats() {
  const username = getGithubUsername(siteConfig.social.github) || 'yourusername'
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
        <div className="card p-4 overflow-auto mt-6">
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
