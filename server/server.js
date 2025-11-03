import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';

// Import database connection
import connectDB from './config/database.js';
import { checkDatabaseConnection } from './middleware/dbCheck.js';

// Import routes
import authRoutes from './routes/auth.js';
import consultationRoutes from './routes/consultationForm.js';



const app = express();

// Connect to database with retry mechanism
const initializeDatabase = async (retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      await connectDB();
      console.log('✅ Database connection established');
      return true;
    } catch (error) {
      console.error(`❌ Database connection attempt ${i + 1} failed:`, error.message);
      
      if (i === retries - 1) {
        console.error('💥 All database connection attempts failed');
        process.exit(1);
      }
      
      console.log(`🔄 Retrying database connection in 2 seconds...`);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
};

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

console.log(process.env.NODE_ENV);
console.log(process.env.GOOGLE_PROJECT_ID)
// CORS configuration - More permissive for production
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://educationalmentor.com',
    'https://www.educationalmentor.com',
    'https://educationmentor-w1dk.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: [
    'Content-Type', 
    'Authorization', 
    'X-Requested-With',
    'Accept',
    'Origin',
    'Access-Control-Request-Method',
    'Access-Control-Request-Headers'
  ],
  optionsSuccessStatus: 200
}));

// Compression middleware
app.use(compression());

// Handle preflight requests with debugging
app.options('*', (req, res) => {
  const origin = req.headers.origin;
  console.log('🔍 Preflight request from origin:', origin);
  
  // Set CORS headers
  res.header('Access-Control-Allow-Origin', origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Max-Age', '86400'); // 24 hours
  
  console.log('✅ CORS headers set for origin:', origin);
  res.sendStatus(200);
});

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));


// Database connection check middleware
app.use('/api', checkDatabaseConnection);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/consultationForm', consultationRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Education Mentor API is running',
    timestamp: new Date().toISOString()
  });
});

// CORS test endpoint
app.get('/api/cors-test', (req, res) => {
  res.json({
    success: true,
    message: 'CORS is working!',
    origin: req.headers.origin,
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

const PORT = process.env.PORT || 5000 ;

// Start server only after database connection is established
const startServer = async () => {
  try {
    // Wait for database connection
    await initializeDatabase();
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📚 Education Mentor API is ready!`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    console.error('💥 Failed to start server:', error.message);
    process.exit(1);
  }
};

// Start the server
startServer();
