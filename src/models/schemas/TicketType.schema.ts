import { ObjectId } from 'mongodb'

interface TicketTypeData {
  _id?: ObjectId
  event: ObjectId
  name: string
  description?: string
  price: number
  currency: string
  quantity: number
  quantitySold?: number
  isLimited: boolean
  isFree: boolean
  startSaleDate: Date
  endSaleDate: Date
  isPublic: boolean
  maxPerOrder?: number
  minPerOrder?: number
  isRefundable: boolean
  refundPolicy?: string
  benefits?: string[]
  metadata?: {
    [key: string]: any
  }
  createdAt?: Date
  updatedAt?: Date
  createdBy: ObjectId
}

export default class TicketType {
  _id?: ObjectId
  event: ObjectId
  name: string
  description?: string
  price: number
  currency: string
  quantity: number
  quantitySold: number
  isLimited: boolean
  isFree: boolean
  startSaleDate: Date
  endSaleDate: Date
  isPublic: boolean
  maxPerOrder?: number
  minPerOrder?: number
  isRefundable: boolean
  refundPolicy?: string
  benefits?: string[]
  metadata?: {
    [key: string]: any
  }
  createdAt: Date
  updatedAt: Date
  createdBy: ObjectId

  constructor({
    _id,
    event,
    name,
    description,
    price,
    currency,
    quantity,
    quantitySold,
    isLimited,
    isFree,
    startSaleDate,
    endSaleDate,
    isPublic,
    maxPerOrder,
    minPerOrder,
    isRefundable,
    refundPolicy,
    benefits,
    metadata,
    createdAt,
    updatedAt,
    createdBy
  }: TicketTypeData) {
    const date = new Date()
    this._id = _id
    this.event = event
    this.name = name
    this.description = description
    this.price = price
    this.currency = currency
    this.quantity = quantity
    this.quantitySold = quantitySold || 0
    this.isLimited = isLimited
    this.isFree = isFree
    this.startSaleDate = startSaleDate
    this.endSaleDate = endSaleDate
    this.isPublic = isPublic
    this.maxPerOrder = maxPerOrder
    this.minPerOrder = minPerOrder
    this.isRefundable = isRefundable
    this.refundPolicy = refundPolicy
    this.benefits = benefits
    this.metadata = metadata
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
  }
}
