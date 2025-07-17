const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Mock users database (in production, this would be a real database)
let users = [
  {
    id: 1,
    email: 'admin@pawnup.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    name: 'Admin User',
    role: 'admin',
    memberSince: '2020',
    rating: 0,
    isActive: true
  },
  {
    id: 2,
    email: 'sarah.chen@pawnup.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    name: 'Sarah Chen',
    role: 'member',
    memberSince: '2010',
    rating: 2450,
    isActive: true
  },
  {
    id: 3,
    email: 'david.rodriguez@pawnup.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    name: 'David Rodriguez',
    role: 'member',
    memberSince: '2012',
    rating: 2380,
    isActive: true
  }
];

// JWT Secret (in production, this should be in environment variables)
const JWT_SECRET = process.env.JWT_SECRET || 'pawnup-secret-key-2024';

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Access token required'
    });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        error: 'Invalid or expired token'
      });
    }
    req.user = user;
    next();
  });
};

// Middleware to check if user is admin
const requireAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      error: 'Admin access required'
    });
  }
  next();
};

// Middleware to check if user is member or admin
const requireMember = (req, res, next) => {
  if (!req.user || (req.user.role !== 'member' && req.user.role !== 'admin')) {
    return res.status(403).json({
      success: false,
      error: 'Member access required'
    });
  }
  next();
};

// Helper function to hash password
const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

// Helper function to compare password
const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

// Helper function to generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
};

// Helper function to get user by email
const getUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

// Helper function to get user by ID
const getUserById = (id) => {
  return users.find(user => user.id === parseInt(id));
};

// Helper function to create new user
const createUser = async (userData) => {
  const hashedPassword = await hashPassword(userData.password);
  const newUser = {
    id: users.length + 1,
    email: userData.email,
    password: hashedPassword,
    name: userData.name,
    role: userData.role || 'member',
    memberSince: new Date().getFullYear().toString(),
    rating: userData.rating || 1200,
    isActive: true
  };
  users.push(newUser);
  return newUser;
};

module.exports = {
  authenticateToken,
  requireAdmin,
  requireMember,
  hashPassword,
  comparePassword,
  generateToken,
  getUserByEmail,
  getUserById,
  createUser,
  users
}; 