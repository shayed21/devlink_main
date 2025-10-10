'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink,
  Github,
  ArrowRight,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Globe,
  Smartphone,
  Bot,
  ShoppingCart,
  Heart,
  DollarSign,
  BarChart,
  Shield,
  Zap,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioItems = [
    {
      title: "GlobalMart E-commerce Platform",
      description: "Multi-region marketplace with AI-powered recommendations, real-time inventory management, and advanced analytics dashboard serving 100K+ users daily.",
      longDescription: "A comprehensive e-commerce solution featuring multi-vendor support, advanced search algorithms, personalized product recommendations using machine learning, integrated payment processing, and real-time analytics. The platform handles millions of transactions monthly across 15 countries.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Redis", "Stripe"],
      category: "E-commerce",
      icon: ShoppingCart,
      metrics: {
        users: "100K+",
        revenue: "$2M+",
        countries: "15",
        uptime: "99.9%"
      },
      features: ["AI Recommendations", "Multi-vendor Support", "Real-time Analytics", "Payment Processing"],
      timeline: "8 months",
      team: "12 developers"
    },
    {
      title: "MediCare Pro Management System",
      description: "HIPAA-compliant patient management platform with telemedicine features, electronic health records, and integrated billing system for healthcare providers.",
      longDescription: "A comprehensive healthcare management solution featuring patient portal, appointment scheduling, telemedicine consultations, electronic health records, prescription management, and integrated billing. Serves 50+ healthcare facilities with 24/7 uptime.",
      tech: ["React", "Express", "MongoDB", "WebRTC", "Socket.io", "AWS"],
      category: "Healthcare",
      icon: Heart,
      metrics: {
        facilities: "50+",
        patients: "25K+",
        consultations: "10K+",
        satisfaction: "96%"
      },
      features: ["Telemedicine", "EHR Integration", "HIPAA Compliance", "Billing System"],
      timeline: "12 months",
      team: "15 developers"
    },
    {
      title: "TradePro Financial Platform",
      description: "Real-time trading platform with advanced analytics, portfolio management, risk assessment tools, and institutional-grade security features.",
      longDescription: "A sophisticated financial trading platform offering real-time market data, advanced charting tools, algorithmic trading capabilities, portfolio optimization, and comprehensive risk management. Processes millions of trades daily with microsecond latency.",
      tech: ["React", "WebSocket", "Redis", "Microservices", "Python", "PostgreSQL"],
      category: "Finance",
      icon: DollarSign,
      metrics: {
        trades: "1M+",
        volume: "$500M+",
        latency: "<1ms",
        accuracy: "99.99%"
      },
      features: ["Real-time Trading", "Risk Management", "Portfolio Analytics", "Algorithmic Trading"],
      timeline: "10 months",
      team: "18 developers"
    },
    {
      title: "IntelliCRM AI Platform",
      description: "Customer relationship management system with predictive analytics, automated lead scoring, and intelligent customer insights powered by machine learning.",
      longDescription: "An AI-powered CRM platform that revolutionizes customer relationship management through predictive analytics, automated workflows, intelligent lead scoring, and personalized customer journey mapping. Increases sales conversion rates by 40% on average.",
      tech: ["Vue.js", "Python", "TensorFlow", "GCP", "BigQuery", "Elasticsearch"],
      category: "AI/ML",
      icon: Bot,
      metrics: {
        companies: "200+",
        leads: "500K+",
        conversion: "+40%",
        automation: "80%"
      },
      features: ["Predictive Analytics", "Lead Scoring", "Workflow Automation", "Customer Insights"],
      timeline: "14 months",
      team: "20 developers"
    },
    {
      title: "EduTech Learning Platform",
      description: "Comprehensive online learning management system with interactive courses, progress tracking, and AI-powered personalized learning paths.",
      longDescription: "A modern learning management system featuring interactive video courses, real-time collaboration tools, automated assessment, progress analytics, and AI-driven personalized learning recommendations. Serves educational institutions and corporate training programs.",
      tech: ["Next.js", "Node.js", "MongoDB", "WebRTC", "AWS", "OpenAI"],
      category: "Education",
      icon: Globe,
      metrics: {
        students: "50K+",
        courses: "1K+",
        completion: "85%",
        satisfaction: "94%"
      },
      features: ["Interactive Courses", "Progress Tracking", "AI Tutoring", "Collaboration Tools"],
      timeline: "9 months",
      team: "14 developers"
    },
    {
      title: "SmartCity IoT Dashboard",
      description: "Real-time city management dashboard integrating IoT sensors, traffic optimization, energy management, and citizen services portal.",
      longDescription: "An intelligent city management platform that integrates thousands of IoT sensors to monitor traffic, air quality, energy consumption, and public services. Features predictive maintenance, automated alerts, and citizen engagement tools.",
      tech: ["React", "Python", "InfluxDB", "Kubernetes", "MQTT", "Grafana"],
      category: "IoT",
      icon: BarChart,
      metrics: {
        sensors: "10K+",
        data_points: "1B+",
        efficiency: "+30%",
        response: "<5min"
      },
      features: ["IoT Integration", "Real-time Monitoring", "Predictive Analytics", "Citizen Portal"],
      timeline: "16 months",
      team: "25 developers"
    }
  ];

  const categories = ['all', 'E-commerce', 'Healthcare', 'Finance', 'AI/ML', 'Education', 'IoT'];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
            <source src="https://videos.pexels.com/video-files/3191836/3191836-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          </video>
          <div 
            className="w-full h-full bg-cover bg-center opacity-15"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-black/50 to-purple-900/60"></div>
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-text-glow">
            Our Portfolio
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed font-light">
            Showcasing our expertise through successful projects that have transformed businesses globally. 
            Each solution demonstrates our commitment to excellence and innovation.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-gradient-blue text-white shadow-glow' 
                    : 'bg-card/20 text-gray-300 hover:bg-card/40'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProjects.map((item, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow hover:scale-105 transition-all duration-500 group overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-blue rounded-lg p-2">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {item.category}
                      </Badge>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  
                  <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors mb-3">
                    {item.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-300 text-base leading-relaxed mb-6">
                    {item.longDescription}
                  </CardDescription>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="bg-background/30 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-blue-400" />
                      <span className="text-gray-300">{item.timeline}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-cyan-400" />
                      <span className="text-gray-300">{item.team}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="border-gray-600 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button 
                      size="sm" 
                      className="bg-gradient-blue hover:shadow-glow transition-all duration-300 flex-1"
                    >
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real clients who trusted us with their digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "300%",
                label: "Revenue Increase",
                description: "E-commerce client saw 300% revenue growth after platform optimization",
                icon: TrendingUp
              },
              {
                metric: "50%",
                label: "Cost Reduction",
                description: "Healthcare client reduced operational costs through automation",
                icon: DollarSign
              },
              {
                metric: "99.9%",
                label: "Uptime Achieved",
                description: "Financial platform maintains enterprise-grade reliability",
                icon: Shield
              }
            ].map((story, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow transition-all duration-300 text-center">
                <CardHeader>
                  <story.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{story.metric}</div>
                  <CardTitle className="text-lg text-blue-300">{story.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-blue opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join our portfolio of successful clients and transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-blue hover:shadow-glow-lg transition-all duration-300 text-lg px-10 py-6"
              >
                Start Your Project
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 text-lg px-10 py-6"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}