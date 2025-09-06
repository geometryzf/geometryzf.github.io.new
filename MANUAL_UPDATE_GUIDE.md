# 手动更新主项目仓库指南

## 当前状态

✅ **本地修改已完成：**
- 项目配置已更新（config/site.ts）
- 项目截图路径已修正（components/Projects.tsx）
- 统计数据已修正（contributors数量）
- 新项目文件已添加
- 所有修改已提交到本地Git

❌ **需要手动推送：**
- 由于网络连接问题，无法自动推送到GitHub

## 手动推送步骤

### 1. 确认远程仓库URL
```bash
git remote -v
```

### 2. 如果URL不正确，请设置正确的仓库URL
```bash
git remote set-url origin https://github.com/geometryzf/geometryzf.github.io.git
```

### 3. 推送修改到GitHub
```bash
git push origin main
```

### 4. 如果遇到网络问题，可以尝试：
```bash
# 配置Git网络设置
git config --global http.postBuffer 524288000
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999

# 临时禁用SSL验证
git config --global http.sslVerify false
git push origin main
git config --global http.sslVerify true
```

## 验证更新

推送成功后，请访问以下链接验证：
- GitHub仓库：https://github.com/geometryzf/geometryzf.github.io
- 确认以下文件已更新：
  - `config/site.ts` - 项目配置和统计数据
  - `components/Projects.tsx` - 项目截图路径
  - `public/images/` - 新增的项目截图
  - `projects/` - 新增的项目文件

## 主要更新内容

1. **项目截图路径修正**
   - 前4个项目：`/images/projects/`
   - 后4个项目：`/images/`

2. **统计数据修正**
   - 所有项目contributors改为1
   - 项目描述和技术栈更新

3. **新增文件**
   - 4个新项目的README.md
   - 4个新项目的截图SVG
   - 部署相关文档

推送完成后，我们就可以继续部署到Vercel了！
