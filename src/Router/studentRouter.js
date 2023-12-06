import { Router } from "express";
import { createStudent, deleteStudent, readSpecificStudent, readStudent, updateStudent } from "../Controllers/studentController.js";

let studentRouter = Router();

studentRouter
.route("/")
.post(createStudent)
.get(readStudent)

studentRouter
.route("/:studentId")
.patch(updateStudent)
.delete(deleteStudent)
.get(readSpecificStudent)

// .findById

export default studentRouter;