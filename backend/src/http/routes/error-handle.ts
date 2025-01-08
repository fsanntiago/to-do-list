import type { NextFunction, Request, Response } from 'express'

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const statusCode = res.statusCode ?? 500
  const message = error.message ?? 'Internal Server Error'

  console.error(`[ERROR]: ${error.message}`)

  res.status(statusCode).json({
    success: false,
    message,
  })
}
