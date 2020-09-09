const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
} = require('../controllers/workouts');

// This API Endpoint can only be accessed by authenticated users
router.post('/', auth, createWorkout);

router.get('/', getWorkouts);
router.get('/:id', getWorkout);
router.put('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);

module.exports = router;
