//  var constants = require("../common/resp-handler");

import { ERROR_TYPE, RESPONSE_STATUS } from "../utils/constants";
import { Request, NextFunction, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import {logger}  from "../utils/logger";
import Exception from "../exceptions/exception";
import { respHndlr } from "../utils";
import { access } from "fs";
import User from "../module/users/model/userModel";

const SERVICE_SECRET = "service-management";
export class Validation {
  constructor() {}
  async checkValidation(request: any, res: Response, next: NextFunction) {
    try {
      if (request.headers["authorization"]) {
        let accToken = request.headers["authorization"];
      
        const token = accToken.split(" ");
        const accessToken = token[1];
        // Matching The Token From Data Base

        if (!accessToken) {
          throw new Exception(ERROR_TYPE.NOT_FOUND, "Access token not Found.");
        }
       
        const tokenObject = await User.findOne({
          where: { token: accessToken },
        });

        if ( !tokenObject ) {
          
          throw new Exception(ERROR_TYPE.NOT_FOUND, "Invalid Token");

        }
        request.body.user_id = tokenObject?.dataValues.id
        return next();
      }else{
        throw new Exception(ERROR_TYPE.NOT_FOUND, "Please provide access token.")
      }

    } catch (err) {

      respHndlr.sendError(res, err);
    }
  }
}
