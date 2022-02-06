
import { PORT,MONGO_URI } from './config/environment';
import app from './app';
import connectDB from "./database"

const start = async () => {

try {
  await connectDB(MONGO_URI);
  console.log(`Connected to Mongo!`);
} catch (error) {
  console.log(`Error with Mongo`,error);
  
}

  try {
    await app.listen(PORT);
    console.log(`🚀 GraphQL server running at port: ${PORT} http://localhost:4000/graphql` );
  } catch {
    console.log('Not able to run GraphQL server');
  }
};

start();