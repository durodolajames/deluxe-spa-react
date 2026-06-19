"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const galleryItems = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  src: "/images/mainlogo.png",
  alt: `Gallery image ${index + 1}`,
}));

export default function HorizontalGallery() {
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
          {galleryItems.map((item) => (
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
