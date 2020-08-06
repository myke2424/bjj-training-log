const { Workout, validate } = require('../models/workout');

const createWorkout = async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const workout = new Workout({
    type: req.body.type,
    userId: req.body.userId,
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

  if (!workout) {
    return res.status(404).send('Workout with the given ID doesnt exist');
  }

  res.send(workout);
};

const getWorkouts = async (req, res) => {
  const workouts = await Workout.find();
  res.send(workouts);
};

const updateWorkout = async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const workout = await Workout.findByIdAndUpdate(
    req.params.id,
    {
      type: req.body.type,
      date: req.body.date,
      sessionLength: req.body.sessionLength,
      techniques: req.body.techniques,
      notes: req.body.notes,
    },
    {
      new: true,
    }
  );

  if (!workout) {
    res.status(404).send('Workout with the given ID doesnt exist');
  }

  res.send(workout);
};

const deleteWorkout = async (req, res) => {
  const workout = await Workout.findByIdAndRemove(req.params.id);

  if (!workout) {
    res.status(404).send('Workout with the given ID doesnt exist');
  }

  res.send(workout);
};
exports.createWorkout = createWorkout;
exports.getWorkout = getWorkout;
exports.getWorkouts = getWorkouts;
exports.updateWorkout = updateWorkout;
exports.deleteWorkout = deleteWorkout;
