import { useEffect, useRef } from 'react';
import { toastCopy } from '../data/content.js';

export function useAchievementToasts(onToast) {
  const seenRef = useRef(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && !seenRef.current.has(id) && toastCopy[id]) {
            seenRef.current.add(id);
            const [title, caption] = toastCopy[id];
            onToast(title, caption);
          }
        });
      },
      { threshold: 0.5 }
    );
    Object.keys(toastCopy).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onToast]);
}
