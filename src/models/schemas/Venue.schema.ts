import { ObjectId } from 'mongodb'

interface VenueType {
  _id?: ObjectId
  name: string
  description?: string
  address: {
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
  capacity?: number
  contactName?: string
  contactEmail?: string
  contactPhone?: string
  website?: string
  amenities?: string[]
  images?: string[]
  rooms?: ObjectId[]
  isActive: boolean
  notes?: string
  createdAt?: Date
  updatedAt?: Date
  createdBy: ObjectId
  organization: ObjectId
}

export default class Venue {
  _id?: ObjectId
  name: string
  description?: string
  address: {
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
  capacity?: number
  contactName?: string
  contactEmail?: string
  contactPhone?: string
  website?: string
  amenities?: string[]
  images?: string[]
  rooms?: ObjectId[]
  isActive: boolean
  notes?: string
  createdAt: Date
  updatedAt: Date
  createdBy: ObjectId
  organization: ObjectId

  constructor({
    _id,
    name,
    description,
    address,
    coordinates,
    capacity,
    contactName,
    contactEmail,
    contactPhone,
    website,
    amenities,
    images,
    rooms,
    isActive,
    notes,
    createdAt,
    updatedAt,
    createdBy,
    organization
  }: VenueType) {
    const date = new Date()
    this._id = _id
    this.name = name
    this.description = description
    this.address = address
    this.coordinates = coordinates
    this.capacity = capacity
    this.contactName = contactName
    this.contactEmail = contactEmail
    this.contactPhone = contactPhone
    this.website = website
    this.amenities = amenities
    this.images = images
    this.rooms = rooms
    this.isActive = isActive
    this.notes = notes
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
    this.organization = organization
  }
}
