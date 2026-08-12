import express from "express";
import connectDB from "./config/database";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import chatRouter from "./routes/chatRouter.js"
import messageRouter from "./routes/messageRouter";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser())


app.use("/user", userRouter);
app.use("/chat", chatRouter)
app.use("/message", messageRouter);

const startServer = async () => {
  try {
    await connectDB();

    app.listen(process.env.PORT, () => {
      console.log(`Server started at port - ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};


startServer()