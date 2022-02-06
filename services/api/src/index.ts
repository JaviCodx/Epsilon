import mongoose from 'mongoose'
import { app } from './app'


const start = async () => {
    try {
      if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI must be provided in the environment')
      }
        await mongoose.connect(process.env.MONGO_URI, {})
        console.log('Connected to MongoDB')
      } catch (err) {
        console.log(err)
      }

    app.listen(3010, () => {
        console.log('Listening on port 3010!!')
    })
}

start()