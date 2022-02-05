import { MongoMemoryServer } from 'mongodb-memory-server'
import connectDB from "../database"

let mongo
beforeAll(async () => {
    mongo = await MongoMemoryServer.create()
    const mongoUri =  mongo.getUri()
    const db = await connectDB(mongoUri)
   
})

afterAll(async () => {
    await mongo.stop()
})