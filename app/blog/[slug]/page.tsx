'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  Tag,
  Star,
  ThumbsUp,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getPostBySlug, getAllPosts, type BlogPost, type BlogPostMeta } from '@/lib/blog';
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostMeta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPost();
  }, [slug]);

  const loadPost = async () => {
    try {
      setLoading(true);
      const postData = await getPostBySlug(slug);
      
      if (postData) {
        setPost(postData);
        
        // Get related posts (same category, excluding current post)
        const allPosts = getAllPosts();
        const related = allPosts
          .filter(p => p.slug !== slug && p.category === postData.category)
          .slice(0, 3);
        setRelatedPosts(related);
      } else {
        // Set sample post for demonstration
        setSamplePost();
      }
    } catch (error) {
      console.error('Error loading post:', error);
      setSamplePost();
    } finally {
      setLoading(false);
    }
  };

  const setSamplePost = () => {
    const samplePost: BlogPost = {
      slug: slug,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the latest trends shaping web development, from AI integration to serverless architectures.',
      content: `
        <h2>Introduction</h2>
        <p>The web development landscape is evolving at an unprecedented pace. As we move into 2025, several key trends are reshaping how we build and deploy web applications.</p>
        
        <h2>AI-Powered Development</h2>
        <p>Artificial Intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are becoming indispensable for modern developers.</p>
        
        <h3>Key AI Tools:</h3>
        <ul>
          <li>GitHub Copilot for code completion</li>
          <li>ChatGPT for problem-solving</li>
          <li>Automated testing frameworks</li>
        </ul>
        
        <h2>Serverless Architecture</h2>
        <p>Serverless computing continues to gain traction, offering developers the ability to build scalable applications without managing infrastructure.</p>
        
        <h2>Performance Optimization</h2>
        <p>With Core Web Vitals becoming increasingly important for SEO, performance optimization is no longer optional. Modern frameworks are focusing heavily on speed and efficiency.</p>
        
        <h2>Conclusion</h2>
        <p>The future of web development is bright, with new technologies and methodologies emerging to help developers build better, faster, and more efficient applications.</p>
      `,
      date: '2024-12-15',
      author: 'Sarah Chen',
      category: 'Web Development',
      tags: ['JavaScript', 'AI', 'Trends', 'Performance'],
      featured: true,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      readTime: '8 min read'
    };
    
    setPost(samplePost);
    
    // Sample related posts
    const sampleRelated: BlogPostMeta[] = [
      {
        slug: 'mobile-app-performance',
        title: 'Optimizing Mobile App Performance',
        excerpt: 'Best practices for building fast mobile applications.',
        date: '2024-12-10',
        author: 'Marcus Rodriguez',
        category: 'Web Development',
        tags: ['Performance', 'Mobile'],
        featured: false,
        readTime: '6 min read'
      },
      {
        slug: 'react-best-practices',
        title: 'React Best Practices for 2025',
        excerpt: 'Modern React patterns and techniques.',
        date: '2024-12-08',
        author: 'Priya Patel',
        category: 'Web Development',
        tags: ['React', 'JavaScript'],
        featured: false,
        readTime: '7 min read'
      }
    ];
    
    setRelatedPosts(sampleRelated);
  };

  const handleShare = () => {
    if (navigator.share && post) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-dark text-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-8 w-8 text-blue-400 animate-pulse mx-auto mb-4" />
          <p className="text-gray-300">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-dark text-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-300 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="bg-gradient-blue hover:shadow-glow transition-all duration-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-dark text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {post.image && (
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${post.image})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
          </div>
        )}
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/blog">
              <Button variant="ghost" className="text-gray-300 hover:text-white mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
            
            <div className="mb-6">
              <Badge variant="outline" className="border-blue-400/30 text-blue-300 mb-4">
                {post.category}
              </Badge>
              {post.featured && (
                <Badge className="bg-gradient-blue text-white ml-2">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                onClick={handleShare}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share Article
              </Button>
              
              <div className="flex gap-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="border-gray-600 text-gray-300">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-card/30 backdrop-blur-sm border-white/10">
              <CardContent className="p-8 md:p-12">
                <div 
                  className="prose prose-lg prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{
                    color: '#e5e7eb',
                    lineHeight: '1.8'
                  }}
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Related Articles
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow hover:scale-105 transition-all duration-500 group h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors">
                        {relatedPost.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {relatedPost.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                          {relatedPost.category}
                        </Badge>
                        <Link href={`/blog/${relatedPost.slug}`}>
                          <Button size="sm" className="bg-gradient-blue hover:shadow-glow transition-all duration-300">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-blue hover:shadow-glow-lg transition-all duration-300 text-lg px-10 py-6"
            >
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}