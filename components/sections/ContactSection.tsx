"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Send, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Name is required' });
      return false;
    }
    
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Email is required' });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email' });
      return false;
    }
    
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Message is required' });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus({ type: 'loading', message: 'Sending message...' });
    
    try {
      // Send to backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
        // Reset form after success
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
      
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    }
  };
  return (
    <section id="contact" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-black dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
          <p className="mt-2 text-lg font-medium text-black dark:text-white">
            {personalInfo.socialLinks.email}
          </p>
          
          {/* Status Message */}
          {status.message && (
            <div className={`mt-4 p-3 rounded-md flex items-center gap-2 ${
              status.type === 'success' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
              status.type === 'error' ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' :
              'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
            }`}>
              {status.type === 'success' && <CheckCircle className="h-4 w-4" />}
              {status.type === 'error' && <AlertCircle className="h-4 w-4" />}
              {status.type === 'loading' && <Send className="h-4 w-4 animate-pulse" />}
              <span className="text-sm">{status.message}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            <Input 
              type="text" 
              name="name"
              placeholder="Name" 
              value={formData.name}
              onChange={handleInputChange}
              className="bg-white dark:bg-black" 
              disabled={status.type === 'loading'}
            />
            <Input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={formData.email}
              onChange={handleInputChange}
              className="bg-white dark:bg-black" 
              disabled={status.type === 'loading'}
            />
            <Textarea 
              name="message"
              placeholder="Message" 
              value={formData.message}
              onChange={handleInputChange}
              className="bg-white dark:bg-black min-h-[120px]" 
              disabled={status.type === 'loading'}
            />
            <Button 
              type="submit" 
              disabled={status.type === 'loading'}
              className="disabled:opacity-50"
            >
              {status.type === 'loading' ? (
                <>
                  <Send className="mr-2 h-4 w-4 animate-pulse" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
          <div className="mt-8 flex justify-center gap-6">
            <a href={`mailto:${personalInfo.socialLinks.email}`} aria-label="Email">
              <Mail className="h-6 w-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white" />
            </a>
            <a href={personalInfo.socialLinks.linkedin} aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white" />
            </a>
            <a href={personalInfo.socialLinks.github} aria-label="GitHub">
              <Github className="h-6 w-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}