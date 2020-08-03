const { Workout } = require('../models/workout');

const createWorkout = async (req, res) => {
  const workout = new Workout({
    type: req.body.type,
    user: req.body.userId,
    date: req.body.date,
    sessionLength: req.body.sessionLength,
    techniques: req.body.techniques,
    notes: req.body.notes,
  });

  await workout.save();

  res.send(workout);
};

const getWorkout = async (req, res) => {
  const workout = await Workout.findById(req.params.id);
  res.send(workout);
};

const getWorkouts = async (req, res) => {
  const workouts = await Workout.find();
  res.send(workouts);
};

exports.createWorkout = createWorkout;
exports.getWorkout = getWorkout;
exports.getWorkouts = getWorkouts;
