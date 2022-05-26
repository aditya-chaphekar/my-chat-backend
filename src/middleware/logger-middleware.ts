import logger from '../utils/logger'

export const loggerMiddleWare = (req, res, next) => {
  logger.info(`${req.method} ${req.path}`, req.body)
  next()
}

export default loggerMiddleWare
