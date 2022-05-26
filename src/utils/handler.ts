import { Request, Response } from 'express'
import { errorConstants } from '../constants'
import logger from './logger'

export const handleSuccess = (_req: Request, _res: Response, data: any) => {
  logger.child({ path: _req.path, data }).info('Success')
  _res.status(data?.status || 200).json(data)
}

export const handleError = (_req: Request, _res: Response, error: any, actuallErr: any) => {
  let errorCode = error?.code || errorConstants.ER_01.code
  let errorMessage = error?.message || errorConstants.ER_01.message
  let errorStatus = error?.status || errorConstants.ER_01.status

  if (errorConstants[error]) {
    errorCode = errorConstants[error].code
    errorMessage = errorConstants[error].message
    errorStatus = errorConstants[error].status
  }

  logger.child({ path: _req.path }).error(actuallErr || errorMessage)

  _res.status(errorStatus).json({
    status: errorStatus,
    message: errorMessage,
    code: errorCode,
  })
}
export default handleSuccess
