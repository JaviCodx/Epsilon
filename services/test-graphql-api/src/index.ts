
import app from './app';

const start = async () => {
  try {
    await app.listen(3000);
    console.log(`🚀  GraphQL server running at port: 3000`);
  } catch {
    console.log('Not able to run GraphQL server');
  }
};

start();