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
        // let result = await Student.find({age:{$gte:15,$lte:25}});
        // finding those whose name is given specific
        // let result = await Student.find({name:{$in:["Manish","Sachin"]}})
        // let result = await Student.find({$or:[{name:"Manisha"}, {name:"Sachin"}]});
        // let result = await Student.find({$or:[{name:"Samira", age:28}, {name:"Manish"}]});
        // let result = await Student.find({$and:[{name:"Manish"},{age:24}]});
        // let result = await Student.find({$and:[{age:{$gte:15}},{age:{$lte:20}}]});
        // find those user which doesn't conatain name: Manish, Manisha
        // let result = await Student.find({$and:[{name:{$ne:"Manish"}}, {name:{$ne:"Manisha"}}]});
        let query = req.query
        // let result = await Student.find({$and:[{name:query.name},{age:query.age}]})
        let result = await Student.find(query)
        console.log(query)
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