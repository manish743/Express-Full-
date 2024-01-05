import { config } from "dotenv";
import { Product } from "../Schema/model.js";

export let createProduct = async(req, res) => {
  try {
    let data = req.body;
    let result = await Product.create(data);
    res.status(201).json({
      success: true,
      message: "Product created successfully.",
      result : result
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readProduct = async (req, res) => {
  try {
    let result = await Product.find({});
    res.json({
      success: true,
      message: "Product read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let updateProduct = async (req, res) => {
  let productId = req.params.productId;
  let data = req.body;

  try {
    let result = await Product.findByIdAndUpdate(productId, data);
    res.json({
      success: true,
      message: "Product updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteProduct = async (req, res) => {
  let productId = req.params.productId;

  try {
    let result = await Product.findByIdAndDelete(productId);
    res.json({
      success: true,
      message: "Product deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificProduct = async (req, res) => {
  let productId = req.params.productId;
  try {
    let result2 = await Product.findById(productId);
    res.json({
      success: true,
      message: "Product read successfully",
      result: result2
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};