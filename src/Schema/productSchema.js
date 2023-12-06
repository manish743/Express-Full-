import { Schema } from "mongoose";

let productSchema = Schema({
    name : {
        type : String,
        required : [true, "Name field is required"]
    },
    price : {
        type : Number,
        required : [true, "Price field is required"]
    },
    quantity : {
        type : Number,
        required : [true, "Quantity field is required"]
    }
})

export default productSchema;