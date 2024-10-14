// models/Blog.js
import mongoose from 'mongoose';

// Define Blog schema
const blogSchema = new mongoose.Schema({
  id: { 
    type: Number, 
    required: true, 
    unique: true 
  }, // Unique ID for each blog
  title: { 
    type: String, 
    required: true, 
    trim: true 
  },
  description: { 
    type: String, 
    required: true, 
    trim: true 
  },
  image: { 
    type: String, 
    default: '' 
  }, // Optional image URL
  link: { 
    type: String, 
    default: '' 
  }, // Optional link
  content: { 
    type: String, 
    required: true 
  }, // HTML content as string
  pubon: { 
    type: Date, 
    required: true, 
    default: Date.now 
  }, // Publication date
  by: { 
    type: String, 
    required: true, 
    default: 'Anonymous' 
  }, // Author name
  bydesc: { 
    type: String, 
    default: '' 
  }, // Author description
  createdAt: { 
    type: Date, 
    default: Date.now 
  }, // Timestamp for when the blog was created
});

// Initialize the model (reuse if already initialized)
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;
