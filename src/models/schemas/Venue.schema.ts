import { ObjectId } from 'mongodb'

interface VenueType {
  _id?: ObjectId
  name: string
  description?: string
  address?: string
  capacity?: number
  contactEmail?: string
  contactPhone?: string
  isActive?: boolean
  organization: ObjectId
  createdAt?: Date
  updatedAt?: Date
}

export default class Venue {
  _id?: ObjectId
  name: string
  description: string
  address: string
  capacity: number
  contactEmail: string
  contactPhone: string
  isActive: boolean
  organization: ObjectId
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    name,
    description,
    address,
    capacity,
    contactEmail,
    contactPhone,
    isActive,
    organization,
    createdAt,
    updatedAt
  }: VenueType) {
    const date = new Date()
    this._id = _id
    this.name = name
    this.description = description ?? ''
    this.address = address ?? ''
    this.capacity = capacity ?? 0
    this.contactEmail = contactEmail ?? ''
    this.contactPhone = contactPhone ?? ''
    this.isActive = isActive ?? true
    this.organization = organization
    this.createdAt = createdAt ?? date
    this.updatedAt = updatedAt ?? date
  }
}
