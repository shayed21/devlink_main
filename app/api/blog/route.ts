import { NextResponse } from 'next/server';
import { BlogService } from '@/lib/database';

// GET - Fetch published blog posts for public website
export async function GET() {
  try {
    const posts = await BlogService.getPublished();

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}