"use client";

import { useRef } from "react";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    src: "/images/facial1_gsap.jpeg",
    alt: "Facial treatment result",
  },
  {
    id: 2,
    src: "/images/Wax.jpeg",
    alt: "Wax treatment result",
  },
  {
    id: 3,
    src: "/images/Facial_gsap.jpeg",
    alt: "Facial glow result",
  },
  {
    id: 4,
    src: "/images/iv_image.webp",
    alt: "IV therapy session",
  },
  {
    id: 5,
    src: "/images/neckwax_gsap.jpeg",
    alt: "Neck wax treatment result",
  },
  {
    id: 6,
    src: "/images/wax0_gsap.jpeg",
    alt: "Wax treatment close-up",
  },
  {
    id: 7,
    src: "/images/Facial_after2.jpeg",
    alt: "Facial after result 2",
  },
  {
    id: 8,
    src: "/images/Facial_after.jpeg",
    alt: "Facial after result 1",
  },
];

type GalleryItem = {
  id: number | string;
  src: string;
  alt: string;
};

type HorizontalGalleryProps = {
  items?: GalleryItem[];
};

export default function HorizontalGallery({ items = galleryItems }: HorizontalGalleryProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollTrack = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const distance = Math.max(track.clientWidth * 0.82, 300);
    track.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  return (
    <div className="gallery-section-inner">
      <div className="carousel-controls">
        <button type="button" className="carousel-nav-btn" aria-label="Scroll gallery left" onClick={() => scrollTrack(-1)}>
          <span aria-hidden="true">&#8592;</span>
        </button>
        <button type="button" className="carousel-nav-btn" aria-label="Scroll gallery right" onClick={() => scrollTrack(1)}>
          <span aria-hidden="true">&#8594;</span>
        </button>
      </div>
      <div className="gallery-scroller" ref={trackRef}>
        <div className="gallery-track">
          {items.map((item) => (
            <article className="gallery-card" key={item.id}>
              <div className="gallery-image">
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
