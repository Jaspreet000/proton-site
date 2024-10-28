// lib/dbConnect.js

import mongoose from 'mongoose';

let isConnected = false; // Track the connection status

export async function dbConnect() {
  if (isConnected) {
    // If already connected, use the existing connection
    console.log('Using existing MongoDB connection');
    return;
  }

  try {
    // Establish a new connection only if not connected
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.omlyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('MongoDB connection failed');
  }
}
