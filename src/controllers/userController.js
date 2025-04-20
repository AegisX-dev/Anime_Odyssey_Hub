// src/controllers/userController.js
const { User, UserActivity } = require('../models');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password_hash');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.logActivity = async (req, res) => {
  try {
    const { anime_id, activity_type } = req.body;
    const activity = new UserActivity({
      user_id: req.user.userId,
      anime_id,
      activity_type,
    });
    await activity.save();
    res.status(201).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getActivity = async (req, res) => {
  try {
    const activities = await UserActivity.find({ user_id: req.user.userId })
      .populate('anime_id', 'title')
      .sort({ timestamp: -1 })
      .limit(50);
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};