import { Schema } from "mongoose";

let traineeSchema = Schema({
    name : {
        type : String,
        required : [true, "name field is necessary"]
    },
    class : {
        type : String,
        required : [true, "class field is necessary"]
    },
    faculty : {
        type : String,
        required : [true, "faculty field is necessary"]
    }
});

export default traineeSchema;