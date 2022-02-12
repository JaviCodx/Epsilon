import express from 'express';
import graphqlServer from './graphql';


const app = express();

(async () => {
    await graphqlServer.start()
    graphqlServer.applyMiddleware({
        app,
    });

})()

app.get("/health",(req,res)=>{
    res.status(200).send("Up")
})

export default app;