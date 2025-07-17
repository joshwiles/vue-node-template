const express = require('express');
const router = express.Router();

// Health check route
router.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Hello world route
router.get('/hello', (req, res) => {
  res.json({ 
    message: 'Hello from Express server!',
    data: {
      user: req.query.name || 'Anonymous',
      time: new Date().toISOString()
    }
  });
});

// Example POST route
router.post('/echo', (req, res) => {
  res.json({
    message: 'Echo response',
    received: req.body,
    timestamp: new Date().toISOString()
  });
});

module.exports = router; 