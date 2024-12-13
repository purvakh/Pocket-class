import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js"
import cors from "cors";

const app = express();

dotenv.config({ path: "./config/config.env"});

app.use(cors())

// middle wares 
app.use(express.json());   //.....this express.json is used because we need the json format from the user and mongodb
app.use(express.urlencoded({ extended: true }));  //...to give the correct order of the user name (in the form of string)

app.use("/api/v1/message" , messageRouter);

dbConnection

app.listen(process.env.PORT, () => {
    console.log(`Server is working at port 4000`)
});


//first make the react app 
//fix the port 
//create app.js file
//the server.js file after that type as model
//db connection we have to make
// to make models to pass data 
// the controller 
// then the router folder 
//then go to postman and see is our server is working or not  send msg
// then check mongodb message 
// then connect the frontend to app.js file 


