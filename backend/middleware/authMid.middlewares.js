import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookie from "cookie-parser";
dotenv.config();

export const isLogged = (req, res, next) => {
  console.log("inside auth middleware");
  try {
    const token = req.cookies?.jwt;

    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "token not found..." });
    }
    const decode = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decode;
    console.log(req.user);
    next();
  } catch (error) {
    return res.status(401).json({
      status: "failed",
      message: "Server(auth middleware) Internal Problem",
      error: error.message,
    });
  }
};
