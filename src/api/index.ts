import { Application } from 'express'
import { useExpressServer } from 'routing-controllers'
import LoginController from './controller/login/login.controller'
import RegisterController from './controller/register/register.controller'

const basePath = `/api`

const initRoute = (app: Application): void => {
  useExpressServer(app, {
    controllers: [LoginController, RegisterController],
    defaultErrorHandler: true,
    routePrefix: basePath,
  })
}

export default initRoute
