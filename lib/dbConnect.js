import mongoose from 'mongoose';

let isConnected = false; // Track the connection status

export async function dbConnect() {
  if (isConnected) {
    // If already connected, use the existing connection
    console.log('Using existing MongoDB connection');
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.omlyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('MongoDB connection failed');
  }
}

// let MONGODB_URI = "mongodb+srv://admin:admin@cluster0.omlyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// export async function dbConnect() {
//   if (mongoose.connection.readyState >= 1) {
//     console.log('Already connected to MongoDB');
//     return; // Already connected
//   }

//   try {
//     await mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 30000, // Timeout set to 30 seconds
//     });
//     console.log('MongoDB connected successfully');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     throw new Error('MongoDB connection failed');
//   }
// }


// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://admin:admin@cluster0.omlyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// export async function dbConnect() {
//   if (mongoose.connection.readyState >= 1) {
//     return; // Already connected
//   }

//   return mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// }