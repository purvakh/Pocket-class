import mongoose from "mongoose";

export const dbConnection = (
    mongoose.connect( "mongodb+srv://pass1234:pass1234@cluster1.4zzngtb.mongodb.net/?retryWrites=true" ,{dbName: "MERN_STACK_EVENT_MANAGER"}).then(()=>{
        console.log("Connected to database!")
    }).catch(err=>{
        console.log("Some error occured while connecting to database" , err)
    })
)