import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    const show = (el: HTMLElement) => el.classList.add('visible');

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) show(e.target as HTMLElement); }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => {
      // Elements already in viewport on load
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        show(el);
      } else {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, []);
}
