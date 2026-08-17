'use client';

import React from 'react';
import { DEVELOPMENT_PROCESS } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';

export default function DevelopmentProcessSection() {
  return (
    <section className="py-20 bg-sky-50/70 dark:bg-slate-950 border-t border-sky-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-blue-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>End-to-End Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional <span className="text-sky-600 dark:text-blue-400">Development Process</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
            A transparent 7-stage software development lifecycle ensuring predictable, high-quality deliverables.
          </p>
        </div>

        {/* 7 Step Horizontal Workflow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {DEVELOPMENT_PROCESS.map((step, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-sky-200/90 dark:border-slate-800 hover:border-sky-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-extrabold text-sky-700 dark:text-blue-400 bg-sky-100 dark:bg-blue-950 px-2.5 py-0.5 rounded-full border border-sky-300 dark:border-blue-800/40">
                    {step.step}
                  </span>
                  {idx < DEVELOPMENT_PROCESS.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400 dark:text-slate-600 hidden lg:block" />
                  )}
                </div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-1 group-hover:text-sky-600 transition-colors">
                  {step.name}
                </h3>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
