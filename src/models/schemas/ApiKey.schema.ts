import { ObjectId } from 'mongodb'
import { ApiKeyStatus } from '../../constants/enums'

interface ApiKeyType {
  _id?: ObjectId
  name: string
  key: string
  secret: string
  organization: ObjectId
  permissions: ObjectId[]
  status: ApiKeyStatus
  lastUsed?: Date
  ipRestrictions?: string[]
  createdAt?: Date
  updatedAt?: Date
  createdBy: ObjectId
  expiresAt?: Date
}

export default class ApiKey {
  _id?: ObjectId
  name: string
  key: string
  secret: string
  organization: ObjectId
  permissions: ObjectId[]
  status: ApiKeyStatus
  lastUsed?: Date
  ipRestrictions?: string[]
  createdAt: Date
  updatedAt: Date
  createdBy: ObjectId
  expiresAt?: Date

  constructor({
    _id,
    name,
    key,
    secret,
    organization,
    permissions,
    status,
    lastUsed,
    ipRestrictions,
    createdAt,
    updatedAt,
    createdBy,
    expiresAt
  }: ApiKeyType) {
    const date = new Date()
    this._id = _id
    this.name = name
    this.key = key
    this.secret = secret
    this.organization = organization
    this.permissions = permissions
    this.status = status
    this.lastUsed = lastUsed
    this.ipRestrictions = ipRestrictions
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
    this.expiresAt = expiresAt
  }
}

