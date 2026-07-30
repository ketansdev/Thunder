import express from "express";
import { login, logout, signup, profile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/signup", signup);
userRouter.get("/profile", profile);


export default userRouter;