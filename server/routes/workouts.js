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

// This API Endpoints can only be accessed by authenticated users
router.post('/', auth, createWorkout);
router.get('/', auth, getWorkouts);
router.get('/:id', auth, getWorkout);
router.put('/:id', auth, updateWorkout);
router.delete('/:id', auth, deleteWorkout);

module.exports = router;
