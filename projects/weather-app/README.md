# 天气应用

一个现代化的实时天气查询应用，支持多城市管理、天气预警、历史数据查看等功能。

## ✨ 功能特性

- 🌤️ **实时天气** - 获取当前天气状况
- 📍 **多城市管理** - 支持添加和管理多个城市
- 🔔 **天气预警** - 实时天气预警通知
- 📊 **历史数据** - 查看历史天气数据
- 📱 **PWA 支持** - 可安装为桌面应用
- 🎨 **主题切换** - 根据天气自动切换主题
- 📈 **数据可视化** - 使用 Chart.js 展示天气趋势
- 🔍 **搜索功能** - 快速搜索城市

## 🛠️ 技术栈

- **框架**: React 18
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **状态管理**: Zustand
- **图表**: Chart.js
- **API**: OpenWeather API
- **PWA**: Workbox
- **部署**: Vercel

## 🚀 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 环境配置

创建 `.env.local` 文件：

```env
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
REACT_APP_WEATHER_API_BASE_URL=https://api.openweathermap.org/data/2.5
```

### 开发环境

```bash
npm start
# 或
yarn start
```

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

## 📁 项目结构

```
weather-app/
├── public/                  # 静态资源
├── src/
│   ├── components/          # React 组件
│   ├── hooks/              # 自定义 Hooks
│   ├── services/           # API 服务
│   ├── stores/             # 状态管理
│   ├── types/              # TypeScript 类型
│   ├── utils/              # 工具函数
│   └── App.tsx             # 主应用组件
├── package.json
└── README.md
```

## 🌤️ 功能详解

### 天气信息展示

- 当前温度、湿度、风速
- 天气状况图标
- 体感温度
- 日出日落时间
- 能见度、气压等详细信息

### 多城市管理

- 添加/删除城市
- 城市列表管理
- 快速切换城市
- 城市搜索功能

### 天气预报

- 5天天气预报
- 每小时预报
- 天气趋势图表
- 降水概率

### 天气预警

- 实时预警信息
- 预警级别显示
- 预警详情说明
- 推送通知

## 🎨 界面设计

### 响应式布局

- 移动端优先设计
- 平板和桌面适配
- 横屏和竖屏支持

### 主题系统

- 根据天气自动切换主题
- 明暗主题支持
- 自定义主题色

### 动画效果

- 平滑的页面切换
- 天气图标动画
- 加载动画
- 微交互效果

## 📊 数据可视化

### 图表类型

- 温度趋势线图
- 湿度柱状图
- 风速雷达图
- 降水概率图

### 交互功能

- 图表缩放
- 数据点悬停
- 时间范围选择
- 数据导出

## 🔧 配置选项

### API 配置

```typescript
// src/config/api.ts
export const API_CONFIG = {
  baseUrl: process.env.REACT_APP_WEATHER_API_BASE_URL,
  apiKey: process.env.REACT_APP_OPENWEATHER_API_KEY,
  units: 'metric', // metric, imperial
  language: 'zh_cn'
}
```

### 主题配置

```typescript
// src/config/theme.ts
export const THEME_CONFIG = {
  light: {
    primary: '#3b82f6',
    secondary: '#64748b',
    background: '#ffffff',
    text: '#1f2937'
  },
  dark: {
    primary: '#60a5fa',
    secondary: '#94a3b8',
    background: '#1f2937',
    text: '#f9fafb'
  }
}
```

## 📱 PWA 功能

### 离线支持

- 缓存天气数据
- 离线查看历史数据
- 后台同步

### 安装提示

- 自动检测可安装性
- 安装引导
- 桌面快捷方式

### 推送通知

- 天气预警推送
- 定时天气提醒
- 自定义通知设置

## 🚀 部署

### Vercel 部署

1. 连接 GitHub 仓库
2. 配置环境变量
3. 自动部署

### 其他平台

- Netlify
- GitHub Pages
- Firebase Hosting

## 📈 性能优化

- 图片懒加载
- 代码分割
- 缓存策略
- 预加载关键资源

## 🔒 隐私保护

- 本地存储数据
- 不收集用户信息
- 安全的 API 调用
- 数据加密传输

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

个人 - 仅供个人使用

## 📞 联系方式

- 邮箱：zhengfeichangzhou@foxmail.com
- GitHub：https://github.com/geometryzf
