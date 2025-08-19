# 手动部署指南

由于终端环境问题，请按照以下步骤手动部署项目。

## 🔧 解决终端问题

### 方法一：设置Git环境变量
在PowerShell或命令提示符中运行：
```cmd
set GIT_PAGER=cat
```

### 方法二：使用Git Bash
如果安装了Git Bash，使用Git Bash终端可以避免分页器问题。

## 📋 当前状态检查

### 1. 检查Git仓库状态
```bash
git status --porcelain
```

### 2. 检查远程仓库
```bash
git remote -v
```

应该显示：
```
origin  https://github.com/geometryzf/geometryzf.github.io.git (fetch)
origin  https://github.com/geometryzf/geometryzf.github.io.git (push)
```

## 🚀 部署步骤

### 步骤1：添加所有文件
```bash
git add .
```

### 步骤2：提交更改
```bash
git commit -m "Add independent project structure and deployment tools"
```

### 步骤3：推送到GitHub
```bash
git push origin main
```

## 🔐 认证问题解决

如果遇到认证错误，请按以下步骤操作：

### 1. 检查Git配置
```bash
git config --global user.name
git config --global user.email
```

### 2. 设置Git配置（如果需要）
```bash
git config --global user.name "您的GitHub用户名"
git config --global user.email "您的邮箱"
```

### 3. 使用Personal Access Token
1. 访问 https://github.com/settings/tokens
2. 生成新的Personal Access Token
3. 选择权限：`repo`, `workflow`
4. 复制Token
5. 推送时使用Token作为密码

### 4. 使用GitHub CLI（推荐）
```bash
# 安装GitHub CLI
# 下载：https://cli.github.com/

# 登录
gh auth login

# 创建仓库
gh repo create path-planning --public --description "智能路径规划算法"
```

## 📁 项目结构确认

部署前，确认以下文件已创建：

### Python项目
- ✅ `projects/path-planning/.gitignore`
- ✅ `projects/path-planning/setup.py`
- ✅ `projects/path-planning/LICENSE`
- ✅ `projects/pso-library/.gitignore`
- ✅ `projects/pso-library/setup.py`
- ✅ `projects/pso-library/LICENSE`
- ✅ `projects/mpc-system/.gitignore`
- ✅ `projects/mpc-system/setup.py`
- ✅ `projects/mpc-system/LICENSE`

### Next.js项目
- ✅ `projects/task-manager/.gitignore`
- ✅ `projects/task-manager/package.json`
- ✅ `projects/task-manager/LICENSE`

### 部署工具
- ✅ `scripts/deploy-projects.bat`
- ✅ `scripts/deploy-projects.sh`
- ✅ `scripts/simple-deploy.bat`
- ✅ `PROJECT_DEPLOYMENT_GUIDE.md`
- ✅ `MANUAL_DEPLOYMENT_GUIDE.md`

## 🌐 创建独立仓库

### 方法一：使用GitHub CLI
```bash
# 进入项目目录
cd projects/path-planning

# 初始化Git仓库
git init

# 添加文件
git add .

# 提交
git commit -m "Initial commit: 智能路径规划算法"

# 创建GitHub仓库
gh repo create path-planning --public --description "智能路径规划算法" --source=. --remote=origin --push
```

### 方法二：手动创建
1. 访问 https://github.com/new
2. 创建仓库：
   - `path-planning` - 智能路径规划算法
   - `pso-library` - PSO优化算法库
   - `mpc-system` - MPC控制系统
   - `task-manager` - 任务管理应用
3. 设置为公开仓库
4. 不要初始化README、.gitignore或许可证

### 方法三：使用Git命令
```bash
# 对每个项目执行
cd projects/[项目目录名]
git init
git add .
git commit -m "Initial commit: [项目名称]"
git remote add origin https://github.com/[用户名]/[仓库名].git
git push -u origin main
```

## 🔍 验证部署

### 1. 检查主仓库
访问：https://github.com/geometryzf/geometryzf.github.io
确认以下文件已上传：
- `projects/` 目录
- `scripts/` 目录
- 部署指南文档

### 2. 检查独立项目仓库
确认每个项目都有独立的GitHub仓库：
- https://github.com/[用户名]/path-planning
- https://github.com/[用户名]/pso-library
- https://github.com/[用户名]/mpc-system
- https://github.com/[用户名]/task-manager

## 🆘 常见问题

### Q: 推送时提示认证失败
A: 使用Personal Access Token或GitHub CLI重新认证

### Q: 仓库已存在
A: 删除现有仓库或使用不同的仓库名

### Q: 文件未显示
A: 检查.gitignore文件，确保没有意外忽略重要文件

### Q: 分支名称问题
A: 确保使用正确的分支名（main或master）

## 📞 获取帮助

如果遇到问题：
1. 检查GitHub状态：https://www.githubstatus.com/
2. 查看GitHub文档：https://docs.github.com/
3. 检查网络连接
4. 确认GitHub账户权限

---

**注意**: 部署完成后，请更新个人主页中的项目链接。
