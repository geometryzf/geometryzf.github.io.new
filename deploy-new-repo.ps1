# PowerShell部署脚本 - 部署到新仓库
# 使用方法: .\deploy-new-repo.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "开始部署到新仓库..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 设置环境变量
$env:GIT_PAGER = "cat"
Write-Host "✅ 设置Git环境变量" -ForegroundColor Green

# 检查Git是否安装
try {
    git --version | Out-Null
    Write-Host "✅ Git已安装" -ForegroundColor Green
} catch {
    Write-Host "❌ Git未安装，请先安装Git" -ForegroundColor Red
    exit 1
}

# 移除旧远程仓库
Write-Host "🔄 移除旧远程仓库..." -ForegroundColor Yellow
git remote remove origin 2>$null
Write-Host "✅ 旧远程仓库已移除" -ForegroundColor Green

# 添加新远程仓库
Write-Host "🔄 添加新远程仓库..." -ForegroundColor Yellow
git remote add origin https://github.com/geometryzf/Intelligent-path-planning-algorithm.git
Write-Host "✅ 新远程仓库已添加" -ForegroundColor Green

# 验证远程仓库
Write-Host "🔍 验证远程仓库配置..." -ForegroundColor Yellow
git remote -v
Write-Host ""

# 检查Git状态
Write-Host "📋 检查Git状态..." -ForegroundColor Yellow
$status = git status --porcelain
if ($status) {
    Write-Host "发现更改的文件:" -ForegroundColor Green
    $status | ForEach-Object { Write-Host "  $_" -ForegroundColor Gray }
} else {
    Write-Host "没有更改需要提交" -ForegroundColor Yellow
}
Write-Host ""

# 添加所有文件
Write-Host "📝 添加所有文件..." -ForegroundColor Yellow
git add .
Write-Host "✅ 文件已添加到暂存区" -ForegroundColor Green

# 提交更改
Write-Host "💾 提交更改..." -ForegroundColor Yellow
git commit -m "Initial commit: Add personal portfolio with algorithm projects"
Write-Host "✅ 更改已提交" -ForegroundColor Green

# 推送到远程仓库
Write-Host "🚀 推送到远程仓库..." -ForegroundColor Yellow
Write-Host "注意: 如果提示认证，请使用Personal Access Token" -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "🎉 部署成功！" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "📖 下一步操作:" -ForegroundColor Cyan
    Write-Host "1. 访问 https://github.com/geometryzf/Intelligent-path-planning-algorithm" -ForegroundColor White
    Write-Host "2. 检查文件是否已上传" -ForegroundColor White
    Write-Host "3. 为各个项目创建独立的GitHub仓库" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "❌ 推送失败" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "🔧 可能的解决方案:" -ForegroundColor Yellow
    Write-Host "1. 检查网络连接" -ForegroundColor White
    Write-Host "2. 使用Personal Access Token认证" -ForegroundColor White
    Write-Host "3. 检查GitHub账户权限" -ForegroundColor White
    Write-Host ""
}

Write-Host "按任意键继续..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
