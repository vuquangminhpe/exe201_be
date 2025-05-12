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
  DebitCard = 'debit_card',
  BankTransfer = 'bank_transfer',
  PayPal = 'paypal',
  Cash = 'cash',
  Other = 'other'
}

interface PaymentType {
  _id?: ObjectId
  amount: number
  currency: string
  description: string
  referenceId?: string
  status: PaymentStatus
  method: PaymentMethod
  user: ObjectId
  event?: ObjectId
  ticketType?: ObjectId
  transactionDate: Date
  transactionId?: string
  gateway?: string
  gatewayFee?: number
  metadata?: Record<string, any>
  receiptUrl?: string
  refundAmount?: number
  refundDate?: Date
  refundReason?: string
  notes?: string
  createdAt?: Date
  updatedAt?: Date
  createdBy: ObjectId
  organization: ObjectId
}

export default class Payment {
  _id?: ObjectId
  amount: number
  currency: string
  description: string
  referenceId: string
  status: PaymentStatus
  method: PaymentMethod
  user: ObjectId
  event?: ObjectId
  ticketType?: ObjectId
  transactionDate: Date
  transactionId: string
  gateway: string
  gatewayFee: number
  metadata: Record<string, any>
  receiptUrl: string
  refundAmount: number
  refundDate?: Date
  refundReason: string
  notes: string
  createdAt: Date
  updatedAt: Date
  createdBy: ObjectId
  organization: ObjectId

  constructor({
    _id,
    amount,
    currency,
    description,
    referenceId,
    status,
    method,
    user,
    event,
    ticketType,
    transactionDate,
    transactionId,
    gateway,
    gatewayFee,
    metadata,
    receiptUrl,
    refundAmount,
    refundDate,
    refundReason,
    notes,
    createdAt,
    updatedAt,
    createdBy,
    organization
  }: PaymentType) {
    const date = new Date()
    this._id = _id
    this.amount = amount
    this.currency = currency
    this.description = description
    this.referenceId = referenceId || ''
    this.status = status
    this.method = method
    this.user = user
    this.event = event
    this.ticketType = ticketType
    this.transactionDate = transactionDate || date
    this.transactionId = transactionId || ''
    this.gateway = gateway || ''
    this.gatewayFee = gatewayFee || 0
    this.metadata = metadata || {}
    this.receiptUrl = receiptUrl || ''
    this.refundAmount = refundAmount || 0
    this.refundDate = refundDate
    this.refundReason = refundReason || ''
    this.notes = notes || ''
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
    this.organization = organization
  }
}
