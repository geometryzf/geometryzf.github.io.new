# 🇨🇳 中国本土免费部署指南

## 🎯 推荐方案

### 方案1：腾讯云开发者平台（最推荐）
- **优点**：完全免费、国内访问极快、支持Next.js
- **地址**：[cloud.tencent.com/developer](https://cloud.tencent.com/developer)
- **部署时间**：5-10分钟

### 方案2：Gitee Pages（备选推荐）
- **优点**：完全免费、类似GitHub Pages、国内访问快
- **地址**：[gitee.com](https://gitee.com)
- **部署时间**：10-15分钟

### 方案3：华为云CodeArts
- **优点**：免费额度充足、CDN加速
- **地址**：[devcloud.huawei.com](https://devcloud.huawei.com)
- **部署时间**：15-20分钟

## 🚀 腾讯云开发者平台部署步骤

### 1. 注册登录
1. 访问 [cloud.tencent.com/developer](https://cloud.tencent.com/developer)
2. 点击"立即体验"
3. 使用微信或QQ账号登录

### 2. 创建项目
1. 点击"新建项目"
2. 选择"云开发"
3. 选择"静态网站托管"
4. 输入项目名称：`personal-portfolio`

### 3. 连接GitHub
1. 选择"从GitHub导入"
2. 授权访问GitHub
3. 选择仓库：`geometryzf/-personal-portfolio`
4. 选择分支：`main`

### 4. 配置构建
1. **构建命令**：`npm run build`
2. **输出目录**：`.next`
3. **Node.js版本**：18.x

### 5. 部署
1. 点击"立即部署"
2. 等待构建完成（约5-10分钟）
3. 获得访问地址

## 🚀 Gitee Pages部署步骤

### 1. 注册Gitee
1. 访问 [gitee.com](https://gitee.com)
2. 注册账号并登录

### 2. 导入GitHub仓库
1. 点击"新建仓库"
2. 选择"从GitHub/GitLab导入"
3. 输入GitHub仓库地址：`https://github.com/geometryzf/-personal-portfolio.git`
4. 仓库名称：`personal-portfolio`
5. 点击"创建"

### 3. 启用Gitee Pages
1. 进入仓库设置
2. 选择"Gitee Pages"
3. 选择部署分支：`main`
4. 点击"启动"

### 4. 访问网站
- 获得访问地址：`https://your-username.gitee.io/personal-portfolio`

## ⚠️ 注意事项

### 静态导出配置
由于国内平台主要支持静态网站，需要修改配置：

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}
```

### 功能限制
- 管理员后台功能可能受限
- API路由无法使用
- 部分动态功能需要调整

## 📞 技术支持

### 常见问题
1. **构建失败**：检查Node.js版本和依赖
2. **访问空白**：检查静态文件路径
3. **样式丢失**：确保CSS文件正确加载

### 联系方式
- 邮箱：zhengfeichangzhou@foxmail.com
- GitHub：@geometryzf

## 🎉 部署完成

部署成功后，您将获得：
- ✅ 国内访问极快的个人主页
- ✅ 无需VPN即可访问
- ✅ 完全免费的托管服务
- ✅ 自动更新部署

建议优先尝试腾讯云开发者平台，如果遇到问题再尝试Gitee Pages。
