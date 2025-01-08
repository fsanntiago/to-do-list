import cors from 'cors'
import express from 'express'

import { MongoDB } from './config/database/mongo'
import { errorHandler } from './http/routes/error-handle'
import { router } from './http/routes/routes'

const PORT = 3333
const API_PREFIX = '/api'

const app = express()

app.use(errorHandler)
app.use(cors())
app.use(express.json())

app.use(API_PREFIX, router)

app.listen(PORT, async () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}${API_PREFIX}`)
  await MongoDB.connect()
})
