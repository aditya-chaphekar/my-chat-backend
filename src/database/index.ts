import mongoose from 'mongoose'
import logger from '../utils/logger'
import { MysqlDataSource } from './mysql-db'

const initailizeDatabases = async () => {
  try {
    MysqlDataSource.initialize()
      .then(() => {
        logger.info('[server]: MYSQL connected!')
      })
      .catch((err) => {
        logger.child({ err }).error('[server]: MYSQL connection failed!')
      })

    mongoose
      .set('debug', process.env.TYPEORM_LOGGING_MONGO as unknown as boolean)
      .connect(process.env.MONGO_URI)
      .then(() => {
        logger.info('[server]: MONGO connected!')
      })
      .catch((err) => {
        logger.child({ err }).error('[server]: MONGO connection failed!')
      })
  } catch (err) {
    logger.child({ err }).error('[server]: connection failed!')
  }
}

export default initailizeDatabases
