'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
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
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative border-t border-sky-100 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-blue-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's Build <span className="text-sky-600 dark:text-blue-400">Something Great</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Have a project in mind, need technical consultation, or looking for an experienced senior Laravel developer? Send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form Container */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/80 border border-sky-200/80 dark:border-slate-800 shadow-lg">
              
              {status === 'success' && successResponse ? (
                <div className="p-8 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Project Request Received!</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
                    {successResponse.message}
                  </p>
                  <div className="inline-block px-4 py-2 rounded-xl bg-sky-50 dark:bg-slate-950 border border-sky-200 dark:border-slate-800 text-xs font-mono text-sky-700 dark:text-blue-400 font-semibold">
                    Reference ID: <strong className="text-slate-900 dark:text-white">{successResponse.referenceId}</strong>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Hariom Birla"
                        className="w-full px-4 py-3 rounded-xl bg-sky-50/50 dark:bg-slate-950 border border-sky-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="birlahariom11@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-sky-50/50 dark:bg-slate-950 border border-sky-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 95753 70343"
                        className="w-full px-4 py-3 rounded-xl bg-sky-50/50 dark:bg-slate-950 border border-sky-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corp / Startup"
                        className="w-full px-4 py-3 rounded-xl bg-sky-50/50 dark:bg-slate-950 border border-sky-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Project Category
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-sky-50/50 dark:bg-slate-950 border border-sky-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-sky-500 transition-all"
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
                      <label htmlFor="budget" className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-sky-50/50 dark:bg-slate-950 border border-sky-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-sky-500 transition-all"
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
                    <label htmlFor="message" className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2">
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
                      className="w-full px-4 py-3 rounded-xl bg-sky-50/50 dark:bg-slate-950 border border-sky-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md shadow-sky-600/25 flex items-center justify-center space-x-2 cursor-pointer transition-all disabled:opacity-50"
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
            
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-sky-200/80 dark:border-slate-800 shadow-lg space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Direct Contact Information</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Prefer direct communication? Reach out directly via Email, WhatsApp, or LinkedIn.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="flex items-center space-x-4 p-3.5 rounded-xl bg-sky-50/60 dark:bg-slate-950 border border-sky-200/80 dark:border-slate-800/80 hover:border-sky-400 text-slate-800 dark:text-slate-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-600/10 border border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-blue-400 group-hover:bg-sky-600 group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-semibold text-slate-400 uppercase">Direct Email</div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.contact.email}</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-3.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-500/60 text-slate-800 dark:text-slate-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase">WhatsApp Instant Chat</div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.contact.whatsappDisplay}</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center space-x-4 p-3.5 rounded-xl bg-sky-50/60 dark:bg-slate-950 border border-sky-200/80 dark:border-slate-800/80 hover:border-sky-400 text-slate-800 dark:text-slate-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-600/10 border border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-blue-400 group-hover:bg-sky-600 group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-semibold text-slate-400 uppercase">Phone Number</div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.contact.phone}</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center space-x-4 p-3.5 rounded-xl bg-sky-50/60 dark:bg-slate-950 border border-sky-200/80 dark:border-slate-800/80">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 dark:bg-slate-800 flex items-center justify-center text-sky-600 dark:text-slate-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-semibold text-slate-400 uppercase">Location</div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.contact.address}</div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-sky-100 dark:border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-3 font-semibold">Professional Profiles</div>
                <div className="flex items-center space-x-3">
                  <a
                    href={PERSONAL_INFO.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-sky-50 dark:bg-slate-950 hover:bg-sky-600 border border-sky-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-white transition-all"
                  >
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-sky-50 dark:bg-slate-950 hover:bg-slate-800 border border-sky-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-white transition-all"
                  >
                    <GitHubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:text-white transition-all"
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
