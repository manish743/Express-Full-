import { Schema } from "mongoose";

let studentSchema = Schema({
    name : {
        type : String,
        required : [true, "Name field is required"]
    },
    age : {
        type : Number,
        required : [true, "Age field is required"]
    },
    isMarried : {
        type : Boolean,
        required : [true, "isMarried field is required"]
    }
})

export default studentSchema;