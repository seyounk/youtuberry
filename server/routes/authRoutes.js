const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/auth', authController.auth);
router.get('/oauth2callback', authController.oauth2callback);

module.exports = router;
