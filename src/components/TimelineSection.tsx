'use client';

import React from 'react';
import { TIMELINE } from '../data/portfolioData';
import { Calendar, CheckCircle2, Building2 } from 'lucide-react';

export default function TimelineSection() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950/90 border-t border-sky-100 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-blue-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            5+ Years of <span className="text-sky-600 dark:text-blue-400">Engineering Journey</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            A track record of continuous learning, technical leadership, and enterprise system delivery.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-sky-200 dark:border-slate-800 pl-6 sm:pl-8 space-y-12">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-sky-600 group-hover:bg-sky-600 group-hover:scale-125 transition-all" />

              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-sky-200/80 dark:border-slate-800/80 shadow-sm hover:border-sky-400 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-100 dark:bg-blue-950 text-sky-800 dark:text-blue-300 border border-sky-300 dark:border-blue-800/50 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.year}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{item.period}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-sky-600 transition-colors">
                  {item.role}
                </h3>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-sky-600 dark:text-blue-400" /> {item.company}
                </p>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 mb-4 pt-3 border-t border-sky-100 dark:border-slate-800/80">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Key Highlights</span>
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-sky-50 dark:bg-slate-950 text-sky-800 dark:text-slate-400 border border-sky-200 dark:border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
