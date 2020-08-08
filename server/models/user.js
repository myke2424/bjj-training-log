const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');
require('dotenv').config();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  belt: {
    type: String,
    required: true,
  },
});

userSchema.methods.generateAuthToken = function () {
  const jwtPrivateKey = process.env.JWT_KEY;
  // id is the payload - once decoded store as req.user (auth middleware)
  const token = jwt.sign({ _id: this._id }, jwtPrivateKey);
  return token;
};

const User = mongoose.model('User', userSchema);

const validate = function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(5).max(50).required(),
    password: Joi.string().min(5).max(255),
    belt: Joi.string().required(),
  });

  return schema.validate(user);
};

exports.User = User;
exports.validate = validate;
