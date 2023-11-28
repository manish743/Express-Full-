import { Schema } from "mongoose";

let collegeSchema = Schema({
    name : {
        type : String,
        required : [true, "Name field is required"]
    },
    location : {
        type : String,
        required : [true, "Location field is required"]
    }
})

export default collegeSchema;