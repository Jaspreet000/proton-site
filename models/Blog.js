// models/Blog.js
import mongoose from 'mongoose';

// Define Blog schema
const blogSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true }, // Change to String type
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  image: { type: String, default: '' }, // Optional image URL
  link: { type: String, default: '' },  // Optional link
  content: { type: String, required: true }, // HTML content
  pubon: { type: Date, required: true }, // Use Date type for publication date
  by: { type: String, required: true }, // Author name
  bydesc: { type: String, default: '' }, // Author description
  createdAt: { type: Date, default: Date.now }, // Timestamp
});

// Initialize the model (reuse if already initialized)
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;
