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

const resetDB = async () => {
  const collections = await Mongoose.connection.db.collections()
  for (const colletion of collections) {
    await colletion.deleteMany({})
  }
}

export default connectDB;

export {resetDB}