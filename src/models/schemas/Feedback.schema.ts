import { ObjectId } from 'mongodb'

interface FeedbackType {
  _id?: ObjectId
  event: ObjectId
  user: ObjectId
  rating: number
  comment?: string
  questions?: {
    question: string
    answer: string
  }[]
  isAnonymous?: boolean
  organization: ObjectId
  createdAt?: Date
  updatedAt?: Date
}

export default class Feedback {
  _id?: ObjectId
  event: ObjectId
  user: ObjectId
  rating: number
  comment: string
  questions: {
    question: string
    answer: string
  }[]
  isAnonymous: boolean
  organization: ObjectId
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    event,
    user,
    rating,
    comment,
    questions,
    isAnonymous,
    organization,
    createdAt,
    updatedAt
  }: FeedbackType) {
    const date = new Date()
    this._id = _id
    this.event = event
    this.user = user
    this.rating = rating
    this.comment = comment || ''
    this.questions = questions || []
    this.isAnonymous = isAnonymous || false
    this.organization = organization
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
  }
}
