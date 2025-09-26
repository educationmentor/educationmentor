import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    console.log( "process.env.MONGODB_URI", process.env.MONGODB_URI);
    const mongoUri = process.env.MONGODB_URI ;
    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error.message);
    console.log('⚠️  MongoDB not available. Please install MongoDB or use MongoDB Atlas.');
    console.log('📝 You can install MongoDB locally or update MONGODB_URI in env.local');
    // Don't exit the process, let the server start without DB for now
    console.log('🚀 Server will start without database connection...');
  }
};

export default connectDB;
