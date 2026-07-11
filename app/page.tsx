import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/data';
import AddToCartButton from '@/components/AddToCartButton';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ImpactStats from '@/components/ImpactStats';

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

const impactStats = [
  { label: 'Years of Practice', value: '9+' },
  { label: 'Clients Served', value: '3,000+' },
  { label: 'Treatment Sessions', value: '15,000+' },
  { label: 'Customer Satisfaction', value: '98%' },
];

const testimonialHighlights = [
  {
    id: 'testimonial-1',
    quote: 'My acne flare-ups reduced significantly within weeks. The treatment plan was clear, practical, and tailored to my skin.',
    author: 'Amaka E.',
    treatment: 'Corrective Acne Program',
  },
  {
    id: 'testimonial-2',
    quote: 'From consultation to aftercare, everything felt premium and professional. My skin texture is smoother and brighter now.',
    author: 'Temi A.',
    treatment: 'Rejuvenation Facial Series',
  },
  {
    id: 'testimonial-3',
    quote: 'I finally found a clinic that combines expert advice with real results. The home routine recommendations changed everything.',
    author: 'Nneka O.',
    treatment: 'Pigmentation Recovery Plan',
  },
];

const treatmentShowcase = [
  {
    id: 'treatment-hydrafacial',
    label: 'Treatments',
    title: 'Hydrafacial',
    image: '/images/hfacial.jpg',
    href: '/services',
  },
  {
    id: 'treatment-laser',
    label: 'Laser Treatments',
    title: 'Laser Hair Removal',
    image: '/images/Laser%20Treatment.jpeg',
    href: '/services',
  },
  {
    id: 'treatment-cosmetology',
    label: 'Cosmetology',
    title: 'Chemical Peels',
    image: '/images/deluxeskin.jpeg',
    href: '/services',
  },
  {
    id: 'treatment-wellness',
    label: 'Body & Wellness',
    title: 'IV Therapy',
    image: '/images/Body%20%26%20Wellness.jpeg',
    href: '/services',
  },
];

const clinicLocations = [
  {
    id: 'location-lagos',
    city: 'Lagos',
    title: 'Location 1',
    image: '/images/6.jpeg',
    imageAlt: 'Deluxe Skincare Lekki location',
    address: 'Block 95 Plot 5A, Omorinre Johnson Street, off Bisola Durosimi Etti Street, off Admiralty Way, Lekki Phase 1, Lagos',
    note: 'Mon - Sat | 9:00 AM - 7:00 PM',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Block+95+plot+5A+Omorinre+Johnson+street+off+bisola+durosimi+etti+street+off+admiralty+way+Lekki+Phase1+Lagos',
  },
  {
    id: 'location-lekki-2',
    city: 'Lagos',
    title: 'Location 2',
    image: '/images/Hero.jpeg',
    imageAlt: 'Deluxe Skincare second Lekki location',
    address: '55 Rasheed Alaba Williams Street, Lekki Phase I, Lekki, Lagos',
    note: 'Mon - Sat | 9:00 AM - 7:00 PM',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=55+Rasheed+Alaba+Williams+Street+Lekki+Phase+I+Lekki+Lagos',
  },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);
  const showSplitSections = false;

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-slideshow" aria-hidden="true">
          <span className="hero-slide hero-slide-1" />
          <span className="hero-slide hero-slide-2" />
          <span className="hero-slide hero-slide-3" />
          <span className="hero-slide hero-slide-4" />
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy hero-fade-in">
              <div className="hero-stagger">
                <span className="label-lg hero-label">Med spa &amp; skincare</span>
                <h1 className="display-lg hero-title">Your haven for corrective care &amp; skin rejuvenation</h1>
                <p className="body-lg hero-text">
                  Experience advanced medical-grade skin treatments and premium skincare products thoughtfully designed to restore skin health, rejuvenate your complexion and deliver visible, lasting results.
                </p>
                <div className="hero-actions">
                  <Link href="/contact" className="btn btn-primary">Book Consultation</Link>
                  <Link href="/shop" className="btn btn-secondary hero-cta-shop">Shop Products</Link>
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

      {/* Impact Metrics */}
      <section className="section impact-section">
        <div className="container">
          <div className="section-header">
            <span className="label-lg section-label fade-up d1">Our Impact in Numbers</span>
            <h2 className="headline-md section-title fade-up d2">Clinical solutions for healthier skin</h2>
            <p className="body-md section-text fade-up d3">Trusted care, measurable outcomes, and consistent results across corrective and rejuvenation treatments.</p>
          </div>
          <ImpactStats stats={impactStats} />
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="section treatments-showcase-section">
        <div className="container">
          <div className="section-header">
            <span className="label-lg section-label fade-up d1">Popular Treatments</span>
            <h2 className="headline-md section-title fade-up d2">Explore services tailored to your skin goals</h2>
          </div>
        </div>
        <div className="treatments-marquee fade-up d2" aria-label="Auto-scrolling treatment cards">
          <div className="treatments-track">
            {[...treatmentShowcase, ...treatmentShowcase].map((item, idx) => (
              <article
                className="treatment-card"
                key={`${item.id}-${idx}`}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(18, 16, 14, 0.2) 0%, rgba(18, 16, 14, 0.62) 100%), url('${item.image}')`,
                }}
              >
                <div className="treatment-card-overlay">
                  <span className="treatment-eyebrow">{item.label}</span>
                  <h3 className="treatment-name">{item.title}</h3>
                  <Link href={item.href} className="btn btn-secondary treatment-cta">View Details</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="container text-center mt-4">
          <Link href="/contact" className="btn btn-primary">Book Consultation</Link>
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

      {showSplitSections && (
        <>
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
        </>
      )}

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

      {/* Team Highlight */}
      <section className="section team-highlight-section">
        <div className="team-highlight-bg" aria-hidden="true" />
        <div className="container">
          <div className="team-highlight-content fade-up d2">
            <h2 className="headline-lg team-highlight-title">The Experts Behind Every Result</h2>
            <p className="body-lg team-highlight-text">
              Your care is led by a multidisciplinary medical team committed to evidence-based treatments, precision diagnostics, and long-term skin outcomes.
            </p>
            <Link href="/about" className="btn btn-secondary team-highlight-cta">About Us</Link>
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
                src="/images/deluxeskin.jpeg"
                alt="Deluxe Skin Care FAQ"
                fill
                sizes="(max-width: 768px) 100vw, 460px"
                style={{ objectFit: 'cover', display: 'block' }}
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

      {/* Testimonials */}
      <section className="section testimonials-section bg-champagne">
        <div className="container">
          <div className="section-header">
            <span className="label-lg section-label fade-up d1">Client Testimonials</span>
            <h2 className="headline-md section-title fade-up d2">Real stories from visible transformations</h2>
            <p className="body-md section-text fade-up d3">Hear from clients who trusted our team for corrective care, treatment guidance, and long-term skin confidence.</p>
          </div>
          <div className="testimonials-grid">
            {testimonialHighlights.map((item, idx) => (
              <article className={`testimonial-card fade-up d${(idx % 5) + 1}`} key={item.id}>
                <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
                <p className="testimonial-author">{item.author}</p>
                <p className="testimonial-treatment">{item.treatment}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/contact" className="btn btn-primary">See Success Stories</Link>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="section locations-section">
        <div className="container">
          <div className="section-header">
            <span className="label-lg section-label fade-up d1">Our Locations</span>
            <h2 className="headline-md section-title fade-up d2">Visit us at any of our two clinics</h2>
            <p className="body-md section-text fade-up d3">Choose the branch closest to you and book your consultation with our team.</p>
          </div>
          <div className="contact-locations-grid">
            {clinicLocations.map((location, idx) => (
              <article className={`contact-location-card fade-up d${(idx % 5) + 1}`} key={location.id}>
                <div className="contact-location-image">
                  <Image
                    src={location.image}
                    alt={location.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="contact-location-body">
                  <p className="contact-location-city">{location.city}</p>
                  <h3 className="contact-location-title">{location.title}</h3>
                  <p className="contact-location-address">{location.address}</p>
                  <p className="location-note">{location.note}</p>
                  <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">Open in Maps</a>
                </div>
              </article>
            ))}
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
