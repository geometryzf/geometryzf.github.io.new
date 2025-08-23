/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'github-readme-stats.vercel.app'],
    unoptimized: true,
  },
  // GitHub Pages静态导出配置
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig
