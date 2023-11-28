// console.log("Hello world")
// npm i express
// npm init
// make express application
// assign port to that application

import express, { json } from "express";
import firstRouter from "./src/Router/firstRouter.js";
import bikeRouter from "./src/Router/bikeRouter.js";
import connectToMongoDB from "./src/databaseConnection/mongoDBConnection.js";
import studentRouter from "./src/Router/studentRouter.js";
import teacherRouter from "./src/Router/teacherRouter.js";
import bookRouter from "./src/Router/bookRouter.js";
import collegeRouter from "./src/Router/collegeRouter.js";
import classRoomRouter from "./src/Router/classRoomRouter.js";
import departmentRouter from "./src/Router/departmentRouter.js";

let expressApp = express();
expressApp.use(json());    // Always place this code at top of the router

let port = 8000;
expressApp.listen(port, ()=>{
    console.log(`Express app is listening at port ${port}`);
});

connectToMongoDB()

expressApp.use("/",firstRouter)
expressApp.use("/bike",bikeRouter)
expressApp.use("/students",studentRouter)
expressApp.use("/teachers",teacherRouter)
expressApp.use("/books",bookRouter)
expressApp.use("/colleges",collegeRouter)
expressApp.use("/classRooms", classRoomRouter)
expressApp.use("/departments", departmentRouter)

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


