const { authenticateUser, getUserInfo } = require('../controllers/auth');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();

// @route POST api/login
// @desc Authenticate User
router.post('/', authenticateUser);

// @route GET api/login/user
// @desc Get user data
router.get('/user', auth, getUserInfo);

module.exports = router;
