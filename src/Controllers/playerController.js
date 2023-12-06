import { Player } from "../Schema/model.js";

export let createPlayer = async(req,res)=>{
    try {
        let data = req.body;
        let result = await Player.create(data);
        res.json({
            success : true,
            message : "Player created successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success : false,
            message : error.message
        })
    }
}

export let readPlayer = async(req,res)=>{
    try {
        let result = await Player.find({})
        res.json({
            success : true,
            message : "Player read successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success : false,
            message : error.message
        })
    }
}

export let updatePlayer = async(req,res)=>{
    try {
        let result = await Player.find({})
        res.json({
            success : true,
            message : "Player updated successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success : false,
            message : error.message
        })
    }
}