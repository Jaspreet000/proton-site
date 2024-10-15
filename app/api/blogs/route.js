import { NextResponse } from 'next/server';
import Blog from '@/models/Blog';
import { dbConnect } from '@/lib/dbConnect';
import mongoose from 'mongoose';

// POST Request: Add a new blog
export async function POST(req) {
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
      // Create and save the new blog post
      const newBlog = new Blog({
        id,
        title,
        description,
        image,
        link,
        content,
        pubon: new Date(pubon),
        by,
        bydesc,
      });

      await newBlog.save();
      return NextResponse.json({ message: 'Blog added successfully!' }, { status: 201 });
    } catch (error) {
      console.error('Error saving blog:', error);
      return NextResponse.json({ message: 'Error saving blog', error: error.message }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in POST /api/blogs:', error);
    return NextResponse.json({ message: 'Something went wrong.', error: error.message }, { status: 500 });
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

// PUT Request: Edit a blog by title
export async function PUT(req) {
  try {
    const body = await req.json();
    const { title, description, image, link, content, by, bydesc, pubon } = body;

    // Validate required fields
    if (!title || !description || !content || !pubon || !by) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Connect to MongoDB
    await dbConnect();
    if (mongoose.connection.readyState !== 1) {
      return NextResponse.json({ message: 'MongoDB connection is not ready' }, { status: 500 });
    }

    console.log("MongoDB connection is ready.");

    try {
      // Find and update the blog by title
      const updatedBlog = await Blog.findOneAndUpdate(
        { title }, // Find blog by title
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

// DELETE Request: Delete a blog by title
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title'); // Extract title from query params

    if (!title) {
      return NextResponse.json({ message: 'Title is required' }, { status: 400 });
    }

    await dbConnect();
    if (mongoose.connection.readyState !== 1) {
      return NextResponse.json({ message: 'MongoDB connection is not ready' }, { status: 500 });
    }

    console.log("MongoDB connection is ready.");

    try {
      const deletedBlog = await Blog.findOneAndDelete({ title });

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