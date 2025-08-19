import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header', () => {
  it('renders header with navigation links', () => {
    render(<Header />)
    
    // 检查导航链接是否存在
    expect(screen.getByText('首页')).toBeInTheDocument()
    expect(screen.getByText('关于')).toBeInTheDocument()
    expect(screen.getByText('技能')).toBeInTheDocument()
    expect(screen.getByText('项目')).toBeInTheDocument()
    expect(screen.getByText('联系')).toBeInTheDocument()
  })

  it('renders logo/name', () => {
    render(<Header />)
    
    // 检查姓名是否存在
    expect(screen.getByText('郑斐')).toBeInTheDocument()
  })

  it('has correct navigation structure', () => {
    render(<Header />)
    
    // 检查导航元素
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    
    // 检查链接
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })
})
