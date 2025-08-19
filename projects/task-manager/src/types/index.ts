// 用户相关类型
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'member' | 'viewer'
  createdAt: Date
  updatedAt: Date
}

// 任务相关类型
export interface Task {
  id: string
  title: string
  description: string
  priority: 'low' | 'medium' | 'high'
  status: 'todo' | 'in-progress' | 'review' | 'done'
  assigneeId: string
  assignee: User
  dueDate: Date
  tags: string[]
  attachments: Attachment[]
  comments: Comment[]
  createdAt: Date
  updatedAt: Date
}

// 项目相关类型
export interface Project {
  id: string
  name: string
  description: string
  status: 'active' | 'archived' | 'completed'
  members: ProjectMember[]
  tasks: Task[]
  createdAt: Date
  updatedAt: Date
}

// 项目成员
export interface ProjectMember {
  id: string
  projectId: string
  userId: string
  user: User
  role: 'owner' | 'admin' | 'member' | 'viewer'
  joinedAt: Date
}

// 附件
export interface Attachment {
  id: string
  taskId: string
  fileName: string
  fileSize: number
  fileType: string
  fileUrl: string
  uploadedBy: string
  uploadedAt: Date
}

// 评论
export interface Comment {
  id: string
  taskId: string
  content: string
  authorId: string
  author: User
  createdAt: Date
  updatedAt: Date
}

// 通知
export interface Notification {
  id: string
  userId: string
  type: 'task_assigned' | 'task_completed' | 'due_date_reminder' | 'mention'
  title: string
  message: string
  read: boolean
  data: Record<string, any>
  createdAt: Date
}

// API请求类型
export interface CreateTaskInput {
  title: string
  description: string
  priority: Task['priority']
  assigneeId: string
  dueDate: Date
  tags?: string[]
}

export interface UpdateTaskInput {
  title?: string
  description?: string
  priority?: Task['priority']
  status?: Task['status']
  assigneeId?: string
  dueDate?: Date
  tags?: string[]
}

export interface CreateProjectInput {
  name: string
  description: string
  memberIds: string[]
}

// 统计数据类型
export interface TaskStats {
  total: number
  todo: number
  inProgress: number
  review: number
  done: number
  overdue: number
}

export interface ProjectStats {
  projectId: string
  projectName: string
  taskStats: TaskStats
  memberCount: number
  completionRate: number
  averageCompletionTime: number
}

export interface UserStats {
  userId: string
  userName: string
  assignedTasks: number
  completedTasks: number
  completionRate: number
  averageCompletionTime: number
}

// 拖拽相关类型
export interface DragItem {
  id: string
  type: 'task' | 'column'
  index: number
}

export interface DropResult {
  draggableId: string
  type: string
  source: {
    droppableId: string
    index: number
  }
  destination?: {
    droppableId: string
    index: number
  }
  reason: 'DROP' | 'CANCEL'
}

// 实时同步类型
export interface SocketEvent {
  type: 'task_created' | 'task_updated' | 'task_deleted' | 'comment_added'
  data: any
  timestamp: Date
}

// 搜索和过滤类型
export interface TaskFilters {
  status?: Task['status'][]
  priority?: Task['priority'][]
  assigneeId?: string
  tags?: string[]
  dueDate?: {
    start: Date
    end: Date
  }
  search?: string
}

export interface SortOptions {
  field: 'title' | 'priority' | 'dueDate' | 'createdAt' | 'assignee'
  direction: 'asc' | 'desc'
}

// 分页类型
export interface PaginationParams {
  page: number
  limit: number
  total: number
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: PaginationParams
}

// 错误类型
export interface ApiError {
  code: string
  message: string
  details?: Record<string, any>
}

// 响应类型
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: ApiError
}

// 主题类型
export interface Theme {
  mode: 'light' | 'dark' | 'system'
  primaryColor: string
  accentColor: string
}

// 设置类型
export interface UserSettings {
  theme: Theme
  notifications: {
    email: boolean
    push: boolean
    desktop: boolean
  }
  language: string
  timezone: string
}
