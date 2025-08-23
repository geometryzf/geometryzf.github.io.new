# GitHub Pages 静态版本备份

这是您的个人主页的GitHub Pages静态版本备份。

## 📁 文件结构

```
backup-github-pages/
├── static-files/          # 静态文件（可直接部署到GitHub Pages）
├── next.config.github-pages.js  # GitHub Pages专用配置
├── package.json          # 依赖配置
└── README.md            # 说明文档
```

## 🚀 部署到GitHub Pages

### 方法1：直接使用静态文件
1. 创建GitHub仓库：`your-username.github.io`
2. 将 `static-files/` 目录中的所有文件上传到仓库根目录
3. 在仓库设置中启用GitHub Pages
4. 访问：`https://your-username.github.io`

### 方法2：使用GitHub Actions自动部署
1. 复制此备份文件夹到新的GitHub仓库
2. 重命名 `next.config.github-pages.js` 为 `next.config.js`
3. 创建 `.github/workflows/deploy.yml` 文件
4. 推送代码，GitHub Actions会自动构建和部署

## ⚠️ 注意事项

- 这是静态版本，不支持服务端功能
- 管理员页面功能受限
- 部分动态效果可能无法正常工作
- 建议使用Vercel部署以获得完整功能

## 🔄 更新方法

1. 在主项目中运行：`npm run build`
2. 复制 `out/` 目录内容到 `backup-github-pages/static-files/`
3. 重新部署到GitHub Pages

## 📞 联系信息

如有问题，请通过以下方式联系：
- 邮箱：zhengfeichangzhou@foxmail.com
- GitHub：@geometryzf
