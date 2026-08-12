import User from "../model/userSchema.js";
import bcrypt from "bcrypt";
import jwt, { sign } from "jsonwebtoken";
import { signUpSchema, loginSchema } from "../validators/userValidators.js";

const createToken = (id, email) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT secret key is missing");
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

// signup
export const signup = async (req, res) => {
  try {
    const result = signUpSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: result.error.issues[0].message,
      });
    }
    const { name, age, email, password } = result.data;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({
        message: "Email already exists",
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

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: userCreated._id,
        name: userCreated.name,
        age: userCreated.age,
        email: userCreated.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

//  login
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
        message: "Invalid crendentials",
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

    res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: existingUser._id,
        name: existingUser.name,
        age: existingUser.age,
        email: existingUser.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
    });

    res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const profile = async (req, res) => {
  try {
    res.status(200).json({
      message: "User details fetched successfully",
      user: {
        name: req.user.name,
        age: req.user.age,
        usage: req.user.usage,
        email: req.user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
