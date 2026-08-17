'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, LayoutGrid, SlidersHorizontal } from 'lucide-react';

interface ProjectsSliderProps {
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectsSlider({ onOpenCaseStudy }: ProjectsSliderProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');

  const categories = ['All', 'SaaS', 'Healthcare', 'E-Commerce', 'Recruitment / ATS', 'Automation'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  return (
    <section id="projects" className="py-24 bg-sky-50/40 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-blue-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span>Production Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Selected <span className="text-sky-600 dark:text-blue-400">Work & Case Studies</span>
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              High-impact production applications engineered for clients worldwide with measurable business metrics.
            </p>
          </div>

          {/* Controls: View Mode Toggle */}
          <div className="flex items-center space-x-3 self-start md:self-auto">
            <div className="bg-white dark:bg-slate-900 p-1 rounded-xl border border-sky-200 dark:border-slate-800 flex items-center space-x-1 shadow-xs">
              <button
                onClick={() => setViewMode('slider')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer ${
                  viewMode === 'slider' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-sky-600'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Slider View</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer ${
                  viewMode === 'grid' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-sky-600'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-400 hover:text-sky-600 hover:bg-sky-50 border border-sky-200/80 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SLIDER VIEW MODE */}
        {viewMode === 'slider' && currentProject && (
          <div className="relative">
            <div className="p-8 md:p-10 rounded-3xl overflow-hidden border border-sky-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Side: Mockup Window */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl border border-sky-200 dark:border-slate-700/80 bg-slate-950 overflow-hidden shadow-xl">
                    {/* Browser Chrome Header */}
                    <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        <span className="ml-2 text-[11px] font-mono text-slate-400 truncate max-w-[200px]">
                          https://app.{currentProject.id}.com
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-950 text-sky-300 border border-sky-800/50">
                        {currentProject.category}
                      </span>
                    </div>

                    {/* Realistic UI Screen Mockup */}
                    <div className={`p-6 min-h-[300px] bg-gradient-to-br ${currentProject.imageBg} flex flex-col justify-between relative`}>
                      <div className="flex justify-between items-start">
                        <div className="px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 backdrop-blur-md text-xs font-bold text-white">
                          {currentProject.subtitle}
                        </div>
                      </div>

                      {/* Mockup Metrics Cards */}
                      <div className="grid grid-cols-3 gap-2 mt-12">
                        {currentProject.metrics.map((m, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-slate-950/90 border border-white/10 backdrop-blur-md">
                            <div className="text-sm font-extrabold text-white">{m.value}</div>
                            <div className="text-[10px] text-slate-300 leading-tight mt-0.5">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Project Information */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-sky-100 dark:bg-blue-600/20 text-sky-700 dark:text-blue-400 border border-sky-300 dark:border-blue-500/30">
                        {currentProject.category}
                      </span>
                      <span className="text-xs text-slate-500">Featured Case Study</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                      {currentProject.title}
                    </h3>

                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                      {currentProject.fullDescription}
                    </p>

                    {/* Key Features Bullets */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Key Deliverables</h4>
                      {currentProject.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-slate-800 dark:text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {currentProject.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-sky-50 dark:bg-slate-950 text-sky-800 dark:text-slate-300 border border-sky-200 dark:border-slate-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-sky-100 dark:border-slate-800">
                    <button
                      onClick={() => onOpenCaseStudy(currentProject)}
                      className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-md shadow-sky-600/20 flex items-center space-x-2 cursor-pointer transition-all"
                    >
                      <span>Read Deep Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Slider Navigation Bar */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center space-x-2">
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx ? 'w-8 bg-sky-600' : 'w-2.5 bg-sky-200 dark:bg-slate-800 hover:bg-sky-300'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-sky-50 border border-sky-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 transition-all cursor-pointer shadow-xs"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Slide"
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-sky-50 border border-sky-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 transition-all cursor-pointer shadow-xs"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* GRID VIEW MODE */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-sky-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between group hover:border-sky-400 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-sky-100 text-sky-800 dark:bg-blue-950 dark:text-blue-300 border border-sky-200 dark:border-blue-800/50">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-50 dark:bg-slate-950 text-sky-800 dark:text-slate-300 border border-sky-200 dark:border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenCaseStudy(project)}
                  className="w-full py-2.5 px-4 rounded-xl bg-sky-50 dark:bg-slate-950 hover:bg-sky-600 border border-sky-200 dark:border-slate-800 hover:border-sky-600 text-sky-700 hover:text-white font-semibold text-xs transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
