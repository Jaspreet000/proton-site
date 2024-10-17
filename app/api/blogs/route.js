import { NextResponse } from 'next/server';
import Blog from '@/models/Blog';
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
    await initializeCounter(); // Initialize the counter for blogs

    // Parse the form data using the built-in formData() method
    const formData = await req.formData();

    // Extract fields from the form data
    const title = formData.get('title');
    const description = formData.get('description');
    const link = formData.get('link');
    const content = formData.get('content');
    const pubon = formData.get('pubon');
    const by = formData.get('by');
    const bydesc = formData.get('bydesc');

    // Extract the image file
    const imageFile = formData.get('image'); // This is a File object

    // Handle image upload to Cloudinary
    let imageUrl = '';
    if (imageFile && imageFile.size > 0) {
      // Read the file as a buffer
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Upload the buffer to Cloudinary
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

    // Get the next auto-incremented id for the 'blogs' collection
    const id = await getNextSequence('blogs');

    // Create and save the new blog post
    const newBlog = new Blog({
      id,
      title,
      description,
      image: imageUrl,
      link,
      content,
      pubon: new Date(pubon),
      by,
      bydesc,
    });

    await newBlog.save();

    return NextResponse.json({ message: 'Blog added successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/blogs:', error);
    return NextResponse.json(
      { message: 'Something went wrong.', error: error.message },
      { status: 500 }
    );
  }
}

// GET Request: Fetch all blogs
export async function GET() {
  try {
    // Connect to MongoDB
    await dbConnect();
    if (mongoose.connection.readyState !== 1) {
      return NextResponse.json({ message: 'MongoDB connection is not ready' }, { status: 500 });
    }

    console.log("MongoDB connection is ready.");

    try {
      // Fetch all blog posts from the database
      const blogs = await Blog.find();
      return NextResponse.json({ success: true, data: blogs }, { status: 200 });
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return NextResponse.json({ message: 'Error fetching blogs', error: error.message }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in GET /api/blogs:', error);
    return NextResponse.json({ message: 'Something went wrong.', error: error.message }, { status: 500 });
  }
}

// PUT Request: Edit a blog by ID
export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, title, description, image, link, content, by, bydesc, pubon } = body;

    // Validate required fields
    if (!id || !title || !description || !content || !pubon || !by) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Connect to MongoDB
    await dbConnect();
    if (mongoose.connection.readyState !== 1) {
      return NextResponse.json({ message: 'MongoDB connection is not ready' }, { status: 500 });
    }

    console.log("MongoDB connection is ready.");

    try {
      // Find and update the blog by ID
      const updatedBlog = await Blog.findOneAndUpdate(
        { id }, // Find blog by ID
        {
          title,
          description,
          image,
          link,
          content,
          pubon: new Date(pubon),
          by,
          bydesc,
        },
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
  } catch (error) {
    console.error('Error in PUT /api/blogs:', error);
    return NextResponse.json({ message: 'Something went wrong.', error: error.message }, { status: 500 });
  }
}


// DELETE Request: Delete a blog by ID
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

    try {
      // Find and delete the blog by ID
      const deletedBlog = await Blog.findOneAndDelete({ id });

      if (!deletedBlog) {
        return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
      }

      return NextResponse.json({ message: 'Blog deleted successfully!' }, { status: 200 });
    } catch (error) {
      console.error('Error deleting blog:', error);
      return NextResponse.json({ message: 'Error deleting blog', error: error.message }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in DELETE /api/blogs:', error);
    return NextResponse.json({ message: 'Something went wrong.', error: error.message }, { status: 500 });
  }
}
