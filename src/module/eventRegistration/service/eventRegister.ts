import Exception from "../../../exceptions/exception";
import { ERROR_TYPE } from "../../../utils/constants";
var localConstant = require('../../../utils/localConstant');
import { getObjectId } from "../../../utils/mongooseValidation";
import Event from "../../events/model/eventModel";


export class RegisterEvent {
  async registerEvent(req: any, res: any) {
    const eventId = req.params.eventId;

    try {
      const event = await Event.findOne({_id: getObjectId(eventId)});
      if (!event) {
        throw new Exception(ERROR_TYPE.NOT_FOUND, localConstant.EVENT_NOT_EXIST)
      }

      // Check if the event has reached its maximum attendee limit
      if (event.attendees.length >= event.maxAttendees) {
        throw new Exception(ERROR_TYPE.NOT_FOUND, localConstant.EVENT_IS_FULL)
      }

      // Assuming you have a user ID in the request body
      const userId = req.body.userId;

      // Check if the user is already registered for this event
      if (event.attendees.includes(userId)) {
        throw new Exception(ERROR_TYPE.NOT_FOUND, localConstant.ALREADY_REGISTERED)
      }

      // Register the user for the event
      event.attendees.push(userId);
      await event.save();

      return Promise.resolve({ message: 'User registered for the event successfully' });
    } catch (error:any) {
        return Promise.reject({ error: 'Could not register for the event' });
    }
  }
}
