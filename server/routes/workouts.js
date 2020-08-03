const express = require('express');
const router = express.Router();
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
} = require('../controllers/workouts');

router.post('/', createWorkout);
router.get('/', getWorkouts);
router.get('/:id', getWorkout);
router.put('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);

module.exports = router;
