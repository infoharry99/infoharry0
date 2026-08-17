'use client';

import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppFloat';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.contact.whatsapp}?text=${encodeURIComponent(
    'Hi Hariom, I saw your portfolio footer.'
  )}`;

  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-sky-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-sky-100 dark:border-slate-800/80">
          
          {/* Left Column: Brand */}
          <div className="md:col-span-4 flex flex-col space-y-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center font-bold text-white text-sm shadow-xs">
                HB
              </div>
              <span className="font-bold text-base text-slate-900 dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs font-semibold text-sky-700 dark:text-sky-400">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-[11px] text-slate-500 max-w-sm">
              {PERSONAL_INFO.shortPositioning}
            </p>
          </div>

          {/* Center Column: Navigation */}
          <div className="md:col-span-4 flex flex-wrap items-center justify-start md:justify-center gap-4 font-medium">
            <a href="#home" className="hover:text-sky-600 dark:hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-sky-600 dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-sky-600 dark:hover:text-white transition-colors">Skills</a>
            <a href="#services" className="hover:text-sky-600 dark:hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-sky-600 dark:hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-sky-600 dark:hover:text-white transition-colors">Experience</a>
            <a href="#testimonials" className="hover:text-sky-600 dark:hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-sky-600 dark:hover:text-white transition-colors">Contact</a>
          </div>

          {/* Right Column: Social Links */}
          <div className="md:col-span-4 flex items-center justify-start md:justify-end space-x-3">
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-sky-50 dark:bg-slate-900 hover:bg-sky-600 text-slate-700 dark:text-slate-300 hover:text-white transition-all border border-sky-200 dark:border-slate-800"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-sky-50 dark:bg-slate-900 hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-white transition-all border border-sky-200 dark:border-slate-800"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 text-emerald-600 dark:text-emerald-400 hover:text-white border border-emerald-500/30 transition-all"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="p-2.5 rounded-lg bg-sky-50 dark:bg-slate-900 hover:bg-sky-600 text-slate-700 dark:text-slate-300 hover:text-white transition-all border border-sky-200 dark:border-slate-800"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span>Designed & Built with passion.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-sky-50 dark:bg-slate-900 hover:bg-sky-100 text-slate-700 dark:text-slate-300 transition-all cursor-pointer flex items-center space-x-1 border border-sky-200 dark:border-slate-800"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
