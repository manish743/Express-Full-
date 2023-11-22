// console.log("Hello world")
// npm i express
// npm init
// make express application
// assign port to that application

import express, { json } from "express";
import firstRouter from "./src/Router/firstRouter.js";
import bikeRouter from "./src/Router/bikeRouter.js";
import traineeRouter from "./src/Router/traineeRouter.js"
import vehiclesRouter from "./src/Router/vehiclesRouter.js";

let expressApp = express();
expressApp.use(json());    // Always place this code at top of the router

let port = 8000;
expressApp.listen(port, ()=>{
    console.log(`Express app is listening at port ${port}`);
});

expressApp.use("/",firstRouter)
expressApp.use("/bike",bikeRouter)
expressApp.use("/trainee", traineeRouter)
expressApp.use("/vehicles",vehiclesRouter)

/* expressApp.use(
    (req,res,next)=>{
        console.log("I am application middleware 1");
        next();
    },
    (req,res,next)=>{
        console.log("I am application middleware 2");
    }
); */

// Create => post
// Read => get
// Update => patch
// Delete => delete


