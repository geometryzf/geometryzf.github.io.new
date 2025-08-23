# 🚀 个人主页部署指南

## 📋 部署方案总览

### 方案1：Vercel部署（推荐）⭐
- ✅ **完整功能**：支持所有动态效果和功能
- ✅ **自动部署**：每次推送代码自动更新
- ✅ **性能优化**：全球CDN，加载速度快
- ✅ **免费额度**：个人项目完全免费

### 方案2：GitHub Pages备份
- 📦 **静态版本**：已备份在 `backup-github-pages/` 目录
- 🔄 **手动更新**：需要手动重新构建和部署
- ⚠️ **功能限制**：部分动态功能无法使用

---

## 🎯 Vercel部署步骤

### 1. 访问Vercel
- 打开 [vercel.com](https://vercel.com)
- 点击 "Sign Up" 或 "Continue with GitHub"

### 2. 连接GitHub
- 使用GitHub账号登录
- 授权Vercel访问您的GitHub仓库

### 3. 导入项目
- 点击 "New Project"
- 选择仓库：`geometryzf/geometryzf.github.io`
- Vercel会自动检测Next.js项目

### 4. 配置部署
- **Framework Preset**: Next.js (自动检测)
- **Root Directory**: `./` (默认)
- **Build Command**: `npm run build` (自动)
- **Output Directory**: `.next` (自动)

### 5. 部署
- 点击 "Deploy"
- 等待构建完成（约2-3分钟）

### 6. 访问网站
- 部署完成后，您会获得一个URL：`https://your-project-name.vercel.app`
- 可以设置自定义域名

---

## 📦 GitHub Pages备份使用

### 备份位置
```
backup-github-pages/
├── static-files/          # 可直接部署的静态文件
├── next.config.github-pages.js  # GitHub Pages配置
├── package.json          # 依赖配置
├── .github/workflows/    # 自动部署配置
└── README.md            # 详细说明
```

### 部署方法

#### 方法1：直接上传静态文件
1. 创建GitHub仓库：`your-username.github.io`
2. 将 `backup-github-pages/static-files/` 中的所有文件上传到仓库根目录
3. 在仓库设置 → Pages → Source 选择 "Deploy from a branch"
4. 选择 `main` 分支，保存
5. 访问：`https://your-username.github.io`

#### 方法2：使用GitHub Actions
1. 创建新仓库
2. 复制 `backup-github-pages/` 目录内容到新仓库
3. 重命名 `next.config.github-pages.js` 为 `next.config.js`
4. 推送代码，GitHub Actions会自动构建和部署

---

## 🔄 更新和维护

### Vercel版本（推荐）
- 每次推送代码到GitHub，Vercel会自动重新部署
- 无需手动操作

### GitHub Pages版本
1. 在主项目中运行：`npm run build`
2. 复制 `out/` 目录内容到 `backup-github-pages/static-files/`
3. 重新部署到GitHub Pages

---

## 📞 技术支持

### 常见问题
1. **Vercel部署失败**：检查构建日志，通常是依赖问题
2. **GitHub Pages显示空白**：确保静态文件正确上传
3. **动态效果不工作**：GitHub Pages不支持服务端功能

### 联系方式
- 邮箱：zhengfeichangzhou@foxmail.com
- GitHub：@geometryzf

---

## 🎉 部署完成

恭喜！您的个人主页现在可以通过以下方式访问：

- **Vercel版本**：`https://your-project-name.vercel.app` (完整功能)
- **GitHub Pages版本**：`https://your-username.github.io` (静态版本)

建议使用Vercel版本以获得最佳体验！
