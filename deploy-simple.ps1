# 简化PowerShell部署脚本
Write-Host "开始部署到新仓库..." -ForegroundColor Green

# 设置环境变量
$env:GIT_PAGER = "cat"

# 移除旧远程仓库
git remote remove origin 2>$null

# 添加新远程仓库
git remote add origin https://github.com/geometryzf/Intelligent-path-planning-algorithm.git

# 验证远程仓库
Write-Host "远程仓库配置:" -ForegroundColor Yellow
git remote -v

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: Add personal portfolio with algorithm projects"

# 推送到远程仓库
Write-Host "推送到远程仓库..." -ForegroundColor Yellow
git push -u origin main

Write-Host "部署完成！" -ForegroundColor Green
Write-Host "请访问: https://github.com/geometryzf/Intelligent-path-planning-algorithm" -ForegroundColor Cyan
