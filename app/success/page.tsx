'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const ref = searchParams.get('ref');
  const type = searchParams.get('type');

  const typeMessages: Record<string, string> = {
    service: 'Our team will contact you within 24 hours to confirm your appointment.',
    product: 'Your order will be processed and delivered within 2-3 business days.',
    cart: 'Our team will contact you within 24 hours to confirm your booking and delivery details.',
  };

  return (
    <section className="success-page">
      <div className="fade-up">
        <div className="success-icon fade-up d1">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h1 className="success-title fade-up d2">Payment Successful!</h1>
        <p className="success-text fade-up d3">Thank you for your purchase. A confirmation email has been sent to your inbox with all the details.</p>
        <div className="success-ref fade-up d4">
          Reference: <span>{ref || 'N/A'}</span>
        </div>
        <div className="fade-up d5" style={{ marginBottom: 32, color: 'var(--on-surface-variant)', fontSize: 14 }}>
          {typeMessages[type || ''] || 'Our team will contact you within 24 hours to confirm the details.'}
        </div>
        <div className="fade-up d5" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/shop" className="btn btn-primary">Continue Shopping</Link>
          <Link href="/services" className="btn btn-secondary">Book More Services</Link>
        </div>
      </div>
    </section>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <section className="success-page">
        <div className="fade-up">
          <div className="success-icon fade-up d1">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h1 className="success-title fade-up d2">Processing...</h1>
        </div>
      </section>
    }>
      <SuccessContent />
    </Suspense>
  );
}
