import { ObjectId } from 'mongodb'
import { ContentType, ContentStatus, ContentFormat } from '../../constants/enums'

interface ContentData {
  _id?: ObjectId
  title: string
  description?: string
  type: ContentType
  status: ContentStatus
  format: ContentFormat
  body?: string
  mediaUrl?: string
  author?: ObjectId
  organization: ObjectId
  publishDate?: Date
  tags?: string[]
  createdAt?: Date
  updatedAt?: Date
}

export default class Content {
  _id?: ObjectId
  title: string
  description?: string
  type: ContentType
  status: ContentStatus
  format: ContentFormat
  body?: string
  mediaUrl?: string
  author?: ObjectId
  organization: ObjectId
  publishDate?: Date
  tags?: string[]
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    title,
    description,
    type,
    status,
    format,
    body,
    mediaUrl,
    author,
    organization,
    publishDate,
    tags,
    createdAt,
    updatedAt
  }: ContentData) {
    const date = new Date()
    this._id = _id
    this.title = title
    this.description = description
    this.type = type
    this.status = status
    this.format = format
    this.body = body
    this.mediaUrl = mediaUrl
    this.author = author
    this.organization = organization
    this.publishDate = publishDate
    this.tags = tags
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
  }
}
