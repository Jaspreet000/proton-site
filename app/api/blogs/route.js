import { NextResponse } from 'next/server';
import Blog from '@/models/Blog';
import { dbConnect } from '@/lib/dbConnect';

// POST Request: Add a new blog
export async function POST(req) {
  try {
    const body = await req.json();
    const { title, description, image, link, content, by, bydesc } = body;

    // Validate required fields
    if (!title || !description || !content) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Connect to MongoDB
    try {
      await dbConnect();

      if (mongoose.connection.readyState !== 1) {
        return NextResponse.json({ message: 'MongoDB connection is not ready' }, { status: 500 });
      }

      console.log("MongoDB connection is ready.");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      return NextResponse.json({ message: 'Error connecting to MongoDB', error: error.message }, { status: 500 });
    }

    // Create and Save the new blog post
    try {
      const newBlog = new Blog({
        title,
        description,
        image,
        link,
        content,
        by,
        bydesc,
        createdAt: new Date(),
      });

      await newBlog.save();
      return NextResponse.json({ message: 'Blog added successfully!' }, { status: 200 });
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
    try {
      await dbConnect();

      if (mongoose.connection.readyState !== 1) {
        return NextResponse.json({ message: 'MongoDB connection is not ready' }, { status: 500 });
      }

      console.log("MongoDB connection is ready.");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      return NextResponse.json({ message: 'Error connecting to MongoDB', error: error.message }, { status: 500 });
    }

    // Fetch all blog posts from the database
    try {
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
