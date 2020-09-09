const { User } = require('../models/user');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');

const validate = function validateAuth(req) {
  const schema = new Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(req);
};

const authenticateUser = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if the user exists
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid Email or Password');

  // Compare request password with hashed password stored in DB
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid Email or Password');

  const token = user.generateAuthToken();
  // req.session.key = user._id;
  // console.log(`SessionID:  sess:${req.sessionID}`);
  // console.log(req.session);

  res.send({
    jwtToken: token,
    user: { id: user._id, email: user.email, name: user.name, belt: user.belt },
  });
};

// Get user info from decoded payload
const getUserInfo = async (req, res) => {
  console.log(req.user);
  const user = await User.findById(req.user._id).select('-password');
  res.json({ user });
};

exports.authenticateUser = authenticateUser;
exports.getUserInfo = getUserInfo;
