interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  href: string
}

export default function BlogCard({ title, excerpt, date, href }: BlogCardProps) {
  return (
    <a href={href} className="card p-6 block hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{excerpt}</p>
      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <span>{date}</span>
        <span className="btn-secondary px-3 py-1">阅读更多</span>
      </div>
    </a>
  )
}
