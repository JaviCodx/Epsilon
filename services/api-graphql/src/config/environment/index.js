import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;


const ENV = {
  development: process.env.NODE_ENV === 'development',
  test: process.env.NODE_ENV === 'test',
  staging: process.env.NODE_ENV === 'staging',
  production: process.env.NODE_ENV === 'production',
};

const MONGO_URI =  process.env.MONGO_URI

export { PORT, ENV, MONGO_URI };