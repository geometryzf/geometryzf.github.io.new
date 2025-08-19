import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, title, description, email, phone, location, github, linkedin, story, skills } = body

    // 读取当前的site.ts文件
    const siteConfigPath = path.join(process.cwd(), 'config', 'site.ts')
    let siteConfigContent = fs.readFileSync(siteConfigPath, 'utf8')

    // 更新配置内容
    siteConfigContent = siteConfigContent.replace(
      /name:\s*['"`][^'"`]*['"`]/,
      `name: '${name}'`
    )
    siteConfigContent = siteConfigContent.replace(
      /title:\s*['"`][^'"`]*['"`]/,
      `title: '${title}'`
    )
    siteConfigContent = siteConfigContent.replace(
      /description:\s*['"`][^'"`]*['"`]/,
      `description: '${description}'`
    )
    siteConfigContent = siteConfigContent.replace(
      /email:\s*['"`][^'"`]*['"`]/,
      `email: '${email}'`
    )
    siteConfigContent = siteConfigContent.replace(
      /phone:\s*['"`][^'"`]*['"`]/,
      `phone: '${phone}'`
    )
    siteConfigContent = siteConfigContent.replace(
      /location:\s*['"`][^'"`]*['"`]/,
      `location: '${location}'`
    )
    siteConfigContent = siteConfigContent.replace(
      /github:\s*['"`][^'"`]*['"`]/,
      `github: '${github}'`
    )
    siteConfigContent = siteConfigContent.replace(
      /linkedin:\s*['"`][^'"`]*['"`]/,
      `linkedin: '${linkedin}'`
    )
    siteConfigContent = siteConfigContent.replace(
      /story:\s*['"`][^'"`]*['"`]/,
      `story: '${story}'`
    )

    // 更新技能数据
    if (skills) {
      // 更新算法技能
      if (skills.algorithms) {
        const algorithmsRegex = /algorithms:\s*\[([\s\S]*?)\]/m
        const algorithmsMatch = siteConfigContent.match(algorithmsRegex)
        if (algorithmsMatch) {
          const algorithmsContent = skills.algorithms.map((skill: any) => 
            `      { name: '${skill.name}', level: ${skill.level}, color: '${skill.color}' }`
          ).join(',\n')
          siteConfigContent = siteConfigContent.replace(
            algorithmsRegex,
            `algorithms: [\n${algorithmsContent}\n    ]`
          )
        }
      }

      // 更新前端技能
      if (skills.frontend) {
        const frontendRegex = /frontend:\s*\[([\s\S]*?)\]/m
        const frontendMatch = siteConfigContent.match(frontendRegex)
        if (frontendMatch) {
          const frontendContent = skills.frontend.map((skill: any) => 
            `      { name: '${skill.name}', level: ${skill.level}, color: '${skill.color}' }`
          ).join(',\n')
          siteConfigContent = siteConfigContent.replace(
            frontendRegex,
            `frontend: [\n${frontendContent}\n    ]`
          )
        }
      }

      // 更新后端技能
      if (skills.backend) {
        const backendRegex = /backend:\s*\[([\s\S]*?)\]/m
        const backendMatch = siteConfigContent.match(backendRegex)
        if (backendMatch) {
          const backendContent = skills.backend.map((skill: any) => 
            `      { name: '${skill.name}', level: ${skill.level}, color: '${skill.color}' }`
          ).join(',\n')
          siteConfigContent = siteConfigContent.replace(
            backendRegex,
            `backend: [\n${backendContent}\n    ]`
          )
        }
      }

      // 更新工具技能
      if (skills.tools) {
        const toolsRegex = /tools:\s*\[([\s\S]*?)\]/m
        const toolsMatch = siteConfigContent.match(toolsRegex)
        if (toolsMatch) {
          const toolsContent = skills.tools.map((skill: any) => 
            `      { name: '${skill.name}', level: ${skill.level}, color: '${skill.color}' }`
          ).join(',\n')
          siteConfigContent = siteConfigContent.replace(
            toolsRegex,
            `tools: [\n${toolsContent}\n    ]`
          )
        }
      }
    }

    // 写回文件
    fs.writeFileSync(siteConfigPath, siteConfigContent, 'utf8')

    return NextResponse.json({ 
      success: true, 
      message: '配置已更新，需要重新部署才能生效' 
    })
  } catch (error) {
    console.error('更新配置失败:', error)
    return NextResponse.json(
      { success: false, message: '更新配置失败' },
      { status: 500 }
    )
  }
}
