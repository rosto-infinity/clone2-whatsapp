import Message from '../models/messageModels.js';

const createMessage = async (req, res) => {
  const { message, image, receverId } = req.body;

  try {
    const messages = await Message.create({
      user: req.user.id,
      senderId: req.user.id,
      receverId,
      message,
      image,
    });
    if (messages) {
      res.status(201).json(messages);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

const GetMessage = async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        {
          $and: [{ receverId: req.params.id }, { senderId: req.user.id }],
        },
        {
          $and: [{ receverId: req.user.id }, { senderId: req.params.id }],
        },
      ],
    });
    res.status(201).json(messages);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: `Une erreur s'est produite`,
    });
  }
};

const deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.status(201).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { deleteMessage, GetMessage, createMessage };
