const request = require('supertest')
const app = require('../index')
const mongoose = require('mongoose')

test('GET /api/persons returns json', async () => {
  await request(app)
    .get('/api/persons')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

afterAll(async () => {
  await mongoose.connection.close()
})