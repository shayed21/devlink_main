'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone,
  Globe,
  Bot,
  Shield,
  BarChart,
  ArrowRight,
  CheckCircle,
  Zap,
  Monitor,
  Server,
  Cpu
} from 'lucide-react';
import Link from 'next/link';

export default function Technologies() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techCategories = {
    frontend: {
      title: "Frontend Technologies",
      icon: Monitor,
      description: "Modern frameworks and libraries for exceptional user interfaces",
      technologies: [
        { name: "React", level: "Expert", description: "Component-based UI library with hooks and context" },
        { name: "Next.js", level: "Expert", description: "Full-stack React framework with SSR and SSG" },
        { name: "Vue.js", level: "Advanced", description: "Progressive framework for building user interfaces" },
        { name: "Angular", level: "Advanced", description: "Platform for building mobile and desktop web applications" },
        { name: "TypeScript", level: "Expert", description: "Typed superset of JavaScript for better development" },
        { name: "Tailwind CSS", level: "Expert", description: "Utility-first CSS framework for rapid UI development" }
      ]
    },
    backend: {
      title: "Backend Technologies",
      icon: Server,
      description: "Robust server-side solutions and APIs",
      technologies: [
        { name: "Node.js", level: "Expert", description: "JavaScript runtime for scalable server applications" },
        { name: "Python", level: "Expert", description: "Versatile language for web development and AI/ML" },
        { name: "Java", level: "Advanced", description: "Enterprise-grade applications and microservices" },
        { name: "C#/.NET", level: "Advanced", description: "Microsoft's framework for enterprise applications" },
        { name: "Go", level: "Intermediate", description: "Fast, compiled language for cloud-native applications" },
        { name: "PHP", level: "Advanced", description: "Server-side scripting for web development" }
      ]
    },
    database: {
      title: "Database Technologies",
      icon: Database,
      description: "Data storage and management solutions",
      technologies: [
        { name: "PostgreSQL", level: "Expert", description: "Advanced open-source relational database" },
        { name: "MongoDB", level: "Expert", description: "NoSQL document database for flexible data models" },
        { name: "MySQL", level: "Advanced", description: "Popular relational database management system" },
        { name: "Redis", level: "Advanced", description: "In-memory data structure store for caching" },
        { name: "Elasticsearch", level: "Intermediate", description: "Search and analytics engine" },
        { name: "Firebase", level: "Advanced", description: "Google's mobile and web application platform" }
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: Cloud,
      description: "Cloud infrastructure and deployment automation",
      technologies: [
        { name: "AWS", level: "Expert", description: "Amazon Web Services cloud platform" },
        { name: "Google Cloud", level: "Advanced", description: "Google's cloud computing services" },
        { name: "Azure", level: "Advanced", description: "Microsoft's cloud computing platform" },
        { name: "Docker", level: "Expert", description: "Containerization platform for applications" },
        { name: "Kubernetes", level: "Advanced", description: "Container orchestration platform" },
        { name: "Terraform", level: "Advanced", description: "Infrastructure as code tool" }
      ]
    },
    mobile: {
      title: "Mobile Development",
      icon: Smartphone,
      description: "Cross-platform and native mobile applications",
      technologies: [
        { name: "React Native", level: "Expert", description: "Cross-platform mobile app development" },
        { name: "Flutter", level: "Advanced", description: "Google's UI toolkit for mobile apps" },
        { name: "Swift", level: "Advanced", description: "Native iOS application development" },
        { name: "Kotlin", level: "Advanced", description: "Modern language for Android development" },
        { name: "Ionic", level: "Intermediate", description: "Hybrid mobile app development framework" },
        { name: "Xamarin", level: "Intermediate", description: "Microsoft's cross-platform mobile solution" }
      ]
    },
    ai: {
      title: "AI & Machine Learning",
      icon: Bot,
      description: "Artificial intelligence and automation solutions",
      technologies: [
        { name: "TensorFlow", level: "Advanced", description: "Open-source machine learning framework" },
        { name: "PyTorch", level: "Advanced", description: "Deep learning framework for research and production" },
        { name: "OpenAI API", level: "Expert", description: "GPT models and AI-powered applications" },
        { name: "Langchain", level: "Advanced", description: "Framework for developing LLM applications" },
        { name: "Hugging Face", level: "Advanced", description: "Platform for machine learning models" },
        { name: "Computer Vision", level: "Intermediate", description: "Image and video analysis solutions" }
      ]
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Advanced': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-white pt-20">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-black/40 to-blue-900/50"></div>
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-text-glow">
            Technologies We Master
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed font-light">
            Our expertise spans across the latest technologies and frameworks to deliver cutting-edge solutions 
            that keep you ahead of the competition.
          </p>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(techCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeCategory === key 
                    ? 'bg-gradient-blue text-white shadow-glow' 
                    : 'bg-card/20 text-gray-300 hover:bg-card/40'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span className="font-medium">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                {techCategories[activeCategory as keyof typeof techCategories].title}
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {techCategories[activeCategory as keyof typeof techCategories].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCategories[activeCategory as keyof typeof techCategories].technologies.map((tech, index) => (
                <Card key={index} className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow hover:scale-105 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors">
                        {tech.name}
                      </CardTitle>
                      <Badge className={getLevelColor(tech.level)}>
                        {tech.level}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300">
                      {tech.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Visualization */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Full-Stack Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end development capabilities across the entire technology stack.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <Monitor className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-xl text-white">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {["React/Next.js", "Vue.js/Nuxt.js", "Angular", "TypeScript", "Tailwind CSS", "Three.js"].map((tech, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <Server className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-xl text-white">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {["Node.js/Express", "Python/Django", "Java/Spring", "C#/.NET", "GraphQL", "REST APIs"].map((tech, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur-sm border-white/10 hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <Cloud className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-xl text-white">Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {["AWS/Azure/GCP", "Docker/Kubernetes", "PostgreSQL/MongoDB", "Redis/ElasticSearch", "CI/CD Pipelines", "Microservices"].map((tech, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Ready to leverage our technical expertise for your next project?
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