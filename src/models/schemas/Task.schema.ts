import { ObjectId } from 'mongodb'
import { TaskStatus, TaskPriority, TaskCategory } from '../../constants/enums'

interface TaskType {
  _id?: ObjectId
  event: ObjectId
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  dueDate?: Date
  completedDate?: Date
  assignedTo: ObjectId[]
  category: TaskCategory
  dependencies?: ObjectId[]
  attachments?: {
    name: string
    url: string
    type: string
    size: number
  }[]
  progress: number
  notes?: string
  createdAt?: Date
  updatedAt?: Date
  createdBy: ObjectId
}

export default class Task {
  _id?: ObjectId
  event: ObjectId
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  dueDate?: Date
  completedDate?: Date
  assignedTo: ObjectId[]
  category: TaskCategory
  dependencies?: ObjectId[]
  attachments?: {
    name: string
    url: string
    type: string
    size: number
  }[]
  progress: number
  notes?: string
  createdAt: Date
  updatedAt: Date
  createdBy: ObjectId

  constructor({
    _id,
    event,
    title,
    description,
    status,
    priority,
    dueDate,
    completedDate,
    assignedTo,
    category,
    dependencies,
    attachments,
    progress,
    notes,
    createdAt,
    updatedAt,
    createdBy
  }: TaskType) {
    const date = new Date()
    this._id = _id
    this.event = event
    this.title = title
    this.description = description
    this.status = status
    this.priority = priority
    this.dueDate = dueDate
    this.completedDate = completedDate
    this.assignedTo = assignedTo
    this.category = category
    this.dependencies = dependencies
    this.attachments = attachments
    this.progress = progress
    this.notes = notes
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
  }
}
