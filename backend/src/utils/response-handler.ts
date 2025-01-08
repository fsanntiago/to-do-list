import { Response } from 'express'

export class ResponseHandler {
  static successResponse(
    res: Response,
    message: string,
    data: object | null = null,
    statusCode = 200,
  ) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    })
  }

  static errorResponse(
    res: Response,
    message: string,
    errors: any = null,
    statusCode = 400,
  ) {
    return res.status(statusCode).json({
      success: false,
      message,
      errors,
    })
  }
}
