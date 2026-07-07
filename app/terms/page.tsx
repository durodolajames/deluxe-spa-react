import Link from 'next/link';

export default function TermsPage() {
  return (
    <section className="section" style={{ paddingTop: 48 }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section-header" style={{ marginBottom: 32 }}>
          <span className="label-lg section-label fade-up d1">Legal</span>
          <h1 className="headline-lg section-title fade-up d2">Terms &amp; Conditions</h1>
          <p className="body-md section-text fade-up d3">
            Last updated: July 4, 2026
          </p>
        </div>

        <div style={{ display: 'grid', gap: 24 }}>
          <section className="fade-up d1">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>1. Use of Website</h2>
            <p className="body-md">
              By accessing this website, you agree to use it lawfully and in a way that does not interfere with others using the site.
            </p>
          </section>

          <section className="fade-up d2">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>2. Services and Products</h2>
            <p className="body-md">
              Service availability, pricing, and product information may change without notice. We reserve the right to update or discontinue offerings at any time.
            </p>
          </section>

          <section className="fade-up d3">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>3. Appointments and Payments</h2>
            <p className="body-md">
              Appointments may require confirmation and payment according to our booking process. Please contact us directly for current payment and cancellation details.
            </p>
          </section>

          <section className="fade-up d4">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>4. Intellectual Property</h2>
            <p className="body-md">
              Website content, branding, and media are owned by Deluxe Skin Care or used with permission. Unauthorized use, copying, or distribution is prohibited.
            </p>
          </section>

          <section className="fade-up d5">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>5. Liability</h2>
            <p className="body-md">
              We provide this website on an as-is basis and are not liable for indirect losses arising from website use, outages, or third-party services.
            </p>
          </section>

          <section className="fade-up d6">
            <h2 className="headline-sm" style={{ marginBottom: 8 }}>6. Contact</h2>
            <p className="body-md" style={{ marginBottom: 8 }}>
              Questions about these terms can be sent to{' '}
              <a href="mailto:info@deluxeskincare.com.ng">info@deluxeskincare.com.ng</a>{' '}
              or <a href="tel:09076860852">09076860852</a>.
            </p>
          </section>

          <div className="fade-up d6" style={{ marginTop: 8 }}>
            <Link href="/privacy-policy" className="btn btn-primary btn-sm">Read Privacy Policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
