'use client';

import React, { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Code2, Database, Terminal, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const categoryIcons = [Code2, Terminal, Database, ShieldCheck, Zap];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Technical <span className="text-blue-400">Expertise</span>
          </h2>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
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
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{group.category}</span>
              </button>
            );
          })}
        </div>

        {/* Display Active Skill Category Card */}
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-2xl">
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800/80 pb-6 gap-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>{SKILL_GROUPS[activeTab].category}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">{SKILL_GROUPS[activeTab].description}</p>
            </div>
            <span className="text-xs font-mono text-blue-400 px-3 py-1 rounded-full bg-blue-950 border border-blue-800/50 self-start md:self-auto">
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
                    ? 'bg-blue-950/30 border-blue-500/30 hover:border-blue-500/50'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-200">{skill.name}</span>
                  <CheckCircle2 className={`w-3.5 h-3.5 ${skill.highlight ? 'text-blue-400' : 'text-slate-500'}`} />
                </div>

                {/* Skill Level Progress Bar */}
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      skill.highlight ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-slate-500'
                    }`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="flex justify-between items-center mt-1.5 text-[10px] text-slate-400 font-mono">
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
