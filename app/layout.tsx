import type { Metadata } from 'next';
import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { ScrollRevealInit } from '@/components/ScrollRevealInit';
import PageTransition from '@/components/PageTransition';
import './globals.css';

const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_KEY;

export const metadata: Metadata = {
  title: 'Deluxe Skin Care | Luxury Med Spa & Skincare',
  description: 'Premium med spa and skincare products in Lagos. Facials, laser treatments, body care, and luxury skincare products.',
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
