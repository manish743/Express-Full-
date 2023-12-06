// console.log("Hello world")
// npm i express
// npm init
// make express application
// assign port to that application

import express, { json } from "express";
import cors from "cors";
// import { config } from "dotenv";
import firstRouter from "./src/Router/firstRouter.js";
import bikeRouter from "./src/Router/bikeRouter.js";
import connectToMongoDB from "./src/databaseConnection/mongoDBConnection.js";
import studentRouter from "./src/Router/studentRouter.js";
import teacherRouter from "./src/Router/teacherRouter.js";
import bookRouter from "./src/Router/bookRouter.js";
import collegeRouter from "./src/Router/collegeRouter.js";
import classRoomRouter from "./src/Router/classRoomRouter.js";
import departmentRouter from "./src/Router/departmentRouter.js";
import userRouter from "./src/Router/userRouter.js";
import playerRouter from "./src/Router/playerRouter.js";
import productRouter from "./src/Router/productRouter.js";
import productReviewRouter from "./src/Router/productReviewRouter.js";
import { port } from "./src/config.js";
import bcrypt from "bcrypt";
// config();

let expressApp = express();
expressApp.use(json()); // Always place this code at top of the router
expressApp.use(cors()); // Always place this code at top of the router

// let swaggerJSDoc = require("swagger-jsdoc");
// let swaggerUI =require("swagger-ui-express");

// let options = {
//     definition :{
//         openapi :"3.0.0",
//         info : {
//             title : "My Project",
//             version : '1.0.0'
//         },
//         servers : [
//             {
//                 api : "localhost:8000/"
//             }
//         ]
//     }
// }

// let port = 8000;
// let port = process.env.PORT;
expressApp.listen(port, () => {
  console.log(`Express app is listening at port ${port}`);
});

connectToMongoDB();

expressApp.use("/", firstRouter);
expressApp.use("/bike", bikeRouter);
expressApp.use("/students", studentRouter);
expressApp.use("/teachers", teacherRouter);
expressApp.use("/books", bookRouter);
expressApp.use("/colleges", collegeRouter);
expressApp.use("/classRooms", classRoomRouter);
expressApp.use("/departments", departmentRouter);
expressApp.use("/users", userRouter);
expressApp.use("/products", productRouter);
expressApp.use("/productReviews", productReviewRouter);
expressApp.use("/players", playerRouter);

// let password = "you@123"
// let hashPassword = await bcrypt.hash(password,10);
// console.log(hashPassword)

// let isValidPassword = await bcrypt.compare(password, hashPassword);
// console.log(isValidPassword)

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
