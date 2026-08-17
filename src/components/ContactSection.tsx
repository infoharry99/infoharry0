'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppFloat';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'SaaS Platform',
    budget: '$3,000 - $5,000',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successResponse, setSuccessResponse] = useState<{ message: string; referenceId: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setSuccessResponse({
          message: data.message,
          referenceId: data.referenceId
        });
        
        // Trigger subtle celebration confetti
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 }
          });
        } catch (e) {
          // ignore
        }

        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: 'SaaS Platform',
          budget: '$3,000 - $5,000',
          message: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error occurred. Please test again or reach out via WhatsApp/Email.');
    }
  };

  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.contact.whatsapp}?text=${encodeURIComponent(
    'Hi Hariom, I submitted a request on your website and would like to connect.'
  )}`;

  return (
    <section id="contact" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Let's Build <span className="text-blue-400">Something Great</span>
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Have a project in mind, need technical consultation, or looking for an experienced senior Laravel developer? Send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form Container */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl">
              
              {status === 'success' && successResponse ? (
                <div className="p-8 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Project Request Received!</h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                    {successResponse.message}
                  </p>
                  <div className="inline-block px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-blue-400">
                    Reference ID: <strong className="text-white">{successResponse.referenceId}</strong>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corp / Startup"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                        Project Category
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500 transition-all"
                      >
                        <option value="SaaS Platform">SaaS Platform Development</option>
                        <option value="Custom Web App">Custom Web Application</option>
                        <option value="Laravel Development">Laravel System / API</option>
                        <option value="Doctor Booking / Healthcare">Healthcare Booking System</option>
                        <option value="E-Commerce Storefront">E-Commerce Storefront</option>
                        <option value="Recruitment ATS">ATS / Recruitment Portal</option>
                        <option value="Business Automation">Workflow Automation</option>
                        <option value="Consulting / Audit">Code Audit & Consulting</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500 transition-all"
                      >
                        <option value="< $2,000">Below $2,000</option>
                        <option value="$2,000 - $5,000">$2,000 – $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 – $10,000</option>
                        <option value="$10,000+">$10,000+ Enterprise</option>
                        <option value="Hourly / Retainer">Hourly / Monthly Retainer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                      Project Details & Goals *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your requirements, key features needed, target timeline, or existing technical setup..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-xl shadow-blue-600/25 flex items-center justify-center space-x-2 cursor-pointer transition-all disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <span>Send Project Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Contact Information</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prefer direct communication? Reach out directly via Email, WhatsApp, or LinkedIn.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-blue-500/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</div>
                    <div className="text-xs font-bold text-white">{PERSONAL_INFO.contact.email}</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-500/60 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-emerald-400 uppercase">WhatsApp Instant Chat</div>
                    <div className="text-xs font-bold text-white">{PERSONAL_INFO.contact.whatsappDisplay}</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-blue-500/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Phone Number</div>
                    <div className="text-xs font-bold text-white">{PERSONAL_INFO.contact.phone}</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                    <div className="text-xs font-bold text-white">{PERSONAL_INFO.contact.address}</div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-3">Professional Profiles</div>
                <div className="flex items-center space-x-3">
                  <a
                    href={PERSONAL_INFO.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950 hover:bg-blue-600 border border-slate-800 text-slate-300 hover:text-white transition-all"
                  >
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all"
                  >
                    <GitHubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 text-emerald-400 hover:text-white transition-all"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
