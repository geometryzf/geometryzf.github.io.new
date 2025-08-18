# 我的GitHub个人主页

一个现代化的个人主页，展示我的技能、项目和联系方式。

## ✨ 特性

- 🎨 **现代化设计** - 使用Tailwind CSS构建的响应式设计
- 🌙 **深色模式** - 支持浅色/深色主题切换
- 📱 **移动端友好** - 完全响应式设计，适配各种设备
- ⚡ **性能优化** - 基于Next.js 14构建，支持SSR和静态生成
- 🎭 **流畅动画** - 使用Framer Motion实现的平滑动画效果
- 🔍 **SEO优化** - 内置SEO优化和Open Graph标签

## 🚀 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React + React Icons
- **部署**: Vercel (推荐)

## 📦 安装和运行

1. **克隆项目**
   ```bash
   git clone https://github.com/yourusername/github-profile.git
   cd github-profile
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或
   yarn install
   # 或
   pnpm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   # 或
   yarn dev
   # 或
   pnpm dev
   ```

4. **打开浏览器**
   访问 [http://localhost:3000](http://localhost:3000)

## 🛠️ 自定义配置

### 1. 个人信息
编辑以下文件中的个人信息：
- `app/layout.tsx` - 网站标题和描述
- `components/Hero.tsx` - 个人介绍和头像
- `components/About.tsx` - 详细个人介绍
- `components/Contact.tsx` - 联系信息

### 2. 技能展示
在 `components/Skills.tsx` 中修改技能列表：
```typescript
const skillCategories = [
  {
    title: '前端技术',
    skills: [
      { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
      // 添加更多技能...
    ]
  }
]
```

### 3. 项目展示
在 `components/Projects.tsx` 中添加你的项目：
```typescript
const projects = [
  {
    title: '项目名称',
    description: '项目描述',
    technologies: ['React', 'TypeScript'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://demo.vercel.app',
    featured: true,
    date: '2024',
    contributors: 1
  }
]
```

### 4. 主题颜色
在 `tailwind.config.js` 中自定义主题颜色：
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // 修改为你的品牌色...
  }
}
```

## 📁 项目结构

```
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/            # React组件
│   ├── Header.tsx         # 导航栏
│   ├── Hero.tsx           # 英雄区域
│   ├── About.tsx          # 关于我
│   ├── Skills.tsx         # 技能展示
│   ├── Projects.tsx       # 项目展示
│   ├── Contact.tsx        # 联系表单
│   ├── Footer.tsx         # 页脚
│   └── ThemeToggle.tsx    # 主题切换
├── public/                # 静态资源
├── tailwind.config.js     # Tailwind配置
├── next.config.js         # Next.js配置
└── package.json           # 项目依赖
```

## 🚀 部署

### Vercel部署 (推荐)
1. 将代码推送到GitHub
2. 在[Vercel](https://vercel.com)中导入项目
3. 自动部署完成

### GitHub Pages部署
1. 构建项目：`npm run build`
2. 导出静态文件：`npm run export`
3. 推送到GitHub Pages分支

## 📝 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📞 联系

- 邮箱：your.email@example.com
- GitHub：[@yourusername](https://github.com/yourusername)
- LinkedIn：[yourusername](https://linkedin.com/in/yourusername)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
