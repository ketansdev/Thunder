import jwt from "jsonwebtoken";
import User from "../model/userSchema.js";

const authUserMiddleware = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        message: "Authentication token missing",
      });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const existingUser = await User.findById(payload.id);

    if (!existingUser) {
      return res.status(404).json({
        message: "User Doesnt exist",
      });
    }

    req.user = existingUser;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Unauthorized User",
    });
  }
};

export default authUserMiddleware;
