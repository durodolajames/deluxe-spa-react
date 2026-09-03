import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Deluxe Skincare Lekki | Book Your Appointment',
  description:
    'Visit Deluxe Skincare Lekki in Lagos for facials, skin treatments, waxing, manicure and pedicure. Book your appointment online or visit our Lekki locations.',
  alternates: {
    canonical: 'https://www.deluxeskincare.com.ng/contact',
  },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
