import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { JobService } from '@/lib/database';

// GET - Fetch all job posts
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const jobs = await JobService.getAll();

    return NextResponse.json(jobs);
  } catch (error) {
    console.error('Error fetching job posts:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create new job post
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      title,
      department,
      location,
      type,
      experience,
      salary,
      description,
      requirements,
      responsibilities,
      benefits,
      featured,
      urgent,
      published
    } = body;

    const job = await JobService.create({
      title,
      department,
      location,
      type,
      experience,
      salary,
      description,
      requirements,
      responsibilities,
      benefits,
      featured: featured || false,
      urgent: urgent || false,
      published: published || false,
    });

    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    console.error('Error creating job post:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}