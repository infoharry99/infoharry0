'use client';

import React from 'react';
import { TECH_MARQUEE } from '../data/portfolioData';

export default function TechMarquee() {
  // Duplicate array for seamless infinite looping
  const marqueeItems = [...TECH_MARQUEE, ...TECH_MARQUEE];

  return (
    <section className="py-8 bg-slate-950/60 border-y border-slate-800/80 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee items-center space-x-6">
        {marqueeItems.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white transition-all whitespace-nowrap group cursor-default"
          >
            <span
              className="w-2.5 h-2.5 rounded-full group-hover:scale-125 transition-transform"
              style={{ backgroundColor: tech.color }}
            />
            <span className="text-xs font-semibold tracking-wide">{tech.name}</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
              {tech.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
