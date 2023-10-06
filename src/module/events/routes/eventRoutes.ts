import { Router } from "express";
import { Validation } from "../../../middleware/authValidator";
import { logger } from "../../../utils/logger";
import { EventController } from "../controller/eventController";
// import { userSwaggerSpec } from "../../../utils/swaggerConfig";
// // Import the required Swagger dependencies 
// import swaggerUi from 'swagger-ui-express';

class MainRouter {

    router: Router;
    event: EventController;
    validation:Validation
    constructor() {
        this.event = new EventController()
        this.validation = new Validation()
        this.router = Router()
        this.eventRouters()
    }

    eventRouters() {
        try{
        this.router.route(`/api/v1/event/create`)
            .post(this.event.createEvent)
        this.router.route(`/api/v1/event/update/:eventId`)
            .patch(this.event.updateEvent)
        this.router.route(`/api/v1/event/delete/:eventId`)
            .delete(this.validation.checkValidation,this.event.deleteEvent)
        this.router.route(`/api/v1/event/:eventId`)
            .get(this.validation.checkValidation,this.event.getEventById)
        this.router.route(`/api/v1/events`)
            .get(this.validation.checkValidation,this.event.getAllEvents)
        }catch(err:any){
            logger.error("error occur in access routes",err)
        }

    }

    // setupUserSwagger() {
    //     this.router.use('/api-docs', swaggerUi.serve);
    //     this.router.get('/api-docs', swaggerUi.setup(userSwaggerSpec));
    // }

}
export default new MainRouter().router
