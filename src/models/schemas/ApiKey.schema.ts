import { ObjectId } from 'mongodb'
import { ApiKeyStatus } from '../../constants/enums'

interface ApiKeyType {
  _id?: ObjectId
  name: string
  key: string
  secret: string
  organization: ObjectId
  status?: ApiKeyStatus
  expiresAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export default class ApiKey {
  _id?: ObjectId
  name: string
  key: string
  secret: string
  organization: ObjectId
  status: ApiKeyStatus
  expiresAt?: Date
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    name,
    key,
    secret,
    organization,
    status,
    expiresAt,
    createdAt,
    updatedAt
  }: ApiKeyType) {
    const date = new Date()
    this._id = _id
    this.name = name
    this.key = key
    this.secret = secret
    this.organization = organization
    this.status = status || ApiKeyStatus.Active
    this.expiresAt = expiresAt
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
  }
}
