import Mongoose from 'mongoose';
import { MONGO_URI } from '../config/environment';

let isConnected;
let db;

const connectDB = async () => {
  if (isConnected) return db;

  try {
    db = await Mongoose.connect(MONGO_URI, {

    });
    isConnected = db.connections[0].readyState;
    return db;
  } catch (err) {
    throw new Error(err);
  }
};

export default connectDB;