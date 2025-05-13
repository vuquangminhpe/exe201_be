import { ObjectId } from 'mongodb'
import { UserStatus } from '../../constants/enums'

interface UserType {
  _id?: ObjectId
  email: string
  password: string
  name: string
  phone?: string
  avatar?: string
  roles: ObjectId[]
  status: UserStatus
  organization: ObjectId
  language?: string
  createdAt?: Date
  updatedAt?: Date
}

export default class User {
  _id?: ObjectId
  email: string
  password: string
  name: string
  phone?: string
  avatar?: string
  roles: ObjectId[]
  status: UserStatus
  organization: ObjectId
  language: string
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    email,
    password,
    name,
    phone,
    avatar,
    roles,
    status,
    organization,
    language,
    createdAt,
    updatedAt
  }: UserType) {
    const date = new Date()
    this._id = _id
    this.email = email
    this.password = password
    this.name = name
    this.phone = phone || ''
    this.avatar = avatar || ''
    this.roles = roles
    this.status = status
    this.organization = organization
    this.language = language || 'en'
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
  }
}
