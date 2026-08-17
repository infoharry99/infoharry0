import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hariom Birla | Senior Full-Stack Laravel Developer',
  description: 'Hariom Birla is a senior full-stack Laravel developer with 5+ years experience specializing in scalable web applications, SaaS platforms, APIs, business automation and modern digital products.',
  keywords: [
    'Hariom Birla',
    'Laravel Developer',
    'Senior Full-Stack Developer',
    'PHP Developer',
    'React Developer',
    'Next.js Developer',
    'SaaS Architect',
    'REST API Expert',
    'India Full-Stack Freelancer'
  ],
  authors: [{ name: 'Hariom Birla' }],
  creator: 'Hariom Birla',
  openGraph: {
    title: 'Hariom Birla | Senior Full-Stack Laravel Developer',
    description: 'Building scalable web applications, SaaS platforms, APIs and business automation systems.',
    url: 'https://hariombirla.dev',
    siteName: 'Hariom Birla Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hariom Birla | Senior Full-Stack Laravel Developer',
    description: 'Building scalable web applications, SaaS platforms, APIs and business automation systems.',
    creator: '@hariombirla',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hariom Birla',
    jobTitle: 'Senior Full-Stack Laravel Developer',
    url: 'https://hariombirla.dev',
    sameAs: [
      'https://github.com/hariombirla',
      'https://linkedin.com/in/hariombirla',
      'https://twitter.com/hariombirla'
    ],
    knowsAbout: [
      'Laravel',
      'PHP 8',
      'React.js',
      'Next.js',
      'MySQL',
      'REST APIs',
      'Docker',
      'SaaS Multi-Tenancy',
      'Payment Gateway Integration'
    ],
    description: 'Senior Full-Stack Developer with 5+ years experience architecting web applications, SaaS platforms, and APIs.'
  };

  return (
    <html lang="en" className="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-sky-50/50 text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
