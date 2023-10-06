import { Router } from "express";
import { UserController } from "../controllers/userController";
import { Validation } from "../../../middleware/authValidator";
import { logger } from "../../../utils/logger";

class MainRouter {

    router: Router;
    user: UserController;
    validation:Validation
    constructor() {
        this.user = new UserController()
        this.validation = new Validation()
        this.router = Router()
        this.userRouters()
    }

    userRouters() {
        try{
        this.router.route(`/api/v1/user/create`)
            .post(this.user.createUser)
        this.router.route(`/api/v1/user/update/:userId`)
            .patch(this.user.updateUser)
        this.router.route(`/api/v1/user/delete/:userId`)
            .delete(this.validation.checkValidation,this.user.deleteUser)
        this.router.route(`/api/v1/user/:userId`)
            .get(this.validation.checkValidation,this.user.getUserById)
        this.router.route(`/api/v1/users`)
            .get(this.validation.checkValidation,this.user.getAllUsers)
        }catch(err:any){
            logger.error("error occur in access routes",err)
        }

    }

}
export default new MainRouter().router
