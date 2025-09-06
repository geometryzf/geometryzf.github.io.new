/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel部署配置
  images: {
    domains: ['avatars.githubusercontent.com', 'github-readme-stats.vercel.app'],
  },
  // 确保所有页面都能正确渲染
}

module.exports = nextConfig
