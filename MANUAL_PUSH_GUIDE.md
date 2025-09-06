# 手动推送项目到GitHub指南

## 当前状态

✅ **已完成推送：**
- blog-system - 个人博客系统
- dashboard - 数据可视化面板

🔄 **需要手动推送：**
- weather-app - 天气应用
- chat-room - 在线聊天室

## 手动推送步骤

由于网络连接问题，请按照以下步骤手动推送剩余项目：

### 推送 weather-app 项目

1. 打开命令提示符或PowerShell
2. 导航到项目目录：
   ```bash
   cd D:\github主页\projects\weather-app
   ```

3. 检查远程仓库配置：
   ```bash
   git remote -v
   ```

4. 如果远程仓库未配置，添加远程仓库：
   ```bash
   git remote add origin https://ghp_2Q8vQZqX9K7mN4pL6sR3tU5wE8yI1oP4cV7bA0dF9gH2jK5mN8qS1tW4z@github.com/geometryzf/weather-app.git
   ```

5. 推送代码：
   ```bash
   git push -u origin master
   ```

### 推送 chat-room 项目

1. 导航到项目目录：
   ```bash
   cd D:\github主页\projects\chat-room
   ```

2. 检查远程仓库配置：
   ```bash
   git remote -v
   ```

3. 如果远程仓库未配置，添加远程仓库：
   ```bash
   git remote add origin https://ghp_2Q8vQZqX9K7mN4pL6sR3tU5wE8yI1oP4cV7bA0dF9gH2jK5mN8qS1tW4z@github.com/geometryzf/chat-room.git
   ```

4. 推送代码：
   ```bash
   git push -u origin master
   ```

## 网络问题解决方案

如果遇到连接问题，可以尝试：

1. **检查网络连接**：
   ```bash
   ping github.com
   ```

2. **配置Git代理**（如果有代理）：
   ```bash
   git config --global http.proxy http://proxy-server:port
   git config --global https.proxy https://proxy-server:port
   ```

3. **临时禁用SSL验证**（仅用于推送）：
   ```bash
   git config --global http.sslVerify false
   git push -u origin master
   git config --global http.sslVerify true
   ```

4. **使用SSH替代HTTPS**：
   ```bash
   git remote set-url origin git@github.com:geometryzf/weather-app.git
   git remote set-url origin git@github.com:geometryzf/chat-room.git
   ```

## 验证推送结果

推送成功后，您可以访问以下链接验证：

- [weather-app](https://github.com/geometryzf/weather-app)
- [chat-room](https://github.com/geometryzf/chat-room)

## 注意事项

- 所有项目都已经准备好，包括Git仓库初始化、文件提交等
- 使用提供的GitHub令牌进行身份验证
- 如果网络问题持续，建议稍后重试或使用不同的网络环境
