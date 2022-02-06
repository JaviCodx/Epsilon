import { MongoMemoryServer } from "mongodb-memory-server";
import connectDB, { resetDB } from "../database";

let mongo;
beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();
  const db = await connectDB(mongoUri);
});

beforeEach(async () => {
  await resetDB();
});

afterAll(async () => {
  await mongo.stop();
});
