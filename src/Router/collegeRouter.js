import { Router } from "express";
import { createCollege, deleteCollege, readCollege, readSpecificCollege, updateCollege } from "../Controllers/collegeController.js";


let collegeRouter = Router();

collegeRouter
.route("/")
.post(createCollege)
.get(readCollege)

collegeRouter
.route("/:collegeId")
.patch(updateCollege)
.delete(deleteCollege)
.get(readSpecificCollege)

// .findById

export default collegeRouter;