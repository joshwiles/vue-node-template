const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const eventsRoutes = require('./routes/events');
const membersRoutes = require('./routes/members');
const lessonsRoutes = require('./routes/lessons');
const contactRoutes = require('./routes/contact');

// Routes
app.use('/', indexRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/members', membersRoutes);
app.use('/api/lessons', lessonsRoutes);
app.use('/api/contact', contactRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`♔ PawnUp Chess Club API server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
}); 