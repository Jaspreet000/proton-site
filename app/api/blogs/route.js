// app/api/blogs/route.js
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

// Handle POST requests
export async function POST(req) {
  try {
    const body = await req.json();
    const { title, description, image, link, content, by, bydesc } = body;

    if (!title || !description || !content) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const { db } = await connectToDatabase();
    
    const newBlog = {
      title,
      description,
      image,
      link,
      content,
      by,
      bydesc,
      createdAt: new Date(),
    };

    await db.collection('blogs').insertOne(newBlog);

    return NextResponse.json({ message: 'Blog added successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong.' }, { status: 500 });
  }
}

// Handle any other methods (e.g., GET, DELETE, etc.)
export function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
