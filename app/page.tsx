'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CircleCheck as CheckCircle, Users, Award, Zap, Globe, Code, Smartphone, Bot, Search, TrendingUp, Shield, Clock, Star, Rocket, Target, Database, Cloud, Monitor, Heart, ExternalLink, Play, Quote, Building, DollarSign, ChartBar as BarChart, Lightbulb, Headphones, FileText, Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion } from "framer-motion";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Award },
    { number: "25+", label: "Countries Served", icon: Globe },
    { number: "98%", label: "Client Satisfaction", icon: Users },
    { number: "50+", label: "Expert Developers", icon: Code }
  ];

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Enterprise-grade applications built with cutting-edge technologies and scalable architecture.",
      features: ["Scalable Architecture", "API Development", "Legacy Modernization", "Microservices"],
      price: "From $15K",
      popular: false
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile solutions for iOS and Android with native performance.",
      features: ["React Native", "Flutter", "Progressive Web Apps", "App Store Optimization"],
      price: "From $12K",
      popular: true
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Intelligent automation and machine learning solutions that transform business operations.",
      features: ["Process Automation", "ML Models", "Data Analytics", "Chatbots"],
      price: "From $20K",
      popular: false
    },
    {
      icon: Search,
      title: "Digital Marketing & SEO",
      description: "SEO optimization and digital growth strategies that drive measurable results.",
      features: ["Technical SEO", "Performance Optimization", "Analytics", "Content Strategy"],
      price: "From $5K",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "Dev Flink transformed our entire digital infrastructure. Their expertise and dedication exceeded all expectations. The ROI was incredible.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      company: "Global Ventures",
      role: "CEO",
      content: "Outstanding results! They delivered our project on time and within budget. The team's communication and technical skills are world-class.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emma Rodriguez",
      company: "StartupXYZ",
      role: "Founder",
      content: "The team's technical skills and communication were exceptional. They truly understand modern business needs and delivered beyond our expectations.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols and compliance standards to protect your data and users."
    },
    {
      icon: Clock,
      title: "24/7 Global Support",
      description: "Round-the-clock assistance across all time zones with dedicated support teams."
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Built to grow with your business from startup to enterprise scale."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering measurable business outcomes and ROI."
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Agile development process with rapid prototyping and iterative delivery."
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Personal project manager and dedicated development team for your project."
    }
  ];

  const technologies = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      bg: "from-[#61dafb]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#61dafb55]",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      bg: "from-[#fff]/10 to-[#111]/80",
      shadow: "shadow-[0_0_30px_0_#fff2]",
    },
    {
      name: "Flutter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      bg: "from-[#02569B]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#02569b55]",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      bg: "from-[#8cc84b]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#8cc84b55]",
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      bg: "from-[#ffcb2b]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#ffcb2b55]",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      bg: "from-[#4db33d]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#4db33d55]",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      bg: "from-[#00758f]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#00758f55]",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      bg: "from-[#3776ab]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#3776ab55]",
    },
    {
      name: "TensorFlow",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      bg: "from-[#ff6f00]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#ff6f0055]",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      bg: "from-[#2496ed]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#2496ed55]",
    },
    {
      name: "GraphQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      bg: "from-[#e535ab]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#e535ab55]",
    },
    {
      name: "FastAPI",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      bg: "from-[#009688]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#00968855]",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      bg: "from-[#326ce5]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#326ce555]",
    },
    
    {
      name: "Postman",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      bg: "from-[#ff6c37]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#ff6c3755]",
    },
    {
      name: "TestCafe",
      logo: "https://raw.githubusercontent.com/DevExpress/testcafe/master/media/testcafe-logo.svg",
      bg: "from-[#2d9cdb]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#2d9cdb55]",
    },
    {
      name: "Jira",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
      bg: "from-[#2684ff]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#2684ff55]",
    },
    {
      name: "Jenkins",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      bg: "from-[#d33833]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#d3383355]",
    },
    {
      name: "Selenium",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
      bg: "from-[#43b02a]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#43b02a55]",
    },
    {
      name: "GitLab CI/CD",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      bg: "from-[#fc6d26]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#fc6d2655]",
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      bg: "from-[#777bb4]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#777bb455]",
    },
    {
      name: "PyTorch",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      bg: "from-[#ee4c2c]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#ee4c2c55]",
    },
    {
      name: "Keras",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
      bg: "from-[#d00000]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#d0000055]",
    },
    {
      name: "Grafana",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
      bg: "from-[#f46800]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#f4680055]",
    },
    {
      name: "Terraform",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      bg: "from-[#623ce4]/30 to-[#20232a]/80",
      shadow: "shadow-[0_0_30px_0_#623ce455]",
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform",
      company: "GlobalMart",
      result: "300% Revenue Increase",
      description: "Transformed their online presence with AI-powered recommendations",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tech: ["Next.js", "Node.js", "AWS"]
    },
    {
      title: "Healthcare Platform",
      company: "MediCare Pro",
      result: "50% Cost Reduction",
      description: "HIPAA-compliant patient management with telemedicine features",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tech: ["React", "Python", "MongoDB"]
    },
    {
      title: "Financial Platform",
      company: "TradePro",
      result: "99.9% Uptime",
      description: "Real-time trading platform with advanced analytics",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tech: ["React", "WebSocket", "Redis"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your requirements and create a comprehensive project roadmap.",
      icon: Lightbulb
    },
    {
      step: "02",
      title: "Design",
      description: "Our team designs the architecture and user experience for optimal results.",
      icon: Monitor
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with continuous testing and quality assurance.",
      icon: Code
    },
    {
      step: "04",
      title: "Launch",
      description: "Seamless deployment with ongoing support and maintenance.",
      icon: Rocket
    }
  ];

  // Animation variants for framer-motion
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

  // Gradient border utility
  const gradientBorder =
    "relative before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-blue-500/40 before:via-cyan-400/30 before:to-purple-500/30 before:blur before:opacity-80 before:-z-10";

  // Use a subtle, modern card background color for all cards and stat boxes
  const cardBg = "bg-[#181f2e]"; // deep blue/gray, matches modern SaaS style
  const cardBorder = "border border-[#232b3b]";
  const cardShadow = "shadow-[0_4px_32px_0_rgba(20,30,60,0.10)]";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1020] via-[#101726] to-[#0a1020] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden px-2 md:px-0 pt-20">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 z-0">
          {/* Aurora Effect */}
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-aurora"></div>
          
          {/* Particle System */}
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Background Video */}
        <div className="absolute inset-0 z-5">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="https://videos.pexels.com/video-files/3130182/3130182-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        {/* Hero Content */}
        <motion.div
          className="w-full max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 text-center relative z-20"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-block glass-card rounded-full px-8 py-4 mb-6 shadow-glow animate-neon-glow"
            variants={fadeInUp}
            custom={0}
          >
            <span className="gradient-text-blue font-bold text-sm md:text-base tracking-widest uppercase">
              Transforming Ideas into Digital Reality
            </span>
          </motion.div>
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-[#2992FD] to-[#A9D0FD] bg-clip-text text-transparent leading-tight"
            variants={fadeInUp}
            custom={1}
          >
            We Build <span className="bg-gradient-to-r from-[#A9D0FD] to-[#2992FD] bg-clip-text text-transparent">Future-Ready</span> Software Without Borders
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl font-medium mb-8 text-gray-100 tracking-wide max-w-4xl mx-auto"
            variants={fadeInUp}
            custom={2}
          >
            Global software development company delivering <span className="bg-gradient-to-r from-[#2992FD] to-[#A9D0FD] bg-clip-text text-transparent font-semibold">innovative digital solutions</span> worldwide.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl font-light mb-10 text-gray-200 tracking-wide leading-relaxed max-w-4xl mx-auto"
            variants={fadeInUp}
            custom={3}
          >
            At Dev Flink, we design and develop world-class digital solutions that empower businesses to grow beyond limits. From custom software and mobile apps to AI-powered automation, SaaS platforms, and web development, we bring your vision to life with <span className="bg-gradient-to-r from-[#A9D0FD] to-[#2992FD] bg-clip-text text-transparent font-semibold">secure, scalable, and innovative</span> technology.
          </motion.p>
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            variants={fadeInUp}
            custom={4}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-blue hover:shadow-glow-lg shadow-glow px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover-lift animate-gradient-shift"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="glass-card border-2 border-blue-400/60 text-blue-200 hover:bg-blue-500/20 text-xl px-12 py-6 rounded-2xl font-bold hover-lift"
              >
                View Our Work
              </Button>
            </Link>
          </motion.div>
          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            variants={fadeInUp}
            custom={5}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-2xl p-8 flex flex-col items-center hover-lift group"
                whileHover={{ scale: 1.08 }}
                variants={fadeInUp}
                custom={6 + index}
              >
                <span className="mb-2">
                  <stat.icon className="h-10 w-10 text-[#2992FD] group-hover:text-[#A9D0FD] transition-colors duration-300" />
                </span>
                <div className="text-3xl font-black bg-gradient-to-r from-[#2992FD] to-[#A9D0FD] bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-gray-100 font-semibold text-sm text-center">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
          animate={{ y: [0, 16, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-8 h-14 border-2 border-blue-400 rounded-full flex justify-center items-start glass-card">
            <div className="w-1.5 h-4 bg-gradient-blue rounded-full mt-3 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive software development services designed to accelerate your digital transformation journey.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`relative group rounded-2xl ${cardBg} ${cardBorder} ${cardShadow} p-8 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={index}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-blue text-white px-4 py-1 shadow-lg">Most Popular</Badge>
                  </div>
                )}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-blue rounded-xl p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white group-hover:text-[#2992FD] transition-colors">
                      {service.title}
                    </CardTitle>
                    <div className="text-[#2992FD] font-bold text-lg">{service.price}</div>
                  </div>
                </div>
                <CardDescription className="text-gray-300 text-base leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="flex items-center bg-white/10 text-[#A9D0FD] px-3 py-1 rounded-full text-xs font-medium">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-1" />
                      {feature}
                    </span>
                  ))}
                </div>
                <Link href="/services">
                  <Button className="w-full bg-gradient-blue hover:shadow-glow transition-all duration-300 group mt-2">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 w-96 h-96 bg-gradient-to-br from-blue-900/30 to-transparent blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-cyan-900/30 to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Why Choose Dev Flink?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical excellence with business acumen to deliver solutions that drive real results.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl ${cardBg} ${cardBorder} ${cardShadow} p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={index}
              >
                <div className="bg-gradient-blue rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                  <feature.icon className="h-10 w-10 text-[#FEFEFE]" />
                </div>
                <CardTitle className="text-xl text-white mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real clients who trusted us with their digital transformation.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-10">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl ${cardBg} ${cardBorder} ${cardShadow} overflow-hidden transition-all duration-300 hover:scale-105`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={index}
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${study.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-2xl font-bold text-white">{study.result}</div>
                  </div>
                </div>
                <div className="p-6">
                  <CardTitle className="text-lg text-white">{study.title}</CardTitle>
                  <CardDescription className="text-blue-300 font-medium">{study.company}</CardDescription>
                  <p className="text-gray-300 my-4">{study.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="border-[#2992FD]/30 text-[#A9D0FD]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 bg-clip-text text-transparent">
              Technologies We Use
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              We leverage the latest technologies to build modern, scalable, and efficient solutions.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                className={`
                  relative flex flex-col items-center justify-center rounded-xl
                  ${cardBg} ${cardBorder} ${cardShadow}
                  px-2 py-4 md:px-3 md:py-5
                  transition-all duration-300
                  hover:scale-110 hover:shadow-xl
                  group
                  overflow-hidden
                `}
                whileHover={{ scale: 1.13 }}
                variants={fadeInUp}
                custom={idx}
                style={{ minHeight: 90, maxWidth: 100 }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-cyan-400/20 blur-2xl rounded-full pointer-events-none group-hover:opacity-80 opacity-60 transition-opacity"></div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#A9D0FD]/20 blur-2xl rounded-full pointer-events-none group-hover:opacity-80 opacity-60 transition-opacity"></div>
                <img
                  src={tech.logo}
                  alt={tech.name + " logo"}
                  className="h-7 md:h-9 w-auto mb-2 drop-shadow-[0_2px_8px_rgba(41,146,253,0.2)]"
                  style={{ filter: tech.name === "Next.js" ? "invert(1)" : undefined }}
                />
                <span className="text-white font-medium text-xs md:text-sm text-center drop-shadow-[0_2px_8px_rgba(169,208,253,0.15)]">
                  {tech.name}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2992FD]/60 via-[#A9D0FD]/40 to-[#2992FD]/60 blur-sm opacity-80 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 w-96 h-96 bg-gradient-to-br from-blue-900/30 to-transparent blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-cyan-900/30 to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl ${cardBg} ${cardBorder} ${cardShadow} p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={index}
              >
                <div className="bg-gradient-blue rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                  <step.icon className="h-8 w-8 text-[#FEFEFE]" />
                </div>
                <div className="text-3xl font-bold text-[#2992FD] mb-2">{step.step}</div>
                <CardTitle className="text-lg text-white">{step.title}</CardTitle>
                <CardDescription className="text-gray-300 mt-2">{step.description}</CardDescription>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Trusted by businesses worldwide for exceptional software development.
            </p>
          </motion.div>
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className={`${cardBg} ${cardBorder} ${cardShadow} max-w-4xl mx-auto`}>
              <CardContent className="p-12">
                <div className="text-center">
                  <Quote className="h-12 w-12 text-blue-400 mx-auto mb-6" />
                  <motion.p
                    className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed italic"
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    "{testimonials[currentTestimonial].content}"
                  </motion.p>
                  <div className="flex items-center justify-center space-x-4">
                    <div
                      className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-blue-400"
                      style={{ backgroundImage: `url(${testimonials[currentTestimonial].image})` }}
                    ></div>
                    <div className="text-left">
                      <div className="text-white font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                      <div className="text-[#A9D0FD]">{testimonials[currentTestimonial].role}</div>
                      <div className="text-gray-400 text-sm">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-2 mt-8">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial ? 'bg-[#2992FD]' : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                        aria-label={`Show testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Global Reach, Local Expertise
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                With offices across four continents and a diverse team of experts, we provide 
                24/7 support and local insights while maintaining global standards of excellence.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Globe, label: "25+ Countries", value: "Global Presence" },
                  { icon: Users, label: "50+ Experts", value: "Diverse Team" },
                  { icon: Clock, label: "24/7 Support", value: "Always Available" },
                  { icon: Shield, label: "ISO Certified", value: "Quality Assured" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="h-8 w-8 text-[#2992FD]" />
                    <div>
                      <div className="text-white font-semibold">{item.label}</div>
                      <div className="text-gray-400 text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-gradient-blue hover:shadow-glow transition-all duration-300 group"
                >
                  Learn About Our Team
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className={`${cardBg} ${cardBorder} ${cardShadow} rounded-3xl p-8`}>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Global Offices</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { city: "San Francisco", country: "USA", flag: "🇺🇸" },
                    { city: "London", country: "UK", flag: "🇬🇧" },
                    { city: "Toronto", country: "Canada", flag: "🇨🇦" },
                    { city: "Sydney", country: "Australia", flag: "🇦🇺" }
                  ].map((office, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                      <div className="text-2xl mb-2">{office.flag}</div>
                      <div className="text-white font-semibold">{office.city}</div>
                      <div className="text-[#A9D0FD] text-sm">{office.country}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-blue opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-10 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
          >
            Join hundreds of satisfied clients who have revolutionized their operations with our innovative solutions.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={2}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-blue hover:shadow-glow-lg transition-all duration-300 text-xl px-12 py-6 group"
              >
                Get Free Consultation
                <Calendar className="ml-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-xl px-12 py-6"
              >
                View Portfolio
                <ExternalLink className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 text-gray-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={3}
          >
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>500+ Happy Clients</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`${cardBg} py-20 border-b border-white/10 relative overflow-hidden`}>
        <div className="absolute left-0 top-0 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl pointer-events-none"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-transparent blur-3xl pointer-events-none"></div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Stay Updated with Dev Flink
            </h3>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              Get the latest insights on technology trends, development best practices, and exclusive updates on our projects.
            </p>
          </motion.div>
          <motion.form
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 rounded-lg bg-[#232b3b] border border-[#232b3b] text-white placeholder:text-gray-400 px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 shadow-sm"
              style={{ minWidth: 0 }}
            />
            <button
              type="submit"
              className="flex items-center justify-center px-6 py-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg shadow-lg transition-all duration-200"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}