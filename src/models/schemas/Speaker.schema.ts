import { ObjectId } from 'mongodb'

interface SpeakerType {
  _id?: ObjectId
  firstName: string
  lastName: string
  email: string
  phone?: string
  organization?: string
  title?: string
  bio?: string
  profileImage?: string
  socialMedia?: {
    linkedin?: string
    twitter?: string
    facebook?: string
    instagram?: string
    website?: string
  }
  expertise: string[]
  languages: string[]
  rating?: number
  pastEvents?: ObjectId[]
  notes?: string
  isPublic: boolean
  availability?: {
    from: Date
    to: Date
  }[]
  createdAt?: Date
  updatedAt?: Date
  createdBy: ObjectId
  organization_id: ObjectId
}

export default class Speaker {
  _id?: ObjectId
  firstName: string
  lastName: string
  email: string
  phone?: string
  organization?: string
  title?: string
  bio?: string
  profileImage?: string
  socialMedia?: {
    linkedin?: string
    twitter?: string
    facebook?: string
    instagram?: string
    website?: string
  }
  expertise: string[]
  languages: string[]
  rating?: number
  pastEvents?: ObjectId[]
  notes?: string
  isPublic: boolean
  availability?: {
    from: Date
    to: Date
  }[]
  createdAt: Date
  updatedAt: Date
  createdBy: ObjectId
  organization_id: ObjectId

  constructor({
    _id,
    firstName,
    lastName,
    email,
    phone,
    organization,
    title,
    bio,
    profileImage,
    socialMedia,
    expertise,
    languages,
    rating,
    pastEvents,
    notes,
    isPublic,
    availability,
    createdAt,
    updatedAt,
    createdBy,
    organization_id
  }: SpeakerType) {
    const date = new Date()
    this._id = _id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.phone = phone
    this.organization = organization
    this.title = title
    this.bio = bio
    this.profileImage = profileImage
    this.socialMedia = socialMedia
    this.expertise = expertise
    this.languages = languages
    this.rating = rating
    this.pastEvents = pastEvents
    this.notes = notes
    this.isPublic = isPublic
    this.availability = availability
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
    this.organization_id = organization_id
  }
}
