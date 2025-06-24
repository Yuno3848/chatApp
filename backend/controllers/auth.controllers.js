import { User } from "../model/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const signup = asyncHandler(async (req, res) => {
  const { userName, fullName, password, confirmPassword, gender } = req.body;
  if (
    [userName, fullName, password, confirmPassword, gender].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  if (password !== confirmPassword) {
    throw new ApiError(400, "Password don't match");
  }

  const user = await User.findOne({ userName });
  if (user) {
    throw new ApiError(400, "user already exists");
  }
});

export const login = asyncHandler(async (req, res) => {});

export const logout = asyncHandler(async (req, res) => {});
