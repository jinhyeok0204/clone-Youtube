import express from "express";
import { recommend } from "../controllers/videoController";
import { join } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", recommend);
globalRouter.get("/join", join);

export default globalRouter;
