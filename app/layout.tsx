import type { Metadata } from 'next';
import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { ScrollRevealInit } from '@/components/ScrollRevealInit';
import PageTransition from '@/components/PageTransition';
import './globals.css';

const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_KEY;

export const metadata: Metadata = {
  metadataBase: new URL('https://www.deluxeskincare.com.ng'),
  title: {
    default: 'Deluxe Skincare Lekki | Luxury Spa & Skin Clinic in Lagos',
    template: '%s | Deluxe Skincare Lekki',
  },
  description:
    'Deluxe Skincare Lekki offers luxury facials, body waxing, manicure, pedicure, chemical peels, microneedling, Moroccan Hammam, body polish and advanced skincare treatments in Lekki Phase 1, Lagos.',
  keywords: [
    'spa in lekki',
    'luxury spa lagos',
    'facials lekki',
    'chemical peel lekki',
    'microneedling lagos',
    'body waxing lekki',
    'moroccan hammam lagos',
    'body polish lekki',
    'body scrub lekki',
    'skin clinic lekki',
    'beauty spa lagos',
    'manicure lekki',
    'pedicure lekki',
  ],
  authors: [{ name: 'Deluxe Skincare' }],
  creator: 'Deluxe Skincare',
  publisher: 'Deluxe Skincare',
  alternates: {
    canonical: 'https://www.deluxeskincare.com.ng',
  },
  openGraph: {
    title: 'Deluxe Skincare Lekki | Luxury Spa & Skin Clinic',
    description: 'Luxury spa and advanced skincare treatments in Lekki Phase 1, Lagos.',
    url: 'https://www.deluxeskincare.com.ng',
    siteName: 'Deluxe Skincare',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deluxe Skincare Lekki',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deluxe Skincare Lekki',
    description: 'Luxury spa, facials, chemical peels and skin treatments in Lekki.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {PAYSTACK_PUBLIC_KEY && <script src="https://js.paystack.co/v1/inline.js" async></script>}
      </head>
      <body>
        <ScrollRevealInit />
        <CartProvider>
          <Header />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
