import { ObjectId } from 'mongodb'

enum SessionTypes {
  Presentation = 'presentation',
  Workshop = 'workshop',
  Panel = 'panel',
  Networking = 'networking',
  Break = 'break'
}

interface SessionType {
  _id?: ObjectId
  event: ObjectId
  title: string
  description?: string
  type: SessionTypes
  speakers?: ObjectId[]
  startTime: Date
  endTime: Date
  location?: string
  capacity?: number
  materials?: string[]
  organization: ObjectId
  createdAt?: Date
  updatedAt?: Date
}

export default class Session {
  _id?: ObjectId
  event: ObjectId
  title: string
  description: string
  type: SessionTypes
  speakers: ObjectId[]
  startTime: Date
  endTime: Date
  location: string
  capacity: number
  materials: string[]
  organization: ObjectId
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    event,
    title,
    description,
    type,
    speakers,
    startTime,
    endTime,
    location,
    capacity,
    materials,
    organization,
    createdAt,
    updatedAt
  }: SessionType) {
    const date = new Date()
    this._id = _id
    this.event = event
    this.title = title
    this.description = description || ''
    this.type = type
    this.speakers = speakers || []
    this.startTime = startTime
    this.endTime = endTime
    this.location = location || ''
    this.capacity = capacity || 0
    this.materials = materials || []
    this.organization = organization
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
  }
}
