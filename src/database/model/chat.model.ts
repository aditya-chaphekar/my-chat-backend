import mongoose = require('mongoose')

const { Schema } = mongoose

const chatSchema = new Schema({
  message: String,
})

export const chat = mongoose.model('chat', chatSchema)

export default chat
