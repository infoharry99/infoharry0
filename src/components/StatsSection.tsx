'use client';

import React from 'react';
import { Award, CheckCircle2, Clock, Cpu } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      number: '5+',
      label: 'Years Experience',
      desc: 'Hands-on enterprise web development',
      icon: Clock,
      color: 'text-sky-600 dark:text-blue-400',
      bg: 'from-sky-500/10 to-blue-500/5'
    },
    {
      number: '50+',
      label: 'Projects Delivered',
      desc: 'Web apps, SaaS & custom software',
      icon: CheckCircle2,
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'from-emerald-500/10 to-teal-500/5'
    },
    {
      number: '20+',
      label: 'Technologies Used',
      desc: 'Laravel, PHP, React, MySQL, Docker',
      icon: Cpu,
      color: 'text-indigo-600 dark:text-violet-400',
      bg: 'from-indigo-500/10 to-purple-500/5'
    },
    {
      number: '100%',
      label: 'Commitment to Quality',
      desc: 'Clean code & on-time delivery',
      icon: Award,
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'from-amber-500/10 to-orange-500/5'
    }
  ];

  return (
    <section id="experience-stats" className="py-16 bg-sky-50/50 dark:bg-slate-900/40 border-y border-sky-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-sky-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-sky-300 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className={`w-6 h-6 ${stat.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">Metric</span>
                </div>
                <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${stat.color} mb-1`}>
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">{stat.label}</div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">{stat.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
