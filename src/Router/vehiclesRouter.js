import { Router } from "express";

let vehiclesRouter = Router()

vehiclesRouter
.route("/")
.post(()=>{
    let obj = {success: true, message: "vehicles created successfully"}
    console.log(obj)
})
.get(()=>{
    let obj = {success: true, message: "vehicles read successfully"}
    console.log(obj)
})
.patch(()=>{
    let obj = {success: true, message: "vehicles updated successfully"}
    console.log(obj)
})
.delete(()=>{
    let obj = {success: true, message: "vehicles deleted successfully"}
    console.log(obj)
})

export default vehiclesRouter