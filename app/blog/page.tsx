'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Calendar,
  User,
  Clock,
  Search,
  Filter,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Star,
  Tag
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getAllPosts, getAllCategories, getAllTags, type BlogPostMeta } from '@/lib/blog';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPostMeta[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    loadBlogData();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, searchTerm, selectedCategory, selectedTag]);

  const loadBlogData = () => {
    try {
      const allPosts = getAllPosts();
      const allCategories = getAllCategories();
      const allTags = getAllTags();
      
      setPosts(allPosts);
      setCategories(allCategories);
      setTags(allTags);
    } catch (error) {
      console.error('Error loading blog data:', error);
      // Set some sample data for demonstration
      setSampleData();
    }
  };

  const setSampleData = () => {
    const samplePosts: BlogPostMeta[] = [
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
      },
      {
        slug: 'ai-automation-business',
        title: 'How AI Automation is Transforming Business Operations',
        excerpt: 'Discover how artificial intelligence is revolutionizing the way businesses operate.',
        date: '2024-12-05',
        author: 'Priya Patel',
        category: 'AI & Automation',
        tags: ['AI', 'Automation', 'Business'],
        featured: true,
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
        readTime: '10 min read'
      }
    ];
    
    setPosts(samplePosts);
    setCategories(['Web Development', 'Mobile Development', 'AI & Automation']);
    setTags(['JavaScript', 'AI', 'Trends', 'React Native', 'Performance', 'Mobile', 'Automation', 'Business']);
  };

  const filterPosts = () => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by tag
    if (selectedTag !== 'all') {
      filtered = filtered.filter(post => post.tags.includes(selectedTag));
    }

    setFilteredPosts(filtered);
  };

  const featuredPosts = posts.filter(post => post.featured);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.7,
        type: "spring" as const,
        stiffness: 80,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-white pt-20">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-25"
          >
            <source src="https://videos.pexels.com/video-files/3130182/3130182-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-black/50 to-cyan-900/60"></div>
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-text-glow"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Dev Flink Blog
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed font-light"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={1}
          >
            Insights, tutorials, and industry trends from our team of expert developers and technology leaders.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-12">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-background/50 border border-white/20 text-white rounded-md px-3 py-2"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Tag Filter */}
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="bg-background/50 border border-white/20 text-white rounded-md px-3 py-2"
              >
                <option value="all">All Tags</option>
                {tags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Articles
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={index}
                >
                  <Card className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow hover:scale-105 transition-all duration-500 group overflow-hidden h-full">
                    {post.image && (
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundImage: `url(${post.image})` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <Badge className="absolute top-4 left-4 bg-gradient-blue text-white">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                            {post.category}
                          </Badge>
                          {post.tags.slice(0, 2).map(tag => (
                            <Badge key={tag} variant="outline" className="border-gray-600 text-gray-300">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <Button size="sm" className="bg-gradient-blue hover:shadow-glow transition-all duration-300 group">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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

      {/* All Posts */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Latest Articles
            </h2>
            <p className="text-gray-300">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          {filteredPosts.length === 0 ? (
            <Card className="bg-card/30 backdrop-blur-sm border-white/10">
              <CardContent className="p-12 text-center">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-300 mb-4">
                  {searchTerm || selectedCategory !== 'all' || selectedTag !== 'all'
                    ? 'Try adjusting your search or filters.'
                    : 'No blog posts have been published yet.'}
                </p>
                <div className="flex justify-center gap-4">
                  <Button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedTag('all');
                    }}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    Clear Filters
                  </Button>
                  <Link href="/admin/blog">
                    <Button className="bg-gradient-blue hover:shadow-glow transition-all duration-300">
                      Create First Post
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={index}
                >
                  <Card className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow hover:scale-105 transition-all duration-500 group overflow-hidden h-full">
                    {post.image && (
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundImage: `url(${post.image})` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        {post.featured && (
                          <Badge className="absolute top-4 left-4 bg-gradient-blue text-white">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-blue-400/30 text-blue-300 text-xs">
                            {post.category}
                          </Badge>
                          {post.tags.slice(0, 2).map(tag => (
                            <Badge key={tag} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <Button size="sm" className="bg-gradient-blue hover:shadow-glow transition-all duration-300 group">
                            Read
                            <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Want to Contribute?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Share your expertise and insights with our global community of developers and business leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admin/blog">
              <Button 
                size="lg" 
                className="bg-gradient-blue hover:shadow-glow-lg transition-all duration-300 text-lg px-10 py-6"
              >
                Write an Article
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 text-lg px-10 py-6"
              >
                Suggest a Topic
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}