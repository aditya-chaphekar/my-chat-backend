/* eslint-disable import/first */
import dotenv = require('dotenv')

dotenv.config()

import express = require('express')
import { logger } from './utils/logger'
import initailizeDatabases from './database'
import initRoute from './api'
import loggerMiddleware from './middleware/logger-middleware'

initailizeDatabases()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(loggerMiddleware)

initRoute(app)

app.listen(port, () => {
  logger.info(`[server]: Server is running at https://localhost:${port}`)
})
