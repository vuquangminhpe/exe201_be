import { ObjectId } from 'mongodb'

interface RoleType {
  _id?: ObjectId
  name: string
  description: string
  permissions: ObjectId[]
  createdAt?: Date
  updatedAt?: Date
  createdBy: ObjectId
  organization: ObjectId
}

export default class Role {
  _id?: ObjectId
  name: string
  description: string
  permissions: ObjectId[]
  createdAt: Date
  updatedAt: Date
  createdBy: ObjectId
  organization: ObjectId

  constructor({
    _id,
    name,
    description,
    permissions,
    createdAt,
    updatedAt,
    createdBy,
    organization
  }: RoleType) {
    const date = new Date()
    this._id = _id
    this.name = name
    this.description = description
    this.permissions = permissions
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
    this.organization = organization
  }
}
