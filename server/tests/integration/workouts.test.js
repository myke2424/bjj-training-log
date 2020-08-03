const request = require('supertest');
const mongoose = require('mongoose');
const { Workout } = require('../../models/workout');

let server;

describe('/api/workouts', () => {
  beforeEach(() => {
    server = require('../../index');
  });

  afterEach(async () => {
    server.close();
    await Workout.remove({}); // remove all data
  });

  afterAll(() => {
    mongoose.connection.close();
  });

  const body = {
    type: 'adult-open',
    date: '8/3/2020',
    userId: '5f27670922c41624a4595fa6',
    sessionLength: '30minutes',
    techniques: ['armbar', 'side-control'],
    notes: 'Practiced Hip escapes and submissions from side control',
  };

  describe('GET /', () => {
    it('should return all workouts', async () => {
      // insert test data
      await Workout.collection.insert(body);
      const res = await request(server).get('/api/workouts');
      expect(res.status).toBe(200);
    });
  });

  describe('GET /:id', () => {
    it('should return a workout if a valid id is passed', async () => {
      const workout = new Workout(body);
      await workout.save();

      const res = await request(server).get('/api/workouts/' + workout._id);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('type', workout.type);
    });
  });

  describe('POST /', () => {
    it('should save the workout if it is valid', async () => {
      const res = await request(server).post('/api/workouts').send(body);

      expect(res.body).not.toBeNull();
    });
  });
});
