import { NextResponse } from 'next/server';
import { JobService } from '@/lib/database';

// GET - Fetch published job posts for public website
export async function GET() {
  try {
    const jobs = await JobService.getPublished();

    return NextResponse.json(jobs);
  } catch (error) {
    console.error('Error fetching job posts:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}