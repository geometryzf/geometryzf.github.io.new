/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除静态导出配置，支持Vercel动态部署
  images: {
    domains: ['avatars.githubusercontent.com', 'github-readme-stats.vercel.app'],
    unoptimized: true,
  },
  // 确保所有页面都能正确导出
}

module.exports = nextConfig
