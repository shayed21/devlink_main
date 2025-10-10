'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Users, 
  Award, 
  Zap,
  CheckCircle,
  Target,
  Heart,
  Lightbulb,
  ArrowRight,
  Building,
  Calendar,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to democratizing access to world-class software development services by breaking down geographical barriers."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Every decision we make is guided by what's best for our clients' success and long-term growth."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give you competitive advantages."
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We work as an extension of your team, fostering transparent communication and shared ownership of success."
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to provide borderless software solutions"
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Expanded operations to serve clients across 15+ countries"
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Pioneered AI-powered development tools and automation services"
    },
    {
      year: "2024",
      title: "500+ Projects",
      description: "Reached milestone of 500+ successful project deliveries"
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      expertise: "Full-Stack Architecture, AI/ML",
      experience: "12+ years"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Engineering",
      expertise: "DevOps, Cloud Infrastructure",
      experience: "10+ years"
    },
    {
      name: "Priya Patel",
      role: "Lead UI/UX Designer",
      expertise: "Product Design, User Research",
      experience: "8+ years"
    },
    {
      name: "James Wilson",
      role: "Project Director",
      expertise: "Agile Management, Client Relations",
      experience: "15+ years"
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
            <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          </video>
          <div 
            className="w-full h-full bg-cover bg-center opacity-15"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-black/50 to-cyan-900/60"></div>
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-text-glow">
              About Dev Flink
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed font-light">
              We are a global software development company committed to delivering world-class solutions 
              that drive innovation and growth for businesses across all industries and geographical boundaries.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "25+", label: "Countries Served" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "6+", label: "Years Experience" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`text-center bg-card/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:shadow-glow transition-all duration-500 delay-${index * 100}`}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                To democratize access to world-class software development services by breaking down 
                geographical barriers and delivering innovative solutions that empower businesses to 
                thrive in the digital age.
              </p>
              <div className="space-y-4">
                {[
                  "Deliver exceptional software solutions globally",
                  "Foster innovation through cutting-edge technology",
                  "Build lasting partnerships with our clients",
                  "Maintain the highest standards of quality and security"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-blue rounded-3xl p-10 shadow-dark transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  To be the world's most trusted partner for digital transformation, 
                  enabling businesses of all sizes to leverage technology for sustainable growth and innovation.
                </p>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">2030 Goal</div>
                  <div className="text-blue-100">Serve 10,000+ businesses across 50+ countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow hover:scale-105 transition-all duration-500 group">
                <CardHeader className="text-center">
                  <div className="bg-gradient-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300">
              From startup to global software development leader.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-blue"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <Card className="bg-card/40 backdrop-blur-sm border-white/10 hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl text-blue-400">{item.year}</CardTitle>
                      <CardDescription className="text-lg text-white font-semibold">
                        {item.title}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced professionals leading innovation and excellence in software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow hover:scale-105 transition-all duration-500 group">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-blue rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">{member.name}</CardTitle>
                  <CardDescription className="text-blue-300 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-sm mb-2">{member.expertise}</p>
                  <p className="text-blue-400 text-sm font-semibold">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-blue hover:shadow-glow-lg transition-all duration-300 text-lg px-10 py-6 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}