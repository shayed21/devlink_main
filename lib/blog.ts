import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  image?: string;
  readTime?: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  image?: string;
  readTime?: string;
}

// Ensure blog directory exists
export function ensureBlogDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

// Get all blog post slugs
export function getAllPostSlugs(): string[] {
  ensureBlogDirectory();
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter(name => name.endsWith('.md'))
      .map(name => name.replace(/\.md$/, ''));
  } catch (error) {
    return [];
  }
}

// Get blog post data by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  ensureBlogDirectory();
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();
    
    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content: contentHtml,
      date: data.date || new Date().toISOString(),
      author: data.author || 'Dev Flink Team',
      category: data.category || 'General',
      tags: data.tags || [],
      featured: data.featured || false,
      image: data.image,
      readTime: data.readTime || '5 min read'
    };
  } catch (error) {
    console.error('Error reading post:', error);
    return null;
  }
}

// Get all blog posts metadata
export function getAllPosts(): BlogPostMeta[] {
  ensureBlogDirectory();
  try {
    const slugs = getAllPostSlugs();
    const posts = slugs
      .map(slug => {
        try {
          const fullPath = path.join(postsDirectory, `${slug}.md`);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data } = matter(fileContents);
          
          return {
            slug,
            title: data.title || '',
            excerpt: data.excerpt || '',
            date: data.date || new Date().toISOString(),
            author: data.author || 'Dev Flink Team',
            category: data.category || 'General',
            tags: data.tags || [],
            featured: data.featured || false,
            image: data.image,
            readTime: data.readTime || '5 min read'
          };
        } catch (error) {
          return null;
        }
      })
      .filter((post): post is BlogPostMeta => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return posts;
  } catch (error) {
    return [];
  }
}

// Get featured posts
export function getFeaturedPosts(): BlogPostMeta[] {
  return getAllPosts().filter(post => post.featured);
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

// Get all categories
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map(post => post.category))];
  return categories.sort();
}

// Get all tags
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = [...new Set(posts.flatMap(post => post.tags))];
  return tags.sort();
}

// Create a new blog post
export function createBlogPost(postData: Omit<BlogPost, 'slug' | 'content'> & { content: string }): string {
  ensureBlogDirectory();
  
  // Generate slug from title
  const slug = postData.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  
  // Create frontmatter
  const frontmatter = {
    title: postData.title,
    excerpt: postData.excerpt,
    date: postData.date,
    author: postData.author,
    category: postData.category,
    tags: postData.tags,
    featured: postData.featured,
    image: postData.image,
    readTime: postData.readTime
  };
  
  // Create markdown content
  const markdownContent = matter.stringify(postData.content, frontmatter);
  
  // Write file
  const filePath = path.join(postsDirectory, `${slug}.md`);
  fs.writeFileSync(filePath, markdownContent);
  
  return slug;
}

// Update existing blog post
export function updateBlogPost(slug: string, postData: Omit<BlogPost, 'slug' | 'content'> & { content: string }): boolean {
  ensureBlogDirectory();
  
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    // Create frontmatter
    const frontmatter = {
      title: postData.title,
      excerpt: postData.excerpt,
      date: postData.date,
      author: postData.author,
      category: postData.category,
      tags: postData.tags,
      featured: postData.featured,
      image: postData.image,
      readTime: postData.readTime
    };
    
    // Create markdown content
    const markdownContent = matter.stringify(postData.content, frontmatter);
    
    // Write file
    fs.writeFileSync(filePath, markdownContent);
    
    return true;
  } catch (error) {
    console.error('Error updating post:', error);
    return false;
  }
}

// Delete blog post
export function deleteBlogPost(slug: string): boolean {
  ensureBlogDirectory();
  
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    fs.unlinkSync(filePath);
    return true;
  } catch (error) {
    console.error('Error deleting post:', error);
    return false;
  }
}