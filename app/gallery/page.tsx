import Link from 'next/link';
import Image from 'next/image';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

const beforeAfterCases = [
  {
    id: 'gallery-acne-1',
    title: 'Acne Correction Journey',
    concern: 'Corrective acne protocol with targeted peels and light therapy',
    beforeImage: '/images/Facial_before.jpeg',
    afterImage: '/images/Facial_after.jpeg',
    beforeLabel: 'Week 1',
    afterLabel: 'Week 6',
  },
  {
    id: 'gallery-acne-2',
    title: 'Texture + Clarity Reset',
    concern: 'Professional exfoliation and hydration-focused treatment plan',
    beforeImage: '/images/Facial_before2.jpeg',
    afterImage: '/images/Facial_after2.jpeg',
    beforeLabel: 'Before Plan',
    afterLabel: 'After Plan',
  },
  {
    id: 'gallery-laser-1',
    title: 'Laser Hair Removal Progress',
    concern: 'Visible reduction after 2 sessions on treatment area',
    beforeImage: '/images/Wax_before.jpeg',
    afterImage: '/images/BnA1i.jpg',
    beforeLabel: 'Session 0',
    afterLabel: 'Session 2',
  },
  {
    id: 'gallery-laser-2',
    title: 'Laser Hair Removal Results',
    concern: 'Improved smoothness after 4 sessions',
    beforeImage: '/images/wax1.jpeg',
    afterImage: '/images/wax.jpeg',
    beforeLabel: 'Start',
    afterLabel: 'After 4 Sessions',
  },
];

const testimonialHighlights = [
  {
    id: 'gallery-testimonial-1',
    quote: 'I stopped hiding my skin. The team built a simple treatment roadmap for me, and my acne marks are now much lighter.',
    author: 'Amara U.',
    treatment: 'Corrective Acne Treatment Combo',
  },
  {
    id: 'gallery-testimonial-2',
    quote: 'My face looks brighter and healthier, but still natural. The aftercare guidance was the biggest game changer for me.',
    author: 'Kemi A.',
    treatment: 'Vitamin C Brightening Facial Series',
  },
  {
    id: 'gallery-testimonial-3',
    quote: 'Laser sessions were quick and consistent. I noticed less growth early, and the skin texture in that area is smoother now.',
    author: 'Deborah E.',
    treatment: 'Laser Hair Removal Program',
  },
];

const imagePairs = [
  {
    id: 'proof-1',
    title: 'Acne Recovery',
    beforeImage: '/images/Facial_before.jpeg',
    afterImage: '/images/Facial_after.jpeg',
  },
  {
    id: 'proof-2',
    title: 'Pigmentation Balance',
    beforeImage: '/images/Facial_before2.jpeg',
    afterImage: '/images/Facial_after2.jpeg',
  },
  {
    id: 'proof-3',
    title: 'Laser Progress',
    beforeImage: '/images/Wax_before.jpeg',
    afterImage: '/images/BnA1i.jpg',
  
  },
  {
    id: 'proof-4',
    title: 'Laser Completion',
    beforeImage: '/images/wax1.jpeg',
    afterImage: '/images/wax.jpeg',
  },
  {
    id: 'proof-5',
    title: 'Treatment Case 05',
    beforeImage: '/images/BnA2i.jpg',
    afterImage: '/images/BnA2ii.jpg',
  },
  {
    id: 'proof-6',
    title: 'Treatment Case 06',
    beforeImage: '/images/BnA3i.jpg',
    afterImage: '/images/BnA3ii.jpg',
  },
];

const combinedResults = [
  {
    id: 'combined-1',
    title: 'Combined Result 01',
    image: '/images/BnA4.jpg',
  },
  {
    id: 'combined-2',
    title: 'Combined Result 02',
    image: '/images/BnA3.jpg',
  },
  {
    id: 'combined-3',
    title: 'Combined Result 03',
    image: '/images/BnA6.jpg',
  },
  {
    id: 'combined-4',
    title: 'Combined Result 04',
    image: '/images/BnA5.jpg',
  },
  {
    id: 'combined-5',
    title: 'Combined Result 05',
    image: '/images/BnA2.jpg',
  },
];

const locationLinks = [
  {
    id: 'johnson',
    label: 'Book Johnson Location',
    href: 'https://www.fresha.com/book-now/deluxe-skincare-and-spa-ik0gudoa/services?lid=633191&share=true&pId=593378',
  },
  {
    id: 'williams',
    label: 'Book Williams Location',
    href: 'https://www.fresha.com/book-now/deluxe-skincare-and-spa-55b-rasheed-alaba-wiliams-street-off-admiralty-way-lekki-phase-i-fwyiv090/services?lid=2888994&eid=5105300&share=true&pId=2793372',
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="section gallery-hero">
        <div className="container">
          <div className="section-header fade-up d1">
            <span className="label-lg section-label">Real Client Outcomes</span>
            <h1 className="headline-lg section-title">Gallery &amp; Testimonials</h1>
            <p className="body-md section-text">
              Explore documented before-and-after progress from our treatment programs and hear directly from clients.
            </p>
          </div>
          <div className="gallery-hero-actions fade-up d2">
            {locationLinks.map((location) => (
              <a key={location.id} href={location.href} target="_blank" rel="noreferrer" className="btn btn-primary">
                {location.label}
              </a>
            ))}
            <Link href="/services" className="btn btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      <section className="section before-after-section gallery-slider-section">
        <div className="container">
          <div className="section-header">
            <span className="label-lg section-label fade-up d1">Compare Progress</span>
            <h2 className="headline-md section-title fade-up d2">Interactive Before &amp; After</h2>
            <p className="body-md section-text fade-up d3">
              Drag the divider to compare treatment changes over time.
            </p>
          </div>
          <BeforeAfterSlider cases={beforeAfterCases} enableSessionShuffle={false} />
        </div>
      </section>

      <section className="section gallery-proof-section">
        <div className="container">
          <div className="section-header">
            <span className="label-lg section-label fade-up d1">Result Board</span>
            <h2 className="headline-md section-title fade-up d2">Before &amp; After Gallery</h2>
          </div>
          <div className="gallery-proof-grid">
            {imagePairs.map((item, index) => (
              <article className={`gallery-proof-card fade-up d${(index % 5) + 1}`} key={item.id}>
                <div className="gallery-proof-head">
                  <h3>{item.title}</h3>
                </div>
                <div className="gallery-proof-images">
                  <div className="gallery-proof-image-wrap">
                    <span className="gallery-proof-badge">Before</span>
                    <Image src={item.beforeImage} alt={`${item.title} before`} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="gallery-proof-image-wrap">
                    <span className="gallery-proof-badge">After</span>
                    <Image src={item.afterImage} alt={`${item.title} after`} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-combined-section">
        <div className="container">
          <div className="section-header">
            <span className="label-lg section-label fade-up d1">Transformation Gallery</span>
            <h2 className="headline-md section-title fade-up d2">Combined Results</h2>
            <p className="body-md section-text fade-up d3">
              A curated collection of finished treatment outcomes for selected client journeys.
            </p>
          </div>
          <div className="gallery-proof-grid gallery-combined-grid">
            {combinedResults.map((item, index) => (
              <article className={`gallery-proof-card gallery-combined-card fade-up d${(index % 5) + 1}`} key={item.id}>
                <div className="gallery-proof-head">
                  <h3>{item.title}</h3>
                </div>
                <div className="gallery-proof-image-wrap gallery-combined-image-wrap">
                  <Image src={item.image} alt={`${item.title} result`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="label-lg section-label fade-up d1">Client Feedback</span>
            <h2 className="headline-md section-title fade-up d2">Testimonials</h2>
          </div>
          <div className="testimonials-grid">
            {testimonialHighlights.map((item, index) => (
              <article className={`testimonial-card fade-up d${(index % 5) + 1}`} key={item.id}>
                <p className="testimonial-quote">“{item.quote}”</p>
                <p className="testimonial-author">{item.author}</p>
                <p className="testimonial-treatment">{item.treatment}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
