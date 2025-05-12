import { ObjectId } from 'mongodb'
import { ScheduleType, LocationType, MaterialType } from '../../constants/enums'

interface ScheduleData {
  _id?: ObjectId
  event: ObjectId
  title: string
  description?: string
  type: ScheduleType
  startTime: Date
  endTime: Date
  duration: number
  location: {
    type: LocationType
    venue?: ObjectId
    room?: ObjectId
    virtualUrl?: string
  }
  speakers: ObjectId[]
  capacity?: number
  tags?: string[]
  materials: {
    title: string
    type: MaterialType
    url: string
  }[]
  isPublished: boolean
  isHighlighted: boolean
  requiresRegistration: boolean
  createdAt?: Date
  updatedAt?: Date
  createdBy: ObjectId
}

export default class Schedule {
  _id?: ObjectId
  event: ObjectId
  title: string
  description?: string
  type: ScheduleType
  startTime: Date
  endTime: Date
  duration: number
  location: {
    type: LocationType
    venue?: ObjectId
    room?: ObjectId
    virtualUrl?: string
  }
  speakers: ObjectId[]
  capacity?: number
  tags?: string[]
  materials: {
    title: string
    type: MaterialType
    url: string
  }[]
  isPublished: boolean
  isHighlighted: boolean
  requiresRegistration: boolean
  createdAt: Date
  updatedAt: Date
  createdBy: ObjectId

  constructor({
    _id,
    event,
    title,
    description,
    type,
    startTime,
    endTime,
    duration,
    location,
    speakers,
    capacity,
    tags,
    materials,
    isPublished,
    isHighlighted,
    requiresRegistration,
    createdAt,
    updatedAt,
    createdBy
  }: ScheduleData) {
    const date = new Date()
    this._id = _id
    this.event = event
    this.title = title
    this.description = description
    this.type = type
    this.startTime = startTime
    this.endTime = endTime
    this.duration = duration
    this.location = location
    this.speakers = speakers
    this.capacity = capacity
    this.tags = tags
    this.materials = materials || []
    this.isPublished = isPublished
    this.isHighlighted = isHighlighted
    this.requiresRegistration = requiresRegistration
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
  }
}
