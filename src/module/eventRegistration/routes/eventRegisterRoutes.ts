import { Router } from "express";
import { Validation } from "../../../middleware/authValidator";
import { logger } from "../../../utils/logger";
import { RegisterEventController } from "../controller/eventRegisterController";

class MainRouter {

    router: Router;
    registerEvent: RegisterEventController;
    validation:Validation
    constructor() {
        this.registerEvent = new RegisterEventController()
        this.validation = new Validation()
        this.router = Router()
        this.registerEventRouters()
    }

    registerEventRouters() {
        try{
        this.router.route(`/api/v1/registerEvent/create`)
            .post(this.registerEvent.registerEvent)
        }catch(err:any){
            logger.error("error occur in access routes",err)
        }
    }

}
export default new MainRouter().router
