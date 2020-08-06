const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  // Check if the user exists
  let user = await User.findOne({ email: req.body.email });
  if (!user) return 'Invalid Email or Password';

  // Compare request password with hashed password stored in DB
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid Email or Password');

  const token = user.generateAuthToken();

  res.send(token);
});

module.exports = router;
