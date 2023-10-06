var mongoose = require('mongoose');

export const getObjectId = (Id: any) => {
  return mongoose.Types.ObjectId(Id);
};
