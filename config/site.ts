export const siteConfig = {
  // 基本信息
  name: '郑斐',
  title: '算法工程师',
  description: '专注于算法研究与优化，擅长动态规划(DP)、模型预测控制(MPC)、粒子群优化(PSO)、强化学习等算法。具备深厚的前端开发经验，同时精通Pascal、Fortran等经典编程语言和LaTeX学术写作，致力于将算法理论与实际应用相结合，解决复杂的技术挑战。拥有多个开源项目，包括智能路径规划、MPC控制系统、PSO优化算法库等。',
  
  // 联系信息
  contact: {
    email: 'zhengfeichangzhou@foxmail.com', // 主要邮箱
    phone: '+86 13775076103',
    location: '中国，上海', // 现居地
    locationDetail: '常住地：中国，江苏', // 常住地
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
    algorithms: [
      { name: '动态规划(DP)', level: 87, color: '#FF6B6B' },
      { name: '模型预测控制(MPC)', level: 82, color: '#4ECDC4' },
      { name: '粒子群优化(PSO)', level: 79, color: '#45B7D1' },
      { name: '强化学习', level: 76, color: '#96CEB4' },
      { name: '机器学习', level: 71, color: '#FFEAA7' },
      { name: '深度学习', level: 66, color: '#DDA0DD' },
    ],
    frontend: [
      { name: 'React', level: 82, color: '#61DAFB' },
      { name: 'TypeScript', level: 76, color: '#3178C6' },
      { name: 'JavaScript', level: 82, color: '#F7DF1E' },
      { name: 'Next.js', level: 71, color: '#000000' },
      { name: 'Tailwind CSS', level: 76, color: '#06B6D4' },
    ],
    backend: [
      { name: 'Python', level: 82, color: '#3776AB' },
      { name: 'Node.js', level: 66, color: '#339933' },
      { name: 'C++', level: 71, color: '#00599C' },
      { name: 'MATLAB', level: 76, color: '#0076A8' },
      { name: 'Pascal', level: 88, color: '#1976D2' },
      { name: 'Fortran', level: 61, color: '#734F96' },
    ],
    tools: [
      { name: 'Git', level: 76, color: '#F05032' },
      { name: 'Docker', level: 55, color: '#2496ED' },
      { name: 'PyTorch', level: 71, color: '#EE4C2C' },
      { name: 'TensorFlow', level: 66, color: '#FF6F00' },
      { name: 'NumPy', level: 82, color: '#4DABCF' },
      { name: 'Pandas', level: 76, color: '#130654' },
      { name: 'LaTeX', level: 76, color: '#008080' },
    ],
  },
  
  // 项目配置
  projects: [
    {
      title: '智能路径规划算法',
      description: '基于动态规划和强化学习的智能路径规划系统，支持多目标优化和实时路径调整。集成A*、Dijkstra、RRT等多种算法，提供完整的路径规划解决方案。',
      technologies: ['Python', 'PyTorch', 'NumPy', '强化学习', '动态规划', 'A*算法'],
      github: 'https://github.com/geometryzf/path-planning',
      demo: 'https://github.com/geometryzf/path-planning',
      featured: true,
      date: '2024',
      contributors: 1,
    },
    {
      title: '模型预测控制系统',
      description: '基于MPC算法的智能控制系统，用于工业过程优化和预测控制。支持多变量控制、约束处理、实时控制等功能。',
      technologies: ['Python', 'MATLAB', 'MPC', 'NumPy', 'SciPy', 'CVXPY'],
      github: 'https://github.com/geometryzf/mpc-system',
      demo: 'https://github.com/geometryzf/mpc-system',
      featured: true,
      date: '2024',
      contributors: 1,
    },
    {
      title: '粒子群优化算法库',
      description: '高性能的PSO算法实现，支持多目标优化和并行计算。包含标准PSO、自适应PSO、混合PSO等多种变体。',
      technologies: ['Python', 'C++', 'PSO', 'NumPy', 'OpenMP', '多目标优化'],
      github: 'https://github.com/geometryzf/pso-library',
      demo: 'https://github.com/geometryzf/pso-library',
      featured: true,
      date: '2024',
      contributors: 1,
    },
    {
      title: '任务管理应用',
      description: '现代化的任务管理工具，支持拖拽排序、实时协作、数据可视化等功能。基于Next.js 14和TypeScript构建。',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React DnD'],
      github: 'https://github.com/geometryzf/task-manager',
      demo: 'https://github.com/geometryzf/task-manager',
      featured: true,
      date: '2024',
      contributors: 1,
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
    story: '作为一名算法工程师，我专注于算法研究与优化，在动态规划、模型预测控制、粒子群优化、强化学习等领域有深入研究。我致力于将复杂的算法理论转化为实际可用的解决方案，解决现实世界中的技术挑战。我已经成功开发了多个开源项目，包括智能路径规划算法、MPC控制系统、PSO优化算法库等，这些项目展示了我在算法实现和工程化方面的能力。同时，我具备丰富的前端开发经验，能够将算法成果以直观的方式展示给用户。我还精通Pascal、Fortran等经典编程语言，这些语言在科学计算和数值分析中具有独特优势。此外，我熟练使用LaTeX进行学术写作，能够将研究成果以专业的方式呈现。我相信算法与工程的结合能够创造出更大的价值。',
          features: [
        {
          title: '算法专长',
          description: '精通动态规划、MPC、PSO、强化学习等核心算法，具备深厚的理论基础和实践经验。',
        },
        {
          title: '开源项目',
          description: '成功开发多个开源项目，包括智能路径规划、MPC控制系统、PSO优化算法库等。',
        },
        {
          title: '经典编程',
          description: '精通Pascal、Fortran等经典编程语言，在科学计算和数值分析方面具有独特优势。',
        },
        {
          title: '工程实现',
          description: '擅长将算法理论转化为高效的程序实现，注重代码质量和性能优化。',
        },
        {
          title: '学术写作',
          description: '熟练使用LaTeX进行学术写作，能够将研究成果以专业的方式呈现。',
        },
        {
          title: '跨领域应用',
          description: '能够将算法技术应用到不同领域，解决复杂的技术问题。',
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
    title: 'geometryzf - 算法工程师',
    description: '算法工程师个人主页，专注于动态规划、MPC、PSO、强化学习等算法研究与优化。开源项目包括智能路径规划、MPC控制系统、PSO优化算法库、任务管理应用等。',
    keywords: ['算法工程师', '动态规划', 'MPC', 'PSO', '强化学习', '机器学习', '深度学习', 'Pascal', 'Fortran', 'LaTeX', '科学计算', '智能路径规划', '模型预测控制', '粒子群优化', '任务管理', '开源项目'],
    url: 'https://geometryzf.github.io',
    image: 'https://geometryzf.github.io/og-image.jpg',
  },
}

export type SiteConfig = typeof siteConfig
