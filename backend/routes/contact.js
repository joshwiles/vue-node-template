const express = require('express');
const router = express.Router();

// Mock data for contact submissions
let contactSubmissions = [];

// Submit contact form
router.post('/submit', (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message } = req.body;
    
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'All required fields must be filled'
      });
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }
    
    const submission = {
      id: contactSubmissions.length + 1,
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      status: 'new',
      createdAt: new Date().toISOString()
    };
    
    contactSubmissions.push(submission);
    
    res.status(201).json({
      success: true,
      message: 'Thank you for your message. We\'ll get back to you within 24 hours.',
      data: {
        id: submission.id,
        submittedAt: submission.createdAt
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to submit contact form'
    });
  }
});

// Get all contact submissions (admin only)
router.get('/submissions', (req, res) => {
  try {
    res.json({
      success: true,
      data: contactSubmissions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact submissions'
    });
  }
});

// Get contact submission by ID
router.get('/submissions/:id', (req, res) => {
  try {
    const submission = contactSubmissions.find(s => s.id === parseInt(req.params.id));
    
    if (!submission) {
      return res.status(404).json({
        success: false,
        error: 'Contact submission not found'
      });
    }
    
    res.json({
      success: true,
      data: submission
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact submission'
    });
  }
});

// Update submission status
router.patch('/submissions/:id/status', (req, res) => {
  try {
    const { status } = req.body;
    const submission = contactSubmissions.find(s => s.id === parseInt(req.params.id));
    
    if (!submission) {
      return res.status(404).json({
        success: false,
        error: 'Contact submission not found'
      });
    }
    
    submission.status = status;
    submission.updatedAt = new Date().toISOString();
    
    res.json({
      success: true,
      message: 'Submission status updated successfully',
      data: submission
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update submission status'
    });
  }
});

// Get contact information
router.get('/info', (req, res) => {
  try {
    const contactInfo = {
      address: {
        street: '123 PawnUp Street',
        city: 'City',
        state: 'State',
        zip: '12345'
      },
      phone: {
        main: '(555) 123-4567',
        secondary: '(555) 987-6543'
      },
      email: {
        general: 'info@pawnup.com',
        coaching: 'coaching@pawnup.com'
      },
      hours: {
        weekdays: 'Monday - Friday: 4:00 PM - 10:00 PM',
        saturday: 'Saturday: 10:00 AM - 6:00 PM',
        sunday: 'Sunday: 10:00 AM - 4:00 PM'
      },
      social: {
        facebook: 'https://facebook.com/pawnup',
        instagram: 'https://instagram.com/pawnup',
        twitter: 'https://twitter.com/pawnup',
        youtube: 'https://youtube.com/pawnup'
      }
    };
    
    res.json({
      success: true,
      data: contactInfo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact information'
    });
  }
});

// Get FAQ
router.get('/faq', (req, res) => {
  try {
    const faqs = [
      {
        id: 1,
        question: 'How do I become a member?',
        answer: 'You can become a member by visiting our club during open hours, filling out a membership application, and paying the annual fee. We also offer trial memberships for new players.'
      },
      {
        id: 2,
        question: 'What are the membership fees?',
        answer: 'Annual membership is $120 for adults, $80 for seniors (65+), and $60 for juniors (under 18). We also offer family memberships and monthly payment plans.'
      },
      {
        id: 3,
        question: 'Do you offer lessons for beginners?',
        answer: 'Yes! We have structured lesson programs for all skill levels, from complete beginners to advanced players. Our coaches are experienced and certified.'
      },
      {
        id: 4,
        question: 'Can I bring my own chess set?',
        answer: 'Absolutely! While we provide tournament-quality sets, you\'re welcome to bring your own. We also have a variety of sets available for purchase.'
      },
      {
        id: 5,
        question: 'Do you host tournaments?',
        answer: 'Yes, we host regular tournaments including monthly rated tournaments, blitz tournaments, and special events. Check our Events page for the current schedule.'
      },
      {
        id: 6,
        question: 'Is there parking available?',
        answer: 'Yes, we have free parking available in the adjacent lot. The club is also easily accessible by public transportation.'
      }
    ];
    
    res.json({
      success: true,
      data: faqs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch FAQ'
    });
  }
});

// Get location and directions
router.get('/location', (req, res) => {
  try {
    const locationInfo = {
      address: '123 PawnUp Street, City, State 12345',
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      },
      directions: {
        subway: 'Take Line A to PawnUp Street Station',
        bus: 'Routes 15, 23, and 45 stop nearby',
        parking: 'Free parking available in the adjacent lot'
      },
      facilities: [
        '20 tournament-quality chess boards',
        'Digital clocks and score sheets',
        'Coffee and refreshments available',
        'Free Wi-Fi for members',
        'Wheelchair accessible'
      ]
    };
    
    res.json({
      success: true,
      data: locationInfo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch location information'
    });
  }
});

module.exports = router; 