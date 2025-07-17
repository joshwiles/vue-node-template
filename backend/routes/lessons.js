const express = require('express');
const router = express.Router();

// Mock data for coaches
const coaches = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'Grandmaster',
    role: 'Head Coach',
    rating: 2450,
    experience: '20+ years',
    students: 150,
    specialization: 'Advanced strategy and tournament preparation',
    availability: ['Monday', 'Wednesday', 'Friday', 'Saturday']
  },
  {
    id: 2,
    name: 'David Rodriguez',
    title: 'International Master',
    role: 'Senior Coach',
    rating: 2380,
    experience: '15+ years',
    students: 120,
    specialization: 'Opening theory and endgame technique',
    availability: ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: 3,
    name: 'Emily Watson',
    title: 'FIDE Master',
    role: 'Youth Coach',
    rating: 2320,
    experience: '10+ years',
    students: 80,
    specialization: 'Teaching young players and beginners',
    availability: ['Monday', 'Wednesday', 'Friday', 'Saturday']
  }
];

// Mock data for lesson bookings
let lessonBookings = [];

// Get all coaches
router.get('/coaches', (req, res) => {
  try {
    res.json({
      success: true,
      data: coaches
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch coaches'
    });
  }
});

// Get coach by ID
router.get('/coaches/:id', (req, res) => {
  try {
    const coach = coaches.find(c => c.id === parseInt(req.params.id));
    
    if (!coach) {
      return res.status(404).json({
        success: false,
        error: 'Coach not found'
      });
    }
    
    res.json({
      success: true,
      data: coach
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch coach'
    });
  }
});

// Get lesson programs
router.get('/programs', (req, res) => {
  try {
    const programs = [
      {
        id: 'beginner',
        name: 'Beginner Program',
        description: 'Perfect for new players learning the fundamentals of chess.',
        price: 25,
        features: [
          'Basic rules and piece movements',
          'Simple tactics and checkmates',
          'Opening principles',
          'Game analysis basics'
        ]
      },
      {
        id: 'intermediate',
        name: 'Intermediate Program',
        description: 'For players looking to improve their tactical and strategic skills.',
        price: 35,
        features: [
          'Advanced tactics and combinations',
          'Opening theory and repertoire',
          'Middle game strategy',
          'Endgame technique'
        ]
      },
      {
        id: 'advanced',
        name: 'Advanced Program',
        description: 'For serious players aiming for tournament success.',
        price: 50,
        features: [
          'Grandmaster-level analysis',
          'Advanced opening preparation',
          'Complex endgame studies',
          'Tournament preparation'
        ]
      }
    ];
    
    res.json({
      success: true,
      data: programs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch lesson programs'
    });
  }
});

// Get lesson schedule
router.get('/schedule', (req, res) => {
  try {
    const schedule = [
      {
        name: 'Monday',
        lessons: [
          { id: 1, time: '4:00 PM', type: 'Beginner Group', coach: 'FM Watson' },
          { id: 2, time: '6:00 PM', type: 'Intermediate', coach: 'IM Rodriguez' },
          { id: 3, time: '8:00 PM', type: 'Advanced', coach: 'GM Chen' }
        ]
      },
      {
        name: 'Wednesday',
        lessons: [
          { id: 4, time: '4:00 PM', type: 'Youth Program', coach: 'FM Watson' },
          { id: 5, time: '6:00 PM', type: 'Tactics Training', coach: 'IM Rodriguez' },
          { id: 6, time: '8:00 PM', type: 'Opening Theory', coach: 'GM Chen' }
        ]
      },
      {
        name: 'Friday',
        lessons: [
          { id: 7, time: '4:00 PM', type: 'Beginner Group', coach: 'FM Watson' },
          { id: 8, time: '6:00 PM', type: 'Endgame Study', coach: 'IM Rodriguez' },
          { id: 9, time: '8:00 PM', type: 'Tournament Prep', coach: 'GM Chen' }
        ]
      },
      {
        name: 'Saturday',
        lessons: [
          { id: 10, time: '10:00 AM', type: 'Family Chess', coach: 'FM Watson' },
          { id: 11, time: '2:00 PM', type: 'Strategy Workshop', coach: 'IM Rodriguez' },
          { id: 12, time: '4:00 PM', type: 'Game Analysis', coach: 'GM Chen' }
        ]
      }
    ];
    
    res.json({
      success: true,
      data: schedule
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch lesson schedule'
    });
  }
});

// Book a lesson
router.post('/book', (req, res) => {
  try {
    const { name, email, phone, level, coach, message } = req.body;
    
    if (!name || !email || !level) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and level are required'
      });
    }
    
    const booking = {
      id: lessonBookings.length + 1,
      name,
      email,
      phone,
      level,
      coach,
      message,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    lessonBookings.push(booking);
    
    res.status(201).json({
      success: true,
      message: 'Lesson booking submitted successfully',
      data: booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to book lesson'
    });
  }
});

// Get lesson bookings
router.get('/bookings', (req, res) => {
  try {
    res.json({
      success: true,
      data: lessonBookings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch lesson bookings'
    });
  }
});

// Get student testimonials
router.get('/testimonials', (req, res) => {
  try {
    const testimonials = [
      {
        id: 1,
        studentName: 'Alex Johnson',
        ratingImprovement: '1850 → 2280',
        testimonial: 'The lessons with GM Chen completely transformed my game. I went from a casual player to a serious competitor in just two years.',
        coach: 'GM Sarah Chen'
      },
      {
        id: 2,
        studentName: 'Sophie Brown',
        ratingImprovement: '1200 → 1650',
        testimonial: 'FM Watson made chess fun and accessible. Her teaching style is perfect for young players like me.',
        coach: 'FM Emily Watson'
      },
      {
        id: 3,
        studentName: 'Michael Wilson',
        ratingImprovement: '1600 → 2100',
        testimonial: 'IM Rodriguez\'s opening lessons gave me the confidence to compete at higher levels. Highly recommended!',
        coach: 'IM David Rodriguez'
      }
    ];
    
    res.json({
      success: true,
      data: testimonials
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch testimonials'
    });
  }
});

// Update booking status
router.patch('/bookings/:id/status', (req, res) => {
  try {
    const { status } = req.body;
    const booking = lessonBookings.find(b => b.id === parseInt(req.params.id));
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }
    
    booking.status = status;
    
    res.json({
      success: true,
      message: 'Booking status updated successfully',
      data: booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update booking status'
    });
  }
});

module.exports = router; 