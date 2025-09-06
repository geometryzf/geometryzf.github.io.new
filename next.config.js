/** @type {import('next').NextConfig} */
const nextConfig = {
  // 根据环境变量决定是否静态导出
  ...(process.env.STATIC_EXPORT === 'true' && {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  }),
  
  // 通用配置
  images: {
    domains: ['avatars.githubusercontent.com', 'github-readme-stats.vercel.app'],
    ...(process.env.STATIC_EXPORT === 'true' && { unoptimized: true }),
  },
  
  // 环境变量
  env: {
    STATIC_EXPORT: process.env.STATIC_EXPORT || 'false',
  },
}

module.exports = nextConfig
