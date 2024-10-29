// app/api/analytics/route.ts

import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';
import Analytic from '@/models/Analytic';

export async function POST(request: Request) {
  try {
    await dbConnect(); // Connect to MongoDB
    const { userId, pageName, timeSpent } = await request.json();

    console.log('Received data:', { userId, pageName, timeSpent });

    // Check if a record with the userId exists
    const existingRecord = await Analytic.findOne({ userId });

    if (existingRecord) {
      console.log('Found existing record for userId:', userId);

      // Check if the page has been visited before
      const pageIndex: number = existingRecord.pageVisits.findIndex(
        (visit: { pageName: string }) => visit.pageName === pageName
      );

      if (pageIndex > -1) {
        console.log(`Updating time for page ${pageName}`);
        existingRecord.pageVisits[pageIndex].timeSpent += timeSpent;
      } else {
        console.log(`Adding new page visit for page ${pageName}`);
        existingRecord.pageVisits.push({ pageName, timeSpent });
      }

      // Update the last updated timestamp and save the record
      existingRecord.lastUpdated = new Date();
      await existingRecord.save();

      console.log('Record updated successfully');
      return NextResponse.json({ message: 'Analytics data updated successfully' });
    } else {
      console.log('Creating a new record for userId:', userId);

      // If no record exists, create a new one
      await Analytic.create({
        userId,
        pageVisits: [{ pageName, timeSpent }],
        lastUpdated: new Date(),
      });

      console.log('Record created successfully');
      return NextResponse.json({ message: 'Analytics data stored successfully' });
    }
  } catch (error) {
    console.error('Error storing analytics data:', error);
    return NextResponse.json(
      { error: 'Failed to store analytics data' },
      { status: 500 }
    );
  }
}

