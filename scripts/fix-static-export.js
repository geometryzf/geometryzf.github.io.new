const fs = require('fs');
const path = require('path');

// 修复静态导出HTML文件
function fixStaticExport() {
  const outDir = path.join(process.cwd(), 'out');
  const indexFile = path.join(outDir, 'index.html');
  
  if (!fs.existsSync(indexFile)) {
    console.log('❌ index.html 文件不存在');
    return;
  }
  
  console.log('🔧 修复静态导出HTML文件...');
  
  // 读取HTML文件
  let html = fs.readFileSync(indexFile, 'utf8');
  
  // 修复所有隐藏元素
  html = html.replace(/style="opacity:0;transform:[^"]*"/g, 'style="opacity:1;transform:none"');
  html = html.replace(/opacity:0/g, 'opacity:1');
  html = html.replace(/transform:translate[^;)]*[;)]/g, 'transform:none;');
  
  // 添加静态导出专用CSS
  const staticCSS = `
    <style>
      /* 静态导出修复样式 */
      * { opacity: 1 !important; }
      [style*="opacity:0"] { opacity: 1 !important; transform: none !important; }
      [style*="transform:translate"] { transform: none !important; }
      .skill-progress .progress-bar { 
        animation: progressAnimation 2s ease-out forwards !important; 
      }
      @keyframes progressAnimation {
        from { width: 0%; }
        to { width: var(--target-width, 0%); }
      }
      
      /* 进度条动画 */
      [style*="width:0px"] { 
        width: var(--target-width, 50%) !important;
        transition: width 2s ease-out !important;
      }
    </style>
  `;
  
  // 在head标签结束前插入CSS
  html = html.replace('</head>', staticCSS + '</head>');
  
  // 修复进度条宽度
  html = html.replace(/style="background-color:#[^"]*;width:0px"/g, (match) => {
    return match.replace('width:0px', 'width:50%');
  });
  
  // 写回文件
  fs.writeFileSync(indexFile, html, 'utf8');
  
  console.log('✅ 静态导出HTML修复完成');
  
  // 同时处理其他HTML文件
  const htmlFiles = ['admin/index.html', 'blog/index.html', 'resume/index.html'];
  
  htmlFiles.forEach(file => {
    const filePath = path.join(outDir, file);
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/style="opacity:0;transform:[^"]*"/g, 'style="opacity:1;transform:none"');
      content = content.replace(/opacity:0/g, 'opacity:1');
      content = content.replace('</head>', staticCSS + '</head>');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ 修复 ${file}`);
    }
  });
}

fixStaticExport();

