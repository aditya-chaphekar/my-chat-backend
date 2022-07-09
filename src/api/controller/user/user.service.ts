import { FilterQuery, Model, QueryOptions, UpdateQuery } from 'mongoose'
import { Service } from 'typedi'
import { Nullable } from '../../../constants'
import { userModel } from '../../../database/model/user.model'
import { IUser, IUserService } from './user.interface'

@Service()
export default class UserService implements IUserService {
  private model: Model<IUser>

  public constructor() {
    this.model = userModel
  }

  create = async (item: any): Promise<IUser> => this.model.create(item)

  find = async (
    query: FilterQuery<IUser>,
    projection: any = {},
    options: QueryOptions = { lean: true },
  ): Promise<IUser[]> => this.model.find(query, projection, options)

  findOne = async (
    query: any,
    options: QueryOptions = {},
    projection: any = {},
  ): Promise<Nullable<IUser>> => this.model.findOne(query, projection, options)

  update = async (query: any, updateObj: UpdateQuery<IUser>): Promise<Nullable<IUser>> =>
    this.model.findByIdAndUpdate(query, updateObj, {})

  delete = async (query: any): Promise<Nullable<IUser>> => this.model.findOneAndRemove(query)

  findById = async (
    id: string,
    projection: any = {},
    options: QueryOptions = { lean: true },
  ): Promise<Nullable<IUser>> => this.model.findById(id, projection, options)

  updateOne = async (
    query: any,
    updateObj: UpdateQuery<IUser>,
    options: QueryOptions = { new: true, lean: true },
  ): Promise<Nullable<IUser>> => this.model.findOneAndUpdate(query, updateObj, options)
}
