//"routes" to appropriate controller logic
const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profileController');

//add API routes here
router.get('/userProfile', profileController.getUserProfile);
router.post('/userProfile', profileController.postUser);

module.exports = router;
