import { Router } from "express";
import { createUser, deleteUser, loginUser, readSpecificUser, readUser, updateUser } from "../Controllers/userController.js";

let userRouter = Router();

userRouter
.route("/")
.post(createUser)
.get(readUser)

userRouter
.route("/login")
.post(loginUser)

userRouter
.route("/:userId")
.patch(updateUser)
.delete(deleteUser)
.get(readSpecificUser)

// .findById

export default userRouter;