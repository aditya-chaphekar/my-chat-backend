import { Body, JsonController, Post, Req, Res } from 'routing-controllers'

@JsonController('/register')
export default class RegisterController {
  @Post('/')
  async register(@Req() req: any, @Body() body: any, @Res() res: any) {
    try {
      console.log(`statusCode:`)
      return res.send(`statusCode:`)
    } catch (error) {
      console.log(error)
      return res.send(error)
    }
  }
}
