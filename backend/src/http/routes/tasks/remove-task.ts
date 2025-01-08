import { TaskModel } from '@/config/database/mongo'
import { ResponseHandler } from '@/utils/response-handler'
import type { Request, Response } from 'express'

export async function removeTask(req: Request, res: Response) {
  const { id } = req.params

  try {
    const deletedTask = await TaskModel.findByIdAndDelete({ _id: id })

    if (!deletedTask) {
      ResponseHandler.errorResponse(res, 'Task not found', null, 404)
    }

    ResponseHandler.successResponse(
      res,
      'Task deleted successfully',
      deletedTask,
    )
  } catch (error) {
    ResponseHandler.errorResponse(res, 'Error deleting task', error, 400)
  }
}
