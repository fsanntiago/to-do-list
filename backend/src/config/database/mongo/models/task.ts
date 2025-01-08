import mongoose, { Schema, Types } from 'mongoose'

export const taskSchema = new Schema({
  _id: Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
})

export const TaskModel = mongoose.model('Task', taskSchema)
