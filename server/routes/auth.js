const express = require('express');
const router = express.Router();
const User = require('../models/User');
const speakeasy = require('speakeasy');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const user = new User({ email, password, role });
    const mfaSecret = speakeasy.generateSecret();
    user.mfaSecret = mfaSecret.base32;
    await user.save();
    res.status(201).json({ message: 'User registered. Set up MFA with this secret: ' + mfaSecret.base32 });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password, mfaToken } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const verified = speakeasy.totp.verify({
      secret: user.mfaSecret,
      encoding: 'base32',
      token: mfaToken,
    });
    if (!verified) {
      return res.status(401).json({ message: 'Invalid MFA token' });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;