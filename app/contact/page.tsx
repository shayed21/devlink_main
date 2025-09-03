'use client';

import { useState, useEffect } from 'react';
import { submitContactForm } from '@/lib/contact';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Globe,
  MessageSquare,
  Calendar,
  Users,
  Zap,
  Shield
} from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFormSubmission();
  };

  const handleFormSubmission = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        projectType: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message
      });

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@devflink.com",
      description: "Get in touch for project inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Speak directly with our team"
    },
    {
      icon: MapPin,
      title: "Global Offices",
      value: "USA • UK • Canada • Australia",
      description: "Local presence, global expertise"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 hours",
      description: "We respond to all inquiries quickly"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Free Consultation",
      description: "30-minute strategy session to discuss your project"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Assigned project manager and development team"
    },
    {
      icon: Shield,
      title: "NDA Protection",
      description: "Your ideas and data are completely secure"
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quick proof-of-concept to validate your ideas"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Tech Street, SF, CA 94105",
      timezone: "PST (UTC-8)"
    },
    {
      city: "London",
      country: "UK", 
      address: "456 Innovation Ave, London, EC1A 1BB",
      timezone: "GMT (UTC+0)"
    },
    {
      city: "Toronto",
      country: "Canada",
      address: "789 Maple Road, Toronto, ON M5V 3A8",
      timezone: "EST (UTC-5)"
    },
    {
      city: "Sydney",
      country: "Australia",
      address: "321 Harbor View, Sydney, NSW 2000",
      timezone: "AEST (UTC+10)"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark text-white pt-20">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Image */}
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
          <div 
            className="w-full h-full bg-cover bg-center opacity-15"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-black/50 to-blue-900/60"></div>
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-text-glow">
            Let's Build Together
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed font-light">
            Ready to transform your ideas into reality? Get in touch with our global team of experts 
            and start your digital transformation journey today.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/10 shadow-dark">
              <CardHeader>
                <CardTitle className="text-3xl text-white mb-2">Start Your Project</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Full Name *</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe" 
                        className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Company</label>
                      <Input 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company" 
                        className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Email *</label>
                      <Input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com" 
                        className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Phone</label>
                      <Input 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567" 
                        className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Project Type</label>
                      <select 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full bg-background/50 border border-white/20 text-white rounded-md px-3 py-2"
                      >
                        <option value="">Select type</option>
                        <option value="web-app">Web Application</option>
                        <option value="mobile-app">Mobile Application</option>
                        <option value="ai-automation">AI Automation</option>
                        <option value="custom-software">Custom Software</option>
                        <option value="consulting">Consulting</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Budget Range</label>
                      <select 
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-background/50 border border-white/20 text-white rounded-md px-3 py-2"
                      >
                        <option value="">Select budget</option>
                        <option value="5k-15k">$5K - $15K</option>
                        <option value="15k-50k">$15K - $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k+">$100K+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Project Timeline</label>
                    <select 
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-background/50 border border-white/20 text-white rounded-md px-3 py-2"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Rush project)</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months+">6+ months</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Project Details *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements, goals, and any specific features you need..." 
                      rows={6}
                      className="bg-background/50 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-blue hover:shadow-glow transition-all duration-300 text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Project Details'}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-green-300 font-medium">
                          Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                        </span>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <X className="h-5 w-5 text-red-400" />
                        <span className="text-red-300 font-medium">
                          Sorry, there was an error sending your message. Please try again or contact us directly.
                        </span>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-blue p-3 rounded-lg flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">{info.title}</div>
                        <div className="text-blue-300 font-medium">{info.value}</div>
                        <div className="text-gray-400 text-sm">{info.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You Get */}
              <Card className="bg-gradient-blue shadow-dark">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">What You Get</CardTitle>
                  <CardDescription className="text-blue-100">
                    When you choose Dev Flink for your project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <benefit.icon className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                        <div>
                          <div className="text-white font-medium">{benefit.title}</div>
                          <div className="text-blue-100 text-sm">{benefit.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Global Offices */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Our Global Offices</h4>
                <div className="grid grid-cols-2 gap-4">
                  {offices.map((office, index) => (
                    <Card key={index} className="bg-card/20 backdrop-blur-sm border-white/10 hover:shadow-glow transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="text-white font-semibold">{office.city}</div>
                        <div className="text-blue-300 text-sm">{office.country}</div>
                        <div className="text-gray-400 text-xs mt-1">{office.timezone}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity, but most projects range from 3-12 months. We provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer: "Yes! We offer comprehensive post-launch support including maintenance, updates, monitoring, and technical assistance for all our projects."
              },
              {
                question: "Can you work with our existing team?",
                answer: "Absolutely! We excel at integrating with existing teams and can work as an extension of your development department or as independent consultants."
              },
              {
                question: "What's your pricing model?",
                answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team arrangements. Pricing depends on project scope and requirements."
              },
              {
                question: "Do you sign NDAs?",
                answer: "Yes, we're happy to sign non-disclosure agreements to protect your intellectual property and business ideas. Your data security is our priority."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-blue opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join hundreds of satisfied clients who have revolutionized their operations with our innovative solutions.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-blue hover:shadow-glow-lg transition-all duration-300 text-lg px-10 py-6 group"
          >
            Schedule Free Consultation
            <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
}