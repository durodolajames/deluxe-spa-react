"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;

    const ctx = gsap.context(() => {
      const scrollDistance = track.scrollWidth - section.clientWidth;

      if (scrollDistance <= 0) return;

      gsap.to(track, {
        x: () => `-${scrollDistance}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="gallery-section-inner" ref={sectionRef}>
      <div className="gallery-scroller">
        <div className="gallery-track" ref={trackRef}>
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
