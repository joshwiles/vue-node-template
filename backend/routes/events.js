const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

const { authenticateToken, requireAdmin, requireMember } = require('../middleware/auth');

// Mock data for events
let events = [
  {
    id: 1,
    title: 'Beginner\'s Tournament',
    type: 'tournament',
    date: '2024-03-16',
    time: '2:00 PM - 6:00 PM',
    location: 'Club Hall',
    participants: '24/32',
    fee: '$15',
    description: 'Perfect for new players to test their skills in a friendly environment.',
    registered: false,
    isMemberOnly: false,
    createdBy: 1,
    createdAt: '2024-03-01T10:00:00Z'
  },
  {
    id: 2,
    title: 'Strategy Workshop',
    type: 'workshop',
    date: '2024-03-20',
    time: '7:00 PM - 9:00 PM',
    location: 'Club Hall',
    participants: '18/25',
    fee: '$20',
    description: 'Learn advanced opening strategies and middle game tactics.',
    registered: false,
    isMemberOnly: false,
    createdBy: 1,
    createdAt: '2024-03-01T10:00:00Z'
  },
  {
    id: 3,
    title: 'Blitz Tournament',
    type: 'tournament',
    date: '2024-03-23',
    time: '1:00 PM - 5:00 PM',
    location: 'Club Hall',
    participants: '16/20',
    fee: '$25',
    description: 'Fast-paced 5-minute games for experienced players.',
    registered: false,
    isMemberOnly: true,
    createdBy: 1,
    createdAt: '2024-03-01T10:00:00Z'
  },
  {
    id: 4,
    title: 'Members Only Championship',
    type: 'tournament',
    date: '2024-03-30',
    time: '9:00 AM - 6:00 PM',
    location: 'Club Hall',
    participants: '12/24',
    fee: '$40',
    description: 'Exclusive tournament for PawnUp members only. Cash prizes and trophies.',
    registered: false,
    isMemberOnly: true,
    createdBy: 1,
    createdAt: '2024-03-01T10:00:00Z'
  }
];

// Get all events
router.get('/', (req, res) => {
  try {
    const { type } = req.query;
    let filteredEvents = events;
    
    if (type && type !== 'all') {
      filteredEvents = events.filter(event => event.type === type);
    }
    
    res.json({
      success: true,
      data: filteredEvents
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch events'
    });
  }
});

// Get tournament results (must come before /:id route)
router.get('/results/tournaments', (req, res) => {
  try {
    const results = [
      {
        id: 1,
        tournament: 'Winter Championship 2024',
        date: 'February 15th',
        winner: 'GM Sarah Chen',
        runnerUp: 'IM David Rodriguez',
        participants: 32
      },
      {
        id: 2,
        tournament: 'Blitz Tournament',
        date: 'February 8th',
        winner: 'FM Emily Watson',
        runnerUp: 'John Smith',
        participants: 24
      },
      {
        id: 3,
        tournament: 'Youth Championship',
        date: 'January 28th',
        winner: 'Alex Johnson',
        runnerUp: 'Maria Garcia',
        participants: 18
      }
    ];
    
    res.json({
      success: true,
      data: results
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch tournament results'
    });
  }
});

// Get event by ID
router.get('/:id', (req, res) => {
  try {
    const event = events.find(e => e.id === parseInt(req.params.id));
    
    if (!event) {
      return res.status(404).json({
        success: false,
        error: 'Event not found'
      });
    }
    
    res.json({
      success: true,
      data: event
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch event'
    });
  }
});

// Register for an event (requires authentication)
router.post('/:id/register', authenticateToken, requireMember, (req, res) => {
  try {
    const event = events.find(e => e.id === parseInt(req.params.id));
    if (!event) {
      return res.status(404).json({
        success: false,
        error: 'Event not found'
      });
    }

    // Check if event is member-only and user is not admin
    if (event.isMemberOnly && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'This event is for members only'
      });
    }

    // Check if user is already registered
    if (event.registered) {
      return res.status(400).json({
        success: false,
        error: 'Already registered for this event'
      });
    }

    // Mock registration logic
    event.registered = true;
    const currentParticipants = parseInt(event.participants.split('/')[0]);
    const maxParticipants = parseInt(event.participants.split('/')[1]);
    
    if (currentParticipants >= maxParticipants) {
      return res.status(400).json({
        success: false,
        error: 'Event is full'
      });
    }

    event.participants = `${currentParticipants + 1}/${maxParticipants}`;

    res.json({
      success: true,
      message: 'Successfully registered for event',
      data: event
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to register for event'
    });
  }
});

// Unregister from an event (requires authentication)
router.post('/:id/unregister', authenticateToken, requireMember, (req, res) => {
  try {
    const event = events.find(e => e.id === parseInt(req.params.id));
    if (!event) {
      return res.status(404).json({
        success: false,
        error: 'Event not found'
      });
    }

    // Check if user is registered
    if (!event.registered) {
      return res.status(400).json({
        success: false,
        error: 'Not registered for this event'
      });
    }

    // Mock unregistration logic
    event.registered = false;
    const currentParticipants = parseInt(event.participants.split('/')[0]);
    const maxParticipants = parseInt(event.participants.split('/')[1]);
    
    if (currentParticipants > 0) {
      event.participants = `${currentParticipants - 1}/${maxParticipants}`;
    }

    res.json({
      success: true,
      message: 'Successfully unregistered from event',
      data: event
    });
  } catch (error) {
    console.error('Unregistration error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to unregister from event'
    });
  }
});



// Admin: Create new event
router.post('/', authenticateToken, requireAdmin, [
  body('title').trim().isLength({ min: 3, max: 100 }),
  body('type').isIn(['tournament', 'workshop', 'social']),
  body('date').isISO8601(),
  body('time').trim().isLength({ min: 1 }),
  body('location').trim().isLength({ min: 1 }),
  body('fee').trim().isLength({ min: 1 }),
  body('description').trim().isLength({ min: 10 }),
  body('isMemberOnly').optional().isBoolean()
], (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Invalid input data',
        details: errors.array()
      });
    }

    const newEvent = {
      id: events.length + 1,
      title: req.body.title,
      type: req.body.type,
      date: req.body.date,
      time: req.body.time,
      location: req.body.location,
      participants: '0/32',
      fee: req.body.fee,
      description: req.body.description,
      registered: false,
      isMemberOnly: req.body.isMemberOnly || false,
      createdBy: req.user.id,
      createdAt: new Date().toISOString()
    };

    events.push(newEvent);

    res.status(201).json({
      success: true,
      message: 'Event created successfully',
      data: newEvent
    });
  } catch (error) {
    console.error('Create event error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create event'
    });
  }
});

// Admin: Update event
router.put('/:id', authenticateToken, requireAdmin, [
  body('title').optional().trim().isLength({ min: 3, max: 100 }),
  body('type').optional().isIn(['tournament', 'workshop', 'social']),
  body('date').optional().isISO8601(),
  body('time').optional().trim().isLength({ min: 1 }),
  body('location').optional().trim().isLength({ min: 1 }),
  body('fee').optional().trim().isLength({ min: 1 }),
  body('description').optional().trim().isLength({ min: 10 }),
  body('isMemberOnly').optional().isBoolean()
], (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Invalid input data',
        details: errors.array()
      });
    }

    const event = events.find(e => e.id === parseInt(req.params.id));
    if (!event) {
      return res.status(404).json({
        success: false,
        error: 'Event not found'
      });
    }

    // Update event fields
    Object.keys(req.body).forEach(key => {
      if (req.body[key] !== undefined) {
        event[key] = req.body[key];
      }
    });

    res.json({
      success: true,
      message: 'Event updated successfully',
      data: event
    });
  } catch (error) {
    console.error('Update event error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update event'
    });
  }
});

// Admin: Delete event
router.delete('/:id', authenticateToken, requireAdmin, (req, res) => {
  try {
    const eventIndex = events.findIndex(e => e.id === parseInt(req.params.id));
    if (eventIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Event not found'
      });
    }

    const deletedEvent = events.splice(eventIndex, 1)[0];

    res.json({
      success: true,
      message: 'Event deleted successfully',
      data: deletedEvent
    });
  } catch (error) {
    console.error('Delete event error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete event'
    });
  }
});

module.exports = router; 