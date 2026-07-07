import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <section className="section" style={{ paddingTop: 48 }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section-header" style={{ marginBottom: 32 }}>
          <span className="label-lg section-label fade-up d1">Legal</span>
          <h1 className="headline-lg section-title fade-up d2">Privacy Policy</h1>
          <p className="body-md section-text fade-up d3">
            Last updated: July 4, 2026
          </p>
        </div>

        <div style={{ display: 'grid', gap: 24 }}>
          <section className="fade-up d1">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>1. Information We Collect</h2>
            <p className="body-md">
              We may collect personal information you provide when you contact us, book services, or make purchases, including your name, phone number, email address, and order details.
            </p>
          </section>

          <section className="fade-up d2">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>2. How We Use Your Information</h2>
            <p className="body-md">
              We use your information to provide requested services, process orders, communicate with you, and improve your experience with Deluxe Skin Care.
            </p>
          </section>

          <section className="fade-up d3">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>3. Data Sharing</h2>
            <p className="body-md">
              We do not sell your personal information. We only share necessary data with trusted providers that help us operate our website, payments, and customer support.
            </p>
          </section>

          <section className="fade-up d4">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>4. Data Security</h2>
            <p className="body-md">
              We use reasonable administrative and technical safeguards to protect your information. No method of transmission or storage is completely secure.
            </p>
          </section>

          <section className="fade-up d5">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>5. Your Rights</h2>
            <p className="body-md">
              You may request access, correction, or deletion of your personal information by contacting us.
            </p>
          </section>

          <section className="fade-up d6">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>6. Contact</h2>
            <p className="body-md" style={{ marginBottom: 8 }}>
              If you have privacy-related questions, contact us at{' '}
              <a href="mailto:info@deluxeskincare.com.ng">info@deluxeskincare.com.ng</a>{' '}
              or <a href="tel:09076860852">09076860852</a>.
            </p>
            <p className="body-md" style={{ marginBottom: 4 }}>
              <strong>Location 1:</strong> Block 95 plot 5A Omorinre Johnson street off bisola durosimi etti street off admiralty way Lekki Phase1, Lagos
            </p>
            <p className="body-md">
              <strong>Location 2:</strong> 55 Rasheed Alaba Williams Street, Lekki Phase I, Lekki, Lagos
            </p>
          </section>

          <div className="fade-up d6" style={{ marginTop: 8 }}>
            <Link href="/terms" className="btn btn-primary btn-sm">Read Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
