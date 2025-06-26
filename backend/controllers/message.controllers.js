import { Conversation } from "../model/conversation.model.js";
import mongoose from "mongoose";
import { Message } from "../model/message.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const sendMessage = asyncHandler(async (req, res) => {
  const { message } = req.body;
  const { id: receiverId } = req.params;
  const senderId = req.user.id;
  if (!message) {
    throw new ApiError(400, "Message field is required...");
  }
  if (!receiverId || !mongoose.Types.ObjectId.isValid(receiverId)) {
    throw new ApiError(400, "Invalid reciever id....");
  }
  if (!senderId || !mongoose.Types.ObjectId.isValid(senderId)) {
    throw new ApiError(401, "Unauthorized: Sender ID is missing.");
  }

  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
  }

  const newMessage = await Message.create({
    senderId,
    receiverId,
    message,
  });

  if (newMessage) {
    conversation.message.push(newMessage._id);
  }

  await Promise.all([conversation.save(), newMessage.save()]);

  return res
    .status(201)
    .json(new ApiResponse(201, "message sent successfully...", newMessage));
});

export const getMessage = asyncHandler(async (req, res) => {
  const { id: userToChatId } = req.params;
  const senderId = req.user.id;

  if (!userToChatId || !mongoose.Types.ObjectId.isValid(userToChatId)) {
    throw new ApiError(400, "Invalid user chat id...");
  }

  if (!senderId || !mongoose.Types.ObjectId.isValid(senderId)) {
    throw new ApiError(400, "Invalid sender id... ");
  }

  const conversation = await Conversation.findOne({
    participants: { $all: [senderId, userToChatId] },
  }).populate("message");

  if (!conversation) {
    throw new ApiError(400, "conversation not found...");
  }

  const messages = conversation.message;

  return res
    .status(200)
    .json(new ApiResponse(200, "conversation fetched successfully", messages));
});
