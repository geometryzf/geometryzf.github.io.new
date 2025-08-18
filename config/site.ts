export const siteConfig = {
  // 基本信息
  name: '郑斐',
  title: '前端开发工程师',
  description: '专注于React、TypeScript、Next.js等现代前端技术，具备全栈开发能力。热爱开源项目，追求代码质量和用户体验的完美结合。擅长组件化开发、性能优化和团队协作。',
  
  // 联系信息
  contact: {
    email: 'zhengfei.dev@gmail.com', // 请替换为你的真实邮箱
    phone: '+86 138-0000-0000', // 请替换为你的真实电话
    location: '中国，北京', // 请替换为你的真实地址
  },
  
  // 社交媒体
  social: {
    github: 'https://github.com/geometryzf',
    linkedin: 'https://linkedin.com/in/zhengfei-dev', // 请替换为你的LinkedIn链接
    twitter: 'https://twitter.com/zhengfei_dev', // 请替换为你的Twitter链接
    blog: 'https://zhengfei.dev', // 请替换为你的博客地址
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
    story: '作为一名前端开发工程师，我专注于现代Web技术的应用和创新。从React生态系统到TypeScript类型安全，从Next.js全栈开发到性能优化，我致力于为用户创造流畅、高效的数字体验。在工作中，我注重代码质量和团队协作，相信技术的力量能够解决实际问题并创造价值。',
    features: [
      {
        title: '技术专长',
        description: '精通React、TypeScript、Next.js等现代前端技术栈，具备全栈开发能力。',
      },
      {
        title: '性能优化',
        description: '擅长前端性能优化、代码分割、懒加载等技术，提升用户体验。',
      },
      {
        title: '团队协作',
        description: '具备良好的沟通能力和团队协作精神，能够高效推进项目进展。',
      },
      {
        title: '持续学习',
        description: '保持对新技术的敏感度，持续学习并应用到实际项目中。',
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
