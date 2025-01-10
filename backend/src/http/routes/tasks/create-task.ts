import { TaskModel } from '@/config/database/mongo'
import { ResponseHandler } from '@/utils/response-handler'
import type { Request, Response } from 'express'
import { Types } from 'mongoose'

export async function createTask(req: Request, res: Response) {
  const { title, description } = req.body
  
  try {
    const newTask = new TaskModel({
      _id: new Types.ObjectId(),
      title,
      description,
    })
    newTask.save()

    ResponseHandler.successResponse(
      res,
      'Task created successfully',
      newTask,
      201,
    )
  } catch (error) {
    ResponseHandler.errorResponse(res, 'Error creating task', error, 400)
  }
}
