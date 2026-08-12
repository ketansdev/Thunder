import Chat from "../model/chatSchema";
import Message from "../model/messageSchema.js"

export const createChat = async (req, res) => {
  try {
    const { model } = req.body;

    if (!model) {
      return res.status(400).json({
        message: "Model name is missing",
      });
    }

    const chat = await Chat.create({
      userId: req.user._id,
      model,
    });

    res.status(201).json({
      chatId: chat._id,
      userId: req.user._id,
      model,
      topic: chat.topic,
      createdAt: chat.createdAt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getRecentChat = async (req, res) => {
  try {
    const chats = await Chat.find({ userId: req.user._id })
      .select("topic updatedAt")
      .sort({ updatedAt: -1 })
      .limit(20);

    res.status(200).json({
      message: "Your all recent chats",
      chats,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getSingleChat = async (req, res) => {
  try {
    const { chatId } = req.params;

    const chat = await Chat.findOne({ _id: chatId, userId: req.user._id });

    if (!chat) {
      return res.status(404).json({
        message: "No data found",
      });
    }

    res.status(200).json({
      chatId: chat._id,
      userId: chat.userId,
      topic: chat.topic,
      usage: chat.usage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const deleteChat = async (req, res) => {
  try{
    const {chatId} = req.params;

    const chat = await Chat.findOne({_id : chatId, userId : req.user._id});

    if(!chat){
      return res.status(403).json({
        message : "You are not allowed to do this"
      })
    }

    await Message.deleteMany({
      chatId : chat._id
    })

    await Chat.deleteOne({
      _id : chatId
    })

    res.status(200).json({
      message : "Chat deleted successfully"
    })
  }catch(error){
    console.log(error);
    res.status(500).json({
      message : "Internal server error"
    })
  }
};
