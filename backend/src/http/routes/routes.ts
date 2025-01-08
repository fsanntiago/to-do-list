import { Router, type Request, type Response } from 'express'
import { getTasks } from './tasks/get-tasks'

export const router = Router()

router.get('/healthcheck', (req: Request, res: Response) => {
  res.status(200).send('OK')
})

router.get('/tasks', getTasks)
