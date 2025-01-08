import { TaskModel } from '@/config/database/mongo'
import { ResponseHandler } from '@/utils/response-handler'
import type { Request, Response } from 'express'

export async function getTasks(req: Request, res: Response) {
  try {
    const tasks = await TaskModel.find()
    ResponseHandler.successResponse(res, 'Tasks retrieved successfully', tasks)
  } catch (error) {
    ResponseHandler.errorResponse(res, 'Error getting tasks', error, 400)
  }
}
