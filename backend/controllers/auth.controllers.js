import { User } from "../model/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import cookie from "cookie-parser";
export const signup = asyncHandler(async (req, res) => {
  const { email, username, fullname, password, confirmPassword, gender } =
    req.body;
  if (
    [email, username, fullname, password, confirmPassword, gender].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  if (password.length < 6) {
    throw new ApiError(400, "Password must be at least 6 characters...");
  }

  if (password !== confirmPassword) {
    throw new ApiError(400, "Password don't match");
  }

  const isUser = await User.findOne({ username });
  if (isUser) {
    throw new ApiError(400, "user already exists");
  }

  const avatarPath = req.file?.path;
  const avatar = await uploadOnCloudinary(avatarPath);
  console.log("avatar", avatar);
  if (!avatar) {
    throw new ApiError(404, "avatar is required");
  }

  // console.log("avatar", avatar);
  const user = await User.create({
    email,
    username,
    fullname,
    password,
    gender,
    profilePic: { url: avatar.url, localPath: avatarPath },
  });

  if (!user) {
    throw new ApiError(505, "Error while creating user....");
  }
  const token = user.generateToken();
  if (!token) {
    throw new ApiError(400, "user token not generated...");
  }
  const cookieOptions = {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV != "DEVELOPMENT",
  };

  await user.save();
  return res
    .status(201)
    .cookie("jwt", token, cookieOptions)
    .json(new ApiResponse(201, "signed up successfully...", user));
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if ([email, password].some((field) => field.trim() === "")) {
    throw new ApiError(400, "All fields are required...");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(400, "user not found...");
  }

  const isPassword = await user.isPasswordMatch(password);
  if (!isPassword) {
    throw new ApiError(400, "password is wrong...");
  }

  const token = user.generateToken();
  if (!token) {
    throw new ApiError(400, "token not generated...");
  }
  const cookieOptions = {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV != "DEVELOPMENT",
  };

  return res
    .status(200)
    .cookie("jwt", token, cookieOptions)
    .json(new ApiResponse(200, "login successfully", user));
});

export const logout = asyncHandler(async (req, res) => {
  res.clearCookie();
  return res.status(200).json(new ApiResponse(200, "user logout successfully"));
});
