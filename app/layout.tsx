import type { Metadata } from 'next';
import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { ScrollRevealInit } from '@/components/ScrollRevealInit';
import PageTransition from '@/components/PageTransition';
import './globals.css';

export const metadata: Metadata = {
  title: 'Deluxe Skin Care | Luxury Med Spa & Skincare',
  description: 'Premium med spa and skincare products in Lagos. Facials, laser treatments, body care, and luxury skincare products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://js.paystack.co/v1/inline.js" async></script>
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
