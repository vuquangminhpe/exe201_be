import { MongoClient, Db, Collection } from 'mongodb'

import { envConfig } from '../constants/config'
import VideoStatus from '~/models/schemas/VideoStatus.schema'

const uri = envConfig.mongodb_url
const dbName = envConfig.db_name

class DatabaseService {
  private static instance: DatabaseService
  private client: MongoClient
  private db: Db

  private constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(dbName)
  }

  public static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService()
    }
    return DatabaseService.instance
  }
  async indexVideoStatus() {
    const exits = await this.users.indexExists('name_1')
    if (!exits) {
      this.videoStatus.createIndex({ name: 1 }, { unique: true })
    }
  }
  get users(): Collection<any> {
    return this.db.collection(envConfig.usersCollection)
  }
  get videoStatus(): Collection<VideoStatus> {
    return this.db.collection(envConfig.VideoStatusCollection)
  }
  async connect() {
    try {
      await this.client.connect() // Kết nối nếu chưa có
      await this.db.command({ ping: 1 })
      console.log('Connected to MongoDB!')
    } catch (error) {
      console.error('MongoDB connection error:', error)
      throw error
    }
  }
}

const databaseService = DatabaseService.getInstance()
databaseService.connect().catch(console.error)
export default databaseService
