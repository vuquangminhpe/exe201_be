import { ObjectId } from 'mongodb'
import { CampaignType, CampaignStatus } from '../../constants/enums'

interface CampaignData {
  _id?: ObjectId
  name: string
  description?: string
  type: CampaignType
  status: CampaignStatus
  startDate: Date
  endDate?: Date
  budget?: number
  targetAudience?: string[]
  content?: ObjectId[]
  organization: ObjectId
  createdAt?: Date
  updatedAt?: Date
}

export default class Campaign {
  _id?: ObjectId
  name: string
  description?: string
  type: CampaignType
  status: CampaignStatus
  startDate: Date
  endDate?: Date
  budget?: number
  targetAudience: string[]
  content: ObjectId[]
  organization: ObjectId
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    name,
    description,
    type,
    status,
    startDate,
    endDate,
    budget,
    targetAudience,
    content,
    organization,
    createdAt,
    updatedAt
  }: CampaignData) {
    const date = new Date()
    this._id = _id
    this.name = name
    this.description = description
    this.type = type
    this.status = status
    this.startDate = startDate
    this.endDate = endDate
    this.budget = budget
    this.targetAudience = targetAudience || []
    this.content = content || []
    this.organization = organization
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
  }
}
