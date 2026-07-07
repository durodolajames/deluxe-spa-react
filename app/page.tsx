import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/data';
import AddToCartButton from '@/components/AddToCartButton';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import HorizontalGallery from '@/components/HorizontalGallery';

const beforeAfterCases = [
  {
    id: 'client-acne-1',
    title: 'Facial Case 01',
    concern: 'Deep cleanse and brightening progress',
    beforeImage: '/images/Facial_before.jpeg',
    afterImage: '/images/Facial_after.jpeg',
    beforeLabel: 'Pre-Treatment',
    afterLabel: 'Post-Treatment',
  },
  {
    id: 'client-pigment-2',
    title: 'Facial Case 02',
    concern: 'Texture smoothing and tone balancing',
    beforeImage: '/images/Facial_before2.jpeg',
    afterImage: '/images/Facial_after2.jpeg',
    beforeLabel: 'Before Session',
    afterLabel: 'After Session',
  },
  {
    id: 'client-texture-3',
    title: 'Waxing Case 01',
    concern: 'Smoother finish and reduced irritation',
    beforeImage: '/images/Wax_before.jpeg',
    afterImage: '/images/Wax_after1.jpeg',
    beforeLabel: 'Before Wax',
    afterLabel: 'After Wax',
  },
  {
    id: 'client-sensitive-4',
    title: 'Waxing Case 02',
    concern: 'Cleaner finish with calmer skin look',
    beforeImage: '/images/wax1.jpeg',
    afterImage: '/images/Wax.jpeg',
    beforeLabel: 'Before Wax',
    afterLabel: 'Aftercare Result',
  },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy hero-fade-in">
              <div className="hero-stagger">
                <span className="label-lg hero-label">Luxury Med Spa & Skincare</span>
                <h1 className="display-lg hero-title">Reveal Your Natural Radiance</h1>
                <p className="body-lg hero-text">
                  Experience clinical-grade skincare treatments and premium products designed to restore, rejuvenate, and illuminate your skin.
                </p>
                <div className="hero-actions">
                  <Link href="/services" className="btn btn-primary">Explore Services</Link>
                  <Link href="/shop" className="btn btn-secondary">Shop Products</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#services" className="hero-scroll scroll-indicator" aria-label="Scroll to services">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </section>

      {/* Before / After */}
      <section className="section before-after-section">
        <div className="container">
          <div className="section-header">
            <span className="label-lg section-label fade-up d1">Client Results</span>
            <h2 className="headline-md section-title fade-up d2">Before &amp; After Transformations</h2>
            <p className="body-md section-text fade-up d3">
              Slide to compare treatment progress and see how consistent care delivers visible skin improvement.
            </p>
          </div>
          <BeforeAfterSlider cases={beforeAfterCases} enableSessionShuffle />
        </div>
      </section>

      {/* Post-Hero Feature Grid */}
      <section id="services" className="section medspa-features">
        <div className="container">
          <div className="section-header">
            <h2 className="headline-md section-title fade-up d1">Expert Care with a Clinical Touch</h2>
            <p className="body-md section-text fade-up d2">
              Advanced medical aesthetics designed to help you look refreshed, feel confident, and achieve naturally beautiful results.
            </p>
          </div>
          <div className="medspa-grid">
            <div className="medspa-card medspa-card-strong medspa-card-showcase fade-up d2">
              <div className="medspa-icon">🏥</div>
              <div className="medspa-card-copy">
                <h3>Advanced Aesthetic Treatments</h3>
                <p>Skin rejuvenation, IV therapy, weight management, laser treatments, body contouring, and customized wellness plans all designed around your goals.</p>
              </div>
            </div>
            <div className="medspa-card medspa-card-image fade-up d4">
              <div className="medspa-card-image-copy">
                <p className="eyebrow">Concierge support</p>
                <h3>Concierge-Level Experience</h3>
                <p>Enjoy seamless scheduling, attentive support, and ongoing guidance throughout every step of your transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split Showcase - Services */}
      <section className="section split-section">
        <div className="container split-grid">
          <div className="split-copy fade-up">
            <span className="label-lg section-label">Services</span>
            <h2 className="headline-md section-title">Doctor-led treatments for every skin need</h2>
            <p className="body-md section-text">Our clinical services blend medical expertise with luxury skincare to deliver results that feel as good as they look.</p>
            <Link href="/services" className="btn btn-primary">Explore Services</Link>
          </div>
          <div className="split-image split-image-services fade-up" style={{ position: 'relative' }}>
            <Image
              src="/images/Service.jpeg"
              alt="Medical spa services"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Split Showcase - Products */}
      <section className="section split-section">
        <div className="container split-grid">
          <div className="split-image split-image-products fade-up" style={{ position: 'relative' }}>
            <Image
              src="/images/Product.jpeg"
              alt="Premium skincare products"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="split-copy fade-up">
            <span className="label-lg section-label">Products</span>
            <h2 className="headline-md section-title">Premium skincare curated for home use</h2>
            <p className="body-md section-text">Shop product routines designed to extend treatment benefits, soothe sensitive skin, and support lasting radiance.</p>
            <Link href="/shop" className="btn btn-primary">Shop Products</Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="label-lg section-label fade-up d1">Our Services</span>
            <h2 className="headline-md section-title fade-up d2">Curated Treatments</h2>
            <p className="body-md section-text fade-up d3">From advanced facials to laser therapy, every treatment is tailored to your skin&apos;s unique needs.</p>
          </div>
          <div className="grid-3">
            <div className="card fade-up d1">
              <div className="card-image" style={{ position: 'relative' }}>
                <Image
                  src="/images/Facial%20Treatments.jpeg"
                  alt="Facial treatments service"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Facial Treatments</h3>
                <p className="card-text">Acne therapy, brightening facials, dermaplaning, hydra facials, and our signature Deluxe Signature Facelift.</p>
                <Link href="/services" className="btn btn-sm btn-secondary">View All</Link>
              </div>
            </div>
            <div className="card fade-up d2">
              <div className="card-image" style={{ position: 'relative' }}>
                <Image
                  src="/images/Laser%20Treatment.jpeg"
                  alt="Laser treatment service"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Laser Treatment</h3>
                <p className="card-text">Full body laser hair removal, skin rejuvenation, and targeted treatments for face, body, and sensitive areas.</p>
                <Link href="/services" className="btn btn-sm btn-secondary">View All</Link>
              </div>
            </div>
            <div className="card fade-up d3">
              <div className="card-image" style={{ position: 'relative' }}>
                <Image
                  src="/images/Body%20%26%20Wellness.jpeg"
                  alt="Body and wellness service"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Body & Wellness</h3>
                <p className="card-text">Hammam scrubs, body enhancement, massages, and deluxe infusions for complete rejuvenation.</p>
                <Link href="/services" className="btn btn-sm btn-secondary">View All</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section bg-champagne">
        <div className="container">
          <div className="section-header">
            <span className="label-lg section-label fade-up d1">Skincare Products</span>
            <h2 className="headline-md section-title fade-up d2">Shop the Collection</h2>
            <p className="body-md section-text fade-up d3">Professional-grade skincare products for your daily routine, delivered to your door.</p>
          </div>
          <div className="grid-4">
            {featuredProducts.map((product, idx) => (
              <div className={`product-card fade-up d${(idx % 5) + 1}`} key={product.id}>
                <div className="product-image">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="product-image-placeholder">
                      {product.name.split(' ').slice(0, 3).join(' ')}<br />
                      {product.name.split(' ').slice(3).join(' ')}
                    </div>
                  )}
                </div>
                <div className="product-body">
                  <div className="product-category">{product.category}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">₦{product.price.toLocaleString()}</div>
                  <div className="product-actions">
                    <AddToCartButton product={product} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/shop" className="btn btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="label-lg section-label fade-up d1">Why Deluxe</span>
            <h2 className="headline-md section-title fade-up d2">The Deluxe Difference</h2>
          </div>
          <div className="grid-3">
            <div className="feature-item fade-up d1">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className="feature-title">Clinical Expertise</h3>
              <p className="feature-text">All treatments are administered by certified skincare professionals using medical-grade equipment and protocols.</p>
            </div>
            <div className="feature-item fade-up d2">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
              <h3 className="feature-title">Premium Products</h3>
              <p className="feature-text">Our skincare line is formulated with clinically proven ingredients for visible, lasting results you can see and feel.</p>
            </div>
            <div className="feature-item fade-up d3">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="feature-title">Personalized Care</h3>
              <p className="feature-text">Every treatment begins with a comprehensive skin consultation to ensure your regimen is tailored to your unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section gallery-section">
        <HorizontalGallery />
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="label-lg section-label fade-up d1">FAQ</span>
            <h2 className="headline-md section-title fade-up d2">Questions about products and services</h2>
            <p className="body-md section-text fade-up d3">Everything you need to know before booking a treatment or selecting your skincare routine.</p>
          </div>
          <div className="faq-layout">
            <div className="faq-image-wrap fade-up d3">
              <Image
                src="/images/showcase.jpeg"
                alt="Deluxe Skin Care FAQ"
                width={1600}
                height={900}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="faq-grid">
              <details className="faq-item fade-up d1" name="home-faq">
                <summary>Can I use the products after my treatment?</summary>
                <p>Yes. We recommend following the product routine suggested by your clinician to support healing, extend treatment results, and maintain skin health.</p>
              </details>
              <details className="faq-item fade-up d2" name="home-faq">
                <summary>How do I choose between services and products?</summary>
                <p>Start with a consultation if you want a personalized plan. Products are ideal for follow-up care and daily maintenance after treatment.</p>
              </details>
              <details className="faq-item fade-up d3" name="home-faq">
                <summary>Do you offer online product consultations?</summary>
                <p>Yes. Our team can guide you remotely through product selection and treatment prep, so you feel confident before you book.</p>
              </details>
              <details className="faq-item fade-up d4" name="home-faq">
                <summary>How soon will I see results after a facial treatment?</summary>
                <p>Some clients notice an immediate glow, while deeper improvements like texture and tone balancing may take a few sessions depending on your skin goals.</p>
              </details>
              <details className="faq-item fade-up d5" name="home-faq">
                <summary>Can I combine multiple treatments in one visit?</summary>
                <p>In many cases, yes. Your specialist will recommend safe treatment combinations based on your skin condition and recovery needs.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-espresso">
        <div className="container text-center">
          <span className="label-lg fade-up d1" style={{ color: 'var(--muted-gold)', display: 'inline-block', marginBottom: 16 }}>Begin Your Journey</span>
          <h2 className="headline-md fade-up d2" style={{ color: 'var(--clinical-white)', maxWidth: 600, margin: '0 auto 24px' }}>Ready to Transform Your Skin?</h2>
          <p className="body-md fade-up d3" style={{ color: 'var(--surface-container-high)', maxWidth: 480, margin: '0 auto 40px' }}>Book a consultation or browse our collection of professional skincare products.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="btn btn-gold">Book Consultation</Link>
            <Link href="/shop" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'var(--clinical-white)' }}>Shop Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
