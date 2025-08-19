@echo off
echo ========================================
echo 项目部署脚本 - 简化版本
echo ========================================
echo.

REM 设置Git不使用分页器
set GIT_PAGER=cat

echo 1. 检查Git状态...
git status --porcelain
echo.

echo 2. 添加所有文件...
git add .
echo.

echo 3. 提交更改...
git commit -m "Add independent project structure and deployment tools"
echo.

echo 4. 推送到GitHub...
git push origin main
echo.

echo 5. 检查远程仓库...
git remote -v
echo.

echo ========================================
echo 部署完成！
echo ========================================
echo.
echo 下一步操作：
echo 1. 访问 https://github.com/geometryzf/geometryzf.github.io
echo 2. 检查文件是否已上传
echo 3. 为各个项目创建独立的GitHub仓库
echo.

pause
