import { NextResponse } from 'next/server';
import BlogPost from '@/models/BlogPost';
import { dbConnect } from '@/lib/dbConnect';
import mongoose from 'mongoose';
// import { promises as fs } from "fs";
import path from "path";
import { getNextSequence } from '@/lib/incrementCounter';
import { initializeCounter } from '@/lib/initCounters';
import { v2 as cloudinary } from 'cloudinary';
// import { unstable_parseMultipartFormData } from 'next-cloudinary';


// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



export async function POST(req) {
  try {
    await dbConnect(); // Ensure MongoDB connection
    await initializeCounter(); // Initialize the counter for blog posts

    // Parse the form data using the built-in formData() method
    const formData = await req.formData();

    // Extract fields from the form data
    const title = formData.get('title');
    const content = formData.get('content');
    const pubon = formData.get('pubon');
    const by = formData.get('by');

    // Extract the image file (blog image)
    const imageFile = formData.get('image'); // This is a File object
    const avatarFile = formData.get('authorImage'); // This should match the form field name

    // Handle image upload to Cloudinary for the blog image
    let imageUrl = '';
    if (imageFile && imageFile.size > 0) {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      imageUrl = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'blog_images' },
          (error, result) => {
            if (error) {
              console.error('Cloudinary upload error:', error);
              reject(error);
            } else {
              resolve(result.secure_url);
            }
          }
        );
        stream.end(buffer);
      });
    }

    // Handle image upload to Cloudinary for the author avatar
    let avatarUrl = '';
    if (avatarFile && avatarFile.size > 0) {
      const arrayBuffer = await avatarFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      avatarUrl = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'author_avatars' },
          (error, result) => {
            if (error) {
              console.error('Cloudinary avatar upload error:', error);
              reject(error);
            } else {
              resolve(result.secure_url);
            }
          }
        );
        stream.end(buffer);
      });
    }

    // Get the next auto-incremented id for the 'blogPosts' collection
    const id = await getNextSequence('blogPosts');

    // Format 'pubon' to include only the date part (YYYY-MM-DD)
    const formattedPubon = new Date(pubon).toISOString().slice(0, 10);

    // Create and save the new blog post
    const newBlogPost = new BlogPost({
      id,
      title,
      image: imageUrl,
      content,
      pubon: formattedPubon, // Save only the date (YYYY-MM-DD)
      by,
      avatar: avatarUrl, // Store the author's avatar URL
    });

    await newBlogPost.save();

    return NextResponse.json({ message: 'Blog added successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/blogPosts:', error);
    return NextResponse.json(
      { message: 'Something went wrong.', error: error.message },
      { status: 500 }
    );
  }
}



// GET Request: Fetch all blog posts
export async function GET() {
  try {
    // Connect to MongoDB
    await dbConnect();
    
    // Check if MongoDB connection is ready
    if (mongoose.connection.readyState !== 1) {
      return NextResponse.json({ message: 'MongoDB connection is not ready' }, { status: 500 });
    }

    console.log("MongoDB connection is ready.");

    try {
      // Fetch all blog posts from the BlogPost collection
      const blogPosts = await BlogPost.find();
      return NextResponse.json({ success: true, data: blogPosts }, { status: 200 });
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return NextResponse.json({ message: 'Error fetching blog posts', error: error.message }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in GET /api/blogPosts:', error);
    return NextResponse.json({ message: 'Something went wrong.', error: error.message }, { status: 500 });
  }
}