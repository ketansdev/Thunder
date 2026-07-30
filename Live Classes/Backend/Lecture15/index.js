import express from "express";
import connectDB from "./config/database";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter";
import messageRouter from "./routes/messageRouter";

dotenv.config();

const app = express();
app.use(express.json());


app.use("/user", userRouter);
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
