import mongoose from 'mongoose';

let isConnected = false; // Track the connection status

export async function dbConnect() {
  if (isConnected) {
    // If already connected, use the existing connection
    console.log('Using existing MongoDB connection');
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.omlyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,  // 30 seconds timeout for server selection
      socketTimeoutMS: 45000,           // 45 seconds timeout for socket operations
    });

    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('MongoDB connection failed');
  }
}
