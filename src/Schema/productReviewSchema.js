import { Schema } from "mongoose";
import { Product, User } from "./model.js";

let productReviewSchema = Schema({
    productID : {
        // type : String,
        type : Schema.ObjectId,
        ref : "Product",
        required : [true, "Product ID field is required"]
    },
    userID : {
        // type : String,
        type : Schema.ObjectId,
        ref : "User",
        required : [true, "User ID field is required"]
    },
    rating : {
        type : Number,
        required : [true, "Rating field is required"]
    },
    description : {
        type : String,
        required : [true, "Description field is required"]
    }
})

export default productReviewSchema;