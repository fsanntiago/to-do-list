import { TaskModel } from '@/config/database/mongo'
import { ResponseHandler } from '@/utils/response-handler'
import type { Request, Response } from 'express'

export async function updateTask(req: Request, res: Response) {
  const { id } = req.params
  const { title, description, completed, isActive } = req.body

  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
        completed,
        isActive,
      },
      { new: true },
    )

    if (!updatedTask) {
      ResponseHandler.errorResponse(res, 'Task not found', null, 404)
      return
    }

    const validationError = updatedTask.validateSync()
    if (validationError) throw validationError

    ResponseHandler.successResponse(
      res,
      'Task updated successfully',
      updatedTask,
    )
  } catch (error) {
    ResponseHandler.errorResponse(res, 'Error updating task', error)
  }
}
