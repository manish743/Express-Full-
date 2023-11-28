import { Router } from "express";
import { Department } from "../Schema/model.js";
import { createDepartment, deleteDepartment, readDepartment, readSpecificDepartment, updateDepartment } from "../Controllers/departmentController.js";

let departmentRouter = Router();

departmentRouter
.route("/")
.post(createDepartment)
.get(readDepartment)

departmentRouter
.route("/:departmentId")
.patch(updateDepartment)
.delete(deleteDepartment)
.get(readSpecificDepartment)

// .findById

export default departmentRouter;