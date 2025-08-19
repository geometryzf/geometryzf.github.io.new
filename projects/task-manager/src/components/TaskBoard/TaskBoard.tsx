'use client'

import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, MoreVertical, Filter, Search } from 'lucide-react'
import { Task, TaskStatus, CreateTaskInput } from '@/types'
import TaskCard from './TaskCard'
import TaskForm from './TaskForm'
import { useTaskManager } from '@/hooks/useTaskManager'
import { useRealTimeSync } from '@/hooks/useRealTimeSync'

interface TaskBoardProps {
  projectId: string
  onTaskUpdate?: (task: Task) => void
}

const TaskBoard: React.FC<TaskBoardProps> = ({ projectId, onTaskUpdate }) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    priority: [] as string[],
    assignee: [] as string[],
    tags: [] as string[]
  })
  const [showTaskForm, setShowTaskForm] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus>('todo')

  const { getTasks, createTask, updateTask, deleteTask, loading, error } = useTaskManager()
  useRealTimeSync(projectId, (updatedTask) => {
    setTasks(prev => prev.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ))
  })

  // 获取任务数据
  useEffect(() => {
    const fetchTasks = async () => {
      const projectTasks = await getTasks(projectId)
      setTasks(projectTasks)
    }
    fetchTasks()
  }, [projectId, getTasks])

  // 过滤和搜索任务
  useEffect(() => {
    let filtered = tasks

    // 搜索过滤
    if (searchTerm) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // 优先级过滤
    if (filters.priority.length > 0) {
      filtered = filtered.filter(task => filters.priority.includes(task.priority))
    }

    // 分配者过滤
    if (filters.assignee.length > 0) {
      filtered = filtered.filter(task => filters.assignee.includes(task.assigneeId))
    }

    // 标签过滤
    if (filters.tags.length > 0) {
      filtered = filtered.filter(task =>
        filters.tags.some(tag => task.tags.includes(tag))
      )
    }

    setFilteredTasks(filtered)
  }, [tasks, searchTerm, filters])

  // 按状态分组任务
  const tasksByStatus = {
    todo: filteredTasks.filter(task => task.status === 'todo'),
    'in-progress': filteredTasks.filter(task => task.status === 'in-progress'),
    review: filteredTasks.filter(task => task.status === 'review'),
    done: filteredTasks.filter(task => task.status === 'done')
  }

  // 处理拖拽结束
  const handleDragEnd = async (result: DropResult) => {
    if (!result.destination) return

    const { source, destination, draggableId } = result
    const newStatus = destination.droppableId as TaskStatus

    // 更新任务状态
    const updatedTask = await updateTask(draggableId, { status: newStatus })
    if (updatedTask) {
      setTasks(prev => prev.map(task => 
        task.id === draggableId ? updatedTask : task
      ))
      onTaskUpdate?.(updatedTask)
    }
  }

  // 创建新任务
  const handleCreateTask = async (taskData: CreateTaskInput) => {
    const newTask = await createTask({
      ...taskData,
      projectId
    })
    if (newTask) {
      setTasks(prev => [...prev, newTask])
      setShowTaskForm(false)
    }
  }

  // 更新任务
  const handleUpdateTask = async (taskId: string, updates: Partial<Task>) => {
    const updatedTask = await updateTask(taskId, updates)
    if (updatedTask) {
      setTasks(prev => prev.map(task => 
        task.id === taskId ? updatedTask : task
      ))
      onTaskUpdate?.(updatedTask)
    }
  }

  // 删除任务
  const handleDeleteTask = async (taskId: string) => {
    const success = await deleteTask(taskId)
    if (success) {
      setTasks(prev => prev.filter(task => task.id !== taskId))
    }
  }

  const statusConfig = {
    todo: { title: '待办', color: 'bg-gray-100', textColor: 'text-gray-700' },
    'in-progress': { title: '进行中', color: 'bg-blue-100', textColor: 'text-blue-700' },
    review: { title: '审核中', color: 'bg-yellow-100', textColor: 'text-yellow-700' },
    done: { title: '已完成', color: 'bg-green-100', textColor: 'text-green-700' }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        加载失败: {error}
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col">
      {/* 工具栏 */}
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="搜索任务..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800">
            <Filter className="w-4 h-4" />
            <span>筛选</span>
          </button>
        </div>
        <button
          onClick={() => setShowTaskForm(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>新建任务</span>
        </button>
      </div>

      {/* 任务看板 */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex-1 flex space-x-4 p-4 overflow-x-auto">
          {Object.entries(statusConfig).map(([status, config]) => (
            <div key={status} className="flex-shrink-0 w-80">
              <div className={`${config.color} rounded-lg p-4`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`font-semibold ${config.textColor}`}>
                    {config.title} ({tasksByStatus[status as TaskStatus].length})
                  </h3>
                  <button className="text-gray-500 hover:text-gray-700">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>

                <Droppable droppableId={status}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={`min-h-[200px] transition-colors ${
                        snapshot.isDraggingOver ? 'bg-white/50 rounded' : ''
                      }`}
                    >
                      <AnimatePresence>
                        {tasksByStatus[status as TaskStatus].map((task, index) => (
                          <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(provided, snapshot) => (
                              <motion.div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2 }}
                                className={`mb-3 ${
                                  snapshot.isDragging ? 'rotate-2 shadow-xl' : ''
                                }`}
                              >
                                <TaskCard
                                  task={task}
                                  onUpdate={handleUpdateTask}
                                  onDelete={handleDeleteTask}
                                />
                              </motion.div>
                            )}
                          </Draggable>
                        ))}
                      </AnimatePresence>
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>

      {/* 新建任务表单 */}
      {showTaskForm && (
        <TaskForm
          onSubmit={handleCreateTask}
          onCancel={() => setShowTaskForm(false)}
          projectId={projectId}
        />
      )}
    </div>
  )
}

export default TaskBoard
