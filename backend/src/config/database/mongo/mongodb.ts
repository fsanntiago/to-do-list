import mongoose from 'mongoose'

export class MongoDB {
  static async connect() {
    try {
      await mongoose.connect('mongodb://localhost:27017/db')
      console.log('Database connected')
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
