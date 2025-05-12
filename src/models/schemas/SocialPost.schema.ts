import { ObjectId } from 'mongodb'
import { SocialMediaPlatform, SocialMediaPostStatus, MediaContentType } from '../../constants/enums'

interface SocialPostData {
  _id?: ObjectId
  campaign?: ObjectId
  event?: ObjectId
  content: string
  media?: {
    type: MediaContentType
    url: string
  }[]
  platform: SocialMediaPlatform
  status: SocialMediaPostStatus
  scheduledAt?: Date
  publishedAt?: Date
  hashtags?: string[]
  isPromoted: boolean
  promotionDetails?: {
    budget: number
    startDate: Date
    endDate: Date
    audience: {
      locations?: string[]
      ageRange?: string[]
      interests?: string[]
    }
  }
  metrics?: {
    impressions: number
    engagements: number
    clicks: number
    shares: number
  }
  createdAt?: Date
  updatedAt?: Date
  createdBy: ObjectId
}

export default class SocialPost {
  _id?: ObjectId
  campaign?: ObjectId
  event?: ObjectId
  content: string
  media?: {
    type: MediaContentType
    url: string
  }[]
  platform: SocialMediaPlatform
  status: SocialMediaPostStatus
  scheduledAt?: Date
  publishedAt?: Date
  hashtags?: string[]
  isPromoted: boolean
  promotionDetails?: {
    budget: number
    startDate: Date
    endDate: Date
    audience: {
      locations?: string[]
      ageRange?: string[]
      interests?: string[]
    }
  }
  metrics: {
    impressions: number
    engagements: number
    clicks: number
    shares: number
  }
  createdAt: Date
  updatedAt: Date
  createdBy: ObjectId

  constructor({
    _id,
    campaign,
    event,
    content,
    media,
    platform,
    status,
    scheduledAt,
    publishedAt,
    hashtags,
    isPromoted,
    promotionDetails,
    metrics,
    createdAt,
    updatedAt,
    createdBy
  }: SocialPostData) {
    const date = new Date()
    this._id = _id
    this.campaign = campaign
    this.event = event
    this.content = content
    this.media = media
    this.platform = platform
    this.status = status
    this.scheduledAt = scheduledAt
    this.publishedAt = publishedAt
    this.hashtags = hashtags
    this.isPromoted = isPromoted
    this.promotionDetails = promotionDetails
    this.metrics = metrics || {
      impressions: 0,
      engagements: 0,
      clicks: 0,
      shares: 0
    }
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
  }
}
