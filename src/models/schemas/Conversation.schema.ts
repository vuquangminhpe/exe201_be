import { ObjectId } from 'mongodb'

interface MessageType {
  sender: ObjectId
  content: string
  timestamp: Date
  read: boolean
  attachments?: string[]
}

interface ConversationType {
  _id?: ObjectId
  participants: ObjectId[]
  messages: MessageType[]
  lastMessage?: MessageType
  title?: string
  isGroup: boolean
  groupAdmin?: ObjectId
  createdAt?: Date
  updatedAt?: Date
  createdBy: ObjectId
  organization: ObjectId
}

export default class Conversation {
  _id?: ObjectId
  participants: ObjectId[]
  messages: MessageType[]
  lastMessage?: MessageType
  title: string
  isGroup: boolean
  groupAdmin?: ObjectId
  createdAt: Date
  updatedAt: Date
  createdBy: ObjectId
  organization: ObjectId

  constructor({
    _id,
    participants,
    messages,
    lastMessage,
    title,
    isGroup,
    groupAdmin,
    createdAt,
    updatedAt,
    createdBy,
    organization
  }: ConversationType) {
    const date = new Date()
    this._id = _id
    this.participants = participants
    this.messages = messages || []
    this.lastMessage = lastMessage
    this.title = title || ''
    this.isGroup = isGroup
    this.groupAdmin = isGroup ? groupAdmin : undefined
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
    this.organization = organization
  }
}
