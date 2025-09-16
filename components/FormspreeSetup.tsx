'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink,
  Mail,
  Settings,
  CheckCircle,
  ArrowRight,
  Copy,
  AlertCircle
} from 'lucide-react';

export default function FormspreeSetup() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="bg-card/30 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl text-white flex items-center">
            <Mail className="h-6 w-6 mr-2 text-blue-400" />
            Set Up Form Handling with Formspree
          </CardTitle>
          <CardDescription className="text-gray-300 text-lg">
            Follow these steps to receive contact form submissions via email
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-lg font-semibold text-white mb-2">Step 1: Create Formspree Account</h3>
            <p className="text-gray-300 mb-4">
              Sign up for a free Formspree account to get your form endpoint.
            </p>
            <a 
              href="https://formspree.io/register" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button className="bg-gradient-blue hover:shadow-glow transition-all duration-300">
                Sign Up for Formspree
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-cyan-500 pl-6">
            <h3 className="text-lg font-semibold text-white mb-2">Step 2: Create New Form</h3>
            <p className="text-gray-300 mb-4">
              After signing up, create a new form and copy your form endpoint URL.
            </p>
            <div className="bg-background/50 rounded-lg p-4">
              <p className="text-gray-300 text-sm mb-2">Your endpoint will look like:</p>
              <code className="text-blue-300 bg-black/30 px-2 py-1 rounded">
                https://formspree.io/f/YOUR_FORM_ID
              </code>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-lg font-semibold text-white mb-2">Step 3: Update Your Code</h3>
            <p className="text-gray-300 mb-4">
              Replace the placeholders in your form code with your actual Formspree endpoints.
            </p>
            <div className="bg-background/50 rounded-lg p-4">
              <p className="text-gray-300 text-sm mb-2">Update these files with your Formspree form IDs:</p>
              <div className="flex items-center justify-between bg-black/30 rounded px-3 py-2">
                <code className="text-blue-300 text-sm">
                  lib/contact.ts - YOUR_CONTACT_FORM_ID
                </code>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard("lib/contact.ts - YOUR_CONTACT_FORM_ID")}
                  className="text-gray-400 hover:text-white"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between bg-black/30 rounded px-3 py-2 mt-2">
                <code className="text-blue-300 text-sm">
                  app/careers/page.tsx - YOUR_CAREERS_FORM_ID
                </code>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard("app/careers/page.tsx - YOUR_CAREERS_FORM_ID")}
                  className="text-gray-400 hover:text-white"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Alternative Options */}
          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-lg font-semibold text-white mb-2">Alternative Options</h3>
            <div className="space-y-3">
              <div className="bg-background/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">EmailJS (Client-side)</h4>
                <p className="text-gray-300 text-sm mb-2">Send emails directly from the frontend without a backend.</p>
                <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                  Learn more about EmailJS →
                </a>
              </div>
              
              <div className="bg-background/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Netlify Forms</h4>
                <p className="text-gray-300 text-sm mb-2">If deploying to Netlify, use their built-in form handling.</p>
                <a href="https://docs.netlify.com/forms/setup/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                  Netlify Forms Documentation →
                </a>
              </div>
            </div>
          </div>

          {/* Current Status */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <AlertCircle className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-300 font-medium">Current Status: Development Mode</span>
            </div>
            <p className="text-gray-300 text-sm">
              Form submissions are currently stored in your browser's local storage. 
              Set up Formspree or another service to receive submissions via email in production.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}