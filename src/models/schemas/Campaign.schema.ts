import { ObjectId } from 'mongodb'
import { CampaignType, CampaignStatus, SocialMediaPlatform } from '../../constants/enums'

interface CampaignData {
  _id?: ObjectId
  event: ObjectId
  name: string
  description?: string
  type: CampaignType
  status: CampaignStatus
  startDate: Date
  endDate?: Date
  budget?: number
  currency?: string
  targetAudience: {
    demographics?: {
      ageRange?: string[]
      genders?: string[]
      locations?: string[]
      interests?: string[]
    }
    segments?: ObjectId[]
  }
  channels: SocialMediaPlatform[]
  content: ObjectId[]
  metrics?: {
    impressions?: number
    clicks?: number
    conversions?: number
    ctr?: number
    conversionRate?: number
    cost?: number
    revenue?: number
    roi?: number
  }
  tags?: string[]
  createdAt?: Date
  updatedAt?: Date
  createdBy: ObjectId
}

export default class Campaign {
  _id?: ObjectId
  event: ObjectId
  name: string
  description?: string
  type: CampaignType
  status: CampaignStatus
  startDate: Date
  endDate?: Date
  budget?: number
  currency?: string
  targetAudience: {
    demographics?: {
      ageRange?: string[]
      genders?: string[]
      locations?: string[]
      interests?: string[]
    }
    segments?: ObjectId[]
  }
  channels: SocialMediaPlatform[]
  content: ObjectId[]
  metrics: {
    impressions: number
    clicks: number
    conversions: number
    ctr: number
    conversionRate: number
    cost: number
    revenue: number
    roi: number
  }
  tags?: string[]
  createdAt: Date
  updatedAt: Date
  createdBy: ObjectId

  constructor({
    _id,
    event,
    name,
    description,
    type,
    status,
    startDate,
    endDate,
    budget,
    currency,
    targetAudience,
    channels,
    content,
    metrics,
    tags,
    createdAt,
    updatedAt,
    createdBy
  }: CampaignData) {
    const date = new Date()
    this._id = _id
    this.event = event
    this.name = name
    this.description = description
    this.type = type
    this.status = status
    this.startDate = startDate
    this.endDate = endDate
    this.budget = budget
    this.currency = currency
    this.targetAudience = targetAudience
    this.channels = channels
    this.content = content
    // Create default metrics with all required properties
    const defaultMetrics = {
      impressions: 0,
      clicks: 0,
      conversions: 0,
      ctr: 0,
      conversionRate: 0,
      cost: 0,
      revenue: 0,
      roi: 0
    }
    
    // Merge provided metrics with defaults to ensure all required properties exist
    this.metrics = metrics ? {
      impressions: metrics.impressions ?? defaultMetrics.impressions,
      clicks: metrics.clicks ?? defaultMetrics.clicks,
      conversions: metrics.conversions ?? defaultMetrics.conversions,
      ctr: metrics.ctr ?? defaultMetrics.ctr,
      conversionRate: metrics.conversionRate ?? defaultMetrics.conversionRate,
      cost: metrics.cost ?? defaultMetrics.cost,
      revenue: metrics.revenue ?? defaultMetrics.revenue,
      roi: metrics.roi ?? defaultMetrics.roi
    } : defaultMetrics
    this.tags = tags
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
  }
}
