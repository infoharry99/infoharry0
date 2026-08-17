export interface Project {
  id: string;
  title: string;
  category: 'SaaS' | 'Healthcare' | 'E-Commerce' | 'Recruitment / ATS' | 'Automation';
  subtitle: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  caseStudy: {
    challenge: string;
    solution: string;
    architecture: string[];
    result: string;
  };
  liveDemoUrl?: string;
  githubUrl?: string;
  imageBg: string;
  accentColor: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  features: string[];
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  testimonial: string;
  projectType: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: { name: string; level: number; highlight?: boolean; icon?: string }[];
}

export interface TimelineItem {
  year: string;
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Laravel' | 'SaaS' | 'Pricing & Process';
}

export const PERSONAL_INFO = {
  name: 'Hariom Birla',
  title: 'Senior Full-Stack Laravel Developer & SaaS Architect',
  subtitle: 'Full-Stack Developer & Senior Software Consultant',
  experienceYears: '5+',
  projectsCompleted: '50+',
  technologiesCount: '20+',
  satisfactionRate: '100%',
  location: 'Madhya Pradesh, India',
  availability: 'Available for Freelance, Full-Time Remote & Consulting',
  status: 'Open for New Enterprise & Startup Projects',
  shortPositioning: 'Building scalable web applications, multi-tenant SaaS platforms, REST API gateways, and business automation engines.',
  bio: 'Hariom Birla is a Senior Full-Stack Developer with 5+ years of hands-on expertise engineering high-performance Laravel web applications, multi-tenant SaaS products, complex REST APIs, and modern React/Next.js frontends. Focused on clean architecture, database optimization, secure payment gateway integrations, and building software that directly solves core business challenges.',
  
  contact: {
    email: 'birlahariom11@gmail.com',
    phone: '+91 95753 70343',
    whatsapp: '919575370343', // Raw numbers for wa.me link
    whatsappDisplay: '+91 95753 70343',
    linkedin: 'https://linkedin.com/in/hariombirla',
    github: 'https://github.com/hariombirla',
    twitter: 'https://twitter.com/hariombirla',
    address: 'Madhya Pradesh, India (Serving Clients Worldwide: USA, UK, India, UAE, Europe)',
  },

  trustHighlights: [
    '5+ Years Enterprise Development Experience',
    '50+ High-Performance Projects Delivered',
    'Laravel 11 & Next.js Ecosystem Expert',
    '100% On-Time Delivery & Support Guarantee'
  ]
};

export const SEO_RANKING_KEYWORDS = [
  'Senior Full-Stack Laravel Developer',
  'Hire Senior Laravel Developer India',
  'Laravel 11 PHP 8 Developer',
  'React Next.js Full-Stack Engineer',
  'Multi-Tenant SaaS Platform Architect',
  'REST API Gateway Developer',
  'MySQL Database Optimization Expert',
  'Stripe Payment Integration Specialist',
  'PhonePe UPI Payment Developer India',
  'Custom Enterprise Web Application Developer',
  'Doctor Appointment Booking Platform Developer',
  'Healthcare Telemedicine System Engineer',
  'Recruitment ATS Software Developer',
  'E-Commerce Storefront Laravel Developer',
  'Business Workflow Automation Engineer',
  'Freelance Laravel Developer India',
  'Remote Full-Stack Developer USA UK UAE',
  'Senior Software Consultant India',
  'Clean Code SOLID PHP Specialist',
  'Docker AWS Linux Deployment Engineer'
];

export const GEO_SEO_MARKETING = {
  primaryKeywords: SEO_RANKING_KEYWORDS,
  serviceRegions: ['India', 'United States', 'United Kingdom', 'United Arab Emirates', 'Europe', 'Australia', 'Global Remote'],
  entitySummary: 'Hariom Birla is a top-rated Senior Full-Stack Laravel Developer and SaaS Architect based in India, delivering bespoke web software, REST API integrations, and scalable business systems for global startups, agencies, and enterprises.'
};

export const TECH_MARQUEE = [
  { name: 'Laravel', level: 'Expert', color: '#FF2D20' },
  { name: 'PHP 8.x', level: 'Expert', color: '#777BB4' },
  { name: 'React.js', level: 'Expert', color: '#61DAFB' },
  { name: 'Next.js', level: 'Advanced', color: '#38bdf8' },
  { name: 'Node.js', level: 'Advanced', color: '#339933' },
  { name: 'MySQL', level: 'Expert', color: '#4479A1' },
  { name: 'REST APIs', level: 'Expert', color: '#009688' },
  { name: 'JavaScript ES6+', level: 'Expert', color: '#F7DF1E' },
  { name: 'Docker', level: 'Advanced', color: '#2496ED' },
  { name: 'AWS Cloud', level: 'Intermediate', color: '#FF9900' },
  { name: 'Tailwind CSS', level: 'Expert', color: '#06B6D4' },
  { name: 'Git & GitHub', level: 'Expert', color: '#F05032' },
  { name: 'Linux / VPS', level: 'Advanced', color: '#FCC624' },
  { name: 'Nginx Engine', level: 'Advanced', color: '#009639' },
  { name: 'Stripe & Payment APIs', level: 'Expert', color: '#635BFF' }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Backend Architecture',
    description: 'Scalable backend engines, microservices, and robust business logic layers.',
    skills: [
      { name: 'Laravel (8/9/10/11)', level: 98, highlight: true },
      { name: 'PHP 8.x (OOP & Design Patterns)', level: 95, highlight: true },
      { name: 'Node.js / Express.js', level: 88 },
      { name: 'RESTful API Architecture', level: 96, highlight: true },
      { name: 'Authentication (Sanctum/JWT/Passport)', level: 94 },
      { name: 'Payment Gateway Integration', level: 95, highlight: true },
      { name: 'Queue Processing & Redis', level: 90 },
      { name: 'Microservices & Event-Driven Logic', level: 85 }
    ]
  },
  {
    category: 'Frontend Engineering',
    description: 'Modern, fluid, responsive visual interfaces engineered for optimal UX.',
    skills: [
      { name: 'React.js (Hooks, Context, Redux)', level: 92, highlight: true },
      { name: 'Next.js (App Router, SSR, SSG)', level: 88, highlight: true },
      { name: 'JavaScript (ES6+ / Async)', level: 95, highlight: true },
      { name: 'HTML5 & CSS3 Architecture', level: 98 },
      { name: 'Tailwind CSS', level: 96, highlight: true },
      { name: 'Bootstrap & Responsive UI', level: 92 },
      { name: 'AJAX / Axios / Fetch API', level: 96 },
      { name: 'State Management & Performance Optimization', level: 90 }
    ]
  },
  {
    category: 'Database & Data Modeling',
    description: 'High-speed relational data design, indexing, and query tuning.',
    skills: [
      { name: 'MySQL Relational Database', level: 95, highlight: true },
      { name: 'Database Architecture & Schema Design', level: 94, highlight: true },
      { name: 'Complex Query Optimization & Indexing', level: 90 },
      { name: 'Eloquent ORM Mastery', level: 98, highlight: true },
      { name: 'Data Migration & Seeding Pipelines', level: 92 },
      { name: 'Caching Strategies (Redis/Memcached)', level: 88 }
    ]
  },
  {
    category: 'DevOps & Server Management',
    description: 'Production deployment pipelines, web server security, and containerization.',
    skills: [
      { name: 'Docker & Containerization', level: 86, highlight: true },
      { name: 'Linux Server Administration (Ubuntu/Debian)', level: 90, highlight: true },
      { name: 'Nginx & Apache Configuration', level: 88 },
      { name: 'Git / GitHub Workflow / CI-CD', level: 94, highlight: true },
      { name: 'VPS Deployment (DigitalOcean/Linode/AWS)', level: 90 },
      { name: 'SSL Security & Domain DNS Setup', level: 92 }
    ]
  },
  {
    category: 'Integrations & Ecosystem',
    description: 'Seamless connectivity with payment gateways, CRMs, and third-party tools.',
    skills: [
      { name: 'Stripe / PayPal / PhonePe / Worldpay', level: 96, highlight: true },
      { name: 'Twilio / WhatsApp Business APIs', level: 90 },
      { name: 'Email APIs (SendGrid/Mailgun/SES)', level: 94 },
      { name: 'Google Cloud & Maps API', level: 88 },
      { name: 'Third-Party Webhooks & Automation', level: 95, highlight: true }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'custom-web-apps',
    title: 'Custom Web Applications',
    shortDesc: 'Bespoke web applications engineered specifically around complex business workflows and custom requirements.',
    fullDesc: 'I design and build tailor-made enterprise web platforms that automate operations, manage user data seamlessly, and provide intuitive workflows.',
    icon: 'Layers',
    features: [
      'Custom Laravel & React Architecture',
      'Role-Based Access Control (RBAC)',
      'Optimized Relational Database Schemas',
      'High-Security Data Encryption'
    ],
    deliverables: ['Production Ready Source Code', 'Database Architecture Diagram', 'User Documentation', '3 Months Support']
  },
  {
    id: 'laravel-dev',
    title: 'Laravel Enterprise Development',
    shortDesc: 'High-performance Laravel systems, secure backends, robust APIs, and custom package extensions.',
    fullDesc: 'Deep expertise in building clean, maintainable Laravel platforms following strict SOLID principles and domain-driven patterns.',
    icon: 'Code2',
    features: [
      'Laravel 11 & PHP 8.x Best Practices',
      'Custom Artisan Commands & Job Queues',
      'Complex Eloquent Query Tuning',
      'Unit & Integration Testing'
    ],
    deliverables: ['Clean Modular Codebase', 'Artisan Automation Scripts', 'API Specifications', 'Deployment Guide']
  },
  {
    id: 'saas-development',
    title: 'SaaS Platform Development',
    shortDesc: 'Subscription-based SaaS products with multi-tenancy, billing, roles, automated onboarding, and analytics.',
    fullDesc: 'End-to-end multi-tenant SaaS engineering designed to scale effortlessly from early-stage MVP to thousands of active paying subscribers.',
    icon: 'Cpu',
    features: [
      'Multi-Tenant Data Isolation Architecture',
      'Recurring Subscription Billing (Stripe / Local Gateways)',
      'Tiered Roles, Permissions & Team Workspaces',
      'Automated Onboarding & Email Sequences'
    ],
    deliverables: ['Complete SaaS Codebase', 'Stripe Billing Webhook Integration', 'Admin Control Panel', 'Production Server Setup']
  },
  {
    id: 'api-development',
    title: 'REST API & Microservices',
    shortDesc: 'Secure, high-speed RESTful APIs and third-party webhooks for mobile apps and web frontends.',
    fullDesc: 'I build developer-friendly REST APIs equipped with Sanctum/JWT authentication, rate limiting, versioning, and comprehensive OpenAPI docs.',
    icon: 'Zap',
    features: [
      'Token & JWT Authentication Schemes',
      'Rate Limiting & Threat Protection',
      'Postman / OpenAPI Documentation',
      'Third-Party Webhook Processing'
    ],
    deliverables: ['Rest API Endpoints', 'Interactive Postman Collection', 'Swagger / OpenAPI Specs', 'API Benchmark Report']
  },
  {
    id: 'react-next-frontend',
    title: 'React & Next.js Frontend',
    shortDesc: 'Modern responsive web frontends featuring lightning-fast page speed and polished UI user experiences.',
    fullDesc: 'Transforming designs into lightning-fast, reactive frontends using React.js, Next.js App Router, Tailwind CSS, and stateful state management.',
    icon: 'Globe',
    features: [
      'Server-Side Rendering (SSR) & Dynamic Routing',
      'Tailwind CSS & Mobile-First Fluid Design',
      'Optimized Core Web Vitals & Instant Load Times',
      'Seamless API State Synchronization'
    ],
    deliverables: ['Next.js React Frontend App', 'Component Library', 'Lighthouse 90+ Audit', 'Responsive Mobile Layouts']
  },
  {
    id: 'business-automation',
    title: 'Business Workflow Automation',
    shortDesc: 'Automate manual business tasks, data imports, PDF generation, cron jobs, and background workers.',
    fullDesc: 'Eliminate repetitive manual labor by building background processing queues, PDF invoice generators, automated notifications, and sync pipelines.',
    icon: 'Bot',
    features: [
      'Automated PDF Invoice & Document Engine',
      'Scheduled Cron Jobs & Background Queues',
      'Multi-Channel Alerts (Email / WhatsApp / SMS)',
      'Data Import & Export Processing (CSV/Excel)'
    ],
    deliverables: ['Automation Engine Scripts', 'Background Worker Setup', 'Custom Report Templates', 'Maintenance Runbook']
  },
  {
    id: 'admin-dashboards',
    title: 'Custom Admin Dashboards',
    shortDesc: 'Powerful management panels featuring real-time data analytics, custom charts, audit logs, and filters.',
    fullDesc: 'Intuitive administrative back-offices that give managers complete visibility over business key performance metrics and operation controls.',
    icon: 'BarChart3',
    features: [
      'Interactive Charting & Visual Metrics',
      'Granular User Permissions & Audit Logs',
      'Advanced Multi-Filter Data Tables',
      'Exportable CSV / PDF Financial Reports'
    ],
    deliverables: ['Custom Admin Panel', 'Analytics Dashboard', 'Audit Logging Module', 'Role Manager Module']
  },
  {
    id: 'payment-integration',
    title: 'Payment Gateway Integration',
    shortDesc: 'Secure, PCI-compliant integration with global and regional gateways including Stripe, PhonePe, PayPal, and Worldpay.',
    fullDesc: 'Bulletproof payment integrations with idempotent webhook handlers, refund flows, multi-currency support, and instant receipt dispatching.',
    icon: 'CreditCard',
    features: [
      'Stripe Checkout & Subscription Webhooks',
      'India Regional Gateways (PhonePe / Razorpay / UPI)',
      'Global Gateways (PayPal / Worldpay)',
      'Automatic Failed Payment Retries'
    ],
    deliverables: ['Payment Handler Code', 'Webhook Listener Suite', 'Transaction Audit Log', 'Sandbox Test Verification']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'healthcare-appointment-platform',
    title: 'Healthcare & Doctor Appointment Booking Platform',
    category: 'Healthcare',
    subtitle: 'Comprehensive Telemedicine & Appointment Scheduling System',
    description: 'Full-featured doctor appointment platform with patient portals, doctor availability management, real-time booking slots, payment integration, and administrative controls.',
    fullDescription: 'Designed and developed an end-to-end healthcare booking solution engineered to streamline clinic scheduling and patient management. Patients can browse verified doctor profiles, inspect available time slots, book video or in-person consultations, and complete payments securely online. Doctors receive custom calendars with real-time updates and electronic prescription management.',
    technologies: ['Laravel 10', 'PHP 8.2', 'MySQL', 'JavaScript', 'REST API', 'Tailwind CSS', 'Stripe', 'Twilio SMS'],
    features: [
      'Multi-doctor availability slot manager with time-zone adjustments',
      'Instant SMS and Email appointment notifications & reminders',
      'Patient electronic medical record (EMR) document vault',
      'Integrated payment checkout with automated receipt generation',
      'Comprehensive clinic admin dashboard with revenue analytics'
    ],
    metrics: [
      { label: 'Appointments Processed', value: '25,000+' },
      { label: 'Doctor Partners Onboarded', value: '120+' },
      { label: 'Booking Time Reduced', value: '75%' }
    ],
    caseStudy: {
      challenge: 'Overlapping bookings, high no-show rates, and tedious manual phone scheduling consumed clinic staff time and caused patient friction.',
      solution: 'Engineered an automated Laravel backend with optimistic locking during booking selection, integrated Twilio SMS reminders, and built a streamlined mobile-friendly patient UI.',
      architecture: [
        'Laravel REST API serving lightweight JS client components',
        'Redis cache layer for instantaneous doctor schedule lookups',
        'Stripe webhooks for asynchronous payment status verification',
        'MySQL transactional database with foreign key constraints and indexed slot tables'
      ],
      result: 'Reduced patient no-shows by 40% and freed up 15+ hours weekly per clinic staff.'
    },
    imageBg: 'from-blue-900/40 via-indigo-900/20 to-slate-900',
    accentColor: '#3b82f6'
  },
  {
    id: 'saas-business-management',
    title: 'Multi-Tenant SaaS Business Management Engine',
    category: 'SaaS',
    subtitle: 'All-in-One Operations, Invoicing & Team Collaboration SaaS',
    description: 'Enterprise SaaS platform built for mid-sized businesses with tenant isolation, tiered permissions, subscription billing, invoice generation, and automated workflows.',
    fullDescription: 'Engineered a multi-tenant business operating system enabling companies to manage clients, track project milestones, generate custom branded PDF invoices, and monitor financial metrics. The platform leverages single-database multi-tenancy with strict scoped Eloquent queries for ironclad tenant data isolation.',
    technologies: ['Laravel 11', 'React.js', 'MySQL 8.0', 'REST API', 'Stripe Billing', 'Docker', 'Nginx', 'Redis'],
    features: [
      'Tenant workspace isolation with custom subdomains or custom domains',
      'Stripe subscription plans with automated usage-based upgrades',
      'Granular Role-Based Access Control (Super Admin, Manager, Accountant, Employee)',
      'Automated recurring PDF billing engine with automated payment retries',
      'Real-time financial analytics dashboard with drill-down reporting'
    ],
    metrics: [
      { label: 'Active Monthly Tenants', value: '450+' },
      { label: 'Invoices Generated', value: '$2.5M+' },
      { label: 'System Uptime', value: '99.98%' }
    ],
    caseStudy: {
      challenge: 'Existing legacy desktop software lacked web accessibility, failed to support recurring subscription billing, and suffered from slow database queries.',
      solution: 'Architected a modular Laravel 11 + React SaaS using domain event architecture, automated queue workers for background PDF generation, and indexed MySQL databases.',
      architecture: [
        'Laravel multi-tenant middleware scoping Eloquent models automatically',
        'React frontend state management with clean REST API synchronization',
        'Docker containerized deployment pipeline on AWS EC2 & RDS',
        'Redis queue background workers handling email digests and PDF builds'
      ],
      result: 'Successfully scaled tenant onboarding with zero data leak incidents and fast 180ms API response times.'
    },
    imageBg: 'from-violet-900/40 via-purple-900/20 to-slate-900',
    accentColor: '#8b5cf6'
  },
  {
    id: 'ecommerce-storefront-platform',
    title: 'High-Performance E-Commerce Platform',
    category: 'E-Commerce',
    subtitle: 'Scalable Online Storefront & Inventory Management System',
    description: 'Full-stack e-commerce solution featuring rich product catalogs, faceted search filtering, dynamic shopping cart, multiple local/global payment options, and admin fulfillment controls.',
    fullDescription: 'Custom online retail platform built for speed and sales conversion. Includes advanced product variant management (sizes, colors, stock levels), real-time order tracking, promo code engines, and deep integration with regional Indian and international payment gateways.',
    technologies: ['Laravel', 'React.js', 'MySQL', 'PhonePe Gateway', 'Stripe', 'Tailwind CSS', 'Redis Cache'],
    features: [
      'Faceted product filter engine with instant search caching',
      'Dynamic shopping cart & multi-step responsive checkout',
      'Dual payment gateway integration (PhonePe for UPI / Stripe for Cards)',
      'Automated inventory tracking with low-stock email triggers',
      'Comprehensive order fulfillment and shipping tracking manager'
    ],
    metrics: [
      { label: 'Catalog SKUs', value: '15,000+' },
      { label: 'Checkout Conversion', value: '+32%' },
      { label: 'Page Load Speed', value: '0.8s' }
    ],
    caseStudy: {
      challenge: 'High cart abandonment due to sluggish checkout pages and lack of native UPI payment methods for Indian customers.',
      solution: 'Refactored checkout into a streamlined 2-step React component, integrated PhonePe direct UPI SDK along with Stripe, and optimized catalog query indexing.',
      architecture: [
        'Laravel Eloquent with eager loading to prevent N+1 query bottlenecks',
        'Redis session and product view counter caching',
        'Idempotent payment webhook processor preventing duplicate order creation',
        'Tailwind CSS lightweight UI payload ensuring sub-second rendering'
      ],
      result: 'Boosted checkout conversion rate by 32% and handled peak sale traffic of 500+ concurrent users effortlessly.'
    },
    imageBg: 'from-cyan-900/40 via-blue-900/20 to-slate-900',
    accentColor: '#06b6d4'
  },
  {
    id: 'ats-recruitment-platform',
    title: 'Recruitment & Applicant Tracking System (ATS)',
    category: 'Recruitment / ATS',
    subtitle: 'Enterprise Talent Sourcing & Candidate Pipeline Manager',
    description: 'Candidate management platform for recruitment agencies and corporate HR teams with candidate directory, job posting board, resume parsing, status pipelines, and hiring analytics.',
    fullDescription: 'Designed an enterprise talent management portal that streamlines the end-to-end recruitment lifecycle. HR managers can publish job requisitions, receive applicant resumes, move candidates through visual kanban hiring stages, schedule interviews, and collaborate on candidate feedback.',
    technologies: ['Laravel 10', 'Next.js / React', 'MySQL', 'REST APIs', 'Tailwind CSS', 'AWS S3', 'Node.js'],
    features: [
      'Visual Drag-and-Drop Candidate Stage Kanban Board',
      'Automated resume document upload & secure cloud storage on AWS S3',
      'Custom job application form builder with custom questionnaires',
      'Internal interviewer scorecard & collaborative feedback logs',
      'Automated candidate status email updates & interview calendar invites'
    ],
    metrics: [
      { label: 'Resumes Processed', value: '50,000+' },
      { label: 'Time-to-Hire Improvement', value: '45%' },
      { label: 'Active Jobs Managed', value: '850+' }
    ],
    caseStudy: {
      challenge: 'Recruiters wasted hours manually tracking candidates across spreadsheets and lost track of applicant documents stored in email threads.',
      solution: 'Created a centralized ATS platform featuring interactive drag-and-drop recruitment pipelines, instant full-text search, and automated email workflows.',
      architecture: [
        'Laravel REST API providing secure candidate endpoints',
        'Next.js / React reactive frontend with smooth drag-and-drop state update',
        'AWS S3 bucket integration with signed secure URL downloads',
        'MySQL database optimized for full-text candidate searching'
      ],
      result: 'Cut recruitment turnaround times in half and created a single source of truth for hiring teams.'
    },
    imageBg: 'from-emerald-900/40 via-teal-900/20 to-slate-900',
    accentColor: '#10b981'
  },
  {
    id: 'business-automation-engine',
    title: 'API Gateway & Business Automation Hub',
    category: 'Automation',
    subtitle: 'Enterprise Integration & Automated Data Sync Engine',
    description: 'Custom middleware automation engine built to bridge legacy database systems with modern third-party APIs, automated webhooks, and real-time PDF report dispatching.',
    fullDescription: 'Engineered a specialized automation hub that synchronizes inventory, sales orders, and customer records between decoupled platforms. Includes queue retry handling, webhook security signatures, and automated Excel/PDF financial summaries sent via WhatsApp and Email.',
    technologies: ['Laravel', 'Node.js', 'MySQL', 'Redis', 'Docker', 'WhatsApp API', 'SendGrid', 'REST Webhooks'],
    features: [
      'Bi-directional API sync middleware with failure queue auto-retries',
      'Real-time WhatsApp notification bot for urgent business alerts',
      'Automated daily Excel & PDF financial report generation',
      'Comprehensive API log inspector with status code breakdown'
    ],
    metrics: [
      { label: 'Daily Webhooks Synced', value: '100,000+' },
      { label: 'Manual Errors Saved', value: '100%' },
      { label: 'Processing Speed', value: '<50ms' }
    ],
    caseStudy: {
      challenge: 'Manual double-entry of orders between physical ERP systems and web stores caused expensive inventory discrepancies and fulfillment delays.',
      solution: 'Built an event-driven automation engine in Laravel using Redis queues to process incoming webhooks in real time, validating data and broadcasting status updates via WhatsApp.',
      architecture: [
        'Event-driven queue worker architecture with Redis',
        'Idempotent API key authorization layer',
        'Automated error fallback notifications sent directly to tech leads',
        'Low-overhead micro-database logger'
      ],
      result: 'Completely eliminated manual data entry errors and saved an estimated 100+ operational hours monthly.'
    },
    imageBg: 'from-amber-900/40 via-orange-900/20 to-slate-900',
    accentColor: '#f59e0b'
  }
];

export const PROBLEM_SOLVING_STEPS = [
  {
    number: '01',
    title: 'Understand',
    subtitle: 'Business & Requirements Discovery',
    description: 'I begin by listening carefully to understand your core business goals, target audience, technical bottlenecks, key performance metrics, and operational workflows.',
    details: [
      'In-depth discovery consultation',
      'Target user persona & workflow analysis',
      'Scope definition & key feature mapping',
      'Clear project timeline & budget alignment'
    ]
  },
  {
    number: '02',
    title: 'Plan',
    subtitle: 'Architecture & Technical Design',
    description: 'Before writing code, I design a clean software architecture, database schema, REST API spec, security guidelines, and intuitive UI wireframes.',
    details: [
      'Relational database schema optimization',
      'Laravel & React code structure blueprint',
      'API specification & security planning',
      'DevOps deployment architecture strategy'
    ]
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'Agile & High-Quality Execution',
    description: 'Using modern Laravel, PHP 8, and React/Next.js practices, I build clean, modular, and maintainable software with regular progress demos.',
    details: [
      'Clean SOLID code implementation',
      'Secure authentication & payment gateways',
      'Responsive, mobile-first UI components',
      'Bi-weekly progress demos & transparent updates'
    ]
  },
  {
    number: '04',
    title: 'Launch & Improve',
    subtitle: 'Deployment & Continuous Support',
    description: 'After rigorous testing and performance benchmarking, I deploy your system to production servers, configure SSL/DNS, and provide ongoing support.',
    details: [
      'Zero-downtime server deployment (VPS/AWS)',
      'Lighthouse 90+ performance optimization',
      'Staff training & system handover documentation',
      'Long-term maintenance & feature upgrades'
    ]
  }
];

export const DEVELOPMENT_PROCESS = [
  { step: '01', name: 'Discovery', desc: 'Understanding requirements, business domain, and technical goals.' },
  { step: '02', name: 'Architecture', desc: 'Designing database schemas, API specs, and clean code layout.' },
  { step: '03', name: 'UI/UX Design', desc: 'Crafting responsive, intuitive, and conversion-focused interfaces.' },
  { step: '04', name: 'Development', desc: 'Writing clean Laravel & React code following strict standards.' },
  { step: '05', name: 'Testing', desc: 'Rigorous API testing, bug fixing, and security auditing.' },
  { step: '06', name: 'Deployment', desc: 'Configuring servers, SSL, Docker, CI/CD pipelines, and domain DNS.' },
  { step: '07', name: 'Support', desc: 'Monitoring performance, backups, bug fixes, and continuous updates.' }
];

export const WHY_WORK_WITH_ME = [
  {
    icon: 'Code2',
    title: 'Clean & Maintainable Code',
    desc: 'I follow strict SOLID principles, OOP patterns, and PSR standards in PHP/Laravel. Any developer can easily read, maintain, and expand the codebase in the future.'
  },
  {
    icon: 'Cpu',
    title: 'Scalable Architecture',
    desc: 'From optimized database indexes to queue processors and Redis caching, I build applications engineered to handle growth from 10 to 100,000+ users seamlessly.'
  },
  {
    icon: 'Briefcase',
    title: 'Business-Focused Development',
    desc: 'I do not write code for the sake of technology alone. Every architectural decision is aligned with your business ROI, user conversion, and operational speed.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Secure Development Practices',
    desc: 'Protection against SQL injection, XSS, CSRF attacks, data leaks, and insecure API endpoints. Your customer data and business intellectual property stay safe.'
  },
  {
    icon: 'MessageSquare',
    title: 'Fast & Clear Communication',
    desc: 'Direct, proactive communication via Slack, WhatsApp (+91 95753 70343), or Email. Daily or weekly milestone check-ins ensure you are never left guessing.'
  },
  {
    icon: 'Headphones',
    title: 'Long-Term Support & Care',
    desc: 'My relationship does not end at launch. I provide ongoing technical support, server monitoring, security updates, and new feature development as your business evolves.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Vikram Sharma',
    role: 'Co-Founder & CEO',
    company: 'HealthSync Solutions',
    location: 'Mumbai, India',
    avatar: 'VS',
    rating: 5,
    testimonial: 'Hariom transformed our clinical booking ideas into a powerful, reliable Laravel platform. His deep understanding of backend architecture, database security, and speed was evident from day one. He delivered ahead of schedule and our clinic partners love the product!',
    projectType: 'Healthcare Booking Platform'
  },
  {
    id: 'test-2',
    name: 'David Reynolds',
    role: 'Managing Director',
    company: 'Apex Digital SaaS',
    location: 'London, UK',
    avatar: 'DR',
    rating: 5,
    testimonial: 'Hariom is one of the most reliable senior Laravel & React developers I have worked with. He refactored our multi-tenant SaaS backend, fixed complex payment billing webhooks, and accelerated our API response time by over 60%. Exceptional engineer!',
    projectType: 'SaaS Business Platform'
  },
  {
    id: 'test-3',
    name: 'Ananya Patel',
    role: 'Head of Operations',
    company: 'LogiFlow Automation',
    location: 'Bengaluru, India',
    avatar: 'AP',
    rating: 5,
    testimonial: 'We needed a complex custom web application with automated WhatsApp notifications and PDF invoicing. Hariom built the entire system cleanly and provided clear documentation. His work saved our team dozens of hours every week.',
    projectType: 'Custom Business Automation'
  },
  {
    id: 'test-4',
    name: 'Marcus Vance',
    role: 'Product Lead',
    company: 'TalentScale HR',
    location: 'Austin, TX',
    avatar: 'MV',
    rating: 5,
    testimonial: 'Finding a full-stack developer who understands both Laravel backend efficiency and modern React UI interactivity is rare. Hariom exceeded our expectations on our ATS platform. Professional, fast, and highly skilled!',
    projectType: 'Recruitment ATS Platform'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2024 - Present',
    period: 'Current Role',
    role: 'Senior Full-Stack Developer & Software Consultant',
    company: 'Independent Consulting / Custom Software Engineering',
    description: 'Architecting high-scale Laravel & Next.js applications, multi-tenant SaaS products, REST API gateways, and payment integrations for international clients and tech startups.',
    achievements: [
      'Delivered 20+ enterprise web applications with zero downtime',
      'Architected multi-tenant SaaS platform generating over $2.5M in client transactions',
      'Optimized backend query benchmarks reducing API response latencies to under 150ms'
    ],
    technologies: ['Laravel 11', 'PHP 8.3', 'Next.js', 'React', 'MySQL', 'Docker', 'AWS', 'Stripe']
  },
  {
    year: '2022 - 2024',
    period: '2 Years',
    role: 'Senior Laravel & PHP Developer',
    company: 'TechSolutions Enterprise',
    description: 'Led full-stack web application development teams, designed complex database schemas, integrated payment gateways, and built business automation tools.',
    achievements: [
      'Built doctor appointment platform handling 25,000+ patient bookings',
      'Integrated global payment gateways (Stripe, PayPal, PhonePe) with idempotent webhooks',
      'Mentored junior developers in writing clean SOLID PHP code and RESTful API standards'
    ],
    technologies: ['Laravel 9/10', 'PHP 8.1', 'React.js', 'MySQL', 'REST APIs', 'Git', 'Linux VPS']
  },
  {
    year: '2021 - 2022',
    period: '1.5 Years',
    role: 'Full-Stack Developer',
    company: 'WebSphere Innovations',
    description: 'Developed custom web applications, admin dashboards, e-commerce storefronts, and API integrations for small-to-medium businesses.',
    achievements: [
      'Developed e-commerce platforms with custom cart, checkout, and inventory tracking',
      'Built responsive frontend interfaces using HTML5, CSS3, JavaScript, and Bootstrap',
      'Configured Nginx web servers and automated database backup routines'
    ],
    technologies: ['Laravel 8', 'PHP 7.4/8.0', 'JavaScript', 'MySQL', 'Bootstrap', 'AJAX', 'Nginx']
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'General',
    question: 'Why should I hire Hariom Birla for Laravel & Full-Stack Development?',
    answer: 'Hariom Birla brings 5+ years of production experience engineering custom web applications, multi-tenant SaaS products, REST APIs, and business automation engines. Hariom combines backend Laravel proficiency with modern React/Next.js frontends, focusing on clean SOLID code, query optimization, high-security payment integrations, and direct business ROI.'
  },
  {
    category: 'Laravel',
    question: 'What version of Laravel and PHP does Hariom specialize in?',
    answer: 'Hariom specializes in modern PHP 8.x and Laravel 10/11 ecosystem best practices, including Eloquent query optimization, Job Queues with Redis, Sanctum/Passport REST API authentication, multi-tenant single/multi-database architectures, and custom package creation.'
  },
  {
    category: 'SaaS',
    question: 'Can Hariom build a complete SaaS product from MVP to enterprise scale?',
    answer: 'Yes! Hariom engineers end-to-end SaaS platforms equipped with multi-tenant data isolation, subscription billing webhooks (Stripe, PhonePe, PayPal), role-based permissions (RBAC), team workspaces, automated onboarding, PDF invoice generation, and custom admin analytics dashboards.'
  },
  {
    category: 'Pricing & Process',
    question: 'What are the engagement models and availability?',
    answer: 'Hariom works with clients across India, USA, UK, UAE, and Europe under flexible engagement models: Fixed-Price Project Contracts, Dedicated Monthly Retainers, or Hourly Technical Consulting. Direct communication is available via WhatsApp (+91 95753 70343), Email (birlahariom11@gmail.com), or Slack.'
  },
  {
    category: 'Pricing & Process',
    question: 'How long does a typical custom web application or SaaS MVP take?',
    answer: 'A streamlined MVP or custom business automation tool takes between 2 to 5 weeks depending on scope complexity, database schemas, third-party API integrations, and UI customization.'
  }
];
