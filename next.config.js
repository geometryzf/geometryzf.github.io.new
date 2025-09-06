/** @type {import('next').NextConfig} */
const nextConfig = {
  // 支持静态导出，适配国内平台
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'github-readme-stats.vercel.app'],
    unoptimized: true,
  },
  // 静态导出环境变量
  env: {
    STATIC_EXPORT: 'true',
  },
  // 确保所有页面都能正确导出
}

module.exports = nextConfig
