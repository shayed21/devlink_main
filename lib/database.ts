import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

// Database file paths
const DATA_DIR = path.join(process.cwd(), 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const BLOG_POSTS_FILE = path.join(DATA_DIR, 'blog-posts.json');
const JOB_POSTS_FILE = path.join(DATA_DIR, 'job-posts.json');
const APPLICATIONS_FILE = path.join(DATA_DIR, 'applications.json');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');

// Ensure data directory exists
export function ensureDataDirectory() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Generic file operations
function readJsonFile<T>(filePath: string, defaultValue: T[] = []): T[] {
  ensureDataDirectory();
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    }
    return defaultValue as T[];
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return defaultValue as T[];
  }
}

function writeJsonFile<T>(filePath: string, data: T[]): void {
  ensureDataDirectory();
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error);
    throw error;
  }
}

// Types
export interface User {
  id: string;
  email: string;
  name: string;
  password_hash: string;
  role: 'admin' | 'editor';
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  image?: string;
  read_time: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface JobPost {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  featured: boolean;
  urgent: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface JobApplication {
  id: string;
  job_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  location?: string;
  experience?: string;
  current_role?: string;
  expected_salary?: string;
  available_from?: string;
  cover_letter: string;
  linkedin_url?: string;
  portfolio_url?: string;
  cv_url?: string;
  status: 'new' | 'reviewed' | 'interview' | 'rejected' | 'hired';
  created_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  project_type?: string;
  budget?: string;
  timeline?: string;
  message: string;
  status: 'new' | 'contacted' | 'in_progress' | 'completed';
  created_at: string;
}

// User operations
export class UserService {
  static async findByEmail(email: string): Promise<User | null> {
    const users = readJsonFile<User>(USERS_FILE);
    return users.find(user => user.email === email) || null;
  }

  static async create(userData: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<User> {
    const users = readJsonFile<User>(USERS_FILE);
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    users.push(newUser);
    writeJsonFile(USERS_FILE, users);
    return newUser;
  }

  static async verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }
}

// Blog post operations
export class BlogService {
  static async getAll(): Promise<BlogPost[]> {
    return readJsonFile<BlogPost>(BLOG_POSTS_FILE);
  }

  static async getPublished(): Promise<BlogPost[]> {
    const posts = readJsonFile<BlogPost>(BLOG_POSTS_FILE);
    return posts.filter(post => post.published).sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  static async getBySlug(slug: string): Promise<BlogPost | null> {
    const posts = readJsonFile<BlogPost>(BLOG_POSTS_FILE);
    return posts.find(post => post.slug === slug) || null;
  }

  static async create(postData: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>): Promise<BlogPost> {
    const posts = readJsonFile<BlogPost>(BLOG_POSTS_FILE);
    const newPost: BlogPost = {
      ...postData,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    posts.push(newPost);
    writeJsonFile(BLOG_POSTS_FILE, posts);
    return newPost;
  }

  static async update(id: string, postData: Partial<BlogPost>): Promise<BlogPost | null> {
    const posts = readJsonFile<BlogPost>(BLOG_POSTS_FILE);
    const index = posts.findIndex(post => post.id === id);
    if (index === -1) return null;

    posts[index] = {
      ...posts[index],
      ...postData,
      updated_at: new Date().toISOString()
    };
    writeJsonFile(BLOG_POSTS_FILE, posts);
    return posts[index];
  }

  static async delete(id: string): Promise<boolean> {
    const posts = readJsonFile<BlogPost>(BLOG_POSTS_FILE);
    const filteredPosts = posts.filter(post => post.id !== id);
    if (filteredPosts.length === posts.length) return false;
    writeJsonFile(BLOG_POSTS_FILE, filteredPosts);
    return true;
  }
}

// Job post operations
export class JobService {
  static async getAll(): Promise<JobPost[]> {
    return readJsonFile<JobPost>(JOB_POSTS_FILE);
  }

  static async getPublished(): Promise<JobPost[]> {
    const jobs = readJsonFile<JobPost>(JOB_POSTS_FILE);
    return jobs.filter(job => job.published).sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  static async getById(id: string): Promise<JobPost | null> {
    const jobs = readJsonFile<JobPost>(JOB_POSTS_FILE);
    return jobs.find(job => job.id === id) || null;
  }

  static async create(jobData: Omit<JobPost, 'id' | 'created_at' | 'updated_at'>): Promise<JobPost> {
    const jobs = readJsonFile<JobPost>(JOB_POSTS_FILE);
    const newJob: JobPost = {
      ...jobData,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    jobs.push(newJob);
    writeJsonFile(JOB_POSTS_FILE, jobs);
    return newJob;
  }

  static async update(id: string, jobData: Partial<JobPost>): Promise<JobPost | null> {
    const jobs = readJsonFile<JobPost>(JOB_POSTS_FILE);
    const index = jobs.findIndex(job => job.id === id);
    if (index === -1) return null;

    jobs[index] = {
      ...jobs[index],
      ...jobData,
      updated_at: new Date().toISOString()
    };
    writeJsonFile(JOB_POSTS_FILE, jobs);
    return jobs[index];
  }

  static async delete(id: string): Promise<boolean> {
    const jobs = readJsonFile<JobPost>(JOB_POSTS_FILE);
    const filteredJobs = jobs.filter(job => job.id !== id);
    if (filteredJobs.length === jobs.length) return false;
    writeJsonFile(JOB_POSTS_FILE, filteredJobs);
    return true;
  }
}

// Initialize default admin user
export async function initializeDatabase() {
  ensureDataDirectory();
  
  // Create default admin user if no users exist
  const users = readJsonFile<User>(USERS_FILE);
  if (users.length === 0) {
    const hashedPassword = await UserService.hashPassword('admin123');
    await UserService.create({
      email: 'admin@devflink.com',
      name: 'Admin User',
      password_hash: hashedPassword,
      role: 'admin'
    });
    console.log('Default admin user created: admin@devflink.com / admin123');
  }
}