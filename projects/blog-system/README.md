# 个人博客系统

一个基于 Next.js 构建的现代化博客系统，支持 Markdown 编辑、SEO 优化、评论系统等功能。

## ✨ 功能特性

- 📝 **Markdown 支持** - 使用 MDX 支持富文本编辑
- 🔍 **SEO 优化** - 自动生成 meta 标签和结构化数据
- 💬 **评论系统** - 集成 Disqus 评论功能
- 🎨 **主题切换** - 支持明暗主题切换
- 📱 **响应式设计** - 完美适配各种设备
- ⚡ **性能优化** - 静态生成和增量静态再生
- 🔍 **搜索功能** - 全文搜索和标签筛选
- 📊 **访问统计** - 集成 Google Analytics

## 🛠️ 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **内容**: MDX
- **部署**: Vercel
- **数据库**: 文件系统 (可选 MongoDB)
- **评论**: Disqus
- **分析**: Google Analytics

## 🚀 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发环境

```bash
npm run dev
# 或
yarn dev
```

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

## 📁 项目结构

```
blog-system/
├── src/
│   ├── app/                 # App Router
│   ├── components/          # React 组件
│   ├── content/             # MDX 文章内容
│   ├── lib/                 # 工具函数
│   └── types/               # TypeScript 类型
├── public/                  # 静态资源
├── contentlayer.config.ts   # Contentlayer 配置
└── package.json
```

## 📝 文章管理

### 创建新文章

1. 在 `src/content/posts/` 目录下创建 `.mdx` 文件
2. 添加 frontmatter 信息：

```markdown
---
title: "文章标题"
description: "文章描述"
date: "2024-01-01"
tags: ["标签1", "标签2"]
published: true
---

文章内容...
```

### 文章格式

- 支持标准 Markdown 语法
- 支持 MDX 组件
- 支持代码高亮
- 支持数学公式 (KaTeX)

## 🎨 自定义主题

### 颜色配置

在 `tailwind.config.js` 中自定义颜色：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          // ... 其他色阶
        }
      }
    }
  }
}
```

### 组件样式

所有组件都使用 Tailwind CSS 类名，易于自定义。

## 📊 SEO 优化

### Meta 标签

自动生成以下 meta 标签：
- 标题和描述
- Open Graph 标签
- Twitter Card 标签
- 结构化数据

### 站点地图

自动生成 `sitemap.xml` 和 `robots.txt`。

## 🔧 配置选项

### 环境变量

创建 `.env.local` 文件：

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
DISQUS_SHORTNAME=your-disqus-shortname
```

### 站点配置

在 `src/config/site.ts` 中配置站点信息：

```typescript
export const siteConfig = {
  name: "你的博客名称",
  description: "博客描述",
  url: "https://your-domain.com",
  // ... 其他配置
}
```

## 🚀 部署

### Vercel 部署

1. 连接 GitHub 仓库
2. 配置环境变量
3. 自动部署

### 其他平台

支持部署到任何支持 Node.js 的平台：
- Netlify
- Railway
- DigitalOcean App Platform

## 📈 性能优化

- 图片优化和懒加载
- 代码分割
- 静态生成
- CDN 缓存
- 预加载关键资源

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

个人 - 仅供个人使用

## 📞 联系方式

- 邮箱：zhengfeichangzhou@foxmail.com
- GitHub：https://github.com/geometryzf
