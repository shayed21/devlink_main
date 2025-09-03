'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Calendar,
  User,
  Clock,
  BookOpen,
  Star,
  Tag,
  Image as ImageIcon,
  FileText,
  Eye,
  Download
} from 'lucide-react';

interface BlogPostMeta {
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

interface BlogPostForm {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string;
  featured: boolean;
  image: string;
  readTime: string;
}

export default function BlogAdmin() {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState<string | null>(null);
  const [formData, setFormData] = useState<BlogPostForm>({
    title: '',
    excerpt: '',
    content: '',
    author: 'Dev Flink Team',
    category: 'Web Development',
    tags: '',
    featured: false,
    image: '',
    readTime: '5 min read'
  });

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    // For static export, use sample data
    setSamplePosts();
  };

  const setSamplePosts = () => {
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
      }
    ];
    setPosts(samplePosts);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSavePost();
  };

  const handleSavePost = () => {
    // In a real implementation, this would save to the file system
    // For now, we'll simulate the process
    console.log('Saving post:', formData);
    
    // Reset form
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: 'Dev Flink Team',
      category: 'Web Development',
      tags: '',
      featured: false,
      image: '',
      readTime: '5 min read'
    });
    
    setIsCreating(false);
    setEditingPost(null);
    
    // Reload posts (in real implementation)
    loadPosts();
  };

  const handleEdit = (post: BlogPostMeta) => {
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: '', // Would load full content in real implementation
      author: post.author,
      category: post.category,
      tags: post.tags.join(', '),
      featured: post.featured,
      image: post.image || '',
      readTime: post.readTime || '5 min read'
    });
    setEditingPost(post.slug);
    setIsCreating(true);
  };

  const handleDelete = (slug: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      // In real implementation, this would delete the file
      console.log('Deleting post:', slug);
      setPosts(posts.filter(p => p.slug !== slug));
    }
  };

  const exportPosts = () => {
    const dataStr = JSON.stringify(posts, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'blog-posts.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const categories = ['Web Development', 'Mobile Development', 'AI & Automation', 'DevOps', 'Design', 'Business'];

  return (
    <div className="min-h-screen bg-gradient-dark text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Blog Management</h1>
            <p className="text-gray-300">Create and manage blog posts for your website.</p>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={exportPosts}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button
              onClick={() => setIsCreating(true)}
              className="bg-gradient-blue hover:shadow-glow transition-all duration-300"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card/30 backdrop-blur-sm border-white/10 text-center p-4">
            <div className="text-2xl font-bold text-white">{posts.length}</div>
            <div className="text-gray-300 text-sm">Total Posts</div>
          </Card>
          <Card className="bg-card/30 backdrop-blur-sm border-white/10 text-center p-4">
            <div className="text-2xl font-bold text-white">{posts.filter(p => p.featured).length}</div>
            <div className="text-gray-300 text-sm">Featured</div>
          </Card>
          <Card className="bg-card/30 backdrop-blur-sm border-white/10 text-center p-4">
            <div className="text-2xl font-bold text-white">{[...new Set(posts.map(p => p.category))].length}</div>
            <div className="text-gray-300 text-sm">Categories</div>
          </Card>
          <Card className="bg-card/30 backdrop-blur-sm border-white/10 text-center p-4">
            <div className="text-2xl font-bold text-white">{[...new Set(posts.flatMap(p => p.tags))].length}</div>
            <div className="text-gray-300 text-sm">Tags</div>
          </Card>
        </div>

        {/* Create/Edit Form */}
        {isCreating && (
          <Card className="bg-card/30 backdrop-blur-sm border-white/10 mb-8">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl text-white">
                  {editingPost ? 'Edit Post' : 'Create New Post'}
                </CardTitle>
                <Button
                  onClick={() => {
                    setIsCreating(false);
                    setEditingPost(null);
                  }}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Title *</label>
                    <Input
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Enter post title"
                      className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Author</label>
                    <Input
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      placeholder="Author name"
                      className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Excerpt *</label>
                  <Textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    placeholder="Brief description of the post"
                    rows={3}
                    className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full bg-background/50 border border-white/20 text-white rounded-md px-3 py-2"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Read Time</label>
                    <Input
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleInputChange}
                      placeholder="5 min read"
                      className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex items-center space-x-2 pt-6">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <label className="text-sm text-gray-300">Featured Post</label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Tags (comma-separated)</label>
                    <Input
                      name="tags"
                      value={formData.tags}
                      onChange={handleInputChange}
                      placeholder="JavaScript, React, Tutorial"
                      className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Featured Image URL</label>
                    <Input
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      placeholder="https://example.com/image.jpg"
                      className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Content (Markdown) *</label>
                  <Textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Write your blog post content in Markdown format..."
                    rows={15}
                    className="bg-background/50 border-white/20 text-white placeholder:text-gray-400 font-mono"
                    required
                  />
                  <p className="text-xs text-gray-400 mt-2">
                    Use Markdown syntax: **bold**, *italic*, # Heading, [link](url), ![image](url)
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-gradient-blue hover:shadow-glow transition-all duration-300"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {editingPost ? 'Update Post' : 'Create Post'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsCreating(false);
                      setEditingPost(null);
                    }}
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Posts List */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">All Posts ({posts.length})</h2>
          </div>

          {posts.length === 0 ? (
            <Card className="bg-card/30 backdrop-blur-sm border-white/10">
              <CardContent className="p-12 text-center">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No blog posts yet</h3>
                <p className="text-gray-300 mb-6">
                  Create your first blog post to start sharing insights with your audience.
                </p>
                <Button
                  onClick={() => setIsCreating(true)}
                  className="bg-gradient-blue hover:shadow-glow transition-all duration-300"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create First Post
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {posts.map((post) => (
                <Card key={post.slug} className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                          {post.featured && (
                            <Badge className="bg-gradient-blue text-white">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                        
                        <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                            {post.category}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                          className="border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(post)}
                          className="border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(post.slug)}
                          className="border-red-500/30 text-red-400 hover:bg-red-500/20"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Instructions */}
        <Card className="bg-blue-500/10 border-blue-500/30 mt-12">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-400" />
              How Blog Management Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong>Current Setup (Development):</strong>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Blog posts are stored as Markdown files in the <code>content/blog</code> directory</li>
                  <li>Posts include frontmatter with metadata (title, author, tags, etc.)</li>
                  <li>Content is written in Markdown and converted to HTML for display</li>
                </ul>
              </div>
              
              <div>
                <strong>For Production, you can:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li><strong>File-based:</strong> Continue using Markdown files (current setup)</li>
                  <li><strong>Headless CMS:</strong> Integrate with Contentful, Strapi, or Sanity</li>
                  <li><strong>Git-based:</strong> Use Forestry, Netlify CMS, or Tina CMS</li>
                  <li><strong>API-based:</strong> Build a custom admin API with authentication</li>
                </ul>
              </div>
              
              <p className="text-blue-300">
                <strong>Recommendation:</strong> For static sites, continue with Markdown files or integrate a headless CMS like Contentful for easier content management.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}