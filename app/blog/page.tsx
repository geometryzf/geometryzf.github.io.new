import BlogCard from '@/components/BlogCard'

const posts = [
  {
    title: '用 Next.js + Tailwind 打造现代化个人主页',
    excerpt: '分享从零搭建、主题定制、部署到Vercel/GitHub Pages的完整流程与实践经验。',
    date: '2024-08-01',
    href: 'https://your-blog.vercel.app/post/build-portfolio-with-nextjs',
  },
  {
    title: '前端工程质量体系：TypeScript、ESLint、CI/CD',
    excerpt: '如何在项目中落地类型检查、静态扫描和自动化部署，提升团队效率与质量。',
    date: '2024-07-10',
    href: 'https://your-blog.vercel.app/post/fe-quality-pipeline',
  },
  {
    title: '性能优化清单：从指标到手段',
    excerpt: 'TTFB、LCP、CLS各项指标的意义与优化策略，结合实战案例讲解。',
    date: '2024-06-15',
    href: 'https://your-blog.vercel.app/post/performance-checklist',
  },
]

export default function BlogPage() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8"><span className="gradient-text">我的博客</span></h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">记录技术分享与实践笔记</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <BlogCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
