import { ObjectId } from 'mongodb'

interface GroupMemberType {
  user: ObjectId
  role: string
  joinedAt: Date
}

interface GroupType {
  _id?: ObjectId
  name: string
  description: string
  avatar?: string
  members: GroupMemberType[]
  events?: ObjectId[]
  conversations?: ObjectId[]
  isPublic: boolean
  tags?: string[]
  settings?: {
    joinApproval: boolean
    memberPosting: boolean
    notifications: {
      newMembers: boolean
      newPosts: boolean
      events: boolean
    }
  }
  createdAt?: Date
  updatedAt?: Date
  createdBy: ObjectId
  organization: ObjectId
}

export default class Group {
  _id?: ObjectId
  name: string
  description: string
  avatar: string
  members: GroupMemberType[]
  events: ObjectId[]
  conversations: ObjectId[]
  isPublic: boolean
  tags: string[]
  settings: {
    joinApproval: boolean
    memberPosting: boolean
    notifications: {
      newMembers: boolean
      newPosts: boolean
      events: boolean
    }
  }
  createdAt: Date
  updatedAt: Date
  createdBy: ObjectId
  organization: ObjectId

  constructor({
    _id,
    name,
    description,
    avatar,
    members,
    events,
    conversations,
    isPublic,
    tags,
    settings,
    createdAt,
    updatedAt,
    createdBy,
    organization
  }: GroupType) {
    const date = new Date()
    this._id = _id
    this.name = name
    this.description = description
    this.avatar = avatar || ''
    this.members = members
    this.events = events || []
    this.conversations = conversations || []
    this.isPublic = isPublic
    this.tags = tags || []
    this.settings = settings || {
      joinApproval: true,
      memberPosting: true,
      notifications: {
        newMembers: true,
        newPosts: true,
        events: true
      }
    }
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
    this.organization = organization
  }
}
