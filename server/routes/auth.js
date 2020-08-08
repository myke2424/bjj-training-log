const { authenticateUser } = require('../controllers/auth');
const express = require('express');
const router = express.Router();

router.post('/', authenticateUser);

module.exports = router;
