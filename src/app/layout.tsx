import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { FAQS, PERSONAL_INFO, GEO_SEO_MARKETING } from '../data/portfolioData';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Hariom Birla | Senior Full-Stack Laravel Developer & SaaS Architect',
  description: 'Hariom Birla is a senior full-stack Laravel developer with 5+ years experience building scalable web applications, multi-tenant SaaS platforms, REST APIs, doctor booking platforms, and business automation software for clients in India, USA, UK, UAE & Europe.',
  keywords: GEO_SEO_MARKETING.primaryKeywords,
  authors: [{ name: 'Hariom Birla' }],
  creator: 'Hariom Birla',
  metadataBase: new URL('https://hariombirla.dev'),
  alternates: {
    canonical: 'https://hariombirla.dev',
  },
  openGraph: {
    title: 'Hariom Birla | Senior Full-Stack Laravel Developer & SaaS Architect',
    description: 'Building scalable web applications, SaaS platforms, APIs and business automation systems.',
    url: 'https://hariombirla.dev',
    siteName: 'Hariom Birla Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hariom Birla | Senior Full-Stack Laravel Developer & SaaS Architect',
    description: 'Building scalable web applications, SaaS platforms, APIs and business automation systems.',
    creator: '@hariombirla',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Person & Services
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.title,
    url: 'https://hariombirla.dev',
    email: PERSONAL_INFO.contact.email,
    telephone: PERSONAL_INFO.contact.phone,
    sameAs: [
      PERSONAL_INFO.contact.github,
      PERSONAL_INFO.contact.linkedin,
      PERSONAL_INFO.contact.twitter
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madhya Pradesh',
      addressCountry: 'India'
    },
    areaServed: GEO_SEO_MARKETING.serviceRegions,
    knowsAbout: [
      'Laravel 11',
      'PHP 8',
      'React.js',
      'Next.js',
      'MySQL Database Optimization',
      'REST APIs',
      'Docker Containerization',
      'SaaS Multi-Tenancy Architecture',
      'Stripe & PhonePe Payment Gateways'
    ],
    description: PERSONAL_INFO.bio
  };

  // Schema.org FAQPage for AEO / Answer Engine Optimization (ChatGPT, Perplexity, Gemini, SearchGPT)
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <html lang="en" className={`light ${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="font-sans bg-slate-50 text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
