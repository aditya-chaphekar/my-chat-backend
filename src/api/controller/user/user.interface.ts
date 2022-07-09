import * as Mongoose from 'mongoose'
import { IBaseService } from '../../../utils/baseService'

export interface IUser extends Mongoose.Document {
  userId: string
  name: string
  email: string
  password: string
  profilePicture: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}

export interface IUserOtp extends Mongoose.Document {
  phoneNumber: string
  otp: number
  otpExpiry: Date
  retryCount: number
}

export type IUserService = IBaseService<IUser>
