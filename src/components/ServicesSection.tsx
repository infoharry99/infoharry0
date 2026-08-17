'use client';

import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Layers, Code2, Cpu, Zap, Globe, Bot, BarChart3, CreditCard, ArrowRight, Check } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const iconMap: Record<string, React.ElementType> = {
    Layers,
    Code2,
    Cpu,
    Zap,
    Globe,
    Bot,
    BarChart3,
    CreditCard
  };

  return (
    <section id="services" className="py-24 bg-slate-950/80 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>High-Value Engineering Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            What I Can <span className="text-blue-400">Build For You</span>
          </h2>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            From greenfield SaaS products to complex enterprise backend refactoring, I provide complete end-to-end software development services.
          </p>
        </div>

        {/* Services 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="glass-card p-6 flex flex-col justify-between group hover:border-blue-500/40 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-[11px] text-slate-300">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-200 hover:text-white border border-slate-800 hover:border-blue-500 text-xs font-semibold transition-all flex items-center justify-center space-x-2 cursor-pointer group/btn"
                >
                  <span>Request Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
