const express = require('express');
const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
      res.json({
      status: 'healthy',
      service: 'PawnUp Chess Club API',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    });
});

// API info endpoint
router.get('/api', (req, res) => {
  res.json({
    name: 'PawnUp Chess Club API',
    version: '1.0.0',
    description: 'Backend API for PawnUp Chess Club website template',
    endpoints: {
      health: '/health',
      events: '/api/events',
      members: '/api/members',
      lessons: '/api/lessons',
      contact: '/api/contact'
    },
    documentation: 'API documentation available at /api/docs'
  });
});

// Club information endpoint
router.get('/club-info', (req, res) => {
  res.json({
    success: true,
    data: {
      name: 'PawnUp Chess Club',
      founded: '1995',
      location: '123 PawnUp Street, City, State 12345',
      description: 'A premier chess club dedicated to promoting the game of chess and building a strong community of players.',
      mission: 'To promote the game of chess as an educational tool and recreational activity, providing opportunities for players of all ages and skill levels to learn, compete, and grow together in a supportive environment.',
      stats: {
        totalMembers: 156,
        activeMembers: 142,
        juniorMembers: 45,
        titledPlayers: 8,
        yearsActive: 29
      },
      contact: {
        phone: '(555) 123-4567',
        email: 'info@pawnup.com',
        hours: {
          weekdays: '4:00 PM - 10:00 PM',
          saturday: '10:00 AM - 6:00 PM',
          sunday: '10:00 AM - 4:00 PM'
        }
      }
    }
  });
});

// Root endpoint
router.get('/', (req, res) => {
  res.json({
    message: '♔ Welcome to PawnUp Chess Club API',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      health: '/health',
      api: '/api',
      clubInfo: '/club-info',
      events: '/api/events',
      members: '/api/members',
      lessons: '/api/lessons',
      contact: '/api/contact'
    }
  });
});

module.exports = router; 