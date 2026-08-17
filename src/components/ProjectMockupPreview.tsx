'use client';

import React from 'react';
import { Project } from '../data/portfolioData';
import { Activity, Calendar, Users, DollarSign, CheckCircle2, Clock, Zap, Shield, Search, ArrowUpRight, Filter, ChevronRight, FileText, Send, ShoppingBag } from 'lucide-react';

interface ProjectMockupPreviewProps {
  project: Project;
}

export default function ProjectMockupPreview({ project }: ProjectMockupPreviewProps) {
  // Render specific rich UI composition based on project category / ID
  switch (project.category) {
    case 'Healthcare':
      return (
        <div className="p-5 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white rounded-b-xl flex flex-col justify-between min-h-[320px] space-y-4">
          {/* Top Bar Mock */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center font-bold text-xs">
                +
              </div>
              <div>
                <div className="text-xs font-bold">HealthSync Clinic Portal</div>
                <div className="text-[10px] text-blue-300">Dr. Sharma Schedule • Active</div>
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Slot Booking
            </span>
          </div>

          {/* Center Schedule Grid Mock */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-300 font-medium">Upcoming Patient Consultation</span>
                <span className="text-blue-400 font-mono">10:30 AM</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center font-bold text-xs text-blue-300">
                  AP
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Ananya Patel</div>
                  <div className="text-[10px] text-slate-400">General Cardiology Checkup</div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-1 text-[10px]">
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3 h-3" /> Payment Verified
                </span>
                <span className="text-slate-400 font-mono">Token #HB-482</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-[11px] text-slate-300 font-medium mb-1">Available Doctor Slots Today</div>
              <div className="grid grid-cols-3 gap-1.5 font-mono text-[10px]">
                <span className="p-1.5 rounded bg-blue-600/30 text-blue-300 text-center border border-blue-500/40">09:00 AM</span>
                <span className="p-1.5 rounded bg-emerald-600/30 text-emerald-300 text-center border border-emerald-500/40">11:15 AM</span>
                <span className="p-1.5 rounded bg-blue-600/30 text-blue-300 text-center border border-blue-500/40">02:30 PM</span>
                <span className="p-1.5 rounded bg-blue-600/30 text-blue-300 text-center border border-blue-500/40">04:00 PM</span>
                <span className="p-1.5 rounded bg-emerald-600/30 text-emerald-300 text-center border border-emerald-500/40">05:15 PM</span>
                <span className="p-1.5 rounded bg-slate-800 text-slate-500 text-center line-through">06:00 PM</span>
              </div>
            </div>
          </div>

          {/* Bottom Metrics */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-950/80 border border-white/10">
                <div className="text-xs font-extrabold text-blue-400">{m.value}</div>
                <div className="text-[9px] text-slate-400 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'SaaS':
      return (
        <div className="p-5 bg-gradient-to-br from-slate-950 via-purple-950/80 to-slate-950 text-white rounded-b-xl flex flex-col justify-between min-h-[320px] space-y-4">
          {/* SaaS Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-violet-600/30 border border-violet-400/40 flex items-center justify-center font-bold text-xs text-violet-300">
                SaaS
              </div>
              <div>
                <div className="text-xs font-bold">Apex Tenant Manager</div>
                <div className="text-[10px] text-violet-300">Subdomain Workspaces & Billing Engine</div>
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-violet-500/20 text-violet-300 border border-violet-500/30">
              Multi-Tenant Isolated
            </span>
          </div>

          {/* MRR & Workspaces Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex justify-between items-center text-[10px] text-slate-400">
                <span>Monthly Recurring Revenue</span>
                <span className="text-emerald-400 font-bold">+24% MoM</span>
              </div>
              <div className="text-lg font-black text-white font-mono">$48,500.00</div>
              {/* Simulated mini chart bar */}
              <div className="flex items-end space-x-1 h-6 pt-1">
                <div className="flex-1 bg-violet-500/30 h-[40%] rounded-t" />
                <div className="flex-1 bg-violet-500/40 h-[60%] rounded-t" />
                <div className="flex-1 bg-violet-500/50 h-[50%] rounded-t" />
                <div className="flex-1 bg-violet-500/70 h-[80%] rounded-t" />
                <div className="flex-1 bg-violet-400 h-[100%] rounded-t shadow-xs shadow-violet-400" />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-[11px] font-bold text-slate-200">Active Tenant Subdomains</div>
              <div className="space-y-1.5 text-[10px]">
                <div className="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-white/5">
                  <span className="font-mono text-violet-300">acme.saasplatform.com</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px]">Enterprise</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-white/5">
                  <span className="font-mono text-violet-300">apex.saasplatform.com</span>
                  <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[9px]">Pro Plan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Metrics */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-950/80 border border-white/10">
                <div className="text-xs font-extrabold text-violet-400">{m.value}</div>
                <div className="text-[9px] text-slate-400 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'E-Commerce':
      return (
        <div className="p-5 bg-gradient-to-br from-slate-950 via-cyan-950/80 to-slate-950 text-white rounded-b-xl flex flex-col justify-between min-h-[320px] space-y-4">
          {/* E-Commerce Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-600/30 border border-cyan-400/40 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-cyan-300" />
              </div>
              <div>
                <div className="text-xs font-bold">Storefront & Inventory Engine</div>
                <div className="text-[10px] text-cyan-300">Faceted Search & Dual Gateways</div>
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              PhonePe UPI & Stripe Active
            </span>
          </div>

          {/* Product Items Mock Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 font-bold text-xs shrink-0">
                SKU-01
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-white truncate">Pro Mechanical Keyboard</div>
                <div className="text-[10px] text-slate-400 font-mono">$129.00 • In Stock (45)</div>
                <div className="flex items-center space-x-1 mt-1 text-[9px] text-emerald-400">
                  <span>★★★★★ (128 reviews)</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 font-bold text-xs shrink-0">
                SKU-02
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-white truncate">Wireless Ergonomics Mouse</div>
                <div className="text-[10px] text-slate-400 font-mono">$79.00 • In Stock (80)</div>
                <div className="flex items-center space-x-1 mt-1 text-[9px] text-emerald-400">
                  <span>★★★★★ (94 reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Metrics */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-950/80 border border-white/10">
                <div className="text-xs font-extrabold text-cyan-400">{m.value}</div>
                <div className="text-[9px] text-slate-400 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'Recruitment / ATS':
      return (
        <div className="p-5 bg-gradient-to-br from-slate-950 via-emerald-950/80 to-slate-950 text-white rounded-b-xl flex flex-col justify-between min-h-[320px] space-y-4">
          {/* ATS Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center font-bold text-xs text-emerald-300">
                ATS
              </div>
              <div>
                <div className="text-xs font-bold">Talent Pipeline & Candidate Sourcing</div>
                <div className="text-[10px] text-emerald-300">Visual Kanban Stage Tracker</div>
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              AWS S3 Vault Active
            </span>
          </div>

          {/* Kanban Stage Cards */}
          <div className="grid grid-cols-3 gap-2 text-[10px]">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 space-y-1.5">
              <div className="font-bold text-slate-300 flex justify-between">
                <span>Applied</span>
                <span className="text-emerald-400 font-mono">14</span>
              </div>
              <div className="p-1.5 rounded bg-slate-900 border border-white/5 text-[9px]">
                <div className="font-semibold text-white">Rahul Verma</div>
                <div className="text-slate-400">Senior Laravel Dev</div>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-white/5 border border-white/10 space-y-1.5">
              <div className="font-bold text-slate-300 flex justify-between">
                <span>Interview</span>
                <span className="text-emerald-400 font-mono">5</span>
              </div>
              <div className="p-1.5 rounded bg-slate-900 border border-emerald-500/30 text-[9px]">
                <div className="font-semibold text-emerald-300">Priya Nair</div>
                <div className="text-slate-400">Tech Lead Candidate</div>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-white/5 border border-white/10 space-y-1.5">
              <div className="font-bold text-slate-300 flex justify-between">
                <span>Hired</span>
                <span className="text-emerald-400 font-mono">8</span>
              </div>
              <div className="p-1.5 rounded bg-emerald-950 border border-emerald-500/40 text-[9px]">
                <div className="font-semibold text-emerald-300">Amit Sharma</div>
                <div className="text-emerald-400">Offer Accepted ✓</div>
              </div>
            </div>
          </div>

          {/* Bottom Metrics */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-950/80 border border-white/10">
                <div className="text-xs font-extrabold text-emerald-400">{m.value}</div>
                <div className="text-[9px] text-slate-400 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'Automation':
    default:
      return (
        <div className="p-5 bg-gradient-to-br from-slate-950 via-amber-950/80 to-slate-950 text-white rounded-b-xl flex flex-col justify-between min-h-[320px] space-y-4">
          {/* Automation Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-amber-600/30 border border-amber-400/40 flex items-center justify-center font-bold text-xs text-amber-300">
                API
              </div>
              <div>
                <div className="text-xs font-bold">API Gateway & Data Sync Engine</div>
                <div className="text-[10px] text-amber-300">Redis Webhook Queue & WhatsApp Dispatched</div>
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" /> Processing &lt;50ms
            </span>
          </div>

          {/* Live Webhook Log Mock */}
          <div className="space-y-1.5 font-mono text-[10px]">
            <div className="p-2 rounded-lg bg-slate-900/90 border border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[9px]">POST 200 OK</span>
                <span className="text-slate-300">/api/v1/sync/orders</span>
              </div>
              <span className="text-slate-400">12ms • Redis Synced</span>
            </div>

            <div className="p-2 rounded-lg bg-slate-900/90 border border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold text-[9px]">POST 201 SENT</span>
                <span className="text-slate-300">/whatsapp/invoice/dispatch</span>
              </div>
              <span className="text-amber-300">WhatsApp Alert Delivered</span>
            </div>

            <div className="p-2 rounded-lg bg-slate-900/90 border border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[9px]">GET 200 OK</span>
                <span className="text-slate-300">/reports/daily-pdf-builder</span>
              </div>
              <span className="text-slate-400">Generated PDF (1.2MB)</span>
            </div>
          </div>

          {/* Bottom Metrics */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-950/80 border border-white/10">
                <div className="text-xs font-extrabold text-amber-400">{m.value}</div>
                <div className="text-[9px] text-slate-400 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      );
  }
}
