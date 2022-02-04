import express from 'express';
import graphqlServer from './graphql';


const app = express();

(async () => {
    await graphqlServer.start()
    graphqlServer.applyMiddleware({
        app,
    });

})()

export default app;