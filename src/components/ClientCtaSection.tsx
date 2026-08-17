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
    <section className="py-20 bg-sky-50/40 dark:bg-slate-950 relative border-t border-sky-100 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white text-center relative overflow-hidden shadow-xl">
          
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-white/20 text-white border border-white/30 mb-6">
            Let's Collaborate
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-3xl mx-auto">
            Have an Idea? <span className="text-sky-200">Let's Build It.</span>
          </h2>

          <p className="text-sky-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you're building a startup MVP, multi-tenant SaaS product, business operating system, or custom web application, let's turn your vision into a reliable digital product.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-sky-50 text-sky-700 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 rounded-xl bg-sky-900/40 hover:bg-sky-900/60 border border-white/30 text-white font-semibold text-xs sm:text-sm transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-sky-200" />
              <span>Book a Consultation</span>
            </button>
          </div>

          {/* Quick Direct Contacts Strip */}
          <div className="pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-white/90">
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="flex items-center space-x-2 hover:text-sky-200 transition-colors"
            >
              <Mail className="w-4 h-4 text-sky-200" />
              <span>{PERSONAL_INFO.contact.email}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-emerald-200 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-300" />
              <span>WhatsApp: {PERSONAL_INFO.contact.whatsappDisplay}</span>
            </a>

            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-sky-200 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4 text-sky-200" />
              <span>LinkedIn Profile</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
