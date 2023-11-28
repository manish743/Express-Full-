import { Teacher } from "../Schema/model.js";

export let createTeacher = async(req,res)=>{
    let data = req.body;
    try {
        await Teacher.create(data);
        res.json({
            success : true,
            message : "Teacher created successfully",
        })
    } catch (error) {
        res.json({
            success : false,
            message : error.message
        })
    }
}

export let readTeacher = async(req,res)=>{
    try {
        let result = await Teacher.find({});
        res.json({
            success : true,
            message : "Teacher read successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success : false,
            message : error.message
        })
    }
}

export let updateTeacher = async(req,res)=>{
    let teacherId = req.params.teacherId;
    let data = req.body;

    try {
        let result = await Teacher.findByIdAndUpdate(teacherId,data);
        res.json({
            success : true,
            message : "Teacher updated successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success : true,
            message : error.message
        })
    }
}

export let deleteTeacher = async(req,res)=>{

}

export let readSpecificTeacher = async(req,res)=>{

}