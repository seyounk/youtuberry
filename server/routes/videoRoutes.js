const express = require('express');
const videoController = require('../controllers/videoController');
const router = express.Router();

router.get('/analyze', videoController.analyzeVideo);

module.exports = router;
