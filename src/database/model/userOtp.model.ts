import * as mongoose from 'mongoose'
import { IUserOtp } from '../../api/controller/user/user.interface'

const userSchema: mongoose.Schema<IUserOtp> = new mongoose.Schema({
  phoneNumber: String,
  otp: Number,
  otpExpiry: Date,
  retryCount: Number,
})

export const userOpt = mongoose.model<IUserOtp>('userOpt', userSchema)

export default userOpt
