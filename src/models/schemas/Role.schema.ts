import { ObjectId } from 'mongodb'

interface RoleType {
  _id?: ObjectId
  name: string
  description?: string
  permissions: ObjectId[]
  organization: ObjectId
  createdAt?: Date
  updatedAt?: Date
}

export default class Role {
  _id?: ObjectId
  name: string
  description: string
  permissions: ObjectId[]
  organization: ObjectId
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    name,
    description,
    permissions,
    organization,
    createdAt,
    updatedAt
  }: RoleType) {
    const date = new Date()
    this._id = _id
    this.name = name
    this.description = description || ''
    this.permissions = permissions
    this.organization = organization
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
  }
}
