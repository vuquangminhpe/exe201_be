import { MediaTypeQuery } from './enums'

export const USERS_MESSAGES = {
  VALIDATION_ERROR: 'Validation error',
  INVALID_USER_ID: 'Invalid user id',
  NAME_IS_REQUIRED: 'Name is required',
  NAME_MUST_BE_A_STRING: 'Name must be a string',
  NAME_LENGTH_MUST_BE_FROM_1_TO_100: 'Name must be from 1 to 100',
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  EMAIL_IS_REQUIRED: 'Email is required',
  EMAIL_IS_VALID: 'Email is valid',
  PASSWORD_IS_REQUIRED: 'Password is required',
  PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50: 'Password must be from 6 to 50',
  PASSWORD_MUST_BE_A_STRING: 'Password must be a string',
  PASSWORD_MUST_BE_STRONG:
    'Password must 6-50 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 symbols',
  CONFIRM_PASSWORD_IS_REQUIRED: 'Confirm password is required',
  CONFIRM_PASSWORD_MUST_BE_A_STRING: 'Confirm password must be a string',
  CONFIRM_PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50: 'Confirm password  must be from 6 to 50',
  CONFIRM_PASSWORD_MUST_BE_STRONG:
    'Confirm password must 6-50 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 symbols',
  CONFIRM_PASSWORD_MUST_BE_THE_SAME_AS_PASSWORD: 'Confirm password must be the same as password',
  DATE_OF_BIRTH_MUST_BE_ISO8601: 'Date of birth must be ISO8601',
  EMAIL_NOT_FOUND: 'Email not found',
  PASSWORD_IS_WRONG: 'Password is wrong',
  LOGIN_SUCCESS: 'Login success',
  REGISTER_SUCCESS: 'Register success',
  USER_NOT_FOUND: 'User not found',
  ACCESS_TOKEN_IS_VALID: 'Access token is valid',
  ACCESS_TOKEN_IS_REQUIRED: 'Access token is required',
  REFRESH_TOKEN_IS_REQUIRED: 'Refresh token is required',
  REFRESH_TOKEN_IS_VALID: 'Refresh token is valid',
  USED_REFRESH_TOKEN_OR_NOT_EXITS: 'Used refresh token or not exits',
  LOGOUT_SUCCESS: 'Logout success',
  EMAIL_ALREADY_VERIFIED_BEFORE: 'Email already verified before',
  EMAIL_VERIFY_SUCCESS: 'Email verify success',
  RESEND_VERIFY_EMAIL_SUCCESS: 'Resent email verify success',
  CHECK_EMAIL_TO_RESET_PASSWORD: 'Check email to reset password',
  FORGOT_PASSWORD_TOKEN_IS_REQUIRED: 'Forgot password token is required',
  VERIFY_FORGOT_PASSWORD_SUCCESS: 'Verify forgot password success',
  FORGOT_PASSWORD_TOKEN_INVALID: 'Forgot password token invalid',
  RESET_PASSWORD_SUCCESS: 'Reset password success',
  GET_ME_SUCCESS: 'Get my profile success',
  USER_NOT_VERIFIED: 'User not verified',
  BIO_MUST_BE_A_STRING: 'Bio must be a string',
  BIO_LENGTH_MUST_BE_FROM_1_TO_200: 'Bio must be from 5 to 200',
  LOCATION_MUST_BE_A_STRING: 'Location must be a string',
  LOCATION_LENGTH_MUST_BE_FROM_5_TO_200: 'Location must be from 5 to 200',
  WEBSITE_MUST_BE_A_STRING: 'Website must be a string',
  WEBSITE_LENGTH_MUST_BE_FROM_5_TO_200: 'Website must be from 5 to 200',
  USERNAME_MUST_BE_A_STRING: 'Username must be a string',
  USERNAME_LENGTH_MUST_BE_FROM_5_TO_50: 'Username must be from 5 to 50',
  USERNAME_INVALID:
    'User name must be 4-15 characters long and contain only letters, numbers, underscores, not only number',
  AVATAR_MUST_BE_A_STRING: 'Avatar must be a string',
  AVATAR_LENGTH_MUST_BE_FROM_1_TO_400: 'Avatar must be from 5 to 400',
  COVER_PHOTO_MUST_BE_A_STRING: 'Cover photo must be a string',
  COVER_PHOTO_LENGTH_MUST_BE_FROM_1_TO_200: 'Cover photo must be from 5 to 200',
  UPDATE_PROFILE_SUCCESS: 'update profile Successfully',
  GET_PROFILE_SUCCESS: 'Get profile success',
  FOLLOWER_SUCCESS: 'Follower success',
  INVALID_FOLLOWED_USER_ID: 'Invalid followed user id',
  CANNOT_FOLLOW_DUPLICATES: 'Followed',
  NO_FOLLOW_USER: 'No follow user',
  UN_FOLLOWER_SUCCESS: 'Un follow success',
  USERNAME_EXISTED: 'Username existed',
  OLD_PASSWORD_IS_WRONG: 'Old password is wrong',
  GMAIL_NOT_VERIFIED: 'Gmail not verified',
  UPLOAD_SUCCESS: 'Upload success',
  REFRESH_TOKEN_SUCCESS: 'Refresh token success',
  GET_VIDEO_STATUS_SUCCESS: 'Get video status success',
  GET_FOLLOWING_SUCCESSFULLY: 'Get following successfully',
  GET_FOLLOWERS_SUCCESSFULLY: 'Get followers successfully',
  DELETE_SUCCESS: 'Delete success',
  S3_LINK_IS_REQUIRED: 'S3 link is required',
  S3_LINK_MUST_BE_A_STRING: 'S3 link must be a string',
  LINK_IS_REQUIRED: 'Link is required',
  LINK_MUST_BE_A_STRING: 'Link must be a string',
  REACTION_USER_ID_MUST_NOT_BE_EMPTY: 'Reaction user id must not be empty',
  INVALID_REFRESH_TOKEN: 'Invalid refresh token'
} as const





export const SEARCH_MESSAGE = {
  CONTENT_MUST_BE_STRING: 'Content must be string',
  MEDIA_TYPE_MUST_BE_ONE_OF_MEDIA_TYPE_QUERY: `Media type must be one of ${Object.values(MediaTypeQuery).join(', ')}`,
  LIMIT_IS_GREATER_THAN_1_AND_SMALL_20: 'Limit is greater than 1 and small 20',
  PAGE_IS_GREATER_THAN_1_AND_SMALL_TOTAL_PAGES: 'Page is greater than 1 and small total pages',
  FOLLOW_USER_IS_TRUE_OR_FALSE: 'Follow user is true or false',
  SEARCH_PEOPLE_SUCCESS: 'Search people success',
  SEARCH_TWEETS_SUCCESS: 'Search tweets success'
}

export const CONVERSATIONS_MESSAGE = {
  GET_CONVERSATION_SUCCESSFULLY: 'Get conversation successfully',
  EDIT_CONVERSATION_SUCCESSFULLY: 'Edit conversation successfully',
  MESSAGE_ID_IS_REQUIRED: 'Message id is required',
  MESSAGE_NOT_FOUND: 'Message not found',
  DELETE_MESSAGE_IN_CONVERSATION_SUCCESSFULLY: 'Delete message in conversation successfully',
  CONTENT_IS_REQUIRED: 'Content is required',
  SET_EMOJI_MESSAGE_IN_CONVERSATION_SUCCESSFULLY: 'Set emoji message in conversation successfully',
  DELETE_ALL_MESSAGE_IN_CONVERSATION_SUCCESSFULLY: 'Delete all message in conversation successfully'
}




export const PAYMENT_MESSAGE = {
  INVALID_SUBSCRIPTION_TYPE: 'Invalid subscription type',
  PAYMENT_SUCCESSFULLY: 'Payment successfully',
  PAYMENT_FAILED: 'Payment failed',
  INTERNAL_SERVER_ERROR: 'Internal server error',
  CONFIRM_SUCCESS: 'Confirm success',
  UNKNOW_ERROR: 'Unknow error',
  PAYMENT_NOT_FOUND: 'Payment not found',
  CANNOT_CREATE_FREE_PAYMENT: 'Cannot create payment for free subscription'
}
export const ADMIN_MESSAGES = {
  ADMIN_PERMISSION_REQUIRED: 'Admin permission required',
  GET_USER_STATS_SUCCESS: 'Get user statistics successfully',
  GET_TWEET_STATS_SUCCESS: 'Get tweet statistics successfully',
  GET_INTERACTION_STATS_SUCCESS: 'Get interaction statistics successfully',
  GET_REVENUE_STATS_SUCCESS: 'Get revenue statistics successfully',
  GET_SYSTEM_STATS_SUCCESS: 'Get system statistics successfully',
  GET_DASHBOARD_STATS_SUCCESS: 'Get dashboard statistics successfully',
  INVALID_DATE_FORMAT: 'Invalid date format. Use ISO8601 format (YYYY-MM-DD)',
  TO_DATE_MUST_BE_AFTER_FROM_DATE: 'To date must be after from date',
  INVALID_INTERVAL: 'Invalid interval. Use "daily", "weekly", or "monthly"',
  GET_USER_LIST_SUCCESS: 'Get user list successfully',
  USER_STATUS_UPDATED_SUCCESS: 'User status updated successfully',
  USER_ROLE_UPDATED_SUCCESS: 'User role updated successfully',
  CONTENT_DELETED_SUCCESS: 'Content deleted successfully',
  GET_REPORT_SUCCESS: 'Get report successfully',
  GENERATE_REPORT_SUCCESS: 'Generate report successfully',
  GET_REPORTED_CONTENT_SUCCESS: 'Get reported content successfully',
  REPORT_CONTENT_SUCCESS: 'Report content successfully',
  MODERATE_CONTENT_SUCCESS: 'Moderate content successfully',
  GET_COMMENTS_SUCCESS: 'Get comments successfully',
  COMMENT_REMOVED_SUCCESS: 'Comment removed successfully',
  USER_BANNED_SUCCESS: 'User banned successfully',
  USER_UNBANNED_SUCCESS: 'User unbanned successfully',
  GET_BAN_HISTORY_SUCCESS: 'Get ban history successfully',
  GET_USER_GROWTH_SUCCESS: 'Get user growth successfully',
  GET_MODERATION_STATS_SUCCESS: 'Get moderation stats successfully',
  TOXIC_CONTENT_DETECTION_SUCCESS: 'Toxic content detection successfully',
  USER_ID_REQUIRED: 'User id is required',
  USER_ALREADY_BANNED: 'User already banned',
  REASON_REQUIRED: 'Reason is required',
  INVALID_REASON: 'Invalid reason'
} as const

export enum StatInterval {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly'
}

export enum AdminReportType {
  USER_GROWTH = 'user_growth',
  CONTENT_GROWTH = 'content_growth',
  ENGAGEMENT = 'engagement',
  REVENUE = 'revenue',
  SYSTEM_PERFORMANCE = 'system_performance'
}
