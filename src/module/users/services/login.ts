import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { logger } from '../../../utils/logger'; 
import User from '../model/userModel';
import { ERROR_TYPE } from '../../../utils/constants'; 
import Exception from '../../../exceptions/exception';


export class Login {

    async logout(req: any, res: any) {
        try {
          const { phoneNumber } = req.body;
          const result = await User.findOne({ where: { phoneNumber: phoneNumber } });
          if (!result) {
          throw new Exception(ERROR_TYPE.NOT_FOUND, 'phone-Number not found.')
          }
          await User.findOneAndUpdate( { phoneNumber: phoneNumber },{token:null});
          return Promise.resolve('Logout successfully.')
        } catch (err) {
          logger.error("error in logout user:",err)
          return Promise.reject(err);
        }
      }
}
