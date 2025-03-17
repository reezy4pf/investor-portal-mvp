const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const authenticate = require('../middleware/auth');

router.get('/', authenticate, async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [{ sender: req.user.id }, { receiver: req.user.id }]
    }).populate('sender', 'email').populate('receiver', 'email').sort('-timestamp');
    res.json(messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/', authenticate, async (req, res) => {
  try {
    const { receiver, content } = req.body;
    const message = new Message({
      sender: req.user.id,
      receiver,
      content
    });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;