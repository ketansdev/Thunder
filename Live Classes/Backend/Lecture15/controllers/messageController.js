import Message from "../model/messageSchema.js";
import Chat from "../model/chatSchema.js";

export const getMessage = async (req, res) => {
  try {
    const { chatId } = req.params;

    const chat = await Chat.findOne({ _id: chatId, userId: req.user._id });

    if (!chat) {
      return res.status(404).json({
        message: "Chat not found",
      });
    }

    const messages = await Message.find({
      chatId: chatId,
    }).sort({ createdAt: 1 });

    res.status(200).json({
      message: "Your all chats are here",
      messages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const sendMessage = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
