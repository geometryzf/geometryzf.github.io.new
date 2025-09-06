# 在线聊天室

一个基于 WebSocket 的实时聊天应用，支持群聊、私聊、文件传输等功能。

## ✨ 功能特性

- 💬 **实时聊天** - 基于 WebSocket 的实时通信
- 👥 **群聊功能** - 支持多人聊天室
- 💭 **私聊功能** - 一对一私密聊天
- 📁 **文件传输** - 支持图片、文档等文件分享
- 🎨 **表情包** - 丰富的表情包和 GIF 支持
- 📱 **响应式设计** - 完美适配各种设备
- 🔔 **消息提醒** - 新消息通知和提醒
- 👤 **用户管理** - 用户注册、登录、头像
- 🔒 **安全认证** - JWT 身份验证
- 📊 **在线状态** - 实时显示用户在线状态

## 🛠️ 技术栈

### 前端
- **框架**: React 18
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **状态管理**: Redux Toolkit
- **WebSocket**: Socket.io Client
- **UI 组件**: Ant Design

### 后端
- **框架**: Express.js
- **语言**: Node.js
- **数据库**: MongoDB
- **WebSocket**: Socket.io
- **认证**: JWT
- **文件存储**: Multer + Cloudinary

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
```

#### 后端配置 (.env)

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/chatroom
JWT_SECRET=your_jwt_secret_here
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
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
chat-room/
├── client/                  # 前端应用
│   ├── public/             # 静态资源
│   ├── src/
│   │   ├── components/     # React 组件
│   │   ├── pages/          # 页面组件
│   │   ├── store/          # Redux store
│   │   ├── services/       # API 服务
│   │   ├── hooks/          # 自定义 Hooks
│   │   ├── types/          # TypeScript 类型
│   │   └── utils/          # 工具函数
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
└── README.md
```

## 💬 功能详解

### 聊天功能

#### 群聊
- 创建和加入聊天室
- 实时消息同步
- 消息历史记录
- 在线用户列表

#### 私聊
- 一对一聊天
- 消息加密传输
- 离线消息存储
- 消息状态显示

#### 消息类型
- 文本消息
- 图片消息
- 文件消息
- 语音消息
- 表情包消息

### 用户系统

#### 用户管理
- 用户注册和登录
- 个人资料编辑
- 头像上传
- 在线状态显示

#### 好友系统
- 添加好友
- 好友列表
- 好友搜索
- 好友状态

### 文件传输

#### 支持格式
- 图片 (JPG, PNG, GIF)
- 文档 (PDF, DOC, TXT)
- 音频 (MP3, WAV)
- 视频 (MP4, AVI)

#### 传输功能
- 拖拽上传
- 进度显示
- 文件预览
- 下载管理

## 🎨 界面设计

### 聊天界面

- 消息气泡设计
- 时间戳显示
- 消息状态指示
- 滚动加载历史

### 用户界面

- 侧边栏用户列表
- 顶部导航栏
- 底部输入框
- 响应式布局

### 主题系统

- 明暗主题切换
- 自定义主题色
- 字体大小调节
- 界面布局调整

## 🔒 安全特性

### 身份验证

- JWT Token 认证
- 密码加密存储
- 会话管理
- 权限控制

### 数据安全

- 消息加密传输
- 文件安全存储
- SQL 注入防护
- XSS 攻击防护

### 隐私保护

- 端到端加密
- 消息自动删除
- 隐私设置
- 数据匿名化

## 📊 性能优化

### 前端优化

- 虚拟滚动
- 图片懒加载
- 代码分割
- 缓存策略

### 后端优化

- 数据库索引
- 连接池管理
- 缓存机制
- 负载均衡

## 🚀 部署

### 开发环境

```bash
# 使用 Docker Compose
docker-compose up -d

# 或分别启动
cd server && npm run dev
cd client && npm start
```

### 生产环境

```bash
# 构建镜像
docker build -t chatroom .

# 运行容器
docker run -p 3000:3000 -p 5000:5000 chatroom
```

### 云平台部署

- **Vercel** - 前端部署
- **Railway** - 后端部署
- **MongoDB Atlas** - 数据库
- **Cloudinary** - 文件存储

## 📈 监控和分析

### 性能监控

- 响应时间监控
- 错误率统计
- 用户行为分析
- 系统资源监控

### 日志管理

- 访问日志
- 错误日志
- 安全日志
- 性能日志

## 🔧 配置选项

### 聊天配置

```typescript
// client/src/config/chat.ts
export const CHAT_CONFIG = {
  maxMessageLength: 1000,
  maxFileSize: 10 * 1024 * 1024, // 10MB
  supportedFileTypes: ['image/*', 'application/pdf'],
  messageRetention: 30 * 24 * 60 * 60 * 1000, // 30天
  typingTimeout: 3000
}
```

### WebSocket 配置

```typescript
// server/src/config/socket.ts
export const SOCKET_CONFIG = {
  pingTimeout: 60000,
  pingInterval: 25000,
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true
  }
}
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 开发指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 创建 Pull Request

## 📄 许可证

个人 - 仅供个人使用

## 📞 联系方式

- 邮箱：zhengfeichangzhou@foxmail.com
- GitHub：https://github.com/geometryzf
