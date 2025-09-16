import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET - Fetch published job posts for public website
export async function GET() {
  try {
    const { data: jobs, error } = await supabase
      .from('job_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return NextResponse.json(jobs);
  } catch (error) {
    console.error('Error fetching job posts:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}