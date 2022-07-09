import { NextFunction, Request, Response } from 'express'
import logger from '../utils/logger'

export default (_req: Request, _res: Response, _next: NextFunction): void => {
  const startTime = Date.now()
  _req.on('close', () => {
    logger.info(
      {
        startTime,
        path: _req.path,
        query: _req.query,
        params: _req.params,
        headers: _req.headers,
        body: _req.body as Buffer,
      },
      'Request',
    )
  })
  _res.on('finish', () => {
    const endTime = Date.now()
    logger.info(
      {
        endTime,
        duration: endTime - startTime,
        status: {
          code: _res.statusCode,
          message: _res.statusMessage,
        },
        locals: _res.locals,
        headers: _res.getHeaders(),
      },
      'Response',
    )
  })

  return _next()
}
