'use client';

import React from 'react';
import { TIMELINE } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';

export default function TimelineSection() {
  return (
    <section id="experience" className="py-24 bg-slate-950/90 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            5+ Years of <span className="text-blue-400">Engineering Journey</span>
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            A track record of continuous learning, technical leadership, and enterprise system delivery.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-slate-800 pl-6 sm:pl-8 space-y-12">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:bg-blue-500 group-hover:scale-125 transition-all" />

              <div className="glass-card p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-950 text-blue-300 border border-blue-800/50 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.year}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{item.period}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {item.role}
                </h3>
                <p className="text-xs font-semibold text-slate-400 mb-4 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-blue-400" /> {item.company}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 mb-4 pt-3 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Key Highlights</span>
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
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
