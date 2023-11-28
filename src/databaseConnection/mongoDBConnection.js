import mongoose from "mongoose"

let connectToMongoDB = async()=>{
    try{
        await mongoose.connect("mongodb://0.0.0.0:27017/dw9");
        console.log("Our application is connected to MongoDB successfully")
    }
    catch(error){
        console.log(error.message);
    }
};

export default connectToMongoDB;