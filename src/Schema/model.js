import { model } from "mongoose";
import studentSchema from "./studentSchema.js";
import teacherSchema from "./teacherSchema.js";
import bookSchema from "./bookSchema.js";
import traineeSchema from "./traineeSchema.js";
import collegeSchema from "./collegeSchema.js";
import classRoomSchema from "./classRoomSchema.js";
import departmentSchema from "./departmentSchema.js";

export let Student = model("Student",studentSchema);
export let Teacher = model("Teacher",teacherSchema);
export let Book = model("Book", bookSchema);
export let Trainee = model("Trainee", traineeSchema);
export let College = model("College", collegeSchema);
export let ClassRoom = model("ClassRoom", classRoomSchema);
export let Department = model("Department", departmentSchema);