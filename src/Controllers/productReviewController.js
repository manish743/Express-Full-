import { ProductReview } from "../Schema/model.js";

export let createProductReview =(req,res)=>{
    try{
    let data = req.body;
    ProductReview.create(data);
    res.json(
        {
            success : true,
            message : "ProductReview created successfully."
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

export let readProductReview = async(req,res)=>{
    try{
        // let result = await ProductReview.find({}).populate("productID", "-_id")
        // let result = await ProductReview.find({}).populate("productID userID", "name price age -_id");
        // let result = await ProductReview.find({}).populate("userID","name email age location")
        let result = await ProductReview.find({}).populate("productID", "name price").populate("userID", "name age email password -_id")
        res.json(
            {
                success : true,
                message : "ProductReview read successfully",
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

export let updateProductReview = async(req,res)=>{
    let productReviewId = req.params.productReviewId;
    let data = req.body;

    try {
        let result = await ProductReview.findByIdAndUpdate(productReviewId,data);
        res.json({
            success: true,
            message: "ProductReview updated successfully",
            result: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let deleteProductReview = async(req,res)=>{
    let productReviewId = req.params.productReviewId;

    try {
        let result = await ProductReview.findByIdAndDelete(productReviewId);
        res.json({
            success: true,
            message : "ProductReview deleted successfully",
            result : result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })   
    }
}

export let readSpecificProductReview = async(req,res)=>{
    let productReviewId = req.params.productReviewId
    try{
        let result = await ProductReview.findById(productReviewId);
        res.json(
            {
                success : true,
                message : "ProductReview read successfully",
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