import { Router } from "express";
import { Teacher } from "../Schema/model.js";
import { createTeacher, deleteTeacher, readSpecificTeacher, readTeacher, updateTeacher } from "../Controllers/teacherController.js";

let teacherRouter = Router();

teacherRouter
.route("/")
.post(createTeacher)
.get(readTeacher)

teacherRouter
.route("/:teacherId")
.patch(updateTeacher)
.delete(deleteTeacher)
.get(readSpecificTeacher)

export default teacherRouter;