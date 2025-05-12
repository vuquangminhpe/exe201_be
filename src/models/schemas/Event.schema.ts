import { ObjectId } from 'mongodb'
import { EventStatus, EventVisibility, VirtualPlatformType, OrganizerRole } from '../../constants/enums'

interface EventType {
  _id?: ObjectId
  name: string
  description: string
  shortDescription?: string
  type: EventType
  category: string[]
  status: EventStatus
  visibility: EventVisibility
  capacity: number
  startDate: Date
  endDate: Date
  timezone: string
  registrationStartDate: Date
  registrationEndDate: Date
  logoUrl?: string
  bannerUrl?: string
  website?: string
  publicContactEmail?: string
  publicContactPhone?: string
  location: {
    venue: ObjectId
    address?: {
      street: string
      city: string
      state: string
      postalCode: string
      country: string
    }
    coordinates?: {
      latitude: number
      longitude: number
    }
  }
  virtualSettings?: {
    platformType: VirtualPlatformType
    platformUrl?: string
    recordingEnabled: boolean
    chatEnabled: boolean
    pollsEnabled: boolean
  }
  ticketTypes: ObjectId[]
  organizers: {
    user: ObjectId
    role: OrganizerRole
  }[]
  sponsors: ObjectId[]
  speakers: ObjectId[]
  exhibitors: ObjectId[]
  hashtags?: string[]
  settings: {
    ticketing: {
      taxIncluded: boolean
      taxPercentage?: number
      invoiceEnabled: boolean
      cancellationPolicy?: string
    }
    registration: {
      approvalRequired: boolean
      waitlistEnabled: boolean
      customQuestions: {
        question: string
        type: string
        options?: string[]
        required: boolean
      }[]
    }
    notifications: {
      confirmationEmail: boolean
      reminderEmail: boolean
      reminderDays: number[]
      followUpEmail: boolean
    }
  }
  metrics: {
    views: number
    registrations: number
    attendance: number
    revenue: number
  }
  createdAt?: Date
  updatedAt?: Date
  createdBy: ObjectId
  organization: ObjectId
}

export default class Event {
  _id?: ObjectId
  name: string
  description: string
  shortDescription?: string
  type: EventType
  category: string[]
  status: EventStatus
  visibility: EventVisibility
  capacity: number
  startDate: Date
  endDate: Date
  timezone: string
  registrationStartDate: Date
  registrationEndDate: Date
  logoUrl?: string
  bannerUrl?: string
  website?: string
  publicContactEmail?: string
  publicContactPhone?: string
  location: {
    venue: ObjectId
    address?: {
      street: string
      city: string
      state: string
      postalCode: string
      country: string
    }
    coordinates?: {
      latitude: number
      longitude: number
    }
  }
  virtualSettings?: {
    platformType: VirtualPlatformType
    platformUrl?: string
    recordingEnabled: boolean
    chatEnabled: boolean
    pollsEnabled: boolean
  }
  ticketTypes: ObjectId[]
  organizers: {
    user: ObjectId
    role: OrganizerRole
  }[]
  sponsors: ObjectId[]
  speakers: ObjectId[]
  exhibitors: ObjectId[]
  hashtags?: string[]
  settings: {
    ticketing: {
      taxIncluded: boolean
      taxPercentage?: number
      invoiceEnabled: boolean
      cancellationPolicy?: string
    }
    registration: {
      approvalRequired: boolean
      waitlistEnabled: boolean
      customQuestions: {
        question: string
        type: string
        options?: string[]
        required: boolean
      }[]
    }
    notifications: {
      confirmationEmail: boolean
      reminderEmail: boolean
      reminderDays: number[]
      followUpEmail: boolean
    }
  }
  metrics: {
    views: number
    registrations: number
    attendance: number
    revenue: number
  }
  createdAt: Date
  updatedAt: Date
  createdBy: ObjectId
  organization: ObjectId

  constructor({
    _id,
    name,
    description,
    shortDescription,
    type,
    category,
    status,
    visibility,
    capacity,
    startDate,
    endDate,
    timezone,
    registrationStartDate,
    registrationEndDate,
    logoUrl,
    bannerUrl,
    website,
    publicContactEmail,
    publicContactPhone,
    location,
    virtualSettings,
    ticketTypes,
    organizers,
    sponsors,
    speakers,
    exhibitors,
    hashtags,
    settings,
    metrics,
    createdAt,
    updatedAt,
    createdBy,
    organization
  }: EventType) {
    const date = new Date()
    this._id = _id
    this.name = name
    this.description = description
    this.shortDescription = shortDescription
    this.type = type
    this.category = category
    this.status = status
    this.visibility = visibility
    this.capacity = capacity
    this.startDate = startDate
    this.endDate = endDate
    this.timezone = timezone
    this.registrationStartDate = registrationStartDate
    this.registrationEndDate = registrationEndDate
    this.logoUrl = logoUrl
    this.bannerUrl = bannerUrl
    this.website = website
    this.publicContactEmail = publicContactEmail
    this.publicContactPhone = publicContactPhone
    this.location = location
    this.virtualSettings = virtualSettings
    this.ticketTypes = ticketTypes
    this.organizers = organizers
    this.sponsors = sponsors
    this.speakers = speakers
    this.exhibitors = exhibitors
    this.hashtags = hashtags
    this.settings = settings
    this.metrics = metrics || {
      views: 0,
      registrations: 0,
      attendance: 0,
      revenue: 0
    }
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
    this.organization = organization
  }
}
