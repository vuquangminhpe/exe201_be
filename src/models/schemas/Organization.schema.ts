import { ObjectId } from 'mongodb'
import { SubscriptionStatus } from '../../constants/enums'

interface OrganizationType {
  _id?: ObjectId
  name: string
  description?: string
  logo?: string
  contactEmail: string
  contactPhone?: string
  subscriptionPlan?: string
  subscriptionStatus?: SubscriptionStatus
  createdAt?: Date
  updatedAt?: Date
}

export default class Organization {
  _id?: ObjectId
  name: string
  description?: string
  logo?: string
  contactEmail: string
  contactPhone?: string
  subscriptionPlan?: string
  subscriptionStatus?: SubscriptionStatus
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    name,
    description,
    logo,
    contactEmail,
    contactPhone,
    subscriptionPlan,
    subscriptionStatus,
    createdAt,
    updatedAt
  }: OrganizationType) {
    const date = new Date()
    this._id = _id
    this.name = name
    this.description = description
    this.logo = logo
    this.contactEmail = contactEmail
    this.contactPhone = contactPhone || ''
    this.subscriptionPlan = subscriptionPlan || 'free'
    this.subscriptionStatus = subscriptionStatus || SubscriptionStatus.Active
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
  }
}
