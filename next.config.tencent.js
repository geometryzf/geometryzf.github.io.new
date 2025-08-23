/** @type {import('next').NextConfig} */
const nextConfig = {
  // 腾讯云开发者平台配置
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'github-readme-stats.vercel.app'],
    unoptimized: true,
  },
  // 腾讯云特殊配置
  experimental: {
    // 禁用一些可能导致问题的功能
    appDir: false,
  },
  // 确保所有静态资源都能正确加载
  assetPrefix: '',
  // 禁用一些可能导致构建失败的功能
  swcMinify: true,
}

module.exports = nextConfig
