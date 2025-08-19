#!/bin/bash

# 项目部署脚本 - 将各个项目上传到GitHub
# 使用方法: ./scripts/deploy-projects.sh

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 项目配置
PROJECTS=(
    "path-planning:智能路径规划算法"
    "pso-library:PSO优化算法库"
    "mpc-system:MPC控制系统"
    "task-manager:任务管理应用"
)

echo -e "${BLUE}🚀 开始部署项目到GitHub...${NC}\n"

# 检查Git是否安装
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git未安装，请先安装Git${NC}"
    exit 1
fi

# 检查GitHub CLI是否安装
if ! command -v gh &> /dev/null; then
    echo -e "${YELLOW}⚠️  GitHub CLI未安装，将使用手动方式创建仓库${NC}"
    echo -e "${YELLOW}   建议安装GitHub CLI: https://cli.github.com/${NC}\n"
fi

# 遍历每个项目
for project in "${PROJECTS[@]}"; do
    IFS=':' read -r project_dir project_name <<< "$project"
    
    echo -e "${GREEN}📁 处理项目: ${project_name} (${project_dir})${NC}"
    
    # 检查项目目录是否存在
    if [ ! -d "projects/${project_dir}" ]; then
        echo -e "${RED}❌ 项目目录 projects/${project_dir} 不存在${NC}"
        continue
    fi
    
    cd "projects/${project_dir}"
    
    # 初始化Git仓库（如果还没有）
    if [ ! -d ".git" ]; then
        echo -e "${BLUE}🔧 初始化Git仓库...${NC}"
        git init
    fi
    
    # 添加所有文件
    echo -e "${BLUE}📝 添加文件到Git...${NC}"
    git add .
    
    # 检查是否有更改
    if git diff --cached --quiet; then
        echo -e "${YELLOW}⚠️  没有更改需要提交${NC}"
        cd ../..
        continue
    fi
    
    # 提交更改
    echo -e "${BLUE}💾 提交更改...${NC}"
    git commit -m "Initial commit: ${project_name}"
    
    # 尝试使用GitHub CLI创建仓库
    if command -v gh &> /dev/null; then
        echo -e "${BLUE}🌐 使用GitHub CLI创建仓库...${NC}"
        repo_name=$(echo "${project_dir}" | tr '[:upper:]' '[:lower:]' | tr '_' '-')
        
        # 检查仓库是否已存在
        if gh repo view "${repo_name}" &> /dev/null; then
            echo -e "${YELLOW}⚠️  仓库 ${repo_name} 已存在，跳过创建${NC}"
        else
            gh repo create "${repo_name}" --public --description "${project_name}" --source=. --remote=origin --push
            echo -e "${GREEN}✅ 仓库创建成功: https://github.com/$(gh api user --jq .login)/${repo_name}${NC}"
        fi
    else
        echo -e "${YELLOW}📋 请手动创建GitHub仓库:${NC}"
        echo -e "${YELLOW}   1. 访问 https://github.com/new${NC}"
        echo -e "${YELLOW}   2. 仓库名称: ${project_dir}${NC}"
        echo -e "${YELLOW}   3. 描述: ${project_name}${NC}"
        echo -e "${YELLOW}   4. 设置为公开仓库${NC}"
        echo -e "${YELLOW}   5. 创建后运行以下命令:${NC}"
        echo -e "${BLUE}      git remote add origin https://github.com/YOUR_USERNAME/${project_dir}.git${NC}"
        echo -e "${BLUE}      git push -u origin main${NC}"
    fi
    
    cd ../..
    echo -e "${GREEN}✅ ${project_name} 处理完成${NC}\n"
done

echo -e "${GREEN}🎉 所有项目处理完成！${NC}"
echo -e "${BLUE}📖 下一步:${NC}"
echo -e "${BLUE}   1. 为每个项目创建GitHub仓库${NC}"
echo -e "${BLUE}   2. 添加远程仓库并推送代码${NC}"
echo -e "${BLUE}   3. 设置GitHub Pages或部署到Vercel${NC}"
echo -e "${BLUE}   4. 更新README中的链接${NC}"
