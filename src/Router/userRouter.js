import { Router } from "express";
import { createUser, deleteUser, loginUser, myProfile, readSpecificUser, readUser, updateProfile, updateUser } from "../Controllers/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

let userRouter = Router();

userRouter
.route("/")
.post(createUser)
.get(readUser)

userRouter
.route("/login")
.post(loginUser)

userRouter
.route("/myProfile")
.get(isAuthenticated, myProfile)
.patch(isAuthenticated, updateProfile)

userRouter
.route("/:userId")
.patch(updateUser)
.delete(deleteUser)
.get(readSpecificUser)

// .findById

export default userRouter;