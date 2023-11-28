import { Schema } from "mongoose";

let bookSchema = Schema({
    name : {
        type : String,
        required : [true, "name field is necessary"]
    },
    author : {
        type : String,
        required : [true, "author field is necessary"],
    },
    price : {
        type : Number,
        required : [true, "price field is necessary"]
    },
    isAvailable : {
        type : Boolean,
        required : [true, "isAvailable field is necessary"] 
    }
});

export default bookSchema;