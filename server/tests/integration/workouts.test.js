const request = require('supertest');
const mongoose = require('mongoose');
const { Workout } = require('../../models/workout');
const { User } = require('../../models/user');

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

  // create the user and get the jwt token
  const user = new User({
    name: 'mike',
    email: 'michael24@gmail.com',
    password: 12345,
    belt: 'white',
  });

  const jwtToken = user.generateAuthToken();

  const req = {
    body: {
      type: 'adult-open',
      userId: user._id,
      date: '8/3/2020',
      sessionLength: '30minutes',
      techniques: ['armbar', 'side-control'],
      notes: 'Practiced Hip escapes and submissions from side control',
    },
  };

  describe('GET /', () => {
    it('should return all workouts for a given user', async () => {
      let workout1 = { ...req.body };
      let workout2 = { ...req.body };
      workout2.type = 'open-mat';

      // insert test data
      await Workout.insertMany([workout1, workout2]);
      const res = await request(server)
        .get('/api/workouts')
        .set('x-auth-token', jwtToken)
        .send({ id: req.body.userId });

      expect(res.status).toBe(200);
    });
  });

  describe('GET /:id', () => {
    it('should return a workout if a valid id is passed', async () => {
      const workout = new Workout(req.body);
      await workout.save();

      const res = await request(server)
        .get('/api/workouts/' + workout._id)
        .set('x-auth-token', jwtToken);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('type', workout.type);
    });

    it('should return 404 if invalid id is passed', async () => {
      let id = mongoose.Types.ObjectId();
      const res = await request(server)
        .get('/api/workouts/' + id)
        .set('x-auth-token', jwtToken);

      expect(res.status).toBe(404);
    });
  });

  describe('POST /', () => {
    it('should save the workout if it is valid', async () => {
      const res = await request(server)
        .post('/api/workouts')
        .set('x-auth-token', jwtToken)
        .send(req.body);

      expect(res.body).not.toBeNull();
    });

    it('should return 400 if the user id isnt specified', async () => {
      let workout = { ...req.body };
      delete workout.userId;

      const res = await request(server)
        .post('/api/workouts')
        .set('x-auth-token', jwtToken)
        .send(workout);

      expect(res.status).toBe(400);
    });

    it('should return 400 if the type isnt specified', async () => {
      let workout = { ...req.body };
      delete workout.type;

      const res = await request(server)
        .post('/api/workouts')
        .set('x-auth-token', jwtToken)
        .send(workout);

      expect(res.status).toBe(400);
    });

    it('should return 400 if the session length isnt specifed', async () => {
      let workout = { ...req.body };
      delete workout.sessionLength;

      const res = await request(server)
        .post('/api/workouts')
        .set('x-auth-token', jwtToken)
        .send(workout);

      expect(res.status).toBe(400);
    });

    it('should return 400 if the date isnt specified', async () => {
      let workout = { ...req.body };
      delete workout.type;

      const res = await request(server)
        .post('/api/workouts')
        .set('x-auth-token', jwtToken)
        .send(workout);

      expect(res.status).toBe(400);
    });
  });
});
