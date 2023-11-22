import { Router } from "express"

let traineeRouter = Router()

traineeRouter
.route("/")
.post(()=>{
    console.log({success: true, message: "school created successfully"})
})
.get(()=>{
    console.log({success: true, message: "school read successfully"})
})
.patch(()=>{
    console.log({success: true, message: "school updated successfully"})
})
.delete(()=>{
    console.log({success: true, message: "school deleted successfully"})
})

export default traineeRouter;