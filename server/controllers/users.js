const { User } = require('../models/user');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered');

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    belt: req.body.belt,
  });

  // Hash password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  res.send({
    user: user.name,
    email: user.email,
  });
};

exports.createUser = createUser;
