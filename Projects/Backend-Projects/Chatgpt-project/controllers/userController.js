// Local imports
import User from "../model/userSchema.js";
import Chat from "../model/chatSchema.js";
import Message from "../model/messageSChema.js";
import { signupSchema, loginSchema } from "../validators/userValidator.js";

//  External packages
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import messageSchema from "../model/messageSChema.js";

const createToken = (id, email) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT Secret key is missing");
  }

  const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

const cookiesOption = {
  httpOnly: true,
  secure: false,
  maxAge: 60 * 60 * 1000,
};

export const signup = async (req, res) => {
  try {
    const result = signupSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: result.error.issues[0].message,
      });
    }

    const { name, age, email, password } = result.data;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const userCreated = await User.create({
      name,
      age,
      email,
      password: hashPassword,
    });

    const token = createToken(userCreated._id, userCreated.email);

    res.cookie("token", token, cookiesOption);

    return res.status(201).json({
      message: "User created successfully",
      user: {
        name: userCreated.name,
        age: userCreated.age,
        email: userCreated.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const result = loginSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: result.error.issues[0].message,
      });
    }

    const { email, password } = result.data;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = createToken(existingUser._id, existingUser.email);

    res.cookie("token", token, cookiesOption);

    return res.status(200).json({
      message: "User logged in successfully",
      user: {
        name: existingUser.name,
        age: existingUser.age,
        email: existingUser.email,
        usage: existingUser.usage,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("token", { httpOnly: true, secure: false });

    return res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const profile = (req, res) => {
  try {
    return res.status(200).json({
      user: {
        name: req.user.name,
        age: req.user.age,
        email: req.user.email,
        usage: req.user.usage,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const userId = req.user._id;

    await Message.deleteMany({ userId });

    await Chat.deleteMany({ userId });

    await User.deleteOne({ _id: userId });

    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
    });

    return res.status(200).json({
      message: "Account deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
