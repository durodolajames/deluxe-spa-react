import Link from 'next/link';

export default function CancellationRefundPolicyPage() {
  return (
    <section className="section" style={{ paddingTop: 48 }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section-header" style={{ marginBottom: 32 }}>
          <span className="label-lg section-label fade-up d1">Legal</span>
          <h1 className="headline-lg section-title fade-up d2">Cancellation &amp; Refund Policy</h1>
          <p className="body-md section-text fade-up d3">
            Last updated: September 11, 2026
          </p>
        </div>

        <div style={{ display: 'grid', gap: 24 }}>
          <section className="fade-up d1">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>1. Appointment Cancellations</h2>
            <p className="body-md">
              Please give us at least 24 hours&apos; notice if you need to cancel or change an appointment. Cancellations made within this period may be rescheduled without a penalty or refunded when a payment has already been made.
            </p>
          </section>

          <section className="fade-up d2">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>2. Late Cancellations and No-Shows</h2>
            <p className="body-md">
              Cancellations made less than 24 hours before an appointment, missed appointments, or arrivals too late to complete the booked service may result in the loss of the deposit or booking payment. We may require a new deposit before confirming another appointment.
            </p>
          </section>

          <section className="fade-up d3">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>3. Rescheduling</h2>
            <p className="body-md">
              Appointments may be rescheduled subject to availability. Please contact us as soon as possible so we can offer the appointment time to another guest. Repeated late cancellations or rescheduling requests may be reviewed on a case-by-case basis.
            </p>
          </section>

          <section className="fade-up d4">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>4. Service Refunds</h2>
            <p className="body-md">
              Once a service has been provided, payments are generally non-refundable. If you have a concern about a service, contact us within 48 hours so we can review it and determine an appropriate resolution. Refunds are not available for results that vary because of individual skin, hair, or body responses.
            </p>
          </section>

          <section className="fade-up d5">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>5. Product Returns</h2>
            <p className="body-md">
              We stand behind the quality of our products and want you to be satisfied. Because skincare products are personal-use and hygiene items, all purchases are final unless they qualify under the exceptions in this policy. An unopened and unused product may be eligible for a return within 7 days of delivery, subject to our review.
            </p>
          </section>

          <section className="fade-up d6">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>6. Damaged or Incorrect Products</h2>
            <p className="body-md">
              If an item arrives damaged, defective, incorrect, or does not meet our quality standards, notify us within 7 days of delivery with your order number and clear photos. For an approved claim, we may provide a full refund, replacement, or another suitable resolution at no extra cost.
            </p>
          </section>

          <section className="fade-up d6">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>7. Non-Returnable Products</h2>
            <p className="body-md">
              Opened or used products, personalized products, custom collections or kits, and sale or final-clearance items cannot be returned unless they are defective or incorrect.
            </p>
          </section>

          <section className="fade-up d6">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>8. Product Order Cancellations</h2>
            <p className="body-md">
              Contact us immediately if you need to cancel or change a product order. An order may only be changed or cancelled before it has been delivered and while the product is still in our possession or with the courier. No cancellations are accepted once an order has shipped or been delivered.
            </p>
          </section>

          <section className="fade-up d6">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>9. Refund Processing</h2>
            <p className="body-md">
              Approved refunds are issued to the original payment method and may take several business days to appear. We do not provide cash refunds for paid orders. Where appropriate, we may offer a replacement or store credit instead. Shipping, bank, or payment-provider charges may not be refundable, and promotional or discounted orders may receive a partial refund based on the amount paid.
            </p>
          </section>

          <section className="fade-up d6">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>10. How to Request a Cancellation or Refund</h2>
            <p className="body-md">
              Send your name, appointment date or order reference, the reason for your request, and photos where relevant to{' '}
              <a href="mailto:deluxe.skincareng@gmail.com">deluxe.skincareng@gmail.com</a>{' '}
              or contact us on <a href="tel:09076860852">09076860852</a>. We will review the request and respond as soon as possible.
            </p>
          </section>

          <div className="fade-up d6" style={{ marginTop: 8, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/terms" className="btn btn-primary btn-sm">Read Terms &amp; Conditions</Link>
            <Link href="/privacy-policy" className="btn btn-secondary btn-sm">Read Privacy Policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
