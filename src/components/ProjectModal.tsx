'use client';

import React from 'react';
import { Project } from '../data/portfolioData';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export default function ProjectModal({ project, onClose, onOpenConsultation }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-sky-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-y-auto no-scrollbar">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-white/90 dark:bg-slate-950/80 border border-sky-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 transition-all cursor-pointer shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className={`p-8 sm:p-10 bg-gradient-to-br ${project.imageBg} relative border-b border-sky-100 dark:border-slate-800`}>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-950/80 text-sky-400 border border-sky-500/30 mb-3 inline-block">
            {project.category} Case Study
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-200">
            {project.subtitle}
          </p>

          {/* Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950/85 border border-white/10">
                <div className="text-base sm:text-xl font-extrabold text-white">{m.value}</div>
                <div className="text-[10px] text-slate-300 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-8 sm:p-10 space-y-8 text-xs sm:text-sm">
          
          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-500/20">
              <h3 className="text-xs font-mono font-bold uppercase text-red-600 dark:text-red-400 mb-2">The Business Challenge</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                {project.caseStudy.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20">
              <h3 className="text-xs font-mono font-bold uppercase text-emerald-700 dark:text-emerald-400 mb-2">The Engineering Solution</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Architecture Breakdown */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
              Technical Architecture Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.caseStudy.architecture.map((arch, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-sky-50/70 dark:bg-slate-950 border border-sky-200/80 dark:border-slate-800 flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-800 dark:text-slate-300 font-medium">{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Result */}
          <div className="p-6 rounded-2xl bg-sky-50 dark:bg-blue-950/30 border border-sky-300 dark:border-blue-500/30">
            <h3 className="text-xs font-mono font-bold uppercase text-sky-700 dark:text-blue-400 mb-1">Measured Result</h3>
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              {project.caseStudy.result}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase text-slate-500 mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-sky-100 dark:bg-slate-950 text-sky-800 dark:text-slate-300 border border-sky-200 dark:border-slate-800 font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-6 border-t border-sky-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md shadow-sky-600/20 flex items-center space-x-2 cursor-pointer"
            >
              <span>Build a Similar Product</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-sky-50 dark:bg-slate-950 border border-sky-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 font-semibold text-xs cursor-pointer"
            >
              Close Case Study
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
