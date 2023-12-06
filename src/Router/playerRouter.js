import { Router } from "express";
import { createPlayer, readPlayer } from "../Controllers/playerController.js";

let playerRouter = Router();

playerRouter
.route("/")
.post(createPlayer)
.get(readPlayer)

export default playerRouter;