const errorHandler = (err, req, res, next) => {
  const NODE_ENV = process.env.NODE_ENV || 'development';
  
  console.error(err.stack);
  
  // Default error
  let error = {
    message: NODE_ENV === 'development' ? err.message : 'Internal server error',
    status: err.status || 500
  };

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    error.message = 'Validation Error';
    error.status = 400;
    error.details = Object.values(err.errors).map(e => e.message);
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    error.message = 'Duplicate field value entered';
    error.status = 400;
  }

  // Mongoose cast error
  if (err.name === 'CastError') {
    error.message = 'Invalid ID format';
    error.status = 400;
  }

  res.status(error.status).json({
    error: error.message,
    ...(NODE_ENV === 'development' && { stack: err.stack }),
    ...(error.details && { details: error.details })
  });
};

module.exports = errorHandler; 