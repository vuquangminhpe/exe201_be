import { ObjectId } from 'mongodb'

enum PaymentStatus {
  Pending = 'pending',
  Completed = 'completed',
  Failed = 'failed',
  Refunded = 'refunded',
  Cancelled = 'cancelled'
}

enum PaymentMethod {
  CreditCard = 'credit_card',
  BankTransfer = 'bank_transfer',
  PayPal = 'paypal',
  Other = 'other'
}

interface PaymentType {
  _id?: ObjectId
  amount: number
  currency: string
  description?: string
  status: PaymentStatus
  method: PaymentMethod
  user: ObjectId
  organization: ObjectId
  transactionDate?: Date
  isRefunded?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export default class Payment {
  _id?: ObjectId
  amount: number
  currency: string
  description: string
  status: PaymentStatus
  method: PaymentMethod
  user: ObjectId
  organization: ObjectId
  transactionDate: Date
  isRefunded: boolean
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    amount,
    currency,
    description,
    status,
    method,
    user,
    organization,
    transactionDate,
    isRefunded,
    createdAt,
    updatedAt
  }: PaymentType) {
    const date = new Date()
    this._id = _id
    this.amount = amount
    this.currency = currency
    this.description = description || ''
    this.status = status
    this.method = method
    this.user = user
    this.organization = organization
    this.transactionDate = transactionDate || date
    this.isRefunded = isRefunded || false
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
  }
}
