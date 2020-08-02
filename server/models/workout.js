const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    required: true,
  },
  sessionLength: {
    type: Number,
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

exports.Workout = Workout;
