import { Schema } from "mongoose";

let playerSchema = Schema({
    name : {
        type : String,
        required : [true, "Name field is required"]
    },
    age : {
        type : Number,
        required : [true, "Age field is required"]
    },
    country : {
        type : String,
        required : [true, "Country field is required"]
    },
    franchises : [
        {
            type : String,
            required : [true, "Franchises field is required"]
        }
    ]
})

export default playerSchema;