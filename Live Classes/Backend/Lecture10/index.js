import users from "./data.js";
import express from "express";
import mongoose from "mongoose";
import User from "./userSchema.js";
import "./dnsFix.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();

await mongoose.connect(process.env.MONGO_URI);

app.use(express.json());

// create a user
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);

  res.json({
    message: "User is created successfully",
    user: user,
  });
});

//   create  bulk users
app.post("/users/bulk", async (req, res) => {
  const user = await User.insertMany(users);

  res.json({
    message: "Bulks users created successfully",
    user: user,
  });
});

//  get information of all customers

app.get("/users", async (req, res) => {
  const user = await User.find();
  res.json({
    message: "All user information is fetched",
    user: user,
  });
});

//  fetch specific user

app.get("/users/:accountNumber", async (req, res) => {
  const accountNumber = req.params.accountNumber;

  const user = await User.findOne({ accountNumber: accountNumber });

  if (!user) {
    res.json({
      message: "User doesnot exist",
    });
  } else {
    res.send({
      message: "User fetched successfully",
      user: user,
    });
  }
});

// Update the city of the user

app.patch("/users/:accountNumber", async (req, res) => {
  const accountNumber = req.params.accountNumber;

  const user = await User.findOneAndUpdate(
    { accountNumber: accountNumber },
    {
      $set: req.body,
    },
    {
      new: true,
    },
  );

  if (!user) {
    res.json({
      message: "User doesnot exist",
    });
  } else {
    res.json({
      message: "User data updated successfuly",
      user: user,
    });
  }
});

//  deposit amount

app.patch("/users/deposit/:accountNumber", async (req, res) => {
  const { balance } = req.body;

  const user = await User.findOne({ accountNumber: req.params.accountNumber });

  if (!user) {
    res.json({
      message: "User doesnot exist",
    });
  } else {
    user.balance += balance;
    await user.save();
    res.json({
      message: "Balance updated",
      user: user,
    });
  }
});

//  withdraw amount

app.patch("/users/withdraw/:accountNumber", async (req, res) => {
  const { balance } = req.body;

  const user = await User.findOne({ accountNumber: req.params.accountNumber });
  console.log(user)

  if (user.balance >= balance) {
    user.balance -= balance;
    await user.save();
    res.json({
      message: "Balance withdrawal success",
      user: user,
    });
  } else {
    res.json({
      message: "Insufficient Balance",
    });
  }
});

app.delete("/users/:accountNumber", async (req, res) => {
  const accountNumber = req.params.accountNumber;

  const user = await User.findOneAndDelete({ accountNumber: accountNumber });

  if (!user) {
    res.json({
      message: "User does not exist",
    });
  } else {
    res.json({
      message: "User Deleted Successfully",
      user: user,
    });
  }
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
