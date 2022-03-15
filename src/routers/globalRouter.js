import express from "express";
import { recommend, search } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", recommend);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
