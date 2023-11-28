import { Router } from "express";
import { createClassRoom, deleteClassRoom, readClassRoom, readSpecificClassRoom, updateClassRoom } from "../Controllers/classRoomController.js";


let classRoomRouter = Router();

classRoomRouter
.route("/")
.post(createClassRoom)
.get(readClassRoom)

classRoomRouter
.route("/:classRoomId")
.patch(updateClassRoom)
.delete(deleteClassRoom)
.get(readSpecificClassRoom)

// .findById

export default classRoomRouter;