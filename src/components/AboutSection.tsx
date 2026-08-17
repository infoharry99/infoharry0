'use client';

import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Code2, CheckCircle2, MapPin, Globe, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export default function AboutSection({ onOpenConsultation }: AboutSectionProps) {
  const corePrinciples = [
    { title: 'Clean Architecture', desc: 'Maintainable SOLID code structures built for long-term expandability.' },
    { title: 'Scalable Systems', desc: 'Database optimization and Redis caching designed for heavy traffic growth.' },
    { title: 'Secure REST APIs', desc: 'Strict token authentication, rate limiting, and encrypted payload handling.' },
    { title: 'High Performance', desc: 'Sub-second page rendering, quick query execution, and Lighthouse 90+ speeds.' },
    { title: 'Business Automation', desc: 'Eliminating manual labor with automated PDF generators, background jobs, and webhooks.' },
    { title: 'User-Friendly Interfaces', desc: 'Polished React & Next.js frontends engineered for smooth user journeys.' }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-blue-400">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span>About My Approach</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Engineering With <span className="text-sky-600 dark:text-blue-400">Purpose</span>
            </h2>

            <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
              I am a <strong className="text-slate-900 dark:text-white">Senior Full-Stack Developer</strong> with over 5 years of experience architecting and building modern web applications, multi-tenant SaaS products, complex REST APIs, admin dashboards, doctor appointment booking platforms, business management systems, and custom software.
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              My core philosophy centers on building software that directly drives business results. Whether you are a startup founder launching an ambitious MVP, an enterprise upgrading legacy PHP systems, or a business looking for automated workflows, I ensure your software is fast, secure, scalable, and easy to maintain.
            </p>

            {/* Core Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {corePrinciples.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-sky-50/70 dark:bg-slate-900/60 border border-sky-200/70 dark:border-slate-800/80 flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Profile Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-sky-600 via-blue-600 to-blue-700 text-white shadow-xl relative overflow-hidden group">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl font-black text-white shadow-inner">
                  HB
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs font-medium text-sky-100">{PERSONAL_INFO.title}</p>
                  <span className="inline-block mt-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/20 text-white border border-white/30">
                    5+ Years Experience
                  </span>
                </div>
              </div>

              <div className="space-y-3 py-4 border-y border-white/20 text-xs text-white/90">
                <div className="flex items-center justify-between">
                  <span className="text-sky-100 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-white" /> Location
                  </span>
                  <span className="font-bold text-white">Madhya Pradesh, India</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sky-100 flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-emerald-300" /> Availability
                  </span>
                  <span className="font-bold text-emerald-200">Available Worldwide</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sky-100 flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-sky-200" /> Primary Stack
                  </span>
                  <span className="font-bold text-white">Laravel • PHP • React • MySQL</span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-sky-50 text-sky-700 font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
