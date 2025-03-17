const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  totalValue: { type: Number, required: true },
  assets: [{
    symbol: { type: String, required: true },
    amount: { type: Number, required: true },
    value: { type: Number, required: true }
  }]
});

module.exports = mongoose.model('Portfolio', portfolioSchema);