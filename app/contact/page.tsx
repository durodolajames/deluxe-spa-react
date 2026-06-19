'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section" style={{ paddingTop: 48 }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: 64 }}>
          <span className="label-lg section-label fade-up d1">Get in Touch</span>
          <h1 className="headline-lg section-title fade-up d2">Contact Us</h1>
          <p className="body-md section-text fade-up d3">Book a consultation, ask about our services, or inquire about product availability. We&apos;re here to help.</p>
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
                <span>+234 800 000 0000</span>
              </div>
            </div>

            <div className="contact-item fade-up d2">
              <div className="contact-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="contact-item-text">
                <strong>Email</strong>
                <span>hello@deluxeskincare.ng</span>
              </div>
            </div>

            <div className="contact-item fade-up d3">
              <div className="contact-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="contact-item-text">
                <strong>Location</strong>
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            <div className="contact-item fade-up d4">
              <div className="contact-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className="contact-item-text">
                <strong>Opening Hours</strong>
                <span>Monday – Saturday: 9:00 AM – 7:00 PM<br />Sunday: 12:00 PM – 6:00 PM</span>
              </div>
            </div>

            <div className="fade-up d5" style={{ marginTop: 32, padding: 24, background: 'var(--champagne)', borderRadius: 'var(--radius-lg)' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, marginBottom: 12, color: 'var(--deep-espresso)' }}>Book a Consultation</h4>
              <p style={{ fontSize: 14, color: 'var(--on-surface-variant)', lineHeight: 1.6, marginBottom: 16 }}>Not sure which treatment is right for you? Our skincare specialists will assess your skin and recommend the perfect regimen.</p>
              <Link href="/services" className="btn btn-primary btn-sm">Browse Services</Link>
            </div>
          </div>

          <div className="contact-form fade-up d2">
            {submitted ? (
              <div className="fade-up" style={{ textAlign: 'center', padding: '48px 24px' }}>
                <div className="success-icon" style={{ margin: '0 auto 24px', width: 64, height: 64 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, marginBottom: 12, color: 'var(--deep-espresso)' }}>Message Sent!</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: 14 }}>Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="fade-up d1" style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, marginBottom: 24, color: 'var(--deep-espresso)' }}>Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group fade-up d1">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Your full name" required />
                  </div>
                  <div className="form-group fade-up d2">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="your@email.com" required />
                  </div>
                  <div className="form-group fade-up d3">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="+234 800 000 0000" required />
                  </div>
                  <div className="form-group fade-up d4">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" required>
                      <option value="">Select a subject</option>
                      <option value="consultation">Book a Consultation</option>
                      <option value="service">Service Inquiry</option>
                      <option value="product">Product Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group fade-up d5">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="How can we help you?" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary fade-up d5" style={{ width: '100%' }}>Send Message</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
