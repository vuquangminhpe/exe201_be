import { ObjectId } from 'mongodb'
import { UserStatus } from '../../constants/enums'

interface UserType {
  _id?: ObjectId
  email: string
  password: string
  firstName: string
  lastName: string
  phone?: string
  avatar?: string
  roles: ObjectId[]
  status: UserStatus
  lastLogin?: Date
  twoFactorEnabled: boolean
  organization: ObjectId
  preferences?: {
    language: string
    timezone: string
    notifications: {
      email: boolean
      sms: boolean
      push: boolean
    }
  }
  createdAt?: Date
  updatedAt?: Date
  createdBy?: ObjectId
}

export default class User {
  _id?: ObjectId
  email: string
  password: string
  firstName: string
  lastName: string
  phone?: string
  avatar?: string
  roles: ObjectId[]
  status: UserStatus
  lastLogin?: Date
  twoFactorEnabled: boolean
  organization: ObjectId
  preferences: {
    language: string
    timezone: string
    notifications: {
      email: boolean
      sms: boolean
      push: boolean
    }
  }
  createdAt: Date
  updatedAt: Date
  createdBy?: ObjectId

  constructor({
    _id,
    email,
    password,
    firstName,
    lastName,
    phone,
    avatar,
    roles,
    status,
    lastLogin,
    twoFactorEnabled,
    organization,
    preferences,
    createdAt,
    updatedAt,
    createdBy
  }: UserType) {
    const date = new Date()
    this._id = _id
    this.email = email
    this.password = password
    this.firstName = firstName
    this.lastName = lastName
    this.phone = phone || ''
    this.avatar = avatar || ''
    this.roles = roles
    this.status = status
    this.lastLogin = lastLogin
    this.twoFactorEnabled = twoFactorEnabled
    this.organization = organization
    this.preferences = preferences || {
      language: 'en',
      timezone: 'UTC',
      notifications: {
        email: true,
        sms: false,
        push: true
      }
    }
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
  }
}
