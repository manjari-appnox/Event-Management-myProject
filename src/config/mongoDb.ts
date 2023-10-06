import mongoose from 'mongoose';
import { logger } from '../utils/logger';
require("dotenv").config();
const db: string = 'mongodb+srv://thinkvdifferent9:manjari@1998@cluster0.xgqst5i.mongodb.net/eventDB'

const connectDB = async () => {
    try {
        // Connect To MongoDB
        await mongoose.connect(db);
        logger.info('Database Connected');
    } catch (err: any) {
        logger.info(err.message);
        // Exit Program With Failure
        process.exit(1);
    }
};

export default connectDB;
