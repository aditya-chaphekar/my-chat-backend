import axios from 'axios'
import { Body, JsonController, Post, Req, Res } from 'routing-controllers'
import { handleError, handleSuccess } from '../../../utils/handler'

@JsonController('/login')
export default class LoginController {
  @Post('/send-otp')
  async sendOtp(@Req() req: any, @Body() body: any, @Res() res: any) {
    try {
      const url = process.env.SMS_BASE_URL || ''
      const authorization = `?authorization=${process.env.SMS_AUTH_KEY}` || ''
      const otp = `&variables_values=${Math.floor(100000 + Math.random() * 900000)}`
      const route = '&route=otp'
      let { phone } = body
      phone = `&numbers=${phone}`
      const URL = `${url}${authorization}${otp}${route}${phone}`

      const { status } = await axios.get(URL)
      if (status === 200) {
        return handleSuccess(req, res, { message: 'OTP sent successfully' })
      }
      return handleError(req, res, 'ER_04', 'Error sending OTP')
    } catch (error) {
      return handleError(req, res, 'ER_01', error)
    }
  }
}
