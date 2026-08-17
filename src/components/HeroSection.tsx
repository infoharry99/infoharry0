'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { WhatsAppIcon } from './WhatsAppFloat';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<'laravel' | 'react' | 'terminal'>('laravel');

  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.contact.whatsapp}?text=${encodeURIComponent(
    'Hi Hariom, I saw your portfolio and would like to start a project.'
  )}`;

  const laravelSnippet = `<?php

namespace App\\Http\\Controllers\\Api;

use App\\Models\\SaaSWorkspace;
use App\\Services\\PaymentGateways\\StripeEngine;
use Illuminate\\Http\\JsonResponse;

class ApplicationEngineController extends Controller 
{
    /**
     * Build scalable digital product API backend.
     */
    public function deploy(Request $request): JsonResponse
    {
        $tenant = SaaSWorkspace::createWithMultiTenancy([
            'domain' => $request->get('subdomain'),
            'status' => 'ACTIVE',
            'queries_per_sec' => 15000,
            'response_time_ms' => 45
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Scalable Enterprise Architecture Deployed!',
            'stack' => ['Laravel 11', 'MySQL', 'Redis', 'Docker']
        ]);
    }
}`;

  const reactSnippet = `import { useState, useEffect } from 'react';
import { useSaaSAnalytics } from '@/hooks/useSaaS';

export default function SaaSMetricsDashboard() {
  const { data, loading } = useSaaSAnalytics();

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <StatCard label="Monthly Recurring Revenue" value="$48,500" growth="+24%" />
      <StatCard label="Active Tenants" value="450+" status="Healthy" />
      <StatCard label="API Latency" value="32ms" speed="Optimal" />
    </div>
  );
}`;

  const terminalLogs = [
    { time: '17:45:01', text: 'Initializing Laravel 11 Application Engine...', status: 'OK' },
    { time: '17:45:02', text: 'Connecting MySQL Relational Database Cluster...', status: 'OK' },
    { time: '17:45:03', text: 'Redis Queue Workers Online (4 processes)', status: 'ACTIVE' },
    { time: '17:45:04', text: 'Stripe & Regional Payment Gateway Webhooks Verified', status: 'READY' },
    { time: '17:45:05', text: 'System Online: 99.98% Uptime | 0 Errors', status: 'SUCCESS' },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern bg-sky-50/40 dark:bg-slate-950">
      {/* Glow Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-400/20 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-500/15 dark:bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Live Availability Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-sky-100/90 dark:bg-blue-950/60 border border-sky-300/80 dark:border-blue-500/30 text-sky-800 dark:text-blue-300 text-xs font-semibold max-w-max shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-600"></span>
              </span>
              <span>Available for Freelance & Consulting Projects</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              I Build{' '}
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400 bg-clip-text text-transparent">
                Scalable Digital Products
              </span>{' '}
              That Help Businesses Grow.
            </h1>

            {/* Subheadline & Bio */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              <span className="font-semibold text-slate-900 dark:text-white">Senior Full-Stack Laravel Developer</span> with 5+ years experience specializing in scalable web applications, SaaS platforms, robust REST APIs, and business automation. I turn complex ideas into reliable software.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-sky-600/30 hover:shadow-sky-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center space-x-2 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900/80 hover:bg-sky-50 dark:hover:bg-slate-800 border border-sky-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm shadow-xs transition-all duration-200 flex items-center space-x-2"
              >
                <span>View My Work</span>
              </a>

              {/* Direct WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4.5 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center space-x-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp (+91 95753 70343)</span>
              </a>
            </div>

            {/* Trust Indicator Bar */}
            <div className="pt-6 border-t border-sky-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-blue-400" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>50+ Projects Delivered</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-violet-400" />
                <span>Full-Stack & SaaS Architecture</span>
              </div>
            </div>

          </div>

          {/* Right Visual Element — Premium Light Blue Developer Console */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900 dark:bg-slate-950 border border-sky-300/40 dark:border-slate-800 shadow-xl overflow-hidden">
              
              {/* Console Top Header */}
              <div className="px-4 py-3 bg-slate-800 dark:bg-slate-900 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-mono text-slate-300">hariombirla-workspace.v2</span>
                </div>

                {/* Console Tabs */}
                <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-lg border border-slate-700">
                  <button
                    onClick={() => setActiveTab('laravel')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded ${
                      activeTab === 'laravel' ? 'bg-red-600/30 text-red-300 border border-red-500/50' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Laravel
                  </button>
                  <button
                    onClick={() => setActiveTab('react')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded ${
                      activeTab === 'react' ? 'bg-sky-600/30 text-sky-300 border border-sky-500/50' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    React
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded ${
                      activeTab === 'terminal' ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Terminal
                  </button>
                </div>
              </div>

              {/* Code Snippet / Console Window */}
              <div className="p-4 font-mono text-xs overflow-x-auto min-h-[300px] max-h-[360px] bg-slate-950">
                {activeTab === 'laravel' && (
                  <pre className="text-slate-200 leading-relaxed">
                    <code>{laravelSnippet}</code>
                  </pre>
                )}

                {activeTab === 'react' && (
                  <pre className="text-sky-300 leading-relaxed">
                    <code>{reactSnippet}</code>
                  </pre>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="text-slate-400">$ php artisan system:status --env=production</div>
                    {terminalLogs.map((log, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <span className="text-slate-500">[{log.time}]</span>
                        <span className="text-slate-200 flex-1">{log.text}</span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                          {log.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Live Metrics Bar */}
              <div className="px-4 py-3 bg-slate-900 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-medium">PHP Version</div>
                  <div className="text-xs font-bold text-red-400">8.3 Enterprise</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-medium">Framework</div>
                  <div className="text-xs font-bold text-sky-400">Laravel 11</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-medium">API Latency</div>
                  <div className="text-xs font-bold text-emerald-400">32ms (Fast)</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
