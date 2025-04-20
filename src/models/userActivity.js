// src/models/userActivity.js
const mongoose = require('mongoose');

const userActivitySchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  anime_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Anime',
    required: true,
  },
  activity_type: {
    type: String,
    enum: ['watched', 'favorited'],
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

userActivitySchema.index({ user_id: 1 });

module.exports = mongoose.model('UserActivity', userActivitySchema);