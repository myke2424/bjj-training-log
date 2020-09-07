const { User, validate } = require('../models/user');
const bcrypt = require('bcrypt');
// test
const createUser = async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

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

  // On the client-side - when we register a user - we can read this auth header
  // We can store the JSON web-token on the client
  // When the user needs to make an API call he'll send this to the server
  const token = user.generateAuthToken();
  res.header('x-auth-token', token).send({
    _id: user._id,
    user: user.name,
    email: user.email,
  });
};

exports.createUser = createUser;
