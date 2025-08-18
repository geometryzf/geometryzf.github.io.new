# 🎨 自定义指南

## 🚀 快速开始

### 1. 修改基本信息
编辑 `config/site.ts` 文件，更新以下信息：

```typescript
export const siteConfig = {
  // 修改你的基本信息
  name: '你的真实姓名',
  title: '你的职业头衔',
  description: '你的个人描述',
  
  // 更新联系信息
  contact: {
    email: 'your.real.email@example.com',
    phone: '+86 你的真实电话',
    location: '你的城市，省份',
  },
  
  // 更新社交媒体链接
  social: {
    github: 'https://github.com/你的GitHub用户名',
    linkedin: 'https://linkedin.com/in/你的LinkedIn用户名',
    twitter: 'https://twitter.com/你的Twitter用户名',
    blog: 'https://你的博客地址.vercel.app',
  },
}
```

### 2. 更新技能列表
在 `config/site.ts` 中修改技能配置：

```typescript
skills: {
  frontend: [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'Vue.js', level: 85, color: '#4FC08D' }, // 添加你的技能
    // 更多技能...
  ],
  backend: [
    { name: 'Node.js', level: 75, color: '#339933' },
    { name: 'Express', level: 80, color: '#000000' }, // 添加你的技能
    // 更多技能...
  ],
  tools: [
    { name: 'Git', level: 85, color: '#F05032' },
    { name: 'VS Code', level: 90, color: '#007ACC' }, // 添加你的技能
    // 更多技能...
  ],
}
```

### 3. 添加你的项目
在 `config/site.ts` 中添加你的真实项目：

```typescript
projects: [
  {
    title: '你的项目名称',
    description: '项目详细描述',
    technologies: ['React', 'TypeScript', 'Node.js'],
    github: 'https://github.com/你的用户名/项目名',
    demo: 'https://你的项目演示地址.com',
    featured: true, // 设为true表示精选项目
    date: '2024',
    contributors: 1,
  },
  // 更多项目...
]
```

## 🎨 主题定制

### 1. 修改主色调
在 `config/site.ts` 中更新主题颜色：

```typescript
theme: {
  primary: {
    50: '#f0f9ff',   // 浅蓝色
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // 主色调
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
}
```

### 2. 自定义CSS变量
在 `app/globals.css` 中添加自定义样式：

```css
@layer components {
  .custom-gradient {
    @apply bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent;
  }
  
  .custom-card {
    @apply bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700;
  }
}
```

## 📝 内容定制

### 1. 更新个人故事
在 `config/site.ts` 中修改关于我的内容：

```typescript
about: {
  story: '你的真实个人故事，包括学习经历、工作经历、技术理念等...',
  features: [
    {
      title: '你的特点1',
      description: '详细描述你的这个特点',
    },
    // 更多特点...
  ],
}
```

### 2. 添加头像
1. 将你的头像图片放入 `public` 目录
2. 在 `components/Hero.tsx` 中更新头像：

```typescript
// 替换默认头像
<div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
  <img 
    src="/your-avatar.jpg" 
    alt="你的名字" 
    className="w-full h-full object-cover"
  />
</div>
```

## 🔧 功能定制

### 1. 添加新的页面
创建新的页面组件：

```typescript
// app/blog/page.tsx
export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">我的博客</h1>
      {/* 博客内容 */}
    </div>
  )
}
```

### 2. 添加新的组件
创建可复用的组件：

```typescript
// components/BlogCard.tsx
interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
}

export default function BlogCard({ title, excerpt, date, slug }: BlogCardProps) {
  return (
    <div className="card p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{date}</span>
        <a href={`/blog/${slug}`} className="btn-primary">阅读更多</a>
      </div>
    </div>
  )
}
```

### 3. 添加动画效果
使用Framer Motion添加动画：

```typescript
import { motion } from 'framer-motion'

export default function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card p-6"
    >
      {/* 组件内容 */}
    </motion.div>
  )
}
```

## 📱 响应式设计

### 1. 移动端优化
确保所有组件在移动端显示正常：

```typescript
// 使用Tailwind的响应式类
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 在不同屏幕尺寸下显示不同列数 */}
</div>
```

### 2. 触摸友好
为移动端添加触摸友好的交互：

```css
@layer utilities {
  .touch-friendly {
    @apply min-h-[44px] min-w-[44px]; /* 确保触摸目标足够大 */
  }
}
```

## 🔍 SEO优化

### 1. 更新元数据
在 `app/layout.tsx` 中更新SEO信息：

```typescript
export const metadata: Metadata = {
  title: '你的名字 - 你的职业',
  description: '你的个人描述，包含关键词',
  keywords: ['你的技能1', '你的技能2', '你的技能3'],
  authors: [{ name: '你的名字' }],
  openGraph: {
    title: '你的名字 - 你的职业',
    description: '你的个人描述',
    type: 'website',
    url: 'https://你的域名.com',
  },
}
```

### 2. 添加结构化数据
在 `app/layout.tsx` 中添加JSON-LD：

```typescript
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: '你的名字',
  jobTitle: '你的职业',
  url: 'https://你的域名.com',
  sameAs: [
    'https://github.com/你的用户名',
    'https://linkedin.com/in/你的用户名',
  ],
}
```

## 🎯 性能优化

### 1. 图片优化
使用Next.js的Image组件：

```typescript
import Image from 'next/image'

<Image
  src="/your-image.jpg"
  alt="描述"
  width={400}
  height={300}
  className="rounded-lg"
  priority // 对于首屏图片
/>
```

### 2. 代码分割
使用动态导入：

```typescript
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>加载中...</div>,
})
```

## 🧪 测试

### 1. 本地测试
```bash
# 启动开发服务器
npm run dev

# 构建测试
npm run build

# 类型检查
npm run type-check
```

### 2. 浏览器测试
- 测试所有页面在不同浏览器中的显示
- 检查响应式设计
- 验证所有链接和功能
- 测试深色模式切换

## 📦 部署前检查

### 1. 内容检查清单
- [ ] 更新所有个人信息
- [ ] 添加真实项目
- [ ] 更新技能列表
- [ ] 添加头像和图片
- [ ] 检查所有链接
- [ ] 验证联系表单

### 2. 技术检查清单
- [ ] 构建成功
- [ ] 类型检查通过
- [ ] 响应式设计正常
- [ ] 深色模式正常
- [ ] 所有动画流畅
- [ ] SEO设置正确

## 🎨 设计建议

### 1. 保持一致性
- 使用统一的颜色方案
- 保持字体和间距一致
- 统一按钮和卡片样式

### 2. 突出重点
- 使用对比色突出重要信息
- 合理使用动画引导注意力
- 保持页面层次清晰

### 3. 用户体验
- 确保加载速度快
- 提供清晰的导航
- 优化移动端体验

## 🆘 常见问题

### 1. 样式不生效
- 检查Tailwind CSS配置
- 清除浏览器缓存
- 确认CSS类名正确

### 2. 图片不显示
- 确认图片路径正确
- 检查图片是否在public目录
- 验证图片格式支持

### 3. 链接不工作
- 检查URL是否正确
- 确认外部链接可访问
- 验证锚点链接存在

---

🎉 完成自定义后，你的个人主页将完美展示你的技能和项目！
