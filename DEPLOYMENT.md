# 部署指南

## 🚀 快速部署到Vercel (推荐)

### 1. 准备GitHub仓库
```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: GitHub个人主页"

# 添加远程仓库 (替换为你的GitHub用户名)
git remote add origin https://github.com/yourusername/github-profile.git

# 推送到GitHub
git push -u origin main
```

### 2. Vercel部署
1. 访问 [Vercel](https://vercel.com) 并注册/登录
2. 点击 "New Project"
3. 导入你的GitHub仓库
4. 保持默认设置，点击 "Deploy"
5. 等待部署完成，获得你的网站链接

### 3. 自定义域名 (可选)
1. 在Vercel项目设置中添加自定义域名
2. 配置DNS记录指向Vercel
3. 等待DNS生效

## 🌐 GitHub Pages部署

### 1. 构建项目
```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 导出静态文件
npm run export
```

### 2. 配置GitHub Pages
1. 在GitHub仓库设置中启用Pages
2. 选择部署分支 (通常是 `gh-pages`)
3. 设置根目录为 `/docs` 或 `/out`

### 3. 自动部署脚本
创建 `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build project
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 🔧 环境变量配置

### 1. 创建环境变量文件
```bash
# 创建 .env.local 文件
touch .env.local
```

### 2. 添加环境变量
```env
# 网站配置
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=我的GitHub主页

# 社交媒体链接
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername

# 联系信息
NEXT_PUBLIC_EMAIL=your.email@example.com
NEXT_PUBLIC_PHONE=+86 138-0000-0000
NEXT_PUBLIC_LOCATION=中国，北京
```

## 📱 PWA配置 (可选)

### 1. 安装PWA依赖
```bash
npm install next-pwa
```

### 2. 更新next.config.js
```javascript
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  // 其他配置...
})
```

### 3. 创建manifest.json
在 `public` 目录下创建 `manifest.json`:
```json
{
  "name": "我的GitHub主页",
  "short_name": "个人主页",
  "description": "个人技术博客和项目展示",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## 🔍 SEO优化

### 1. 更新metadata
在 `app/layout.tsx` 中更新SEO信息：
```typescript
export const metadata: Metadata = {
  title: '你的名字 - 前端开发者',
  description: '个人技术博客和项目展示，专注于React、TypeScript、Next.js等前端技术',
  keywords: ['前端开发', 'React', 'TypeScript', 'Next.js', '全栈开发', '你的名字'],
  authors: [{ name: '你的名字' }],
  openGraph: {
    title: '你的名字 - 前端开发者',
    description: '个人技术博客和项目展示',
    type: 'website',
    url: 'https://your-domain.com',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '你的名字 - 前端开发者',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '你的名字 - 前端开发者',
    description: '个人技术博客和项目展示',
    images: ['https://your-domain.com/og-image.jpg'],
  },
}
```

### 2. 创建sitemap.xml
在 `app` 目录下创建 `sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://your-domain.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://your-domain.com/#about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://your-domain.com/#projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
```

## 📊 性能监控

### 1. 添加Google Analytics
在 `app/layout.tsx` 中添加：
```typescript
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
```

### 2. 添加Vercel Analytics
```bash
npm install @vercel/analytics
```

在 `app/layout.tsx` 中添加：
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🔒 安全配置

### 1. 添加安全头
在 `next.config.js` 中配置：
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

### 2. 内容安全策略
创建 `public/robots.txt`:
```txt
User-agent: *
Allow: /

Sitemap: https://your-domain.com/sitemap.xml
```

## 🎯 部署检查清单

- [ ] 更新所有个人信息和链接
- [ ] 添加项目截图和描述
- [ ] 配置环境变量
- [ ] 测试响应式设计
- [ ] 检查SEO设置
- [ ] 验证表单功能
- [ ] 测试深色模式
- [ ] 检查加载性能
- [ ] 配置域名和SSL
- [ ] 设置监控和分析

## 🆘 常见问题

### 1. 构建失败
- 检查TypeScript错误
- 确保所有依赖已安装
- 验证环境变量配置

### 2. 样式问题
- 清除浏览器缓存
- 检查Tailwind CSS配置
- 验证CSS类名

### 3. 部署问题
- 检查GitHub Actions配置
- 验证Vercel项目设置
- 确认域名DNS配置

## 📞 技术支持

如果遇到部署问题，可以：
1. 查看项目文档
2. 提交GitHub Issue
3. 联系技术支持

---

祝您部署顺利！🎉
