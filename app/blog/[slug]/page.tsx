import BlogPostClientPage from './client-page';

// Sample blog post data
const samplePost = {
  slug: 'future-of-web-development',
  title: 'The Future of Web Development: Trends to Watch in 2025',
  excerpt: 'Explore the latest trends shaping web development, from AI integration to serverless architectures.',
  content: `
    <h1>The Future of Web Development: Trends to Watch in 2025</h1>
    <p>The web development landscape is evolving at an unprecedented pace. As we move into 2025, several key trends are reshaping how we build and deploy web applications.</p>
    <h2>AI-Powered Development Tools</h2>
    <p>Artificial Intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are becoming indispensable for modern developers.</p>
    <h2>Serverless Architecture Evolution</h2>
    <p>Serverless computing continues to gain traction, offering developers the ability to build scalable applications without managing infrastructure.</p>
    <h2>Performance-First Development</h2>
    <p>With Core Web Vitals becoming increasingly important for SEO, performance optimization is no longer optional.</p>
  `,
  date: '2024-12-15',
  author: 'Sarah Chen',
  category: 'Web Development',
  tags: ['JavaScript', 'AI', 'Trends'],
  featured: true,
  image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
  readTime: '8 min read'
};

const relatedPosts = [
  {
    slug: 'mobile-app-performance',
    title: 'Optimizing Mobile App Performance: Best Practices',
    excerpt: 'Learn how to build lightning-fast mobile applications that users love.',
    date: '2024-12-10',
    author: 'Marcus Rodriguez',
    category: 'Web Development',
    tags: ['React Native', 'Performance'],
    featured: false,
    readTime: '6 min read'
  }
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <BlogPostClientPage 
      post={samplePost}
      relatedPosts={relatedPosts}
    />
  );
}