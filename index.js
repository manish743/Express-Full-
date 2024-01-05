// console.log("Hello world")
// npm i express
// npm init
// make express application
// assign port to that application

import express, { Router, json } from "express";
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
import jwt from "jsonwebtoken";
import fileRouter from "./src/Router/fileRouter.js";
// config();

let expressApp = express();
expressApp.use(json()); // Always place this code at top of the router
expressApp.use(cors()); // Always place this code at top of the router
expressApp.use(express.static("./public/"));

// let swaggerUI = require("swagger-ui-express");
// let swaggerJSDoc = require("swagger-jsdoc");
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import registerRouter from "./src/Router/registerRouter.js";

// swaggerDefinitionObject
let swaggerOptions = {
  definition: {
    info: {
      title: "My Project",
      // version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["userRouter.js"],
};

let swaggerDocs = swaggerJSDoc(swaggerOptions);
expressApp.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /users:
 * get:
 * description : Use to read all users
 * responses :
 *      "200":
 *      description : A successful response
 */

/**
 * @swagger
 * /users:
 * get:
 * description : Use to create users
 * responses :
 *      "200":
 *      description : A successful response
 */

/**
 * @swagger
 * /users:
 * delete:
 * description : User deleted successfully
 * responses:
 * "200":
 * description : {
    "success": true,
    "message": "User deleted successfully",
    "result": null
}
 */

// expressApp.get("/user",(req,res)=>{
//   console.log("Request accepted");
//   res.status(200).send("Customer results");
// })

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
expressApp.use("/files", fileRouter);
expressApp.use("/registers", registerRouter);

// let password = "you@123"
// let hashPassword = await bcrypt.hash(password,10);
// console.log(hashPassword)

// let isValidPassword = await bcrypt.compare(password, hashPassword);
// console.log(isValidPassword)

// let infoObject = {
//   id: "53245268",
// };
// let secretKey = "hsinam";
// let expiryInfo = {
//   expiresIn: "365d", //expiry Info should be in same format as here
// };

// let token = jwt.sign(infoObject, secretKey, expiryInfo);
// console.log(token);

// let tokens = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzMjQ1MjY4IiwiaWF0IjoxNzAxODMxNzMxLCJleHAiOjE3MzMzNjc3MzF9.nk3ikFnTW13OJSJwS34_ilIEw3EK9o8R5wdmx9NvnPI";
// let infoObj = jwt.verify(tokens, secretKey);
// console.log(infoObj)

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

// let files = [
//   {
//       destination : "./public",
//       filename : "abc.jpg"
//   },
//   {
//       destination : "./public",
//       filename : "home.jpg"
//   },
//   {
//       destination : "./public",
//       filename : "harry.jpg"
//   }
// ]

// let _files = files.map((value, i)=>{
//   let url = "http://localhost:8000"
//   return`${url}/${value.filename}`
// })
// console.log(_files)
