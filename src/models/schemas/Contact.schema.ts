import { ObjectId } from 'mongodb'
import { UserStatus } from '../../constants/enums'

interface ContactType {
  _id?: ObjectId
  name: string
  email: string
  phone?: string
  company?: string
  status?: UserStatus
  organization_id: ObjectId
  createdAt?: Date
  updatedAt?: Date
}

export default class Contact {
  _id?: ObjectId
  name: string
  email: string
  phone: string
  company: string
  status: UserStatus
  organization_id: ObjectId
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    name,
    email,
    phone,
    company,
    status,
    organization_id,
    createdAt,
    updatedAt
  }: ContactType) {
    const date = new Date()
    this._id = _id
    this.name = name
    this.email = email
    this.phone = phone || ''
    this.company = company || ''
    this.status = status || UserStatus.Active
    this.organization_id = organization_id
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
  }
}
