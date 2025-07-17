const request = require('supertest');
const app = require('../server');

describe('Health Check Endpoint', () => {
  test('GET /api/health should return 200 and server status', async () => {
    const response = await request(app).get('/api/health');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'OK');
    expect(response.body).toHaveProperty('message', 'Server is running');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('uptime');
  });
}); 