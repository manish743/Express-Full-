import { Schema } from "mongoose";

let departmentSchema = Schema({
    name : {
        type : String,
        required : [true, "Name field is required"]
    },
    hod : {
        type : String,
        required : [true, "hod field is required"]
    },
    totalMember : {
        type : Number,
        required : [true, "totalMember field is required"]
    }
})

export default departmentSchema;