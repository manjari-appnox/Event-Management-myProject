import { NextFunction, Request, Response } from "express"
import { respHndlr} from "../../../utils/index"
import { RESPONSE_STATUS } from "../../../utils/constants";
import { RegisterEvent } from "../service/eventRegister";


const RegisterEventInstance = new RegisterEvent()

export class RegisterEventController {

    async registerEvent(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await RegisterEventInstance.registerEvent(req,res);
            respHndlr.sendSuccess(res, data, RESPONSE_STATUS.SUCCESS_CREATED);
        } catch (err: any) {
            respHndlr.sendError(res, err);
        }
    }

}
