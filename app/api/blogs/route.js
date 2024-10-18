import { NextResponse } from 'next/server';
import Blogs from '@/models/Blogs';
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
    const bydesc = formData.get('bydesc');

    console.log('bydesc:', bydesc);


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
    const id = await getNextSequence('blogs');

    // Format 'pubon' to include only the date part (YYYY-MM-DD)
    const formattedPubon = new Date(pubon).toISOString().slice(0, 10);

    // Create and save the new blog post
    const newBlogPost = new Blogs({
      id,
      title,
      image: imageUrl,
      content,
      pubon: formattedPubon, // Save only the date (YYYY-MM-DD)
      by,
      bydesc,
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
      const blogPosts = await Blogs.find();
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

// PUT Request: Edit a blog by ID
export async function PUT(req) {
  try {
    const formData = await req.formData();
    const id = formData.get('id');
    const title = formData.get('title');
    const content = formData.get('content');
    const pubon = formData.get('pubon');
    const by = formData.get('by');
    const bydesc = formData.get('bydesc');

    // Validate required fields
    if (!id || !title || !content || !pubon || !by || !bydesc) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Connect to MongoDB
    await dbConnect();
    if (mongoose.connection.readyState !== 1) {
      return NextResponse.json({ message: 'MongoDB connection is not ready' }, { status: 500 });
    }

    // Extract image and avatar files
    const imageFile = formData.get('image');
    const avatarFile = formData.get('avatar');

    // Handle image upload to Cloudinary (if a new image is uploaded)
    let imageUrl = '';
    if (imageFile && imageFile.size > 0) {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      imageUrl = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'blog_images' },
          (error, result) => {
            if (error) {
              console.error('Cloudinary image upload error:', error);
              reject(error);
            } else {
              resolve(result.secure_url);
            }
          }
        );
        stream.end(buffer);
      });
    }

    // Handle avatar upload to Cloudinary (if a new avatar is uploaded)
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

    // Format 'pubon' to include only the date part (YYYY-MM-DD)
    const formattedPubon = new Date(pubon).toISOString().slice(0, 10);

    // Create the update object
    const updateData = {
      title,
      content,
      pubon: formattedPubon,
      by,
      bydesc,
    };

    // Only update image and avatar if they exist
    if (imageUrl) updateData.image = imageUrl;
    if (avatarUrl) updateData.avatar = avatarUrl;

    // Find and update the blog by ID
    const updatedBlog = await Blogs.findOneAndUpdate(
      { _id: id }, // Find blog by MongoDB _id
      updateData, // Data to update
      { new: true } // Return the updated blog
    );

    if (!updatedBlog) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Blog updated successfully!', data: updatedBlog }, { status: 200 });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ message: 'Error updating blog', error: error.message }, { status: 500 });
  }
}



export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id'); // Extract ID from query params

    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    // Connect to MongoDB
    await dbConnect();
    if (mongoose.connection.readyState !== 1) {
      return NextResponse.json({ message: 'MongoDB connection is not ready' }, { status: 500 });
    }

    console.log("MongoDB connection is ready.");

    // Find and delete the blog by the `id` field (not the default `_id` ObjectId)
    const deletedBlog = await Blogs.findOneAndDelete({ id: id });

    if (!deletedBlog) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Blog deleted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ message: 'Error deleting blog', error: error.message }, { status: 500 });
  }
}

