#!/bin/bash

echo "🚀 开始腾讯云部署..."

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建结果
if [ -d "out" ]; then
    echo "✅ 构建成功！"
    echo "📁 输出目录: out/"
    ls -la out/
else
    echo "❌ 构建失败！"
    exit 1
fi

# 推送到腾讯云
echo "📤 推送到腾讯云..."
git add .
git commit -m "腾讯云部署更新"
git push tencent main

echo "🎉 部署完成！"

