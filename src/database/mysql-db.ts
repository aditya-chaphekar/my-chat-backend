import path = require('path')
import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const MysqlDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  logging: process.env.TYPEORM_LOGGING_MYSQL as unknown as boolean,
  entities: [path.join(__dirname, '/entity/*.{ts,js}')],
  migrations: [],
  subscribers: [],
  synchronize: process.env.TYPEORM_SYNCHRONIZE_MYSQL as unknown as boolean,
})

export default MysqlDataSource
