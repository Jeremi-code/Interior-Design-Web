import User from "../models/model.js";
import asyncHandler from "express-async-handler";

const sendMessage = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  const user = await User.create({ name, email, message });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid error");
  }
});

export { sendMessage };
