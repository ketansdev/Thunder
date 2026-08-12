import express from "express";
import authUserMiddleware from "../middlewares/authUserMiddleware";
import { getMessage, sendMessage } from "../controllers/messageController.js";

const messageRouter = express.Router();

messageRouter.use(authUserMiddleware);

messageRouter.get("/chatId", getMessage);
messageRouter.post("/chatId", sendMessage);

export default messageRouter;
