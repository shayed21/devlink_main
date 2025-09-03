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

// For development - store submissions locally
export function saveSubmissionLocally(formData: ContactFormData) {
  const submissions = getLocalSubmissions();
  const newSubmission = {
    ...formData,
    id: Date.now().toString(),
    created_at: new Date().toISOString(),
    status: 'new'
  };
  
  submissions.push(newSubmission);
  localStorage.setItem('contact_submissions', JSON.stringify(submissions));
  return newSubmission;
}

export function getLocalSubmissions() {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('contact_submissions');
  return stored ? JSON.parse(stored) : [];
}

// Production form submission using Formspree (free service)
export async function submitContactForm(formData: ContactFormData) {
  try {
    // Option 1: Use Formspree (recommended for static sites)
    const formspreeEndpoint = 'https://formspree.io/f/meolrdpe';
    
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        'Project Type': formData.projectType,
        'Budget Range': formData.budget,
        'Timeline': formData.timeline,
        message: formData.message,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    // For development, also save locally
    if (process.env.NODE_ENV === 'development') {
      saveSubmissionLocally(formData);
    }

    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    
    // Fallback: save locally in development
    if (process.env.NODE_ENV === 'development') {
      saveSubmissionLocally(formData);
      return { success: true };
    }
    
    throw new Error('Failed to submit contact form. Please try again.');
  }
}

// Alternative: Submit to Netlify Forms (if deploying to Netlify)
export async function submitToNetlifyForms(formData: ContactFormData) {
  const formDataObj = new FormData();
  formDataObj.append('form-name', 'contact');
  Object.entries(formData).forEach(([key, value]) => {
    if (value) formDataObj.append(key, value);
  });

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formDataObj as any).toString()
  });

  if (!response.ok) {
    throw new Error('Failed to submit form');
  }

  return { success: true };
}

// Email service integration (for when you have your own backend)
export async function submitToEmailService(formData: ContactFormData) {
  // You can integrate with services like:
  // - EmailJS (client-side email sending)
  // - Your own API endpoint
  // - Third-party form services
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form');
  }

  return await response.json();
}