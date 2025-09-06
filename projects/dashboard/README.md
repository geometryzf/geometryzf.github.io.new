# 数据可视化面板

一个企业级数据可视化解决方案，支持多种图表类型、实时数据更新、自定义主题等功能。

## ✨ 功能特性

- 📊 **多种图表** - 支持折线图、柱状图、饼图、散点图等
- 🔄 **实时数据** - WebSocket 实时数据更新
- 🎨 **自定义主题** - 支持明暗主题和自定义配色
- 📱 **响应式设计** - 完美适配各种设备
- 🔍 **数据筛选** - 多维度数据筛选和搜索
- 📈 **趋势分析** - 数据趋势分析和预测
- 🎯 **仪表盘** - 可拖拽的仪表盘布局
- 📤 **数据导出** - 支持多种格式数据导出
- 🔔 **告警系统** - 数据异常告警和通知
- 👥 **权限管理** - 基于角色的权限控制

## 🛠️ 技术栈

- **框架**: React 18
- **语言**: TypeScript
- **样式**: Ant Design + Tailwind CSS
- **图表**: D3.js + ECharts
- **状态管理**: Redux Toolkit
- **后端**: Node.js + Express
- **数据库**: MongoDB + Redis
- **实时通信**: Socket.io
- **部署**: Docker + Kubernetes

## 🚀 快速开始

### 安装依赖

```bash
# 安装前端依赖
cd client
npm install

# 安装后端依赖
cd server
npm install
```

### 环境配置

#### 前端配置 (.env)

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_SOCKET_URL=http://localhost:5000
REACT_APP_APP_NAME=数据可视化面板
```

#### 后端配置 (.env)

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/dashboard
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
```

### 启动开发环境

```bash
# 启动后端服务
cd server
npm run dev

# 启动前端应用
cd client
npm start
```

### 构建生产版本

```bash
# 构建前端
cd client
npm run build

# 构建后端
cd server
npm run build
```

## 📁 项目结构

```
dashboard/
├── client/                  # 前端应用
│   ├── public/             # 静态资源
│   ├── src/
│   │   ├── components/     # React 组件
│   │   ├── pages/          # 页面组件
│   │   ├── store/          # Redux store
│   │   ├── services/       # API 服务
│   │   ├── hooks/          # 自定义 Hooks
│   │   ├── types/          # TypeScript 类型
│   │   ├── utils/          # 工具函数
│   │   └── config/         # 配置文件
│   └── package.json
├── server/                  # 后端服务
│   ├── src/
│   │   ├── controllers/    # 控制器
│   │   ├── models/         # 数据模型
│   │   ├── routes/         # 路由
│   │   ├── middleware/     # 中间件
│   │   ├── services/       # 业务逻辑
│   │   ├── socket/         # WebSocket 处理
│   │   └── utils/          # 工具函数
│   └── package.json
├── docker-compose.yml       # Docker 配置
└── README.md
```

## 📊 图表类型

### 基础图表

- **折线图** - 趋势分析和时间序列数据
- **柱状图** - 分类数据对比
- **饼图** - 占比分析
- **散点图** - 相关性分析
- **面积图** - 累计数据展示

### 高级图表

- **热力图** - 密度分布分析
- **雷达图** - 多维度对比
- **树形图** - 层级数据展示
- **桑基图** - 流向分析
- **地图** - 地理数据可视化

### 交互功能

- 图表缩放和平移
- 数据点悬停显示
- 图例交互
- 数据筛选
- 时间范围选择

## 🎨 界面设计

### 仪表盘布局

- 可拖拽的网格布局
- 组件大小调整
- 布局保存和恢复
- 预设模板

### 主题系统

- 明暗主题切换
- 自定义主题色
- 图表配色方案
- 字体和间距设置

### 响应式设计

- 移动端适配
- 平板端优化
- 桌面端增强
- 多屏幕支持

## 🔧 配置选项

### 图表配置

```typescript
// client/src/config/charts.ts
export const CHART_CONFIG = {
  defaultTheme: 'light',
  animation: true,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '图表标题'
    }
  }
}
```

### 数据源配置

```typescript
// server/src/config/datasource.ts
export const DATASOURCE_CONFIG = {
  refreshInterval: 5000, // 5秒刷新
  maxDataPoints: 1000,
  retentionPeriod: 30 * 24 * 60 * 60 * 1000, // 30天
  batchSize: 100
}
```

## 📈 数据管理

### 数据源

- **数据库连接** - MySQL, PostgreSQL, MongoDB
- **API 接口** - RESTful API, GraphQL
- **文件导入** - CSV, Excel, JSON
- **实时流** - Kafka, RabbitMQ

### 数据处理

- 数据清洗和转换
- 聚合计算
- 时间序列处理
- 异常检测

### 数据存储

- 原始数据存储
- 聚合数据缓存
- 历史数据归档
- 数据备份

## 🔒 安全特性

### 身份认证

- JWT Token 认证
- OAuth 2.0 集成
- 多因素认证
- 单点登录

### 权限控制

- 基于角色的权限
- 数据级权限
- 功能级权限
- 审计日志

### 数据安全

- 数据加密传输
- 敏感数据脱敏
- 访问控制
- 数据备份

## 🚀 部署

### Docker 部署

```bash
# 构建镜像
docker-compose build

# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f
```

### Kubernetes 部署

```bash
# 应用配置
kubectl apply -f k8s/

# 查看状态
kubectl get pods

# 访问服务
kubectl port-forward svc/dashboard-frontend 3000:3000
```

### 云平台部署

- **AWS** - ECS + RDS + ElastiCache
- **Azure** - AKS + Cosmos DB + Redis Cache
- **GCP** - GKE + Cloud SQL + Memorystore

## 📊 监控和分析

### 性能监控

- 页面加载时间
- API 响应时间
- 数据库查询性能
- 内存和 CPU 使用率

### 用户行为分析

- 页面访问统计
- 功能使用情况
- 用户路径分析
- 转化率统计

### 系统监控

- 服务健康检查
- 错误率监控
- 资源使用监控
- 告警通知

## 🔧 开发指南

### 添加新图表

1. 创建图表组件
2. 注册图表类型
3. 配置数据映射
4. 添加交互功能

### 自定义主题

1. 定义主题变量
2. 创建主题文件
3. 应用主题样式
4. 测试主题效果

### API 开发

1. 定义数据模型
2. 创建控制器
3. 配置路由
4. 添加中间件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 开发流程

1. Fork 项目
2. 创建功能分支
3. 编写代码和测试
4. 提交 Pull Request

## 📄 许可证

个人 - 仅供个人使用

## 📞 联系方式

- 邮箱：zhengfeichangzhou@foxmail.com
- GitHub：https://github.com/geometryzf
