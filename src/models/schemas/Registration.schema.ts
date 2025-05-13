import { ObjectId } from 'mongodb'

enum RegistrationStatus {
  Registered = 'registered',
  Confirmed = 'confirmed',
  Attended = 'attended',
  Cancelled = 'cancelled'
}

interface RegistrationType {
  _id?: ObjectId
  event: ObjectId
  user: ObjectId
  status: RegistrationStatus
  ticketType?: string
  ticketPrice?: number
  paymentId?: ObjectId
  checkInTime?: Date
  organization: ObjectId
  createdAt?: Date
  updatedAt?: Date
}

export default class Registration {
  _id?: ObjectId
  event: ObjectId
  user: ObjectId
  status: RegistrationStatus
  ticketType: string
  ticketPrice: number
  paymentId?: ObjectId
  checkInTime?: Date
  organization: ObjectId
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    event,
    user,
    status,
    ticketType,
    ticketPrice,
    paymentId,
    checkInTime,
    organization,
    createdAt,
    updatedAt
  }: RegistrationType) {
    const date = new Date()
    this._id = _id
    this.event = event
    this.user = user
    this.status = status
    this.ticketType = ticketType || 'standard'
    this.ticketPrice = ticketPrice || 0
    this.paymentId = paymentId
    this.checkInTime = checkInTime
    this.organization = organization
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
  }
}
