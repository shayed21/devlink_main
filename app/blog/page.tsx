import BlogClientPage from './client-page';

// Sample data for static build
const samplePosts = [
  {
    slug: 'future-of-web-development',
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the latest trends shaping web development, from AI integration to serverless architectures.',
    date: '2024-12-15',
    author: 'Sarah Chen',
    category: 'Web Development',
    tags: ['JavaScript', 'AI', 'Trends'],
    featured: true,
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    readTime: '8 min read'
  },
  {
    slug: 'mobile-app-performance',
    title: 'Optimizing Mobile App Performance: Best Practices',
    excerpt: 'Learn how to build lightning-fast mobile applications that users love.',
    date: '2024-12-10',
    author: 'Marcus Rodriguez',
    category: 'Mobile Development',
    tags: ['React Native', 'Performance', 'Mobile'],
    featured: false,
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    readTime: '6 min read'
  }
];

const sampleCategories = ['Web Development', 'Mobile Development', 'AI & Automation'];
const sampleTags = ['JavaScript', 'AI', 'Trends', 'React Native', 'Performance', 'Mobile'];

export default function BlogPage() {
  return (
    <BlogClientPage 
      initialPosts={samplePosts}
      initialCategories={sampleCategories}
      initialTags={sampleTags}
    />
  );
}