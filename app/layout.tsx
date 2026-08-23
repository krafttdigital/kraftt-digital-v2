import type { Metadata } from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import './globals.css';
import { siteUrl } from './data/site';

const cormorant = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400'],
});

const outfit = Outfit({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kraftt Digital — Connected digital presence for real businesses',
    template: '%s',
  },
  description:
    'Kraftt connects brand, websites, content and digital systems to make businesses easier to discover, trust and choose.',
  alternates: { canonical: '/' },
  icons: { icon: '/icon.png' },
  openGraph: {
    type: 'website',
    siteName: 'Kraftt Digital',
    title: 'Kraftt Digital — Connected digital presence for real businesses',
    description: 'Kraftt connects brand, websites, content and digital systems to make businesses easier to discover, trust and choose.',
    url: '/',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Kraftt Digital — Make your business easier to discover, trust and choose.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kraftt Digital — Connected digital presence for real businesses',
    description: 'Kraftt connects brand, websites, content and digital systems to make businesses easier to discover, trust and choose.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${outfit.variable}`}>{children}</body>
    </html>
  );
}
