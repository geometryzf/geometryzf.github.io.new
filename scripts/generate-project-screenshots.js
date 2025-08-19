/**
 * 项目截图生成脚本
 * 为每个项目生成专业的演示图片
 */

const fs = require('fs');
const path = require('path');

// 项目配置
const projects = [
  {
    name: 'path-planning',
    title: '智能路径规划算法',
    description: '基于动态规划和强化学习的智能路径规划系统',
    technologies: ['Python', 'PyTorch', 'NumPy', '强化学习', '动态规划'],
    features: ['多算法融合', '实时优化', '多目标优化', '可视化界面']
  },
  {
    name: 'mpc-system',
    title: '模型预测控制系统',
    description: '基于MPC算法的智能控制系统',
    technologies: ['Python', 'MATLAB', 'MPC', 'NumPy', 'SciPy'],
    features: ['模型预测控制', '多变量控制', '约束处理', '实时控制']
  },
  {
    name: 'pso-library',
    title: '粒子群优化算法库',
    description: '高性能的PSO算法实现',
    technologies: ['Python', 'C++', 'PSO', 'NumPy', 'OpenMP'],
    features: ['高性能实现', '多目标优化', '并行计算', '多种变体']
  },
  {
    name: 'task-manager',
    title: '任务管理应用',
    description: '现代化的任务管理工具',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: ['拖拽排序', '实时协作', '数据可视化', '移动适配']
  }
];

// 生成SVG内容
function generateProjectSVG(project) {
  const colors = {
    primary: '#3B82F6',
    secondary: '#10B981',
    accent: '#F59E0B',
    background: '#F8FAFC',
    text: '#1F2937'
  };

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${colors.background};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#E2E8F0;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="card-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFFFFF;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#F1F5F9;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
    </filter>
  </defs>
  
  <!-- 背景 -->
  <rect width="800" height="600" fill="url(#bg-gradient)"/>
  
  <!-- 标题区域 -->
  <rect x="50" y="50" width="700" height="80" rx="12" fill="url(#card-gradient)" filter="url(#shadow)"/>
  <text x="400" y="85" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="${colors.text}">${project.title}</text>
  <text x="400" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#6B7280">${project.description}</text>
  
  <!-- 技术栈 -->
  <rect x="50" y="150" width="340" height="200" rx="12" fill="url(#card-gradient)" filter="url(#shadow)"/>
  <text x="220" y="175" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${colors.text}">技术栈</text>
  
  ${project.technologies.map((tech, index) => {
    const x = 70 + (index % 2) * 150;
    const y = 200 + Math.floor(index / 2) * 30;
    return `<rect x="${x}" y="${y}" width="130" height="25" rx="6" fill="${colors.primary}" opacity="0.1"/>
            <text x="${x + 65}" y="${y + 17}" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="${colors.primary}" font-weight="500">${tech}</text>`;
  }).join('')}
  
  <!-- 功能特性 -->
  <rect x="410" y="150" width="340" height="200" rx="12" fill="url(#card-gradient)" filter="url(#shadow)"/>
  <text x="580" y="175" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${colors.text}">功能特性</text>
  
  ${project.features.map((feature, index) => {
    const y = 200 + index * 35;
    return `<circle cx="430" cy="${y + 8}" r="4" fill="${colors.secondary}"/>
            <text x="450" y="${y + 12}" font-family="Arial, sans-serif" font-size="14" fill="${colors.text}">${feature}</text>`;
  }).join('')}
  
  <!-- 项目链接 -->
  <rect x="50" y="370" width="700" height="60" rx="12" fill="url(#card-gradient)" filter="url(#shadow)"/>
  <text x="400" y="395" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="${colors.primary}">GitHub Repository</text>
  <text x="400" y="415" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#6B7280">github.com/geometryzf/${project.name}</text>
  
  <!-- 装饰元素 -->
  <circle cx="100" cy="100" r="20" fill="${colors.accent}" opacity="0.1"/>
  <circle cx="700" cy="120" r="15" fill="${colors.secondary}" opacity="0.1"/>
  <circle cx="150" cy="500" r="25" fill="${colors.primary}" opacity="0.1"/>
</svg>`;
}

// 生成所有项目的SVG
function generateAllScreenshots() {
  const outputDir = path.join(__dirname, '../public/images/projects');
  
  // 创建输出目录
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  projects.forEach(project => {
    const svgContent = generateProjectSVG(project);
    const outputPath = path.join(outputDir, `${project.name}-screenshot.svg`);
    
    fs.writeFileSync(outputPath, svgContent);
    console.log(`✅ 生成 ${project.name} 截图: ${outputPath}`);
  });
  
  console.log('\n🎉 所有项目截图生成完成！');
}

// 执行生成
generateAllScreenshots();
