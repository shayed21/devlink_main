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
  Filter
} from 'lucide-react';
import { getContactSubmissions, updateSubmissionStatus, ContactFormData } from '@/lib/contact';

export default function AdminSubmissions() {
  const [submissions, setSubmissions] = useState<ContactFormData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'new' | 'contacted' | 'in_progress' | 'completed'>('all');

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    try {
      setLoading(true);
      const data = await getContactSubmissions();
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error loading submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, status: 'new' | 'contacted' | 'in_progress' | 'completed') => {
    try {
      await updateSubmissionStatus(id, status);
      await loadSubmissions(); // Refresh the list
    } catch (error) {
      console.error('Error updating status:', error);
    }
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
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Form Submissions</h1>
          <p className="text-gray-300">Manage and track all contact form submissions from your website.</p>
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
          <Button
            onClick={loadSubmissions}
            variant="outline"
            size="sm"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
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
                          <span>{new Date(submission.created_at!).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(submission.status!)}>
                      {submission.status?.replace('_', ' ')}
                    </Badge>
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
                      {submission.project_type && (
                        <div className="flex items-center space-x-2">
                          <Eye className="h-4 w-4 text-cyan-400" />
                          <span className="text-gray-300">Project: {submission.project_type}</span>
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
                        onClick={() => handleStatusUpdate(submission.id!, status as any)}
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
      </div>
    </div>
  );
}