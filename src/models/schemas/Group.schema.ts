import { ObjectId } from 'mongodb'

interface GroupMemberType {
  user: ObjectId
  role: string
}

interface GroupType {
  _id?: ObjectId
  name: string
  description?: string
  members?: GroupMemberType[]
  isPublic?: boolean
  organization: ObjectId
  createdAt?: Date
  updatedAt?: Date
}

export default class Group {
  _id?: ObjectId
  name: string
  description: string
  members: GroupMemberType[]
  isPublic: boolean
  organization: ObjectId
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    name,
    description,
    members,
    isPublic,
    organization,
    createdAt,
    updatedAt
  }: GroupType) {
    const date = new Date()
    this._id = _id
    this.name = name
    this.description = description ?? ''
    this.members = members ?? []
    this.isPublic = isPublic ?? true
    this.organization = organization
    this.createdAt = createdAt ?? date
    this.updatedAt = updatedAt ?? date
  }
}
