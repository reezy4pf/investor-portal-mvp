const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');
const authenticate = require('../middleware/auth');

router.get('/', authenticate, async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ userId: req.user.id });
    if (!portfolio) return res.status(404).json({ message: 'Portfolio not found' });
    res.json(portfolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;