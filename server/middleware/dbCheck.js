import mongoose from 'mongoose';

export const checkDatabaseConnection = (req, res, next) => {
  // Skip database check for health and CORS test endpoints
  if (req.path === '/api/health' || req.path === '/api/cors-test') {
    return next();
  }

  // Check if mongoose is connected
  const readyState = mongoose.connection.readyState;
  
  if (readyState !== 1) {
    const stateMessages = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting'
    };
    
    console.error(`❌ Database not ready. State: ${readyState} (${stateMessages[readyState]})`);
    
    return res.status(503).json({
      success: false,
      message: 'Database connection not available',
      error: `Database is ${stateMessages[readyState]}. Please try again in a moment.`,
      retryAfter: 5 // seconds
    });
  }

  next();
};
