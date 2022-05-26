import express = require('express')
import { MongooseError } from 'mongoose'
import { handleSuccess } from '../utils/handler'
import { loggerMiddleWare } from '../middleware/logger-middleware'
import { chat } from '../database/model/chat'

export const router = express.Router()

router.use(loggerMiddleWare)

router.get('/', (req, res) => {
  chat.find({}, (err: MongooseError, chats) => {
    if (err) {
      res.send(err)
    }
    handleSuccess(req, res, chats)
  })
})

export default router
