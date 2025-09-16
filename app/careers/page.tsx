'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin,
  Clock,
  DollarSign,
  Users,
  Calendar,
  ArrowRight,
  Upload,
  CheckCircle,
  X,
  Briefcase,
  GraduationCap,
  Star,
  Globe,
  Heart,
  Zap,
  Target,
  Award,
  Building,
  Mail,
  Phone,
  FileText,
  Send
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  featured: boolean;
  urgent: boolean;
  postedDate: string;
}

interface ApplicationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  currentRole: string;
  expectedSalary: string;
  availableFrom: string;
  coverLetter: string;
  linkedinUrl: string;
  portfolioUrl: string;
  cv: File | null;
}

export default function Careers() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<ApplicationForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    currentRole: '',
    expectedSalary: '',
    availableFrom: '',
    coverLetter: '',
    linkedinUrl: '',
    portfolioUrl: '',
    cv: null
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const jobPostings: JobPosting[] = [
    {
      id: '1',
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120K - $180K',
      description: 'Join our dynamic engineering team to build cutting-edge web applications that serve millions of users worldwide. You\'ll work with modern technologies and collaborate with talented developers to create innovative solutions.',
      requirements: [
        '5+ years of experience in full-stack development',
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, GCP, or Azure)',
        'Strong understanding of database design and optimization',
        'Experience with CI/CD pipelines and DevOps practices',
        'Excellent problem-solving and communication skills'
      ],
      responsibilities: [
        'Design and develop scalable web applications',
        'Collaborate with cross-functional teams to define and implement features',
        'Write clean, maintainable, and well-tested code',
        'Participate in code reviews and technical discussions',
        'Mentor junior developers and contribute to team growth',
        'Stay updated with latest technologies and best practices'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Comprehensive health, dental, and vision insurance',
        'Flexible work arrangements and remote options',
        'Professional development budget ($3,000/year)',
        'Unlimited PTO and sabbatical opportunities',
        'State-of-the-art equipment and workspace'
      ],
      featured: true,
      urgent: false,
      postedDate: '2024-12-10'
    },
    {
      id: '2',
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'London, UK / Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '£60K - £85K',
      description: 'Create exceptional user experiences for our global platform. Work closely with product managers and engineers to design intuitive interfaces that delight our users.',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma, Sketch, or Adobe Creative Suite',
        'Strong portfolio showcasing web and mobile designs',
        'Understanding of user-centered design principles',
        'Experience with design systems and component libraries',
        'Knowledge of HTML/CSS and responsive design'
      ],
      responsibilities: [
        'Design user interfaces for web and mobile applications',
        'Conduct user research and usability testing',
        'Create wireframes, prototypes, and high-fidelity designs',
        'Collaborate with developers to ensure design implementation',
        'Maintain and evolve our design system',
        'Present design concepts to stakeholders'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Health and wellness benefits',
        'Flexible working hours and remote work',
        'Creative tools and software licenses',
        'Conference attendance and learning opportunities',
        'Collaborative and inspiring work environment'
      ],
      featured: false,
      urgent: true,
      postedDate: '2024-12-08'
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Toronto, CA / Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: 'CAD $100K - $140K',
      description: 'Build and maintain our cloud infrastructure to support our growing platform. Implement automation, monitoring, and security best practices.',
      requirements: [
        '4+ years of DevOps or infrastructure experience',
        'Expertise in AWS, Docker, and Kubernetes',
        'Experience with Infrastructure as Code (Terraform, CloudFormation)',
        'Strong scripting skills (Python, Bash, or Go)',
        'Knowledge of CI/CD tools (Jenkins, GitLab CI, or GitHub Actions)',
        'Understanding of security and compliance requirements'
      ],
      responsibilities: [
        'Design and implement scalable cloud infrastructure',
        'Automate deployment and monitoring processes',
        'Ensure system reliability and performance',
        'Implement security and compliance measures',
        'Collaborate with development teams on deployment strategies',
        'Monitor and optimize infrastructure costs'
      ],
      benefits: [
        'Competitive salary and stock options',
        'Comprehensive benefits package',
        'Remote work flexibility',
        'Professional certification support',
        'Team building events and retreats',
        'Cutting-edge technology stack'
      ],
      featured: false,
      urgent: false,
      postedDate: '2024-12-05'
    },
    {
      id: '4',
      title: 'Product Manager',
      department: 'Product',
      location: 'Sydney, AU / Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: 'AUD $130K - $170K',
      description: 'Lead product strategy and execution for our core platform. Work with engineering, design, and business teams to deliver features that drive user engagement and business growth.',
      requirements: [
        '5+ years of product management experience',
        'Experience with B2B SaaS or technology products',
        'Strong analytical and data-driven decision making skills',
        'Excellent communication and leadership abilities',
        'Experience with agile development methodologies',
        'Technical background or strong technical aptitude'
      ],
      responsibilities: [
        'Define product vision and strategy',
        'Manage product roadmap and prioritization',
        'Collaborate with engineering and design teams',
        'Conduct market research and competitive analysis',
        'Analyze product metrics and user feedback',
        'Present to executives and stakeholders'
      ],
      benefits: [
        'Competitive salary and equity participation',
        'Health and wellness programs',
        'Flexible work arrangements',
        'Professional development opportunities',
        'International team collaboration',
        'Innovation time and hackathons'
      ],
      featured: true,
      urgent: false,
      postedDate: '2024-12-12'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      cv: file
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      
      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'cv' && value instanceof File) {
          submitData.append('cv', value);
        } else if (typeof value === 'string') {
          submitData.append(key, value);
        }
      });
      
      // Add job information
      if (selectedJob) {
        submitData.append('jobTitle', selectedJob.title);
        submitData.append('jobId', selectedJob.id);
        submitData.append('department', selectedJob.department);
      }

      // Submit to Formspree (you'll need to replace with your actual endpoint)
      const response = await fetch('https://formspree.io/f/YOUR_CAREERS_FORM_ID', {
        method: 'POST',
        body: submitData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        experience: '',
        currentRole: '',
        expectedSalary: '',
        availableFrom: '',
        coverLetter: '',
        linkedinUrl: '',
        portfolioUrl: '',
        cv: null
      });
      
      // Close form after success
      setTimeout(() => {
        setShowApplicationForm(false);
        setSelectedJob(null);
      }, 3000);

    } catch (error) {
      console.error('Application submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Part-time': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Contract': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Remote': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

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
            <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_3840_2160_25fps.mp4" type="video/mp4" />
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
            Join Our Team
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed font-light mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={1}
          >
            Build the future of technology with a global team of passionate innovators. 
            We're looking for talented individuals who share our vision of creating solutions without borders.
          </motion.p>
          
          {/* Company Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={2}
          >
            {[
              { number: "50+", label: "Team Members", icon: Users },
              { number: "25+", label: "Countries", icon: Globe },
              { number: "500+", label: "Projects", icon: Award },
              { number: "98%", label: "Satisfaction", icon: Star }
            ].map((stat, index) => (
              <div key={index} className="bg-card/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:shadow-glow transition-all duration-300">
                <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose Dev Flink?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join a company that values innovation, growth, and work-life balance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Work-Life Balance",
                description: "Flexible schedules, remote work options, and unlimited PTO to help you thrive."
              },
              {
                icon: Zap,
                title: "Cutting-Edge Tech",
                description: "Work with the latest technologies and tools in a modern development environment."
              },
              {
                icon: Target,
                title: "Career Growth",
                description: "Clear advancement paths, mentorship programs, and continuous learning opportunities."
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "Build solutions that serve clients across 25+ countries and make a real difference."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:shadow-glow hover:scale-105 transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={index}
              >
                <benefit.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300">
              Discover exciting opportunities to grow your career with us.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobPostings.map((job, index) => (
              <motion.div
                key={job.id}
                className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-glow hover:scale-105 transition-all duration-500 group relative overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={index}
              >
                {job.featured && (
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-gradient-blue text-white px-3 py-1 shadow-lg">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}
                
                {job.urgent && (
                  <div className="absolute -top-2 -left-2">
                    <Badge className="bg-red-500 text-white px-3 py-1 shadow-lg animate-pulse">
                      Urgent
                    </Badge>
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-300 text-sm mb-4">
                      <div className="flex items-center space-x-1">
                        <Building className="h-4 w-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(job.postedDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <Briefcase className="h-8 w-8 text-blue-400 flex-shrink-0" />
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge className={getTypeColor(job.type)}>
                    <Clock className="h-3 w-3 mr-1" />
                    {job.type}
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    <GraduationCap className="h-3 w-3 mr-1" />
                    {job.experience}
                  </Badge>
                  <Badge variant="outline" className="border-green-500/30 text-green-300">
                    <DollarSign className="h-3 w-3 mr-1" />
                    {job.salary}
                  </Badge>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => setSelectedJob(job)}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 flex-1"
                  >
                    View Details
                  </Button>
                  <Button
                    onClick={() => {
                      setSelectedJob(job);
                      setShowApplicationForm(true);
                    }}
                    className="bg-gradient-blue hover:shadow-glow transition-all duration-300 flex-1 group"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && !showApplicationForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card/90 backdrop-blur-lg border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedJob.title}</h2>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <span className="flex items-center space-x-1">
                      <Building className="h-4 w-4" />
                      <span>{selectedJob.department}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedJob.location}</span>
                    </span>
                    <Badge className={getTypeColor(selectedJob.type)}>
                      {selectedJob.type}
                    </Badge>
                  </div>
                </div>
                <Button
                  onClick={() => setSelectedJob(null)}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Job Description</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Responsibilities</h3>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Benefits & Perks</h3>
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Star className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
                <Button
                  onClick={() => setSelectedJob(null)}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 flex-1"
                >
                  Close
                </Button>
                <Button
                  onClick={() => setShowApplicationForm(true)}
                  className="bg-gradient-blue hover:shadow-glow transition-all duration-300 flex-1"
                >
                  Apply for this Position
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card/90 backdrop-blur-lg border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Apply for {selectedJob.title}</h2>
                  <p className="text-gray-300">Fill out the form below and we'll get back to you soon.</p>
                </div>
                <Button
                  onClick={() => {
                    setShowApplicationForm(false);
                    setSelectedJob(null);
                  }}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">First Name *</label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Last Name *</label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Phone *</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Location *</label>
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, Country"
                      className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Professional Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Years of Experience *</label>
                      <Input
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="5+ years"
                        className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Current Role</label>
                      <Input
                        name="currentRole"
                        value={formData.currentRole}
                        onChange={handleInputChange}
                        placeholder="Senior Developer"
                        className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Expected Salary</label>
                      <Input
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleInputChange}
                        placeholder="$120,000"
                        className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Available From</label>
                      <Input
                        name="availableFrom"
                        type="date"
                        value={formData.availableFrom}
                        onChange={handleInputChange}
                        className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">LinkedIn Profile</label>
                      <Input
                        name="linkedinUrl"
                        value={formData.linkedinUrl}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/in/johndoe"
                        className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Portfolio URL</label>
                      <Input
                        name="portfolioUrl"
                        value={formData.portfolioUrl}
                        onChange={handleInputChange}
                        placeholder="https://johndoe.dev"
                        className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Cover Letter *</label>
                  <Textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    rows={6}
                    className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                </div>

                {/* CV Upload */}
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Upload CV/Resume *</label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-blue-400/50 transition-colors">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="cv-upload"
                      required
                    />
                    <label htmlFor="cv-upload" className="cursor-pointer">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-300 mb-2">
                        {formData.cv ? formData.cv.name : 'Click to upload your CV/Resume'}
                      </p>
                      <p className="text-gray-500 text-sm">PDF, DOC, or DOCX (Max 10MB)</p>
                    </label>
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-white/10">
                  <Button
                    type="button"
                    onClick={() => {
                      setShowApplicationForm(false);
                      setSelectedJob(null);
                    }}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-blue hover:shadow-glow transition-all duration-300 flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Application
                      </>
                    )}
                  </Button>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-green-300 font-medium">
                        Application submitted successfully! We'll review your application and get back to you soon.
                      </span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <X className="h-5 w-5 text-red-400" />
                      <span className="text-red-300 font-medium">
                        Sorry, there was an error submitting your application. Please try again or contact us directly.
                      </span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-blue hover:shadow-glow-lg transition-all duration-300 text-lg px-10 py-6"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send General Application
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 text-lg px-10 py-6"
              >
                Learn About Our Culture
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}