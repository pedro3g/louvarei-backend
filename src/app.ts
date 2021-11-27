import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { router } from './routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

export { app }
