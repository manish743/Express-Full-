import { College } from "../Schema/model.js";



export let createCollege =(req,res)=>{
    try{
    let data = req.body;
    College.create(data);
    res.json(
        {
            success : true,
            message : "College created successfully."
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

export let readCollege = async(req,res)=>{
    try{
        let result = await College.find({});
        res.json(
            {
                success : true,
                message : "College read successfully",
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

export let updateCollege = async(req,res)=>{
    let collegeId = req.params.collegeId;
    let data = req.body;

    try {
        let result = await College.findByIdAndUpdate(collegeId,data);
        res.json({
            success: true,
            message: "College updated successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let deleteCollege = async(req,res)=>{
    let collegeId = req.params.collegeId;

    try {
        let result = await College.findByIdAndDelete(collegeId);
        res.json({
            success: true,
            message : "College deleted successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })   
    }
}

export let readSpecificCollege = async(req,res)=>{
    let collegeId = req.params.collegeId
    try{
        let result = await College.findById(collegeId);
        res.json(
            {
                success : true,
                message : "College read successfully",
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