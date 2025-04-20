// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/', auth, userController.getProfile);
router.post('/activity', auth, userController.logActivity);
router.get('/activity', auth, userController.getActivity);

module.exports = router;