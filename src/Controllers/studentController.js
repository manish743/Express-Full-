import { Student } from "../Schema/model.js";

export let createStudent =(req,res)=>{
    try{
    let data = req.body;
    Student.create(data);
    res.json(
        {
            success : true,
            message : "Student created successfully."
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

export let readStudent = async(req,res)=>{
    try{
        // let result = await Student.find({});
        // let result = await Student.find({name : "Samira", age : 20});
        // let result = await Student.find({age:{$gt:18}});
        // let result = await Student.find({age:{$lt:21}});
        // let result = await Student.find({name:{$ne:"Manish"}});
        // let result = await Student.find({age:{$gte:20}});
        let result = await Student.find({age:{$gte:15,$lte:25}});
        res.json(
            {
                success : true,
                message : "Student read successfully",
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

export let updateStudent = async(req,res)=>{
    let studentId = req.params.studentId;
    let data = req.body;

    try {
        let result = await Student.findByIdAndUpdate(studentId,data);
        res.json({
            success: true,
            message: "Student updated successfully",
            result: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let deleteStudent = async(req,res)=>{
    let studentId = req.params.studentId;

    try {
        let result = await Student.findByIdAndDelete(studentId);
        res.json({
            success: true,
            message : "Student deleted successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })   
    }
}

export let readSpecificStudent = async(req,res)=>{
    let studentId = req.params.studentId
    try{
        let result = await Student.findById(studentId);
        res.json(
            {
                success : true,
                message : "Student read successfully",
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