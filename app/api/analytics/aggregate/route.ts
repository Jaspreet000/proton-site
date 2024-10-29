// app/api/analytics/aggregate/route.ts

import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';
import Analytic from '@/models/Analytic';

export async function GET() {
  try {
    await dbConnect();

    // Aggregate data to get the required analytics information
    const data = await Analytic.aggregate([
      { $unwind: '$pageVisits' },
      {
        $group: {
          _id: '$pageVisits.pageName',
          totalTimeSpent: { $sum: '$pageVisits.timeSpent' },
          uniqueUsers: { $addToSet: '$userId' }, // Unique users per page
          userSessions: {
            $push: {
              userId: '$userId',
              timeSpent: '$pageVisits.timeSpent',
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          pageName: '$_id',
          totalTimeSpent: 1,
          uniqueUsersCount: { $size: '$uniqueUsers' }, // Count of unique users
          userSessions: 1,
        },
      },
    ]);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching aggregated analytics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}
