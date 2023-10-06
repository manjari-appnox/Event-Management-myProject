import { NextFunction, Request, Response } from "express"
import { respHndlr} from "../../../utils/index"
import { RESPONSE_STATUS } from "../../../utils/constants";
import { EventService } from "../service/eventService";

const EventServiceInstance = new EventService()

export class EventController {

    async createEvent(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await EventServiceInstance.createEvent(req,res);
            respHndlr.sendSuccess(res, data, RESPONSE_STATUS.SUCCESS_CREATED);
        } catch (err: any) {
            respHndlr.sendError(res, err);
        }
    }

    async getEventById(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await EventServiceInstance.getEventsById(req);
            respHndlr.sendSuccess(res, data, RESPONSE_STATUS.SUCCESS);
        } catch (err: any) {
            respHndlr.sendError(res, err);
        }
    }

    async getAllEvents(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await EventServiceInstance.getEvent(req);
            respHndlr.sendSuccess(res, data, RESPONSE_STATUS.SUCCESS);
        } catch (err: any) {
            respHndlr.sendError(res, err);
        }
    }

    async updateEvent(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await EventServiceInstance.updateEvent(req,res);
            respHndlr.sendSuccess(res, data, RESPONSE_STATUS.SUCCESS);
        } catch (err: any) {
            respHndlr.sendError(res, err);
        };
    }

    async deleteEvent(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await EventServiceInstance.deleteEvent(req);
            respHndlr.sendSuccess(res, RESPONSE_STATUS.SUCCESS);
        } catch (err: any) {
            respHndlr.sendError(res, err);
        };
    }

}
