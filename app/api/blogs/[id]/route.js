import { NextResponse } from 'next/server';
import Blogs from '@/models/Blogs';
import { dbConnect } from '@/lib/dbConnect';

export async function GET(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;

    if (!id) {
      return NextResponse.json({ message: 'Blog ID is required' }, { status: 400 });
    }

    // Fetch a specific blog post by its ID
    const blogPost = await Blogs.findOne({ id }); // Make sure `id` matches the field used in your database
    if (!blogPost) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    console.log("Fetched blog post:", blogPost); // Debug log
    return NextResponse.json({ success: true, data: blogPost }, { status: 200 });
  } catch (error) {
    console.error('Error in GET /api/blogs/[id]:', error);
    return NextResponse.json({ message: 'Something went wrong.', error: error.message }, { status: 500 });
  }
}
