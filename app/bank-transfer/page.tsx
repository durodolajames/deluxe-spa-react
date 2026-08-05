'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCart } from '@/lib/cart-context';

interface PendingTransferOrder {
  ref: string;
  amount: number;
  type: string;
  metadata?: {
    custom_fields: { display_name: string; variable_name: string; value: string }[];
  };
  accountName: string;
  accountNumber: string;
}

export default function BankTransferPage() {
  const { clearCart } = useCart();
  const [order, setOrder] = useState<PendingTransferOrder | null>(null);

  useEffect(() => {
    const raw = window.localStorage.getItem('deluxe_pending_transfer_order');
    if (raw) {
      try {
        const storedOrder = JSON.parse(raw);
        setOrder(storedOrder);
        clearCart();
        window.localStorage.removeItem('deluxe_pending_transfer_order');
      } catch (error) {
        console.error('Invalid pending transfer order', error);
      }
    }
  }, [clearCart]);

  if (!order) {
    return (
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <h1 className="headline-lg">Bank transfer details</h1>
          <p>We could not find your transfer order details. Please try checking out again.</p>
          <Link href="/shop" className="btn btn-primary">Go back to shop</Link>
        </div>
      </section>
    );
  }

  const amountText = `₦${(order.amount / 100).toLocaleString()}`;
  const whatsappUrl = `https://wa.me/2349076860852?text=${encodeURIComponent(`Hello Deluxe Skincare, I have completed a bank transfer for order ${order.ref}. Please confirm.`)}`;

  return (
    <section className="section" style={{ paddingTop: 48 }}>
      <div className="container">
        <div className="bank-transfer-card" style={{ maxWidth: 820, margin: '0 auto', padding: 32, background: '#fff9f0', borderRadius: 24, boxShadow: '0 24px 60px rgba(0,0,0,0.08)' }}>
          <h1 className="headline-lg" style={{ marginBottom: 16, color: '#3c2f20' }}>Complete Your Bank Transfer</h1>
          <p className="section-text" style={{ marginBottom: 24, lineHeight: 1.9, color: '#4f4232' }}>
            Please complete payment by bank transfer using the reference above and send proof of payment to the store.
          </p>

          <div className="bank-transfer-details" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20, marginBottom: 28 }}>
            <div style={{ padding: 20, background: '#fff', borderRadius: 18, border: '1px solid #e8d8c2' }}>
              <strong style={{ display: 'block', marginBottom: 8, color: '#7f6a54' }}>Account Name</strong>
              <p style={{ margin: 0, fontSize: 16, color: '#2b1f14', fontWeight: 600 }}>{order.accountName}</p>
            </div>
            <div style={{ padding: 20, background: '#fff', borderRadius: 18, border: '1px solid #e8d8c2' }}>
              <strong style={{ display: 'block', marginBottom: 8, color: '#7f6a54' }}>Account Number</strong>
              <p style={{ margin: 0, fontSize: 16, color: '#2b1f14', fontWeight: 600 }}>{order.accountNumber}</p>
            </div>
            <div style={{ padding: 20, background: '#fff', borderRadius: 18, border: '1px solid #e8d8c2' }}>
              <strong style={{ display: 'block', marginBottom: 8, color: '#7f6a54' }}>Amount</strong>
              <p style={{ margin: 0, fontSize: 16, color: '#2b1f14', fontWeight: 600 }}>{amountText}</p>
            </div>
            <div style={{ padding: 20, background: '#fff', borderRadius: 18, border: '1px solid #e8d8c2' }}>
              <strong style={{ display: 'block', marginBottom: 8, color: '#7f6a54' }}>Reference</strong>
              <p style={{ margin: 0, fontSize: 16, color: '#2b1f14', fontWeight: 600 }}>{order.ref}</p>
            </div>
          </div>

          <div className="order-metadata" style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 22, marginBottom: 16, color: '#3c2f20' }}>Order details</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
              {order.metadata?.custom_fields.map(field => (
                <li key={field.variable_name} style={{ padding: 16, background: '#fff', borderRadius: 16, border: '1px solid #f0e3d2', color: '#4f4232' }}>
                  <strong style={{ display: 'block', marginBottom: 6, color: '#7f6a54' }}>{field.display_name}</strong>
                  <span>{field.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bank-transfer-actions" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ minWidth: 210 }}>
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
