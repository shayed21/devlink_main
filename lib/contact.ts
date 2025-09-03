import { supabase } from './supabase';

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Call the edge function to handle the submission
    const { data, error } = await supabase.functions.invoke('send-contact-email', {
      body: formData
    });

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to submit contact form. Please try again.');
  }
}

export async function getContactSubmissions() {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    throw new Error('Failed to fetch contact submissions');
  }
}

export async function updateSubmissionStatus(id: string, status: 'new' | 'contacted' | 'in_progress' | 'completed') {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error updating submission status:', error);
    throw new Error('Failed to update submission status');
  }
}