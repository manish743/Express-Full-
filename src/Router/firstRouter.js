import { Router } from "express";

let firstRouter = Router();

firstRouter
.route("/")   //while selecting API, it sees the route, it doesn't see the url
.post((req,res)=>{
    res.json("home post")
    console.log("query data", req.query)
    console.log("body data", req.body)
})

firstRouter
.route("/name")
.post((req,res)=>{
    console.log(req.body)
    res.json("name post")
})

firstRouter
.route("/a/:firstName/b/:lastName")
.post((req,res)=>{
    console.log(req.params)
    res.json("Hello")
})

// firstRouter
// .route("/:age")
// .post((req,res)=>{
//     console.log(req.params)
//     res.json("Happy Tihar")
//     // res.json("Hello")  This could not run because there is only one response for each request
// })

export default firstRouter;