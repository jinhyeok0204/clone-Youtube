import express from "express";
import {
    logout,
    editUser,
    deleteUser,
    seeProfile,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", editUser);
userRouter.get("/delete", deleteUser);
userRouter.get("/:id", seeProfile);

export default userRouter;
