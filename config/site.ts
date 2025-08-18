export const siteConfig = {
  // 基本信息
  name: '你的名字',
  title: '前端开发者',
  description: '专注于创建美观、高效、用户友好的Web应用程序。热爱学习新技术，追求代码质量和用户体验的完美结合。',
  
  // 联系信息
  contact: {
    email: 'your.email@example.com',
    phone: '+86 138-0000-0000',
    location: '中国，北京',
  },
  
  // 社交媒体
  social: {
    github: 'https://github.com/geometryzf',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    blog: 'https://your-blog.vercel.app',
  },
  
  // 技能配置
  skills: {
    frontend: [
      { name: 'React', level: 90, color: '#61DAFB' },
      { name: 'TypeScript', level: 85, color: '#3178C6' },
      { name: 'JavaScript', level: 90, color: '#F7DF1E' },
      { name: 'Next.js', level: 80, color: '#000000' },
      { name: 'Tailwind CSS', level: 85, color: '#06B6D4' },
    ],
    backend: [
      { name: 'Node.js', level: 75, color: '#339933' },
      { name: 'Python', level: 70, color: '#3776AB' },
      { name: 'MongoDB', level: 70, color: '#47A248' },
      { name: 'PostgreSQL', level: 65, color: '#336791' },
    ],
    tools: [
      { name: 'Git', level: 85, color: '#F05032' },
      { name: 'Docker', level: 60, color: '#2496ED' },
      { name: 'Figma', level: 70, color: '#F24E1E' },
    ],
  },
  
  // 项目配置
  projects: [
    {
      title: '电商管理平台',
      description: '基于React + TypeScript + Node.js的全栈电商管理系统，包含商品管理、订单处理、用户管理等功能。',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/geometryzf/ecommerce-platform',
      demo: 'https://demo-ecommerce.vercel.app',
      featured: true,
      date: '2024',
      contributors: 3,
    },
    {
      title: '任务管理应用',
      description: '现代化的任务管理工具，支持拖拽排序、实时协作、数据可视化等功能。',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Framer Motion'],
      github: 'https://github.com/geometryzf/task-manager',
      demo: 'https://task-manager-demo.vercel.app',
      featured: true,
      date: '2024',
      contributors: 2,
    },
    {
      title: '个人博客系统',
      description: '使用Next.js构建的现代化博客系统，支持Markdown编辑、SEO优化、评论系统。',
      technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/geometryzf/blog-system',
      demo: 'https://my-blog.vercel.app',
      featured: false,
      date: '2023',
      contributors: 1,
    },
    {
      title: '天气应用',
      description: '实时天气查询应用，支持多城市管理、天气预警、历史数据查看。',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'PWA'],
      github: 'https://github.com/geometryzf/weather-app',
      demo: 'https://weather-app-demo.vercel.app',
      featured: false,
      date: '2023',
      contributors: 1,
    },
    {
      title: '在线聊天室',
      description: '基于WebSocket的实时聊天应用，支持群聊、私聊、文件传输等功能。',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      github: 'https://github.com/geometryzf/chat-room',
      demo: 'https://chat-room-demo.vercel.app',
      featured: false,
      date: '2023',
      contributors: 2,
    },
    {
      title: '数据可视化面板',
      description: '企业级数据可视化解决方案，支持多种图表类型、实时数据更新、自定义主题。',
      technologies: ['React', 'D3.js', 'TypeScript', 'Ant Design'],
      github: 'https://github.com/geometryzf/dashboard',
      demo: 'https://dashboard-demo.vercel.app',
      featured: false,
      date: '2023',
      contributors: 4,
    },
  ],
  
  // 关于我
  about: {
    story: '从大学时期开始接触编程，我就被Web开发的无限可能性所吸引。经过多年的学习和实践，我逐渐形成了自己的开发理念：技术服务于用户，代码服务于团队。我相信好的代码不仅要实现功能，更要易于理解和维护。在每一个项目中，我都致力于创造既美观又实用的解决方案。',
    features: [
      {
        title: '代码质量',
        description: '注重代码可读性和可维护性，遵循最佳实践和设计模式。',
      },
      {
        title: '用户体验',
        description: '以用户为中心的设计理念，创造直观易用的界面和流畅的交互。',
      },
      {
        title: '创新思维',
        description: '持续关注新技术趋势，善于将创新想法转化为实际解决方案。',
      },
      {
        title: '目标导向',
        description: '明确项目目标，制定清晰的开发计划，确保按时交付高质量产品。',
      },
    ],
  },
  
  // 主题配置
  theme: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
  },
  
  // SEO配置
  seo: {
    title: 'geometryzf - 前端开发者',
    description: '个人技术博客和项目展示，专注于React、TypeScript、Next.js等前端技术',
    keywords: ['前端开发', 'React', 'TypeScript', 'Next.js', '全栈开发'],
    url: 'https://geometryzf.github.io',
    image: 'https://geometryzf.github.io/og-image.jpg',
  },
}

export type SiteConfig = typeof siteConfig
