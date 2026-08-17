'use client';

import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Mail, Calendar } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppFloat';
import { LinkedInIcon } from './SocialIcons';

interface ClientCtaSectionProps {
  onOpenConsultation: () => void;
}

export default function ClientCtaSection({ onOpenConsultation }: ClientCtaSectionProps) {
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.contact.whatsapp}?text=${encodeURIComponent(
    'Hi Hariom, I have an idea for a project and would like to build it.'
  )}`;

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-blue-900/50 via-slate-900 to-indigo-900/40 border border-blue-500/30 text-center relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-6">
            Let's Collaborate
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-3xl mx-auto">
            Have an Idea? <span className="text-blue-400">Let's Build It.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you're building a startup MVP, multi-tenant SaaS product, business operating system, or custom web application, let's turn your vision into a reliable digital product.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-xl shadow-blue-600/30 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-xs transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>Book a Consultation</span>
            </button>
          </div>

          {/* Quick Direct Contacts Strip */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>{PERSONAL_INFO.contact.email}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-emerald-400 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: {PERSONAL_INFO.contact.whatsappDisplay}</span>
            </a>

            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4 text-blue-400" />
              <span>LinkedIn Profile</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
