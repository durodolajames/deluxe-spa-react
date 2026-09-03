import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skincare Services in Lekki | Facials, Peels & More',
  description:
    'Explore Deluxe Skincare Lekki services including facials, chemical peels, microneedling, body waxing, body polish, body scrub, Moroccan Hammam and manicure & pedicure.',
  alternates: {
    canonical: 'https://www.deluxeskincare.com.ng/services',
  },
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
