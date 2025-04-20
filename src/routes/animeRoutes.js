// src/routes/animeRoutes.js
const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animeController');

router.post('/', animeController.createAnime);
router.get('/', animeController.getAnimeList);
router.get('/search', animeController.searchAnime);

module.exports = router;