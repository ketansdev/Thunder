// External Packages 
import dotenv from "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";

// Local Imports
import connectDB from "./config/database.js";
import userRouter from "./routes/userRouter.js";
import chatRouter from "./routes/chatRouter.js";
import messageRouter from "./routes/messageRouter.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/chat", chatRouter);
app.use("/message", messageRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log(`Server started at port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};


startServer();