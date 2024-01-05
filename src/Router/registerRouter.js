import { Router } from "express";
import {
  createRegister,
  deleteSpecificUser,
  forgotPassword,
  loginUser,
  myProfile,
  readAllUser,
  readSpecificUser,
  resetPassword,
  updatePassword,
  updateProfile,
  updateSpecificUser,
  verifyEmail,
} from "../Controllers/registerController.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../config.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { authorized } from "../middleware/authorized.js";

let registerRouter = Router();

registerRouter
  .route("/")
  .post(createRegister)
  .get(isAuthenticated, authorized(["Admin", "superAdmin"]), readAllUser);

registerRouter.route("/verify-email").patch(verifyEmail);

registerRouter.route("/login").post(loginUser);

registerRouter.route("/my-profile").get((req, res, next) => {
  try {
    // get token from postman
    let bearerToken = req.headers.authorization;
    let token = bearerToken.split(" ")[1];

    // verify token
    let isValidToken = jwt.verify(token, secretKey);

    // get id from token
    let id = isValidToken.id;
    req.id = id;
    next();
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
}, myProfile);

registerRouter.route("/update-profile").patch((req, res, next) => {
  try {
    // get token from postman
    let bearerToken = req.headers.authorization;
    let token = bearerToken.split(" ")[1];

    // verify token
    let isValidToken = jwt.verify(token, secretKey);

    // get id from token
    let id = isValidToken.id;
    req.id = id;
    next();
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
}, updateProfile);

registerRouter.route("/update-password").patch((req, res, next) => {
  try {
    // get token from postman
    let bearerToken = req.headers.authorization;
    let token = bearerToken.split(" ")[1];

    // verify token
    let isValidToken = jwt.verify(token, secretKey);

    // get id from token
    let id = isValidToken.id;
    req.id = id;
    next();
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
}, updatePassword);

registerRouter.route("/forgot-password").post(forgotPassword);

registerRouter.route("/reset-password").patch((req, res, next) => {
  try {
    // get token from postman
    let bearerToken = req.headers.authorization;
    let token = bearerToken.split(" ")[1];

    // verify token
    let isValidToken = jwt.verify(token, secretKey);

    // get id from token
    let id = isValidToken.id;
    req.id = id;
    next();
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
}, resetPassword);

registerRouter
  .route("/:id")
  .get(isAuthenticated, authorized(["Admin", "superAdmin"]), readSpecificUser)
  .patch(
    isAuthenticated,
    authorized(["Admin", "superAdmin"]),
    updateSpecificUser
  )
  .delete(isAuthenticated, authorized(["superAdmin"]), deleteSpecificUser);

export default registerRouter;
