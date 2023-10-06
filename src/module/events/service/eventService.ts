import Exception from "../../../exceptions/exception";
const emailValidator = require('email-validator');
import { ERROR_TYPE } from "../../../utils/constants";
import { logger } from "../../../utils/logger";
import { getObjectId } from "../../../utils/mongooseValidation";
var localConstant = require('../../../utils/localConstant');
import Event from '../model/eventModel'
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
const TOKEN_KEY = 'Event_management_project';

export class EventService {

  async createEvent(req: any, res: any) {
    try {
      const { title, description, date, location, maxAttendees ,organizer} = req.body;
  
      // Validate event details
      if (!title || !description || !date || !location || !maxAttendees || !organizer) {
        throw new Exception(ERROR_TYPE.INVALID_INPUT, 'Event details are incomplete');
      }
  
      // Create event
      const event = await Event.create(req.body);
  
      return Promise.resolve(event);
    } catch (error: any) {
      logger.info("Error while creating event", error);
      return Promise.reject(error);
    }
  }

  async updateEvent(req: any, res: any) {
    try {
      let id = req.params.eventId
      let organizerId = req.body.userId
      let eventExist:any= await Event.findOne({ _id: getObjectId(id) });
      if (!eventExist) {
        throw new Exception(ERROR_TYPE.NOT_FOUND, localConstant.EVENT_UPDATED)
      }
      let updateObj: any = req.body
      await Event.findOneAndUpdate({ _id: getObjectId(id),organizer:organizerId}, updateObj)
      let updatedEvent = await Event.findOne({ _id: getObjectId(id) });

      return Promise.resolve(updatedEvent)
    } catch (error: any) {
      logger.info("Error while Updating Event", error)
      return Promise.reject(error)
    }
  }

  async deleteEvent(req: Request | any) {
    try {
      const id = req.params.eventId
      let eventExist: any = await Event.findOne({ _id: getObjectId(id) })
      if (!eventExist) {
        throw new Exception(ERROR_TYPE.NOT_FOUND, localConstant.EVENT_NOT_EXIST)
      }

      //to delete user
      await Event.deleteOne({ _id: getObjectId(id) })
      return Promise.resolve(localConstant.EVENT_DELETED)
    }
    catch (error: any) {
      logger.info("Error while Deleting Event", error)
      return Promise.reject(error)
    }
  }

  //get all users
  async getEvent(req: Request | any) {
    try {
      const events: any = await Event.find()
      return Promise.resolve(events)
    }
    catch (error: any) {
      logger.info("Error while getting All Events", error)
      return Promise.reject(error)
    }
  }

  //get events by id
  async getEventsById(req: Request | any) {
    try {
      let id = req.params.eventId
      let eventExist = await Event.findOne({ _id: getObjectId(id) })
      if (!eventExist) {
        throw new Exception(ERROR_TYPE.NOT_FOUND, localConstant.EVENT_NOT_EXIST)
      }
      return Promise.resolve(eventExist)
    }
    catch (error: any) {
      logger.info("Error while getting EventById", error)
      return Promise.reject(error)
    }
  }

}
