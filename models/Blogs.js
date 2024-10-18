// models/BlogPost.js
import mongoose from "mongoose";

// Define the new BlogPost schema
const blogsSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Using String type for ID
  title: { type: String, required: true, trim: true },
  image: { type: String, default: "" }, // Optional image URL
  content: { type: String, required: true }, // HTML content
  pubon: { type: Date, required: true }, // Publication date
  by: { type: String, required: true }, // Author name
  bydesc: { type: String }, // Ensure this field is present
  avatar: { type: String, default: "" }, // Author avatar URL
  createdAt: { type: Date, default: Date.now }, // Timestamp
});

// Initialize the model (reuse if already initialized)
const Blogs =
  mongoose.models.Blogs || mongoose.model("Blogs", blogsSchema);

export default Blogs;
