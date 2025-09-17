'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Globe,
  Heart,
  ExternalLink,
  Send
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press Kit', href: '/press' },
      { name: 'Blog', href: '/blog' }
    ],
    services: [
      { name: 'Web Development', href: '/services#web' },
      { name: 'Mobile Apps', href: '/services#mobile' },
      { name: 'AI Solutions', href: '/services#ai' },
      { name: 'Cloud Services', href: '/services#cloud' },
      { name: 'Consulting', href: '/services#consulting' }
    ],
    resources: [
      { name: 'Case Studies', href: '/portfolio' },
      { name: 'Technologies', href: '/technologies' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Support Center', href: '/support' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR Compliance', href: '/gdpr' },
      { name: 'Security', href: '/security' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/devflink', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/devflink', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/devflink', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/devflink', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/devflink', label: 'GitHub' }
  ];

  const offices = [
    { city: 'San Francisco', country: 'USA', phone: '+1 (555) 123-4567' },
    { city: 'London', country: 'UK', phone: '+44 20 7123 4567' },
    { city: 'Toronto', country: 'Canada', phone: '+1 (416) 123-4567' },
    { city: 'Sydney', country: 'Australia', phone: '+61 2 1234 5678' }
  ];

  return (
    <footer className="relative glass-card-dark border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold gradient-text-blue mb-6">
                Stay Updated with Dev Flink
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Get the latest insights on technology trends, development best practices, and exclusive updates on our projects.
              </p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-lg mx-auto">
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass-card border-white/20 text-white placeholder:text-gray-400 flex-1 py-4 px-6 text-lg rounded-xl"
                />
                <Button 
                  type="submit"
                  className="bg-gradient-blue hover:shadow-glow-lg transition-all duration-300 px-8 py-4 rounded-xl hover-lift"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-6 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <Link href="/" className="flex items-center mb-6">
                  <Image 
                    src="/DevFlink-Logo-V2.png" 
                    alt="Dev Flink Logo" 
                    width={200} 
                    height={40}
                    className="w-32 h-10 hover:scale-105 transition-transform duration-200"
                  />
              
                </Link>
                
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Empowering businesses worldwide with innovative software solutions that transcend geographical boundaries. 
                  We deliver excellence through collaboration, innovation, and unwavering commitment to quality.
                </p>
                
                <div className="flex space-x-5">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card hover:bg-gradient-blue p-4 rounded-xl transition-all duration-300 hover-lift hover:shadow-glow group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Links Sections */}
              <div>
                <h4 className="text-white font-bold text-xl mb-8">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 transform inline-block text-lg"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold text-xl mb-8">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 transform inline-block text-lg"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold text-xl mb-8">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 transform inline-block text-lg"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold text-xl mb-8">Legal</h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 transform inline-block text-lg"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Global Offices */}
            <div className="mt-20 pt-16 border-t border-white/10">
              <h4 className="text-white font-bold text-2xl mb-12 text-center gradient-text-blue">Global Offices</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {offices.map((office, index) => (
                  <div 
                    key={index}
                    className="glass-card rounded-2xl p-8 text-center hover-lift group"
                  >
                    <Globe className="h-10 w-10 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-white font-bold text-xl mb-2">{office.city}</div>
                    <div className="text-blue-300 text-base mb-3">{office.country}</div>
                    <div className="text-gray-400 text-sm">{office.phone}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-300 text-lg">
                <span>© 2025 Dev Flink. Made with</span>
                <span>for global innovation.</span>
              </div>
              
              <div className="flex items-center space-x-8 text-base text-gray-400">
                <span>🌍 Serving 25+ Countries</span>
                <span>⚡ 99.9% Uptime</span>
                <span>🔒 ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}