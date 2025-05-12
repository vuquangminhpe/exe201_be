import { ObjectId } from 'mongodb'
import { UserStatus } from '../../constants/enums'
interface AddressType {
  street?: string
  city?: string
  state?: string
  postalCode?: string
  country?: string
}
interface SocialProfileType {
  linkedin?: string
  twitter?: string
  facebook?: string
  instagram?: string
  other?: string
}
interface ContactType {
  _id?: ObjectId
  firstName: string
  lastName: string
  email: string
  phone?: string
  organization?: string
  position?: string
  notes?: string
  tags?: string[]
  type?: string
  status: UserStatus
  address?: AddressType
  socialProfiles?: SocialProfileType
  
  events?: ObjectId[]
  createdAt?: Date
  updatedAt?: Date
  createdBy: ObjectId
  organization_id: ObjectId
}

export default class Contact {
  _id?: ObjectId
  firstName: string
  lastName: string
  email: string
  phone: string
  organization: string
  position: string
  notes: string
  tags: string[]
  type: string
  status: UserStatus
  address?: AddressType   
  socialProfiles?: SocialProfileType
 
  events: ObjectId[]
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
    position,
    notes,
    tags,
    type,
    status,
    address,
    socialProfiles,
    events,
    createdAt,
    updatedAt,
    createdBy,
    organization_id
  }: ContactType) {
    const date = new Date()
    this._id = _id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.phone = phone || ''
    this.organization = organization || ''
    this.position = position || ''
    this.notes = notes || ''
    this.tags = tags || []
    this.type = type || 'general'
    this.status = status
    this.address = address 
    this.socialProfiles = socialProfiles  
    this.events = events || []
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
    this.createdBy = createdBy
    this.organization_id = organization_id
  }
}
