import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    console.log("MONGODB_URI:", process.env.MONGODB_URI);
    
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    // Configure mongoose options
    const options = {
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      bufferCommands: false // Disable mongoose buffering
    };

    const conn = await mongoose.connect(process.env.MONGODB_URI, options);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('⚠️ MongoDB disconnected');
    });

    mongoose.connection.on('reconnected', () => {
      console.log('✅ MongoDB reconnected');
    });

    return conn;
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    console.log('🔧 Troubleshooting steps:');
    console.log('1. Check if MONGODB_URI is set correctly');
    console.log('2. Verify MongoDB Atlas cluster is running');
    console.log('3. Check network connectivity');
    console.log('4. Verify database user permissions');
    
    // Exit the process if database connection fails
    console.log('💥 Exiting due to database connection failure...');
    process.exit(1);
  }
};

export default connectDB;
