// src/controllers/animeController.js
const { Anime } = require('../models');

exports.createAnime = async (req, res) => {
  try {
    const anime = new Anime(req.body);
    await anime.save();
    res.status(201).json(anime);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAnimeList = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const anime = await Anime.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await Anime.countDocuments();
    res.json({
      anime,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.searchAnime = async (req, res) => {
  try {
    const { query, genre } = req.query;
    let searchCriteria = {};

    if (query) {
      searchCriteria.$text = { $search: query };
    }
    if (genre) {
      searchCriteria.genres = genre;
    }

    const anime = await Anime.find(searchCriteria).limit(10);
    res.json(anime);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};