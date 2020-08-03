const request = require('supertest');
const mongoose = require('mongoose');
const { User } = require('../../models/user');

let server;

// TODO: Abstract request server logic into a function

describe('/api/users', () => {
  beforeEach(() => {
    server = require('../../index');
  });

  afterEach(() => {
    server.close();
  });

  afterAll(() => {
    mongoose.connection.close();
  });

  describe('POST /', () => {
    let body = {
      name: 'michael',
      email: 'michael@gmail.ca',
      password: '123456',
      belt: 'white',
    };

    it('should save the user if it is valid', async () => {
      const res = await request(server).post('/api/users').send(body);
      const user = await User.find({ name: res.name });
      expect(user).not.toBeNull();
    });

    it('should return 400 if that user is already registered', async () => {
      const res = await request(server).post('/api/users').send(body);

      expect(res.status).toBe(400);
    });

    it('should return 200 if the new user is valid', async () => {
      // email is unique
      body.email += Math.random();
      const res = await request(server).post('/api/users').send(body);
      expect(res.status).toBe(200);
    });

    it('should return 400 if email is less than 5 characters', async () => {
      body.email = '1234';
      const res = await request(server).post('/api/users').send(body);
      expect(res.status).toBe(400);
    });

    it('should return 400 if password is less than 5 characters', async () => {
      body.password = '1234';
      const res = await request(server).post('/api/users').send(body);
      expect(res.status).toBe(400);
    });

    it('should return 400 if name is less than 3 characters', async () => {
      body.name = 'hi';
      const res = await request(server).post('/api/users').send(body);
      expect(res.status).toBe(400);
    });
  });
});
