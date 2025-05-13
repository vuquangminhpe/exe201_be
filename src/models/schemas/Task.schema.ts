import { ObjectId } from 'mongodb'
import { TaskStatus, TaskPriority } from '../../constants/enums'

interface TaskType {
  _id?: ObjectId
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  dueDate?: Date
  assignedTo?: ObjectId[]
  organization: ObjectId
  createdAt?: Date
  updatedAt?: Date
}

export default class Task {
  _id?: ObjectId
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  dueDate?: Date
  assignedTo: ObjectId[]
  organization: ObjectId
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    title,
    description,
    status,
    priority,
    dueDate,
    assignedTo,
    organization,
    createdAt,
    updatedAt
  }: TaskType) {
    const date = new Date()
    this._id = _id
    this.title = title
    this.description = description
    this.status = status
    this.priority = priority
    this.dueDate = dueDate
    this.assignedTo = assignedTo ?? []
    this.organization = organization
    this.createdAt = createdAt ?? date
    this.updatedAt = updatedAt ?? date
  }
}
