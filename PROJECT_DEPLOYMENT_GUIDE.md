# 项目部署指南

本指南将帮助您将各个项目独立部署到GitHub上。

## 📋 项目概览

我们有以下4个独立项目需要部署：

1. **智能路径规划算法** (`path-planning`)
   - 技术栈：Python, NumPy, Matplotlib
   - 功能：A*、Dijkstra、RRT等路径规划算法

2. **PSO优化算法库** (`pso-library`)
   - 技术栈：Python, NumPy, SciPy
   - 功能：粒子群优化算法及其变体

3. **MPC控制系统** (`mpc-system`)
   - 技术栈：Python, NumPy, SciPy, Matplotlib
   - 功能：模型预测控制系统

4. **任务管理应用** (`task-manager`)
   - 技术栈：Next.js, React, TypeScript, Tailwind CSS
   - 功能：现代化任务管理应用

## 🚀 快速部署

### 方法一：使用自动化脚本（推荐）

#### Windows用户
```bash
# 运行Windows批处理脚本
scripts\deploy-projects.bat
```

#### Linux/Mac用户
```bash
# 运行Shell脚本
chmod +x scripts/deploy-projects.sh
./scripts/deploy-projects.sh
```

### 方法二：手动部署

#### 1. 安装必要工具

**Git** (必需)
- 下载：https://git-scm.com/
- 配置用户信息：
```bash
git config --global user.name "您的GitHub用户名"
git config --global user.email "您的邮箱"
```

**GitHub CLI** (推荐)
- 下载：https://cli.github.com/
- 登录：
```bash
gh auth login
```

#### 2. 为每个项目创建GitHub仓库

##### 使用GitHub CLI（推荐）
```bash
# 进入项目目录
cd projects/path-planning

# 创建仓库
gh repo create path-planning --public --description "智能路径规划算法" --source=. --remote=origin --push

# 对其他项目重复相同步骤
cd ../pso-library
gh repo create pso-library --public --description "PSO优化算法库" --source=. --remote=origin --push

cd ../mpc-system
gh repo create mpc-system --public --description "MPC控制系统" --source=. --remote=origin --push

cd ../task-manager
gh repo create task-manager --public --description "任务管理应用" --source=. --remote=origin --push
```

##### 手动创建
1. 访问 https://github.com/new
2. 为每个项目创建仓库：
   - `path-planning` - 智能路径规划算法
   - `pso-library` - PSO优化算法库
   - `mpc-system` - MPC控制系统
   - `task-manager` - 任务管理应用
3. 设置为公开仓库
4. 不要初始化README、.gitignore或许可证（我们已经有这些文件）

#### 3. 推送代码到GitHub

```bash
# 对每个项目执行以下命令
cd projects/[项目目录名]

# 初始化Git仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: [项目名称]"

# 添加远程仓库
git remote add origin https://github.com/[您的用户名]/[仓库名].git

# 推送到GitHub
git push -u origin main
```

## 📝 项目配置

### 更新项目信息

部署前，请更新以下文件中的信息：

1. **setup.py** (Python项目)
   - 作者邮箱
   - GitHub仓库URL

2. **package.json** (Node.js项目)
   - 仓库URL
   - 作者信息

3. **README.md**
   - 项目描述
   - 安装说明
   - 使用示例

### 示例更新

```python
# setup.py
setup(
    name="intelligent-path-planning",
    author="郑斐",
    author_email="your.email@example.com",  # 更新为您的邮箱
    url="https://github.com/yourusername/intelligent-path-planning",  # 更新为您的仓库URL
    # ...
)
```

```json
// package.json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/task-manager-app.git"  // 更新为您的仓库URL
  },
  "author": "郑斐",
  // ...
}
```

## 🌐 部署到生产环境

### Python项目部署

#### PyPI发布
```bash
# 构建包
python setup.py sdist bdist_wheel

# 上传到PyPI
pip install twine
twine upload dist/*
```

#### GitHub Pages (文档)
```bash
# 安装Sphinx
pip install sphinx sphinx-rtd-theme

# 生成文档
sphinx-quickstart docs
cd docs
make html

# 部署到GitHub Pages
# 在GitHub仓库设置中启用Pages，选择docs/_build/html目录
```

### Next.js项目部署

#### Vercel部署（推荐）
1. 访问 https://vercel.com/
2. 导入GitHub仓库
3. 自动部署

#### 手动部署
```bash
# 构建项目
npm run build

# 部署到Vercel
npx vercel --prod
```

## 🔗 更新个人主页链接

部署完成后，更新个人主页中的项目链接：

```typescript
// 在个人主页中更新项目链接
const projects = [
  {
    title: "智能路径规划算法",
    description: "集成A*、Dijkstra、RRT等多种路径规划算法",
    github: "https://github.com/yourusername/path-planning",
    demo: "https://path-planning-demo.vercel.app",
    // ...
  },
  // ...
];
```

## 📊 项目状态监控

### GitHub Actions CI/CD

为每个项目创建`.github/workflows/ci.yml`：

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.9'
    
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
        pip install pytest
    
    - name: Run tests
      run: |
        pytest
```

## 🎯 最佳实践

1. **版本管理**
   - 使用语义化版本号
   - 为每个版本创建Git标签

2. **文档维护**
   - 保持README更新
   - 添加API文档
   - 提供使用示例

3. **代码质量**
   - 使用代码格式化工具
   - 添加单元测试
   - 设置代码覆盖率检查

4. **安全考虑**
   - 定期更新依赖
   - 使用GitHub安全扫描
   - 避免在代码中硬编码敏感信息

## 🆘 常见问题

### Q: 如何更新已部署的项目？
A: 修改代码后，提交并推送到GitHub：
```bash
git add .
git commit -m "Update: [描述更改]"
git push
```

### Q: 如何添加协作者？
A: 在GitHub仓库设置中添加协作者，或使用组织管理权限。

### Q: 如何设置自定义域名？
A: 在GitHub Pages设置中添加自定义域名，并配置DNS记录。

### Q: 如何处理依赖更新？
A: 定期检查依赖更新，使用`npm audit`或`pip-audit`检查安全漏洞。

## 📞 支持

如果在部署过程中遇到问题，请：

1. 检查Git和GitHub CLI是否正确安装
2. 确认GitHub账户权限
3. 查看GitHub Actions日志
4. 参考GitHub官方文档

---

**注意**: 请确保在部署前更新所有项目中的个人信息和仓库URL。
