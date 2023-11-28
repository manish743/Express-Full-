import { Department } from "../Schema/model.js";

export let createDepartment =(req,res)=>{
    try{
    let data = req.body;
    Department.create(data);
    res.json(
        {
            success : true,
            message : "Department created successfully."
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

export let readDepartment = async(req,res)=>{
    try{
        let result = await Department.find({});
        res.json(
            {
                success : true,
                message : "Department read successfully",
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

export let updateDepartment = async(req,res)=>{
    let departmentId = req.params.departmentId;
    let data = req.body;

    try {
        let result = await Department.findByIdAndUpdate(departmentId,data);
        res.json({
            success: true,
            message: "Department updated successfully",
            result: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let deleteDepartment = async(req,res)=>{
    let departmentId = req.params.departmentId;

    try {
        let result = await Department.findByIdAndDelete(departmentId);
        res.json({
            success: true,
            message : "Department deleted successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })   
    }
}

export let readSpecificDepartment = async(req,res)=>{
    let departmentId = req.params.departmentId
    try{
        let result = await Department.findById(departmentId);
        res.json(
            {
                success : true,
                message : "Department read successfully",
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