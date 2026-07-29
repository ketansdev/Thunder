import express from "express";
import mongoose from "mongoose";
import User from "./userSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import dns from "node:dns";
import cookieParser from "cookie-parser";

dotenv.config();
dns.setServers(["8.8.8.8"]);

await mongoose.connect(process.env.MONGO_URI);
console.log("Connected:", mongoose.connection.name);

const app = express();

app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { name, age, email, password } = req.body;

    const user = await User.create({ name, age, email, password });
    console.log(user);
    //   create token

    const token = jwt.sign(
      {
        name: name,
        email: email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    //   interact with browser

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "Signup successful",
    });
  } catch (err) {
    console.log("err :", err);

    res.status(500).json({
      message: err.message,
    });
  }
});

app.get("/user", async (req, res) => {
  const { token } = req.cookies;

  const payload = jwt.verify(token, process.env.JWT_SECRET);
  console.log(payload);

  const user = await User.findOne({ email: payload.email });

  if (!user) {
    return res.status(500).json({
      message: "User not found",
    });
  }

  res.status(200).json({
    message: "Your user detail",
    user: user,
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  if (password === user.password) {
    try {
      const token = jwt.sign(
        {
          name: user.name,
          email: email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
      );

      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 1000,
      });

      res.status(200).json({
        message: "Login Successful",
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server error",
        error: err.message,
      });
    }
  } else {
    res.json({
      message: "Invalid Password",
    });
  }
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
