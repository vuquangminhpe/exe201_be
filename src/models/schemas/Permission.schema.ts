import { ObjectId } from 'mongodb'
import { RoleAction } from '../../constants/enums'

interface PermissionType {
  _id?: ObjectId
  name: string
  description?: string
  module: string
  action: RoleAction
  createdAt?: Date
  updatedAt?: Date
}

export default class Permission {
  _id?: ObjectId
  name: string
  description: string
  module: string
  action: RoleAction
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    name,
    description,
    module,
    action,
    createdAt,
    updatedAt
  }: PermissionType) {
    const date = new Date()
    this._id = _id
    this.name = name
    this.description = description || `${action} permission for ${module}`
    this.module = module
    this.action = action
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
  }
}
