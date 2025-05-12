import { ObjectId } from 'mongodb'
import { ContentType, ContentStatus, ContentFormat, CallToActionType } from '../../constants/enums'

interface ContentData {
  _id?: ObjectId
  title: string
  description?: string
  type: ContentType
  status: ContentStatus
  format: ContentFormat
  body?: string
  imageUrl?: string
  videoUrl?: string
  audioUrl?: string
  callToAction?: {
    text: string
    url: string
    type: CallToActionType
  }
  campaign?: ObjectId
  event?: ObjectId
  author: ObjectId
  publishDate?: Date
  expiryDate?: Date
  tags?: string[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
    ogImage?: string
  }
  metrics?: {
    views: number
    shares: number
    likes: number
    comments: number
  }
  createdAt?: Date
  updatedAt?: Date
  createdBy: ObjectId
}

export default class Content {
  _id?: ObjectId
  title: string
  description?: string
  type: ContentType
  status: ContentStatus
  format: ContentFormat
  body?: string
  imageUrl?: string
  videoUrl?: string
  audioUrl?: string
  callToAction?: {
    text: string
    url: string
    type: CallToActionType
  }
  campaign?: ObjectId
  event?: ObjectId
  author: ObjectId
  publishDate?: Date
  expiryDate?: Date
  tags?: string[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
    ogImage?: string
  }
  metrics: {
    views: number
    shares: number
    likes: number
    comments: number
  }
  createdAt: Date
  updatedAt: Date
  createdBy: ObjectId

  constructor({
    _id,
    title,
    description,
    type,
    status,
    format,
    body,
    imageUrl,
    videoUrl,
    audioUrl,
    callToAction,
    campaign,
    event,
    author,
    publishDate,
    expiryDate,
    tags,
    seo,
    metrics,
    createdAt,
    updatedAt,
    createdBy
  }: ContentData) {
    const date = new Date()
    this._id = _id
    this.title = title
    this.description = description
    this.type = type
    this.status = status
    this.format = format
    this.body = body
    this.imageUrl = imageUrl
    this.videoUrl = videoUrl
    this.audioUrl = audioUrl
    this.callToAction = callToAction
    this.campaign = campaign
    this.event = event
    this.author = author
    this.publishDate = publishDate
    this.expiryDate = expiryDate
    this.tags = tags
    this.seo = seo
    this.metrics = metrics || {
      views: 0,
      shares: 0,
      likes: 0,
      comments: 0
    }
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
  }
}
