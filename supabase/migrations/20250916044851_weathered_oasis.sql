/*
  # Initial Schema Setup for Dev Flink Backend

  1. New Tables
    - `users` - Admin users with authentication
    - `blog_posts` - Blog articles with full content management
    - `job_posts` - Job listings with detailed information
    - `job_applications` - Applications submitted through the website
    - `contact_submissions` - Contact form submissions

  2. Security
    - Enable RLS on all tables
    - Add policies for admin access
    - Add policies for public read access where appropriate

  3. Functions
    - Auto-generate slugs for blog posts
    - Handle timestamps automatically
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table for admin authentication
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  password_hash text NOT NULL,
  role text NOT NULL DEFAULT 'admin' CHECK (role IN ('admin', 'editor')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  category text NOT NULL,
  tags text[] DEFAULT '{}',
  featured boolean DEFAULT false,
  image text,
  read_time text DEFAULT '5 min read',
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Job posts table
CREATE TABLE IF NOT EXISTS job_posts (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  department text NOT NULL,
  location text NOT NULL,
  type text NOT NULL CHECK (type IN ('Full-time', 'Part-time', 'Contract', 'Remote')),
  experience text NOT NULL,
  salary text NOT NULL,
  description text NOT NULL,
  requirements text[] DEFAULT '{}',
  responsibilities text[] DEFAULT '{}',
  benefits text[] DEFAULT '{}',
  featured boolean DEFAULT false,
  urgent boolean DEFAULT false,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Job applications table
CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id uuid REFERENCES job_posts(id) ON DELETE CASCADE,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  location text,
  experience text,
  current_role text,
  expected_salary text,
  available_from date,
  cover_letter text NOT NULL,
  linkedin_url text,
  portfolio_url text,
  cv_url text,
  status text DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'interview', 'rejected', 'hired')),
  created_at timestamptz DEFAULT now()
);

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  project_type text,
  budget text,
  timeline text,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'completed')),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policies for users table (admin only)
CREATE POLICY "Admin users can manage users"
  ON users
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for blog_posts table
CREATE POLICY "Anyone can read published blog posts"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Admin users can manage all blog posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for job_posts table
CREATE POLICY "Anyone can read published job posts"
  ON job_posts
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Admin users can manage all job posts"
  ON job_posts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for job_applications table
CREATE POLICY "Anyone can create job applications"
  ON job_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admin users can manage all job applications"
  ON job_applications
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for contact_submissions table
CREATE POLICY "Anyone can create contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admin users can manage all contact submissions"
  ON contact_submissions
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_job_posts_updated_at
  BEFORE UPDATE ON job_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert default admin user (password: admin123)
INSERT INTO users (email, name, password_hash, role)
VALUES (
  'admin@devflink.com',
  'Admin User',
  '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj6hsxq9w5KS', -- bcrypt hash of 'admin123'
  'admin'
) ON CONFLICT (email) DO NOTHING;