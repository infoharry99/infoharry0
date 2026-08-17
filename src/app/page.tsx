'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TechMarquee from '../components/TechMarquee';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSlider from '../components/ProjectsSlider';
import ProblemSolvingSection from '../components/ProblemSolvingSection';
import DevelopmentProcessSection from '../components/DevelopmentProcessSection';
import WhyChooseMeSection from '../components/WhyChooseMeSection';
import TestimonialsSlider from '../components/TestimonialsSlider';
import TimelineSection from '../components/TimelineSection';
import ClientCtaSection from '../components/ClientCtaSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import ProjectModal from '../components/ProjectModal';
import ConsultationModal from '../components/ConsultationModal';
import { Project } from '../data/portfolioData';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [initialService, setInitialService] = useState<string>('Custom Web Applications');

  useEffect(() => {
    // Synchronize html class with dark mode state
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setInitialService(serviceName);
    }
    setConsultationOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* Sticky Header */}
      <Header
        onOpenConsultation={() => handleOpenConsultation()}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      {/* Hero Section */}
      <HeroSection onOpenConsultation={() => handleOpenConsultation()} />

      {/* Technology Infinite Marquee */}
      <TechMarquee />

      {/* About & Approach Section */}
      <AboutSection onOpenConsultation={() => handleOpenConsultation()} />

      {/* Animated Key Statistics */}
      <StatsSection />

      {/* Technical Skills Category Tabs */}
      <SkillsSection />

      {/* Services Offering Cards */}
      <ServicesSection onSelectService={(s) => handleOpenConsultation(s)} />

      {/* Selected Work Carousel / Grid Slider */}
      <ProjectsSlider onOpenCaseStudy={(project) => setSelectedCaseStudy(project)} />

      {/* 4-Step Problem Solving Framework */}
      <ProblemSolvingSection />

      {/* 7-Stage Software Development Lifecycle */}
      <DevelopmentProcessSection />

      {/* Value Proposition & Strong Statement */}
      <WhyChooseMeSection />

      {/* Client Endorsements Slider */}
      <TestimonialsSlider />

      {/* 5+ Years Career Progression Timeline */}
      <TimelineSection />

      {/* Client CTA Banner */}
      <ClientCtaSection onOpenConsultation={() => handleOpenConsultation()} />

      {/* Contact Section with Backend API Route */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat />

      {/* Case Study Popup Modal */}
      <ProjectModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Project Consultation Popup Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialService={initialService}
      />
    </main>
  );
}
