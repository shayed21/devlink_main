/*
  # Contact Form Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required) - Contact person's full name
      - `email` (text, required) - Contact email address
      - `company` (text, optional) - Company name
      - `phone` (text, optional) - Phone number
      - `project_type` (text, optional) - Type of project requested
      - `budget` (text, optional) - Budget range
      - `timeline` (text, optional) - Project timeline
      - `message` (text, required) - Project details and requirements
      - `status` (text, default 'new') - Submission status for tracking
      - `created_at` (timestamp) - When the submission was created
      - `updated_at` (timestamp) - When the submission was last updated

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for service role to manage all submissions
    - Add policy for authenticated users to read their own submissions

  3. Indexes
    - Index on email for faster lookups
    - Index on created_at for chronological sorting
    - Index on status for filtering
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  project_type text,
  budget text,
  timeline text,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'completed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy for service role to manage all submissions (for admin access)
CREATE POLICY "Service role can manage all submissions"
  ON contact_submissions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Policy for authenticated users to read their own submissions
CREATE POLICY "Users can read own submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' = email);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();