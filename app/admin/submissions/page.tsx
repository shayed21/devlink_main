'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail,
  Phone,
  Building,
  Calendar,
  DollarSign,
  Clock,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Eye,
  Filter,
  Download,
  Trash2
} from 'lucide-react';
import { getLocalSubmissions } from '@/lib/contact';

interface LocalSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
  created_at: string;
  status: 'new' | 'contacted' | 'in_progress' | 'completed';
}

export default function AdminSubmissions() {
  const [submissions, setSubmissions] = useState<LocalSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'new' | 'contacted' | 'in_progress' | 'completed'>('all');

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = () => {
    try {
      setLoading(true);
      const data = getLocalSubmissions();
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error loading submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = (id: string, status: 'new' | 'contacted' | 'in_progress' | 'completed') => {
    const updatedSubmissions = submissions.map(sub => 
      sub.id === id ? { ...sub, status } : sub
    );
    setSubmissions(updatedSubmissions);
    localStorage.setItem('contact_submissions', JSON.stringify(updatedSubmissions));
  };

  const handleDelete = (id: string) => {
    const updatedSubmissions = submissions.filter(sub => sub.id !== id);
    setSubmissions(updatedSubmissions);
    localStorage.setItem('contact_submissions', JSON.stringify(updatedSubmissions));
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Company', 'Phone', 'Project Type', 'Budget', 'Timeline', 'Message', 'Status', 'Date'];
    const csvContent = [
      headers.join(','),
      ...submissions.map(sub => [
        sub.name,
        sub.email,
        sub.company || '',
        sub.phone || '',
        sub.projectType || '',
        sub.budget || '',
        sub.timeline || '',
        `"${sub.message.replace(/"/g, '""')}"`,
        sub.status,
        new Date(sub.created_at).toLocaleDateString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contact_submissions_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'contacted': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'in_progress': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'completed': return 'bg-green-500/20 text-green-300 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const filteredSubmissions = filter === 'all' 
    ? submissions 
    : submissions.filter(sub => sub.status === filter);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-dark text-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 text-blue-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-300">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-dark text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Contact Form Submissions</h1>
            <p className="text-gray-300">Manage and track all contact form submissions from your website.</p>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={exportToCSV}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button
              onClick={loadSubmissions}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card className="bg-card/30 backdrop-blur-sm border-white/10 text-center p-4">
            <div className="text-2xl font-bold text-white">{submissions.length}</div>
            <div className="text-gray-300 text-sm">Total</div>
          </Card>
          {['new', 'contacted', 'in_progress', 'completed'].map((status) => (
            <Card key={status} className="bg-card/30 backdrop-blur-sm border-white/10 text-center p-4">
              <div className="text-2xl font-bold text-white">
                {submissions.filter(s => s.status === status).length}
              </div>
              <div className="text-gray-300 text-sm capitalize">{status.replace('_', ' ')}</div>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          {['all', 'new', 'contacted', 'in_progress', 'completed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status as any)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                filter === status 
                  ? 'bg-gradient-blue text-white shadow-glow' 
                  : 'bg-card/20 text-gray-300 hover:bg-card/40'
              }`}
            >
              {status === 'all' ? 'All' : status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              <span className="ml-2 text-sm">
                ({status === 'all' ? submissions.length : submissions.filter(s => s.status === status).length})
              </span>
            </button>
          ))}
        </div>

        {/* Submissions Grid */}
        {filteredSubmissions.length === 0 ? (
          <Card className="bg-card/30 backdrop-blur-sm border-white/10">
            <CardContent className="p-12 text-center">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No submissions found</h3>
              <p className="text-gray-300">
                {filter === 'all' ? 'No contact form submissions yet.' : `No submissions with status "${filter}".`}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Submissions are stored locally in your browser during development.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {filteredSubmissions.map((submission) => (
              <Card key={submission.id} className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-white mb-2">{submission.name}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-300">
                        <div className="flex items-center space-x-1">
                          <Mail className="h-4 w-4" />
                          <span>{submission.email}</span>
                        </div>
                        {submission.company && (
                          <div className="flex items-center space-x-1">
                            <Building className="h-4 w-4" />
                            <span>{submission.company}</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(submission.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(submission.status)}>
                        {submission.status.replace('_', ' ')}
                      </Badge>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(submission.id)}
                        className="border-red-500/30 text-red-400 hover:bg-red-500/20"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-3">
                      {submission.phone && (
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-blue-400" />
                          <span className="text-gray-300">{submission.phone}</span>
                        </div>
                      )}
                      {submission.projectType && (
                        <div className="flex items-center space-x-2">
                          <Eye className="h-4 w-4 text-cyan-400" />
                          <span className="text-gray-300">Project: {submission.projectType}</span>
                        </div>
                      )}
                      {submission.budget && (
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-green-400" />
                          <span className="text-gray-300">Budget: {submission.budget}</span>
                        </div>
                      )}
                      {submission.timeline && (
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-purple-400" />
                          <span className="text-gray-300">Timeline: {submission.timeline}</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Message:</h4>
                      <p className="text-gray-300 text-sm leading-relaxed bg-background/30 rounded-lg p-3">
                        {submission.message}
                      </p>
                    </div>
                  </div>

                  {/* Status Update Buttons */}
                  <div className="flex flex-wrap gap-2">
                    {['new', 'contacted', 'in_progress', 'completed'].map((status) => (
                      <Button
                        key={status}
                        size="sm"
                        variant={submission.status === status ? "default" : "outline"}
                        onClick={() => handleStatusUpdate(submission.id, status as any)}
                        className={`text-xs ${
                          submission.status === status 
                            ? 'bg-gradient-blue' 
                            : 'border-gray-600 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Instructions */}
        <Card className="bg-blue-500/10 border-blue-500/30 mt-12">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-blue-400" />
              Development Mode
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>Current Setup:</strong> Form submissions are stored locally in your browser during development.
              </p>
              <div>
                <strong>For Production, you can use:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li><strong>Formspree:</strong> Free tier allows 50 submissions/month. Easy setup with just a form endpoint.</li>
                  <li><strong>Netlify Forms:</strong> If deploying to Netlify, built-in form handling with email notifications.</li>
                  <li><strong>EmailJS:</strong> Send emails directly from the frontend without a backend.</li>
                  <li><strong>Custom API:</strong> Build your own backend API to handle form submissions.</li>
                </ul>
              </div>
              <p className="text-blue-300">
                <strong>Recommendation:</strong> Use Formspree for the easiest setup. Just sign up at formspree.io and replace the form endpoint in the code.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}