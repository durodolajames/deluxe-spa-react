import React, { useEffect, useRef, useState } from 'react';

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export default function FadeIn({ children, className = '', threshold = 0.15, rootMargin = '0px', once = true }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      // If no IO support, show immediately
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once && el) obs.unobserve(el);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  return (
    <div ref={ref} className={`fade-in ${visible ? 'is-visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}
