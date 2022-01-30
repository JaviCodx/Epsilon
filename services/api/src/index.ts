import mongoose from 'mongoose'
import { app } from './app'


const start = async () => {
    try {
        await mongoose.connect("mongodb://mongodb:27017", {})
        console.log('Connected to MongoDB')
      } catch (err) {
        console.log(err)
      }

    app.listen(3010, () => {
        console.log('Listening on port 3010!!')
    })
}

start()