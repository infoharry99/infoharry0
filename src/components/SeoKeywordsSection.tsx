'use client';

import React from 'react';
import { SEO_RANKING_KEYWORDS } from '../data/portfolioData';
import { Search, Tag, CheckCircle2 } from 'lucide-react';

export default function SeoKeywordsSection() {
  return (
    <section id="seo-topics" className="py-16 bg-sky-50/50 dark:bg-slate-950/80 border-t border-sky-100 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-blue-400 mb-2">
            <Search className="w-3.5 h-3.5" />
            <span>Search Engine & AI Keyword Index</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Specialized Technical Search Topics & Capabilities
          </h3>
          <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
            Core expertise keywords indexed for Google, Bing, ChatGPT, Perplexity, and AI search engines.
          </p>
        </div>

        {/* Keywords Pill Cloud */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
          {SEO_RANKING_KEYWORDS.map((keyword, idx) => (
            <div
              key={idx}
              className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-sky-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-sky-400 hover:text-sky-600 transition-all flex items-center space-x-1.5 shadow-2xs"
            >
              <Tag className="w-3 h-3 text-sky-500 shrink-0" />
              <span>{keyword}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
