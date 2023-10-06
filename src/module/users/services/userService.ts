import User from "../model/userModel";
import Exception from "../../../exceptions/exception";
import jwt from 'jsonwebtoken';
const emailValidator = require('email-validator');
import { CommonStrings, ERROR_TYPE } from "../../../utils/constants";
import { logger } from "../../../utils/logger";
var localConstant = require('../../../utils/localConstant');


const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';


const TOKEN_KEY = 'Event_management_project'

export class UserService {

  async registerUser(req: any, res: any) {

    const PhoneNumber = req.body.phoneNumber
    const userExist = await User.find({ phoneNumber: PhoneNumber })
    if (userExist) {
      throw new Exception(ERROR_TYPE.ALREADY_EXISTS, localConstant.USER_ALREADY_EXIST)
    }
    const user = await User.create(req.body)
  }

  async updateUser(req: any, res: any) {
    try {
      let userId = req.params.id
      let userExist = await User.findOne({ id: userId });
      if (!userExist) {
        throw new Exception(ERROR_TYPE.NOT_FOUND, localConstant.USER_NOT_EXIST)
      }
      const PhoneNumber = req.body.phoneNumber
      const contactExist = await User.find({ phoneNumber: PhoneNumber })
      if (contactExist) {
        throw new Exception(ERROR_TYPE.ALREADY_EXISTS, 'Phone Number Already Exist.')
      }
      let updateObj: any = req.body
      await User.findOneAndUpdate({ id: userId }, updateObj)
      let updatedUser = await User.findOne({ id: userId });

      return Promise.resolve(updatedUser)
    } catch (error: any) {
      logger.info("Error while Updating User", error)
      return Promise.reject(error)
    }
  }

  async deleteUser(req: Request | any) {
    try {
      const userId = req.params.id
      let userExist: any = await User.findOne({ id: userId })
      if (!userExist) {
        throw new Exception(ERROR_TYPE.NOT_FOUND, localConstant.USER_NOT_EXIST)
      }

      //to delete user
      await User.deleteOne({ id: userId })
      return Promise.resolve(localConstant.USER_DELETED)
    }
    catch (error: any) {
      logger.info("Error while Deleting User", error)
      return Promise.reject(error)
    }
  }

  //get all users
  async getUser(req: Request | any) {
    try {
      const users: any = await User.find()
      return Promise.resolve(users)
    }
    catch (error: any) {
      logger.info("Error while getting All User", error)
      return Promise.reject(error)
    }
  }

  //get users by id
  async getUsersById(req: Request | any) {
    try {
      let userId: any = req.params.id
      let userExist = await User.findOne({ id: userId })
      if (!userExist) {
        throw new Exception(ERROR_TYPE.NOT_FOUND, localConstant.USER_NOT_EXIST)
      }
      return Promise.resolve(userExist)
    }
    catch (error: any) {
      logger.info("Error while getting UserById", error)
      return Promise.reject(error)
    }
  }


}

