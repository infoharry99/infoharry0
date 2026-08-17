'use client';

import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';

export default function TestimonialsSlider() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <section id="testimonials" className="py-24 bg-sky-50/40 dark:bg-slate-950 relative border-t border-sky-100 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-blue-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>Social Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Client <span className="text-sky-600 dark:text-blue-400">Endorsements & Reviews</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            What founders, agencies, and engineering leaders say about working together.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900/90 border border-sky-200/80 dark:border-slate-800 shadow-xl relative overflow-hidden">
            
            <Quote className="w-16 h-16 text-sky-200/60 dark:text-blue-500/10 absolute top-6 right-6 pointer-events-none" />

            {/* Rating Stars */}
            <div className="flex items-center space-x-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">5.0 / 5.0 Rating</span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-normal mb-8">
              "{current.testimonial}"
            </blockquote>

            {/* Author Profile */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-sky-100 dark:border-slate-800/80 gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-600 to-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-md">
                  {current.avatar}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{current.name}</h4>
                  <p className="text-xs text-sky-700 dark:text-blue-400 font-semibold">{current.role} • {current.company}</p>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" /> {current.location}
                  </p>
                </div>
              </div>

              <div className="px-3.5 py-1 rounded-full bg-sky-50 dark:bg-slate-950 text-sky-800 dark:text-slate-400 text-[11px] font-mono font-semibold border border-sky-200 dark:border-slate-800 self-start sm:self-auto">
                Project: {current.projectType}
              </div>
            </div>

          </div>

          {/* Slider Pagination Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeIdx === idx ? 'w-8 bg-sky-600' : 'w-2 bg-sky-200 dark:bg-slate-800 hover:bg-sky-300'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="p-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-sky-50 border border-sky-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 transition-all cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="p-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-sky-50 border border-sky-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 transition-all cursor-pointer shadow-xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
