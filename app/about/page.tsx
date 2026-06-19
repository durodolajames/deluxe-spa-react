import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-image fade-up">
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: '#7f7669', padding: 48, textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 600, color: 'var(--primary)', marginBottom: 16 }}>D</div>
                <p style={{ fontSize: 14, lineHeight: 1.7 }}>Deluxe Skin Care</p>
                <p style={{ fontSize: 12, color: 'var(--outline)', marginTop: 8 }}>Luxury Med Spa & Skincare</p>
              </div>
            </div>
            <div className="fade-up">
              <span className="label-lg" style={{ color: 'var(--primary)', display: 'inline-block', marginBottom: 16 }}>Our Story</span>
              <h1 className="headline-lg" style={{ marginBottom: 24, color: 'var(--deep-espresso)' }}>Where Clinical Expertise Meets Luxury</h1>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 20 }}>
                Deluxe Skin Care was founded with a singular vision: to bridge the gap between clinical dermatology and the indulgent experience of a luxury spa. We believe that effective skincare should never feel clinical or cold — it should feel like self-care.
              </p>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 20 }}>
                Every treatment in our menu is backed by medical science and delivered with the precision of trained professionals. From our signature facials to advanced laser therapies, we use only medical-grade equipment and clinically proven protocols.
              </p>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 32 }}>
                Our skincare product line is formulated with the same philosophy — professional-grade ingredients, luxurious textures, and visible results. Each product is designed to extend the benefits of your in-spa treatments into your daily routine.
              </p>
              <Link href="/services" className="btn btn-primary">Explore Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-champagne">
        <div className="container">
          <div className="section-header fade-up">
            <span className="label-lg section-label">Our Values</span>
            <h2 className="headline-md section-title">What We Stand For</h2>
          </div>
          <div className="grid-3">
            <div className="feature-item fade-up d1">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className="feature-title">Clinical Integrity</h3>
              <p className="feature-text">Every treatment is evidence-based. We never compromise on safety, sanitation, or professional standards.</p>
            </div>
            <div className="feature-item fade-up d2">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
              <h3 className="feature-title">Personalized Care</h3>
              <p className="feature-text">No two skins are alike. Every client receives a customized treatment plan based on their unique concerns and goals.</p>
            </div>
            <div className="feature-item fade-up d3">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <h3 className="feature-title">Luxury Experience</h3>
              <p className="feature-text">From the moment you walk in, every detail is designed for comfort, relaxation, and a sense of sanctuary.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ textAlign: 'center' }}>
            <div className="fade-up d1">
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 600, color: 'var(--primary)', marginBottom: 8 }}>15+</div>
              <div className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>Service Categories</div>
            </div>
            <div className="fade-up d2">
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 600, color: 'var(--primary)', marginBottom: 8 }}>100+</div>
              <div className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>Treatments Offered</div>
            </div>
            <div className="fade-up d3">
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 600, color: 'var(--primary)', marginBottom: 8 }}>12</div>
              <div className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>Premium Products</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
