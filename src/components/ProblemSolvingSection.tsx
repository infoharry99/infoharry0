'use client';

import React from 'react';
import { PROBLEM_SOLVING_STEPS } from '../data/portfolioData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProblemSolvingSection() {
  return (
    <section className="py-24 bg-slate-950/90 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Structured Engineering Method</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            How I <span className="text-blue-400">Solve Problems</span>
          </h2>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            A proven 4-step execution framework ensuring project success from initial discovery through long-term production scaling.
          </p>
        </div>

        {/* 4-Step Horizontal Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {PROBLEM_SOLVING_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="glass-card p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between group hover:border-blue-500/40 relative overflow-hidden"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-mono text-slate-800 group-hover:text-blue-500/40 transition-colors">
                    {step.number}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-blue-950 text-blue-400 border border-blue-800/50">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-blue-400 mb-3">{step.subtitle}</p>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Checklist */}
                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
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
