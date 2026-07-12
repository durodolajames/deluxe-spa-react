import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observed = new WeakSet<Element>();

    if (!('IntersectionObserver' in window)) {
      // Fallback: just show everything immediately
      document.querySelectorAll('.fade-up').forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.15 } // matches the default
    );

    const observeFadeTargets = (root: ParentNode = document) => {
      root.querySelectorAll('.fade-up').forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        observer.observe(el);
      });
    };

    observeFadeTargets();

    // Trigger a fresh check after route transitions so newly rendered
    // elements animate without requiring a hard refresh.
    requestAnimationFrame(() => {
      observeFadeTargets();
    });

    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.classList.contains('fade-up')) {
            if (!observed.has(node)) {
              observed.add(node);
              observer.observe(node);
            }
          }
          observeFadeTargets(node);
        });
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);
}
