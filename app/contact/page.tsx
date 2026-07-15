'use client';

import Link from 'next/link';
import Image from 'next/image';

const contactLocations = [
  {
    id: 'lagos',
    city: 'Lagos',
    title: 'Location 1',
    image: '/images/6.jpeg',
    imageAlt: 'Deluxe Skincare Lekki location',
    address: 'Block 95 Plot 5A, Omorinre Johnson Street, off Bisola Durosimi Etti Street, off Admiralty Way, Lekki Phase 1, Lagos',
    bookingUrl: 'https://www.fresha.com/a/deluxe-skincare-and-spa-lagos-block-95-plot-5a-omorinre-johnson-street-off-bisola-durosimi-etti-street-off-admiralty-way-lekki-phase1-fx7mrwp0',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Block+95+plot+5A+Omorinre+Johnson+street+off+bisola+durosimi+etti+street+off+admiralty+way+Lekki+Phase1+Lagos',
  },
  {
    id: 'lagos-2',
    city: 'Lagos',
    title: 'Location 2',
    image: '/images/Hero.jpeg',
    imageAlt: 'Deluxe Skincare second Lekki location',
    address: '55 Rasheed Alaba Williams Street, Lekki Phase I, Lekki, Lagos',
    bookingUrl: 'https://www.fresha.com/a/deluxe-skincare-and-spa-lekki-55-rasheed-alaba-williams-street-xqwbfu2b',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=55+Rasheed+Alaba+Williams+Street+Lekki+Phase+I+Lekki+Lagos',
  },
];

const weeklyHours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday - Saturday', time: '9:00 AM - 6:00 PM' },
  { day: 'Sunday', time: '12:00 PM - 5:00 PM' },
];

export default function ContactPage() {
  return (
    <section className="section" style={{ paddingTop: 48 }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: 64 }}>
          <span className="label-lg section-label fade-up d1">Get in Touch</span>
          <h1 className="headline-lg section-title fade-up d2">Contact Us</h1>
          <p className="body-md section-text fade-up d3">Book a consultation, ask about our services, or inquire about product availability. We are here to help.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info fade-up d1">
            <h3>Contact Information</h3>

            <div className="contact-item fade-up d1">
              <div className="contact-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="contact-item-text">
                <strong>Phone</strong>
                <a href="tel:09076860852">09076860852</a>
              </div>
            </div>

            <div className="contact-item fade-up d2">
              <div className="contact-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.6 6.32A7.95 7.95 0 0 0 12 4a8 8 0 0 0-6.93 12L4 20l4.1-1.08A8 8 0 1 0 17.6 6.32z"></path><path d="M8.5 10.5c.3 1.2 1.8 2.7 3 3 .6.2 1-.1 1.3-.5l.4-.6"></path></svg>
              </div>
              <div className="contact-item-text">
                <strong>WhatsApp</strong>
                <a href="https://wa.me/2349076860852" target="_blank" rel="noopener noreferrer">09076860852</a>
              </div>
            </div>

            <div className="contact-item fade-up d3">
              <div className="contact-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="contact-item-text">
                <strong>Email</strong>
                <a href="mailto:deluxe.skincareng@gmail.com">deluxe.skincareng@gmail.com</a>
              </div>
            </div>

            <div className="contact-item fade-up d4">
              <div className="contact-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="contact-item-text">
                <strong>Address</strong>
                {contactLocations.map((location) => (
                  <a key={location.id} href={location.mapUrl} target="_blank" rel="noopener noreferrer"><strong>{location.title}:</strong> {location.address}</a>
                ))}
              </div>
            </div>

            <div className="contact-item fade-up d5">
              <div className="contact-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className="contact-item-text">
                <strong>Opening Hours</strong>
                <ul className="contact-hours-list" aria-label="Opening hours">
                  {weeklyHours.map((item) => (
                    <li key={item.day}>
                      <span>{item.day}</span>
                      <span>{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="fade-up d6" style={{ marginTop: 32, padding: 24, background: 'var(--champagne)', borderRadius: 'var(--radius-lg)' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, marginBottom: 12, color: 'var(--deep-espresso)' }}>Book a Consultation</h4>
              <p style={{ fontSize: 14, color: 'var(--on-surface-variant)', lineHeight: 1.6, marginBottom: 16 }}>Not sure which treatment is right for you? Our skincare specialists will assess your skin and recommend the perfect regimen.</p>
              <Link href="/services" className="btn btn-primary btn-sm">Browse Services</Link>
            </div>
          </div>

          <div className="contact-form fade-up d2">
            <h3 className="fade-up d1" style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, marginBottom: 24, color: 'var(--deep-espresso)' }}>Visit Our Locations</h3>
            <div className="contact-locations-grid">
              {contactLocations.map((location, idx) => (
                <article className={`contact-location-card fade-up d${(idx % 5) + 1}`} key={location.id}>
                  <div className="contact-location-image">
                    <Image
                      src={location.image}
                      alt={location.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                      priority={idx === 0}
                    />
                  </div>
                  <div className="contact-location-body">
                    <p className="contact-location-city">{location.city}</p>
                    <h4 className="contact-location-title">{location.title}</h4>
                    <p className="contact-location-address">{location.address}</p>
                    <div className="location-actions">
                      <a href={location.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Book This Location</a>
                      <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">Open in Maps</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
