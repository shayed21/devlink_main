'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart,
  Users,
  FileText,
  Briefcase,
  Plus,
  Eye,
  Edit,
  TrendingUp,
  Calendar,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState({
    blogPosts: 0,
    jobPosts: 0,
    applications: 0,
    views: 0
  });

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session || session.user.role !== 'admin') {
      router.push('/admin/login');
      return;
    }

    // Load dashboard stats
    loadStats();
  }, [session, status, router]);

  const loadStats = async () => {
    try {
      setStats({
        blogPosts: 0,
        jobPosts: 0,
        applications: 25,
        views: 1250
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const quickActions = [
    {
      title: 'Create Blog Post',
      description: 'Write a new blog article',
      icon: FileText,
      href: '/admin/blog/new',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Post New Job',
      description: 'Add a job opening',
      icon: Briefcase,
      href: '/admin/jobs/new',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'View Applications',
      description: 'Review job applications',
      icon: Users,
      href: '/admin/applications',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Analytics',
      description: 'View site statistics',
      icon: BarChart,
      href: '/admin/analytics',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const recentActivity = [
    { type: 'blog', title: 'New blog post published', time: '2 hours ago' },
    { type: 'job', title: 'Senior Developer position posted', time: '1 day ago' },
    { type: 'application', title: '5 new job applications received', time: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, {session.user.name}!
          </h1>
          <p className="text-gray-300">
            Manage your blog posts, job listings, and applications from here.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card/30 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Blog Posts</p>
                  <p className="text-3xl font-bold text-white">{stats.blogPosts}</p>
                </div>
                <FileText className="h-8 w-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/30 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Job Posts</p>
                  <p className="text-3xl font-bold text-white">{stats.jobPosts}</p>
                </div>
                <Briefcase className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/30 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Applications</p>
                  <p className="text-3xl font-bold text-white">{stats.applications}</p>
                </div>
                <Users className="h-8 w-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/30 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Page Views</p>
                  <p className="text-3xl font-bold text-white">{stats.views}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href}>
                <Card className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow hover:scale-105 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                    <p className="text-gray-300 text-sm">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity & Management */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card className="bg-card/30 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-background/30 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.title}</p>
                      <p className="text-gray-400 text-xs">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Content Management */}
          <Card className="bg-card/30 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Edit className="h-5 w-5 mr-2" />
                Content Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Link href="/admin/blog">
                  <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700">
                    <FileText className="h-4 w-4 mr-2" />
                    Manage Blog Posts
                  </Button>
                </Link>
                <Link href="/admin/jobs">
                  <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Manage Job Posts
                  </Button>
                </Link>
                <Link href="/admin/submissions">
                  <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Submissions
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700">
                    <Eye className="h-4 w-4 mr-2" />
                    View Website
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}