@echo off
setlocal enabledelayedexpansion

REM 项目部署脚本 - 将各个项目上传到GitHub (Windows版本)
REM 使用方法: scripts\deploy-projects.bat

echo 🚀 开始部署项目到GitHub...
echo.

REM 检查Git是否安装
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git未安装，请先安装Git
    pause
    exit /b 1
)

REM 检查GitHub CLI是否安装
gh --version >nul 2>&1
if errorlevel 1 (
    echo ⚠️  GitHub CLI未安装，将使用手动方式创建仓库
    echo    建议安装GitHub CLI: https://cli.github.com/
    echo.
)

REM 项目配置
set "PROJECTS=path-planning:智能路径规划算法 pso-library:PSO优化算法库 mpc-system:MPC控制系统 task-manager:任务管理应用"

REM 遍历每个项目
for %%p in (%PROJECTS%) do (
    for /f "tokens=1,2 delims=:" %%a in ("%%p") do (
        set "project_dir=%%a"
        set "project_name=%%b"
        
        echo 📁 处理项目: !project_name! (!project_dir!)
        
        REM 检查项目目录是否存在
        if not exist "projects\!project_dir!" (
            echo ❌ 项目目录 projects\!project_dir! 不存在
            goto :continue
        )
        
        cd "projects\!project_dir!"
        
        REM 初始化Git仓库（如果还没有）
        if not exist ".git" (
            echo 🔧 初始化Git仓库...
            git init
        )
        
        REM 添加所有文件
        echo 📝 添加文件到Git...
        git add .
        
        REM 检查是否有更改
        git diff --cached --quiet
        if errorlevel 1 (
            REM 有更改，提交
            echo 💾 提交更改...
            git commit -m "Initial commit: !project_name!"
        ) else (
            echo ⚠️  没有更改需要提交
            cd ..\..
            goto :continue
        )
        
        REM 尝试使用GitHub CLI创建仓库
        gh --version >nul 2>&1
        if not errorlevel 1 (
            echo 🌐 使用GitHub CLI创建仓库...
            set "repo_name=!project_dir!"
            
            REM 检查仓库是否已存在
            gh repo view "!repo_name!" >nul 2>&1
            if errorlevel 1 (
                gh repo create "!repo_name!" --public --description "!project_name!" --source=. --remote=origin --push
                echo ✅ 仓库创建成功
            ) else (
                echo ⚠️  仓库 !repo_name! 已存在，跳过创建
            )
        ) else (
            echo 📋 请手动创建GitHub仓库:
            echo    1. 访问 https://github.com/new
            echo    2. 仓库名称: !project_dir!
            echo    3. 描述: !project_name!
            echo    4. 设置为公开仓库
            echo    5. 创建后运行以下命令:
            echo       git remote add origin https://github.com/YOUR_USERNAME/!project_dir!.git
            echo       git push -u origin main
        )
        
        cd ..\..
        echo ✅ !project_name! 处理完成
        echo.
    )
    :continue
)

echo 🎉 所有项目处理完成！
echo 📖 下一步:
echo    1. 为每个项目创建GitHub仓库
echo    2. 添加远程仓库并推送代码
echo    3. 设置GitHub Pages或部署到Vercel
echo    4. 更新README中的链接

pause
