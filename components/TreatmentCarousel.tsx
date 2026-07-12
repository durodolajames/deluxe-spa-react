'use client';

import { useRef } from 'react';
import Link from 'next/link';

type TreatmentItem = {
  id: string;
  label: string;
  title: string;
  image: string;
  href: string;
};

type TreatmentCarouselProps = {
  items: TreatmentItem[];
};

export default function TreatmentCarousel({ items }: TreatmentCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollTrack = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const distance = Math.max(track.clientWidth * 0.82, 280);
    track.scrollBy({ left: distance * direction, behavior: 'smooth' });
  };

  return (
    <div className="treatments-marquee fade-up d2" aria-label="Horizontal treatment cards">
      <div className="carousel-controls">
        <button type="button" className="carousel-nav-btn" aria-label="Scroll treatments left" onClick={() => scrollTrack(-1)}>
          <span aria-hidden="true">&#8592;</span>
        </button>
        <button type="button" className="carousel-nav-btn" aria-label="Scroll treatments right" onClick={() => scrollTrack(1)}>
          <span aria-hidden="true">&#8594;</span>
        </button>
      </div>
      <div className="treatments-scroll" ref={trackRef}>
        {items.map((item) => (
          <article
            className="treatment-card"
            key={item.id}
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
  );
}
