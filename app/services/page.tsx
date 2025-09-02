'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Smartphone, 
  Bot, 
  Search,
  CheckCircle,
  ArrowRight,
  Globe,
  Database,
  Cloud,
  Shield,
  Zap,
  Users,
  BarChart,
  Settings,
  Palette,
  Monitor
} from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mainServices = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored enterprise solutions built with cutting-edge technologies to meet your unique business requirements and scale with your growth.",
      features: ["Enterprise Architecture", "Scalable Solutions", "Legacy Modernization", "API Development"],
      technologies: ["React", "Node.js", "Python", "Java", "C#", ".NET"],
      pricing: "Starting from $15,000"
    },
    {
      icon: Smartphone,
      title: "Web & Mobile App Development",
      description: "Cross-platform applications that deliver exceptional user experiences across all devices and platforms with native performance.",
      features: ["React Native", "Progressive Web Apps", "Responsive Design", "Cross-Platform"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "PWA"],
      pricing: "Starting from $12,000"
    },
    {
      icon: Bot,
      title: "AI Automations & SaaS Products",
      description: "Intelligent automation solutions and Software-as-a-Service products that transform business operations and drive efficiency.",
      features: ["Machine Learning", "Process Automation", "Cloud Integration", "Data Analytics"],
      technologies: ["TensorFlow", "PyTorch", "AWS AI", "OpenAI", "Azure AI"],
      pricing: "Starting from $20,000"
    },
    {
      icon: Search,
      title: "SEO & Digital Solutions",
      description: "Comprehensive digital marketing strategies that boost your online presence and drive global growth through data-driven approaches.",
      features: ["Technical SEO", "Performance Optimization", "Analytics Integration", "Content Strategy"],
      technologies: ["Google Analytics", "Search Console", "GTM", "Lighthouse"],
      pricing: "Starting from $5,000"
    }
  ];

  const additionalServices = [
    {
      icon: Database,
      title: "Database Design & Optimization",
      description: "Robust database architecture and performance optimization"
    },
    {
      icon: Cloud,
      title: "Cloud Migration & DevOps",
      description: "Seamless cloud adoption and automated deployment pipelines"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security audits and protection systems"
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Data analytics and reporting solutions for informed decisions"
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Connect and optimize your existing software ecosystem"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that drives engagement and conversions"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, goals, and technical constraints to create a comprehensive project roadmap."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our team designs the system architecture and user experience to ensure optimal performance and usability."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing, code reviews, and quality assurance throughout the process."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment to production with ongoing maintenance, updates, and 24/7 technical support."
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
            <source src="https://videos.pexels.com/video-files/3130284/3130284-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          </video>
          <div 
            className="w-full h-full bg-cover bg-center opacity-15"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-black/60 to-cyan-900/70"></div>
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-text-glow">
            Our Services
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed mb-12 font-light">
            Comprehensive software development services designed to accelerate your digital transformation 
            journey and drive measurable business results.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-blue hover:shadow-glow-lg transition-all duration-300 text-lg px-10 py-6 group"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow hover:scale-105 transition-all duration-500 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-blue rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </CardTitle>
                      <div className="text-blue-400 font-semibold">{service.pricing}</div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="border-blue-400/30 text-blue-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Additional Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized services to complement your core development needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-card/20 backdrop-blur-sm border-white/10 hover:shadow-glow hover:scale-105 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div className="bg-gradient-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg text-white">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-blue opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Let's discuss your project requirements and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-blue hover:shadow-glow-lg transition-all duration-300 text-lg px-10 py-6"
              >
                Get Free Quote
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 text-lg px-10 py-6"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}