import { Router } from "express";
import { createProductReview, deleteProductReview, readProductReview, readSpecificProductReview, updateProductReview } from "../Controllers/productReviewController.js";

let productReviewRouter = Router();

productReviewRouter
.route("/")
.post(createProductReview)
.get(readProductReview)

productReviewRouter
.route("/:productReviewId")
.patch(updateProductReview)
.delete(deleteProductReview)
.get(readSpecificProductReview)

// .findById

export default productReviewRouter;