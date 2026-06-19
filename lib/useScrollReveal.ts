import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll('.fade-up');

    if (!('IntersectionObserver' in window)) {
      // Fallback: just show everything immediately
      targets.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Keep revealed sections visible to avoid content disappearing
            // when users continue scrolling through the page.
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 } // matches the default
    );

    targets.forEach((el) => observer.observe(el));

    // Trigger a fresh check after route transitions so newly rendered
    // elements animate without requiring a hard refresh.
    requestAnimationFrame(() => {
      targets.forEach((el) => observer.observe(el));
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);
}
