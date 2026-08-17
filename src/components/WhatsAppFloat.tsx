'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.3-.777.978-.953 1.178-.176.2-.351.225-.652.075-.301-.15-1.272-.469-2.423-1.496-.897-.8-1.502-1.788-1.678-2.088-.176-.3-.018-.462.132-.611.135-.134.301-.351.451-.526.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.631-.929-2.231-.244-.583-.493-.504-.678-.514-.176-.009-.376-.009-.576-.009-.2 0-.526.075-.802.375-.276.3-1.053 1.029-1.053 2.509 0 1.48 1.078 2.909 1.229 3.109.15.2 2.122 3.24 5.141 4.541.718.31 1.279.495 1.716.634.721.23 1.377.197 1.896.12.578-.087 1.78-.727 2.03-1.428.25-.7.25-1.302.175-1.428-.075-.125-.276-.2-.577-.35z" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.438 5.168L2 22l4.985-1.39A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.061-1.111l-.291-.173-2.966.827.842-2.883-.19-.302A7.955 7.955 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
  </svg>
);

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.contact.whatsapp}?text=${encodeURIComponent(
    'Hi Hariom, I saw your portfolio website and would like to discuss a project.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {showTooltip && (
        <div className="mr-3 px-3.5 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-xl border border-emerald-500/40 animate-fade-in whitespace-nowrap">
          Chat on WhatsApp ({PERSONAL_INFO.contact.whatsappDisplay})
        </div>
      )}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Hariom Birla on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
