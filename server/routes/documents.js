const express = require('express');
const router = express.Router();
const Document = require('../models/Document');
const authenticate = require('../middleware/auth');

router.get('/', authenticate, async (req, res) => {
  try {
    const documents = await Document.find({ userId: req.user.id });
    res.json(documents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/upload', authenticate, async (req, res) => {
  try {
    // This is a simplified version without actual file upload
    const { name, path } = req.body;
    const document = new Document({ name, path, userId: req.user.id });
    await document.save();
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;