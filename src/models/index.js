// src/models/index.js
const mongoose = require('mongoose');

const models = {
  Anime: require('./anime'),
  User: require('./user'),
  UserActivity: require('./userActivity'),
};

module.exports = models;