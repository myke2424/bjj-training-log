const request = require('supertest');
const mongoose = require('mongoose');
const { User } = require('../../models/user');

let server;

describe('/api/users', () => {
  beforeEach(() => {
    server = require('../../index');
  });

  afterEach(async () => {
    server.close();
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
  });
});
