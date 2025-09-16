'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
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
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Eye,
  EyeOff
} from 'lucide-react';
import { JobPost } from '@/lib/supabase';

export default function AdminJobs() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingJob, setEditingJob] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: 'Full-time' as 'Full-time' | 'Part-time' | 'Contract' | 'Remote',
    experience: '',
    salary: '',
    description: '',
    requirements: '',
    responsibilities: '',
    benefits: '',
    featured: false,
    urgent: false,
    published: false
  });

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session || session.user.role !== 'admin') {
      router.push('/admin/login');
      return;
    }

    loadJobs();
  }, [session, status, router]);

  const loadJobs = async () => {
    try {
      const response = await fetch('/api/admin/jobs');
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error loading jobs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const jobData = {
        ...formData,
        requirements: formData.requirements.split('\n').filter(r => r.trim()),
        responsibilities: formData.responsibilities.split('\n').filter(r => r.trim()),
        benefits: formData.benefits.split('\n').filter(b => b.trim())
      };

      const url = editingJob ? `/api/admin/jobs/${editingJob}` : '/api/admin/jobs';
      const method = editingJob ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobData)
      });

      if (!response.ok) throw new Error('Failed to save job');

      // Reset form and reload jobs
      setFormData({
        title: '',
        department: '',
        location: '',
        type: 'Full-time',
        experience: '',
        salary: '',
        description: '',
        requirements: '',
        responsibilities: '',
        benefits: '',
        featured: false,
        urgent: false,
        published: false
      });
      
      setIsCreating(false);
      setEditingJob(null);
      loadJobs();
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  const handleEdit = (job: JobPost) => {
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      experience: job.experience,
      salary: job.salary,
      description: job.description,
      requirements: job.requirements.join('\n'),
      responsibilities: job.responsibilities.join('\n'),
      benefits: job.benefits.join('\n'),
      featured: job.featured,
      urgent: job.urgent,
      published: job.published
    });
    setEditingJob(job.id);
    setIsCreating(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this job post?')) return;

    try {
      const response = await fetch(`/api/admin/jobs/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete job');
      
      loadJobs();
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const togglePublished = async (job: JobPost) => {
    try {
      const response = await fetch(`/api/admin/jobs/${job.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...job, published: !job.published })
      });

      if (!response.ok) throw new Error('Failed to update job');
      
      loadJobs();
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-dark pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Job Management</h1>
            <p className="text-gray-300">Create and manage job postings for your careers page.</p>
          </div>
          <Button
            onClick={() => setIsCreating(true)}
            className="bg-gradient-blue hover:shadow-glow transition-all duration-300"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Job Post
          </Button>
        </div>

        {/* Create/Edit Form */}
        {isCreating && (
          <Card className="bg-card/30 backdrop-blur-sm border-white/10 mb-8">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl text-white">
                  {editingJob ? 'Edit Job Post' : 'Create New Job Post'}
                </CardTitle>
                <Button
                  onClick={() => {
                    setIsCreating(false);
                    setEditingJob(null);
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
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Job Title *</label>
                    <Input
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Senior Full-Stack Developer"
                      className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Department</label>
                    <Input
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      placeholder="Engineering"
                      className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Location</label>
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="San Francisco, CA / Remote"
                      className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Job Type</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full bg-background/50 border border-white/20 text-white rounded-md px-3 py-2"
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Remote">Remote</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Experience</label>
                    <Input
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="5+ years"
                      className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Salary Range</label>
                    <Input
                      name="salary"
                      value={formData.salary}
                      onChange={handleInputChange}
                      placeholder="$120K - $180K"
                      className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex items-center space-x-6 pt-6">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="featured"
                        checked={formData.featured}
                        onChange={handleInputChange}
                        className="rounded"
                      />
                      <span className="text-sm text-gray-300">Featured</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="urgent"
                        checked={formData.urgent}
                        onChange={handleInputChange}
                        className="rounded"
                      />
                      <span className="text-sm text-gray-300">Urgent</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="published"
                        checked={formData.published}
                        onChange={handleInputChange}
                        className="rounded"
                      />
                      <span className="text-sm text-gray-300">Published</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Job Description *</label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe the role and what the candidate will be doing..."
                    rows={4}
                    className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Requirements (one per line)</label>
                  <Textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    placeholder="5+ years of experience in full-stack development&#10;Proficiency in React, Node.js, and TypeScript&#10;Experience with cloud platforms"
                    rows={6}
                    className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Responsibilities (one per line)</label>
                  <Textarea
                    name="responsibilities"
                    value={formData.responsibilities}
                    onChange={handleInputChange}
                    placeholder="Design and develop scalable web applications&#10;Collaborate with cross-functional teams&#10;Write clean, maintainable code"
                    rows={6}
                    className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Benefits (one per line)</label>
                  <Textarea
                    name="benefits"
                    value={formData.benefits}
                    onChange={handleInputChange}
                    placeholder="Competitive salary and equity package&#10;Comprehensive health insurance&#10;Flexible work arrangements"
                    rows={4}
                    className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-gradient-blue hover:shadow-glow transition-all duration-300"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {editingJob ? 'Update Job Post' : 'Create Job Post'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsCreating(false);
                      setEditingJob(null);
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

        {/* Jobs List */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">All Job Posts ({jobs.length})</h2>
          </div>

          {jobs.length === 0 ? (
            <Card className="bg-card/30 backdrop-blur-sm border-white/10">
              <CardContent className="p-12 text-center">
                <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No job posts yet</h3>
                <p className="text-gray-300 mb-6">
                  Create your first job posting to start attracting talent.
                </p>
                <Button
                  onClick={() => setIsCreating(true)}
                  className="bg-gradient-blue hover:shadow-glow transition-all duration-300"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create First Job Post
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {jobs.map((job) => (
                <Card key={job.id} className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                          {job.featured && (
                            <Badge className="bg-gradient-blue text-white">Featured</Badge>
                          )}
                          {job.urgent && (
                            <Badge className="bg-red-500 text-white">Urgent</Badge>
                          )}
                          <Badge className={job.published ? "bg-green-500/20 text-green-300" : "bg-gray-500/20 text-gray-300"}>
                            {job.published ? 'Published' : 'Draft'}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                          <span className="flex items-center space-x-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.department}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.type}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4" />
                            <span>{job.salary}</span>
                          </span>
                        </div>
                        
                        <p className="text-gray-300 mb-4 line-clamp-2">{job.description}</p>
                        
                        <div className="text-sm text-gray-400">
                          Created: {new Date(job.created_at).toLocaleDateString()}
                          {job.updated_at !== job.created_at && (
                            <span> • Updated: {new Date(job.updated_at).toLocaleDateString()}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => togglePublished(job)}
                          className="border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          {job.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(job)}
                          className="border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(job.id)}
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
      </div>
    </div>
  );
}