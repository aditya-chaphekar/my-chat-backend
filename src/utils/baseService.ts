/* eslint-disable no-unused-vars */
import { FilterQuery, UpdateQuery, QueryOptions } from 'mongoose'
import { GenericObject, Nullable } from '../constants'

export interface IBaseService<T> {
  create: (item: T) => Promise<T>
  update: (query: FilterQuery<T>, updateObj: UpdateQuery<T>) => Promise<Nullable<T>>
  delete: (query: FilterQuery<T>) => Promise<Nullable<T>>
  find: (query: FilterQuery<T>, options: QueryOptions<T>) => Promise<T[]>
  findById: (id: string, options: QueryOptions<T>) => Promise<Nullable<T>>
  updateOne: (
    query: FilterQuery<T>,
    updateObj: UpdateQuery<T>,
    options: QueryOptions<T>,
  ) => Promise<Nullable<T>>
  findOne: (
    query: FilterQuery<T>,
    projection: GenericObject,
    options: QueryOptions<T>,
  ) => Promise<Nullable<T>>
}
