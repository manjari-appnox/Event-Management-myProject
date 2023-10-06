import mongoose, { Schema } from 'mongoose';

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  maxAttendees: {
    type: Number,
    required: true,
  },
  attendees: {
    type: Array,
    required: true,
  },
  organizer: {
    type: String,
    required: true
  },
});

const Event = mongoose.model('Event', eventSchema);
export default Event;
