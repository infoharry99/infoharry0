'use client';

import React, { useState } from 'react';
import { FAQS } from '../data/portfolioData';
import { ChevronDown, HelpCircle, CheckCircle2, Search, Zap } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-950 border-t border-sky-100 dark:border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-blue-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>Answer Engine & Search Optimization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Frequently Asked <span className="text-sky-600 dark:text-blue-400">Questions</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Clear technical answers regarding Hariom Birla's full-stack Laravel development services, SaaS engineering, project timelines, and engagement models.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-sky-50/70 dark:bg-slate-900 border-sky-300 dark:border-blue-500/40 shadow-sm'
                    : 'bg-white dark:bg-slate-950/60 border-sky-200/80 dark:border-slate-800 hover:border-sky-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-sky-600 dark:text-blue-400' : 'text-slate-400'}`} />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-full bg-sky-100 dark:bg-slate-800 text-sky-700 dark:text-slate-300 transition-transform ${isOpen ? 'rotate-180 bg-sky-600 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-t border-sky-100 dark:border-slate-800/80 font-normal animate-fade-in">
                    <p className="mb-3">{faq.answer}</p>
                    <div className="flex items-center space-x-2 text-[11px] text-sky-700 dark:text-blue-400 font-mono font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Tech Capability • Verified Availability</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
