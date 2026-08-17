'use client';

import React, { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Code2, Database, Terminal, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const categoryIcons = [Code2, Terminal, Database, ShieldCheck, Zap];

  return (
    <section id="skills" className="py-24 bg-sky-50/40 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-blue-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical <span className="text-sky-600 dark:text-blue-400">Expertise</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Categorized technical stack and specialized skillsets honed over 5+ years of engineering production applications.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {SKILL_GROUPS.map((group, idx) => {
            const IconComponent = categoryIcons[idx] || Code2;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25 scale-105'
                    : 'bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-400 hover:text-sky-600 hover:bg-sky-50 border border-sky-200/80 dark:border-slate-800'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{group.category}</span>
              </button>
            );
          })}
        </div>

        {/* Display Active Skill Category Card */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-sky-200/80 dark:border-slate-800/80 shadow-md">
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between border-b border-sky-100 dark:border-slate-800/80 pb-6 gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>{SKILL_GROUPS[activeTab].category}</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{SKILL_GROUPS[activeTab].description}</p>
            </div>
            <span className="text-xs font-mono font-semibold text-sky-700 dark:text-blue-400 px-3 py-1 rounded-full bg-sky-100 dark:bg-blue-950 border border-sky-300 dark:border-blue-800/50 self-start md:self-auto">
              Production Verified
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILL_GROUPS[activeTab].skills.map((skill, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all ${
                  skill.highlight
                    ? 'bg-sky-50/80 dark:bg-blue-950/30 border-sky-300 dark:border-blue-500/30'
                    : 'bg-white dark:bg-slate-950/60 border-sky-100 dark:border-slate-800/80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-200">{skill.name}</span>
                  <CheckCircle2 className={`w-3.5 h-3.5 ${skill.highlight ? 'text-sky-600 dark:text-blue-400' : 'text-slate-400'}`} />
                </div>

                {/* Skill Level Progress Bar */}
                <div className="w-full h-1.5 rounded-full bg-sky-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      skill.highlight ? 'bg-gradient-to-r from-sky-500 to-blue-600' : 'bg-slate-400'
                    }`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="flex justify-between items-center mt-1.5 text-[10px] text-slate-500 font-mono">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
