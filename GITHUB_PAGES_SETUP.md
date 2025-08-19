# GitHub Pages 设置指南

## 🚀 自动部署设置

### 1. 启用 GitHub Pages

1. 访问您的仓库：https://github.com/geometryzf/Intelligent-path-planning-algorithm
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分，选择 **GitHub Actions**
5. 点击 **Save**

### 2. 配置仓库设置

确保仓库设置中启用了以下功能：
- ✅ **Issues** - 用于项目讨论
- ✅ **Wiki** - 用于项目文档
- ✅ **Discussions** - 用于社区交流

### 3. 自定义域名（可选）

如果您有自己的域名，可以设置自定义域名：
1. 在 **Pages** 设置中添加自定义域名
2. 在域名提供商处添加CNAME记录
3. 在仓库根目录创建 `CNAME` 文件

## 📋 部署状态检查

### 检查 Actions 状态
1. 访问 **Actions** 标签
2. 查看最新的部署工作流
3. 确保所有步骤都成功完成

### 访问您的网站
部署成功后，您的网站将在以下地址可用：
- **GitHub Pages**: https://geometryzf.github.io/Intelligent-path-planning-algorithm/
- **自定义域名**（如果设置）: https://your-domain.com

## 🔧 故障排除

### 常见问题

1. **构建失败**
   - 检查 Node.js 版本兼容性
   - 确保所有依赖都正确安装

2. **页面显示 404**
   - 确保 `next.config.js` 中设置了 `output: 'export'`
   - 检查构建输出目录是否正确

3. **样式问题**
   - 确保 Tailwind CSS 配置正确
   - 检查静态资源路径

### 手动部署

如果需要手动部署，可以运行：
```bash
npm run build
npm run export
```

然后将 `out` 目录的内容上传到 GitHub Pages。

## 📈 性能优化

### 建议的优化措施

1. **图片优化**
   - 使用 WebP 格式
   - 压缩图片大小
   - 使用懒加载

2. **代码分割**
   - 启用 Next.js 自动代码分割
   - 优化包大小

3. **缓存策略**
   - 设置适当的缓存头
   - 使用 CDN 加速

## 🔗 相关链接

- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Next.js 静态导出](https://nextjs.org/docs/advanced-features/static-export)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
