import { ObjectId } from 'mongodb'
import { RiskCategory, RiskProbability, RiskImpact, RiskStatus } from '../../constants/enums'

interface RiskType {
  _id?: ObjectId
  event: ObjectId
  title: string
  description: string
  category: RiskCategory
  probability: RiskProbability
  impact: RiskImpact
  status: RiskStatus
  mitigationPlan?: string
  contingencyPlan?: string
  owner: ObjectId
  identifiedDate: Date
  resolvedDate?: Date
  createdAt?: Date
  updatedAt?: Date
  createdBy: ObjectId
}

export default class Risk {
  _id?: ObjectId
  event: ObjectId
  title: string
  description: string
  category: RiskCategory
  probability: RiskProbability
  impact: RiskImpact
  status: RiskStatus
  mitigationPlan?: string
  contingencyPlan?: string
  owner: ObjectId
  identifiedDate: Date
  resolvedDate?: Date
  createdAt: Date
  updatedAt: Date
  createdBy: ObjectId

  constructor({
    _id,
    event,
    title,
    description,
    category,
    probability,
    impact,
    status,
    mitigationPlan,
    contingencyPlan,
    owner,
    identifiedDate,
    resolvedDate,
    createdAt,
    updatedAt,
    createdBy
  }: RiskType) {
    const date = new Date()
    this._id = _id
    this.event = event
    this.title = title
    this.description = description
    this.category = category
    this.probability = probability
    this.impact = impact
    this.status = status
    this.mitigationPlan = mitigationPlan
    this.contingencyPlan = contingencyPlan
    this.owner = owner
    this.identifiedDate = identifiedDate
    this.resolvedDate = resolvedDate
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
  }
}
