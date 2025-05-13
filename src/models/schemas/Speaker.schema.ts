import { ObjectId } from 'mongodb'

interface SpeakerType {
  _id?: ObjectId
  name: string
  email: string
  bio?: string
  profileImage?: string
  expertise?: string[]
  organization_id: ObjectId
  createdAt?: Date
  updatedAt?: Date
}

export default class Speaker {
  _id?: ObjectId
  name: string
  email: string
  bio?: string
  profileImage?: string
  expertise: string[]
  organization_id: ObjectId
  createdAt: Date
  updatedAt: Date

  constructor({
    _id,
    name,
    email,
    bio,
    profileImage,
    expertise,
    organization_id,
    createdAt,
    updatedAt
  }: SpeakerType) {
    const date = new Date()
    this._id = _id
    this.name = name
    this.email = email
    this.bio = bio
    this.profileImage = profileImage
    this.expertise = expertise || []
    this.organization_id = organization_id
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
  }
}
