import { Schema } from "mongoose";

let classRoomSchema = Schema({
    name : {
        type : String,
        required : [true, "Name field is required"]
    },
    numberOfBench : {
        type : Number,
        required : [true, "numberOfBench field is required"]
    },
    hasTV : {
        type : Boolean,
        required : [true, "hasTV field is required"]
    }
})

export default classRoomSchema;