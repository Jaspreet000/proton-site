// app/api/connect/route.ts

import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';

export async function GET() {
  try {
    await dbConnect(); // Establish MongoDB connection
    return NextResponse.json({ message: "Connected to MongoDB" });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return NextResponse.json(
      { error: "Failed to connect to MongoDB" },
      { status: 500 }
    );
  }
}
