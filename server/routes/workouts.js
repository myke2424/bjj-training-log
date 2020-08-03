const express = require('express');
const router = express.Router();
const {
  createWorkout,
  getWorkout,
  getWorkouts,
} = require('../controllers/workouts');

router.post('/', createWorkout);
router.get('/', getWorkouts);
router.get('/:id', getWorkout);

module.exports = router;
