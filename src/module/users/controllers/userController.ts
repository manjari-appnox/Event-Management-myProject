import { NextFunction, Request, Response } from "express";
import {UserService} from "../services/userService";
import { Auth } from "../../../utils/auth";
import { Login } from "../services/login";
import { respHndlr} from "../../../utils/index"
import { RESPONSE_STATUS } from "../../../utils/constants";

const UserServiceInstance = new UserService()

export class UserController {

    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await UserServiceInstance.registerUser(req,res);
            respHndlr.sendSuccess(res, data, RESPONSE_STATUS.SUCCESS_CREATED);
        } catch (err: any) {
            respHndlr.sendError(res, err);
        }
    }

    async getUserById(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await UserServiceInstance.getUsersById(req);
            respHndlr.sendSuccess(res, data, RESPONSE_STATUS.SUCCESS);
        } catch (err: any) {
            respHndlr.sendError(res, err);
        }
    }

    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await UserServiceInstance.getUser(req);
            respHndlr.sendSuccess(res, data, RESPONSE_STATUS.SUCCESS);
        } catch (err: any) {
            respHndlr.sendError(res, err);
        }
    }

    async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await UserServiceInstance.updateUser(req,res);
            respHndlr.sendSuccess(res, data, RESPONSE_STATUS.SUCCESS);
        } catch (err: any) {
            respHndlr.sendError(res, err);
        };
    }

    async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await UserServiceInstance.deleteUser(req);
            respHndlr.sendSuccess(res, RESPONSE_STATUS.SUCCESS);
        } catch (err: any) {
            respHndlr.sendError(res, err);
        };
    }

}
