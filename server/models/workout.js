const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const workoutSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 50,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: String,
    required: true,
  },
  sessionLength: {
    type: String,
    required: true,
  },
  techniques: {
    type: [String],
  },
  notes: {
    type: String,
  },
});

const Workout = mongoose.model('Workout', workoutSchema);

const validate = function validateWorkout(workout) {
  const schema = new Joi.object({
    type: Joi.string().min(4).max(50).required(),
    userId: Joi.allow().required(),
    date: Joi.string().required(),
    sessionLength: Joi.string().required(),
    techniques: Joi.array(),
    notes: Joi.string(),
  });

  return schema.validate(workout);
};

exports.Workout = Workout;
exports.validate = validate;
