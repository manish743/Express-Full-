import { Router } from "express";

let bikeRouter = Router();

bikeRouter
.route("/")
.post(
    (req,res,next)=>{
        console.log("I am middleware 1");
        next("hello");
    },
    (err,req,res,next)=>{
        console.log("I am middleware 2");
        next("hi");
    },
    (err,req,res,next)=>{
        console.log("I am middleware 3");
        next()
        res.json("I am ")
    },
    (req,res,next)=>{
        console.log("I am middleware 4");
        next("hello");
    }
    )
.get(()=>{
    console.log("bike get")
})
.patch(()=>{
    console.log("bike patch")
})
.delete(()=>{
    console.log("bike delete")
})

export default bikeRouter;