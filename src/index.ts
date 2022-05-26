/* eslint-disable import/first */
import dotenv = require('dotenv')

dotenv.config()

import express = require('express')
import router from './api'
import { logger } from './utils/logger'
import initailizeDatabases from './database'

initailizeDatabases()

const app = express()
const port = process.env.PORT

app.use('/api/v1', router)

app.listen(port, () => {
  logger.info(`[server]: Server is running at https://localhost:${port}`)
})
