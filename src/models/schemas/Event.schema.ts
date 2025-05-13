import { ObjectId } from 'mongodb'
import { EventStatus, EventVisibility } from '../../constants/enums'

interface EventType {
  _id?: ObjectId
  name: string
  description: string
  status: EventStatus
  visibility: EventVisibility
  startDate: Date
  endDate: Date
  location?: string
  isVirtual?: boolean
  virtualLink?: string
  ticketTypes?: ObjectId[]
  speakers?: ObjectId[]
  capacity?: number
  organization: ObjectId
  createdAt?: Date
  updatedAt?: Date
}

export default class Event {
  _id?: ObjectId
  name: string
  description: string
  status: EventStatus
  visibility: EventVisibility
  startDate: Date
  endDate: Date
  location?: string
  isVirtual: boolean
  virtualLink?: string
  ticketTypes: ObjectId[]
  speakers: ObjectId[]
  capacity: number
  organization: ObjectId
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    name,
    description,
    status,
    visibility,
    startDate,
    endDate,
    location,
    isVirtual,
    virtualLink,
    ticketTypes,
    speakers,
    capacity,
    organization,
    createdAt,
    updatedAt
  }: EventType) {
    const date = new Date()
    this._id = _id
    this.name = name
    this.description = description
    this.status = status
    this.visibility = visibility
    this.startDate = startDate
    this.endDate = endDate
    this.location = location
    this.isVirtual = isVirtual || false
    this.virtualLink = virtualLink
    this.ticketTypes = ticketTypes || []
    this.speakers = speakers || []
    this.capacity = capacity || 0
    this.organization = organization
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
  }
}
