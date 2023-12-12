import { Router } from "express";
import upload from "../middleware/upload.js";

let fileRouter = Router();

let uploadMultipleFiles = (req,res,next)=>{
    console.log(req.files);

    let links = req.files.map((value,i)=>{
        return (`localhost:8000/${value.filename}`)
    });

    res.json({
        success : true,
        message : "File upload successfully.",
        result : links
    })
}

fileRouter
.route("/")
.post(upload.array("document", 5), uploadMultipleFiles)

// here, upload.array() is a middleware
// uploadMultipleFiles takes req.files

export default fileRouter;