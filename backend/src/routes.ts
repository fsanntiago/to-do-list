import { Router, type Request, type Response } from 'express'

export const router = Router()

router.get('/healthcheck', (req: Request, res: Response) => {
  res.status(200).send('OK')
})
