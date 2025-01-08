import { Router, type Request, type Response } from 'express'
import { createTask } from './tasks/create-task'
import { getTasks } from './tasks/get-tasks'
import { removeTask } from './tasks/remove-task'

export const router = Router()

router.get('/healthcheck', (req: Request, res: Response) => {
  res.status(200).send('OK')
})

router.get('/tasks', getTasks)
router.post('/tasks', createTask)
router.delete('/tasks/:id', removeTask)

