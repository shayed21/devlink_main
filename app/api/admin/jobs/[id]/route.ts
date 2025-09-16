import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { supabaseAdmin } from '@/lib/supabase';

// PUT - Update job post
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const { data: job, error } = await supabaseAdmin
      .from('job_posts')
      .update({
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
        published,
        updated_at: new Date().toISOString(),
      })
      .eq('id', params.id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json(job);
  } catch (error) {
    console.error('Error updating job post:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete job post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { error } = await supabaseAdmin
      .from('job_posts')
      .delete()
      .eq('id', params.id);

    if (error) {
      throw error;
    }

    return NextResponse.json({ message: 'Job post deleted successfully' });
  } catch (error) {
    console.error('Error deleting job post:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}