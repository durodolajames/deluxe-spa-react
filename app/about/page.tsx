import Link from 'next/link';
import Image from 'next/image';
import HorizontalGallery from '@/components/HorizontalGallery';

const aboutGalleryItems = [
  { id: 1, src: '/images/1.jpeg', alt: 'Deluxe gallery image 1' },
  { id: 2, src: '/images/2.jpeg', alt: 'Deluxe gallery image 2' },
  { id: 3, src: '/images/3.jpeg', alt: 'Deluxe gallery image 3' },
  { id: 4, src: '/images/4.jpeg', alt: 'Deluxe gallery image 4' },
  { id: 5, src: '/images/5.jpeg', alt: 'Deluxe gallery image 5' },
  { id: 6, src: '/images/6.jpeg', alt: 'Deluxe gallery image 6' },
  { id: 7, src: '/images/7.jpeg', alt: 'Deluxe gallery image 7' },
  { id: 8, src: '/images/8.jpeg', alt: 'Deluxe gallery image 8' },
  { id: 9, src: '/images/9.jpeg', alt: 'Deluxe gallery image 9' },
  { id: 'hero', src: '/images/Hero.jpeg', alt: 'Deluxe hero gallery image' },
];

export default function AboutPage() {
  return (
    <>
      <section className="section about-intro-section">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-copy fade-up d1">
              <span className="label-lg" style={{ color: 'var(--primary)', display: 'inline-block', marginBottom: 16 }}>Who We Are</span>
              <h1 className="headline-lg" style={{ marginBottom: 24, color: 'var(--deep-espresso)' }}>Where expertise meets the art of skincare.</h1>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 20 }}>
                At Deluxe Skincare and Spa, we specialize in personalized, results-driven skincare designed to restore, rejuvenate, and maintain healthy skin. Every treatment is carefully tailored to your unique skin type, concerns, and goals because no two skins are the same.
              </p>
               <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 20 }}>
                Combining advanced medical-grade treatments, premium skincare products, and evidence-based techniques, we deliver safe, effective care with visible, lasting results.

Rooted in quality, integrity, and expertise, we provide a luxurious experience where science meets skincare, helping you achieve healthy, radiant skin with confidence.
              </p>
              <div className="about-intro-stats">
                <div>
                  <div className="about-intro-stat-value">15+</div>
                  <div className="label-sm about-intro-stat-label">Service Categories</div>
                </div>
                <div>
                  <div className="about-intro-stat-value">15k+</div>
                  <div className="label-sm about-intro-stat-label">Treatments Offered</div>
                </div>
                <div>
                  <div className="about-intro-stat-value">20+</div>
                  <div className="label-sm about-intro-stat-label">Premium Products</div>
                </div>
              </div>
              <Link href="#our-story" className="btn about-intro-btn">Our Story</Link>
            </div>

            <div className="about-intro-visual fade-up d2">
              <div className="about-intro-image-wrap">
                <Image
                  src="/images/About.jpeg"
                  alt="Spa treatment room"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="about-intro-overlay">
                  <p className="about-intro-overlay-top">Clinical Precision</p>
                  <p className="about-intro-overlay-title">Skin</p>
                  <p className="about-intro-overlay-bottom">Science-backed. Results-driven.</p>
                </div>
              </div>

              <div className="about-intro-card">
                <p className="about-intro-card-label">Clients Served</p>
                <p className="about-intro-card-value">600+</p>
                <p className="about-intro-card-text">Across UK, US &amp; Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-story" className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-image about-image-stack fade-up">
              <div className="about-image-main">
                <Image
                  src="/images/deluxe.jpg"
                  alt="Deluxe Skin Care treatment room"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="fade-up">
              <span className="label-lg" style={{ color: 'var(--primary)', display: 'inline-block', marginBottom: 16 }}>Our Story</span>
              <h1 className="headline-lg" style={{ marginBottom: 24, color: 'var(--deep-espresso)' }}>Where Clinical Expertise Meets Wellness</h1>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 20 }}>
                Deluxe Skincare &amp; Medspa was founded with a simple purpose, To provide effective, affordable, and results-driven skincare solutions tailored to the unique needs of every client. Built on the belief that no two skins are the same, the practice was created to offer personalized care backed by expertise, advanced treatments, and carefully selected professional skincare products.
              </p>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 20 }}>
                What began as a corrective skincare clinic has evolved into a destination for both skin health and holistic wellness. While healthy, radiant skin remains at the heart of every treatment, the experience now extends beyond skincare to include restorative spa and advanced medspa services that promote overall well-being. This integrated approach recognizes the close connection between healthy skin, confidence, and self-care.
              </p>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 20 }}>
                Every step of the journey has been shaped by listening to clients, embracing innovation, and continually refining treatments to achieve better outcomes. This commitment to learning and excellence has strengthened the belief that truly effective skincare is never one-size-fits-all—it is thoughtful, evidence based and tailored to each individual&apos;s needs.
              </p>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 32 }}>
                Today, Deluxe Skincare &amp; Medspa is a trusted destination where clinical expertise meets wellness. Guided by the values of quality, integrity, and discipline, every treatment is designed to restore skin health, rejuvenate the complexion, and create a luxurious experience that leaves clients feeling confident, refreshed, and cared for.
              </p>
              <Link href="/services" className="btn btn-primary">Explore Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <HorizontalGallery items={aboutGalleryItems} />
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
              <h3 className="feature-title">Quality</h3>
              <p className="feature-text">We are committed to excellence in every detail, from the treatments we provide to the products we use. Every service is tailored to your unique skin needs using advanced techniques and evidence-based solutions.</p>
            </div>
            <div className="feature-item fade-up d2">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
              <h3 className="feature-title">Integrity</h3>
              <p className="feature-text">Honesty, transparency, and your well-being guide every recommendation we make. We believe in ethical, personalized care that puts your skin health first</p>
            </div>
            <div className="feature-item fade-up d3">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <h3 className="feature-title">Discipline</h3>
              <p className="feature-text">We are dedicated to consistency, continuous learning, and maintaining the highest standards of professionalism to deliver exceptional care and lasting results.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="label-lg section-label fade-up d1">FAQ</span>
            <h2 className="headline-md section-title fade-up d2">Common questions about Deluxe Skin Care</h2>
            <p className="body-md section-text fade-up d3">Helpful answers about consultations, treatment planning, and what to expect at your first visit.</p>
          </div>
          <div className="faq-layout">
            <div className="faq-image-wrap fade-up d3">
              <Image
                src="/images/recep.jpeg"
                alt="Deluxe Skin Care FAQ"
                width={1600}
                height={900}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="faq-grid">
              <details className="faq-item fade-up d1" name="about-faq">
                <summary>Do I need a consultation before booking a treatment?</summary>
                <p>Yes. We recommend starting with a consultation so our specialists can assess your skin and create a treatment plan tailored to your goals.</p>
              </details>
              <details className="faq-item fade-up d2" name="about-faq">
                <summary>Are your treatments suitable for sensitive skin?</summary>
                <p>Many of our treatments can be adapted for sensitive skin. We review your skin history first and adjust products and intensity for safety and comfort.</p>
              </details>
              <details className="faq-item fade-up d3" name="about-faq">
                <summary>How often should I come in for best results?</summary>
                <p>Frequency depends on your treatment type and skin condition. Most clients begin with a short corrective plan, then move to regular maintenance sessions.</p>
              </details>
              <details className="faq-item fade-up d4" name="about-faq">
                <summary>What should I do before my first appointment?</summary>
                <p>Please arrive with clean skin, avoid harsh exfoliants for 24 hours, and share your skincare history so we can plan your treatment safely.</p>
              </details>
              <details className="faq-item fade-up d5" name="about-faq">
                <summary>Do you offer guidance for home skincare routines?</summary>
                <p>Yes. After your consultation or treatment, we provide clear product and routine recommendations to support your results at home.</p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
