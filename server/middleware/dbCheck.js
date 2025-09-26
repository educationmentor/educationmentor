import mongoose from 'mongoose';

export const checkDatabaseConnection = (req, res, next) => {
  // Skip database check for health and CORS test endpoints
  if (req.path === '/api/health' || req.path === '/api/cors-test') {
    return next();
  }

  // Check if mongoose is connected
  if (mongoose.connection.readyState !== 1) {
    console.error('❌ Database not connected. ReadyState:', mongoose.connection.readyState);
    return res.status(503).json({
      success: false,
      message: 'Database connection not available',
      error: 'Service temporarily unavailable. Please try again in a moment.'
    });
  }

  next();
};
