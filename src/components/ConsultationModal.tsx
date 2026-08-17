'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, Calendar } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { WhatsAppIcon } from './WhatsAppFloat';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ConsultationModal({ isOpen, onClose, initialService }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService || 'SaaS Platform Development',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          projectType: formData.service
        })
      });

      if (res.ok) {
        setSubmitted(true);
        try {
          confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
        } catch (e) {
          // ignore
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.contact.whatsapp}?text=${encodeURIComponent(
    `Hi Hariom, I want to discuss a project regarding ${formData.service}.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-sky-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-sky-50 dark:bg-slate-950 border border-sky-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-sky-600 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Consultation Request Sent!</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Hariom will review your requirements and reply to birlahariom11@gmail.com within 24 hours.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs cursor-pointer shadow-md"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-blue-950 text-sky-800 dark:text-blue-400 text-[11px] font-mono border border-sky-300 dark:border-blue-800/50 mb-2 font-bold">
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Free Technical Discovery</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Start Your Project</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Tell us briefly about your goals or connect immediately on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Hariom Birla"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-sky-50/50 dark:bg-slate-950 border border-sky-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="birlahariom11@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-sky-50/50 dark:bg-slate-950 border border-sky-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">Service Required</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-sky-50/50 dark:bg-slate-950 border border-sky-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-sky-500"
                >
                  <option value="Custom Web Applications">Custom Web Applications</option>
                  <option value="Laravel Development">Laravel Development</option>
                  <option value="SaaS Platform Development">SaaS Platform Development</option>
                  <option value="REST API & Microservices">REST API & Microservices</option>
                  <option value="React & Next.js Frontend">React & Next.js Frontend</option>
                  <option value="Doctor Booking Platform">Doctor Appointment Platform</option>
                  <option value="Business Automation">Business Automation</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">Message / Requirements</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe what you're building..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-sky-50/50 dark:bg-slate-950 border border-sky-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:border-sky-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md shadow-sky-600/25 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{loading ? 'Submitting...' : 'Submit Request'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-sky-100 dark:border-slate-800 text-center">
              <span className="text-[11px] text-slate-500">Or chat directly:</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full py-2.5 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-600 font-bold text-xs flex items-center justify-center space-x-2 cursor-pointer transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Open WhatsApp Chat (+91 95753 70343)</span>
              </a>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
