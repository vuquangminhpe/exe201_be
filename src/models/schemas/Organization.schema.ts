import { ObjectId } from 'mongodb'
import { SubscriptionStatus } from '../../constants/enums'

interface OrganizationType {
  _id?: ObjectId
  name: string
  description?: string
  logo?: string
  website?: string
  industry?: string
  size?: string
  address?: {
    street: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  contact: {
    email: string
    phone: string
    fax?: string
  }
  socialMedia?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
  }
  subscription: {
    plan: string
    startDate: Date
    endDate: Date
    status: SubscriptionStatus
  }
  settings: {
    branding: {
      colors: {
        primary: string
        secondary: string
        accent: string
      }
      customDomain?: string
    }
    security: {
      ssoEnabled: boolean
      passwordPolicy: {
        minLength: number
        requireSpecialChar: boolean
        requireNumber: boolean
        requireUppercase: boolean
        expirationDays: number
      }
    }
  }
  createdAt?: Date
  updatedAt?: Date
}

export default class Organization {
  _id?: ObjectId
  name: string
  description?: string
  logo?: string
  website?: string
  industry?: string
  size?: string
  address?: {
    street: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  contact: {
    email: string
    phone: string
    fax?: string
  }
  socialMedia?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
  }
  subscription: {
    plan: string
    startDate: Date
    endDate: Date
    status: SubscriptionStatus
  }
  settings: {
    branding: {
      colors: {
        primary: string
        secondary: string
        accent: string
      }
      customDomain?: string
    }
    security: {
      ssoEnabled: boolean
      passwordPolicy: {
        minLength: number
        requireSpecialChar: boolean
        requireNumber: boolean
        requireUppercase: boolean
        expirationDays: number
      }
    }
  }
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    name,
    description,
    logo,
    website,
    industry,
    size,
    address,
    contact,
    socialMedia,
    subscription,
    settings,
    createdAt,
    updatedAt
  }: OrganizationType) {
    const date = new Date()
    this._id = _id
    this.name = name
    this.description = description
    this.logo = logo
    this.website = website
    this.industry = industry
    this.size = size
    this.address = address
    this.contact = contact
    this.socialMedia = socialMedia
    this.subscription = subscription
    this.settings = settings
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
  }
}
