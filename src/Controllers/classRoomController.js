import { ClassRoom } from "../Schema/model.js";


export let createClassRoom =(req,res)=>{
    try{
    let data = req.body;
    ClassRoom.create(data);
    res.json(
        {
            success : true,
            message : "ClassRoom created successfully."
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

export let readClassRoom = async(req,res)=>{
    try{
        let result = await ClassRoom.find({});
        res.json(
            {
                success : true,
                message : "ClassRoom read successfully",
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

export let updateClassRoom = async(req,res)=>{
    let classRoomId = req.params.classRoomId;
    let data = req.body;

    try {
        let result = await ClassRoom.findByIdAndUpdate(classRoomId,data);
        res.json({
            success: true,
            message: "ClassRoom updated successfully",
            result: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let deleteClassRoom = async(req,res)=>{
    let classRoomId = req.params.classRoomId;

    try {
        let result = await ClassRoom.findByIdAndDelete(classRoomId);
        res.json({
            success: true,
            message : "ClassRoom deleted successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })   
    }
}

export let readSpecificClassRoom = async(req,res)=>{
    let classRoomId = req.params.classRoomId
    try{
        let result = await ClassRoom.findById(classRoomId);
        res.json(
            {
                success : true,
                message : "ClassRoom read successfully",
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