'use client';

import React from 'react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';
import { Code2, Cpu, Briefcase, ShieldCheck, MessageSquare, Headphones } from 'lucide-react';

export default function WhyChooseMeSection() {
  const iconMap: Record<string, React.ElementType> = {
    Code2,
    Cpu,
    Briefcase,
    ShieldCheck,
    MessageSquare,
    Headphones
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950/80 border-t border-sky-100 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-blue-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Why Clients <span className="text-sky-600 dark:text-blue-400">Choose Me</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            A developer who bridges technical depth with business strategy.
          </p>
        </div>

        {/* 6 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_WORK_WITH_ME.map((card, idx) => {
            const IconComponent = iconMap[card.icon] || Code2;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-sky-200/80 dark:border-slate-800/80 hover:border-sky-400 shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-blue-600/10 border border-sky-200 dark:border-blue-500/20 flex items-center justify-center text-sky-600 dark:text-blue-400 mb-4 group-hover:bg-sky-600 group-hover:text-white transition-all">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Strong Statement Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white text-center relative overflow-hidden shadow-xl">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            "I don't just write code. I build software that solves real business problems."
          </h3>
          <p className="text-xs sm:text-sm text-sky-100 font-mono mt-2 font-semibold">
            — Hariom Birla, Senior Full-Stack Developer
          </p>
        </div>

      </div>
    </section>
  );
}
