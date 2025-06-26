import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../model/user.model.js";
import ApiResponse from "../utils/ApiResponse.js";

export const getUserForSidebar = asyncHandler(async (req, res) => {
  const loggedInUserId = req.user.id;
  const filteredUsers = await User.find({
    _id: { $ne: loggedInUserId },
  }).select("-password");
  res
    .status(200)
    .json(
      new ApiResponse(200, "get user for sidebar successfully", filteredUsers)
    );
});
