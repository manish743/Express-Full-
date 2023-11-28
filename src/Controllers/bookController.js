import { Book } from "../Schema/model.js";

export let createBook = async(req,res)=>{
    let data = req.body;
    try {
        
        await Book.create(data);
        res.json({
            success : true,
            message : "Book created successfully"
        })
    } catch (error) {
        res.json({
            success : false,
            message : error.message
        })
    }
}

export let readBook = async(req,res)=>{
    try {
        let result = await Book.find({})
        res.json({
            success : true,
            message : "Student read successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success : false,
            message : error.message
        })
    }
}

export let updateBook = async(req,res)=>{
    let bookId = req.params.bookId;
    let data = req.body;

    try {
        let result = await Book.findByIdAndUpdate(bookId,data);
        res.json({
            success : true,
            message : "Book updated successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success : false,
            message : error.message
        })
    }
}

export let deleteBook = async(req,res)=>{
    let bookId = req.params.bookId;
    let data = req.body;

    try {
        let result = await Book.findByIdAndDelete(bookId,data);
        res.json({
            success : true,
            message : "Book deleted successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success : false,
            message : error.message
        })
    }
}

export let readSpecificBook = async(req,res)=>{
    let bookId = req.params.bookId;

    try {
        let result = await Book.findById(bookId);
        res.json({
            success : true,
            message : "Specific book read successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success : true,
            message : error.message
        })
    }
}