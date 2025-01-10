import { TaskModel } from '@/config/database/mongo'
import { ResponseHandler } from '@/utils/response-handler'
import type { Request, Response } from 'express'

export async function updateTask(req: Request, res: Response) {
  const { id } = req.params

  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true, runValidators: true },
    )

    if (!updatedTask) {
      ResponseHandler.errorResponse(res, 'Task not found', null, 404)
      return
    }

    ResponseHandler.successResponse(
      res,
      'Task updated successfully',
      updatedTask,
    )
  } catch (error) {
    ResponseHandler.errorResponse(res, 'Error updating task', error)
  }
}
