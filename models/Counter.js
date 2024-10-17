// models/Counter.js
import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // _id will be the name of the collection, e.g., 'blogs'
  seq: { type: Number, default: 0 } // seq is the current auto-incremented value
});

// Initialize the model
const Counter = mongoose.models.Counter || mongoose.model('Counter', counterSchema);

export default Counter;
