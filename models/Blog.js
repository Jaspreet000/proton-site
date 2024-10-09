import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  content: { type: String, required: true },
  pubon: { type: Date, default: Date.now },
  by: { type: String, required: true },
  bydesc: { type: String, required: true },
});

export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);
