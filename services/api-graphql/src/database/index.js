import Mongoose from 'mongoose';

let isConnected;
let db;

const connectDB = async (mongoUri) => {
  if (isConnected) return db;

  try {
    db = await Mongoose.connect(mongoUri, {

    });
    isConnected = db.connections[0].readyState;
    return db;
  } catch (err) {
    throw new Error(err);
  }
};

export default connectDB;