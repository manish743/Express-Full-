import { User } from "../Schema/model.js";
import bcrypt from "bcrypt";

export let createUser =async(req,res)=>{
    try{
    let data = req.body;
    let password = data.password;
    let hashPassword = await bcrypt.hash(password,10);
    data = {
        ...data, 
        password : hashPassword
    }
    let result = await User.create(data);
    res.json(
        {
            success : true,
            message : "User created successfully.",
            result : result
        }
    )
    }
    catch(error){
        res.json({
            success : false,
            message : error.message,
        })
    }
}

export let readUser = async(req,res)=>{
    try{
        let result = await User.find({});
        res.json(
            {
                success : true,
                message : "User read successfully",
                result : result
            }
        )
    }
    catch(error){
        res.json({
            success : false,
            message : error.message
        })
    }
}

export let updateUser = async(req,res)=>{
    let userId = req.params.userId;
    let data = req.body;

    try {
        let result = await User.findByIdAndUpdate(userId,data);
        res.json({
            success: true,
            message: "User updated successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let deleteUser = async(req,res)=>{
    let userId = req.params.userId;

    try {
        let result = await User.findByIdAndDelete(userId);
        res.json({
            success: true,
            message : "User deleted successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })   
    }
}

export let readSpecificUser = async(req,res)=>{
    let userId = req.params.userId
    try{
        let result = await User.findById(userId);
        res.json(
            {
                success : true,
                message : "User read successfully",
                result : result
            }
        )
    }
    catch(error){
        res.json({
            success : false,
            message : error.message
        })
    }
}

export let loginUser = async(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;

    try {
        let user = await User.findOne({email : email});
        // console.log(user)
        if(user === null){
            res.json({
                success : false,
                message : "Email or password does not match."
            })
        }
        else{
            let databasePassword = user.password;
            let isValidPassword = await bcrypt.compare(password, databasePassword);

            if(isValidPassword){
                res.json({
                    success : true,
                    message : "Login successful"
                })
            }
            else{
                res.json({
                    success : false,
                    message : "Email or password does not match"
                })
            }
        }
    } catch (error) {
        res.json({
            success : false,
            message : error.message
        })
    }
}