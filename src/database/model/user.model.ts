import * as mongoose from 'mongoose'
import { IUser } from '../../api/controller/user/user.interface'

const userSchema: mongoose.Schema<IUser> = new mongoose.Schema({
  userId: Number,
  name: String,
  email: String,
  password: String,
  profilePicture: String,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
})

export const userModel = mongoose.model<IUser>('user', userSchema)

export default userModel
