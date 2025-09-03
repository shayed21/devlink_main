import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactFormData {
  id?: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  project_type?: string;
  budget?: string;
  timeline?: string;
  message: string;
  created_at?: string;
  status?: 'new' | 'contacted' | 'in_progress' | 'completed';
}