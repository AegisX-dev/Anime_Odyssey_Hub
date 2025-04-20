// src/models/anime.js
const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  genres: {
    type: [String],
    default: [],
  },
  synopsis: {
    type: String,
    trim: true,
  },
  release_year: {
    type: Number,
    min: [1900, 'Release year must be after 1900'],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

animeSchema.index({ title: 'text' });

module.exports = mongoose.model('Anime', animeSchema);