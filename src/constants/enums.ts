export enum UserVerifyStatus {
  Unverified,
  Verified,
  Banned
}

export enum TokenType {
  AccessToken,
  RefreshToken,
  ForgotPasswordToken,
  EmailVerifyToken
}

export enum MediaType {
  Image,
  Video,
  HLS
}

export enum MediaTypeQuery {
  Image = 'image',
  Video = 'video'
}

export enum EncodingStatus {
  Pending, //hàng đợi
  Processing, //Đang encode
  Success, // Encode thành công
  Failed // Encode thất bại
}

export enum TweetType {
  Tweet,
  Retweet,
  Comment,
  QuoteTweet
}

export enum TweetAudience {
  Everyone,
  TwitterCircle
}

export enum AccountStatus {
  FREE = 0,
  PREMIUM = 1,
  PLATINUM = 2
}

export enum ActionType {
  FRIEND_REQUEST = 'FRIEND_REQUEST',
  FRIEND_REQUEST_ACCEPTED = 'FRIEND_REQUEST_ACCEPTED',
  FRIEND_REQUEST_REJECTED = 'FRIEND_REQUEST_REJECTED',
  FOLLOW = 'FOLLOW',
  UNFOLLOW = 'UNFOLLOW',
  LIKE = 'LIKE',
  UNLIKE = 'UNLIKE',
  COMMENT = 'COMMENT',
  REPLY = 'REPLY',
  RETWEET = 'RETWEET',
  TWEET = 'TWEET',
  QUOTE = 'QUOTE',
  MENTION = 'MENTION',
  TAG = 'TAG',
  SHARE = 'SHARE',
  REPORT = 'REPORT',
  BLOCK = 'BLOCK',
  UNBLOCK = 'UNBLOCK',
  MUTE = 'MUTE',
  UNMUTE = 'UNMUTE',
  STORY = 'STORY',
  STORY_REPLY = 'STORY_REPLY',
  BOOKMARK = 'BOOKMARK',
  UNBOOKMARK = 'UNBOOKMARK'
}

export enum NotificationStatus {
  Unread,
  Read
}

// New enums for the collections

export enum UserStatus {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum RoleAction {
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
  Manage = 'manage'
}

export enum SubscriptionStatus {
  Active = 'active',
  Inactive = 'inactive',
  Expired = 'expired',
  Trial = 'trial'
}

export enum ApiKeyStatus {
  Active = 'active',
  Inactive = 'inactive',
  Revoked = 'revoked'
}

export enum EventType {
  Conference = 'conference',
  Workshop = 'workshop',
  Seminar = 'seminar',
  Exhibition = 'exhibition',
  Concert = 'concert',
  Virtual = 'virtual',
  Hybrid = 'hybrid',
  Other = 'other'
}

export enum EventStatus {
  Draft = 'draft',
  Published = 'published',
  Cancelled = 'cancelled',
  Completed = 'completed',
  Postponed = 'postponed'
}

export enum EventVisibility {
  Public = 'public',
  Private = 'private',
  Unlisted = 'unlisted'
}

export enum VirtualPlatformType {
  Zoom = 'zoom',
  Teams = 'teams',
  Custom = 'custom',
  Other = 'other'
}

export enum OrganizerRole {
  Owner = 'owner',
  Organizer = 'organizer',
  Staff = 'staff',
  Other = 'other'
}

export enum QuestionType {
  Text = 'text',
  Checkbox = 'checkbox',
  Radio = 'radio',
  Select = 'select',
  Date = 'date'
}

export enum ScheduleType {
  Session = 'session',
  Break = 'break',
  Networking = 'networking',
  Other = 'other'
}

export enum LocationType {
  Physical = 'physical',
  Virtual = 'virtual',
  Hybrid = 'hybrid'
}

export enum MaterialType {
  PDF = 'pdf',
  Presentation = 'presentation',
  Video = 'video',
  Link = 'link',
  Other = 'other'
}

export enum TaskStatus {
  Pending = 'pending',
  InProgress = 'in-progress',
  Completed = 'completed',
  Delayed = 'delayed',
  Cancelled = 'cancelled'
}

export enum TaskPriority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
  Critical = 'critical'
}

export enum TaskCategory {
  Planning = 'planning',
  Marketing = 'marketing',
  Logistics = 'logistics',
  Content = 'content',
  Technical = 'technical',
  Other = 'other'
}

export enum RiskCategory {
  Financial = 'financial',
  Operational = 'operational',
  Technical = 'technical',
  Legal = 'legal',
  Reputation = 'reputation',
  Safety = 'safety',
  Other = 'other'
}

export enum RiskProbability {
  Low = 'low',
  Medium = 'medium',
  High = 'high'
}

export enum RiskImpact {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
  Critical = 'critical'
}

export enum RiskStatus {
  Identified = 'identified',
  Assessed = 'assessed',
  Mitigated = 'mitigated',
  Accepted = 'accepted',
  Resolved = 'resolved'
}

export enum CampaignType {
  Email = 'email',
  Social = 'social',
  Ads = 'ads',
  Content = 'content',
  SEO = 'seo',
  Referral = 'referral',
  PR = 'pr',
  Other = 'other'
}

export enum CampaignStatus {
  Draft = 'draft',
  Scheduled = 'scheduled',
  Active = 'active',
  Completed = 'completed',
  Cancelled = 'cancelled'
}

export enum ContentType {
  Post = 'post',
  Email = 'email',
  Page = 'page',
  Banner = 'banner',
  Video = 'video',
  Podcast = 'podcast',
  PressRelease = 'press-release',
  Other = 'other'
}

export enum ContentStatus {
  Draft = 'draft',
  Review = 'review',
  Approved = 'approved',
  Published = 'published',
  Archived = 'archived'
}

export enum ContentFormat {
  Text = 'text',
  Image = 'image',
  Video = 'video',
  Audio = 'audio',
  Mixed = 'mixed'
}

export enum CallToActionType {
  Registration = 'registration',
  Ticket = 'ticket',
  Info = 'info',
  External = 'external'
}

export enum SocialMediaPlatform {
  Facebook = 'facebook',
  Instagram = 'instagram',
  Twitter = 'twitter',
  LinkedIn = 'linkedin',
  YouTube = 'youtube',
  TikTok = 'tiktok',
  Other = 'other'
}

export enum SocialMediaPostStatus {
  Draft = 'draft',
  Scheduled = 'scheduled',
  Published = 'published',
  Archived = 'archived'
}

export enum MediaContentType {
  Image = 'image',
  Video = 'video',
  Link = 'link'
}
